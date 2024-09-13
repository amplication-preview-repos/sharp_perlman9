import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScheduleWhereInput = {
  date?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
};
