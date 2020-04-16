<template>
  <div>
    <v-app-bar dence dark color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Navigation</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="updateTitle(item.title)"
          >
            <router-link :to="{name: item.to}" tag="div" class="link">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title}}</v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: row;
}
</style>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      drawer: false,
      list: false,
      items: [
        { title: "Form", icon: "mdi-clipboard-list", to: "form-fill" },
        { title: "List", icon: "mdi-view-list", to: "list" }
      ]
    };
  },
  methods: {
    updateTitle(item) {
      this.drawer = false;
      this.$emit("updateTitle", item);
    }
  }
};
</script>
