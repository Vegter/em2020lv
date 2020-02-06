<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Elections municipales 2020
      </div>

      <v-spacer></v-spacer>

      <div class="align-left">
        La Verdière
      </div>
    </v-app-bar>

    <v-content>
      <elections></elections>
    </v-content>
  </v-app>
</template>

<script>
import Elections from './components/Elections';

export default {
  name: 'App',

  components: {
    Elections
  },

  data: () => ({
  }),
};
</script>
