import { KokkaiKaigirokuApiEntityBase } from '../KokkaiKaigirokuApiEntityBase';
import type { KokkaiKaigirokuApiSDK } from '../KokkaiKaigirokuApiSDK';
import type { Control } from '../types';
import type { Meeting, MeetingListMatch } from '../KokkaiKaigirokuApiTypes';
declare class MeetingEntity extends KokkaiKaigirokuApiEntityBase<Meeting> {
    constructor(client: KokkaiKaigirokuApiSDK, entopts: any);
    make(this: MeetingEntity): MeetingEntity;
    list(this: any, reqmatch?: MeetingListMatch, ctrl?: Control): Promise<MeetingEntity[]>;
}
export { MeetingEntity };
