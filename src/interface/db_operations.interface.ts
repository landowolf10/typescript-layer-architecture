export interface IDBManager
{
    ReadData(query: string, paramCollection: (number | string | boolean)[]): any;
    InsertOrUpdateData(query: string, paramCollection: (number | string | boolean)[]): any;
    DeleteData(query: string, paramCollection: (number | string | boolean)[]): Promise<any>;
}