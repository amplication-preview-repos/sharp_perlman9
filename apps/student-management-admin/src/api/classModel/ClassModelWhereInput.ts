import { AttendanceRecordListRelationFilter } from "../attendanceRecord/AttendanceRecordListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClassModelWhereInput = {
  attendanceRecords?: AttendanceRecordListRelationFilter;
  date?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
};
