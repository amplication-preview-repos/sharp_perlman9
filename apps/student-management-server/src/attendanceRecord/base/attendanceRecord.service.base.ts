/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AttendanceRecord as PrismaAttendanceRecord,
  ClassModel as PrismaClassModel,
  Student as PrismaStudent,
} from "@prisma/client";

export class AttendanceRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttendanceRecordCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attendanceRecord.count(args);
  }

  async attendanceRecords(
    args: Prisma.AttendanceRecordFindManyArgs
  ): Promise<PrismaAttendanceRecord[]> {
    return this.prisma.attendanceRecord.findMany(args);
  }
  async attendanceRecord(
    args: Prisma.AttendanceRecordFindUniqueArgs
  ): Promise<PrismaAttendanceRecord | null> {
    return this.prisma.attendanceRecord.findUnique(args);
  }
  async createAttendanceRecord(
    args: Prisma.AttendanceRecordCreateArgs
  ): Promise<PrismaAttendanceRecord> {
    return this.prisma.attendanceRecord.create(args);
  }
  async updateAttendanceRecord(
    args: Prisma.AttendanceRecordUpdateArgs
  ): Promise<PrismaAttendanceRecord> {
    return this.prisma.attendanceRecord.update(args);
  }
  async deleteAttendanceRecord(
    args: Prisma.AttendanceRecordDeleteArgs
  ): Promise<PrismaAttendanceRecord> {
    return this.prisma.attendanceRecord.delete(args);
  }

  async getClassField(parentId: string): Promise<PrismaClassModel | null> {
    return this.prisma.attendanceRecord
      .findUnique({
        where: { id: parentId },
      })
      .classField();
  }

  async getStudent(parentId: string): Promise<PrismaStudent | null> {
    return this.prisma.attendanceRecord
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
}
