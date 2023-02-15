export interface Iaddress{
    street: string,    
    city: string,
    zipcode:string
}

export interface IUser{
    id: number;
    name: string;    
    address: Iaddress
}

export interface ITodo{    
    id: number,
    title: string,
    completed: boolean    
}