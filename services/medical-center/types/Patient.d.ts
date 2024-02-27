/**
 * Patient
 * A Patient
 */
declare interface Patient {
    id?: number;
    assignedDoctorId?: number | null;
    email: string;
    name: string;
    phone: string;
}
export { Patient };
