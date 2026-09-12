import { AnapioficeandfireEntityBase } from '../AnapioficeandfireEntityBase';
import type { AnapioficeandfireSDK } from '../AnapioficeandfireSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../AnapioficeandfireTypes';
declare class CharacterEntity extends AnapioficeandfireEntityBase<Character> {
    constructor(client: AnapioficeandfireSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
