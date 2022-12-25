import {
    Controller,
    Get,
    Post,
    Param,
    Put,
    Delete,
    Body,
} from '@nestjs/common';
import { WorkoutService } from 'src/workout/service/workout.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Workout } from 'src/workout/workout.entity';

@Controller('workout')
export class WorkoutController {
    constructor(private WorkoutService: WorkoutService) {}

    @Get()
    async getAll(): Promise<Workout[]> {
        return await this.WorkoutService.getAll();
    }

    @Post()
    async create(@Body() workout: Workout): Promise<Workout> {
        return await this.WorkoutService.create(workout);
    }

    @Get(':id')
    async getOne(@Param() id: number): Promise<Workout> {
        return await this.WorkoutService.getOne(id);
    }

    @Put(':id')
    async update(
        @Param() id: number,
        @Body() workout: Workout,
    ): Promise<UpdateResult> {
        return await this.WorkoutService.update(id, workout);
    }

    @Delete(':id')
    async delete(@Param() id: number): Promise<DeleteResult> {
        return await this.WorkoutService.delete(id);
    }
}
