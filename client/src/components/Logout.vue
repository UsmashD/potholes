<template>
    <div>
        Logged out succesfully!
    </div>
</template>
<script>
// import axios from 'axios';
    export default {
        data() {
            return {
               
            }
        },
        mounted(){
            console.log('logged out');
            this.$cookies.remove("jwt");
            this.isUserLoggedIn = false;
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        },
        
    
    }

</script>