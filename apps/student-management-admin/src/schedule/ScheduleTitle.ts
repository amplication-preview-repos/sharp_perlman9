import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "link";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.link?.toString() || String(record.id);
};
