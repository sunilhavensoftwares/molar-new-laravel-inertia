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
export default function FinancialReport({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report</h2>}
        >
            <Head title="Report - Financial Reports" />
            <>
                {/*begin::Main*/}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/*begin::Content wrapper*/}
                    <div className="d-flex flex-column flex-column-fluid">
                        {/*begin::Toolbar*/}
                        <div id="kt_app_toolbar" className="app-toolbar py-1 py-lg-1">
                            {/*begin::Toolbar container*/}
                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                                {/*begin::Page title*/}
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    {/*begin::Title*/}
                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Report</h1>
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
                                        <li className="breadcrumb-item text-muted">Report</li>
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
                                    <div className="card-body pb-0">
                                        {/*begin::Details*/}
                                        <div className="d-flex flex-wrap flex-sm-nowrap">
                                        </div>
                                        {/*end::Details*/}
                                        {/*begin::Navs*/}
                                         <Navbar />
                                        {/*begin::Navs*/}
                                        {/*begin::Tab Contents*/}
                                        <div className="tab-content" id="myTabContent">

                                            {/*begin::Nurse Tab*/}
                                            <div className="tab-pane show active" id="kt_tab_pane_1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="card mb-5 mb-xl-10">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                {/*begin::Heading*/}
                                                                <div className="card-title">
                                                                    <h3>Financial Report</h3>
                                                                </div>
                                                                {/*end::Heading*/}
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
                                                                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2"
                                                                                        rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                                                    <path
                                                                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                                        fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                            <input type="text" data-kt-user-table-filter="search"
                                                                                className="form-control form-control-solid w-250px ps-14"
                                                                                placeholder="Search Financial Report" />
                                                                        </div>
                                                                        {/*end::Search*/}
                                                                    </div>
                                                                    {/*end::Card title*/}
                                                                    {/*begin::Card toolbar*/}
                                                                    <div className="card-toolbar no-print">
                                                                        {/*begin::Toolbar*/}
                                                                        <div className="d-flex flex-wrap justify-content-end gap-3" data-kt-user-table-toolbar="base">
                                                                            {/*begin::Doctor Filter*/}
                                                                            <div className="w-100 w-md-150px">
                                                                                <button type="button" className="btn btn-light-primary me-3 w-150px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                                                                    <span className="svg-icon svg-icon-2">
                                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                            <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                                                                                        </svg>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}Filter</button>
                                                                                {/*begin::Menu 1*/}
                                                                                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                                                                    {/*begin::Header*/}
                                                                                    <div className="px-7 py-5">
                                                                                        <div className="fs-5 text-dark fw-bold">Select Filter</div>
                                                                                    </div>
                                                                                    {/*end::Header*/}
                                                                                    {/*begin::Separator*/}
                                                                                    <div className="separator border-gray-200"></div>
                                                                                    {/*end::Separator*/}
                                                                                    {/*begin::Content*/}
                                                                                    <div className="px-7 py-5" data-kt-user-table-filter="form">
                                                                                        {/*begin::Input group*/}
                                                                                        <div className="mb-10">
                                                                                            <label className="form-label fs-6 fw-semibold">Doctor:</label>
                                                                                            <Select2Input className="form-select form-select-solid fw-bold" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-kt-user-table-filter="role" data-hide-search="true">
                                                                                                <option></option>
                                                                                                <option value="Administrator">Faisal</option>
                                                                                                <option value="Analyst">Ahmad</option>
                                                                                                <option value="Developer">Saud</option>
                                                                                                <option value="Support">Zyan</option>
                                                                                            </Select2Input>
                                                                                        </div>
                                                                                        <div className="mb-10">
                                                                                            <label className="form-label fs-6 fw-semibold">Start Date:</label>
                                                                                            <FlatpickrInput type="text" className="form-control form-control-solid kt_datepicker_1" name="date_start" />
                                                                                        </div>
                                                                                        <div className="mb-10">
                                                                                            <label className="form-label fs-6 fw-semibold">End Date:</label>
                                                                                            <FlatpickrInput type="text" className="form-control form-control-solid kt_datepicker_2" name="date_end" />
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Actions*/}
                                                                                        <div className="d-flex justify-content-end">
                                                                                            <button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                                                                                            <button type="submit" className="btn btn-primary fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                                                                        </div>
                                                                                        {/*end::Actions*/}
                                                                                    </div>
                                                                                    {/*end::Content*/}
                                                                                </div>
                                                                                {/*end::Menu 1*/}
                                                                            </div>
                                                                            {/*end::Doctor Filter*/}
                                                                            {/*begin::Doctor Filter*/}
                                                                            <div className="w-100 w-md-150px">
                                                                                {/*begin::Export*/}
                                                                                <button type="button" className="btn btn-light-primary me-3 w-150px" data-bs-toggle="modal"
                                                                                    data-bs-target="#kt_modal_export_financial-report">
                                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
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
                                                                                    {/*end::Svg Icon*/}Export
                                                                                </button>
                                                                                {/*end::Export*/}
                                                                            </div>
                                                                            {/*begin::Doctor Filter*/}
                                                                            {/*begin::Doctor Filter*/}
                                                                            <div className="w-100 w-md-150px">
                                                                                {/*begin::Export*/}
                                                                                <button type="button" className="btn btn-light-primary me-3 w-150px" onClick={() => window.print()}>
                                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                                                                                    <span className="svg-icon svg-icon-2">
                                                                                        <i className='fa fa-print'></i>
                                                                                    </span>
                                                                                    {/*end::Svg Icon*/}Print
                                                                                </button>
                                                                                {/*end::Export*/}
                                                                            </div>
                                                                            {/*begin::Doctor Filter*/}
                                                                        </div>
                                                                        {/*end::Toolbar*/}

                                                                        {/*end::Modal - Add Appointment */}

                                                                    </div>
                                                                    {/*end::Card toolbar*/}

                                                                    {/*begin::Modal - Adjust Balance*/}
                                                                    <div className="modal fade" id="kt_modal_export_financial-report" tabIndex="-1" aria-hidden="true">
                                                                        {/*begin::Modal dialog*/}
                                                                        <div className="modal-dialog modal-dialog-centered mw-500px">
                                                                            {/*begin::Modal content*/}
                                                                            <div className="modal-content">
                                                                                {/*begin::Modal header*/}
                                                                                <div className="modal-header">
                                                                                    {/*begin::Modal title*/}
                                                                                    <h2 className="fw-bold">Export</h2>
                                                                                    {/*end::Modal title*/}
                                                                                    {/*begin::Close*/}
                                                                                    <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                                        data-bs-dismiss="modal">
                                                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
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
                                                                                        {/*end::Svg Icon*/}
                                                                                    </div>
                                                                                    {/*end::Close*/}
                                                                                </div>
                                                                                {/*end::Modal header*/}
                                                                                {/*begin::Modal body*/}
                                                                                <div className="modal-body scroll-y">
                                                                                    {/*begin::Form*/}
                                                                                    <form id="kt_modal_export_financial-report_form" className="form" action="#">

                                                                                        {/*begin::Input group*/}
                                                                                        <div className="fv-row mb-10">
                                                                                            {/*begin::Label*/}
                                                                                            <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                                                Export Format:</label>
                                                                                            {/*end::Label*/}
                                                                                            {/*begin::Input*/}
                                                                                            <Select2Input name="format" data-control="select2"
                                                                                                data-placeholder="Select a format" data-hide-search="true"
                                                                                                className="form-select form-select-solid fw-bold">
                                                                                                <option></option>
                                                                                                <option value="excel">Excel</option>
                                                                                                <option value="pdf">PDF</option>
                                                                                                <option value="cvs">CVS</option>
                                                                                                <option value="zip">ZIP</option>
                                                                                            </Select2Input>
                                                                                            {/*end::Input*/}
                                                                                        </div>
                                                                                        {/*end::Input group*/}
                                                                                        {/*begin::Actions*/}
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
                                                                    {/*end::Modal - New Card*/}    </div>
                                                                {/*end::Card header*/}
                                                                {/*begin::Card body*/}
                                                                <div className="card-body py-4">
                                                                    {/*begin::Table*/}
                                                                    <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_financial-report">
                                                                        {/*begin::Table head*/}
                                                                        <thead>
                                                                            {/*begin::Table row*/}
                                                                            <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                                                                <th className="min-w-125px">Category</th>
                                                                                <th className="min-w-125px">Qty</th>
                                                                                <th className="min-w-125px">Amount</th>
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                        </thead>
                                                                        {/*end::Table head*/}
                                                                        {/*begin::Table body*/}
                                                                        <tbody className="text-gray-600 fw-semibold">
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                <td>
                                                                                    Category 1                        </td>
                                                                                {/*end::Last login=*/}
                                                                                <td>
                                                                                    101                        </td>
                                                                                <td>
                                                                                    10001                        </td>
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                <td>
                                                                                    Category 2                        </td>
                                                                                {/*end::Last login=*/}
                                                                                <td>
                                                                                    102                        </td>
                                                                                <td>
                                                                                    10002                        </td>
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                <td>
                                                                                    Category 3                        </td>
                                                                                {/*end::Last login=*/}
                                                                                <td>
                                                                                    103                        </td>
                                                                                <td>
                                                                                    10003                        </td>
                                                                            </tr>
                                                                            {/*end::Table row*/}
                                                                            {/*begin::Table row*/}
                                                                            <tr>
                                                                                <td>
                                                                                    Category 4                        </td>
                                                                                {/*end::Last login=*/}
                                                                                <td>
                                                                                    104                        </td>
                                                                                <td>
                                                                                    10004                        </td>
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
                                                            {/*end::Card*/}            </div>
                                                        <div className="card mb-5 mb-xl-10">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                {/*begin::Heading*/}
                                                                <div className="card-title">
                                                                    <h3>Total</h3>
                                                                </div>
                                                                {/*end::Heading*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                            <div className="card border-0">
                                                                <div className="card-body py-4">
                                                                    <table className="table align-middle table-row-dashed fs-6 gy-5">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Subtotal</td>
                                                                                <td>SAR 12345</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Total Discount</td>
                                                                                <td>SAR 100</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Gross Income</td>
                                                                                <td>SAR 12245</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Total Hospital Amount</td>
                                                                                <td>SAR 1234</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Total Doctors Amount</td>
                                                                                <td>SAR 400</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Total Vat</td>
                                                                                <td>SAR 300</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            {/*end::Card header*/}
                                                        </div>
                                                        <div className="card mb-5 mb-xl-10">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                {/*begin::Heading*/}
                                                                <div className="card-title">
                                                                    <h3>Expense</h3>
                                                                </div>
                                                                {/*end::Heading*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                            <div className="card border-0">
                                                                <div className="card-body py-4">
                                                                    <table className="table align-middle table-row-dashed fs-6 gy-5">
                                                                        <thead>
                                                                            <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                                                                <th>Category</th>
                                                                                <th>Amount</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>X-ray</td>
                                                                                <td>SAR 500</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="card mb-5 mb-xl-10">
                                                            {/*begin::Card header*/}
                                                            <div className="card-header">
                                                                {/*begin::Heading*/}
                                                                <div className="card-title">
                                                                    <h3>Statistics</h3>
                                                                </div>
                                                                {/*end::Heading*/}
                                                            </div>
                                                            {/*end::Card header*/}
                                                            <div className="card border-0">
                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#1e3a8a', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#1e3a8a' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 1,200</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross</span>
                                                                                    <span className="">Bill</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#047857', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#047857' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 950</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross Hospital</span>
                                                                                    <span className="">Amount</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#7c3aed', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#7c3aed' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 730</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross Doctors</span>
                                                                                    <span className="">Commission</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#be123c', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#be123c' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 640</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross</span>
                                                                                    <span className="">Deposit</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#f59e0b', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#f59e0b' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 410</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross</span>
                                                                                    <span className="">Due</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#059669', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#059669' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 330</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross</span>
                                                                                    <span className="">Expense</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 p-2">
                                                                    <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                        style={{ backgroundColor: '#6d28d9', backgroundImage: `url(${images.wave_bg_red})` }}>
                                                                        <div className="card-header pt-5 mb-3">
                                                                            <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                                                style={{ border: '1px dashed rgba(255, 255, 255, 0.4)', backgroundColor: '#6d28d9' }}>
                                                                                <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-body d-flex align-items-end mb-3 py-0">
                                                                            <div className="d-flex align-items-center">
                                                                                <span className="fs-2hx text-white fw-bold me-6">SAR 510</span>
                                                                                <div className="fw-bold fs-6 text-white">
                                                                                    <span className="d-block">Gross</span>
                                                                                    <span className="">VAT</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Financial Report Tab*/}        </div>
                                        {/*end::Tab Contents*/}
                                    </div>
                                </div>
                                {/*end::Navbar*/}                </div>
                            {/*end::Content container*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Content wrapper*/}
                </div>
                {/*end:::Main*/}
            </>
        </AuthenticatedLayout>
    );
}
