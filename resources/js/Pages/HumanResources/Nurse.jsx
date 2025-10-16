import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import DataTable from '@/Components/DataTable';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './Common/Sidebar';
import AddDoctor from '@/Modals/AddDoctor';
import AddEditHumanResource from "@/Modals/AddEditHumanResource";
import api from '@/Lib/axios';
import { Modal } from 'bootstrap';
import { showSuccessToast, showErrorToast } from '@/Misc/loadToastr';
import DataExport from '@/Components/dataExport';
export default function Nurse({ auth }) {
    const { nurses, query } = usePage().props;
    const [searchQuery, setSearchQuery] = useState('');
    const searchTimeout = useRef(null);
    const [appliedFilters, setAppliedFilters] = useState({});
    const [editHumanResourceData, setEditHumanResourceData] = useState({});
    
    useEffect(() => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        // Skip firing on empty input if it's the same as what's already in the query
        if (searchQuery === '' && !query?.name) return;


        searchTimeout.current = setTimeout(() => {
            router.get(route('human_resources.role', { human_resource: 'nurse' }), {
                ...appliedFilters,
                page: 1,
                perPage: nurses.per_page,
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
    const editHumanResource = async (resourse_name, id) => {
        await api.post(route('human_resources.edit', { human_resource: resourse_name }), { human_resource: resourse_name, id: id }).then((response) => {
            if (response.status === 200) {
                setEditHumanResourceData(response.data);

                const modalEl = document.getElementById('kt_modal_add_edit_human_resource_nurse');
                const modal = new Modal(modalEl);
                modal.show();


            } else {
                showErrorToast(response.data.message);
            }
        })
    }
    const columns = [
        { label: 'ID', key: 'id', thProps: { className: 'min-w-50px ps-4' }, tdProps: { className: 'ps-4' }, 'sort_key': 'nurses.id', 'sortable': 1 },
        { label: 'Name', key: 'name', thProps: { className: 'min-w-150px ps-4' }, tdProps: { className: 'd-flex align-items-center' }, 'sort_key': 'nurses.name', 'sortable': 1 },
        { label: 'Email', key: 'email', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'nurses.email', 'sortable': 1 },
        { label: 'Address', key: 'address', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' } },
        { label: 'Phone', key: 'phone', thProps: { className: 'min-w-80px ps-4' }, tdProps: { className: '' }, 'sort_key': 'nurses.phone', 'sortable': 1 },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end pe-4 min-w-100px' }, tdProps: { className: 'text-end pe-4' } },
    ];

    const data = nurses.data.map((nurse, index) => (
        {
            id: nurse.id || '',
            name: nurse.name || '',
            email: nurse.email || '',
            address: nurse.address || '',
            phone: nurse.phone || '',
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
                    {/*begin::Menu*/}
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true">
                        {/* begin::Menu item */}
                        <div className="menu-item px-3">
                            <a className="menu-link px-3" onClick={() => editHumanResource('nurse', nurse.id)}>Edit</a>
                        </div>
                        {/* end::Menu item */}
                        {/* begin::Menu item */}
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">Delete</a>
                        </div>
                        {/* end::Menu item */}
                    </div>
                    {/*end::Menu*/}
                </>
            )
        }));
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Nurse</h2>}
        >
            <Head title="Nurse" />
            <>
                {/* begin::Main */}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/* begin::Content wrapper */}
                    <div className="d-flex flex-column flex-column-fluid">
                        {/* begin::Toolbar */}
                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                            {/* begin::Toolbar container */}
                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                                {/* begin::Page title */}
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    {/* begin::Title */}
                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Human Resources - Nurse</h1>
                                    {/* end::Title */}
                                    {/* begin::Breadcrumb */}
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/* begin::Item */}
                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>
                                        {/* end::Item */}
                                        {/* begin::Item */}
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/* end::Item */}
                                        {/* begin::Item */}
                                        <li className="breadcrumb-item text-muted">Human Resources</li>
                                        {/* end::Item */}
                                    </ul>
                                    {/* end::Breadcrumb */}
                                </div>
                                {/* end::Page title */}
                            </div>
                            {/* end::Toolbar container */}
                        </div>
                        {/* end::Toolbar */}
                        {/* begin::Content */}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/* begin::Content container */}
                            <div id="kt_app_content_container" className="app-container container-fluid">
                                {/* begin::Navbar */}
                                <div className="card mb-6">
                                    <div className="card-body pt-9 pb-0">
                                        {/* begin::Details */}
                                        <div className="d-flex flex-wrap flex-sm-nowrap">
                                        </div>
                                        {/* end::Details */}
                                        {/* begin::Navs */}
                                        <Sidebar />
                                        {/* begin::Navs */}
                                        {/* begin::Tab Contents */}
                                        <div className="tab-content" id="myTabContent">
                                            {/* begin::Nurse Tab */}
                                            <div className="tab-pane show active" id="kt_tab_pane_1" role="tabpanel">
                                                <div className="card mb-5 mb-xl-10">
                                                    {/* begin::Card header */}
                                                    <div className="card-header">
                                                        {/* begin::Heading */}
                                                        <div className="card-title">
                                                            <h3>Nurse</h3>
                                                        </div>
                                                        {/* end::Heading */}
                                                        {/* begin::Toolbar */}
                                                        <div className="card-toolbar">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_add_edit_human_resource_nurse" className="btn btn-sm btn-primary my-1">Add</a>
                                                        </div>
                                                        {/* end::Toolbar */}
                                                    </div>
                                                    {/* end::Card header */}
                                                    {/* begin::Card */}
                                                    <div className="card border-0">
                                                        {/* begin::Card header */}
                                                        <div className="card-header border-0 pt-6">
                                                            {/* begin::Card title */}
                                                            <div className="card-title">
                                                                {/* begin::Search */}
                                                                <div className="d-flex align-items-center position-relative my-1">
                                                                    {/* begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                                                                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2"
                                                                                rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                                            <path
                                                                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                                fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/* end::Svg Icon */}
                                                                    <input type="text" data-kt-user-table-filter="search"
                                                                        className="form-control form-control-solid w-250px ps-14"
                                                                        placeholder="Search Nurse" onChange={(e) => setSearchQuery(e.target.value)} />
                                                                </div>
                                                                {/* end::Search */}
                                                            </div>
                                                            {/* begin::Card title */}
                                                            {/* begin::Card toolbar */}
                                                            <div className="card-toolbar">
                                                                {/* begin::Toolbar */}
                                                                <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">

                                                                    {/* begin::Export */}
                                                                    <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal"
                                                                        data-bs-target="#kt_modal_export_users">
                                                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr078.svg */}
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
                                                                        {/* end::Svg Icon */}Export
                                                                    </button>
                                                                    {/* end::Export */}
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
                                                                {/* end::Group actions */}
                                                                {/* begin::Modal - Adjust Balance */}
                                                                <div className="modal fade" id="kt_modal_export_users" tabIndex="-1" aria-hidden="true">
                                                                    {/* begin::Modal dialog */}
                                                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                                                        {/* begin::Modal content */}
                                                                        <div className="modal-content">
                                                                            {/* begin::Modal header */}
                                                                            <div className="modal-header">
                                                                                {/* begin::Modal title */}
                                                                                <h2 className="fw-bold">Export Nurse</h2>
                                                                                {/* end::Modal title */}
                                                                                {/* begin::Close */}
                                                                                <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                                    data-bs-dismiss="modal">
                                                                                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
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
                                                                                    {/* end::Svg Icon */}
                                                                                </div>
                                                                                {/* end::Close */}
                                                                            </div>
                                                                            {/* end::Modal header */}
                                                                            {/* begin::Modal body */}
                                                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                                                <DataExport data={nurses.data} resource="nurse" headings={['name','phone','email','address']} />
                                                                            </div>
                                                                            {/* end::Modal body */}
                                                                        </div>
                                                                        {/* end::Modal content */}
                                                                    </div>
                                                                    {/* end::Modal dialog */}
                                                                </div>
                                                                {/* end::Modal - New Card */}
                                                                {/* begin::Modal - Add Doctor */}
                                                                <AddDoctor />
                                                                {/* end::Modal - Add Doctor */}
                                                            </div>
                                                            {/* end::Card toolbar */}
                                                        </div>
                                                        {/* end::Card header */}
                                                        {/* begin::Card body */}
                                                        <div className="card-body py-4">
                                                            <div id="kt_table_users_wrapper" className="dt-container dt-bootstrap5 dt-empty-footer">
                                                                <div id="" className="table-responsive">
                                                                    {/* begin::Table*/}
                                                                    <DataTable
                                                                        columns={columns}
                                                                        data={data}
                                                                        tableProps={{ className: 'table align-middle table-row-dashed fs-6 gy-5' }}
                                                                        currentPage={nurses.current_page}
                                                                        perPage={nurses.per_page}
                                                                        total={nurses.total}
                                                                        sortKey={query?.sort}
                                                                        sortOrder={query?.order}
                                                                        appliedFilters={appliedFilters}
                                                                    />
                                                                    {/* end::Table*/}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end::Card body */}
                                                        {/* end::Card body */}
                                                    </div>
                                                    {/* end::Card */}    </div>

                                            </div>
                                            {/* end::Nurse Tab */}        </div>
                                        {/* end::Tab Contents */}
                                    </div>
                                </div>
                                {/* end::Navbar */}                </div>
                            {/* end::Content container */}
                        </div>
                        {/* end::Content */}
                    </div>
                    {/* end::Content wrapper */}


                    {/* begin::Modal - Set Discount */}
                    <div className="modal fade" id="kt_modal_new_target" tabIndex="-1" aria-hidden="true">
                        {/* begin::Modal dialog */}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                            {/* begin::Modal content */}
                            <div className="modal-content rounded">
                                {/* begin::Modal header */}
                                <div className="modal-header pb-0 border-0 justify-content-end">
                                    {/* begin::Close */}
                                    <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/* end::Svg Icon */}
                                    </div>
                                    {/* end::Close */}
                                </div>
                                {/* begin::Modal header */}
                                {/* begin::Modal body */}
                                <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                                    {/* begin:Form */}
                                    <form id="kt_modal_new_target_form" className="form" action="#">
                                        {/* begin::Heading */}
                                        <div className="mb-13 text-center">
                                            {/* begin::Title */}
                                            <h1 className="mb-3">Set Discount</h1>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Heading */}
                                        {/* begin::Input group */}
                                        <div className="d-flex flex-column mb-8 fv-row">
                                            {/* begin::Label */}
                                            <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span className="required">Discount</span>
                                            </label>
                                            {/* end::Label */}
                                            <input type="text" className="form-control form-control-solid" placeholder="Enter Discount"
                                                name="doctor_discount" />
                                        </div>
                                        {/* end::Input group */}
                                        {/* begin::Actions */}
                                        <div className="text-center">
                                            <button type="reset" data-bs-dismiss="modal" className="btn btn-light me-3">Cancel</button>
                                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>
                                        {/* end::Actions */}
                                    </form>
                                    {/* end:Form */}
                                </div>
                                {/* end::Modal body */}
                            </div>
                            {/* end::Modal content */}
                        </div>
                        {/* end::Modal dialog */}
                    </div>
                    {/* end::Modal - Set Discount */}

                    <AddEditHumanResource resource_name="nurse" editHumanResourceData={editHumanResourceData} onClose={() => setEditHumanResourceData({})} />
                </div>
                {/* end:::Main */}
            </>
        </AuthenticatedLayout>
    )
}