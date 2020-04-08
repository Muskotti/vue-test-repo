<template>
  <v-app>
    <my-toolbar :title.sync="title" @updateTitle="updateTitle"></my-toolbar>
    <my-form v-if="showForm"></my-form>
    <my-list v-if="showList"></my-list>
    <my-footer></my-footer>
  </v-app>
</template>

<script>

import MyToolbar from "./components/MyToolbar";
import MyFooter from "./components/MyFooter";
import MyForm from "./components/MyForm";
import MyList from "./components/MyList";

export default {
  components: {
    MyToolbar,
    MyFooter,
    MyForm,
    MyList
  }, 
  data() {
    return {
      title: 'Form',
      showForm: true,
      showList: false,
    }
  },
  methods: {
    updateTitle(value) {
      this.title = value
      if (value === 'Form') {
        this.showForm = true
        this.showList = false
      } else {
        this.showForm = false
        this.showList = true
      }
    }
  }
};
</script>
