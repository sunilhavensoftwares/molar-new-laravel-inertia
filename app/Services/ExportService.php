<?php

namespace App\Services;

use App\Exports\GenericExport;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Str;

class ExportService {
    /**
     * Export data for any resource.
     *
     * @param array  $data
     * @param string $format
     * @param string $resource
     */
    public function export(array $data, array $headings, string $format = 'excel', string $resource = 'export') {
        $extension = $this->getExtension($format);
        $filename  = Str::snake($resource) . "_export." . $extension;

        if (in_array($format, ['excel', 'xlsx', 'csv'])) {
            // Wrap array into GenericExport class
            return Excel::download(new GenericExport($data,$headings), $filename, $this->getExcelFormat($format));
        }

        if ($format === 'pdf') {
            // PDF export via Blade view
            $pdf = Pdf::loadView('exports.template', [
                'data' => $data,
                'columns' => $headings,
                ///'columns' => array_keys($data[0] ?? [])
            ])->setPaper('a4', 'landscape');
            // $pdf->getDomPDF()->set_option("isHtml5ParserEnabled", true);
            // $pdf->getDomPDF()->set_option("isRemoteEnabled", true);
            // $pdf->getDomPDF()->set_option("isPhpEnabled", true);
            return $pdf->download($filename);
        }

        abort(400, 'Invalid export format');
    }

    protected function getExtension(string $format): string {
        return match (strtolower($format)) {
            'excel', 'xlsx' => 'xlsx',
            'csv' => 'csv',
            'pdf' => 'pdf',
            default => 'xlsx',
        };
    }

    protected function getExcelFormat(string $format) {
        return match (strtolower($format)) {
            'csv' => \Maatwebsite\Excel\Excel::CSV,
            default => \Maatwebsite\Excel\Excel::XLSX,
        };
    }
}
