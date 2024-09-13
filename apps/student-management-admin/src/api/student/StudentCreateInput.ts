import { AttendanceRecordCreateNestedManyWithoutStudentsInput } from "./AttendanceRecordCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
  patronymic?: string | null;
};
