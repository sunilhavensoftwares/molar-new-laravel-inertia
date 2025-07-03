import { useState } from 'react';
import images from '@/Misc/image_map';
export default function AddDcotor (){    
    return (
        <>
            <div className="modal fade" id="kt_modal_add_doctor" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Add Doctor</h2>


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


                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                    <form id="kt_modal_add_doctor_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">


                                            <div className="fv-row mb-7">

                                                <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>

                                                <div className="image-input image-input-outline image-input-placeholder"
                                                    data-kt-image-input="true">

                                                    <div className="image-input-wrapper w-125px h-125px"
                                                        style={{ backgroundImage: `url(${images.avatar_300_6})` }}>
                                                    </div>


                                                    <label
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                        <i className="bi bi-pencil-fill fs-7"></i>

                                                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                        <input type="hidden" name="avatar_remove" />

                                                    </label>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>

                                                </div>


                                                <div className="form-text">Allowed file types: png, jpg, jpeg.
                                                </div>

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Full
                                                    Name</label>


                                                <input type="text" name="doctor_name" className="form-control form-control-solid mb-3 mb-lg-0"
                                                    placeholder="Full name" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Email</label>


                                                <input type="email" name="doctor_email" className="form-control form-control-solid mb-3 mb-lg-0"
                                                    placeholder="example@domain.com" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Phone</label>


                                                <input type="text" name="doctor_phone"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Address</label>


                                                <input type="text" name="doctor_address"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Password</label>


                                                <input type="Password" name="doctor_password"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Profile</label>


                                                <input type="text" name="doctor_profile"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                        </div>


                                        <div className="text-center pt-15">
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
        </>
    )
}

