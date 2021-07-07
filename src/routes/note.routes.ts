import { NoteService } from '../service/note.service';
import { Router, Response, Request } from 'express';

export const noteRouter = (router: Router, service: NoteService): void => {
    router.get('/:userID', async (req: Request, res: Response) => {
        try
        {
            const { userID } = req.params;
            const data = await service.getNotes(userID);
            res.status(200).send(data);
        }
        catch (error)
        {
            console.log(error);
            res.status(500).send(error);
        }
    });

    router.post('/', async (req: Request, res: Response) => {
        try
        {
            const { id_usuario, titulo, contenido } = req.body;
            const result = await service.createNote({ id_usuario, titulo, contenido });
            res.status(200).send(result);
        }
        catch (error)
        {
            console.log(error);
            res.status(500).send(error);
        }
    });

    router.put('/', async (req: Request, res: Response) => {
        try
        {
            const { id, titulo, contenido } = req.body;
            const result = await service.updateNote({ id, titulo, contenido });
            res.status(200).send(result);
        }
        catch (error)
        {
            console.log(error);
            res.status(500).send(error);
        }
    });

    router.delete('/:id', async (req: Request, res: Response) => {
        try
        {
            const { id } = req.params;
            const result = await service.deleteNote(id);
            res.status(200).send(result);
        }
        catch (error)
        {
            console.log(error);
            res.status(500).send(error);
        }
    });
}