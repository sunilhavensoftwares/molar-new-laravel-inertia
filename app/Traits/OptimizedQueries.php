<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait OptimizedQueries
{
    /**
     * Apply search filters with optimized LIKE queries
     */
    public function scopeSearchByName(Builder $query, ?string $search): Builder
    {
        if (empty($search)) {
            return $query;
        }

        return $query->where('name', 'like', $search . '%');
    }

    /**
     * Apply efficient pagination with proper counting
     */
    public function scopeOptimizedPaginate(Builder $query, int $perPage = 10)
    {
        return $query->paginate($perPage);
    }

    /**
     * Add compound sorting with proper index usage
     */
    public function scopeOrderByField(Builder $query, string $field, string $direction = 'asc'): Builder
    {
        $allowedDirections = ['asc', 'desc'];
        $direction = in_array(strtolower($direction), $allowedDirections) ? strtolower($direction) : 'asc';
        
        return $query->orderBy($field, $direction);
    }

    /**
     * Optimize LIKE queries to use indexes when possible
     */
    public function scopeStartsWith(Builder $query, string $field, string $value): Builder
    {
        return $query->where($field, 'like', $value . '%');
    }

    /**
     * Apply filters efficiently with array validation
     */
    public function scopeFilterByFields(Builder $query, array $filters): Builder
    {
        foreach ($filters as $field => $value) {
            if ($value !== null && $value !== '') {
                $query->where($field, 'like', $value . '%');
            }
        }

        return $query;
    }
}
