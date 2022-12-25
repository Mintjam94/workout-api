import { Module } from '@nestjs/common';
import { WorkoutService } from './service/workout.service';
import { WorkoutController } from './controller/workouts/workout.controller';
import { Workout } from './workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Workout])],
    providers: [WorkoutService],
    controllers: [WorkoutController],
})
export class WorkoutModule {}
