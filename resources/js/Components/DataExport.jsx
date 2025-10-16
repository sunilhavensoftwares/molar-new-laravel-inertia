import { useState } from 'react';
import api from '@/Lib/axios';
import { showErrorToast } from '@/Misc/loadToastr';
import Select2Input from '@/Components/Select2Input';
export default function DataExport({ data, resource, headings }) {
    const [exportFormat, setExportFormat] = useState(''); // default export format
    const [isProcessing, setProcessing] = useState(false);

    const handleFormatChange = (value) => {
        setExportFormat(value);
    };
    const handleDiscard = () => {
        const exportModal = document.getElementById('kt_modal_export_users');
        const modalInstance = bootstrap.Modal.getInstance(exportModal); // get existing instance
        if (modalInstance) {            
            modalInstance.hide(); // hides the modal
        }
        setExportFormat(''); // reset React state
        // Reset the Select2 UI
        const select = $("select[name='format']");
        select.val(null).trigger('change'); // clears the Select2 selection
    }
    const handleExportSubmit = async () => {
        setProcessing(true);

        // Filter data based on headings
        const dataToExport = data.map((row) => {
            const filteredRow = {};
            headings.forEach((key) => {
                if (key in row) filteredRow[key] = row[key];
            });
            return filteredRow;
        });

        const fd = new FormData();
        fd.append('format', exportFormat);
        fd.append('data', JSON.stringify(dataToExport));
        fd.append('resource', resource);
        fd.append('headings', JSON.stringify(headings));

        try {
            const response = await api.post(route('export_data'), fd, {
                responseType: 'blob', // important to handle file download
            });

            if (response.status === 200) {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                const filename = `${resource}_export.${exportFormat === 'excel' ? 'xlsx' : exportFormat}`;
                link.href = url;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
                link.remove();
            } else {
                showErrorToast('Export failed with status ' + response.status);
            }
        } catch (err) {
            console.error(err);
            showErrorToast(err?.response?.data?.message || 'Something went wrong while exporting.');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            {/* begin::Form */}
            <form id="kt_modal_export_users_form" className="form" action="#">

                {/* begin::Input group */}
                <div className="fv-row mb-10">
                    {/* begin::Label */}
                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                        Export Format:</label>
                    {/* end::Label */}
                    {/* begin::Input */}
                    <Select2Input name="format" data-control="select2"
                        data-placeholder="Select a format" data-hide-search="true"
                        className="form-select form-select-solid fw-bold" defaultValue={exportFormat} onChange={(value) => { handleFormatChange(value) }}>
                        <option></option>
                        <option value="excel">Excel</option>
                        <option value="pdf">PDF</option>
                        <option value="csv">CSV</option>
                    </Select2Input>
                    {/* end::Input */}
                </div>
                {/* end::Input group */}
                {/* begin::Actions */}
                <div className="text-center">
                    <button type="reset" className="btn btn-light me-3" onClick={handleDiscard}>Discard</button>
                    <button className="btn btn-primary" data-kt-users-modal-action="submit" disabled={!exportFormat || isProcessing} onClick={handleExportSubmit}>
                        {!isProcessing && <span className="indicator-label">Export</span>}
                        {isProcessing && <span className="indicator-label">Please Wait..</span>}
                    </button>
                </div>
                {/* end::Actions */}
            </form>
            {/* end::Form */}
        </>

    );
}
