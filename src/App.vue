<template>
  <v-app>
    <my-toolbar :title.sync="title" @updateTitle="updateTitle"></my-toolbar>
    <router-view />
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import MyToolbar from "./components/MyToolbar";
import MyFooter from "./components/MyFooter";

export default {
  components: {
    MyToolbar,
    MyFooter
  },
  data() {
    return {
      title: "Form"
    };
  },
  methods: {
    updateTitle(value) {
      this.title = value;
    }
  }
};
</script>
