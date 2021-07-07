export interface INote
{
    id?: number;
    id_usuario?: number;
    nombre_creador?: string;
    fecha?: Date;
    hora?: string;
    titulo: string;
    contenido: string;
}