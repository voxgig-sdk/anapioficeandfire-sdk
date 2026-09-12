export interface Book {
    authors?: any[];
    characters?: any[];
    country?: string;
    id?: string;
    isbn?: string;
    mediaType?: string;
    name?: string;
    numberOfPages?: number;
    povCharacters?: any[];
    publisher?: string;
    released?: string;
    url?: string;
}
export interface BookLoadMatch {
    id: number;
}
export interface BookListMatch {
    page?: number;
    page_size?: number;
}
export interface Character {
    aliases?: any[];
    allegiances?: any[];
    books?: any[];
    born?: string;
    culture?: string;
    died?: string;
    father?: string;
    id?: string;
    mother?: string;
    name?: string;
    playedBy?: any[];
    povBooks?: any[];
    spouse?: string;
    titles?: any[];
    tvSeries?: any[];
    url?: string;
}
export interface CharacterLoadMatch {
    id: number;
}
export interface CharacterListMatch {
    culture?: string;
    name?: string;
    page?: number;
    page_size?: number;
}
export interface House {
    ancestralWeapons?: any[];
    cadetBranches?: any[];
    coatOfArms?: string;
    currentLord?: string;
    diedOut?: string;
    founded?: string;
    founder?: string;
    heir?: string;
    id?: string;
    name?: string;
    overlord?: string;
    region?: string;
    seats?: any[];
    swornMembers?: any[];
    titles?: any[];
    url?: string;
    words?: string;
}
export interface HouseLoadMatch {
    id: number;
}
export interface HouseListMatch {
    name?: string;
    page?: number;
    page_size?: number;
    region?: string;
}
