import { KokkaiKaigirokuApiEntityBase } from '../KokkaiKaigirokuApiEntityBase';
import type { KokkaiKaigirokuApiSDK } from '../KokkaiKaigirokuApiSDK';
import type { Control } from '../types';
import type { Speech, SpeechListMatch } from '../KokkaiKaigirokuApiTypes';
declare class SpeechEntity extends KokkaiKaigirokuApiEntityBase<Speech> {
    constructor(client: KokkaiKaigirokuApiSDK, entopts: any);
    make(this: SpeechEntity): SpeechEntity;
    list(this: any, reqmatch?: SpeechListMatch, ctrl?: Control): Promise<SpeechEntity[]>;
}
export { SpeechEntity };
