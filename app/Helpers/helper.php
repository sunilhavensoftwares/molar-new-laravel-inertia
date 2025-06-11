<?php

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
