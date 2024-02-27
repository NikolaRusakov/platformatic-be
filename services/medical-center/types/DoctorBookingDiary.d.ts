/**
 * DoctorBookingDiary
 * A DoctorBookingDiary
 */
declare interface DoctorBookingDiary {
    id?: number;
    doctorBookId?: number | null;
    doctorId: number;
    endDateTime: string;
    patientBookBook?: number | null;
    patientId: number;
    startDateTime: string;
}
export { DoctorBookingDiary };
