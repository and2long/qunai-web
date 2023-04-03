import { Department } from "./department";
import { DoctorLevel } from "./doctor-level";
import { Hospital } from "./hospital";

export interface Doctor {
  userId: string;
  introduction?: string;
  hospital: Hospital;
  department: Department;
  level: DoctorLevel;
}
