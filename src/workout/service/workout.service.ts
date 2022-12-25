import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Workout } from '../workout.entity';

@Injectable()
export class WorkoutService {
    constructor(
        @InjectRepository(Workout)
        private WorkoutRepository: Repository<Workout>,
    ) {}

    async getAll(): Promise<Workout[]> {
        return await this.WorkoutRepository.find();
    }

    async create(workout: Workout): Promise<Workout> {
        return this.WorkoutRepository.save(workout);
    }

    async getOne(id: number): Promise<Workout> {
        return await this.WorkoutRepository.findOneBy({ id });
    }

    async update(id: number, workout: Workout): Promise<UpdateResult> {
        return await this.WorkoutRepository.update(id, workout);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.WorkoutRepository.delete(id);
    }
}
