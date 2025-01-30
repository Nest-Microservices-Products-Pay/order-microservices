import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { orderStatusList } from "../enum/order.enum";
import { orderStatus } from "@prisma/client";

export class OrderPaginationDto extends PaginationDto {
    @IsOptional()
    @IsEnum(orderStatusList, {
        message: `Valid status are ${orderStatusList}`
    })
    status: orderStatus
}