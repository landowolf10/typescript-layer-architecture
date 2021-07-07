import { NoteDA } from '../DAL/notes/noteDA';
import { INote } from '../interface/note.interface';

export class NoteService
{
    constructor(private noteDA: NoteDA) { }

    public async getNotes(userID: string)
    {
        try
        {
            const data = await this.noteDA.getNotes(userID);
            const noteData = JSON.parse(JSON.stringify(data))[0];

            return noteData;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }

    public async createNote(data: INote)
    {
        try
        {
            await this.noteDA.createNote(data);

            const response = {
                message: 'Note created successfully!',
                data
            }

            return response;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }

    public async updateNote(data: INote)
    {
        try
        {
            const result = await this.noteDA.updateNote(data);
            const affectedRows = JSON.parse(JSON.stringify(result)).affectedRows;
            let response = {};

            if(affectedRows > 0)
            {
                response = {
                    message: 'Note updated successfully!',
                    data
                }
            }
            else
            {
                response = {
                    message: 'No note with id ' + data.id + ' was found'
                }
            }

            return response;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }

    public async deleteNote(id: string)
    {
        try
        {
            const result = await this.noteDA.deleteNote(id);
            console.log(result);
            const affectedRows = JSON.parse(JSON.stringify(result)).affectedRows;
            let response = {};

            if(affectedRows > 0)
            {
                response = {
                    message: 'Note deleted successfully!'
                }
            }
            else
            {
                response = {
                    message: 'No note with id ' + id + ' was found'
                }
            }

            return response;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }
}