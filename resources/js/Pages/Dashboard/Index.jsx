import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import statisticsStylesArray from '../../Misc/stat_card_style';
import statisticsStylesArray_2 from '../../Misc/stat_card_style_2';
import IncomeExpenseCharts from '../../components/IncomeExpenseCharts';
import ThisMonthIncomeExpenseChart from '../../components/ThisMonthIncomeExpenseChart';
import FlatpickrInput from '../../components/FlatpickrInput';
import CalendarApp from '../../Components/CalendarApp';
import Select2Input from '../../Components/Select2Input';

export default function Dashboard({ auth }) {
    const { currentDate, years } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">



                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="row g-5 mb-5 mt-1">

                                    <div className="col-md-3">
                                        <a href="doctors" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[0]} >
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[0]}>
                                                        <i className="fas fa-user-md text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">999</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span className="d-block">Total</span><span>Doctors</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="patient" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[1]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[1]}>
                                                        <i className="fas fa-procedures text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">99,999</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span className="d-block">Total</span><span>Patients</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="appointment" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[2]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[2]}>
                                                        <i className="fas fa-calendar-check text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">9,999</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span className="d-block">Booked</span><span>Appointments</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="prescription" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[3]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[3]}>
                                                        <i className="fas fa-pills text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">98,799</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span
                                                                className="d-block">Issued</span><span>Prescriptions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="patient/case_list" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[4]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[4]}>
                                                        <i className="fas fa-notes-medical text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">1,000</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span className="d-block">Case</span><span>Histories</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="patient/lab" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[5]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[5]}>
                                                        <i className="fas fa-vials text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">5,000</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span className="d-block">Lab</span><span>Reports</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="patient/document" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[6]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[6]}>
                                                        <i className="fas fa-file-alt text-white fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-white fw-bold me-6">50,000</span>
                                                        <div className="fw-bold fs-6 text-white">
                                                            <span className="d-block">Uploaded</span><span>Documents</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                    <div className="col-md-3">
                                        <a href="finance" className="text-decoration-none">
                                            <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100 hover-scale"
                                                style={statisticsStylesArray[7]}>
                                                <div className="card-header pt-5 mb-3">
                                                    <div className="d-flex flex-center rounded-circle h-80px w-80px"
                                                        style={statisticsStylesArray_2[7]}>
                                                        <i className="fas fa-file-invoice-dollar text-dark fs-2qx lh-0"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body d-flex align-items-end mb-3 py-0">
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-2hx text-dark fw-bold me-6">223</span>
                                                        <div className="fw-bold fs-6 text-dark">
                                                            <span className="d-block">Payment</span><span>Invoices</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-6 mb-5">

                                        <div className="card card-flush overflow-hidden h-lg-100">

                                            <div className="card-header pt-5">

                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold text-dark">2025's Income/Expense Per
                                                        Month</span>

                                                </h3>

                                            </div>


                                            <div className="card-body d-flex align-items-end p-0">

                                                <IncomeExpenseCharts />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-md-6 mb-5">

                                        <div className="card card-xl-stretch mb-xl-8">

                                            <div className="card-header border-0 pt-5">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold fs-3 mb-1">Income/Expense</span>
                                                    <span className="text-muted mt-1 fw-semibold fs-7">May,2025</span>
                                                </h3>
                                            </div>


                                            <div className="card-body py-3">
                                                <ThisMonthIncomeExpenseChart />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="row">

                                    <div className="col-md-6 mb-5">

                                        <div className="card card-flush overflow-hidden h-lg-100">

                                            <div className="card-header pt-5">

                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold text-dark">Appointments</span>

                                                </h3>

                                            </div>


                                            <div className="card-body py-3">

                                                {/* <div id="kt_calendar_app" className="min-h-auto w-100 ps-4 pe-6"></div> */}
                                                <CalendarApp />
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-md-6">
                                        <div className="col-md-12">

                                            <div className="card card-xl-stretch mb-5">

                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bold fs-3 mb-1">Per Day
                                                            Income/Expense/Appointments</span>

                                                    </h3>
                                                </div>


                                                <div className="card-body py-3">

                                                    <div className="table-responsive">

                                                        <table
                                                            className="table table-row-dashed align-middle gs-0 gy-3 my-0">

                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="2" className="text-center">

                                                                        <div className="col-md-6">
                                                                            <FlatpickrInput className="form-control form-control-solid text-center"
                                                                                name="date" value={currentDate} />

                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Income.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Expense.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Appointment.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>

                                                            </tbody>

                                                        </table>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="col-md-12">

                                            <div className="card card-xl-stretch mb-5">

                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bold fs-3 mb-1">Per Month
                                                            Income/Expense/Appointments</span>

                                                    </h3>
                                                </div>


                                                <div className="card-body py-3">

                                                    <div className="table-responsive">

                                                        <table
                                                            className="table table-row-dashed align-middle gs-0 gy-3 my-0">

                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="2" className="text-center">

                                                                        <div className="col-md-6">

                                                                            <input type="text"
                                                                                className="form-control form-control-solid kt_datepicker_2 text-center"
                                                                                name="date" defaultValue="2025-05" />

                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Income.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Expense.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Appointment.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>

                                                            </tbody>

                                                        </table>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="col-md-12">

                                            <div className="card card-xl-stretch mb-5">

                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bold fs-3 mb-1">Per Year
                                                            Income/Expense/Appointments</span>

                                                    </h3>
                                                </div>


                                                <div className="card-body py-3">

                                                    <div className="table-responsive">

                                                        <table
                                                            className="table table-row-dashed align-middle gs-0 gy-3 my-0">

                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="2" className="text-center">

                                                                        <div className="col-md-6">
                                                                            <Select2Input className="form-select form-select-solid fw-bold"
                                                                                data-kt-select2="true"
                                                                                data-placeholder="Select option"
                                                                                data-allow-clear="true"
                                                                                data-kt-user-table-filter="role"
                                                                                data-hide-search="true" >
                                                                                {years && years.map((year) => (
                                                                                        <option defaultValue={year}  key={year}>{year}</option>
                                                                                ))}
                                                                            </Select2Input>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Income.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Expense.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="#"
                                                                            className="text-dark fw-bold text-hover-primary mb-1 fs-6">Appointment.</a>
                                                                    </td>
                                                                    <td>10</td>
                                                                </tr>

                                                            </tbody>

                                                        </table>

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
            </>
        </AuthenticatedLayout>
    );
}
