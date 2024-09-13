import { SortOrder } from "../../util/SortOrder";

export type AttendanceRecordOrderByInput = {
  classFieldId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
