import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
