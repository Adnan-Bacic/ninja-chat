<template>
    <div class="new-message">
        <form v-on:submit.prevent="addMessage()">
            <label for="new-message">New message</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {

    name: 'NewMessage',

    props: ['nameProp'],

    data(){
        return{
            newMessage: null,
            feedback: null
        }
    },

    methods:{
        addMessage(){
            //show data
            //console.log(this.newMessage, this.nameProp, Date.now());

            //if there is content
            if(this.newMessage){
                db.collection('messages').add({
                    //inserting message info
                    name: this.nameProp,
                    content: this.newMessage,
                    timestamp: Date.now(),
                }).catch(error => {
                    console.log(error);
                })
                this.newMessage = null,
                this.feedback = null
                //else no cotent, give feedback
            } else {
                this.feedback = 'You must enter a message in order to send one';
            }
        }
    }
}
</script>

<style scoped>

</style>