import { Department } from "./department";
import { DoctorLevel } from "./doctor-level";
import { Hospital } from "./hospital";
import { User } from "./user";

export interface Doctor {
  user: User;
  introduction?: string;
  hospital: Hospital;
  department: Department;
  level: DoctorLevel;
}
