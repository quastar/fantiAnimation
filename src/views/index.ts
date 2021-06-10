import { Component, Vue } from 'vue-property-decorator'
import home from './home/index.vue'
import im from './im/index.vue'
import consersationController from '../components/class/controller/conversationController'
import {messageBody} from '../components/class/model/messageModel'
import {Person} from '../components/class/model/personModel'
type switchPage='home'|'im'|'default'

@Component({
    components:{
        'im-home':home,
        'im-im':im
    }
})
export default class container extends Vue {
    consersationController=new consersationController()
    Page:switchPage='home'
    created(){
       this.init()
    }
    async init(){
        Vue.prototype.fanta_im={
            message:[
                {
                    name:'11',
                    age:22
                }
            ]
        }
    //    const res=await this.consersationController.getConversations()
    //    this.conversations=res;
    }
   
}