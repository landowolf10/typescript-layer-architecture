import { UserService } from '../service';
import { Router, Response, Request } from 'express';

export const userRouter = (router: Router, service: UserService): void => {
    router.get('/user', async (req: Request, res: Response) => {
        try
        {
            const data = await service.getUsers();
        }
        catch (error)
        {
            res.status(500).send({ 'err': error });
        }
    });
}