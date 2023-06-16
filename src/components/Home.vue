<template>
  <div>
    <v-layout>
      <v-flex lg4>
        <Chats  />
      </v-flex>
      <v-flex lg12>
        <messages />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Chats from "../components/Chats.vue";
import messages from "../components/Messages.vue";
/* eslint-disable */
export default {
  name: "Home",
  data(){
    return{
        nameMessage: ''
    }
  },
  components: {
    Chats,
    messages,
  },

  methods:{
  
  }
};
</script>
