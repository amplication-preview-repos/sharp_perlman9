import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";

export type Student = {
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  patronymic: string | null;
  updatedAt: Date;
};
