import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "../User/User.model";



@Entity("profiles")
class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profileName: string;

    @Column()
    profileUrlImage: string;

    @Column()
    userId: number;


    @ManyToOne(() => User, (user)=> user.profiles)
    @JoinColumn({name:'userId', })
    user:User;



}

export default Profile;