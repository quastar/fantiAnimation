import handleConversationView from '../view/handleConversationView'
import {messageBody} from '../model/messageModel'
export default class conversationController  {
    public handleConversationView=new handleConversationView()
    public async getConversations():Promise<Array<messageBody>>{
      return await this.handleConversationView.getConversations()
    }
}