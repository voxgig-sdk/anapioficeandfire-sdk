import { AnapioficeandfireEntityBase } from '../AnapioficeandfireEntityBase';
import type { AnapioficeandfireSDK } from '../AnapioficeandfireSDK';
import type { Control } from '../types';
import type { House, HouseLoadMatch, HouseListMatch } from '../AnapioficeandfireTypes';
declare class HouseEntity extends AnapioficeandfireEntityBase<House> {
    constructor(client: AnapioficeandfireSDK, entopts: any);
    make(this: HouseEntity): HouseEntity;
    load(this: any, reqmatch?: HouseLoadMatch, ctrl?: Control): Promise<HouseEntity>;
    list(this: any, reqmatch?: HouseListMatch, ctrl?: Control): Promise<HouseEntity[]>;
}
export { HouseEntity };
