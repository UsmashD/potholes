<template>
    <nav class="navbar navbar-expand-lg navbar-light " >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Pothole scout</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
        
            <ul class="navbar-nav start">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/users" class="nav-link">Users</router-link>
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                </li>
                <li class="nav-item">
                    <router-link to="/potholes" class="nav-link">Potholes</router-link>
                </li>
               
            </ul>

             <ul class="navbar-nav ms-auto mb-2 mb-lg-0"  >
                <li v-if="!isUserLoggedIn" class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <!-- <li  class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li> -->
                <li v-if="isUserLoggedIn" class="nav-item">
                    <router-link to="/logout" class="nav-link" >Logout</router-link>
                </li>
             </ul>
            </div>
        </div>
    </nav>
</template>
<script>
// import axios from 'axios';
    export default {
        data() {
            return {
                path: 'http://localhost:3000/api/v1',
                isUserLoggedIn : false
            }
        },
    methods:{
        isLoggedIn(){
            const cookie = this.$cookies.get("jwt");
            if(cookie){
                this.isUserLoggedIn = true;
                console.log('logged in');
                console.log(cookie);
            } 
        },
        logout(){ //this is not works for now
            this.$cookies.remove("jwt");
            this.isUserLoggedIn = false;
            console.log('logged out');
        }
    },
    mounted(){
        this.isLoggedIn();
        console.log(this.$cookies.get("jwt")) ;
    }

    }

</script>
