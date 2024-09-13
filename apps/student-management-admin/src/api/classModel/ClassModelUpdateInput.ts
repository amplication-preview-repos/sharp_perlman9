import { AttendanceRecordUpdateManyWithoutClassModelsInput } from "./AttendanceRecordUpdateManyWithoutClassModelsInput";

export type ClassModelUpdateInput = {
  attendanceRecords?: AttendanceRecordUpdateManyWithoutClassModelsInput;
  date?: Date | null;
  endTime?: Date | null;
  link?: string | null;
  name?: string | null;
  startTime?: Date | null;
};
