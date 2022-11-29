import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import  User  from "../User/User.model";


@Entity("profiles")
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"text"})
    name: string

    @Column({type:"text"})
    imageURL: string
    
    @ManyToOne(() => User, (user) => user.profiles)
    @JoinColumn({ name: "user_id" })
    user: User;
}

