import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Movie from "../Movie/Movie.model";


@Entity("categories")
class Category{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(()=> Movie,(movie)=>movie.categories)
    movies: Movie[];

}

export default Category;