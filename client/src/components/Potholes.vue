<template>
    <div class="container">
            
        <!-- <div class="row">
            <div class="col">
                Potholes
            </div>
        </div> -->
        
        <div class="row mb-5">
            <div class="col">
                Did you see a pothole somewhere?<br/> 
                                
                <v-btn
                    color="#f2f2f2"
                    light
                    @click="show = !show"
                    >
                    <span>Report here!</span>
                </v-btn>
                
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> -->
                    
                <v-expand-transition>
                    <div v-show="show">
                        <v-card>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                >
                                <v-text-field
                                    v-model="lng"
                                    :rules="lngRules"
                                    label="Longitude"
                                    required
                                    >
                                </v-text-field>
                                <v-text-field
                                    v-model="lat"
                                    :rules="latRules"
                                    label="Latitude"
                                    required
                                    >
                                </v-text-field>
                                <v-text-field
                                    v-model="description"
                                    :rules="descRules"
                                    label="Description"
                                    required
                                    >
                                </v-text-field>
                                <v-file-input
                                    v-model="photo"
                                    accept="image/*"
                                    label="Pothole"
                                    prepend-icon="mdi-camera"
                                    value=""
                                >
                                </v-file-input>
                                <v-btn
                                    @click="submit"
                                >
                                    <span> Submit </span>
                                </v-btn>
                            </v-form>
                        </v-card>
                    </div>
                </v-expand-transition>
                    
            </div>
        </div>
        <div>
        <Map :potholes = potholes />
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import Map from './utils/Map.vue';

export default {
    name: 'HelloWorld',
    components: {
        Map
    },
    data: ()=>({
            potholes: [],
            path: process.env.VUE_APP_ROOT_API,
            imgSrc :  process.env.VUE_APP_ROOT_API + '/photo/',
            accessToken: process.env.VUE_APP_MAP_ACCESS_TOKEN,
            mapStyle: 'mapbox://styles/lgydevelop/ckedyq7f10eov1amwcfr2hkhk/draft',
            
            show: false,
            valid: true,
            lat: null,
            lng: null,
            description: null,
            photo: [],
            latRules: [
                v => !!v || 'Latitude is required',
                v => (v > -91 && v < 91) || 'Latitude must be between -90 and 90',
            ],
            lngRules: [
                v => !!v || 'Longitude is required',
                v => (v > -181 && v < 181) || 'Longitude must be between -180 and 180',
            ],
            descRules: [
                v => !!v || 'Please provide us a short description about the pothole',
                v => (v && v.length >= 10) || "Min 10 characters"
            ]
             
        }),
   
    mounted (){
        this.getPotholes();
        this.isUserLoggedIn();
    },

    methods:{
        isUserLoggedIn(){
            const token =  this.$cookies.get("jwt");
            if(!token){
                return false;
            }
            return true;
        },
        async getPotholes(){
            try{
                const resp = await axios.get(this.path + '/potholes');
                this.potholes = resp.data.data.potholes;
            }catch( error ){
                console.log(error);
            }
            
        },
        async submit(){
            
            const fd = new FormData();
            fd.append('location[lng]', this.lng);
            fd.append('location[lat]', this.lat);
            fd.append('description', this.description);
            fd.append('photo', this.photo, this.photo.name);

            const token =  this.$cookies.get("jwt");
            
            try {
                await axios({
                    method: 'POST',
                    url: this.path + '/potholes',
                    data: fd ,
                    headers: {'Authorization': `${token}` }
                });
                
            } catch (error) {
                console.log(error);
            }
        }
    }


}
</script>
