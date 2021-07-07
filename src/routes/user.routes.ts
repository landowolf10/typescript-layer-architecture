import { UserService } from '../service/user.service';
import { Router, Response, Request } from 'express';

export const userRouter = (router: Router, service: UserService): void => {
    router.get('/', async (req: Request, res: Response) => {
        try
        {
            const data = await service.getUsers();
            res.status(200).send(data);
        }
        catch (error)
        {
            res.status(500).send(error);
        }
    });

    router.post('/', async (req: Request, res:Response) => {
        try
        {
            const { nombre, correo, pass } = req.body;
            const result = await service.createUser({ nombre, correo, pass });
            res.status(200).send(result);
        }
        catch (error)
        {
            console.log(error);
            res.status(500).send(error);
        }
    });
}