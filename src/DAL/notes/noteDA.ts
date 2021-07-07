import { DBManager } from '../db_config/DBManager';
import { INote } from '../../interface/note.interface';

export class NoteDA extends DBManager
{
    public async getNotes(userID: string)
    {
        const query = 'CALL spMostrarNotas(?);';

        try
        {
            const result = await this.ReadData(query, [userID]);
            return result;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }

    public async createNote(data: INote)
    {
        const query = 'CALL spCrearNota(?, ?, ?);';

        try
        {
            const result = await this.InsertOrUpdateData(query, [data.id_usuario, data.titulo, data.contenido]);
            return result;
        }
        catch (error) 
        {
            console.log(error);
            throw error;
        }
    }

    public async updateNote(data: INote)
    {
        const query = 'CALL spActualizarNota(?, ?, ?);';

        try
        {
            const result = await this.InsertOrUpdateData(query, [data.id, data.titulo, data.contenido]);
            return result;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }

    public async deleteNote(id: string)
    {
        const query = 'CALL spEliminarNota(?);';

        try
        {
            const result = await this.DeleteData(query, [id]);
            return result;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }
}