import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    exercise: string;

    @Column()
    pr: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
