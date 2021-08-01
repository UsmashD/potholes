<template>
    <div >
        <div class="row justify-content-center">
            <div class="col col-md-2">
                <form @submit="loginUser()">
                    <h3>Sign In</h3>

                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control form-control-lg" v-model="email"/>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg" v-model="password"/>
                    </div>

                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-dark btn-lg btn-block" >Sign In</button>

                        <p class="forgot-password text-right mt-2 mb-4">
                            <router-link to="/forgot-password">Forgot password ?</router-link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data() {
            return {
                path: 'http://localhost:3000/api/v1',
                email: null,
                password: null,
            }
        },

        methods:{
        
            async loginUser(){
                const auth = {email: this.email, password: this.password};
                try {
                    const res = await axios({
                        method: 'POST',
                        url: this.path + '/users/login',
                        data: auth
                    });
                    console.log(res.data);
                    console.log(res.data.data.user);
                    if (res.data.status === 'success') {
                        // showAlert('success', 'Logged in succesfully!');
                        console.log('success');
                        this.$cookies.set("jwt", "Bearer " + res.data.token);
                                                
                        //  const jwt =  this.$cookies.get("username");
                        // console.log(jwt);
                        window.setTimeout(() => {
                            location.assign('/');
                        }, 1500);
                    }
                } catch (err) {
                    console.log(err);
                    // showAlert('error', 'Login failed!');
                }
            }
        }
    }
</script>