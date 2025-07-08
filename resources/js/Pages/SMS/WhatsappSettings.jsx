import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from '@/Components/FlatpickrInput';
import QuillInput from '@/Components/QuillInput';
import Tabs from './common/Tabs';
const WhatsappSettings = ({ auth }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">SMS - SMS Settings</h2>}
        >
            <Head title="SMS - SMS Settings" />
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
                                        SMS</h1>
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
                                        <li className="breadcrumb-item text-muted">SMS</li>
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
                                {/*begin::Inbox App - Messages */}
                                <div className="d-flex flex-column flex-lg-row">
                                    {/*begin::Content*/}
                                    <div className="flex-lg-row-fluid">
                                        {/*begin::Card*/}
                                        <div className="card">
                                            <div className="card-header align-items-center">
                                                <div className="card-title">
                                                    <h2>SMS Message</h2>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                {/*begin:::Tabs*/}
                                                <Tabs/>
                                                {/*end:::Tabs*/}
                                                {/*begin:::Tab content*/}
                                                <div className="tab-content" id="myTabContent">
                                                    {/*begin:::Tab pane*/}
                                                    <div className="tab-pane show active" id="kt_ecommerce_settings_store" role="tabpanel">
                                                        {/*begin::Heading*/}
                                                        <div className="row mb-7">
                                                            <div className="col-md-9">
                                                                <h2>Whatsapp Settings</h2>
                                                            </div>
                                                            <div className="col-md-3 text-end">
                                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                                    data-bs-target="#modal_add_whatsapp_sender">
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="table-responsive">
                                                            {/*begin::Table*/}
                                                            <table className="table align-middle table-row-dashed fs-6 gy-5"
                                                                id="kt_table_users">
                                                                {/*begin::Table head*/}
                                                                <thead>
                                                                    {/*begin::Table row*/}
                                                                    <tr
                                                                        className="text-start text-muted fw-bold fs-7 text-uppercase bg-light gs-0">
                                                                        <th className="min-w-100px ps-4">ID</th>
                                                                        <th className="min-w-125px">Name</th>
                                                                        <th className="min-w-125px">URL</th>
                                                                        <th className="min-w-125px">APP Name</th>
                                                                        <th className="min-w-125px">Phone</th>
                                                                        <th className="min-w-125px">Status</th>
                                                                        <th className="text-center min-w-90px">Actions</th>
                                                                    </tr>
                                                                    {/*end::Table row*/}
                                                                </thead>
                                                                {/*end::Table head*/}
                                                                {/*begin::Table body*/}
                                                                <tbody className="text-gray-600 fw-semibold">
                                                                    <tr>
                                                                        <td className="ps-4">
                                                                            1
                                                                        </td>
                                                                        <td>
                                                                            <span className="badge badge-light">Gupshup </span>
                                                                        </td>
                                                                        <td>
                                                                            https://api.gupshup.io/sm/api/v1/
                                                                        </td>
                                                                        <td>
                                                                            Molar Clinic
                                                                        </td>
                                                                        <td>+91-8559072770</td>
                                                                        <td className="text-end">
                                                                            <div
                                                                                className="form-check form-switch form-check-custom form-check-success form-check-solid">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    defaultValue="" defaultChecked
                                                                                    id="kt_flexSwitchCustomDefault_1_1" />
                                                                            </div>
                                                                        </td>
                                                                        {/*begin::Action=*/}
                                                                        <td className="text-center">
                                                                            <a href="#"
                                                                                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" >
                                                                                <i className="fa-solid fa-pencil"></i>
                                                                            </a>
                                                                            <a href="#"
                                                                                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                                <span className="svg-icon svg-icon-3">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                                            fill="currentColor" />
                                                                                        <path opacity="0.5"
                                                                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                                            fill="currentColor" />
                                                                                        <path opacity="0.5"
                                                                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </a>
                                                                        </td>
                                                                        {/*end::Action=*/}
                                                                    </tr>
                                                                </tbody>
                                                                {/*end::Table body*/}
                                                            </table>
                                                            {/*end::Table*/}
                                                        </div>
                                                    </div>
                                                    {/*end:::Tab pane*/}
                                                </div>
                                                {/*end:::Tab content*/}
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


                    {/*Begin: Add Whatsapp Sender */}
                    <div className="modal fade" id="modal_add_whatsapp_sender" tabIndex="-1" aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                            {/*begin::Modal content*/}
                            <div className="modal-content">
                                {/*begin::Modal header*/}
                                <div className="modal-header">
                                    {/*begin::Modal title*/}
                                    <h2 className="fw-bold">Add Sender</h2>
                                    {/*end::Modal title*/}
                                    {/*begin::Close*/}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
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
                                <div className="modal-body">
                                    {/*begin::Form*/}
                                    <form id="modal_add_sender" className="form" >
                                        {/*begin::Scroll*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label className="required fw-semibold fs-6 mb-2">Sender</label>
                                                        {/*begin::Input*/}
                                                        <input type="text" name="medicine_stock"
                                                            className="form-control form-control-solid" />
                                                            {/*end::Input*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label className="required fw-semibold fs-6 mb-2">Phone</label>
                                                        {/*begin::Input*/}
                                                        <input type="text" name="medicine_stock"
                                                            className="form-control form-control-solid" />
                                                            {/*end::Input*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label className="required fw-semibold fs-6 mb-2">URL</label>
                                                        {/*begin::Input*/}
                                                        <input type="text" name="medicine_stock"
                                                            className="form-control form-control-solid" />
                                                            {/*end::Input*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label className="required fw-semibold fs-6 mb-2">API KEy</label>
                                                        {/*begin::Input*/}
                                                        <input type="text" name="medicine_stock"
                                                            className="form-control form-control-solid" />
                                                            {/*end::Input*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end::Input group*/}
                                        </div>
                                        {/*end::Scroll*/}
                                        {/*begin::Actions*/}
                                        <div className="text-end pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
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
                    {/*End: Add Whatsapp Sender */}
                </div>
                {/*end:::Main*/}
            </>
        </AuthenticatedLayout>
    )
}

export default WhatsappSettings