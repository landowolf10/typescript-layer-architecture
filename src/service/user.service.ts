import { UserDA } from '../DAL';
import { IUser } from '../types/types';

export class UserService
{
    constructor(private userDA: UserDA) {}

    public async getUsers()
    {
        try
        {
            const data = await this.userDA.getUsers();
            return data;
        }
        catch (error)
        {
            console.log(error);
        }
    }
}