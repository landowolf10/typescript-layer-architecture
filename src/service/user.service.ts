import { UserDA } from '../DAL/user/userDA';
import { IUser } from '../interface/user.interface';

export class UserService
{
    constructor(private userDA: UserDA) { }

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

    public async createUser(data: IUser)
    {
        try
        {
            await this.userDA.creatUser(data);

            const response = {
                message: 'User created successfully!',
                data
            }

            return response;
        }
        catch (error)
        {
            throw error
        }
    }
}