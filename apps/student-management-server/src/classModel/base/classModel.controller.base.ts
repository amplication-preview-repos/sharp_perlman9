/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClassModelService } from "../classModel.service";
import { ClassModelCreateInput } from "./ClassModelCreateInput";
import { ClassModel } from "./ClassModel";
import { ClassModelFindManyArgs } from "./ClassModelFindManyArgs";
import { ClassModelWhereUniqueInput } from "./ClassModelWhereUniqueInput";
import { ClassModelUpdateInput } from "./ClassModelUpdateInput";
import { AttendanceRecordFindManyArgs } from "../../attendanceRecord/base/AttendanceRecordFindManyArgs";
import { AttendanceRecord } from "../../attendanceRecord/base/AttendanceRecord";
import { AttendanceRecordWhereUniqueInput } from "../../attendanceRecord/base/AttendanceRecordWhereUniqueInput";

export class ClassModelControllerBase {
  constructor(protected readonly service: ClassModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClassModel })
  async createClassModel(
    @common.Body() data: ClassModelCreateInput
  ): Promise<ClassModel> {
    return await this.service.createClassModel({
      data: data,
      select: {
        createdAt: true,
        date: true,
        endTime: true,
        id: true,
        link: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ClassModel] })
  @ApiNestedQuery(ClassModelFindManyArgs)
  async classModels(@common.Req() request: Request): Promise<ClassModel[]> {
    const args = plainToClass(ClassModelFindManyArgs, request.query);
    return this.service.classModels({
      ...args,
      select: {
        createdAt: true,
        date: true,
        endTime: true,
        id: true,
        link: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClassModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async classModel(
    @common.Param() params: ClassModelWhereUniqueInput
  ): Promise<ClassModel | null> {
    const result = await this.service.classModel({
      where: params,
      select: {
        createdAt: true,
        date: true,
        endTime: true,
        id: true,
        link: true,
        name: true,
        startTime: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ClassModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClassModel(
    @common.Param() params: ClassModelWhereUniqueInput,
    @common.Body() data: ClassModelUpdateInput
  ): Promise<ClassModel | null> {
    try {
      return await this.service.updateClassModel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          endTime: true,
          id: true,
          link: true,
          name: true,
          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ClassModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClassModel(
    @common.Param() params: ClassModelWhereUniqueInput
  ): Promise<ClassModel | null> {
    try {
      return await this.service.deleteClassModel({
        where: params,
        select: {
          createdAt: true,
          date: true,
          endTime: true,
          id: true,
          link: true,
          name: true,
          startTime: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/attendanceRecords")
  @ApiNestedQuery(AttendanceRecordFindManyArgs)
  async findAttendanceRecords(
    @common.Req() request: Request,
    @common.Param() params: ClassModelWhereUniqueInput
  ): Promise<AttendanceRecord[]> {
    const query = plainToClass(AttendanceRecordFindManyArgs, request.query);
    const results = await this.service.findAttendanceRecords(params.id, {
      ...query,
      select: {
        classField: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        status: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attendanceRecords")
  async connectAttendanceRecords(
    @common.Param() params: ClassModelWhereUniqueInput,
    @common.Body() body: AttendanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendanceRecords: {
        connect: body,
      },
    };
    await this.service.updateClassModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attendanceRecords")
  async updateAttendanceRecords(
    @common.Param() params: ClassModelWhereUniqueInput,
    @common.Body() body: AttendanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendanceRecords: {
        set: body,
      },
    };
    await this.service.updateClassModel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attendanceRecords")
  async disconnectAttendanceRecords(
    @common.Param() params: ClassModelWhereUniqueInput,
    @common.Body() body: AttendanceRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attendanceRecords: {
        disconnect: body,
      },
    };
    await this.service.updateClassModel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
