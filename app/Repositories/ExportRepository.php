<?php

namespace App\Repositories;

class ExportRepository
{
    /**
     * Get all available export formats
     *
     * @return array
     */
    public function getFormats(): array
    {
        return [
            'excel' => 'Excel',
            'pdf'   => 'PDF',
            'csv'   => 'CSV',
            'zip'   => 'ZIP',
        ];
    }

    /**
     * Validate if given format is supported
     *
     * @param string $format
     * @return bool
     */
    public function isValidFormat(string $format): bool
    {
        return array_key_exists($format, $this->getFormats());
    }

    /**
     * Get label/display name for a format
     *
     * @param string $format
     * @return string|null
     */
    public function getLabel(string $format): ?string
    {
        $formats = $this->getFormats();
        return $formats[$format] ?? null;
    }
}
