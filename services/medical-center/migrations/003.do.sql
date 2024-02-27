
ALTER TABLE "Patient" ADD COLUMN IF NOT EXISTS assigned_doctor_id INTEGER REFERENCES "Doctor"(id);

ALTER TABLE "DoctorBookingDiary" ADD COLUMN IF NOT EXISTS patient_book_book INTEGER REFERENCES "Patient"(id);
ALTER TABLE "DoctorBookingDiary" ADD COLUMN IF NOT EXISTS doctor_book_id INTEGER REFERENCES "Doctor"(id);
   
ALTER TABLE "PatientPayment" ADD COLUMN IF NOT EXISTS patient_payment_id INTEGER REFERENCES "Patient"(id);

