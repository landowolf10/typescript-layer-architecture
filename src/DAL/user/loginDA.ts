import { DBManager } from '../db_config/DBManager';
import { ILogin } from '../../interface/user.interface';

export class LoginDA extends DBManager
{
    public async login(data: ILogin)
    {
        const query = 'CALL login(?, ?);';

        try
        {
            const result = await this.ReadData(query, [data.correo, data.pass]);

            return result;
        }
        catch (error)
        {
            console.log(error);
            throw error;
        }
    }
}