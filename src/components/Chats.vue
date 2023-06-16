<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex>
          <v-avatar color="primary" size="40">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt=".." />
          </v-avatar>
        </v-flex>

        <v-flex>
          <v-text-field
            label="search..."
            height="30"
            append-inner-icon="mdi-magnify"
            outlined
          >
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
            <v-card
            class="mx-auto"

            >
                <v-list dense>
                    <v-subheader>
                        Chats
                    </v-subheader>
                    <v-list-item-group
                        v-model="selectedItem"
                        color="deep-purple accent-1"
                        height="600"
                    >
                        <v-list-item
                        v-for="(item, index) in chats"
                        :key="index"
                        class="py-5"
                        >
                        <v-avatar color="primary" size="40">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt=".." />
          </v-avatar>
                            <v-list-item-content @click="evtChat(item.title)" class="ml-3">
                    
                                <v-list-item-title  v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Chats",
  data(){
        return{
            selectedItem: '',
            chats:[
            {
                id:1,
                title: 'Grivin',
                active: true

            },
            {
                id:2,
                title: 'Pedro',
                active: false

            },
            {
                id:3,
                title: 'Maria',
                active: false

            },
            {
                id:4,
                title: 'Beto',
                active: false

            },
        

        ]
        }
  },
  methods:{
    ...mapActions(['getName']),
    evtChat(name){
        console.log(name)
        this.getName(name)
    }
  }
};
</script>
