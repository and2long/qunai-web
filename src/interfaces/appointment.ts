import { Department } from "./department";
import { User } from "./user";

export interface Appointment {
  creator: User;
  title: string;
  introduction: string;
  participants: User[];
  departments: Department[];
}

export interface AppointmentCreationPayload {
  creatorId: string,
  title: string,
  introduction: string,
}
