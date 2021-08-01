<template>
    <div class="container">
        HelloWorld
        <p v-for="pothole in potholes" v-bind:key="pothole.id">
            {{pothole.id}}
            {{pothole.is_active}}
            {{pothole.location.coordinates}}
            {{pothole.photo}}
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HelloWorld',
    data(){
        return{
            potholes: [],
            path: 'http://localhost:3000/api/v1',
            
        }
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
