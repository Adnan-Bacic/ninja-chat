<template>
    <div class="chat container">
        <h1 class="center teal-text">Welcome to ninja chat "{{ this.nameProp }}". <br> Start chatting!</h1>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in arrayMessages" v-bind:key="message.id">
                        <span class="teal-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage v-bind:nameProp="nameProp"/>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init.js'
import moment from 'moment'

export default {
    name: 'Chat',

    props: ['nameProp'],

    components:{
        NewMessage: NewMessage,
    },

    data(){
        return{
            //array for messages when we get the messages
            arrayMessages: [],
        }
    },

    created(){
        let ref = db.collection('messages').orderBy('timestamp')
        
        //listens for changes
        ref.onSnapshot(snapshot => {
            //console.log(snapshot.docChanges())
            snapshot.docChanges().forEach(change => {
                //if type === added, then we do something(seen in console that type is added)
                if(change.type === 'added'){
                    //doc is each individual document(document is in the firebase db)
                    let doc = change.doc
                    //push the message data
                    this.arrayMessages.push({
                        //message data
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
    .chat h2{
        font-size: 2.6em;
        margin-bottom: 40px;
    }
    .chat span{
        font-size: 1.4em;
    }
    .chat .time{
        display: block;
        font-size: 0.8em;
    }
    .messages{
        max-height: 300px;
        overflow: auto;
    }
</style>