<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create indexes with proper length limits for string columns, avoiding duplicates
        $indexes = [
            'patients_name_index' => 'CREATE INDEX patients_name_index ON patients (name(191))',
            'patients_phone_index' => 'CREATE INDEX patients_phone_index ON patients (phone(191))',
            'patients_email_index' => 'CREATE INDEX patients_email_index ON patients (email(191))',
            'patients_is_temporary_index' => 'CREATE INDEX patients_is_temporary_index ON patients (is_temporary)',
            'patients_is_visible_index' => 'CREATE INDEX patients_is_visible_index ON patients (is_visible)',
            
            'medical_histories_patient_date_index' => 'CREATE INDEX medical_histories_patient_date_index ON medical_histories (patient_id, date)',
            'medical_histories_doctor_index' => 'CREATE INDEX medical_histories_doctor_index ON medical_histories (doctor_id)',
            'medical_histories_category_index' => 'CREATE INDEX medical_histories_category_index ON medical_histories (medical_history_category_id)',
            'medical_histories_status_index' => 'CREATE INDEX medical_histories_status_index ON medical_histories (medical_history_status_id)',
            'medical_histories_date_index' => 'CREATE INDEX medical_histories_date_index ON medical_histories (date)',
            'medical_histories_status_flag_index' => 'CREATE INDEX medical_histories_status_flag_index ON medical_histories (status)',
            
            'doctors_name_index' => 'CREATE INDEX doctors_name_index ON doctors (name(191))',
            'doctors_email_index' => 'CREATE INDEX doctors_email_index ON doctors (email(191))',
            
            'case_refer_patient_index' => 'CREATE INDEX case_refer_patient_index ON case_refer_histories (patient_id)',
            'case_refer_from_doctor_index' => 'CREATE INDEX case_refer_from_doctor_index ON case_refer_histories (from_doctor_id)',
            'case_refer_to_doctor_index' => 'CREATE INDEX case_refer_to_doctor_index ON case_refer_histories (to_doctor_id)',
            'case_refer_referrer_user_index' => 'CREATE INDEX case_refer_referrer_user_index ON case_refer_histories (referrer_user_id)'
        ];
        
        foreach ($indexes as $indexName => $sql) {
            try {
                DB::statement($sql);
            } catch (\Exception $e) {
                // Index might already exist, skip silently
                if (strpos($e->getMessage(), 'Duplicate key name') === false) {
                    throw $e;
                }
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop the indexes created in up() method
        DB::statement('DROP INDEX patients_name_index ON patients');
        DB::statement('DROP INDEX patients_phone_index ON patients');
        DB::statement('DROP INDEX patients_email_index ON patients');
        DB::statement('DROP INDEX patients_is_temporary_index ON patients');
        DB::statement('DROP INDEX patients_is_visible_index ON patients');
        
        DB::statement('DROP INDEX medical_histories_patient_date_index ON medical_histories');
        DB::statement('DROP INDEX medical_histories_doctor_index ON medical_histories');
        DB::statement('DROP INDEX medical_histories_category_index ON medical_histories');
        DB::statement('DROP INDEX medical_histories_status_index ON medical_histories');
        DB::statement('DROP INDEX medical_histories_date_index ON medical_histories');
        DB::statement('DROP INDEX medical_histories_status_flag_index ON medical_histories');
        
        DB::statement('DROP INDEX doctors_name_index ON doctors');
        DB::statement('DROP INDEX doctors_email_index ON doctors');
        
        DB::statement('DROP INDEX case_refer_patient_index ON case_refer_histories');
        DB::statement('DROP INDEX case_refer_from_doctor_index ON case_refer_histories');
        DB::statement('DROP INDEX case_refer_to_doctor_index ON case_refer_histories');
        DB::statement('DROP INDEX case_refer_referrer_user_index ON case_refer_histories');
    }
};
