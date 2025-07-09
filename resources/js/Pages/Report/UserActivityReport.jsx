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
export default function Index({ auth }) {

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report
        </h2>}
        >

            <Head title="Report - User Activity Report" />
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
                                    <h1
                                        className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
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
                                                <div className="card mb-5 mb-xl-10">
                                                    {/*begin::Card header*/}
                                                    <div className="card-header">
                                                        {/*begin::Heading*/}
                                                        <div className="card-title">
                                                            <h3>User Activity Report</h3>
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
                                                                <div
                                                                    className="d-flex align-items-center position-relative my-1">
                                                                    {/*begin::Svg Icon | path:
                                                            icons/duotune/general/gen021.svg*/}
                                                                    <span
                                                                        className="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24"
                                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="17.0365" y="15.1223"
                                                                                width="8.15546" height="2" rx="1"
                                                                                transform="rotate(45 17.0365 15.1223)"
                                                                                fill="currentColor" />
                                                                            <path
                                                                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                                fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                    <input type="text" data-kt-user-table-filter="search"
                                                                        className="form-control form-control-solid w-250px ps-14"
                                                                        placeholder="Search User Activity Report" />
                                                                </div>
                                                                {/*end::Search*/}
                                                            </div>
                                                            {/*begin::Card title*/}
                                                        </div>
                                                        {/*end::Card header*/}
                                                        {/*begin::Card body*/}
                                                        <div className="card-body py-4">
                                                            {/*begin::Table*/}
                                                            <table className="table align-middle table-row-dashed fs-6 gy-5"
                                                                id="kt_table_user-activity-report">
                                                                {/*begin::Table head*/}
                                                                <thead>
                                                                    {/*begin::Table row*/}
                                                                    <tr
                                                                        className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">

                                                                        <th>ID</th>
                                                                        <th className="min-w-125px">User Name</th>
                                                                        <th className="min-w-125px">Bill Amount</th>
                                                                        <th className="min-w-125px">Payment Received</th>
                                                                        <th className="min-w-125px">Due Amount</th>
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
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            User 1 </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            101 </td>
                                                                        <td>
                                                                            51 </td>
                                                                        <td>
                                                                            50 </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                        icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
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
                                                                                        data-bs-target="#kt_modal_add_edit_report_template"
                                                                                        data-bs-toggle="modal">View</a>
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
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            User 2 </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            102 </td>
                                                                        <td>
                                                                            52 </td>
                                                                        <td>
                                                                            50 </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                        icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
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
                                                                                        data-bs-target="#kt_modal_add_edit_report_template"
                                                                                        data-bs-toggle="modal">View</a>
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
                                                                        {/*begin::Last login=*/}
                                                                        <td>User 3 </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>103</td>
                                                                        <td>
                                                                            53 </td>
                                                                        <td>
                                                                            50 </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                        icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
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
                                                                                        data-bs-target="#kt_modal_add_edit_report_template"
                                                                                        data-bs-toggle="modal">View</a>
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
                                                                        {/*begin::Last login=*/}
                                                                        <td>
                                                                            User 4 </td>
                                                                        {/*end::Last login=*/}
                                                                        <td>
                                                                            104 </td>
                                                                        <td>
                                                                            54 </td>
                                                                        <td>
                                                                            50 </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-end">
                                                                            <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                                data-kt-menu-trigger="click"
                                                                                data-kt-menu-placement="bottom-end">Actions
                                                                                {/*begin::Svg Icon | path:
                                                                        icons/duotune/arrows/arr072.svg*/}
                                                                                <span className="svg-icon svg-icon-5 m-0">
                                                                                    <svg width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
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
                                                                                        data-bs-target="#kt_modal_add_edit_report_template"
                                                                                        data-bs-toggle="modal">View</a>
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
    );
}