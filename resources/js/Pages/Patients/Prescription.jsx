import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from '@/Components/FlatpickrInput';
import CkEditor from '@/Components/CkEditor';
import Select from "react-select";
import { useEffect, useState } from 'react';
export default function Prescription({ auth }) {
    const { patient } = usePage().props;
    const [selectedMedicines, setSelectedMedicines] = useState([]);

    const handleChange = (name, selectedOptions) => {
        setSelectedMedicines(prev => ({
            ...prev,
            [name]: selectedOptions, // e.g., 'med_id': [{id, text}, ...]
        }));

    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">patients</h2>} >
            <Head title="patients" />
            <>


                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Prescription</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <a href="dashboard/index.php" className="text-muted text-hover-primary">Home</a>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Prescription</li>

                                    </ul>

                                </div>


                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-row">

                                    <Sidebar patient={patient} />

                                    <div className="w-100 flex-lg-row-fluid mx-lg-13">

                                        <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="btn btn-icon btn-active-color-primary w-30px h-30px"
                                                    id="kt_social_start_sidebar_toggle">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                                                fill="currentColor" />
                                                            <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card ">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Prescription</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" className="btn btn-sm btn-primary my-1" data-bs-toggle="modal"
                                                        data-bs-target="#modal_add_prescription">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <table
                                                        className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr className="bg-light">
                                                                <th className="min-w-80px ">ID</th>
                                                                <th className="min-w-100px">Doctor</th>
                                                                <th className="min-w-100px">Date</th>
                                                                <th className="min-w-100px">Medicine </th>
                                                                <th className="min-w-150px">Option</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>21</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>Paracetamol - 12 | 5 </td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1" data-bs-toggle="modal"
                                                                            data-bs-target="#modal_add_prescription">
                                                                            <i
                                                                                className="fa-regular text-info fa-eye fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1" data-bs-toggle="modal"
                                                                            data-bs-target="#modal_add_prescription">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1" data-bs-toggle="modal"
                                                                            data-bs-target="#modal_add_prescription">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>22</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Faisal</span>
                                                                </td>
                                                                <td>12 Feb 2023</td>
                                                                <td>Paracetamol - 12 | 5 </td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-info fa-eye fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>23</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Ahmad</span>
                                                                </td>
                                                                <td>15 Feb 2023</td>
                                                                <td>Paracetamol - 12 | 5 </td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-info fa-eye fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>26</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>18 Feb 2023</td>
                                                                <td>Paracetamol - 12 | 5 </td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-info fa-eye fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>21</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>Paracetamol - 12 | 5 </td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-info fa-eye fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
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


                    <div className="modal fade" id="modal_add_prescription" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered modal-lg">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add Prescription</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                        data-bs-dismiss="modal">

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

                                    </div>

                                </div>


                                <div className="modal-body">

                                    <form id="kt_modal_add_prescription_form" className="form" action="#">

                                        <div className="d-flex flex-column">


                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-4">

                                                        <label className="required fw-semibold fs-6 mb-2">Date</label>


                                                        <FlatpickrInput type="text" className="form-control form-control-solid kt_datepicker_1" name="date" />

                                                    </div>
                                                    <div className="col-md-4">

                                                        <label className="required fw-semibold fs-6 mb-2">Patient</label>
                                                        <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal" data-bs-target="#kt_modal_add_patient">Add</span>


                                                        <Select2Input className="form-select form-select-solid" data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_prescription">
                                                            <option value="">Select Patient</option>
                                                            <option value="1">John</option>
                                                            <option value="2">Afsal</option>
                                                            <option value="3">Ahsan</option>
                                                            <option value="3">Kiya</option>
                                                        </Select2Input>

                                                    </div>
                                                    <div className="col-md-4">

                                                        <label className="required fw-semibold fs-6 mb-2">Doctor</label>
                                                        <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal" data-bs-target="#kt_modal_add_doctor">Add</span>


                                                        <Select2Input className="form-select form-select-solid" data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_prescription">
                                                            <option value="">Select Doctor</option>
                                                            <option value="1">Faisal</option>
                                                            <option value="2">Ahmad</option>
                                                            <option value="3">Saud</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">History</label>
                                                        <CkEditor name="presc_history"
                                                            id="history"
                                                            className="form-control"
                                                            rows={10} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Note</label>
                                                        <CkEditor id="kt_docs_ckeditor_classic_1" name="presc_note" className="form-control" rows="5" />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-12">

                                                        <label className="required fw-semibold fs-6 mb-2">Select Medicine</label>


                                                        <Select2Input onChange={(selectedOption) => handleChange('med_id', selectedOption)} className="form-select form-select-solid medicine_selector" multiple data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_prescription" name="med_id">
                                                            <option value="">Select Medicine</option>
                                                            <option value="12">Paracetamol</option>
                                                            <option value="13">Amoxicillin</option>
                                                            <option value="14">ibuprofen</option>
                                                            <option value="15">Listerine mouthwash</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row">
                                                    <div className="col-md-12">

                                                        <label className="required fw-semibold fs-6 mb-2">Medicine</label>
                                                        <div className="selected_medicine">
                                                            {selectedMedicines?.med_id && selectedMedicines.med_id.map((med,idx) => (

                                                                <div className="row mt-5" key={idx} >
                                                                    <div className="col-md-2">
                                                                        <div className="col-md-12">Medicine</div>
                                                                        <div className="col-md-12">
                                                                            <input type="text" name="med_id[]" data-id={med.id} defaultValue={med.text} readOnly />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <div className="col-md-12">Dosage</div>
                                                                        <div className="col-md-12">
                                                                            <input type="text" name="dosage[]" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <div className="col-md-12">Frequency</div>
                                                                        <div className="col-md-12">
                                                                            <input type="text" name="frequency[]" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <div className="col-md-12">Days</div>
                                                                        <div className="col-md-12">
                                                                            <input type="text" name="days[]" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <div className="col-md-12">Instruction</div>
                                                                        <div className="col-md-12">
                                                                            <input type="text" name="instruction[]" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                        <div className="text-end pt-15">
                                            <button type="reset" className="btn btn-light me-3"
                                                data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary"
                                                data-kt-users-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        </AuthenticatedLayout>
    )
}