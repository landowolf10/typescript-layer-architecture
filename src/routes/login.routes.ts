import { LoginService } from '../service/login.service';
import { Router, Response, Request } from 'express';

export const loginRouter = (router: Router, service: LoginService): void => {
    router.post('/', async (req: Request, res:Response) => {
        try
        {
            const { correo, pass } = req.body;
            const result = await service.login({ correo, pass });
            res.status(200).send(result);
        }
        catch (error)
        {
            console.log(error);
            res.status(500).send({ error });
        }
    });
}