import express, { Application } from 'express';
import morgan from 'morgan';
import { UserDA } from './DAL/user/userDA';
import { LoginDA } from './DAL/user/loginDA';
import { NoteDA } from './DAL/notes/noteDA';
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';
import { NoteService } from './service/note.service';
import { userRouter } from './routes/user.routes';
import { loginRouter } from './routes/login.routes';
import { noteRouter } from './routes/note.routes';

export class App
{
    private app: Application;


    constructor(private port?: number | string)
    {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() 
    {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares()
    {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes()
    {
        const useRoutes = express.Router();
        const loginRoutes = express.Router();
        const noteRoutes = express.Router();

        this.app.use('/user', useRoutes);
        this.app.use('/user/login', loginRoutes);
        this.app.use('/note', noteRoutes);

        userRouter(useRoutes, new UserService(new UserDA()));
        loginRouter(loginRoutes, new LoginService(new LoginDA()));
        noteRouter(noteRoutes, new NoteService(new NoteDA()));
    }

    async listen()
    {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}