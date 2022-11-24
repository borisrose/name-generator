
interface Name {
    id: number;
    name : string;
    gender: string;
    popularity: string;
    length: string;

}

export enum Gender {
    GIRL = "Fille",
    BOY = "Garçon",
    UNISEX = "Unisexe",
}
  
export enum Popularity {
    UNIQUE = "Hors norme",
    TRENDY = "A la mode",
};
  
export enum Length {
    SHORT = "Court",
    LONG = "Long",
    ALL = "Tout",
};
  



export const names: Name[] = [

    {
        id: 1,
        name : 'John',
        gender : Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT


    },

    {
        id: 2,
        name : 'Boris',
        gender : Gender.BOY,
        popularity: Popularity.UNIQUE,
        length: Length.SHORT

    },

    {
        id: 3,
        name : 'Lucie',
        gender : Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.SHORT



    },

    {
        id: 4,
        name : 'Mona',
        gender : Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.SHORT


    },
    {
        id: 5,
        name : 'Anne-Elisa',
        gender : Gender.GIRL,
        popularity: Popularity.UNIQUE,
        length: Length.LONG


    },




]