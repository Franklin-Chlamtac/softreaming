import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../Profiles/Profiles.model";

@Entity("user")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"text"})
    userName: string;

    @Column({type:"text"})
    email: string;

    @Column({type:"text"})
    password: string;
    
    @Column({nullable: true})
    role: string;

    @OneToMany(() => Profile, (profiles) => profiles.user)
    profiles: Profile[];
}

export default User;

