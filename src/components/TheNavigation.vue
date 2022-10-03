<template>
    <div id="nav">
      <img src="../assets/vue.svg" alt="logo" class="mr-3">
      <router-link id="logo" to="/">Arch App</router-link>
      <router-link 
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
    >
        {{destination.name}}
       
    </router-link>
    <router-link :to="{name: 'protected'}">Dashboard</router-link>
    </div>
  </template>

  <script>
    import sourceData from '../dataBase/data.json'
    export default {
      data() {
        return {
          destinations: sourceData.destinations
        }
      }
    }
  </script>

<style>
  #nav .active-link{
      color: rgb(255, 247, 0);
  }
 
</style>