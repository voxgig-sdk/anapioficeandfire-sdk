import { BookEntity } from './entity/BookEntity';
import { CharacterEntity } from './entity/CharacterEntity';
import { HouseEntity } from './entity/HouseEntity';
export type * from './AnapioficeandfireTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { AnapioficeandfireEntityBase } from './AnapioficeandfireEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class AnapioficeandfireSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Book(entopts?: Record<string, any>): BookEntity;
    Character(entopts?: Record<string, any>): CharacterEntity;
    House(entopts?: Record<string, any>): HouseEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): AnapioficeandfireSDK;
    tester(testopts?: any, sdkopts?: any): AnapioficeandfireSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof AnapioficeandfireSDK;
export { stdutil, config, BaseFeature, AnapioficeandfireEntityBase, AnapioficeandfireSDK, SDK, };
