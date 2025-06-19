import FlatpickrInput from "@/Components/FlatpickrInput"
import Select2Input from "@/Components/Select2Input"

export const AddAppointmentModal = () => {
    return (
        <div className="modal fade" id="modal_add_appointment" tabIndex="-1" aria-hidden="true">

            <div className="modal-dialog modal-dialog-centered mw-650px">

                <div className="modal-content">

                    <div className="modal-header">

                        <h2 className="fw-bold">Add Appointment</h2>


                        <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                            <span className="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                        transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                        fill="currentColor" />
                                </svg>
                            </span>

                        </div>

                    </div>


                    <div className="modal-body">

                        <form id="kt_modal_add_appointment_form" className="form" >

                            <div className="d-flex flex-column">


                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">

                                            <label className="required fw-semibold fs-6 mb-2">Patient</label>
                                            <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                data-bs-target="#kt_modal_add_patient">Add</span>

                                            <Select2Input className="form-select form-select-solid" data-control="select2"
                                                aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="select a patient" >
                                                <option value="">Select Patient</option>
                                                <option value="1">John</option>
                                                <option value="2">Afsal</option>
                                                <option value="3">Ahsan</option>
                                                <option value="3">Kiya</option>
                                            </Select2Input>

                                        </div>
                                        <div className="col-md-6">

                                            <label className="required fw-semibold fs-6 mb-2">Doctor</label>
                                            <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                data-bs-target="#kt_modal_add_doctor">Add</span>


                                            <Select2Input className="form-select form-select-solid" data-control="select2"
                                                aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="select a doctor">
                                                <option value="">Select Doctor</option>
                                                <option value="1">Faisal</option>
                                                <option value="2">Ahmad</option>
                                                <option value="3">Saud</option>
                                            </Select2Input>

                                        </div>

                                    </div>
                                </div>


                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">

                                            <label className="required fw-semibold fs-6 mb-2">Date</label>


                                            <FlatpickrInput type="text" className="form-control form-control-solid kt_datepicker_1"
                                                name="date" />

                                        </div>
                                        <div className="col-md-6">

                                            <label className="required fw-semibold fs-6 mb-2">Available Slots</label>


                                            <Select2Input className="form-select form-select-solid" data-control="select2"
                                                aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="select a slot">
                                                <option value="">Select Slot</option>
                                                <option value="03:30 PM To 04:15 PM">03:30 PM To 04:15 PM</option>
                                                <option value="04:15 PM To 05:00 PM">04:15 PM To 05:00 PM</option>
                                                <option value="05:00 PM To 05:45 PM">05:00 PM To 05:45 PM</option>
                                                <option value="05:45 PM To 06:30 PM">05:45 PM To 06:30 PM</option>
                                                <option value="06:30 PM To 07:15 PM">06:30 PM To 07:15 PM</option>
                                                <option value="06:30 PM To 07:15 PM">06:30 PM To 07:15 PM</option>
                                            </Select2Input>

                                        </div>
                                    </div>
                                </div>


                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">

                                            <label className="required fw-semibold fs-6 mb-2">Status</label>


                                            <Select2Input className="form-select form-select-solid" data-control="select2"
                                                aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="Select status">
                                                <option></option>
                                                <option value="1">Pending</option>
                                                <option value="2">Confirmed</option>
                                                <option value="3">Treated</option>
                                                <option value="4">Cancelled</option>
                                            </Select2Input>

                                        </div>
                                        <div className="col-md-6">

                                            <label className="required fw-semibold fs-6 mb-2">Remarks</label>


                                            <input type="text" className="form-control form-control-solid" name="remarks" />

                                        </div>

                                    </div>
                                </div>


                                <div className="fv-row mt-2 mb-7">
                                    <div className="form-check form-check-custom form-check-success form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="" defaultChecked="" />
                                        <label className="form-check-label" htmlFor="">
                                            Send SMS
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="text-end pt-15">
                                <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                                    <span className="indicator-label">Submit</span>
                                </button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}