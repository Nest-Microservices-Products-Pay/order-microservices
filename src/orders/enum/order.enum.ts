import { orderStatus } from "@prisma/client";

export const orderStatusList = [
    orderStatus.PENDING,
    orderStatus.DELIVERED,
    orderStatus.CANCELLED,
]