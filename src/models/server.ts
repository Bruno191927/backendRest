import express, {Application} from 'express';
import { AppDataSource } from '../services/database/database';
import routes from '../routes/index';
import { error404Handler, errorHandler } from '../middleware/index';
class Server {
    private app: Application;
    private port: string;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
    }
    async listen(){

        try {
            await AppDataSource.initialize().then(() => {
                console.log("conect database");
            }).catch((err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use('/api',routes);
        this.app.use(error404Handler);
        this.app.use(errorHandler);
        this.app.listen(this.port, () => {
            console.log(`Server run in port ${this.port}`);
        })
    }
}

export default Server;