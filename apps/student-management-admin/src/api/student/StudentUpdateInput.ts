import { AttendanceRecordUpdateManyWithoutStudentsInput } from "./AttendanceRecordUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
  patronymic?: string | null;
};
