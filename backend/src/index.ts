import { AppDataSource } from "./services/Database";
import { app } from "./app"




async function start() {
    try {
        await AppDataSource.initialize();
        console.log("abriu hehe")
        app.listen(5173, () => {
            console.log("server started on port 5173")
        })
    } catch (error) {
        console.log(error, "deu erro isso ai")
        
    }
    
}

start();