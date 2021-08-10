<template>
     <MglMap 
        :accessToken="accessToken" 
        :mapStyle="mapStyle" >
        <MglMarker v-for="pothole in potholes" v-bind:key="pothole.id"
            :coordinates=pothole.location.coordinates>
            <MglPopup :close-on-click="false" anchor="bottom">                               
                <Card 
                    title= "Title"
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
</template>
<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglGeolocateControl, MglPopup, MglMarker  } from "vue-mapbox";
import Card from './MapCard.vue'
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
    props:{
        potholes: Array
    }, 
    data(){
        return{
            path: process.env.VUE_APP_ROOT_API,
            imgSrc :  process.env.VUE_APP_ROOT_API + '/photo/',
            accessToken: process.env.VUE_APP_MAP_ACCESS_TOKEN,
            mapStyle: 'mapbox://styles/lgydevelop/ckedyq7f10eov1amwcfr2hkhk/draft',
             
        }
    },
    created(){
        this.mapbox = Mapbox;
    }
}
</script>
