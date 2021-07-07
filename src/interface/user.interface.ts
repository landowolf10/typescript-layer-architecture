//import { MysqlError } from 'mysql';

//export type MySqlType = any;

export interface IUser
{
    id?: number;
    nombre: string;
    correo: string
    pass: string;
}

export interface ILogin
{
    correo: string;
    pass: string;
}