import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import images from "@/Misc/image_map";

export default function CaseCategory({ auth }) {
    const { patient } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Patients Case Category</h2>} >
            <Head title="Patients Case Category" />
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
                                        Case Category</h1>
                                    {/* end::Title */}
                                    {/* begin::Breadcrumb */}
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/* begin::Item */}
                                        <li className="breadcrumb-item text-muted">
                                            <a href="dashboard/index.php" className="text-muted text-hover-primary">Home</a>
                                        </li>
                                        {/* end::Item */}
                                        {/* begin::Item */}
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/* end::Item */}
                                        {/* begin::Item */}
                                        <li className="breadcrumb-item text-muted">Case Category</li>
                                        {/* end::Item */}
                                    </ul>
                                    {/* end::Breadcrumb */}
                                </div>
                                {/* end::Page title */}
                                {/* begin::Actions */}
                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    {/* begin::Primary button */}

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_add_category">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr075.svg */}
                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/* end::Svg Icon */}Add
                                    </button>
                                    {/* end::Primary button */}
                                </div>
                                {/* end::Actions */}
                            </div>
                            {/* end::Toolbar container */}
                        </div>
                        {/* end::Toolbar */}
                        {/* begin::Content */}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/* begin::Content container */}
                            <div id="kt_app_content_container" className="app-container container-fluid">
                                {/* begin::Card */}
                                <div className="card">
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
                                                    placeholder="Search Case Category" />
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
                                            <div className="modal modal-sm fade" id="kt_modal_export_users" tabIndex="-1" aria-hidden="true">
                                                {/* begin::Modal dialog */}
                                                <div className="modal-dialog modal-dialog-centered mw-500px">
                                                    {/* begin::Modal content */}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header */}
                                                        <div className="modal-header">
                                                            {/* begin::Modal title */}
                                                            <h2 className="fw-bold">Export</h2>
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
                                                        <div className="modal-body scroll-y ">
                                                            {/* begin::Form */}
                                                            <form id="kt_modal_export_users_form" className="form" action="#">

                                                                {/* begin::Input group */}
                                                                <div className="fv-row mb-10">
                                                                    {/* begin::Label */}
                                                                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                        Export Format:</label>
                                                                    {/* end::Label */}
                                                                    {/* begin::Input */}
                                                                    <select name="format" data-control="select2"
                                                                        data-placeholder="Select a format" data-hide-search="true"
                                                                        className="form-select form-select-solid fw-bold">
                                                                        <option></option>
                                                                        <option defaultValue="excel">Excel</option>
                                                                        <option defaultValue="pdf">PDF</option>
                                                                        <option defaultValue="cvs">CVS</option>
                                                                        <option defaultValue="zip">ZIP</option>
                                                                    </select>
                                                                    {/* end::Input */}
                                                                </div>
                                                                {/* end::Input group */}
                                                                {/* begin::Actions */}
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
                                                                {/* end::Actions */}
                                                            </form>
                                                            {/* end::Form */}
                                                        </div>
                                                        {/* end::Modal body */}
                                                    </div>
                                                    {/* end::Modal content */}
                                                </div>
                                                {/* end::Modal dialog */}
                                            </div>
                                            {/* end::Modal - New Card */}

                                            {/* begin::Modal - Add Patient */}
                                            <div className="modal fade" id="kt_modal_add_category" tabIndex="-1" aria-hidden="true">
                                                {/* begin::Modal dialog */}
                                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                                    {/* begin::Modal content */}
                                                    <div className="modal-content">
                                                        {/* begin::Modal header */}
                                                        <div className="modal-header" id="kt_modal_add_user_header">
                                                            {/* begin::Modal title */}
                                                            <h2 className="fw-bold">Add Category</h2>
                                                            {/* end::Modal title */}
                                                            {/* begin::Close */}
                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">
                                                                <i className="fa fa-close fs-2x"></i>
                                                            </div>
                                                            {/* end::Close */}
                                                        </div>
                                                        {/* end::Modal header */}
                                                        {/* begin::Modal body */}
                                                        <div className="modal-body scroll-y ">
                                                            {/* begin::Form */}
                                                            <form id="kt_modal_add_user_form" className="form" >
                                                                {/* begin::Scroll */}
                                                                <div className="d-flex flex-column scroll-y me-n7 pe-7">

                                                                    {/* begin::Input group */}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label */}
                                                                        <label className="required fw-semibold fs-6 mb-2">Name </label>
                                                                        {/* end::Label */}
                                                                        {/* begin::Input */}
                                                                        <input type="text" name="title"
                                                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                                                            placeholder="Title" />
                                                                        {/* end::Input */}
                                                                    </div>
                                                                    {/* end::Input group */}

                                                                    {/* begin::Input group */}
                                                                    <div className="fv-row mb-7">
                                                                        {/* begin::Label */}
                                                                        <label className="required fw-semibold fs-6 mb-2">Image</label>
                                                                        {/* end::Label */}
                                                                        <div className="dropzone" id="kt_dropzonejs_example_1">
                                                                            {/* begin::Message */}
                                                                            <div className="dz-message needsclick">
                                                                                <i className="ki-duotone ki-file-up fs-3x text-primary"><span className="path1"></span><span className="path2"></span></i>

                                                                                {/* begin::Info */}
                                                                                <div className="ms-4">
                                                                                    <h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                                    <span className="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
                                                                                </div>
                                                                                {/* end::Info */}
                                                                            </div>
                                                                        </div>
                                                                        {/* end::Dropzone */}
                                                                    </div>
                                                                    {/* end::Input group */}
                                                                </div>
                                                                {/* end::Scroll */}
                                                                {/* begin::Actions */}
                                                                <div className="text-center pt-15">
                                                                    <button type="reset" className="btn btn-light me-3"
                                                                        data-bs-dismiss="modal">Discard</button>
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-users-modal-action="submit">
                                                                        <span className="indicator-label">Submit</span>
                                                                    </button>
                                                                </div>
                                                                {/* end::Actions */}
                                                            </form>
                                                            {/* end::Form */}
                                                        </div>
                                                        {/* end::Modal body */}
                                                    </div>
                                                    {/* end::Modal content */}
                                                </div>
                                                {/* end::Modal dialog */}
                                            </div>
                                            {/* end::Modal - Add Patient */}
                                        </div>
                                        {/* end::Card toolbar */}
                                    </div>
                                    {/* end::Card header */}
                                    {/* begin::Card body */}
                                    <div className="card-body py-4">
                                        <div id="" className="table-responsive">
                                            {/* begin::Table */}
                                            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                                {/* begin::Table head */}
                                                <thead>
                                                    {/* begin::Table row */}
                                                    <tr className="text-start text-muted fw-bold fs-7 text-uppercase bg-light gs-0">
                                                        <th className="min-w-100px ps-4">ID</th>
                                                        <th className="min-w-125px">Name</th>
                                                        <th className="min-w-125px">Image</th>
                                                        <th className="min-w-125px">Status</th>
                                                        <th className="text-center min-w-90px">Actions</th>
                                                    </tr>
                                                    {/* end::Table row */}
                                                </thead>
                                                {/* end::Table head */}
                                                {/* begin::Table body */}
                                                <tbody className="text-gray-600 fw-semibold">
                                                    <tr>
                                                        {/* begin::Checkbox */}
                                                        <td className="ps-4">
                                                            1
                                                        </td>
                                                        {/* end::Checkbox */}
                                                        {/* begin::Customer= */}
                                                        <td>
                                                            <span className="text-gray-800 text-hover-primary mb-1">Implant</span>
                                                        </td>
                                                        {/* end::Customer= */}
                                                        {/* begin::Status= */}
                                                        <td>
                                                            <div className="symbol symbol-60px">
                                                                <img src={images.rct} className="rounded mw-40" alt="4645646" />
                                                            </div>
                                                        </td>
                                                        {/* end::Status= */}
                                                        {/* begin::Billing= */}
                                                        <td>
                                                            <div className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                <input className="form-check-input " type="checkbox" defaultValue="" defaultChecked id="kt_flexSwitchCustomDefault_1_1" />
                                                            </div>
                                                        </td>
                                                        {/* end::Billing= */}

                                                        {/* begin::Action= */}
                                                        <td className="text-center">

                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/* begin::Svg Icon | path: icons/duotune/art/art005.svg */}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/* end::Svg Icon */}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/* begin::Svg Icon | path: icons/duotune/general/gen027.svg */}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/* end::Svg Icon */}
                                                            </a>
                                                        </td>
                                                        {/* end::Action= */}
                                                    </tr>

                                                    <tr>
                                                        {/* begin::Checkbox */}
                                                        <td className="ps-4">
                                                            2
                                                        </td>
                                                        {/* end::Checkbox */}
                                                        {/* begin::Customer= */}
                                                        <td>
                                                            <span className="text-gray-800 text-hover-primary mb-1">RCT</span>
                                                        </td>
                                                        {/* end::Customer= */}
                                                        {/* begin::Status= */}
                                                        <td>
                                                            <div className="symbol symbol-60px">
                                                                <img src={images.implant} className="rounded mw-40" alt="4645646" />
                                                            </div>
                                                        </td>
                                                        {/* end::Status= */}
                                                        {/* begin::Billing= */}
                                                        <td>
                                                            <div className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                <input className="form-check-input " type="checkbox" defaultValue="" defaultChecked id="kt_flexSwitchCustomDefault_1_1" />
                                                            </div>
                                                        </td>
                                                        {/* end::Billing= */}

                                                        {/* begin::Action= */}
                                                        <td className="text-center">

                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/* begin::Svg Icon | path: icons/duotune/art/art005.svg */}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/* end::Svg Icon */}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/* begin::Svg Icon | path: icons/duotune/general/gen027.svg */}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/* end::Svg Icon */}
                                                            </a>
                                                        </td>
                                                        {/* end::Action= */}
                                                    </tr>

                                                </tbody>
                                                {/* end::Table body */}
                                            </table>
                                            {/* end::Table */}
                                        </div>
                                    </div>
                                    {/* end::Card body */}
                                </div>
                                {/* end::Card */}
                            </div>
                            {/* end::Content container */}
                        </div>
                        {/*  end::Content  */}
                    </div>
                    {/*  end::Content wrapper  */}
                </div>
                {/* end:::Main */}
            </>
        </AuthenticatedLayout>
    )
}