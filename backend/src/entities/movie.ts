import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movieInfos')
export class Movie{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type:'text'})
    movieName: string

    @Column({type:'text'})
    category: string

    @Column({type:'text'})
    description: string

    @Column({type:'text'})
    release: string

    @Column({type:'text'})
    duration: string

    @Column({type:'text'})
    url: string




}