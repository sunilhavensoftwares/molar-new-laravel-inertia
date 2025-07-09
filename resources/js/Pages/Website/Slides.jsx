import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from '@/Components/FlatpickrInput';
import QuillInput from '@/Components/QuillInput';
import images from '@/Misc/image_map';
import Nav from './common/Nav';
const Slides = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Website - Slides</h2>}
        >
            <Head title="Website - Slides" />
            <>
                {/*begin::Main*/}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/*begin::Content wrapper*/}
                    <div className="d-flex flex-column flex-column-fluid">
                        {/*begin::Toolbar*/}
                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                            {/*begin::Toolbar container*/}
                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                                {/*begin::Page title*/}
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    {/*begin::Title*/}
                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Website</h1>
                                    {/*end::Title*/}
                                    {/*begin::Breadcrumb*/}
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item text-muted">Website</li>
                                        {/*end::Item*/}
                                    </ul>
                                    {/*end::Breadcrumb*/}
                                </div>
                                {/*end::Page title*/}
                            </div>
                            {/*end::Toolbar container*/}
                        </div>
                        {/*end::Toolbar*/}
                        {/*begin::Content*/}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/*begin::Content container*/}
                            <div id="kt_app_content_container" className="app-container container-fluid">
                                {/*begin::Navbar*/}
                                <div className="card mb-6">
                                    <div className="card-body pt-9 pb-0">
                                        {/*begin::Details*/}
                                        <div className="d-flex flex-wrap flex-sm-nowrap">
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Navs*/}
                                        <Nav/>
                                        {/*begin::Navs*/}
                                        {/*begin::Tab Contents*/}
                                        <div className="tab-content" id="myTabContent">
                                            {/*begin::Nurse Tab*/}
                                            <div className="tab-pane show active" id="kt_tab_pane_1" role="tabpanel">
                                                <div className="card mb-5 mb-xl-10">
                                                    {/*begin::Card header*/}
                                                    <div className="card-header">
                                                        {/*begin::Heading*/}
                                                        <div className="card-title">
                                                            <h3>Slides</h3>
                                                        </div>
                                                        {/*end::Heading*/}
                                                        {/*begin::Toolbar*/}
                                                        <div className="card-toolbar">
                                                            <a href="#" data-bs-toggle="modal"
                                                                data-bs-target="#kt_modal_add_edit_slide"
                                                                className="btn btn-sm btn-primary my-1">Add</a>
                                                        </div>
                                                        {/*end::Toolbar*/}
                                                    </div>
                                                    {/*end::Card header*/}
                                                    {/*begin::Card*/}
                                                    <div className="card border-0">
                                                        {/*begin::Card header*/}
                                                        <div className="card-header border-0 pt-6">
                                                            {/*begin::Card title*/}
                                                            <div className="card-title">
                                                                {/*begin::Search*/}
                                                                <div className="d-flex align-items-center position-relative my-1">
                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546"
                                                                                height="2" rx="1" transform="rotate(45 17.0365 15.1223)"
                                                                                fill="currentColor" />
                                                                            <path
                                                                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                                fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <input type="text" data-kt-user-table-filter="search"
                                                                        className="form-control form-control-solid w-250px ps-14"
                                                                        placeholder="Search Slides" />
                                                                </div>
                                                                {/*end::Search*/}
                                                            </div>
                                                            {/*begin::Card title*/}
                                                            {/*begin::Card toolbar*/}
                                                            <div className="card-toolbar">
                                                                {/*begin::Toolbar*/}
                                                                <div className="d-flex justify-content-end"
                                                                    data-kt-user-table-toolbar="base">

                                                                    {/*begin::Export*/}
                                                                    <button type="button" className="btn btn-light-primary me-3"
                                                                        data-bs-toggle="modal" data-bs-target="#kt_modal_export_users">
                                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                                                                        <span className="svg-icon svg-icon-2">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <rect opacity="0.3" x="12.75" y="4.25" width="12"
                                                                                    height="2" rx="1" transform="rotate(90 12.75 4.25)"
                                                                                    fill="currentColor" />
                                                                                <path
                                                                                    d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                                                                    fill="currentColor" />
                                                                                <path opacity="0.3"
                                                                                    d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}Export
                                                                    </button>
                                                                    {/*end::Export*/}
                                                                </div>
                                                                {/*end::Toolbar*/}
                                                                {/*begin::Group actions*/}
                                                                <div className="d-flex justify-content-end align-items-center d-none"
                                                                    data-kt-user-table-toolbar="selected">
                                                                    <div className="fw-bold me-5">
                                                                        <span className="me-2"
                                                                            data-kt-user-table-select="selected_count"></span>Selected
                                                                    </div>
                                                                    <button type="button" className="btn btn-danger"
                                                                        data-kt-user-table-select="delete_selected">Delete
                                                                        Selected</button>
                                                                </div>
                                                                {/*end::Group actions*/}
                                                                {/*begin::Modal - Adjust Balance*/}
                                                                <div className="modal fade" id="kt_modal_export_users" tabIndex="-1"
                                                                    aria-hidden="true">
                                                                    {/*begin::Modal dialog*/}
                                                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                                                        {/*begin::Modal content*/}
                                                                        <div className="modal-content">
                                                                            {/*begin::Modal header*/}
                                                                            <div className="modal-header">
                                                                                {/*begin::Modal title*/}
                                                                                <h2 className="fw-bold">Export Slides</h2>
                                                                                {/*end::Modal title*/}
                                                                                {/*begin::Close*/}
                                                                                <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                                    data-bs-dismiss="modal">
                                                                                    {/*begin::Svg Icon | path:
                                                                    icons/duotune/arrows/arr061.svg*/}
                                                                                    <span className="svg-icon svg-icon-1">
                                                                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.5" x="6" y="17.3137"
                                                                                                width="16" height="2" rx="1"
                                                                                                transform="rotate(-45 6 17.3137)"
                                                                                                fill="currentColor" />
                                                                                            <rect x="7.41422" y="6" width="16"
                                                                                                height="2" rx="1"
                                                                                                transform="rotate(45 7.41422 6)"
                                                                                                fill="currentColor" />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </div>
                                                                                {/*end::Close*/}
                                                                            </div>
                                                                            {/*end::Modal header*/}
                                                                            {/*begin::Modal body*/}
                                                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                                                {/*begin::Form*/}
                                                                                <form id="kt_modal_export_users_form" className="form"
                                                                                    action="#">

                                                                                    {/*begin::Input group*/}
                                                                                    <div className="fv-row mb-10">
                                                                                        {/*begin::Label*/}
                                                                                        <label
                                                                                            className="required fs-6 fw-semibold form-label mb-2">Select
                                                                                            Export Format:</label>
                                                                                        {/*end::Label*/}
                                                                                        {/*begin::Input*/}
                                                                                        <Select2Input name="format" data-control="select2"
                                                                                            data-placeholder="Select a format"
                                                                                            data-hide-search="true"
                                                                                            className="form-select form-select-solid fw-bold">
                                                                                            <option></option>
                                                                                            <option defaultValue="excel">Excel</option>
                                                                                            <option defaultValue="pdf">PDF</option>
                                                                                            <option defaultValue="cvs">CVS</option>
                                                                                            <option defaultValue="zip">ZIP</option>
                                                                                        </Select2Input>
                                                                                        {/*end::Input*/}
                                                                                    </div>
                                                                                    {/*end::Input group*/}
                                                                                    {/*begin::Actions*/}
                                                                                    <div className="text-center">
                                                                                        <button type="reset"
                                                                                            className="btn btn-light me-3"
                                                                                            data-bs-dismiss="modal">Discard</button>
                                                                                        <button type="submit"
                                                                                            className="btn btn-primary"
                                                                                            data-kt-users-modal-action="submit">
                                                                                            <span
                                                                                                className="indicator-label">Submit</span>
                                                                                            <span className="indicator-progress">Please
                                                                                                wait...
                                                                                                <span
                                                                                                    className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                                        </button>
                                                                                    </div>
                                                                                    {/*end::Actions*/}
                                                                                </form>
                                                                                {/*end::Form*/}
                                                                            </div>
                                                                            {/*end::Modal body*/}
                                                                        </div>
                                                                        {/*end::Modal content*/}
                                                                    </div>
                                                                    {/*end::Modal dialog*/}
                                                                </div>
                                                                {/*end::Modal - New Card*/}
                                                                <div className="modal fade" id="kt_modal_add_edit_slide" tabIndex="-1"
                                                                    aria-hidden="true">
                                                                    {/*begin::Modal dialog*/}
                                                                    <div className="modal-dialog modal-dialog-centered mw-650px">
                                                                        {/*begin::Modal content*/}
                                                                        <div className="modal-content">
                                                                            {/*begin::Modal header*/}
                                                                            <div className="modal-header" id="kt_modal_add_user_header">
                                                                                {/*begin::Modal title*/}
                                                                                <h2 className="fw-bold">Add/Edit Slide</h2>
                                                                                {/*end::Modal title*/}
                                                                                {/*begin::Close*/}
                                                                                <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                                    data-bs-dismiss="modal">
                                                                                    {/*begin::Svg Icon | path:
                                                                    icons/duotune/arrows/arr061.svg*/}
                                                                                    <span className="svg-icon svg-icon-1">
                                                                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <rect opacity="0.5" x="6" y="17.3137"
                                                                                                width="16" height="2" rx="1"
                                                                                                transform="rotate(-45 6 17.3137)"
                                                                                                fill="currentColor" />
                                                                                            <rect x="7.41422" y="6" width="16"
                                                                                                height="2" rx="1"
                                                                                                transform="rotate(45 7.41422 6)"
                                                                                                fill="currentColor" />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}
                                                                                </div>
                                                                                {/*end::Close*/}
                                                                            </div>
                                                                            {/*end::Modal header*/}
                                                                            {/*begin::Modal body*/}
                                                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                                                                {/*begin::Form*/}
                                                                                <form id="kt_modal_add_user_form" className="form">
                                                                                    {/*begin::Scroll*/}
                                                                                    <div className="d-flex flex-column scroll-y me-n7 pe-7"
                                                                                        id="kt_modal_add_user_scroll"
                                                                                        data-kt-scroll="true"
                                                                                        data-kt-scroll-activate="{default: false, lg: true}"
                                                                                        data-kt-scroll-max-height="auto"
                                                                                        data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                                                                        data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                                                                        data-kt-scroll-offset="300px">
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-7">
                                                                                            {/*begin::Label*/}
                                                                                            <label
                                                                                                className="d-block fw-semibold fs-6 mb-5">Slide
                                                                                                Image</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Image input*/}
                                                                                            <div className="image-input image-input-outline image-input-placeholder"
                                                                                                data-kt-image-input="true">
                                                                                                {/*begin::Preview existing avatar*/}
                                                                                                <div className="image-input-wrapper w-125px h-125px"
                                                                                                    style={{backgroundImage: `url(${images.teeth})`}}>
                                                                                                </div>
                                                                                                {/*end::Preview existing avatar*/}
                                                                                                {/*begin::Label*/}
                                                                                                <label
                                                                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                                                    data-kt-image-input-action="change"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    title="Change avatar">
                                                                                                    <i
                                                                                                        className="bi bi-pencil-fill fs-7"></i>
                                                                                                    {/*begin::Inputs*/}
                                                                                                    <input type="file" name="sld_image"
                                                                                                        accept=".png, .jpg, .jpeg" />
                                                                                                    <input type="hidden"
                                                                                                        name="avatar_remove" />
                                                                                                    {/*end::Inputs*/}
                                                                                                </label>
                                                                                                {/*end::Label*/}
                                                                                                {/*begin::Cancel*/}
                                                                                                <span
                                                                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                                                    data-kt-image-input-action="cancel"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    title="Cancel avatar">
                                                                                                    <i className="bi bi-x fs-2"></i>
                                                                                                </span>
                                                                                                {/*end::Cancel*/}
                                                                                                {/*begin::Remove*/}
                                                                                                <span
                                                                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                                                    data-kt-image-input-action="remove"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    title="Remove avatar">
                                                                                                    <i className="bi bi-x fs-2"></i>
                                                                                                </span>
                                                                                                {/*end::Remove*/}
                                                                                            </div>
                                                                                            {/*end::Image input*/}
                                                                                            {/*begin::Hint*/}
                                                                                            <div className="form-text">Allowed file
                                                                                                types: png, jpg, jpeg.
                                                                                            </div>
                                                                                            {/*end::Hint*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-7">
                                                                                            {/*begin::Label*/}
                                                                                            <label
                                                                                                className="required fw-semibold fs-6 mb-2">Title</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Input*/}
                                                                                            <input type="text" name="sld_title"
                                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                                placeholder="Slide Title" defaultValue="" />
                                                                                            {/*end::Input*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-7">
                                                                                            {/*begin::Label*/}
                                                                                            <label
                                                                                                className="required fw-semibold fs-6 mb-2">Header
                                                                                                Text</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Input*/}
                                                                                            <input type="text" name="sld_header_txt"
                                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                                placeholder="Slide Header Text" />
                                                                                            {/*end::Input*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-7">
                                                                                            {/*begin::Label*/}
                                                                                            <label
                                                                                                className="required fw-semibold fs-6 mb-2">Body
                                                                                                Text</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Input*/}
                                                                                            <input type="text" name="sld_body_txt"
                                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                                placeholder="Slide Body Text" />
                                                                                            {/*end::Input*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-7">
                                                                                            {/*begin::Label*/}
                                                                                            <label
                                                                                                className="required fw-semibold fs-6 mb-2">Footer
                                                                                                Text</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Input*/}
                                                                                            <input type="text" name="sld_footer_txt"
                                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                                placeholder="Slide Footer Text" />
                                                                                            {/*end::Input*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-7">
                                                                                            {/*begin::Label*/}
                                                                                            <label
                                                                                                className="required fw-semibold fs-6 mb-2">Position
                                                                                                (in number)</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Input*/}
                                                                                            <input type="password" name="sld_position"
                                                                                                className="form-control form-control-solid mb-3 mb-lg-0"
                                                                                                placeholder="Position/Order of slide in number" />
                                                                                            {/*end::Input*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                    </div>
                                                                                    {/*end::Scroll*/}
                                                                                    {/*begin::Actions*/}
                                                                                    <div className="text-center pt-15">
                                                                                        <button type="reset"
                                                                                            className="btn btn-light me-3"
                                                                                            data-bs-dismiss="modal">Discard</button>
                                                                                        <button type="submit"
                                                                                            className="btn btn-primary"
                                                                                            data-kt-users-modal-action="submit">
                                                                                            <span
                                                                                                className="indicator-label">Submit</span>
                                                                                            <span className="indicator-progress">Please
                                                                                                wait...
                                                                                                <span
                                                                                                    className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                                        </button>
                                                                                    </div>
                                                                                    {/*end::Actions*/}
                                                                                </form>
                                                                                {/*end::Form*/}
                                                                            </div>
                                                                            {/*end::Modal body*/}
                                                                        </div>
                                                                        {/*end::Modal content*/}
                                                                    </div>
                                                                    {/*end::Modal dialog*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Card toolbar*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body py-4">
                                                            {/*begin::Table*/}
                                                            <table className="table align-middle table-row-dashed fs-6 gy-5"
                                                                id="kt_table_slides">
                                                                {/*begin::Table head*/}
                                                                <thead>
                                                                    {/*begin::Table row*/}
                                                                    <tr
                                                                        className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">

                                                                        <th>ID</th>
                                                                        <th className="min-w-125px">Slide</th>
                                                                        <th className="min-w-125px">Header Text</th>
                                                                        <th className="min-w-125px">Body Text</th>
                                                                        <th className="min-w-125px">Footer Text</th>
                                                                        <th className="min-w-125px">Status</th>
                                                                        <th className="text-end min-w-100px">Actions</th>
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                </thead>
                                                                {/*end::Table head*/}
                                                                {/*begin::Table body*/}
                                                                <tbody className="text-gray-600 fw-semibold">
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        <td>1</td>
                                                                        {/*begin::User=*/}
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar */}
                                                                            <div
                                                                                className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <a href="#">
                                                                                    <div className="symbol-label">
                                                                                        <img src={images.teeth}
                                                                                            alt="slide 1" className="w-100" />
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::User details*/}
                                                                            <div className="d-flex flex-column">
                                                                                <a href="#"
                                                                                    className="text-gray-800 text-hover-primary mb-1">Slide
                                                                                    1</a>
                                                                            </div>
                                                                            {/*begin::User details*/}
                                                                        </td>
                                                                        {/*end::User=*/}
                                                                        {/*begin::Role=*/}
                                                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Role=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Saepe ullam itaque qui quas aliquid velit placeat dolorum
                                                                            numquam inventore doloremque. Obcaecati laborum adipisci
                                                                            sunt voluptas vitae natus veniam facilis nemo?
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            <div
                                                                                className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                                <input className="form-check-input " type="checkbox"
                                                                                    defaultValue="" defaultChecked=""
                                                                                    id="kt_flexSwitchCustomDefault_1_1" />
                                                                            </div>
                                                                        </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </a>
                                                                            {/*begin::Menu*/}
                                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                                data-kt-menu="true">
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3"
                                                                                        data-bs-target="#kt_modal_add_edit_slide"
                                                                                        data-bs-toggle="modal">Edit</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#"
                                                                                        className="menu-link px-3">Delete</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                            </div>
                                                                            {/*end::Menu*/}
                                                                        </td>
                                                                        {/*end::Action=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        <td>2</td>
                                                                        {/*begin::User=*/}
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar */}
                                                                            <div
                                                                                className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <a href="#">
                                                                                    <div className="symbol-label">
                                                                                        <img src={images.teeth}
                                                                                            alt="slide 2" className="w-100" />
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::User details*/}
                                                                            <div className="d-flex flex-column">
                                                                                <a href="#"
                                                                                    className="text-gray-800 text-hover-primary mb-1">Slide
                                                                                    2</a>
                                                                            </div>
                                                                            {/*begin::User details*/}
                                                                        </td>
                                                                        {/*end::User=*/}
                                                                        {/*begin::Role=*/}
                                                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Role=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Saepe ullam itaque qui quas aliquid velit placeat dolorum
                                                                            numquam inventore doloremque. Obcaecati laborum adipisci
                                                                            sunt voluptas vitae natus veniam facilis nemo?
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            <div
                                                                                className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                                <input className="form-check-input " type="checkbox"
                                                                                    defaultValue="" defaultChecked=""
                                                                                    id="kt_flexSwitchCustomDefault_1_1" />
                                                                            </div>
                                                                        </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </a>
                                                                            {/*begin::Menu*/}
                                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                                data-kt-menu="true">
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3"
                                                                                        data-bs-target="#kt_modal_add_edit_slide"
                                                                                        data-bs-toggle="modal">Edit</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#"
                                                                                        className="menu-link px-3">Delete</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                            </div>
                                                                            {/*end::Menu*/}
                                                                        </td>
                                                                        {/*end::Action=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        <td>3</td>
                                                                        {/*begin::User=*/}
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar */}
                                                                            <div
                                                                                className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <a href="#">
                                                                                    <div className="symbol-label">
                                                                                        <img src={images.teeth}
                                                                                            alt="slide 3" className="w-100" />
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::User details*/}
                                                                            <div className="d-flex flex-column">
                                                                                <a href="#"
                                                                                    className="text-gray-800 text-hover-primary mb-1">Slide
                                                                                    3</a>
                                                                            </div>
                                                                            {/*begin::User details*/}
                                                                        </td>
                                                                        {/*end::User=*/}
                                                                        {/*begin::Role=*/}
                                                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Role=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Saepe ullam itaque qui quas aliquid velit placeat dolorum
                                                                            numquam inventore doloremque. Obcaecati laborum adipisci
                                                                            sunt voluptas vitae natus veniam facilis nemo?
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            <div
                                                                                className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                                <input className="form-check-input " type="checkbox"
                                                                                    defaultValue="" defaultChecked=""
                                                                                    id="kt_flexSwitchCustomDefault_1_1" />
                                                                            </div>
                                                                        </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </a>
                                                                            {/*begin::Menu*/}
                                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                                data-kt-menu="true">
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3"
                                                                                        data-bs-target="#kt_modal_add_edit_slide"
                                                                                        data-bs-toggle="modal">Edit</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#"
                                                                                        className="menu-link px-3">Delete</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                            </div>
                                                                            {/*end::Menu*/}
                                                                        </td>
                                                                        {/*end::Action=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                    {/*begin::Table row*/}
                                                                    <tr>
                                                                        <td>4</td>
                                                                        {/*begin::User=*/}
                                                                        <td className="d-flex align-items-center">
                                                                            {/*begin:: Avatar */}
                                                                            <div
                                                                                className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                                                <a href="#">
                                                                                    <div className="symbol-label">
                                                                                        <img src={images.teeth}
                                                                                            alt="slide 4" className="w-100" />
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            {/*end::Avatar*/}
                                                                            {/*begin::User details*/}
                                                                            <div className="d-flex flex-column">
                                                                                <a href="#"
                                                                                    className="text-gray-800 text-hover-primary mb-1">Slide
                                                                                    4</a>
                                                                            </div>
                                                                            {/*begin::User details*/}
                                                                        </td>
                                                                        {/*end::User=*/}
                                                                        {/*begin::Role=*/}
                                                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Role=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Saepe ullam itaque qui quas aliquid velit placeat dolorum
                                                                            numquam inventore doloremque. Obcaecati laborum adipisci
                                                                            sunt voluptas vitae natus veniam facilis nemo?
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            <div
                                                                                className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                                <input className="form-check-input " type="checkbox"
                                                                                    defaultValue="" defaultChecked=""
                                                                                    id="kt_flexSwitchCustomDefault_1_1" />
                                                                            </div>
                                                                        </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </a>
                                                                            {/*begin::Menu*/}
                                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                                data-kt-menu="true">
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3"
                                                                                        data-bs-target="#kt_modal_add_edit_slide"
                                                                                        data-bs-toggle="modal">Edit</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                                {/*begin::Menu item*/}
                                                                                <div className="menu-item px-3">
                                                                                    <a href="#"
                                                                                        className="menu-link px-3">Delete</a>
                                                                                </div>
                                                                                {/*end::Menu item*/}
                                                                            </div>
                                                                            {/*end::Menu*/}
                                                                        </td>
                                                                        {/*end::Action=*/}
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                </tbody>
                                                                {/*end::Table body*/}
                                                            </table>
                                                            {/*end::Table*/}
                                                        </div>
                                                        {/*end::Card body*/}
                                                        {/*end::Card body*/}
                                                    </div>
                                                    {/*end::Card*/}
                                                </div>

                                            </div>
                                            {/*end::Nurse Tab*/}
                                        </div>
                                        {/*end::Tab Contents*/}
                                    </div>
                                </div>
                                {/*end::Navbar*/}
                            </div>
                            {/*end::Content container*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Content wrapper*/}
                </div>
                {/*end:::Main*/}
            </>
        </AuthenticatedLayout>
    )
}

export default Slides