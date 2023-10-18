<template>
    <v-carousel :show-arrows="false" style="width: 80%;  height:97%; position:fixed;   margin-left:12%; margin-top:1%;">
      <v-carousel-item style="buttom: -10%;"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </template>

<script>
export default {
    name: 'home_1',
    data() {
      return {
        items: [
          {
            src: require('@/assets/zap1.webp') , 
          },
          {
            src: require('@/assets/zap2.jpeg')
          },
          {
            src: require('@/assets/zap3.jpeg')
          },
          {
            src: require('@/assets/zap2.jpeg')
          },
        ],
      };
    },
  };
  </script>

<style>
body {
    background-color: black
  
}

.v-carousel__controls {
    align-items: center;
    background: rgba(var(--v-theme-surface-variant), 0.3);
    bottom: 10%;
    display: flex;
    height: 50px;
    justify-content: center;
    list-style-type: none;
    position: absolute;
    width: 100%;
    z-index: 1;
}
.v-img__img--cover {
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
}
</style>
