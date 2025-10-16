<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ExportService;
use App\Repositories\ExportRepository;
use Illuminate\Support\Facades\Validator;

class ExportController extends Controller
{
    protected $exportService;
    protected $exportRepository;

    public function __construct(ExportService $exportService, ExportRepository $exportRepository)
    {
        $this->exportService = $exportService;
        $this->exportRepository = $exportRepository;
    }

    public function export(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'data' => 'required',
            'format' => 'required|string',
            'resource' => 'required|string', // the page or data type to export
            'headings' => 'required'
        ]);

        if ($validation->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validation->errors()->first()
            ]);
        }

        $format = $request->format;
        $resource = $request->resource;

        // Validate format
        if (!$this->exportRepository->isValidFormat($format)) {
            return response()->json([
                'status' => 422,
                'message' => 'Invalid format selected.'
            ]);
        }

        // Decode data
        $data = json_decode($request->input('data'), true);
        $headings = json_decode($request->input('headings'), true);

        // ✅ Directly return the download response from ExportService
        return $this->exportService->export($data, $headings, $format, $resource);
    }
}
