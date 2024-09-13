import { ClassModel } from "../classModel/ClassModel";
import { Student } from "../student/Student";

export type AttendanceRecord = {
  classField?: ClassModel | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
