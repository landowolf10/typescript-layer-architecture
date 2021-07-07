import { DBManager } from '../db_config/DBManager';
import { IUser } from '../../interface/user.interface';

export class UserDA extends DBManager
{
    public async getUsers()
    {
        const query = 'SELECT * FROM usuarios';

        try
        {
            const data = await this.ReadData(query);
            return data;
        }
        catch (error)
        {
            throw error
        }
    }

    public async creatUser(data: IUser)
    {
        const query = "CALL spInsertarUsuario(?, ?, ?);";

        try
        {
            const result = await this.InsertOrUpdateData(query, [data.nombre, data.correo, data.pass]);

            return result;
        }
        catch (error)
        {
            console.log(error);
        }
    }
}