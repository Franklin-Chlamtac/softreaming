import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Profile from "../Profiles/Profiles.model";




export enum UserRole{
    ADMIN = "admin",
    CUSTOMER = "customer"

}
@Entity("users")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password_hash: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default:UserRole.CUSTOMER
    })
    role: UserRole;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(() => Profile, (profile) => profile.user)
    profiles: Profile[];

    
}

export default User;

