<?php

use App\Http\Requests\singleFieldUpdateRequest;

if (!function_exists('getSql')) {
    function getSql($query)
    {
        $sql = $query->toSql();
        $bindings = $query->getBindings();
        foreach ($bindings as $binding) {
            $sql = preg_replace('/\?/', is_numeric($binding) ? $binding : "'{$binding}'", $sql, 1);
        }
        return $sql;
    }
}
if (!function_exists('updateSingleField')) {
    function updateSingleField($request, $modelInstance, string $field = 'status', string $field_display_name = 'Status')
    {
        $request->validate([
            $field => ['required'] // Or pass rules as an argument
        ]);
        $modelInstance->$field = $request->$field;

        if ($modelInstance->save()) {
            return response()->json([
                'success' => true,
                'message' => ucfirst($field_display_name) . ' updated successfully'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Unable to update ' . $field_display_name . ' at the moment! Please try again later.'
        ]);
    }
}
