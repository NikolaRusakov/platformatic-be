import { Doctor } from './Doctor'
import { DoctorBookingDiary } from './DoctorBookingDiary'
import { Movie } from './Movie'
import { Patient } from './Patient'
import { PatientPayment } from './PatientPayment'
  
interface EntityTypes  {
  Doctor: Doctor
    DoctorBookingDiary: DoctorBookingDiary
    Movie: Movie
    Patient: Patient
    PatientPayment: PatientPayment
}
  
export { EntityTypes, Doctor, DoctorBookingDiary, Movie, Patient, PatientPayment }