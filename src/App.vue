<template>
  <v-app id="vApp">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <template v-for="item in menuItems">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
              :href="child.href"
              class="children-link"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" :to="item.link" :href="item.href" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>DCF aem team</v-toolbar-title>
      <v-spacer />
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down search-input"
      />
      <v-btn class="account" icon>
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
      <v-btn class="jira" icon href="https://jira.viseven.com/">
        <v-icon>mdi-jira</v-icon>
      </v-btn>
      <v-btn class="github" icon href="https://github.com/ssm1le/aem-web-team">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-switch class="theme-switch" v-model="$vuetify.theme.dark" hide-details inset></v-switch>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app>
      <span>All right reserved. &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
  }),
  computed: {
    ...mapGetters(["menuItems"])
  },
  created() {}
};
</script>

<style lang="scss" scoped>
#vApp {
  .v-navigation-drawer {
    a {
      text-decoration: none;
    }
    .children-link {
      padding: 0 16px 0 32px;
    }
  }
  .v-app-bar {
    .search-input {
      padding-right: 20px;
    }
    .theme-switch {
      padding-left: 20px;
    }
  }
}
</style>