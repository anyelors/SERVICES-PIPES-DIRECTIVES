export interface Dato{

    info:Informacion; 
    results:Array<Personaje>


}

export interface Informacion{

    count:number;
    pages:number;
    next: null | string;
    prev: null | string;

}


export interface Personaje{

    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:Origen;
    location:Localizacion;
    image:string;
    episode:Array<string>;
    url:string;
    created:string;

}


export interface Origen{

    name:string;
    url:string;

}


export interface Localizacion{

    name:string;
    url:string;
}