<template>
  <div>
    <v-toolbar dense color="blue" flat dark elevation="0">
      <v-app-bar-nav-icon>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="updateTitle(item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
      <v-toolbar-title>{{this.title}}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      list: false,
      items: [{ title: "Form" }, { title: "List" }]
    };
  },
  methods: {
    updateTitle(item) {
      this.$emit('updateTitle', item)
    },
  }
};
</script>
