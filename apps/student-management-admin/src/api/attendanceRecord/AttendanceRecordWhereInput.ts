import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceRecordWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  student?: StudentWhereUniqueInput;
};
