import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AttendanceRecordCreateInput = {
  classField?: ClassModelWhereUniqueInput | null;
  date?: Date | null;
  status?: "Option1" | null;
  student?: StudentWhereUniqueInput | null;
};
