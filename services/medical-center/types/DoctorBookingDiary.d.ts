/**
 * DoctorBookingDiary
 * A DoctorBookingDiary
 */
declare interface DoctorBookingDiary {
    id?: number;
    doctorId: number;
    endDateTime: string;
    patientId: number;
    startDateTime: string;
}
export { DoctorBookingDiary };
