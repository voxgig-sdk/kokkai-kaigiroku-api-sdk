import { MeetingEntity } from './entity/MeetingEntity';
import { MeetingListEntity } from './entity/MeetingListEntity';
import { SpeechEntity } from './entity/SpeechEntity';
export type * from './KokkaiKaigirokuApiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { KokkaiKaigirokuApiEntityBase } from './KokkaiKaigirokuApiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class KokkaiKaigirokuApiSDK {
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
    Meeting(entopts?: Record<string, any>): MeetingEntity;
    MeetingList(entopts?: Record<string, any>): MeetingListEntity;
    Speech(entopts?: Record<string, any>): SpeechEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): KokkaiKaigirokuApiSDK;
    tester(testopts?: any, sdkopts?: any): KokkaiKaigirokuApiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof KokkaiKaigirokuApiSDK;
export { stdutil, config, BaseFeature, KokkaiKaigirokuApiEntityBase, KokkaiKaigirokuApiSDK, SDK, };
