import { use, useEffect, useRef, useState } from "react";
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
    useEffect(() => {
        if (!modalRef.current) return;

        const $modal = window.$(modalRef.current);

        $modal.on("hidden.bs.modal", () => {            
            onClose?.();   // call when modal is closed
            setFormData({
            module_id: '',
            permission_name: '',
            permission_label: ''
        });
            setErrors({});
            formRef.current.reset();
        });

        return () => {
            $modal.off("hidden.bs.modal");
        };
    }, [onClose]);
    useEffect(() => {
        if (editPermission?.id) {
            setFormData({
                module_id: editPermission?.module?.id,
                permission_name: editPermission?.name,
                permission_label: editPermission?.label
            });
        }
    }, [editPermission]);
    const AddOrUpdatePermission = (e) => {
        setProcessing(true);
        e.preventDefault();
        let route_url = editPermission?.id ? 'permissions.update' : 'permissions.store';
        api.post(route(route_url, editPermission?.id), formData).then((response) => {
            if (response.data.status === 200) {
                showSuccessToast(response.data.message);
                window.$(modalRef.current).modal('hide');
                //  Re-fetch the current permissions table
                router.reload({ only: ['permissions'] });
            } else {
                setErrors(response.data.errors);
            }
            setProcessing(false);
        });
    }
    return (
        <>
            <div ref={modalRef} className="modal fade" id="kt_modal_add_permission" tabIndex="-1" aria-hidden="true" >

                <div className="modal-dialog modal-dialog-centered mw-650px">

                    <div className="modal-content">

                        <div className="modal-header" id="kt_modal_add_permission_header">

                            <h2 className="fw-bold">{editPermission?.module?.id ? 'Edit' : 'Add'} Permission</h2>


                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                <span className="svg-icon svg-icon-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                            fill="currentColor" />
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

                                        <Select2Input name="module_id"
                                            value={formData?.module_id || editPermission?.module?.id || ''}
                                            onChange={(val) => setFormData({ ...formData, module_id: val })} >
                                            {modules && modules.map((module) => (
                                                <option key={module.id} value={module.id}>{module.name}</option>
                                            ))}
                                        </Select2Input>
                                        {errors.module_id && <span className="text-danger">{errors.module_id}</span>}

                                    </div>

                                    <div className="fv-row mb-7">

                                        <label className="required fw-semibold fs-6 mb-2">Permission Name</label>


                                        <input type="text" name="permission_name"
                                            className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Permission name" onInput={(e) => setFormData({ ...formData, permission_name: e.target.value })} defaultValue={formData?.permission_name || editPermission?.name} />
                                        {errors.permission_name && <span className="text-danger">{errors.permission_name}</span>}
                                    </div>


                                    <div className="fv-row mb-7">

                                        <label className="required fw-semibold fs-6 mb-2">permission Label</label>


                                        <input type="text" name="permission_label"
                                            className="form-control form-control-solid mb-3 mb-lg-0"
                                            placeholder="Permission label" onInput={(e) => setFormData({ ...formData, permission_label: e.target.value })} defaultValue={formData?.permission_label || editPermission?.label} />
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
    )
}