
import {messageBody} from '../model/messageModel'
import request from '../../request/request'

export default class handleConversationView  {
    
    public async getConversations():Promise<Array<messageBody>>{
        const res= await request.get('http://localhost:8080/testJSON/conversations.json')
        return res.data;
    }
}