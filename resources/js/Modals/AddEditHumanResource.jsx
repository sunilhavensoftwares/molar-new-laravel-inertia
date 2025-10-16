import images from '@/Misc/image_map';
import { useEffect, useRef, useState } from 'react';
import api from "@/Lib/axios";
import { showSuccessToast, showErrorToast } from "@/Misc/loadToastr";
import image_map from '@/Misc/image_map';
import { router } from '@inertiajs/react';
function AddEditHumanResource({ resource_name, editHumanResourceData, onClose }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        avatar: ''
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const addEditForm = useRef(null);
    const humanResouceModal = useRef(null);
    const [preview, setPreview] = useState(null);
    
    useEffect(() => {
        
        if (!formData.avatar) {
            setPreview(image_map.blank_avatar);
            return;
        }

        if (typeof formData.avatar === "string") {
            // Existing image URL
            setPreview(formData.avatar);
        } else {
            // File object -> create local preview URL
            const fileUrl = URL.createObjectURL(formData.avatar);
            setPreview(fileUrl);

            // cleanup to avoid memory leaks
            return () => URL.revokeObjectURL(fileUrl);
        }
    }, [formData.avatar]);
    // Reset form when modal closes
    useEffect(() => {
        if (!humanResouceModal.current) return;

        const $modal = window.$(humanResouceModal.current);

        $modal.on("hidden.bs.modal", () => {
            onClose?.();
            setErrors({});
            setFormData({
                name: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                avatar: ''
            });
        });

        return () => $modal.off("hidden.bs.modal");
    }, [onClose]);
    useEffect(() => {
        if (!editHumanResourceData?.data) return;
        const { name, email, phone, address, img_url } = editHumanResourceData.data;

        setFormData({
            name: name || '',
            email: email || '',
            password: '',
            phone: phone || '',
            address: address || '',
            avatar: img_url && `${window.location.origin}/storage/${img_url}` || ''
        });
    }, [editHumanResourceData]);
    const submitHumanResourceData = async (e) => {
        const currentHumanResouceModal = bootstrap.Modal.getInstance(humanResouceModal.current);
        e.preventDefault();
        setProcessing(true);
        e.preventDefault();
        let id = editHumanResourceData?.data?.id;
        const fd = new FormData();
        
        if (formData.avatar && formData.avatar instanceof File) {
            fd.append('avatar', formData.avatar);
        }
        fd.append('name', formData.name || '');
        fd.append('email', formData.email || '');
        fd.append('password', formData.password || '');
        fd.append('phone', formData.phone || '');
        fd.append('address', formData.address || '');
        id ? fd.append('_method', 'PATCH') : '';
        id ? fd.append('id', id || '') : '';
        await api.post(id ? route('human_resources.update', { human_resource: resource_name }) : route('human_resources.create', { human_resource: resource_name }),
            fd,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        ).then((response) => {
            if (response.data.status === 200) {
                showSuccessToast(response.data.message);
                currentHumanResouceModal.hide();
                router.reload({ only: [`${resource_name}s`] });
                setErrors({});
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phone: '',
                    address: '',
                    avatar: ''
                });
                addEditForm.current.reset();
            } else {
                setErrors(response.data.errors || {});
            }
            setProcessing(false);
        }).catch((error) => {
            setErrors(error?.response?.data?.errors || {});
        });


    }
    return (
        <>
            <div className="modal fade" ref={humanResouceModal} id={`kt_modal_add_edit_human_resource_${resource_name}`} tabIndex="-1" aria-hidden="true">
                {/* begin::Modal dialog */}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/* begin::Modal content */}
                    <div className="modal-content">
                        {/* begin::Modal header */}
                        <div className="modal-header" id="kt_modal_add_edit_human_header">
                            {/* begin::Modal title */}
                            <h2 className="fw-bold"> {editHumanResourceData?.data?.id ? 'Edit' : 'Add'} {resource_name?.charAt(0)?.toUpperCase() + resource_name?.slice(1)}</h2>
                            {/* end::Modal title */}
                            {/* begin::Close */}
                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                data-bs-dismiss="modal">
                                {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
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
                                {/* end::Svg Icon */}
                            </div>
                            {/* end::Close */}
                        </div>
                        {/* end::Modal header */}
                        {/* begin::Modal body */}
                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                            {/* begin::Form */}
                            <form onSubmit={submitHumanResourceData} ref={addEditForm} id="kt_modal_add_edit_human_form" className="form" encType="multipart/form-data" >
                                {/* begin::Scroll */}
                                <div className="d-flex flex-column scroll-y me-n7 pe-7"
                                    id="kt_modal_add_edit_human_scroll" data-kt-scroll="true"
                                    data-kt-scroll-activate="{default: false, lg: true}"
                                    data-kt-scroll-max-height="auto"
                                    data-kt-scroll-dependencies="#kt_modal_add_edit_human_header"
                                    data-kt-scroll-wrappers="#kt_modal_add_edit_human_scroll"
                                    data-kt-scroll-offset="300px">
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label */}
                                        <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>
                                        {/* end::Label */}
                                        {/* begin::Image input */}
                                        <div className="image-input image-input-outline image-input-placeholder"
                                            data-kt-image-input="true">
                                            {/* begin::Preview existing avatar */}
                                            <div className="image-input-wrapper w-125px h-125px rounded border" style={{
                                                backgroundImage: `url(${preview})`,
                                                backgroundSize: "contain",
                                                backgroundPosition: "center",
                                            }}>
                                            </div>
                                            {/* end::Preview existing avatar */}
                                            {/* begin::Label */}
                                            <label
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="change"
                                                data-bs-toggle="tooltip" title="Change avatar">
                                                <i className="bi bi-pencil-fill fs-7"></i>
                                                {/* begin::Inputs */}
                                                <input type="file" name="avatar"
                                                    accept=".png, .jpg, .jpeg" defaultValue={formData?.avatar || ''} onChange={(e) => {
                                                        const file = e.target.files[0];
                                                        setFormData({ ...formData, avatar: file });
                                                    }} />
                                                <input type="hidden" name="avatar_remove" />
                                                {/* end::Inputs */}
                                            </label>
                                            {/* end::Label */}
                                            {/* begin::Cancel */}
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="cancel"
                                                data-bs-toggle="tooltip" title="Cancel avatar" onClick={() => setFormData({ ...formData, avatar: '' })}>
                                                <i className="bi bi-x fs-2"></i>
                                            </span>
                                            {/* end::Cancel */}
                                            {/* begin::Remove */}
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove"
                                                data-bs-toggle="tooltip" title="Remove avatar" onClick={() => setFormData({ ...formData, avatar: '' })}>
                                                <i className="bi bi-x fs-2"></i>
                                            </span>
                                            {/* end::Remove */}
                                        </div>
                                        {/* end::Image input */}
                                        {/* begin::Hint */}
                                        <div className="form-text">Allowed file types: png, jpg, jpeg.
                                        </div>
                                        {/* end::Hint */}
                                        {errors.avatar && <div className="text-danger">{errors.avatar}</div>}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label */}
                                        <label className="required fw-semibold fs-6 mb-2">Full
                                            Name</label>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <input type="text" name="name" onInput={(e) => setFormData({ ...formData, name: e.target.value })} className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" defaultValue={formData?.name || ''} />
                                        {/* end::Input */}
                                        {errors.name && <div className="text-danger">{errors.name}</div>}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label */}
                                        <label
                                            className="required fw-semibold fs-6 mb-2">Password</label>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <input type="password" name="password" onInput={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Password" />
                                        {/* end::Input */}
                                        {errors.password && <div className="text-danger">{errors.password}</div>}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label */}
                                        <label className="required fw-semibold fs-6 mb-2">Email</label>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <input type="email" name="email" onInput={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="example@domain.com"
                                            defaultValue={formData?.email || ''} />
                                        {/* end::Input */}
                                        {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label */}
                                        <label className="required fw-semibold fs-6 mb-2">Phone</label>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <input type="text" name="phone"
                                            className="form-control form-control-solid mb-3 mb-lg-0" onInput={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="Enter Phone" defaultValue={formData?.phone || ''} />
                                        {/* end::Input */}
                                        {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-7">
                                        {/* begin::Label */}
                                        <label className="fs-6 mb-2">Address</label>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <input type="text" name="address" onInput={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            defaultValue={formData?.address || ''} placeholder="Enter Address" />
                                        {/* end::Input */}
                                        {errors.address && <div className="text-danger">{errors.address}</div>}
                                    </div>
                                    {/* end::Input group */}
                                </div>
                                {/* end::Scroll */}
                                {/* begin::Actions */}
                                <div className="text-center pt-15">
                                    <button type="reset" className="btn btn-light me-3"
                                        data-bs-dismiss="modal">Discard</button>
                                    <button disabled={processing?'disabled': ''} type="submit" className="btn btn-primary"
                                        data-kt-users-modal-action="submit">
                                        <span className="indicator-label">Submit</span>
                                        <span className="indicator-progress">Please wait...
                                            <span
                                                className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    </button>
                                </div>
                                {/* end::Actions */}
                            </form>
                            {/* end::Form */}
                        </div>
                        {/* end::Modal body */}
                    </div>
                    {/* end::Modal content */}
                </div>
                {/* end::Modal dialog */}
            </div>
        </>
    )
}

export default AddEditHumanResource