import FlatpickrInput from "@/Components/FlatpickrInput"
import Select2Input from "@/Components/Select2Input"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import AddAppointmentModal from "@/Modals/AddAppointmentModal"
import { Head, Link, usePage, router } from "@inertiajs/react"
import images from '@/Misc/image_map';
import AddDoctor from '@/Modals/AddDoctor';
import AddPatient from "@/Modals/AddPatient"
import DataTable from '@/Components/DataTable';
import React, { useEffect, useRef, useState } from 'react';
export default function Request({ auth }) {
    const appointment_status_class_list = {
        'unconfirmed': 'badge-light-danger',
        'confirmed': 'badge-light-success',
        'cancelled': 'badge-light-danger',
        'treated': 'badge-light-success',
        'requested': 'badge-light-info',
        'pending': 'badge-light-warning'
    };
    const { appointments, query } = usePage().props;

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
                perPage: appointments.meta.per_page,
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
            perPage: appointments.meta.per_page,
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
            perPage: appointments.meta.per_page,
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
        { label: 'ID', key: 'id', thProps: { className: 'min-w-50px ps-4' }, tdProps: { className: 'ps-4' }, 'sort_key': 'appointments.id', 'sortable': 1 },
        { label: 'Patient', key: 'patient', thProps: { className: 'min-w-150px ps-4' }, tdProps: { className: 'd-flex align-items-center' }, 'sort_key': 'patients.name', 'sortable': 1 },
        { label: 'Doctor', key: 'doctor', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'doctors.name', 'sortable': 1 },
        { label: 'Due', key: 'due', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' } },
        { label: 'Date-Time', key: 'date_time', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'appointments.appointment_date', 'sortable': 1 },
        { label: 'Counter-Time', key: 'counter_time', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' } },
        { label: 'Remarks', key: 'remarks', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'appointments.remarks', 'sortable': 1 },
        { label: 'Doctor Total Time', key: 'doctor_time', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' } },
        { label: 'Status', key: 'status', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'appointments.status', 'sortable': 1 },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end pe-4 min-w-100px' }, tdProps: { className: 'text-end pe-4' } },
    ];
    const data = appointments.data.map((appointment, index) => (
        {
            id: appointment.id || '',
            patient: {
                sortValue: appointment.patient.name.toLowerCase(),
                content: (
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                            <Link href={`/patients/patient-detail/${appointment.patient.id}`} className="text-gray-800 text-hover-primary mb-1">{appointment.patient.name}</Link>
                            <span>{appointment.patient.phone}</span>
                        </div>
                    </div>
                )
            },
            doctor: {
                sortValue: appointment.doctor.name.toLowerCase(),
                content: (
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-column">
                            <Link href={`/doctors/doctor-detail/${appointment.doctor.id}`} className="text-gray-800 text-hover-primary mb-1">{appointment.doctor.name}</Link>
                            <span>{appointment.doctor.phone}</span>
                        </div>
                    </div>
                )
            },
            due: '',
            date_time: (
                <>
                    <span className="badge badge-light">{appointment.appointment_date_formatted}</span>
                    <span className="badge badge-light-success fs-7 fw-bold">{appointment.s_time_formatted} - {appointment.e_time_formatted}</span>
                </>
            ),
            counter_time: '',
            remarks: (
                <span className="d-block" data-bs-placement="left" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={appointment.remarks}>
                    <div>
                        {appointment.remarks.length > 20 ? `${appointment.remarks.substring(0, 20)}...` : appointment.remarks}
                    </div>
                </span>
            ),
            doctor_time: '',
            status: <span className={`badge fs-7 fw-bold ${appointment_status_class_list[appointment.status_formatted]}`}>{appointment.status_formatted}</span>,
            actions: (
                <>

                    <a className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end">Actions
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    fill="currentColor"></path>
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}
                    </a>
                    <a className="btn btn-light btn-active-light-primary btn-sm"
                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        {/* end::Svg Icon*/}
                    </a>
                    {/* begin::Menu*/}
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 "
                        data-kt-menu="true">
                        {/* begin::Menu item*/}
                        <div className="menu-item px-3">
                            <a href="patient/detail.php" className="menu-link px-3">History</a>
                        </div>
                        {/* end::Menu item*/}
                        {/* begin::Menu item*/}
                        <div className="menu-item px-3">
                            <a data-bs-toggle="modal" data-bs-target="#modal_add_appointment"
                                className="menu-link px-3">Edit</a>
                        </div>
                        {/* end::Menu item*/}
                        {/* begin::Menu item*/}
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Delete</a>
                        </div>
                        {/* end::Menu item*/}
                    </div>
                    {/* end::Menu*/}
                </>
            )
        }));
    return (
        <AuthenticatedLayout user={auth} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Requested Appointments</h2>}>
            <Head title="Requested Appointments" />
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
                                        Requested Appointments</h1>
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
                                        <li className="breadcrumb-item text-muted">Appointments</li>
                                        {/* end::Item*/}
                                    </ul>
                                    {/* end::Breadcrumb*/}
                                </div>
                                {/* end::Page title*/}
                                {/* begin::Actions*/}
                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    {/* begin::Primary button*/}

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#modal_add_appointment">
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
                                                    className="form-control form-control-solid w-250px ps-14" placeholder="Search user" />
                                            </div>
                                            {/* end::Search*/}
                                        </div>
                                        {/* begin::Card title*/}
                                        {/* begin::Card toolbar*/}
                                        <div className="card-toolbar ">
                                            {/* begin::Toolbar*/}
                                            <div className="d-flex flex-wrap justify-content-end gap-3" data-kt-user-table-toolbar="base">

                                                {/* begin::Doctor Filter*/}
                                                <div className="w-100 w-md-150px">
                                                    <button type="button" className="btn btn-light-primary me-3 w-150px"
                                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        {/* begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                                        <span className="svg-icon svg-icon-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                                    fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                        {/* end::Svg Icon*/}Filter</button>
                                                    {/* begin::Menu 1*/}
                                                    <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                                        {/* begin::Header*/}
                                                        <div className="px-7 py-5">
                                                            <div className="fs-5 text-dark fw-bold">Select Filter</div>
                                                        </div>
                                                        {/* end::Header*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator border-gray-200"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Content*/}
                                                        <div className="px-7 py-5" data-kt-user-table-filter="form">
                                                            {/* begin::Input group*/}
                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-semibold">Doctor:</label>
                                                                <Select2Input className="form-select form-select-solid fw-bold"
                                                                    data-kt-select2="true" data-placeholder="Select option"
                                                                    data-allow-clear="true" data-kt-user-table-filter="role"
                                                                    data-hide-search="true">
                                                                    <option></option>
                                                                    <option defaultValue="Administrator">Faisal</option>
                                                                    <option defaultValue="Analyst">Ahmad</option>
                                                                    <option defaultValue="Developer">Saud</option>
                                                                    <option defaultValue="Support">Zyan</option>
                                                                </Select2Input>
                                                            </div>
                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-semibold">Date:</label>
                                                                <FlatpickrInput type="text"
                                                                    className="form-control form-control-solid kt_datepicker_1" name="date" />
                                                            </div>
                                                            {/* end::Input group*/}
                                                            {/* begin::Actions*/}
                                                            <div className="d-flex justify-content-end">
                                                                <button type="reset"
                                                                    className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="reset">Reset</button>
                                                                <button type="submit" className="btn btn-primary fw-semibold px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="filter">Apply</button>
                                                            </div>
                                                            {/* end::Actions*/}
                                                        </div>
                                                        {/* end::Content*/}
                                                    </div>
                                                    {/* end::Menu 1*/}
                                                </div>
                                                {/* end::Doctor Filter*/}
                                                {/* begin::Doctor Filter*/}
                                                <div className="w-100 w-md-150px">
                                                    {/* begin::Export*/}
                                                    <button type="button" className="btn btn-light-primary me-3 w-150px"
                                                        data-bs-toggle="modal" data-bs-target="#kt_modal_export_users">
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
                                                {/* begin::Doctor Filter*/}
                                            </div>
                                            {/* end::Toolbar*/}

                                            {/* end::Modal - Add Appointment */}

                                        </div>
                                        {/* end::Card toolbar*/}
                                        {/* begin::Group actions*/}
                                        <div className="d-flex justify-content-end align-items-center d-none"
                                            data-kt-user-table-toolbar="selected">
                                            <div className="fw-bold me-5">
                                                <span className="me-2" data-kt-user-table-select="selected_count"></span>Selected
                                            </div>
                                            <button type="button" className="btn btn-danger"
                                                data-kt-user-table-select="delete_selected">Delete Selected</button>
                                        </div>
                                        {/* end::Group actions*/}
                                        {/* begin::Modal - Adjust Balance*/}
                                        <div className="modal fade" id="kt_modal_export_users" tabIndex="-1" aria-hidden="true">
                                            {/* begin::Modal dialog*/}
                                            <div className="modal-dialog modal-dialog-centered mw-500px">
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
                                                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                        transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                                    <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                        transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon*/}
                                                        </div>
                                                        {/* end::Close*/}
                                                    </div>
                                                    {/* end::Modal header*/}
                                                    {/* begin::Modal body*/}
                                                    <div className="modal-body scroll-y">
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
                                                                    <option defaultValue="excel">Excel</option>
                                                                    <option defaultValue="pdf">PDF</option>
                                                                    <option defaultValue="cvs">CVS</option>
                                                                    <option defaultValue="zip">ZIP</option>
                                                                </Select2Input>
                                                                {/* end::Input*/}
                                                            </div>
                                                            {/* end::Input group*/}
                                                            {/* begin::Actions*/}
                                                            <div className="text-center">
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
                                        {/* end::Modal - New Card*/}
                                        {/* begin::Modal - Add Appointment*/}
                                        <AddAppointmentModal />
                                        {/* end::Modal - Add Appointment*/}
                                        {/* begin::Modal - Add Patient*/}
                                        <AddPatient />
                                        {/* end::Modal - Add Patient*/}

                                        {/* begin::Modal - Add Patient*/}
                                        <div className="modal fade" id="kt_modal_add_temporary_patient" tabIndex="-1" aria-hidden="true">
                                            {/* begin::Modal dialog*/}
                                            <div className="modal-dialog modal-dialog-centered mw-650px">
                                                {/* begin::Modal content*/}
                                                <div className="modal-content">
                                                    {/* begin::Modal header*/}
                                                    <div className="modal-header" id="kt_modal_add_user_header">
                                                        {/* begin::Modal title*/}
                                                        <h2 className="fw-bold">Add Temporary</h2>
                                                        {/* end::Modal title*/}
                                                        {/* begin::Close*/}
                                                        <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                            data-bs-dismiss="modal">
                                                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                                            <span className="svg-icon svg-icon-1">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                        transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                                    <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                        transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/* end::Svg Icon*/}
                                                        </div>
                                                        {/* end::Close*/}
                                                    </div>
                                                    {/* end::Modal header*/}
                                                    {/* begin::Modal body*/}
                                                    <div className="modal-body scroll-y">
                                                        {/* begin::Form*/}
                                                        <form id="kt_modal_edit_user_form" className="form" >
                                                            {/* begin::Scroll*/}
                                                            <div className="d-flex flex-column scroll-y me-n7 pe-7"
                                                                id="kt_modal_add_user_scroll" data-kt-scroll="true"
                                                                data-kt-scroll-activate="{default: false, lg: true}"
                                                                data-kt-scroll-max-height="auto"
                                                                data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                                                data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                                                data-kt-scroll-offset="300px">

                                                                {/* begin::Input group*/}
                                                                <div className="fv-row mb-7">
                                                                    {/* begin::Label*/}
                                                                    <label className="required fw-semibold fs-6 mb-2">Full
                                                                        Name</label>
                                                                    {/* end::Label*/}
                                                                    {/* begin::Input*/}
                                                                    <input type="text" name="temporary_patient_name"
                                                                        className="form-control form-control-solid mb-3 mb-lg-0"
                                                                        placeholder="Full name" />
                                                                    {/* end::Input*/}
                                                                </div>
                                                                {/* end::Input group*/}
                                                                {/* begin::Input group*/}
                                                                <div className="fv-row mb-7">
                                                                    {/* begin::Label*/}
                                                                    <label className="required fw-semibold fs-6 mb-2">
                                                                        Phone</label>
                                                                    {/* end::Label*/}
                                                                    {/* begin::Input*/}
                                                                    <input type="text" name="temporary_patient_name"
                                                                        className="form-control form-control-solid mb-3 mb-lg-0"
                                                                        placeholder="Phone" />
                                                                    {/* end::Input*/}
                                                                </div>
                                                                {/* end::Input group*/}
                                                            </div>
                                                            {/* end::Scroll*/}
                                                            {/* begin::Actions*/}
                                                            <div className="text-center pt-15">
                                                                <button type="reset" className="btn btn-light me-3"
                                                                    data-bs-dismiss="modal">Discard</button>
                                                                <button type="submit" className="btn btn-primary"
                                                                    data-kt-users-modal-action="submit">
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
                                        {/* end::Modal - Add Patient*/}
                                    </div>
                                    {/* end::Card header*/}
                                    {/* begin::Card body*/}
                                    <div className="card-body py-4">
                                        <div className="table-responsive">
                                            {/* begin::Table*/}
                                            <DataTable
                                                columns={columns}
                                                data={data}
                                                tableProps={{ className: 'table align-middle table-row-dashed fs-6 gy-5' }}
                                                currentPage={appointments.meta.current_page}
                                                perPage={appointments.meta.per_page}
                                                total={appointments.meta.total}
                                                sortKey={query?.sort}
                                                sortOrder={query?.order}
                                                searchQuery={filters.name}
                                                appliedFilters={appliedFilters} />
                                            {/* end::Table*/}
                                        </div>
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

                    {/* begin::Modal - Add Doctor*/}
                    <AddDoctor />
                    {/* end::Modal - Add Doctor*/} {/* begin::Modal - Add Patient*/}
                    <AddPatient />
                    {/* end::Modal - Add Patient*/}

                    {/* begin::Modal - Add Patient*/}
                    <div className="modal fade" id="kt_modal_add_temporary_patient" tabIndex="-1" aria-hidden="true">
                        {/* begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                            {/* begin::Modal content*/}
                            <div className="modal-content">
                                {/* begin::Modal header*/}
                                <div className="modal-header" id="kt_modal_add_user_header">
                                    {/* begin::Modal title*/}
                                    <h2 className="fw-bold">Add Temporary</h2>
                                    {/* end::Modal title*/}
                                    {/* begin::Close*/}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/* end::Svg Icon*/}
                                    </div>
                                    {/* end::Close*/}
                                </div>
                                {/* end::Modal header*/}
                                {/* begin::Modal body*/}
                                <div className="modal-body scroll-y">
                                    {/* begin::Form*/}
                                    <form id="kt_modal_edit_user_form" className="form" >
                                        {/* begin::Scroll*/}
                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">

                                            {/* begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                {/* begin::Label*/}
                                                <label className="required fw-semibold fs-6 mb-2">Full
                                                    Name</label>
                                                {/* end::Label*/}
                                                {/* begin::Input*/}
                                                <input type="text" name="temporary_patient_name"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />
                                                {/* end::Input*/}
                                            </div>
                                            {/* end::Input group*/}
                                            {/* begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                {/* begin::Label*/}
                                                <label className="required fw-semibold fs-6 mb-2">
                                                    Phone</label>
                                                {/* end::Label*/}
                                                {/* begin::Input*/}
                                                <input type="text" name="temporary_patient_name"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Phone" />
                                                {/* end::Input*/}
                                            </div>
                                            {/* end::Input group*/}
                                        </div>
                                        {/* end::Scroll*/}
                                        {/* begin::Actions*/}
                                        <div className="text-center pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
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
                    {/* end::Modal - Add Patient*/}
                </div>
                {/* end:::Main*/}
            </>
        </AuthenticatedLayout>
    )
}