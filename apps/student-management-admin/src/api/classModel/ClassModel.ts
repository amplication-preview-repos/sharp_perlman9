import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";

export type ClassModel = {
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  date: Date | null;
  endTime: Date | null;
  id: string;
  link: string | null;
  name: string | null;
  startTime: Date | null;
  updatedAt: Date;
};
