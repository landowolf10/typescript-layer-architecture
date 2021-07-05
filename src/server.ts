import express, { Router } from 'express';
import morgan from 'morgan';
import { UserDA } from './DAL/index';
import { UserService } from './service/index';
import { userRouter } from "./routes/user.routes";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
//app.use('/user', router);

userRouter(router, new UserService(new UserDA()));

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});