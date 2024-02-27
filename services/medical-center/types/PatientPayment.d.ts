/**
 * PatientPayment
 * A PatientPayment
 */
declare interface PatientPayment {
    id?: number;
    amount: number;
    patientId: number;
    patientPaymentId?: number | null;
    paymentDate: string;
}
export { PatientPayment };
