import { Department } from "./department";
import { User } from "./user";

export interface Appointment {
  creator: User;
  title: string;
  introduction: string;
  participants: User[];
  departments: Department[];
}
