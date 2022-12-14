import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity("profiles")
class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profileName: string;

    @Column()
    profileUrlImage: string;

}