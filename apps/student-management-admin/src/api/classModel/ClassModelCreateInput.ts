import { AttendanceRecordCreateNestedManyWithoutClassModelsInput } from "./AttendanceRecordCreateNestedManyWithoutClassModelsInput";

export type ClassModelCreateInput = {
  attendanceRecords?: AttendanceRecordCreateNestedManyWithoutClassModelsInput;
  date?: Date | null;
  endTime?: Date | null;
  link?: string | null;
  name?: string | null;
  startTime?: Date | null;
};
