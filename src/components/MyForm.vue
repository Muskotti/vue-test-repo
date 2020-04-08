<template>
  <v-card class="mx-auto">
    <v-card-text>
      <p class="display-1 text--primary">Enter information</p>
    </v-card-text>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="First name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Last name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {}
};
</script>
