import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import FlatpickrInput from '@/Components/FlatpickrInput';
import Select2Input from '@/Components/Select2Input';
import DataTable from '@/Components/DataTable';
import React, { useEffect, useRef, useState } from 'react';
import images from '@/Misc/image_map'
export default function CaseHistory({ auth }) {
    const { medical_histories,query  } = usePage().props;

    const filtersFormRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});
    const [processing, setProcessing] = useState({});
    const searchTimeout = useRef(null);

    useEffect(() => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        // Skip firing on empty input if it's the same as what's already in the query
        if (searchQuery === '' && !query?.name) return;

        searchTimeout.current = setTimeout(() => {
            router.get(route(route().current()), {
                ...appliedFilters,
                page: 1,
                perPage: medical_histories.meta.per_page,
                sort: query?.sort,
                order: query?.order,
                name: searchQuery || undefined, // don't include empty string in URL
            }, {
                preserveScroll: true,
                preserveState: true,
            });
        }, 400);

        return () => clearTimeout(searchTimeout.current);
    }, [searchQuery]);


    const handleFilterChange = (key) => (value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleFilterReset = () => {
        setFilters({});
        setAppliedFilters({});
        filtersFormRef.current.reset();
        $(filtersFormRef.current).find('input').val(null).trigger('change');
        $(filtersFormRef.current).find('select').val(null).trigger('change');

        router.get(route(route().current()), {
            page: 1,
            perPage: medical_histories.meta.per_page,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const applyFilters = (e) => {
        e.preventDefault();
        setAppliedFilters(filters);

        router.get(route(route().current()), {
            ...filters,
            sort: query?.sort,
            order: query?.order,
            page: 1,
            perPage: medical_histories.meta.per_page,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const handleToggle = (patientId, key) => async (e) => {
        const value = e.target.checked;
        setProcessing((prev) => ({ ...prev, [patientId]: true }));
        setChecked(prev => ({
            ...prev,
            [patientId]: {
                ...prev[patientId],
                [key]: value,
            },
        }));
        try {
            const response = await axios.post(`/patients/${patientId}/visibility`, {
                [key]: value,
            });
            response.data.success && toastr.success(response.data.message);
            !response.data.success && toastr.error(response.data.message);
        } catch (error) {
            toastr.error('Error updating visibility:', error);
        } finally {
            setProcessing((prev) => ({ ...prev, [patientId]: false }));
        }
    };
    const columns = [
        { label: 'ID', key: 'id', thProps: { className: 'min-w-50px ps-4' }, tdProps: { className: 'ps-4' }, 'sort_key': 'medical_histories.id', 'sortable': 1 },
        { label: 'Date', key: 'date', thProps: { className: 'min-w-150px ps-4' }, tdProps: { className: 'd-flex align-items-center' }, 'sort_key': 'medical_histories.email', 'sortable': 1 },
        { label: 'Doctor', key: 'doctor', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'doctors.name', 'sortable': 1 },
        { label: 'Tooth', key: 'tooth', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' } },
        { label: 'Patient', key: 'patient', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'patients.name', 'sortable': 1 },
        { label: 'Category', key: 'category', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'medical_history_categories.name', 'sortable': 1 },
        { label: 'Status', key: 'status', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'medical_history_statuses.name', 'sortable': 1 },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end pe-4 min-w-100px' }, tdProps: { className: 'text-end pe-4' } },
    ];
    const data = medical_histories.data.map((medical_history, index) => (
        {
            id: medical_history.id || '',
            date: medical_history.date_formatted,
            doctor: {
                sortValue: medical_history.doctor.name.toLowerCase(),
                content: (
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <div className="symbol-label">
                                <img src={medical_history.doctor.img_url || images.blank_avatar} alt={medical_history.doctor.name} className="w-100" />
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <Link href={`/doctors/doctor-detail/${medical_history.doctor.id}`} className="text-gray-800 text-hover-primary mb-1">{medical_history.doctor.name}</Link>
                            <span>{medical_history.doctor.phone}</span>
                        </div>
                    </div>
                )
            },
            tooth: medical_history?.teeth?.map(t => t.code).join(', '),
            patient: {
                sortValue: medical_history.patient.name.toLowerCase(),
                content: (
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <div className="symbol-label">
                                <img src={medical_history.patient.img_url || images.blank_avatar} alt={medical_history.patient.name} className="w-100" />
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <Link href={`/patients/patient-detail/${medical_history.patient.id}`} className="text-gray-800 text-hover-primary mb-1">{medical_history.patient.name}</Link>
                            <span>{medical_history.patient.phone}</span>
                        </div>
                    </div>
                )
            },
            category: medical_history.category.name || '',
            status: <span className={`badge fs-7 fw-bold badge-light-${medical_history.medical_history_statuses.color_name}`}>{medical_history.medical_history_statuses.name}</span>,
            actions: (
                <>
                    <a className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end">Actions
                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        {/* end::Svg Icon*/}
                    </a>
                    {/* begin::Menu*/}
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true">

                        {/* begin::Menu item*/}
                        <div className="menu-item">
                            <a href="#" className="menu-link" data-kt-users-table-filter="delete_row">Edit</a>
                        </div>
                        {/* end::Menu item*/}
                        {/* begin::Menu item*/}
                        <div className="menu-item">
                            <a href="#" className="menu-link" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        {/* end::Menu item*/}
                        {/* begin::Menu item*/}
                        <div className="menu-item">
                            <a href="#" className="menu-link" data-kt-users-table-filter="delete_row">Refer To</a>
                        </div>
                        {/* end::Menu item*/}
                        {/* begin::Menu item*/}
                        <div className="menu-item">
                            <a href="#" className="menu-link" data-kt-users-table-filter="delete_row">Set Reminder</a>
                        </div>
                        {/* end::Menu item*/}
                        {/* begin::Menu item*/}
                        <div className="menu-item">
                            <a href="#" className="menu-link" data-kt-users-table-filter="delete_row">Material</a>
                        </div>
                        {/* end::Menu item*/}
                    </div>
                    {/* end::Menu*/}
                </>
            )
        }));
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">patients</h2>} >
            <Head title="patients" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Patient Details</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Patient</li>

                                    </ul>

                                </div>


                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-row">

                                    <Sidebar patient={medical_histories?.patient} />

                                    <div className="w-100 flex-lg-row-fluid mx-lg-13">

                                        <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="btn btn-icon btn-active-color-primary w-30px h-30px"
                                                    id="kt_social_start_sidebar_toggle">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                                                fill="currentColor" />
                                                            <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Case History</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_add_case" className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <DataTable
                                                        columns={columns}
                                                        data={data}
                                                        tableProps={{ className: 'table align-middle table-row-dashed fs-6 gy-5' }}
                                                        currentPage={medical_histories.meta.current_page}
                                                        perPage={medical_histories.meta.per_page}
                                                        total={medical_histories.meta.total}
                                                        sortKey={query?.sort}
                                                        sortOrder={query?.order}
                                                        searchQuery={filters.name}
                                                        appliedFilters={appliedFilters} />

                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="modal fade" id="kt_modal_add_case" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add Case</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>

                                </div>


                                <div className="modal-body scroll-y">

                                    <form id="kt_modal_add_case_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Select Date</label>

                                                        <FlatpickrInput className="form-control form-control-solid" name="date" placeholder="Pick a date"
                                                            id="kt_datepicker_1" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Select Patient </label>


                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Patient"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="john">John</option>
                                                            <option value="zubair">Zubair</option>
                                                            <option value="jass">Jass</option>
                                                            <option value="kaif">Kaif</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Category</label>

                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Category"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="implant">Implant</option>
                                                            <option value="rct">RCT</option>
                                                            <option value="extraction">Extraction</option>
                                                        </Select2Input>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Status</label>


                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Status"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="faisal">In progress</option>
                                                            <option value="saud">Completed</option>
                                                            <option value="ibh">Pending</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>




                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Select Tooth</label>


                                                <Select2Input name="format" data-control="select2" data-placeholder="Select tooth"
                                                    className="form-select form-select-solid fw-bold" data-dropdown-parent="#kt_modal_add_case">
                                                    <option></option>
                                                    <option value="31">#31</option>
                                                    <option value="21">#21</option>
                                                    <option value="11">#11</option>
                                                </Select2Input>

                                            </div>

                                        </div>


                                        <div className="fv-row mb-7">

                                            <label className="required fw-semibold fs-6 mb-2">Description </label>


                                            <textarea name="" className="form-control form-control-lg form-control-solid" rows="5"></textarea>

                                        </div>


                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        </AuthenticatedLayout>
    )
}