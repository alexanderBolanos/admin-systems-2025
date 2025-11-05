import {z } from 'zod';

export type BaseRecord = Record<string, any>;

export enum Status  {
    SUCCESS = 1,
    FAIL = 0,
    UNKNOWN = -1,
    WAITING = -2,
};

export const BaseDTO = z.object({
    id: z.number().positive(),
    name: z.string().min(1).max(255),
    description: z.string().max(1024).optional(),
    author: z.string().min(1).max(255).optional(),
    status: z.enum(Status).default(Status.UNKNOWN),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export function validateBaseDTO(data: unknown) {
    return BaseDTO.safeParse(data);
}

export type BaseDTOType = z.infer<typeof BaseDTO>;