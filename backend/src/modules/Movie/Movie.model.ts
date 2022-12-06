import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "../BaseEntity/BaseEntity.model";
import Category from "../Category/Category.model";



@Entity("movies")
class Movie extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: number;

    @ManyToMany(() => Category, (category)=> category.movies)
    @JoinTable({ name: "movies_categories" })
    categories: Category[];



}

export default Movie;


