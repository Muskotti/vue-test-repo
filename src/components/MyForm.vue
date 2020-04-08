<template>
  <v-card class="mx-auto">
    <v-card-text>
      <p class="display-1 text--primary">Enter information</p>
    </v-card-text>
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fname"
              label="First name"
              :rules="[v => !!v || 'Enter first name']"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lname"
              label="Last name"
              :rules="[v => !!v || 'Enter last name']"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              label="E-mail"
              :rules="[v => !!v || 'Enter e-mail']"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-btn :disabled="!valid" color="success">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      fname: "",
      lname: "",
      email: ""
    };
  },
  methods: {
    test() {
      console.log(this.fname);
    }
  }
};
</script>
