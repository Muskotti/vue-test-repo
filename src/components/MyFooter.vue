<template>
  <v-footer color="blue" dark absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: {}
};
</script>