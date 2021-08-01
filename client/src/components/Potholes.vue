<template>
    <div class="container">
        <div class="row">
            <div class="col">
                Poholes
            </div>
        </div>

        
        <div class="row mb-5">
            <div class="col">
                Did you see a pothole somewhere? Report here!  <br/> 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
        </div>
    
        <!-- <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Coordinates</th>
                            <th scope="col">Description</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pothole in potholes" v-bind:key="pothole.id" >
                            <th scope="row"> <img class="img-list" :src="imgSrc + pothole.photo" /> </th>
                            <td> {{pothole.location.coordinates}} </td>
                            <td>{{pothole.description}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> -->
        
        <!-- <div class="row">
            <div class="col"> -->
                <MglMap 
                    :accessToken="accessToken" 
                    :mapStyle="mapStyle" >
                    <MglMarker v-for="pothole in potholes" v-bind:key="pothole.id"
                        :coordinates=pothole.location.coordinates>
                        <MglPopup :close-on-click="false" anchor="bottom">                               
                            <Card 
                                title= "Tutle"
                                :latitude= pothole.location.coordinates[0]
                                :longitude= pothole.location.coordinates[1]
                                :imgSrc="imgSrc + pothole.photo"
                                :description= pothole.description
                                />
                        </MglPopup>
                    </MglMarker>
                   
                    <MglNavigationControl position="top-right"/>
                    <MglGeolocateControl posztion="top-right" />
                </MglMap>
            <!-- </div>
        </div> -->

        


    </div>
</template>

<script>
import axios from 'axios';
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglGeolocateControl, MglPopup, MglMarker  } from "vue-mapbox";
import Card from './Card.vue'
export default {
    name: 'HelloWorld',
    components: {
        MglMap,
        MglNavigationControl,
        MglGeolocateControl,
        MglPopup,
        MglMarker,
        Card
    },
    data(){
        return{
            potholes: [],
            path: process.env.VUE_APP_ROOT_API,
            imgSrc :  process.env.VUE_APP_ROOT_API + '/photo/',
            accessToken: process.env.VUE_APP_MAP_ACCESS_TOKEN,
            mapStyle: 'mapbox://styles/lgydevelop/ckedyq7f10eov1amwcfr2hkhk/draft',
            // coordinates: [-115.17629186625145, 36.12648418392779]
            // coordinates: this.potholes
            // coordinates: []
             
        }
    },
    created(){
        this.mapbox = Mapbox;
    },
   
    mounted (){
        this.getPotholes();
    },

    methods:{
        getPotholes(){
            console.log(this.path + '/potholes');
            axios
            .get(this.path + '/potholes')
            .then(response => {
                this.potholes = response.data.data.potholes;
            }).catch((error)=> console.log(error))
    
        }
    }


}
</script>
