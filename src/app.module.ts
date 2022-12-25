import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutModule } from './workout/workout.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './workout/workout.entity';

@Module({
    imports: [
        WorkoutModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'workout.db',
            entities: [Workout],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
