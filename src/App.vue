<template>
  <v-app>
    <v-main class="bgcolor">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
.bgcolor{
  background-color: rgba(232, 228, 221, 0.953);
}
</style>
