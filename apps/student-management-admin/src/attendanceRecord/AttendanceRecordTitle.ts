import { AttendanceRecord as TAttendanceRecord } from "../api/attendanceRecord/AttendanceRecord";

export const ATTENDANCERECORD_TITLE_FIELD = "id";

export const AttendanceRecordTitle = (record: TAttendanceRecord): string => {
  return record.id?.toString() || String(record.id);
};
