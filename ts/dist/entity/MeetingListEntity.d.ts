import { KokkaiKaigirokuApiEntityBase } from '../KokkaiKaigirokuApiEntityBase';
import type { KokkaiKaigirokuApiSDK } from '../KokkaiKaigirokuApiSDK';
import type { Control } from '../types';
import type { MeetingList, MeetingListListMatch } from '../KokkaiKaigirokuApiTypes';
declare class MeetingListEntity extends KokkaiKaigirokuApiEntityBase<MeetingList> {
    constructor(client: KokkaiKaigirokuApiSDK, entopts: any);
    make(this: MeetingListEntity): MeetingListEntity;
    list(this: any, reqmatch?: MeetingListListMatch, ctrl?: Control): Promise<MeetingListEntity[]>;
}
export { MeetingListEntity };
