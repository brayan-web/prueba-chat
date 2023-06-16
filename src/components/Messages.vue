<template>
    <div>
        <v-container>
            <v-layout row class="px-5">
        <v-flex>
          <v-avatar color="primary" size="40">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt=".." />
          </v-avatar>
          <span class="ml-2">{{ name }}</span>
        </v-flex>
        <v-flex text-right>
            <v-icon large class="px-2">
            call
          </v-icon>
          <v-icon large class="px-2">
            videocam
          </v-icon>
          <v-icon large class="px-2">
            search
          </v-icon>
          <v-icon large class="px-2">
            more_vert
          </v-icon>
      
        </v-flex>
      </v-layout>

        <v-card class="d-flex flex-column fill-height mt-5">
            <v-card-text class="flex-gow-1 overflow-y-auto">
                <template v-for="(msg, index) in messages">
                   <div :class="{'d-flex flex-row-reverse' : msg.im}">
                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-avatar color="primary" size="40">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt=".." />
          </v-avatar>
                                <v-hover v-slot:default="{hover}">
                                    <v-chip
                                    :color="msg.im ? 'deep-purple accent-1' : ''"
                                    class="pa-4 mb-2"
                                    v-on="on"
                                    style="height: auto; white-space: normal;"
                                    >
                                    {{ msg.content }}
                                    <sub class="ml-2" style="font-size: 0.5rem;">
                                        {{ msg.creado }}
                                    </sub>
                                    </v-chip>
                                </v-hover>
                        </template>
                    </v-menu>
                   </div>
                </template>
            </v-card-text>
            <v-card-text class="flex-shrink-1">
                <v-text-field
                label="Type your message"
                type="text"
                no-details
                outlined
                append-outer-icon="send"
                hide-details
                color="purple"
                >

                </v-text-field>
            </v-card-text>
        </v-card>


        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
        export default {
            props: {
                nameMessage: String,
                default: '',
                required: true
            },
            name: 'Message',
           
            data(){
                return{
                    messages: [
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:true

                    },
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:false


                    },
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:true

                    },
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:false


                    },
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:true


                    },
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:false


                    },
                    {
                        content: 'Lorem ipsum',
                        creado: '05: 00 pm',
                        im:true


                    }
                ]
                }
            },
            computed:{
                ...mapGetters({
                    name: 'getNameSelected'
                })
            }
        }
</script>