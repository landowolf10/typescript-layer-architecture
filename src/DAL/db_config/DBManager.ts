import { IDBManager } from '../../interface/db_operations.interface';
import connection  from './DBConnection';

export class DBManager implements IDBManager
{
    public ReadData(query: string, paramCollection: (string | number | boolean)[] = [])
    {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if(err)
                    return reject(err);

                return resolve(result);
            });
        });
    }

    public InsertOrUpdateData(query: string, paramCollection: (string | number | boolean | undefined)[])
    {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if (err)
                    return reject(err)
                
                return resolve(result);
            })
        })
    }

    public DeleteData(query: string, paramCollection: (string | number | boolean)[])
    {
        return new Promise((resolve, reject) => {
            connection.query(query, paramCollection, (err, result) => {
                if (err) 
                    return reject(err)
                
                return resolve(result);
            })
        })
    }
}