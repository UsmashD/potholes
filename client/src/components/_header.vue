<template>
<!-- <v-toolbar-items>
</v-toolbar-items> -->
<!-- <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-btn text to="/home"> Home </v-btn>
        <v-btn text to="/users"> Users </v-btn>                
        <v-btn text to="/potholes"> Potholes </v-btn>
        <v-btn text v-if="!isUserLoggedIn" to="/login"> Login </v-btn>
        <v-btn text v-if="isUserLoggedIn" to="/logout"> Logout </v-btn>
        <v-btn text v-if="isUserLoggedIn"> {{this.userName}} </v-btn>  
        <Avatar />
</v-app-bar> -->
        <nav class="navbar navbar-expand-lg navbar-light " >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Potholes</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                
                    <ul class="navbar-nav start">
                        <li class="nav-item">
                            <v-btn text to="/home"> Home </v-btn>
                        </li>
                        <li class="nav-item">
                            <v-btn text to="/users"> Users </v-btn>                
                        </li>
                        <li class="nav-item">
                            <v-btn text to="/potholes"> Potholes </v-btn>
                        </li>
                    </ul> 

                    <ul class="navbar-nav right "  >
                        <li class="nav-item">
                            <v-btn text v-if="!isUserLoggedIn" to="/login"> Login </v-btn>
                        </li>
                        <li v-if="isUserLoggedIn" class="nav-item">
                            <v-btn text v-if="isUserLoggedIn"> Welcome {{this.userName}} </v-btn>
                        </li>
                        <li v-if="isUserLoggedIn" class="nav-item">
                            <v-btn text v-if="isUserLoggedIn" to="/logout"> Logout </v-btn>
                        </li>
                    </ul>
                
                </div>
            </div>
        </nav> 
    

</template>
<script>
// import axios from 'axios';
// import Avatar from './Avatar.vue';
    export default {
        components:{
            // Avatar
        },
        data() {
            return {
                path: 'http://localhost:3000/api/v1',
                isUserLoggedIn : false,
                userName : null,
                menuItems : {title:'home'}
            }
        },
    methods:{
        isLoggedIn(){
            const jwt = this.$cookies.get("jwt");
            if(jwt){
                this.isUserLoggedIn = true;
                var user = this.$cookies.get("user");
                this.userName = user.name;
                // console.log('user' + user.get(0));

            } 
        } 
        // },
        // logout(){ //this is not works for now
        //     this.$cookies.remove("jwt");
        //     this.isUserLoggedIn = false;
        //     console.log('logged out');
        // }
    },
    mounted(){
        this.isLoggedIn();
    }

    }

</script>
