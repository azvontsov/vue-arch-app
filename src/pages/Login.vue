<template lang="">
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
  
            <label for="username">Username</label>
            <input v-model="username" type="text" class="input" name="username">
  
            <label for="password">Password</label>
            <input v-model="password" type="text" class="input" name="password">
            
            <button class="btn" >Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            window.user = this.username
            this.$router.push({name: 'protected'})
        }
    }
}
</script>
<style lang="">
    
</style>