import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from "@/Components/FlatpickrInput"
import DataTable from '@/Components/DataTable';
import { useEffect, useRef, useState } from 'react';
import images from '@/Misc/image_map';
import AddPrescription from '@/Modals/AddPrescription'
import AddDoctor from '@/Modals/AddDoctor';
import AddPatient  from "@/Modals/AddPatient"
export default function Detail({ auth }) {
    const printPage = () =>{
        window.print();
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Prescription Detail</h2>}
        >
            <Head title="Prescription Detail" />
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
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3 no-print">
                                    {/*begin::Title*/}
                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Prescription Details</h1>
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
                                        <li className="breadcrumb-item text-muted">Prescription details</li>
                                        {/*end::Item*/}
                                    </ul>
                                    {/*end::Breadcrumb*/}
                                </div>
                                {/*end::Page title*/}
                                {/*begin::Actions*/}
                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    {/*begin::Primary button*/}

                                    <button type="button" className="btn btn-primary no-print" data-bs-toggle="modal"
                                        data-bs-target="#modal_add_prescription">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}Add Prescription
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
                                {/* begin::Invoice 3*/}
                                <div className="card">
                                    {/* begin::Body*/}
                                    <div className="card-body py-20">
                                        {/* begin::Wrapper*/}
                                        <div className="mw-lg-950px mx-auto w-100">
                                            {/* begin::Header*/}
                                            <div className="d-flex justify-content-between flex-column flex-sm-row mb-19">
                                                <h4 className="fw-bolder text-gray-800 fs-2qx pe-5 pb-7">Prescription</h4>
                                                {/*end::Logo*/}
                                                <div className="text-sm-end">
                                                    {/*begin::Logo*/}
                                                    <a href="#" className="d-block mw-150px ms-sm-auto">
                                                        <img alt="Logo" src={images.logo} className="w-50" />
                                                    </a>
                                                    {/*end::Logo*/}
                                                    {/*begin::Text*/}
                                                    <div className="text-sm-end fw-semibold fs-4 text-muted mt-7">
                                                        <div>Molar Dental CLinic</div>
                                                    </div>
                                                    {/*end::Text*/}
                                                </div>
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="pb-12">
                                                {/*begin::Wrapper*/}
                                                <div className="d-flex flex-column gap-7 gap-md-10">
                                                    {/*begin::Message*/}
                                                    <div className="fw-bold fs-2">Ahmad
                                                        <br />
                                                    </div>
                                                    {/*begin::Message*/}
                                                    {/*begin::Separator*/}
                                                    <div className="separator"></div>
                                                    {/*begin::Separator*/}
                                                    {/*begin::Order details*/}
                                                    <div className="d-flex flex-column flex-sm-row gap-7 gap-md-10 fw-bold">
                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Prescription ID</span>
                                                            <span className="fs-5">#PRC-001</span>
                                                        </div>

                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Date</span>
                                                            <span className="fs-5">25 September, 2023</span>
                                                        </div>
                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Patient ID</span>
                                                            <span className="fs-5">#14534</span>
                                                        </div>

                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Phone</span>
                                                            <span className="fs-5">+966- 8569741513</span>
                                                        </div>
                                                    </div>
                                                    {/*end::Order details*/}
                                                    {/*begin::Billing & shipping*/}
                                                    <div className="d-flex flex-column flex-sm-row gap-7 gap-md-10 fw-bold">
                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Address</span>
                                                            <span className="fs-6">6882 , Dhahrat Laban, 4586,
                                                                <br /> Riyadh 13784, Saudi Arabia,</span>
                                                        </div>
                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Age</span>
                                                            <span className="fs-6">31</span>
                                                        </div>
                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">Gender</span>
                                                            <span className="fs-6">Male</span>
                                                        </div>
                                                    </div>
                                                    {/*end::Billing & shipping*/}
                                                    {/*begin::Billing & shipping*/}
                                                    <div className="d-flex flex-column flex-sm-row gap-7 gap-md-10 fw-bold">
                                                        <div className="flex-root d-flex flex-column">
                                                            <span className="text-muted">History</span>
                                                        </div>
                                                    </div>
                                                    {/*end::Billing & shipping*/}
                                                    <div className="separator"></div>
                                                    {/*begin:Order summary*/}
                                                    <div className="d-flex justify-content-between flex-column">
                                                        {/*begin::Table*/}
                                                        <div className="table-responsive border-bottom mb-9">
                                                            <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                                                                <thead>
                                                                    <tr className="border-bottom fs-6 fw-bold text-muted">
                                                                        <th className="min-w-175px pb-2">Medicine</th>
                                                                        <th className="min-w-130px pb-2">Instruction</th>
                                                                        <th className="min-w-80px text-end pb-2">Frequency</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="fw-semibold">
                                                                    {/*begin::Detial*/}
                                                                    <tr>
                                                                        <td>
                                                                            <div className="fw-bold">Paracetamol - 12</div>
                                                                        </td>
                                                                        {/*end::Product*/}
                                                                        {/*begin::SKU*/}
                                                                        <td>5 - dgf</td>
                                                                        {/*end::SKU*/}
                                                                        {/*begin::Quantity*/}
                                                                        <td className="text-end">1 -5 h</td>
                                                                        {/*end::Quantity*/}
                                                                    </tr>
                                                                    {/*end::Detail*/}
                                                                    {/*begin::Detial*/}
                                                                    <tr>
                                                                        <td>
                                                                            <div className="fw-bold">Amoxicillin - 500 mg</div>
                                                                        </td>
                                                                        {/*end::Product*/}
                                                                        {/*begin::SKU*/}
                                                                        <td>7 days - after food</td>
                                                                        {/*end::SKU*/}
                                                                        {/*begin::Quantity*/}
                                                                        <td className="text-end">1 -8 h</td>
                                                                        {/*end::Quantity*/}
                                                                    </tr>
                                                                    {/*end::Detail*/}

                                                                </tbody>
                                                            </table>

                                                        </div>
                                                        {/*end::Table*/}
                                                        <div>
                                                            <div className="col-2">Note: </div>
                                                            <div className="col-10"></div>
                                                        </div>
                                                    </div>
                                                    {/*end:Order summary*/}
                                                </div>
                                                {/*end::Wrapper*/}
                                            </div>

                                            {/* begin::Footer*/}
                                            <div className="d-flex flex-stack justify-content-end flex-wrap mt-lg-20 pt-13">
                                                {/* begin::Actions*/}
                                                <div className="my-1 me-5 h3">
                                                    Signature
                                                </div>
                                                {/* end::Actions*/}
                                            </div>
                                            {/* end::Footer*/}

                                            {/*end::Body*/}
                                            {/* begin::Footer*/}
                                            <div className="d-flex flex-stack flex-wrap mt-lg-5">
                                                {/* begin::Actions*/}
                                                <div className="my-1 me-5">
                                                    {/* begin::Pint*/}
                                                    <button type="button" className="btn btn-success my-1 me-12 no-print"
                                                        onClick={printPage}>Print Prescription</button>
                                                    {/* end::Pint*/}
                                                    {/* begin::Download*/}
                                                    <button type="button" className="btn btn-light-success my-1 no-print">Download</button>
                                                    {/* end::Download*/}
                                                </div>
                                                {/* end::Actions*/}
                                            </div>
                                            {/* end::Footer*/}
                                        </div>
                                        {/* end::Wrapper*/}
                                    </div>
                                    {/* end::Body*/}
                                </div>
                                {/* end::Invoice 1*/}
                            </div>
                            {/*end::Content container*/}
                        </div>
                        {/* end::Content */}
                    </div>
                    {/* end::Content wrapper */}

                    {/* Add Prescription Modal */}
                    <AddPrescription />
                    {/* Add Prescription Modal */}
                    {/*begin::Modal - Add Doctor*/}
                    <AddDoctor />
                    {/*begin::Modal - Add Patient*/}
                    <AddPatient/>
                    {/*end::Modal - Add Patient*/}

                    {/*begin::Modal - Add Patient*/}
                    <div className="modal fade" id="kt_modal_add_temporary_patient" tabIndex="-1" aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-650px">
                            {/*begin::Modal content*/}
                            <div className="modal-content">
                                {/*begin::Modal header*/}
                                <div className="modal-header" id="kt_modal_add_user_header">
                                    {/*begin::Modal title*/}
                                    <h2 className="fw-bold">Add Temporary</h2>
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
                                <div className="modal-body scroll-y">
                                    {/*begin::Form*/}
                                    <form id="kt_modal_edit_user_form" className="form" >
                                        {/*begin::Scroll*/}
                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">

                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                {/*begin::Label*/}
                                                <label className="required fw-semibold fs-6 mb-2">Full
                                                    Name</label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <input type="text" name="temporary_patient_name"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-7">
                                                {/*begin::Label*/}
                                                <label className="required fw-semibold fs-6 mb-2">
                                                    Phone</label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <input type="text" name="temporary_patient_name"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Phone" />
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
                                        </div>
                                        {/*end::Scroll*/}
                                        {/*begin::Actions*/}
                                        <div className="text-center pt-15">
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
                    {/*end::Modal - Add Patient*/}
                </div>
                {/*end:::Main*/}
            </>
        </AuthenticatedLayout>
    );
}
