-- CreateTable
CREATE TABLE IF NOT EXISTS "Doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "DoctorBookingDiary" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "startDateTime" TIMESTAMP(3) NOT NULL,
    "endDateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorBookingDiary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "PatientPayment" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PatientPayment_pkey" PRIMARY KEY ("id")
);
