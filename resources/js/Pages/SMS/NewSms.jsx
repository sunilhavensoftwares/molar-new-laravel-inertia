import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from '@/Components/FlatpickrInput';
import QuillInput from '@/Components/QuillInput';
const NewSms = ({auth}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">SMS - New SMS</h2>}
        >
            <Head title="SMS - New SMS" />
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
                                    Send SMS</h1>
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
                                                <h2>Send SMS</h2>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {/*begin::Form*/}
                                            <form id="kt_inbox_compose_form">
                                                <div className="d-flex flex-column">
                                                    {/*begin::Input group*/}
                                                    <div className="fv-row mb-3">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div
                                                                    className="form-check form-check-custom form-check-solid form-check-sm">
                                                                    <input className="form-check-input" name="send_sms" type="radio"
                                                                        value="" id="all_patient" />
                                                                    <label className="form-check-label" htmlFor="all_patient">
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
                                                                    <input className="form-check-input" name="send_sms" type="radio"
                                                                        value="" id="all_doctor" />
                                                                    <label className="form-check-label" htmlFor="all_doctor">
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
                                                                    <input className="form-check-input" name="send_sms" type="radio"
                                                                        value="" id="single_patient" />
                                                                    <label className="form-check-label" htmlFor="single_patient">
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
                                                                    <input className="form-check-input" name="send_sms" type="radio"
                                                                        value="" id="select_user" />
                                                                    <label className="form-check-label" htmlFor="select_user">
                                                                        Select Users
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fv-row mb-3">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label htmlFor="">Select Template</label>
                                                                {/*begin::Input*/}
                                                                <Select2Input className="form-select form-select-solid"
                                                                    data-control="select2" aria-label="Select Template">
                                                                    <option value="1">First</option>
                                                                    <option value="2">Second</option>
                                                                    <option value="3">Third</option>
                                                                </Select2Input>
                                                                {/*end::Input*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fv-row mb-3">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                {/*begin::Input*/}
                                                                <QuillInput className="form-control form-control-lg form-control-solid"/>
                                                                {/*end::Input*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Actions*/}
                                                    <div className="text-end pt-15">
                                                        <button type="submit" className="btn btn-primary">
                                                            <span className="indicator-label">Send</span>
                                                        </button>
                                                    </div>
                                                    {/*end::Actions*/}
                                                </div>
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
                        {/*end::Content container*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/* end::Content wrapper */}
            </div>
            {/*end:::Main*/}
        </>
        </AuthenticatedLayout>
    )
}

export default NewSms