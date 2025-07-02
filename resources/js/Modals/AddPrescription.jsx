import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from '@/Components/FlatpickrInput';
import CkEditor from '@/Components/CkEditor';
import { useState } from 'react';
export default function AddPrescription (){
    const [selectedMedicines, setSelectedMedicines] = useState({});

    const handleChange = (name, selectedOptions) => {
       setSelectedMedicines(prev => ({
            ...prev,
            [name]: selectedOptions, // e.g., 'med_id': [{id, text}, ...]
        }));
    };
    
    
    return (
        <>
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


                                                <Select2Input onChange={(selectedOption) => handleChange('med_id', selectedOption)} className="form-select form-select-solid medicine_selector" multiple data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_prescription" name="med_id" data-placeholder="Select Medicine">
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
                                                    {selectedMedicines?.med_id && selectedMedicines.med_id.length>0 && selectedMedicines.med_id.map((med, idx) => (

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
        </>
    )
}

