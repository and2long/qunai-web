import { Gender } from "../constants/gender";

export interface Doctor {
  userId: string,
  username: string,
  gender: Gender,
  hospitalName: string;
  departmentName: string;
  levelName: string;
  phoneNumber?: string;
  introduction?: string;
}
