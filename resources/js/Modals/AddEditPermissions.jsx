import { useEffect, useRef, useState } from "react";
import Select2Input from '@/Components/Select2Input';
import api from "@/Lib/axios";
import { router } from '@inertiajs/react';
import { showSuccessToast, showErrorToast } from '@/Misc/loadToastr';

export default function AddEditPermissions({ editPermission, modules, onClose }) {
    const modalRef = useRef(null);
    const formRef = useRef(null);
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState({
        module_id: '',
        permission_name: '',
        permission_label: ''
    });
    const [errors, setErrors] = useState({});

    // Reset form when modal closes
    useEffect(() => {
        if (!modalRef.current) return;

        const $modal = window.$(modalRef.current);

        $modal.on("hidden.bs.modal", () => {
            onClose?.();
            setErrors({});
            setFormData({ module_id: '', permission_name: '', permission_label: '' });
        });

        return () => $modal.off("hidden.bs.modal");
    }, [onClose]);

    // Load edit data into form
    useEffect(() => {
        if (editPermission?.id) {
            setFormData({
                module_id: editPermission.module_id || '',
                permission_name: editPermission.name || '',
                permission_label: editPermission.label || ''
            });
        }
    }, [editPermission]);

    const AddOrUpdatePermission = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const route_url = editPermission?.id ? 'permissions.update' : 'permissions.store';
            const response = await api.post(route(route_url, editPermission?.id), formData);

            if (response.data.status === 200) {
                showSuccessToast(response.data.message);
                window.$(modalRef.current).modal('hide');
                router.reload({ only: ['permissions'] });
            } else {
                setErrors(response.data.errors || {});
            }
        } catch (error) {
            showErrorToast('Something went wrong!');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            <div ref={modalRef} className="modal fade" id="kt_modal_add_permission" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">

                        <div className="modal-header" id="kt_modal_add_permission_header">
                            <h2 className="fw-bold">{editPermission?.id ? 'Edit' : 'Add'} Permission</h2>
                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                <span className="svg-icon svg-icon-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                            <form ref={formRef} id="kt_modal_add_permission_form" className="form" onSubmit={AddOrUpdatePermission}>
                                <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_permission_scroll"
                                    data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                    data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_permission_header"
                                    data-kt-scroll-wrappers="#kt_modal_add_permission_scroll" data-kt-scroll-offset="300px">

                                    <div className="fv-row mb-7">
                                        <label className="required fw-semibold fs-6 mb-2">Module Name</label>
                                        <Select2Input
                                            name="module_id"
                                            value={formData.module_id}
                                            onChange={(val) => setFormData(prev => ({ ...prev, module_id: val }))} 
                                        >
                                            {modules.map((module) => (
                                                <option key={module.id} value={module.id}>{module.name}</option>
                                            ))}
                                        </Select2Input>
                                            {errors.module_id && <span className="text-danger">{errors.module_id}</span>}
                                    </div>

                                    <div className="fv-row mb-7">
                                        <label className="required fw-semibold fs-6 mb-2">Permission Name</label>
                                        <input
                                            type="text"
                                            name="permission_name"
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Permission name"
                                            value={formData.permission_name}
                                            onInput={(e) => setFormData({ ...formData, permission_name: e.target.value })}
                                        />
                                        {errors.permission_name && <span className="text-danger">{errors.permission_name}</span>}
                                    </div>

                                    <div className="fv-row mb-7">
                                        <label className="required fw-semibold fs-6 mb-2">Permission Label</label>
                                        <input
                                            type="text"
                                            name="permission_label"
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Permission label"
                                            value={formData.permission_label}
                                            onInput={(e) => setFormData({ ...formData, permission_label: e.target.value })}
                                        />
                                        {errors.permission_label && <span className="text-danger">{errors.permission_label}</span>}
                                    </div>

                                </div>

                                <div className="text-center pt-15">
                                    <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                    <button type="submit" className="btn btn-primary" data-kt-permissions-modal-action="submit" disabled={processing}>
                                        <span className="indicator-label">Submit</span>
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
