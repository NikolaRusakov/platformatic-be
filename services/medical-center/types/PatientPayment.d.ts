/**
 * PatientPayment
 * A PatientPayment
 */
declare interface PatientPayment {
    id?: number;
    amount: number;
    patientId: number;
    paymentDate: string;
}
export { PatientPayment };
