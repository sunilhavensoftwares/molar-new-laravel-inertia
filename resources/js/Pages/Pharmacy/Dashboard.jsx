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
import Navbar from '@/Pages/Pharmacy/common/Navbar'
import images from '@/Misc/image_map';
import PharmacySalesChart from '../../Components/PharmacySalesChart';
export default function Index({ auth }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pharmacy Dashboard</h2>}
        >
            <Head title="Pharmacy Dashboard" />
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
                                        Pharmacy</h1>
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
                                        <li className="breadcrumb-item text-muted">Pharmacy</li>
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
                                        <Navbar/>
                                        {/*begin::Navs*/}
                                        {/*begin::Tab Contents*/}
                                        <div className="tab-content" id="myTabContent">

                                        </div>
                                        {/*end::Tab Contents*/}
                                    </div>
                                </div>
                                {/*end::Navbar*/}
                                <div className="row g-5 mb-5">
                                    <div className="col-md-3">
                                        {/*begin::Card widget 3*/}
                                        <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={{ backgroundColor: `rgb(112, 110, 241)`, backgroundImage: `url(${images.wave_bg_red})` }}>
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5 mb-3">
                                                {/*begin::Icon*/}
                                                <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{border: '1px dashed rgba(255, 255, 255, 0.4)',backgroundColor:'rgb(112, 110, 241)'}}>
                                                    <i className="fas fa-file-invoice-dollar text-white fs-2qx lh-0"></i>
                                                </div>
                                                {/*end::Icon*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body d-flex align-items-end mb-3 py-0">
                                                {/*begin::Info*/}
                                                <div className="d-flex align-items-center">
                                                    <span className="fs-2hx text-white fw-bold me-6">SAR 800</span>
                                                    <div className="fw-bold fs-6 text-white">
                                                        <span className="d-block">Today</span>
                                                        <span className="">Sales</span>
                                                    </div>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Card body*/}
                                        </div>
                                        {/*end::Card widget 3*/}
                                    </div>
                                    <div className="col-md-3">
                                        {/*begin::Card widget 3*/}
                                        <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={{ backgroundColor: 'rgb(228, 129, 211)', backgroundImage: `url(${images.wave_bg_red})` }}>
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5 mb-3">
                                                {/*begin::Icon*/}
                                                <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{border: '1px dashed rgba(255, 255, 255, 0.4)',backgroundColor: 'rgb(228, 129, 211)'}}>
                                                    <i className="far fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                </div>
                                                {/*end::Icon*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body d-flex align-items-end mb-3 py-0">
                                                {/*begin::Info*/}
                                                <div className="d-flex align-items-center">
                                                    <span className="fs-2hx text-white fw-bold me-6">SAR 400</span>
                                                    <div className="fw-bold fs-6 text-white">
                                                        <span className="d-block">Today</span>
                                                        <span className="">Expense</span>
                                                    </div>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Card body*/}
                                        </div>
                                        {/*end::Card widget 3*/}
                                    </div>
                                    <div className="col-md-3">
                                        {/*begin::Card widget 3*/}
                                        <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={{backgroundColor: '#F1416C',backgroundImage:`url(${images.wave_bg_red})`}}>
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5 mb-3">
                                                {/*begin::Icon*/}
                                                <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{border: '1px dashed rgba(255, 255, 255, 0.4)',backgroundColor: '#F1416C'}}>
                                                    <i className="fas fa-pills text-white fs-2qx lh-0"></i>
                                                </div>
                                                {/*end::Icon*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body d-flex align-items-end mb-3 py-0">
                                                {/*begin::Info*/}
                                                <div className="d-flex align-items-center">
                                                    <span className="fs-2hx text-white fw-bold me-6">50</span>
                                                    <div className="fw-bold fs-6 text-white">
                                                        <span className="d-block">Medicines</span>
                                                    </div>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Card body*/}
                                        </div>
                                        {/*end::Card widget 3*/}
                                    </div>

                                    <div className="col-md-3">
                                        {/*begin::Card widget 3*/}
                                        <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={{backgroundColor: 'rgb(223, 161, 133)',backgroundImage:`url(${images.wave_bg_red})`}}>
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5 mb-3">
                                                {/*begin::Icon*/}
                                                <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{border: '1px dashed rgba(255, 255, 255, 0.4)',backgroundColor:'rgb(223, 161, 133)'}}>
                                                    <i className="fas fa-users text-white fs-2qx lh-0"></i>
                                                </div>
                                                {/*end::Icon*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body d-flex align-items-end mb-3 py-0">
                                                {/*begin::Info*/}
                                                <div className="d-flex align-items-center">
                                                    <span className="fs-2hx text-white fw-bold me-6">10</span>
                                                    <div className="fw-bold fs-6 text-white">
                                                        <span className="d-block">Staff Members</span>
                                                    </div>
                                                </div>
                                                {/*end::Info*/}
                                            </div>
                                            {/*end::Card body*/}
                                        </div>
                                        {/*end::Card widget 3*/}
                                    </div>
                                </div><div className="row">
                                    {/* sales graph begin*/}
                                    <div className="col-md-6 mb-5">
                                        {/*begin::Chart widget 36*/}
                                        <div className="card card-flush overflow-hidden h-lg-100">
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5">
                                                {/*begin::Title*/}
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold text-dark">Sales Graph</span>
                                                    {/* <span className="text-gray-400 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span> */}
                                                </h3>
                                                {/*end::Title*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body d-flex align-items-end p-0">
                                                {/*begin::Chart*/}
                                                <PharmacySalesChart/>
                                                {/*end::Chart*/}
                                            </div>
                                            {/*end::Card body*/}
                                        </div>
                                        {/*end::Chart widget 36*/}
                                    </div>
                                    {/* sales graph end*/}
                                    {/* stats this month begin*/}
                                    <div className="col-md-6 mb-5">
                                        {/*begin::Tables Widget 3*/}
                                        <div className="card card-xl-stretch mb-xl-8">
                                            {/*begin::Header*/}
                                            <div className="card-header border-0 pt-5">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold fs-3 mb-1">Statistics</span>
                                                    <span className="text-muted mt-1 fw-semibold fs-7">This Month</span>
                                                </h3>
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="card-body py-3">
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                                        {/*begin::Table head*/}
                                                        <thead>
                                                            <tr>
                                                                <th className="p-0 min-w-150px"></th>
                                                                <th className="p-0 min-w-140px"></th>
                                                                <th className="p-0 min-w-40px"></th>
                                                            </tr>
                                                        </thead>
                                                        {/*end::Table head*/}
                                                        {/*begin::Table body*/}
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">No of Sales.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">10</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Total Sales.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">20</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6"> Number Of Expenses.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">30</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Total Expense.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">40</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Medicine Number.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">50</td>
                                                            </tr>
                                                            <tr>

                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Medicine Quantity.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">50</td>
                                                            </tr>
                                                            <tr>

                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Medicine out of stock.</a>
                                                                </td>
                                                                <td className="text-end text-dark fw-bold fs-6 pe-0">60</td>
                                                            </tr>
                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*begin::Body*/}
                                        </div>
                                        {/*end::Tables Widget 3*/}
                                    </div>
                                    {/* stats this month end*/}
                                </div><div className="row">
                                    {/* sales graph begin*/}
                                    <div className="col-md-6 mb-5">
                                        {/*begin::Chart widget 36*/}
                                        <div className="card card-flush overflow-hidden h-lg-100">
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5">
                                                {/*begin::Title*/}
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold text-dark">Latest Sales</span>
                                                    {/* <span className="text-gray-400 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span> */}
                                                </h3>
                                                {/*end::Title*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="card-body py-3">
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                                        {/*begin::Table head*/}
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>Grand Total</th>
                                                            </tr>
                                                        </thead>
                                                        {/*end::Table head*/}
                                                        {/*begin::Table body*/}
                                                        <tbody>
                                                            <tr>
                                                                <td>2025-07-07</td>
                                                                <td>SAR 700</td>
                                                            </tr>

                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*begin::Body*/}
                                        </div>
                                        {/*end::Chart widget 36*/}
                                    </div>
                                    {/* sales graph end*/}
                                    {/* stats this month begin*/}
                                    <div className="col-md-6 mb-5">
                                        {/*begin::Tables Widget 3*/}
                                        <div className="card card-xl-stretch mb-xl-8">
                                            {/*begin::Header*/}
                                            <div className="card-header border-0 pt-5">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold fs-3 mb-1">Latest Expenses</span>
                                                    {/* <span className="text-muted mt-1 fw-semibold fs-7">This Month</span> */}
                                                </h3>
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="card-body py-3">
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                                        {/*begin::Table head*/}
                                                        <thead>
                                                            <tr>
                                                                <th>Category</th>
                                                                <th>Date</th>
                                                                <th>Amount</th>
                                                            </tr>
                                                        </thead>
                                                        {/*end::Table head*/}
                                                        {/*begin::Table body*/}
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Mobile.</a>
                                                                </td>
                                                                <td>2025-07-07</td>
                                                                <td>SAR 500</td>
                                                            </tr>

                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*begin::Body*/}
                                        </div>
                                        {/*end::Tables Widget 3*/}
                                    </div>
                                    {/* stats this month end*/}
                                </div><div className="row">
                                    {/* Latest Medicine Begin*/}
                                    <div className="col-md-6">
                                        {/*begin::Chart widget 36*/}
                                        <div className="card card-flush overflow-hidden h-lg-100">
                                            {/*begin::Header*/}
                                            <div className="card-header pt-5">
                                                {/*begin::Title*/}
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold text-dark">Latest Medicine</span>
                                                    {/* <span className="text-gray-400 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span> */}
                                                </h3>
                                                {/*end::Title*/}
                                            </div>
                                            {/*end::Header*/}
                                            {/*begin::Body*/}
                                            <div className="card-body py-3">
                                                {/*begin::Table container*/}
                                                <div className="table-responsive">
                                                    {/*begin::Table*/}
                                                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                                        {/*begin::Table head*/}
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Category</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        {/*end::Table head*/}
                                                        {/*begin::Table body*/}
                                                        <tbody>
                                                            <tr>
                                                                <td>Winex</td>
                                                                <td> antibiotic </td>
                                                                <td>SAR 10</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Alphintern</td>
                                                                <td> analgesic </td>
                                                                <td>SAR 20</td>
                                                            </tr>
                                                            <tr>
                                                                <td>catafast </td>
                                                                <td> analgesic </td>
                                                                <td>SAR 30</td>
                                                            </tr>
                                                            <tr>
                                                                <td>relaxon cap</td>
                                                                <td> analgesic </td>
                                                                <td>SAR 40</td>
                                                            </tr>
                                                            <tr>
                                                                <td>reparel 40 mg tab</td>
                                                                <td> analgesic </td>
                                                                <td>SAR 50</td>
                                                            </tr>
                                                            <tr>
                                                                <td>reparel 20 mg tab</td>
                                                                <td> analgesic </td>
                                                                <td>SAR 60</td>
                                                            </tr>
                                                            <tr>
                                                                <td>dexamethazon</td>
                                                                <td> analgesic </td>
                                                                <td>SAR 70</td>
                                                            </tr>
                                                            <tr>
                                                                <td>voltaren injection</td>
                                                                <td> analgesic </td>
                                                                <td>SAR 80</td>
                                                            </tr>
                                                            <tr>
                                                                <td>flagyl</td>
                                                                <td> mouth wash</td>
                                                                <td>SAR 90</td>
                                                            </tr>
                                                            <tr>
                                                                <td>zithromax 250MG CAP4'S</td>
                                                                <td> antibiotic </td>
                                                                <td>SAR 100</td>
                                                            </tr>

                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table container*/}
                                            </div>
                                            {/*begin::Body*/}
                                        </div>
                                        {/*end::Chart widget 36*/}
                                    </div>
                                    {/* Latest Medicine End*/}
                                </div>                </div>
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
