import FlatpickrInput from "@/Components/FlatpickrInput"
import JQueryMultiSelect from "@/Components/JQueryMultiSelect"
import Select2Input from "@/Components/Select2Input"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import AddPaymentModal from "@/Modals/AddPaymentModal"
import "../../../assets/css/multi-select.min.css";
import { Head,Link, usePage } from "@inertiajs/react"
export default function Payment({ auth }) {
    const {options} = usePage().props; 
    return (
        <AuthenticatedLayout user={auth} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Finance - Payment</h2>}>
            <Head title="Finance - Payment" />
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
                                        Payment List</h1>
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
                                        <li className="breadcrumb-item text-muted">Payments</li>
                                        {/* end::Item*/}
                                    </ul>
                                    {/* end::Breadcrumb*/}
                                </div>
                                {/* end::Page title*/}
                                {/* begin::Actions*/}
                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    {/* begin::Primary button*/}

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_add_payment">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/* end::Svg Icon*/}Add Payment
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
                                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2"
                                                            rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                        <path
                                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </span>
                                                {/* end::Svg Icon*/}
                                                <input type="text" data-kt-user-table-filter="search"
                                                    className="form-control form-control-solid w-250px ps-14"
                                                    placeholder="Search payment" />
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
                                                    data-bs-target="#kt_modal_export_payments">
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
                                            {/* end::Toolbar*/}
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
                                            <div className="modal fade" id="kt_modal_export_payments" tabIndex="-1" aria-hidden="true">
                                                {/* begin::Modal dialog*/}
                                                <div className="modal-dialog modal-dialog-centered">
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
                                                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/* end::Svg Icon*/}
                                                            </div>
                                                            {/* end::Close*/}
                                                        </div>
                                                        {/* end::Modal header*/}
                                                        {/* begin::Modal body*/}
                                                        <div className="modal-body scroll-y ">
                                                            {/* begin::Form*/}
                                                            <form id="kt_modal_export_payment_form" className="form" action="#">

                                                                {/* begin::Input group*/}
                                                                <div className="fv-row mb-10">
                                                                    {/* begin::Label*/}
                                                                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                        Export Format:</label>
                                                                    {/* end::Label*/}
                                                                    {/* begin::Input*/}
                                                                    <select name="format" data-control="select2"
                                                                        data-placeholder="Select a format" data-hide-search="true"
                                                                        className="form-select form-select-solid fw-bold">
                                                                        <option></option>
                                                                        <option defaultValue="excel">Excel</option>
                                                                        <option defaultValue="pdf">PDF</option>
                                                                        <option defaultValue="cvs">CVS</option>
                                                                        <option defaultValue="zip">ZIP</option>
                                                                    </select>
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

                                        </div>
                                        {/* end::Card toolbar*/}
                                    </div>
                                    {/* end::Card header*/}
                                    {/* begin::Card body*/}
                                    <div className="card-body py-4">
                                        {/* begin::Table*/}
                                        <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_expense_category">
                                            {/* begin::Table head*/}
                                            <thead>
                                                {/* begin::Table row*/}
                                                <tr className="text-start text-muted fw-bold fs-7 text-uppercase bg-light gs-0">
                                                    <th className="min-w-50px ps-4">ID</th>
                                                    <th className="min-w-125px">Patient</th>
                                                    <th className="min-w-100px">Doctor</th>
                                                    <th className="min-w-100px">Date</th>
                                                    <th className="min-w-100px">Sub Total</th>
                                                    <th className="min-w-100px">Discount</th>
                                                    <th className="min-w-100px">Grand Total</th>
                                                    <th className="min-w-100px">Paid</th>
                                                    <th className="min-w-100px">Due</th>
                                                    <th className="min-w-125px">Remarks</th>
                                                    <th className="pe-4 min-w-125px">Actions</th>
                                                </tr>
                                                {/* end::Table row*/}
                                            </thead>
                                            {/* end::Table head*/}
                                            {/*  begin::Table body */}
                                            <tbody className="text-gray-600 fw-semibold">
                                                {/* begin::Table row*/}
                                                <tr>
                                                    <td className="ps-4">1</td>
                                                    {/* begin::User=*/}
                                                    <td className="d-flex align-items-center">

                                                        {/* begin::User details*/}
                                                        <div className="d-flex flex-column">
                                                            <a href="patient/detail.php"
                                                                className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                                                            <span className="badge badge-light-info">+91-8559072770</span>
                                                            <span className="badge badge-light-success">789465213</span>
                                                        </div>
                                                        {/* begin::User details*/}
                                                    </td>
                                                    {/* end::User=*/}
                                                    {/* begin::Role=*/}
                                                    <td> <a href="patient/detail.php"
                                                        className="text-gray-800 text-hover-primary mb-1">Dr Faisal</a></td>
                                                    {/* end::Role=*/}
                                                    {/* begin::Last login=*/}
                                                    <td>
                                                        <span className="badge badge-light">10 March 2023 </span>
                                                    </td>
                                                    {/* end::Last login=*/}
                                                    <td>
                                                        SAR 100
                                                    </td>
                                                    <td>
                                                        10 %
                                                    </td>
                                                    <td>
                                                        SAR 90
                                                    </td>
                                                    <td>
                                                        SAR 50
                                                    </td>
                                                    <td>
                                                        SAR 40
                                                    </td>
                                                    <td>
                                                        This is for patient
                                                    </td>
                                                    {/* begin::Action=*/}
                                                    <td className="pe-4">
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
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4 "
                                                            data-kt-menu="true">

                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3"
                                                                    data-kt-users-table-filter="delete_row">Edit</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3"
                                                                    data-kt-users-table-filter="delete_row">Delete</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="finance/invoice.php" className="menu-link px-3">Invoice</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="patient/payment-history.php" className="menu-link px-3">Payment History</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                        </div>
                                                        {/* end::Menu*/}
                                                    </td>
                                                    {/* end::Action=*/}
                                                </tr>
                                                {/* end::Table row*/}
                                                {/*  begin:: Table row */}
                                                <tr>
                                                    <td className="ps-4">2</td>
                                                    {/* begin::User=*/}
                                                    <td className="d-flex align-items-center">

                                                        {/* begin::User details*/}
                                                        <div className="d-flex flex-column">
                                                            <a href="patient/detail.php"
                                                                className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                                                            <span className="badge badge-light-info">+91-8559072770</span>
                                                            <span className="badge badge-light-success">789465213</span>
                                                        </div>
                                                        {/* begin::User details*/}
                                                    </td>
                                                    {/* end::User=*/}
                                                    {/* begin::Role=*/}
                                                    <td> <a href="patient/detail.php"
                                                        className="text-gray-800 text-hover-primary mb-1">Dr Saud</a></td>
                                                    {/* end::Role=*/}
                                                    {/* begin::Last login=*/}
                                                    <td>
                                                        <span className="badge badge-light">10 March 2023 </span>
                                                    </td>
                                                    {/* end::Last login=*/}
                                                    <td>
                                                        SAR 100
                                                    </td>
                                                    <td>
                                                        10 %
                                                    </td>
                                                    <td>
                                                        SAR 90
                                                    </td>
                                                    <td>
                                                        SAR 50
                                                    </td>
                                                    <td>
                                                        SAR 40
                                                    </td>
                                                    <td>
                                                        This is for patient
                                                    </td>
                                                    {/* begin::Action=*/}
                                                    <td className="pe-4">
                                                        <a href="#" className="btn btn-light btn-active-light-primary btn-sm"
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
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4" data-kt-menu="true">
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3"
                                                                    data-kt-users-table-filter="delete_row">Edit</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3"
                                                                    data-kt-users-table-filter="delete_row">Delete</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="finance/invoice.php" className="menu-link px-3">Invoice</a>
                                                            </div>
                                                            {/*  end::Menu item */}
                                                            {/* begin::Menu item */}
                                                            <div className="menu-item px-3">
                                                                <a href="patient/payment-history.php" className="menu-link px-3">Payment History</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                        </div>
                                                        {/* end::Menu*/}
                                                    </td>
                                                    {/* end::Action=*/}
                                                </tr>
                                                {/*  end :: Table row */}
                                            </tbody>
                                            {/*  end::Table body */}
                                        </table>
                                        {/* end::Table*/}
                                    </div>
                                    {/* end::Card body*/}
                                </div>
                                {/* end::Card*/}
                            </div>
                            {/* end::Content container*/}
                        </div>
                        {/*  end::Content */}
                    </div>
                    {/*  end::Content wrapper */}
                    <AddPaymentModal options={options} />
                </div>
                {/* end:::Main*/}
            </>
        </AuthenticatedLayout>
    )
}