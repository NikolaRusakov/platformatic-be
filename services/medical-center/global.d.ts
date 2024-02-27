import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Doctor,DoctorBookingDiary,Movie,Patient,PatientPayment } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Doctor' | 'DoctorBookingDiary' | 'Movie' | 'Patient' | 'PatientPayment'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  doctor: Entity<Doctor>,
    doctorBookingDiary: Entity<DoctorBookingDiary>,
    movie: Entity<Movie>,
    patient: Entity<Patient>,
    patientPayment: Entity<PatientPayment>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'doctor', hooks: EntityHooks<Doctor>): any
    addEntityHooks(entityName: 'doctorBookingDiary', hooks: EntityHooks<DoctorBookingDiary>): any
    addEntityHooks(entityName: 'movie', hooks: EntityHooks<Movie>): any
    addEntityHooks(entityName: 'patient', hooks: EntityHooks<Patient>): any
    addEntityHooks(entityName: 'patientPayment', hooks: EntityHooks<PatientPayment>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
