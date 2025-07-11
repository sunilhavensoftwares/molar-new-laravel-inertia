import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import FlatpickrInput from '@/Components/FlatpickrInput';
import DataTable from '@/Components/DataTable';
import { useEffect, useRef, useState } from 'react';
import { showSuccessToast, showErrorToast } from '@/Misc/loadToastr';;
import images from '@/Misc/image_map';
import AddDoctor  from "@/Modals/AddDoctor"
export default function Index({ auth }) {
    const { doctors, query} = usePage().props;
    const filtersFormRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});
    const [processing, setProcessing] = useState({});
    // Initialize all your checkbox states here
    const [checked, setChecked] = useState({});
    // Initialize checked state when doctors load/change
    useEffect(() => {
        if (!doctors) return;

        const initChecked = {};
        doctors.data.forEach(doctor => {
            initChecked[doctor.id] = {
                is_visible: !!doctor.is_visible
            };
        });
        setChecked(initChecked);
    }, [doctors]);
    const searchTimeout = useRef(null);

    useEffect(() => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        // Skip firing on empty input if it's the same as what's already in the query
        if (searchQuery === '' && !query?.name) return;

        searchTimeout.current = setTimeout(() => {
            router.get(route(route().current()), {
                ...appliedFilters,
                page: 1,
                perPage: doctors.meta.per_page,
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

        router.get(route(route().current()), {
            page: 1,
            perPage: doctors.meta.per_page,
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
            perPage: doctors.meta.per_page,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const handleToggle = (doctorId, key) => async (e) => {
        const value = e.target.checked;
        setProcessing((prev) => ({ ...prev, [doctorId]: true }));
        setChecked(prev => ({
            ...prev,
            [doctorId]: {
                ...prev[doctorId],
                [key]: value,
            },
        }));
        try {
            const response = await axios.post(`/doctors/${doctorId}/visibility`, {
                [key]: value,
            });
            response.data.success && showSuccessToast(response.data.message);
            !response.data.success && showErrorToast(response.data.message);
        } catch (error) {
            //toastr.error('Error updating visibility:', error);
        } finally {
            setProcessing((prev) => ({ ...prev, [doctorId]: false }));
        }
    };
    const columns = [
        { label: 'ID', key: 'id', thProps: { className: 'min-w-125px' }, 'sort_key': 'doctors.id', 'sortable': 1 },
        { label: 'Doctor', key: 'doctor', thProps: { className: 'min-w-125px' }, 'sort_key': 'doctors.name', 'sortable': 1 },
        { label: 'Phone', key: 'phone', thProps: { className: 'min-w-125px' }, 'sort_key': 'doctors.phone', 'sortable': 1 },
        { label: 'Profile', key: 'profile', thProps: { className: 'min-w-125px' }, 'sort_key': 'doctors.profile', 'sortable': 1 },
        { label: 'Visibility', key: 'visibility', thProps: { className: 'min-w-125px' }, 'sort_key': 'doctors.is_visible', 'sortable': 1 },
        { label: 'Patient Treated', key: 'patient_treated', thProps: { className: 'min-w-125px' } },
        { label: 'Appointments', key: 'appointments', thProps: { className: 'min-w-125px' } },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end min-w-100px' } },
    ];
    const data = doctors.data.map((doctor, index) => (
        {
            id: doctor.id,
            doctor: {
                sortValue: doctor.name.toLowerCase(),
                content: (
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <div className="symbol-label">
                                <img src={doctor.image_url || images.blank_avatar } alt={doctor.name} className="w-100" />
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <Link href={`/doctors/doctor-detail/${doctor.id}`} className="text-gray-800 text-hover-primary mb-1">{doctor.name}</Link>
                            <span>{doctor.email}</span>
                        </div>
                    </div>
                )
            },
            phone: doctor.phone || '',
            profile: doctor.profile && <div className="badge badge-light fw-bold">{doctor.profile}</div>,
            visibility: (
                <div className="form-check form-switch form-check-custom form-check-success form-check-solid">
                    <input
                        disabled={!!processing[doctor.id]}
                        type="checkbox"
                        className="form-check-input"
                        name={`visible_doctor_${doctor.id}`}
                        checked={!!checked[doctor.id]?.is_visible}
                        onChange={handleToggle(doctor.id, 'is_visible')}
                    />
                </div>
            ),
            patient_treated: <div className="badge badge-light fw-bold">12345</div>,
            appointments: <a href="doctors/doctor-detail.php" className="btn btn-info">View</a>,
            status: (
                <div className="form-check form-switch form-check-custom form-check-success form-check-solid">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name={`checkedStatus_${doctor.id}`}
                        checked={!!checked[doctor.id]?.status}
                        onChange={handleToggle(doctor.id, 'status')}
                    />
                </div>
            ),

            actions: (
                <div className="text-end">
                    <a className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        Actions
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                    </a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true">
                        <div className="menu-item px-3">
                            <a href="doctors/doctor-detail.php" className="menu-link px-3">Details</a>
                        </div>


                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_user"
                                data-bs-toggle="modal">Edit</a>
                        </div>

                        <div className="menu-item ">
                            <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_case_edit_permission"
                                data-bs-toggle="modal">Case Edit Access</a>
                        </div>


                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Delete</a>
                        </div>
                    </div>
                </div>
            )
        }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">doctors</h2>}
        >
            <Head title="doctors" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Doctor List</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Doctors</li>

                                    </ul>

                                </div>


                                <div className="d-flex align-items-center gap-2 gap-lg-3">



                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_add_doctor">

                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        Add Doctor
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="card">

                                    <div className="card-header border-0 pt-6">

                                        <div className="card-title">

                                            <div className="d-flex align-items-center position-relative my-1">

                                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                                            transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                        <path
                                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </span>

                                                <input type="text" data-kt-user-table-filter="search"
                                                    className="form-control form-control-solid w-250px ps-14"
                                                    placeholder="Search Doctor" onChange={(e) => setSearchQuery(e.target.value)} />
                                            </div>

                                        </div>


                                        <div className="card-toolbar">

                                            <div className="w-150px me-3">
                                                <button type="button" className="btn btn-light-primary me-3 w-150px"
                                                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">

                                                    <span className="svg-icon svg-icon-2">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    Filter</button>

                                                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">

                                                    <div className="px-7 py-5">
                                                        <div className="fs-5 text-dark fw-bold">Select Filter</div>
                                                    </div>


                                                    <div className="separator border-gray-200"></div>


                                                    <div className="px-7 py-5" data-kt-user-table-filter="form">
                                                        <form onSubmit={applyFilters} ref={filtersFormRef} >
                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-semibold">Date From:</label>
                                                                <FlatpickrInput className="form-control form-control-solid text-center"
                                                                    name="date_from" value={filters.date_from || ''} onChange={(value) => handleFilterChange('date_from')(value)} />
                                                            </div>


                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-semibold">Date To:</label>
                                                                <FlatpickrInput className="form-control form-control-solid text-center"
                                                                    name="date_to" value={filters.date_to || ''} onChange={(value) => handleFilterChange('date_to')(value)} />
                                                            </div>


                                                            <div className="d-flex justify-content-end">
                                                                <button type="reset"
                                                                    className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="reset" onClick={handleFilterReset}>Reset</button>
                                                                <button type="submit" className="btn btn-primary fw-semibold px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="filter">Apply</button>
                                                            </div>
                                                        </form>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">


                                                <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_export_doctors">

                                                    <span className="svg-icon svg-icon-2">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1"
                                                                transform="rotate(90 12.75 4.25)" fill="currentColor" />
                                                            <path
                                                                d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                                                fill="currentColor" />
                                                            <path opacity="0.3"
                                                                d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    Export
                                                </button>

                                            </div>


                                            <div className="d-flex justify-content-end align-items-center d-none"
                                                data-kt-user-table-toolbar="selected">
                                                <div className="fw-bold me-5">
                                                    <span className="me-2" data-kt-user-table-select="selected_count"></span>Selected
                                                </div>
                                                <button type="button" className="btn btn-danger"
                                                    data-kt-user-table-select="delete_selected">Delete Selected</button>
                                            </div>


                                            <div className="modal fade" id="kt_modal_export_doctors" tabIndex="-1" aria-hidden="true">

                                                <div className="modal-dialog modal-dialog-centered mw-650px">

                                                    <div className="modal-content">

                                                        <div className="modal-header">

                                                            <h2 className="fw-bold">Export Doctors</h2>


                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">

                                                                <span className="svg-icon svg-icon-1">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                                                            rx="1" transform="rotate(-45 6 17.3137)"
                                                                            fill="currentColor" />
                                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </div>

                                                        </div>


                                                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                                            <form id="kt_modal_export_doctors_form" className="form" action="#">


                                                                <div className="fv-row mb-10">

                                                                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                        Export Format:</label>


                                                                    <select name="format" data-control="select2"
                                                                        data-placeholder="Select a format" data-hide-search="true"
                                                                        className="form-select form-select-solid fw-bold">
                                                                        <option></option>
                                                                        <option value="excel">Excel</option>
                                                                        <option value="pdf">PDF</option>
                                                                        <option value="cvs">CVS</option>
                                                                        <option value="zip">ZIP</option>
                                                                    </select>

                                                                </div>


                                                                <div className="text-center">
                                                                    <button type="reset" className="btn btn-light me-3"
                                                                        data-bs-dismiss="modal">Discard</button>
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-doctors-modal-action="submit">
                                                                        <span className="indicator-label">Submit</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span
                                                                                className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </form>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>


                                            <AddDoctor/>

                                        </div>

                                    </div>


                                    <div className="card-body py-4">

                                        <DataTable
                                            columns={columns}
                                            data={data}
                                            tableProps={{ className: 'table align-middle table-row-dashed fs-6 gy-5' }}
                                            currentPage={doctors.meta.current_page}
                                            perPage={doctors.meta.per_page}
                                            total={doctors.meta.total}
                                            sortKey={query?.sort}
                                            sortOrder={query?.order}
                                            searchQuery={filters.name}
                                            appliedFilters={appliedFilters}
                                        />


                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="modal fade" id="kt_modal_add_user" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Edit Doctor</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>

                                    </div>

                                </div>


                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                    <form id="kt_modal_add_user_form" className="form" action="#">

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">


                                            <div className="fv-row mb-7">

                                                <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>


                                                <div className="image-input image-input-outline image-input-placeholder"
                                                    data-kt-image-input="true">

                                                    <div className="image-input-wrapper w-125px h-125px"
                                                        style={{ backgroundImage: `url(${images.avatar_300_6})` }} >
                                                    </div>


                                                    <label
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="change" data-bs-toggle="tooltip"
                                                        title="Change avatar">
                                                        <i className="bi bi-pencil-fill fs-7"></i>

                                                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                        <input type="hidden" name="avatar_remove" />

                                                    </label>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="cancel" data-bs-toggle="tooltip"
                                                        title="Cancel avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="remove" data-bs-toggle="tooltip"
                                                        title="Remove avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>

                                                </div>


                                                <div className="form-text">Allowed file types: png, jpg, jpeg.
                                                </div>

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Full
                                                    Name</label>


                                                <input type="text" name="doctor_name"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Email</label>


                                                <input type="email" name="doctor_email"
                                                    className="form-control form-control-solid mb-3 mb-lg-0"
                                                    placeholder="example@domain.com" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Phone</label>


                                                <input type="text" name="doctor_phone"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Password</label>


                                                <input type="Password" name="doctor_password"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Profile</label>


                                                <input type="text" name="doctor_profile"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                        </div>


                                        <div className="text-center pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-doctors-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="modal fade" id="kt_modal_add_case_edit_permission" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Case Edit Permission (Doctor:Emma Smith)</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>

                                </div>


                                <div className="modal-body scroll-y">

                                    <form id="kt_modal_add_case_edit_permission_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Start Time</label>
                                                        <input className="form-control form-control-solid" id="start_time"
                                                            name="start_time" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">End Time</label>
                                                        <input className="form-control form-control-solid" id="end_time"
                                                            name="end_time" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">
                                                    <span className="indicator-label">Submit</span>
                                                </button>
                                            </div>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        </AuthenticatedLayout >
    );
}
