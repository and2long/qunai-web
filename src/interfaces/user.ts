import { Gender } from "../constants/gender";


export interface User {
  userId: string;
  username: string;
  gender: Gender;
  phoneNumber?: string;
  introduction?: string;
}
