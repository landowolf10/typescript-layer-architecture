import { DBManager } from "./DBManager";
import { IUser } from "../types/types";

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
}