import { MysqlError } from "mysql";

export interface IDBManager
{
    ReadData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>;
    InsertOrUpdateData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>;
    DeleteData(query: string, paramCollection: (number | string | boolean)[]): Promise<any | MysqlError>;
}

export type MySqlType = MysqlError | any;

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