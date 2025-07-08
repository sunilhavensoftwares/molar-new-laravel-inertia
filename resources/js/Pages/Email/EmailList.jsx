import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from "@/Components/FlatpickrInput"
import CKEditor from "@/Components/CKEditor"
import DataTable from '@/Components/DataTable';
import { useEffect, useRef, useState } from 'react';
import AddPrescription from '@/Modals/AddPrescription'
import AddPatient from "@/Modals/AddPatient"
import AddDoctor from "@/Modals/AddDoctor"
import images from '@/Misc/image_map';
import Navbar from '@/Pages/Report/common/Navbar'
import QuillInput from '@/Components/QuillInput'
export default function Index({ auth }) {

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report
        </h2>}
        >

            <Head title="Report - User Activity Report" />
            <>
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
                                        Sent Emails</h1>
                                    {/*end::Title*/}
                                    {/*begin::Breadcrumb*/}
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item text-muted">
                                            <a href="dashboard/index.php" className="text-muted text-hover-primary">Home</a>
                                        </li>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item text-muted">emails</li>
                                        {/*end::Item*/}
                                    </ul>
                                    {/*end::Breadcrumb*/}
                                </div>
                                {/*end::Page title*/}
                                {/*begin::Actions*/}
                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    {/*begin::Primary button*/}

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_compose_email">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}Add New
                                    </button>
                                    {/*end::Primary button*/}
                                </div>
                                {/*end::Actions*/}
                            </div>
                            {/*end::Toolbar container*/}
                        </div>
                        {/*end::Toolbar*/}
                        {/*begin::Content*/}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/*begin::Content container*/}
                            <div id="kt_app_content_container" className="app-container container-fluid">
                                {/*begin::Inbox App - Messages */}
                                <div className="d-flex flex-column flex-lg-row">
                                    {/*begin::Content*/}
                                    <div className="flex-lg-row-fluid">
                                        {/*begin::Card*/}
                                        <div className="card">
                                            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                                                {/*begin::Actions*/}
                                                <div className="d-flex align-items-center flex-wrap gap-2">
                                                    {/*begin::Search*/}
                                                    <div className="d-flex align-items-center position-relative">
                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                                                        <span className="svg-icon svg-icon-2 position-absolute ms-4">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2"
                                                                    rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                                <path
                                                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                    fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                        {/*end::Svg Icon*/}
                                                        <input type="text" data-kt-inbox-listing-filter="search"
                                                            className="form-control form-control-sm form-control-solid mw-100 min-w-125px min-w-lg-150px min-w-xxl-200px ps-12"
                                                            placeholder="Search Emails" />
                                                    </div>
                                                    {/*end::Search*/}
                                                </div>
                                                {/*end::Actions*/}
                                            </div>
                                            <div className="card-body p-0">
                                                {/*begin::Table*/}
                                                <table className="table table-hover table-row-dashed fs-6 gy-5 my-0" id="kt_inbox_listing">
                                                    {/*begin::Table head*/}
                                                    {/*end::Table head*/}
                                                    {/*begin::Table body*/}
                                                    <tbody>
                                                        <tr>
                                                            <td className="ps-9">
                                                                {/*begin::Checkbox*/}
                                                                <div
                                                                    className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                    <input className="form-check-input" type="checkbox" defaultValue="1" />
                                                                </div>
                                                                {/*end::Checkbox*/}
                                                            </td>
                                                            {/*begin::Author*/}
                                                            <td className="w-150px w-md-175px">
                                                                <a href="email/detail.php" className="d-flex align-items-center text-dark">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px me-3">
                                                                        <div className="symbol-label bg-light-danger">
                                                                            <span className="text-danger">M</span>
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Name*/}
                                                                    <span className="fw-semibold">Melody Macy</span>
                                                                    {/*end::Name*/}
                                                                </a>
                                                            </td>
                                                            {/*end::Author*/}
                                                            {/*begin::Title*/}
                                                            <td>
                                                                <div className="text-dark mb-1">
                                                                    {/*begin::Heading*/}
                                                                    <a href="email/detail.php" className="text-dark">
                                                                        <span className="fw-bold">Digital PPV Customer
                                                                            Confirmation</span>
                                                                        <span className="fw-bold d-none d-md-inine">-</span>
                                                                        <span className="d-none d-md-inine text-muted">Thank you for
                                                                            ordering UFC 240 Holloway vs Edgar Alternate camera
                                                                            angles...</span>
                                                                    </a>
                                                                    {/*end::Heading*/}
                                                                </div>

                                                            </td>
                                                            {/*end::Title*/}
                                                            {/*begin::Date*/}
                                                            <td className="w-100px text-end fs-7 pe-9">
                                                                <span className="fw-semibold">8:30 PM</span>
                                                            </td>
                                                            {/*end::Date*/}
                                                        </tr>
                                                        <tr>
                                                            <td className="ps-9">
                                                                {/*begin::Checkbox*/}
                                                                <div
                                                                    className="form-check form-check-sm form-check-custom form-check-solid mt-3">
                                                                    <input className="form-check-input" type="checkbox" defaultValue="1" />
                                                                </div>
                                                                {/*end::Checkbox*/}
                                                            </td>
                                                            {/*begin::Author*/}
                                                            <td className="w-150px w-md-175px">
                                                                <a href="email/detail.php" className="d-flex align-items-center text-dark">
                                                                    {/*begin::Avatar*/}
                                                                    <div className="symbol symbol-35px me-3">
                                                                        <div className="symbol-label bg-light-danger">
                                                                            <span className="text-danger">M</span>
                                                                        </div>
                                                                    </div>
                                                                    {/*end::Avatar*/}
                                                                    {/*begin::Name*/}
                                                                    <span className="fw-semibold">Manya</span>
                                                                    {/*end::Name*/}
                                                                </a>
                                                            </td>
                                                            {/*end::Author*/}
                                                            {/*begin::Title*/}
                                                            <td>
                                                                <div className="text-dark mb-1">
                                                                    {/*begin::Heading*/}
                                                                    <a href="email/detail.php" className="text-dark">
                                                                        <span className="fw-bold">Digital PPV Customer
                                                                            Confirmation</span>
                                                                        <span className="fw-bold d-none d-md-inine">-</span>
                                                                        <span className="d-none d-md-inine text-muted">Thank you for
                                                                            ordering UFC 240 Holloway vs Edgar Alternate camera
                                                                            angles...</span>
                                                                    </a>
                                                                    {/*end::Heading*/}
                                                                </div>

                                                            </td>
                                                            {/*end::Title*/}
                                                            {/*begin::Date*/}
                                                            <td className="w-100px text-end fs-7 pe-9">
                                                                <span className="fw-semibold">8:30 PM</span>
                                                            </td>
                                                            {/*end::Date*/}
                                                        </tr>
                                                    </tbody>
                                                    {/*end::Table body*/}
                                                </table>
                                                {/*end::Table*/}
                                            </div>
                                        </div>
                                        {/*end::Card*/}
                                    </div>
                                    {/*end::Content*/}
                                </div>
                                {/*end::Inbox App - Messages */}
                            </div>
                            {/*end::Content container*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/* end::Content wrapper */}



                    <div className="modal fade" id="kt_modal_compose_email" tabIndex="-1" aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                            {/*begin::Modal content*/}
                            <div className="modal-content">
                                {/*begin::Modal header*/}
                                <div className="modal-header" id="kt_modal_compose_email_header">
                                    {/*begin::Modal title*/}
                                    <h2 className="fw-bold">Compose Message</h2>
                                    {/*end::Modal title*/}
                                    {/*begin::Close*/}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </div>
                                    {/*end::Close*/}
                                </div>
                                {/*end::Modal header*/}
                                {/*begin::Modal body*/}
                                <div className="modal-body p-0">
                                    <div id="kt_app_content_container">
                                        {/*begin::Inbox App - Messages */}
                                        <div className="d-flex flex-column flex-lg-row">
                                            {/*begin::Content*/}
                                            <div className="flex-lg-row-fluid">
                                                {/*begin::Card*/}
                                                <div>
                                                    <div className="card-body p-0">
                                                        {/*begin::Form*/}
                                                        <form id="kt_inbox_compose_form">
                                                            {/*begin::Body*/}
                                                            <div className="d-block">
                                                                {/*begin::To*/}
                                                                <div className="align-items-center border-bottom px-8 min-h-50px">
                                                                    {/*begin::Label*/}
                                                                    <div className="text-dark fw-bold w-75px mt-2">To:</div>
                                                                    {/*end::Label*/}
                                                                    <div className="mt-3">
                                                                        <div className="fv-row mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div
                                                                                        className="form-check form-check-custom form-check-solid form-check-sm">
                                                                                        <input className="form-check-input mail_to"
                                                                                            name="send_mail" type="radio"
                                                                                            defaultValue="all_patient" id="all_patient" />
                                                                                        <label className="form-check-label"
                                                                                            htmlFor="all_patient">
                                                                                            All Patient
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fv-row mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div
                                                                                        className="form-check form-check-custom form-check-solid form-check-sm">
                                                                                        <input className="form-check-input mail_to"
                                                                                            name="send_mail" type="radio"
                                                                                            defaultValue="all_doctor" id="all_doctor" />
                                                                                        <label className="form-check-label"
                                                                                            htmlFor="all_doctor">
                                                                                            All Doctors
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fv-row mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div
                                                                                        className="form-check form-check-custom form-check-solid form-check-sm">
                                                                                        <input className="form-check-input mail_to"
                                                                                            name="send_mail" type="radio" defaultValue="donor"
                                                                                            id="donor" />
                                                                                        <label className="form-check-label" htmlFor="donor">
                                                                                            Donor
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="blood_groups_list_parent my-2"
                                                                                        style={{display: 'none'}}>
                                                                                        <label>
                                                                                            Select Blood Group
                                                                                        </label>
                                                                                        <select className="form-control m-bot15"
                                                                                            name="blood_groups" defaultValue=""
                                                                                            autoComplete="off">
                                                                                            <option defaultValue="A+"> A+ </option>
                                                                                            <option defaultValue="A-"> A- </option>
                                                                                            <option defaultValue="B+"> B+ </option>
                                                                                            <option defaultValue="B-"> B- </option>
                                                                                            <option defaultValue="AB+"> AB+ </option>
                                                                                            <option defaultValue="AB-"> AB- </option>
                                                                                            <option defaultValue="O+"> O+ </option>
                                                                                            <option defaultValue="O-"> O- </option>
                                                                                        </select>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fv-row mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div
                                                                                        className="form-check form-check-custom form-check-solid form-check-sm">
                                                                                        <input className="form-check-input mail_to"
                                                                                            name="send_mail" type="radio"
                                                                                            defaultValue="single_patient"
                                                                                            id="single_patient" />
                                                                                        <label className="form-check-label"
                                                                                            htmlFor="single_patient">
                                                                                            Single Patient
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="fv-row mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div
                                                                                        className="form-check form-check-custom form-check-solid form-check-sm">
                                                                                        <input className="form-check-input mail_to"
                                                                                            name="send_mail" type="radio" defaultValue="others"
                                                                                            id="others" />
                                                                                        <label className="form-check-label" htmlFor="others">
                                                                                            Others
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="radio other my-2" style={{display: 'none'}}>
                                                                                    <label>
                                                                                        Email Address
                                                                                    </label>
                                                                                    <input type="email" name="other_email" defaultValue=""
                                                                                        className="form-control" autoComplete="off"
                                                                                        placeholder="Enter email address" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                {/*end::To*/}
                                                                {/*begin::CC*/}
                                                                <div className="d-none align-items-center border-bottom ps-8 pe-5 min-h-50px"
                                                                    data-kt-inbox-form="cc">
                                                                    {/*begin::Label*/}
                                                                    <div className="text-dark fw-bold w-75px">Cc:</div>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input type="text"
                                                                        className="form-control form-control-transparent border-0"
                                                                        name="compose_cc" defaultValue="" data-kt-inbox-form="tagify" />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Close*/}
                                                                        <span className="btn btn-clean btn-xs btn-icon"
                                                                            data-kt-inbox-form="cc_close">
                                                                            <i className="la la-close"></i>
                                                                        </span>
                                                                        {/*end::Close*/}
                                                                </div>
                                                                {/*end::CC*/}
                                                                {/*begin::BCC*/}
                                                                <div className="d-none align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-50px"
                                                                    data-kt-inbox-form="bcc">
                                                                    {/*begin::Label*/}
                                                                    <div className="text-dark fw-bold w-75px">Bcc:</div>
                                                                    {/*end::Label*/}
                                                                    {/*begin::Input*/}
                                                                    <input type="text"
                                                                        className="form-control form-control-transparent border-0"
                                                                        name="compose_bcc" defaultValue="" data-kt-inbox-form="tagify" />
                                                                        {/*end::Input*/}
                                                                        {/*begin::Close*/}
                                                                        <span className="btn btn-clean btn-xs btn-icon"
                                                                            data-kt-inbox-form="bcc_close">
                                                                            <i className="la la-close"></i>
                                                                        </span>
                                                                        {/*end::Close*/}
                                                                </div>
                                                                {/*end::BCC*/}
                                                                {/*begin::Subject*/}
                                                                <div className="border-bottom">
                                                                    <input
                                                                        className="form-control form-control-transparent border-0 px-8 min-h-45px"
                                                                        name="compose_subject" placeholder="Subject" />
                                                                </div>
                                                                {/*end::Subject*/}
                                                                {/*begin::Message*/}
                                                                <QuillInput id="kt_compose_email_editor" className="bg-transparent border-0 h-350px" />
                                                                {/*end::Message*/}
                                                                {/*begin::Attachments*/}
                                                                <div className="dropzone dropzone-queue px-8 py-4"
                                                                    id="kt_inbox_reply_attachments" data-kt-inbox-form="dropzone">
                                                                    <div className="dropzone-items">
                                                                        <div className="dropzone-item" style={{display: 'none'}}>
                                                                            {/*begin::Dropzone filename*/}
                                                                            <div className="dropzone-file">
                                                                                <div className="dropzone-filename"
                                                                                    title="some_image_file_name.jpg">
                                                                                    <span
                                                                                        data-dz-name="">some_image_file_name.jpg</span>
                                                                                    <strong>(
                                                                                        <span data-dz-size="">340kb</span>)</strong>
                                                                                </div>
                                                                                <div className="dropzone-error" data-dz-errormessage="">
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Dropzone filename*/}
                                                                            {/*begin::Dropzone progress*/}
                                                                            <div className="dropzone-progress">
                                                                                <div className="progress">
                                                                                    <div className="progress-bar bg-primary"
                                                                                        role="progressbar" aria-valuemin="0"
                                                                                        aria-valuemax="100" aria-valuenow="0"
                                                                                        data-dz-uploadprogress=""></div>
                                                                                </div>
                                                                            </div>
                                                                            {/*end::Dropzone progress*/}
                                                                            {/*begin::Dropzone toolbar*/}
                                                                            <div className="dropzone-toolbar">
                                                                                <span className="dropzone-delete" data-dz-remove="">
                                                                                    <i className="bi bi-x fs-1"></i>
                                                                                </span>
                                                                            </div>
                                                                            {/*end::Dropzone toolbar*/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*end::Attachments*/}
                                                            </div>
                                                            {/*end::Body*/}
                                                            {/*begin::Footer*/}
                                                            <div className="d-flex flex-stack flex-wrap gap-2 py-5 ps-8 pe-5 border-top">
                                                                {/*begin::Actions*/}
                                                                <div className="d-flex align-items-center me-3">
                                                                    {/*begin::Send*/}
                                                                    <div className="btn-group me-4">
                                                                        {/*begin::Submit*/}
                                                                        <span className="btn btn-primary fs-bold px-6"
                                                                            data-kt-inbox-form="send">
                                                                            <span className="indicator-label">Send</span>
                                                                            <span className="indicator-progress">Please wait...
                                                                                <span
                                                                                    className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                        </span>
                                                                        {/*end::Submit*/}

                                                                    </div>
                                                                    {/*end::Send*/}
                                                                </div>
                                                                {/*end::Actions*/}
                                                            </div>
                                                            {/*end::Footer*/}
                                                        </form>
                                                        {/*end::Form*/}
                                                    </div>
                                                </div>
                                                {/*end::Card*/}
                                            </div>
                                            {/*end::Content*/}
                                        </div>
                                        {/*end::Inbox App - Messages */}
                                    </div>
                                </div>
                                {/*end::Modal body*/}
                            </div>
                            {/*end::Modal content*/}
                        </div>
                        {/*end::Modal dialog*/}
                    </div>
                </div>
            </>
        </AuthenticatedLayout>
    );
}