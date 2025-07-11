import { Head, usePage, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Select2Input from "@/Components/Select2Input";
import FlatpickrInput from "@/Components/FlatpickrInput";
import DataTable from '@/Components/DataTable';
import React, { useEffect, useRef, useState } from 'react';
import images from '@/Misc/image_map'
export default function CaseList({ auth }) {
    const { medical_histories,query} = usePage().props;
  
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
        { label: 'ID', key: 'id', thProps: { className: 'min-w-50px ps-4' },tdProps: { className: 'ps-4' }, 'sort_key': 'medical_histories.id', 'sortable': 1 },
        { label: 'Date', key: 'date', thProps: { className: 'min-w-150px ps-4' },tdProps: { className: 'd-flex align-items-center' }, 'sort_key': 'medical_histories.email', 'sortable': 1 },
        { label: 'Doctor', key: 'doctor', thProps: { className: 'min-w-80px ps-4' },tdProps: { className: '' }, 'sort_key': 'doctors.name', 'sortable': 1 },
        { label: 'Tooth', key: 'tooth', thProps: { className: 'min-w-80px ps-4' },tdProps: { className: '' } },
        { label: 'Patient', key: 'patient', thProps: { className: 'min-w-80px ps-4' },tdProps: { className: '' }, 'sort_key': 'patients.name', 'sortable': 1 },
        { label: 'Category', key: 'category', thProps: { className: 'min-w-80px ps-4' },tdProps: { className: '' }, 'sort_key': 'medical_history_categories.name', 'sortable': 1 },
        { label: 'Status', key: 'status', thProps: { className: 'min-w-80px ps-4' },tdProps: { className: '' }, 'sort_key': 'medical_history_statuses.name', 'sortable': 1 },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end pe-4 min-w-100px' },tdProps: { className: 'text-end pe-4' } },
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Patients- Case List</h2>} >
            <Head title="Patients- Case List" />
            <>
                {/* begin::Main*/}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/* begin::Content wrapper*/}
                    <div className="d-flex flex-column flex-column-fluid">
                        {/* begin::Toolbar*/}
                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                            {/* begin::Toolbar container*/}
                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                                {/* begin::Page title*/}
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    {/* begin::Title*/}
                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Case List</h1>
                                    {/* end::Title*/}
                                    {/* begin::Breadcrumb*/}
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/* begin::Item*/}
                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>
                                        {/* end::Item*/}
                                        {/* begin::Item*/}
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/* end::Item*/}
                                        {/* begin::Item*/}
                                        <li className="breadcrumb-item text-muted">Case list</li>
                                        {/* end::Item*/}
                                    </ul>
                                    {/* end::Breadcrumb*/}
                                </div>
                                {/* end::Page title*/}
                                {/* begin::Actions*/}
                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    {/* begin::Primary button*/}

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_add_case">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/* end::Svg Icon*/}Add
                                    </button>
                                    {/* end::Primary button*/}
                                </div>
                                {/* end::Actions*/}
                            </div>
                            {/* end::Toolbar container*/}
                        </div>
                        {/* end::Toolbar*/}
                        {/* begin::Content*/}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/* begin::Content container*/}
                            <div id="kt_app_content_container" className="app-container container-fluid">
                                {/* begin::Card*/}
                                <div className="card">
                                    {/* begin::Card header*/}
                                    <div className="card-header border-0 pt-6">
                                        {/* begin::Card title*/}
                                        <div className="card-title">
                                            {/* begin::Search*/}
                                            <div className="d-flex align-items-center position-relative my-1">
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
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
                                                {/* end::Svg Icon*/}
                                                <input type="text" data-kt-user-table-filter="search"
                                                    className="form-control form-control-solid w-250px ps-14" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
                                            </div>
                                            {/* end::Search*/}
                                        </div>
                                        {/* begin::Card title*/}
                                        {/* begin::Card toolbar*/}
                                        <div className="card-toolbar">
                                            {/* begin::Toolbar*/}
                                            <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">

                                                {/* begin::Export*/}
                                                <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_export_users">
                                                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
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
                                                    {/* end::Svg Icon*/}Export
                                                </button>
                                                {/* end::Export*/}
                                            </div>
                                            {/* end::Toolbar */}
                                            {/* begin::Group actions */}
                                            <div className="d-flex justify-content-end align-items-center d-none"
                                                data-kt-user-table-toolbar="selected">
                                                <div className="fw-bold me-5">
                                                    <span className="me-2" data-kt-user-table-select="selected_count"></span>Selected
                                                </div>
                                                <button type="button" className="btn btn-danger"
                                                    data-kt-user-table-select="delete_selected">Delete Selected</button>
                                            </div>
                                            {/* end::Group actions*/}
                                            {/* begin::Modal - Adjust Balance */}
                                            <div className="modal fade" id="kt_modal_export_users" aria-hidden="true">
                                                {/* begin::Modal dialog*/}
                                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                                    {/* begin::Modal content*/}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header*/}
                                                        <div className="modal-header">
                                                            {/* begin::Modal title*/}
                                                            <h2 className="fw-bold">Export</h2>
                                                            {/* end::Modal title*/}
                                                            {/* begin::Close*/}
                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">
                                                                {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                                <span className="svg-icon svg-icon-1">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                                                            rx="1" transform="rotate(-45 6 17.3137)"
                                                                            fill="currentColor" />
                                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                            transform="rotate(457.414226)" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/* end::Svg Icon*/}
                                                            </div>
                                                            {/* end::Close*/}
                                                        </div>
                                                        {/* end::Modal header*/}
                                                        {/* begin::Modal body*/}
                                                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                            {/* begin::Form*/}
                                                            <form id="kt_modal_export_users_form" className="form" action="#">

                                                                {/* begin::Input group*/}
                                                                <div className="fv-row mb-10">
                                                                    {/* begin::Label*/}
                                                                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                        Export Format:</label>
                                                                    {/* end::Label*/}
                                                                    {/* begin::Input*/}
                                                                    <Select2Input name="format" data-control="select2"
                                                                        data-placeholder="Select a format" data-hide-search="true"
                                                                        className="form-select form-select-solid fw-bold">
                                                                        <option></option>
                                                                        <option value="excel">Excel</option>
                                                                        <option value="pdf">PDF</option>
                                                                        <option value="cvs">CVS</option>
                                                                        <option value="zip">ZIP</option>
                                                                    </Select2Input>
                                                                    {/* end::Input*/}
                                                                </div>
                                                                {/* end::Input group*/}
                                                                {/* begin::Actions*/}
                                                                <div className="text-end">
                                                                    <button type="reset" className="btn btn-light me-3"
                                                                        data-bs-dismiss="modal">Discard</button>
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-users-modal-action="submit">
                                                                        <span className="indicator-label">Submit</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span
                                                                                className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>
                                                                {/* end::Actions*/}
                                                            </form>
                                                            {/* end::Form*/}
                                                        </div>
                                                        {/* end::Modal body*/}
                                                    </div>
                                                    {/* end::Modal content*/}
                                                </div>
                                                {/* end::Modal dialog*/}
                                            </div>
                                            {/* end::Modal New Card*/}

                                            {/* begin::Modal Case Refer */}
                                            <div className="modal fade" id="modal_case_refer" tabIndex="-1">
                                                {/* begin::Modal dialog*/}
                                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                                    {/* begin::Modal content*/}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header*/}
                                                        <div className="modal-header" id="kt_modal_add_user_header">
                                                            {/* begin::Modal title*/}
                                                            <h2 className="fw-bold">Case Refer</h2>
                                                            {/* end::Modal title*/}
                                                            {/* begin::Close*/}
                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">
                                                                <i className="fa fa-close fs-2x"></i>
                                                            </div>
                                                            {/* end::Close*/}
                                                        </div>
                                                        {/* end::Modal header*/}
                                                        {/* begin::Modal body*/}
                                                        <div className="modal-body scroll-y">
                                                            {/* begin::Form*/}
                                                            <form id="kt_modal_add_user_form" className="form" >
                                                                {/* begin::Scroll*/}
                                                                <div className="d-flex flex-column scroll-y me-n7 pe-7">
                                                                    {/* begin::Input group*/}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label*/}
                                                                        <label className="required fw-semibold fs-6 mb-2">Select Doctor
                                                                        </label>
                                                                        {/* end::Label*/}
                                                                        {/* begin::Input*/}
                                                                        <Select2Input name="format" data-control="select2"
                                                                            data-placeholder="Select Doctor"
                                                                            className="form-select form-select-solid fw-bold"
                                                                            data-dropdown-parent="#modal_case_refer">
                                                                            <option></option>
                                                                            <option value="faisal">Faisal</option>
                                                                            <option value="saud">Saud</option>
                                                                            <option value="ibh">Ibrahim</option>
                                                                            <option value="zis">Zishan</option>
                                                                        </Select2Input>
                                                                        {/* end::Input*/}
                                                                    </div>
                                                                    {/* end::Input group*/}
                                                                </div>
                                                                {/* end::Scroll*/}
                                                                {/* begin::Actions*/}
                                                                <div className="text-end">
                                                                    <button type="reset" className="btn btn-light me-3"
                                                                        data-bs-dismiss="modal">Discard</button>
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-users-modal-action="submit">
                                                                        <span className="indicator-label">submit</span>
                                                                    </button>
                                                                </div>
                                                                {/* end::Actions*/}
                                                            </form>
                                                            {/* end::Form*/}
                                                        </div>
                                                        {/* end::Modal body*/}
                                                    </div>
                                                    {/* end::Modal content*/}
                                                </div>
                                                {/* end::Modal dialog*/}
                                            </div>
                                            {/* end::Modal Case Refer */}

                                            {/* begin::Modal Set Reminder */}
                                            <div className="modal fade" id="modal_set_reminder" tabIndex="-1">
                                                {/* begin::Modal dialog*/}
                                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                                    {/* begin::Modal content*/}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header*/}
                                                        <div className="modal-header" id="kt_modal_add_user_header">
                                                            {/* begin::Modal title*/}
                                                            <h2 className="fw-bold">Set Reminder</h2>
                                                            {/* end::Modal title*/}
                                                            {/* begin::Close*/}
                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">
                                                                <i className="fa fa-close fs-2x"></i>
                                                            </div>
                                                            {/* end::Close*/}
                                                        </div>
                                                        {/* end::Modal header*/}
                                                        {/* begin::Modal body*/}
                                                        <div className="modal-body scroll-y">
                                                            {/* begin::Form*/}
                                                            <form id="kt_modal_add_user_form" className="form" >
                                                                {/* begin::Scroll*/}
                                                                <div className="d-flex flex-column scroll-y me-n7 pe-7">

                                                                    {/* begin::Input group*/}
                                                                    <div className="fv-row mb-7">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                {/* begin::Label*/}
                                                                                <label className="required fw-semibold fs-6 mb-2">Select
                                                                                    Date</label>
                                                                                {/* end::Label*/}
                                                                                <input className="form-control form-control-solid"
                                                                                    name="date" placeholder="Pick a date"
                                                                                    id="kt_datepicker_1" />
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                {/* begin::Label*/}
                                                                                <label className="required fw-semibold fs-6 mb-2">Select
                                                                                    Time</label>
                                                                                {/* end::Label*/}
                                                                                <input className="form-control form-control-solid ps-12"
                                                                                    name="date" placeholder="Pick a date" type="time" />
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    {/* end::Input group*/}
                                                                    {/* begin::Input group*/}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label*/}
                                                                        <label className="required fw-semibold fs-6 mb-2">Notification
                                                                            Type</label>
                                                                        {/* end::Label*/}
                                                                        {/* begin::Input*/}
                                                                        <Select2Input name="format" data-control="select2"
                                                                            data-placeholder="Select notification"
                                                                            className="form-select form-select-solid fw-bold"
                                                                            data-dropdown-parent="#modal_set_reminder">
                                                                            <option value=""></option>
                                                                            <option value="desktop">Desktop</option>
                                                                            <option value="sms">SMS</option>
                                                                            <option value="both">Both</option>
                                                                        </Select2Input>
                                                                        {/* end::Input*/}
                                                                    </div>
                                                                    {/* end::Input group*/}
                                                                    {/* begin::Input group*/}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label*/}
                                                                        <label className="required fw-semibold fs-6 mb-2">Message</label>
                                                                        {/* end::Label*/}
                                                                        {/* begin::Input*/}
                                                                        <textarea name="message"
                                                                            className="form-control form-control-lg form-control-solid"
                                                                            rows="4"></textarea>
                                                                        {/* end::Input*/}
                                                                    </div>
                                                                    {/* end::Input group*/}
                                                                </div>
                                                                {/* end::Scroll*/}
                                                                {/* begin::Actions*/}
                                                                <div className="text-end">
                                                                    <button type="reset" className="btn btn-light me-3"
                                                                        data-bs-dismiss="modal">Discard</button>
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-users-modal-action="submit">
                                                                        <span className="indicator-label">submit</span>
                                                                    </button>
                                                                </div>
                                                                {/* end::Actions*/}
                                                            </form>
                                                            {/* end::Form*/}
                                                        </div>
                                                        {/* end::Modal body*/}
                                                    </div>
                                                    {/* end::Modal content*/}
                                                </div>
                                                {/* end::Modal dialog*/}
                                            </div>
                                            {/* end::Modal Case Refer */}

                                            {/* begin::Modal Add Material */}
                                            <div className="modal fade" id="modal_add_material" tabIndex="-1">
                                                {/* begin::Modal dialog */}
                                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                                    {/* begin::Modal content*/}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header*/}
                                                        <div className="modal-header">
                                                            {/* begin::Modal title*/}
                                                            <h2 className="fw-bold">Add Material</h2>
                                                            {/* end:: Modal title */}
                                                            {/* begin::Close*/}
                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">
                                                                <i className="fa fa-close fs-2x"></i>
                                                            </div>
                                                            {/* end::Close*/}
                                                        </div>
                                                        {/* end::Modal header*/}
                                                        {/* begin::Form*/}
                                                        <form id="kt_modal_add_user_form" className="form" >
                                                            {/* begin::Modal body*/}
                                                            <div className="modal-body">

                                                                {/* begin::Scroll*/}
                                                                <div className="d-flex flex-column ">

                                                                    {/* begin::Input group*/}
                                                                    <div className="card bg-secondary">
                                                                        <div className="card-body">
                                                                            <div className="fv-row mb-7">
                                                                                <div className="row">
                                                                                    <div className="col-md-6">
                                                                                        {/* begin::Label*/}
                                                                                        <label
                                                                                            className="required fw-semibold fs-6 mb-2">Select
                                                                                            Material</label>
                                                                                        {/* end::Label*/}
                                                                                        {/* begin::Input*/}
                                                                                        <Select2Input name="format" data-control="select2"
                                                                                            data-placeholder="Select"
                                                                                            className="form-select form-select-solid fw-bold"
                                                                                            data-dropdown-parent="#modal_add_material">
                                                                                            <option value=""></option>
                                                                                            <option value="glubs">Glubs</option>
                                                                                            <option value="syringe">Syringe</option>
                                                                                            <option value="amoxy">Amoxy</option>
                                                                                        </Select2Input>
                                                                                        {/* end::Input */}
                                                                                    </div>
                                                                                    <div className="col-md-6">
                                                                                        {/* begin::Label */}
                                                                                        <label
                                                                                            className="required fw-semibold fs-6 mb-2">Number</label>
                                                                                        {/* end::Label*/}
                                                                                        <input type="text"
                                                                                            data-kt-user-table-filter="search"
                                                                                            className="form-control form-control-solid"
                                                                                            placeholder="Search" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* end::Input group*/}

                                                                    <div className="fv-row mt-5 mb-5">
                                                                        <div className="text-end">
                                                                            <button className="btn btn-warning">Add More</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* end::Scroll*/}


                                                            </div>
                                                            {/* end::Modal body*/}
                                                            <div className="modal-footer">
                                                                {/* begin::Actions*/}
                                                                <div className="text-center">
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-users-modal-action="submit">
                                                                        <span className="indicator-label">submit</span>
                                                                    </button>
                                                                </div>
                                                                {/* end::Actions*/}
                                                            </div>
                                                        </form>
                                                        {/* end::Form*/}
                                                    </div>
                                                    {/* end::Modal content*/}
                                                </div>
                                                {/* end::Modal dialog */}
                                            </div>
                                            {/* end::Modal Add Material */}

                                            {/* begin::Modal Send Feedback */}
                                            <div className="modal fade" id="modal_send_feedback" tabIndex="-1">
                                                {/* begin::Modal dialog*/}
                                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                                    {/* begin::Modal content*/}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header*/}
                                                        <div className="modal-header" id="kt_modal_add_user_header">
                                                            {/* begin::Modal title*/}
                                                            <h2 className="fw-bold">Send Feedback</h2>
                                                            {/* end::Modal title*/}
                                                            {/* begin::Close*/}
                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">
                                                                <i className="fa fa-close fs-2x"></i>
                                                            </div>
                                                            {/* end::Close*/}
                                                        </div>
                                                        {/* end::Modal header*/}
                                                        {/* begin::Form*/}
                                                        <form className="form" >
                                                            {/* begin::Modal body*/}
                                                            <div className="modal-body scroll-y">

                                                                {/* begin::Scroll*/}
                                                                <div className="d-flex flex-column scroll-y me-n7 pe-7">

                                                                    {/* begin::Input group*/}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label*/}
                                                                        <label className="required fw-semibold fs-6 mb-2">Template</label>
                                                                        {/* end::Label*/}
                                                                        {/* begin::Input*/}
                                                                        <Select2Input name="format" data-control="select2"
                                                                            data-placeholder="Search for Templates"
                                                                            className="form-select form-select-solid fw-bold"
                                                                            data-dropdown-parent="#modal_send_feedback">
                                                                            <option value=""></option>
                                                                            <option value="desktop">Template1</option>
                                                                            <option value="sms">Template2</option>
                                                                            <option value="both">Template3</option>
                                                                        </Select2Input>
                                                                        {/* end::Input*/}
                                                                    </div>
                                                                    {/* end::Input group*/}
                                                                    {/* begin::Input group*/}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label*/}
                                                                        <label className="required fw-semibold fs-6 mb-2">Message</label>
                                                                        {/* end::Label*/}
                                                                        {/* begin::Input*/}
                                                                        <textarea name="message"
                                                                            className="form-control form-control-lg form-control-solid"
                                                                            rows="7"></textarea>
                                                                        {/* end::Input*/}
                                                                    </div>
                                                                    {/* end::Input group*/}
                                                                </div>
                                                                {/* end::Scroll*/}

                                                            </div>
                                                            {/* end::Modal body*/}
                                                            <div className="modal-footer">
                                                                {/* begin::Actions*/}
                                                                <div className="text-end">
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-users-modal-action="submit">
                                                                        <span className="indicator-label">submit</span>
                                                                    </button>
                                                                </div>
                                                                {/* end::Actions*/}
                                                            </div>
                                                        </form>
                                                        {/* end::Form */}
                                                    </div>
                                                    {/* end::Modal content */}
                                                </div>
                                                {/* end::Modal dialog*/}
                                            </div>
                                            {/* end::Modal Send Feedback */}


                                        </div>

                                        {/* end::Card toolbar */}
                                    </div>
                                    {/* end::Card header*/}
                                    {/* begin::Card body*/}
                                    <div className="card-body py-4">
                                        {/* begin::Table*/}
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
                                        {/* end::Table*/}
                                    </div>
                                    {/* end::Card body*/}
                                </div>
                                {/* end::Card*/}
                            </div>
                            {/* end::Content container*/}
                        </div>
                        {/* end::Content */}
                    </div>
                    {/* end::Content wrapper */}

                    <div className="modal fade" id="kt_modal_add_case" aria-hidden="true">
                        {/* begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                            {/* begin::Modal content*/}
                            <div className="modal-content">
                                {/* begin::Modal header*/}
                                <div className="modal-header">
                                    {/* begin::Modal title*/}
                                    <h2 className="fw-bold">Add Case</h2>
                                    {/* end::Modal title*/}
                                    {/* begin::Close*/}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>
                                    {/* end::Close*/}
                                </div>
                                {/* end::Modal header*/}
                                {/* begin::Modal body*/}
                                <div className="modal-body scroll-y">
                                    {/* begin::Form*/}
                                    <form id="kt_modal_add_case_form" className="form" >
                                        {/* begin::Scroll*/}
                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">

                                            {/* begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        {/* begin::Label*/}
                                                        <label className="required fw-semibold fs-6 mb-2">Select Date</label>
                                                        {/* end::Label*/}
                                                        <FlatpickrInput className="form-control form-control-solid" name="date"
                                                            placeholder="Pick a date" id="kt_datepicker_1" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Select Patient </label>
                                                        {/* end::Label*/}
                                                        {/* begin::Input*/}
                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Patient"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="john">John</option>
                                                            <option value="zubair">Zubair</option>
                                                            <option value="jass">Jass</option>
                                                            <option value="kaif">Kaif</option>
                                                        </Select2Input>
                                                        {/* end::Input*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end::Input group*/}
                                            {/* begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        {/* begin::Label*/}
                                                        <label className="required fw-semibold fs-6 mb-2">Category</label>
                                                        {/* end::Label*/}
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
                                                        {/* end::Label*/}
                                                        {/* begin::Input*/}
                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Status"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="faisal">In progress</option>
                                                            <option value="saud">Completed</option>
                                                            <option value="ibh">Pending</option>
                                                        </Select2Input>
                                                        {/* end::Input*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end::Input group*/}


                                            {/* begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                {/* begin::Label*/}
                                                <label className="required fw-semibold fs-6 mb-2">Title</label>
                                                {/* end::Label*/}
                                                {/* begin::Input*/}
                                                <input type="text" name="tooth" className="form-control form-control-lg form-control-solid" />
                                                {/* end::Input*/}
                                            </div>
                                            {/* end::Input group */}
                                        </div>
                                        {/* end::Scroll*/}
                                        {/* begin::Input group*/}
                                        <div className="fv-row mb-7">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Description </label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <textarea name="" className="form-control form-control-lg form-control-solid"
                                                rows="5"></textarea>
                                            {/* end::Input*/}
                                        </div>
                                        {/* end::Input group*/}
                                        {/* begin::Actions*/}
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>
                                        {/* end::Actions*/}
                                    </form>
                                    {/* end::Form*/}
                                </div>
                                {/* end::Modal body*/}
                            </div>
                            {/* end::Modal content*/}
                        </div>
                        {/* end::Modal dialog*/}
                    </div>
                </div>
                {/* end:::Main*/}
            </>
        </AuthenticatedLayout>
    )
}