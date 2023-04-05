import { User } from "./user";

export interface Appointment {
  creator: User;
  title: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  introduction: string;
  participants: User[];
  departmentNames: string[];
}

export interface AppointmentCreationPayload {
  creatorId: string,
  title: string,
  introduction: string,
  departmentIds: number[],
  startTime: string,
  endTime: string,
}
