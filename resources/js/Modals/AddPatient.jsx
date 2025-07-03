import { useState } from 'react';
import images from '@/Misc/image_map';
import FlatpickrInput from "@/Components/FlatpickrInput"
import Select2Input from "@/Components/Select2Input"
export default function AddPatient() {
    return (
        <>
            <div className="modal fade" id="kt_modal_add_patient" tabIndex="-1" aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/* begin::Modal content*/}
                    <div className="modal-content">
                        {/* begin::Modal header*/}
                        <div className="modal-header" id="kt_modal_add_user_header">
                            {/* begin::Modal title*/}
                            <h2 className="fw-bold">Add Patient</h2>
                            {/* end::Modal title*/}
                            {/* begin::Close*/}
                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                data-bs-dismiss="modal">
                                {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                <span className="svg-icon svg-icon-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon*/}
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* end::Modal header*/}
                        {/* begin::Modal body*/}
                        <div className="modal-body scroll-y mx-5 my-7">
                            {/* begin::Form*/}
                            <form id="kt_modal_add_patient_form" className="form" >
                                {/* begin::Scroll*/}
                                <div className="d-flex flex-column scroll-y me-n7 pe-7"
                                    id="kt_modal_add_user_scroll" data-kt-scroll="true"
                                    data-kt-scroll-activate="{default: false, lg: true}"
                                    data-kt-scroll-max-height="auto"
                                    data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                    data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                    data-kt-scroll-offset="300px">

                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>
                                        {/* end::Label*/}
                                        {/* begin::Image input*/}
                                        <div className="image-input image-input-outline image-input-placeholder"
                                            data-kt-image-input="true">
                                            {/* begin::Preview existing avatar*/}
                                            <div className="image-input-wrapper w-125px h-125px"
                                                style={{ backgroundImage: `url(${images.avatar_300_6})` }}>
                                            </div>
                                            {/* end::Preview existing avatar*/}
                                            {/* begin::Label*/}
                                            <label
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="change" data-bs-toggle="tooltip"
                                                title="Change avatar">
                                                <i className="bi bi-pencil-fill fs-7"></i>
                                                {/* begin::Inputs*/}
                                                <input type="file" name="avatar"
                                                    accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" name="avatar_remove" />
                                                {/* end::Inputs*/}
                                            </label>
                                            {/* end::Label*/}
                                            {/* begin::Cancel*/}
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip"
                                                title="Cancel avatar">
                                                <i className="bi bi-x fs-2"></i>
                                            </span>
                                            {/* end::Cancel*/}
                                            {/* begin::Remove*/}
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove" data-bs-toggle="tooltip"
                                                title="Remove avatar">
                                                <i className="bi bi-x fs-2"></i>
                                            </span>
                                            {/* end::Remove*/}
                                        </div>
                                        {/* end::Image input*/}
                                        {/* begin::Hint*/}
                                        <div className="form-text">Allowed file types: png, jpg, jpeg.
                                        </div>
                                        {/* end::Hint*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">Full
                                            Name</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <input type="text" name="patient_name"
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Full name" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">
                                            Phone</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <input type="text" name="patient_phone"
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Full name" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">National ID</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <input type="text" name="patient_national"
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Full name" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">Birth Date</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <FlatpickrInput className="form-control form-control-solid  pe-5 flatpicker"
                                            placeholder="Select date" name="patient_dob" type="text"
                                            readonly="readonly" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">Gender</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <Select2Input className="form-select form-select-solid"
                                            aria-label="Select example" data-placeholder="Select Gender">
                                            <option></option>
                                            <option defaultValue="1">Male</option>
                                            <option defaultValue="2">Female</option>
                                            <option defaultValue="3">Other</option>
                                        </Select2Input>
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}

                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">Doctor</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <Select2Input className="form-select form-select-solid"
                                            aria-label="Select example">
                                            <option>Select Doctor</option>
                                            <option defaultValue="1">Faisal</option>
                                            <option defaultValue="2">Ahmad</option>
                                            <option defaultValue="3">Saud</option>
                                        </Select2Input>
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label*/}
                                        <label className="required fw-semibold fs-6 mb-2">Address</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <textarea name="patient_address"
                                            className="form-control form-control-solid" cols="30"
                                            rows="5"></textarea>
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}

                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-7">
                                        <div className="form-check form-check-custom form-check-success ">
                                            <input className="form-check-input" name="send_message"
                                                type="checkbox" defaultValue="" defaultChecked />
                                            <label className="form-check-label" htmlFor="">
                                                Send Message
                                            </label>
                                        </div>
                                    </div>
                                    {/* end::Input group*/}
                                </div>
                                {/* end::Scroll*/}
                                {/* begin::Actions*/}
                                <div className="text-center pt-15">
                                    <button type="reset" className="btn btn-light me-3"
                                        data-bs-dismiss="modal">Discard</button>
                                    <button type="submit" className="btn btn-primary"
                                        data-kt-users-modal-action="submit">
                                        <span className="indicator-label">Submit</span>
                                    </button>
                                </div>
                                {/* end::Actions*/}
                            </form>
                            {/* end::Form*/}
                        </div>
                        {/* end::Modal body*/}
                    </div>
                    {/* end::Modal content*/}
                </div>
                {/* end::Modal dialog*/}
            </div>
        </>
    )
}

