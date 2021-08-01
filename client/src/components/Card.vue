<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src= imgSrc
      height="200px"
    ></v-img>

    <!-- <v-card-title >
      {{ title }}
    </v-card-title> -->

    <!-- <v-card-subtitle>
        Latitude: {{ latitude }}
        Longitude: {{ longitude }}
    </v-card-subtitle> -->

     
    <v-card-actions>
        
        <v-card-text>
            Description
        </v-card-text>
        
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
    props:{
        imgSrc: String,
        title: String,
        latitude: Number,
        longitude: Number,
        description: String
    }
  }
</script>