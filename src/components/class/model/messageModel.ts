/**
 * 消息体
 */
export interface messageBody{
    id:string,//uuid,
    words:string,//message,
    timestamp:number,
    groupID:string,//group_+uuid
    avatar:string,//person or group avartar Src
    talker_name:string,//  person_name
    is_bigGroup:boolean,//three persons or more
    group_name:string,
    talker_avatar:string,
    talker_id:string,
}