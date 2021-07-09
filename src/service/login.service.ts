import { LoginDA } from '../DAL/user/loginDA';
import { ILogin } from '../interface/user.interface';

export class LoginService
{
    constructor(private loginDA: LoginDA) { }

    public async login(data: ILogin)
    {
        try
        {
            const result = await this.loginDA.login(data);
            const loginData = JSON.parse(JSON.stringify(result))[0];
            let response = {};

            if(loginData.length > 0)
            {
                response = {
                    message: 'User loged in successfully!',
                    user_data: loginData[0]
                };
            }
            else
            {
                response = {
                    error: 'Usuario y/o contraseña inválidos.'
                };
            }

            return response;
        }
        catch (error)
        {
            throw error;
        }
    }
}