import { In } from "typeorm";
import { AppDataSource } from "../../services/Database";
import Category from "./Category.model";


interface createCategoryPayload {
    name: string;
}

class categoryController {
    async create(payload: createCategoryPayload){
        const category = await AppDataSource.getRepository(Category).save(payload);
        return category;
    }
    async list(){
        const categories = await AppDataSource.getRepository(Category).find();
        return categories;
    }
    async listByIds(ids: number[]){
        const categories = await AppDataSource.getRepository(Category).find({
            where: { id: In(ids) }
        })
        return categories;
    }
}

export default new categoryController();