<template>
  <div class="projects">
    <NewReleaseNote></NewReleaseNote>

    <h2 id="tisma">#Tisma</h2>
    <v-list class="note-list">
      <v-list-item
        class="note-item"
        v-for="item in allNotes"
        :key="item.link"
      >
        <Note :data="item"></Note>
      </v-list-item>
    </v-list>
    <h2 id="biogenpro">#Biogen Pro</h2>
    <v-list class="note-list">
      <v-list-item
        class="note-item"
        v-for="item in allNotes"
        :key="item.link"
      >
        <Note :data="item"></Note>
      </v-list-item>
    </v-list>
    <h2 id="neuroexpert">#NeuroExpert</h2>
    <v-list class="note-list">
      <v-list-item
        class="note-item"
        v-for="item in allNotes"
        :key="item.link"
      >
        <Note :data="item"></Note>
      </v-list-item>
    </v-list>
    <h2 id="project">#Project</h2>
    <v-list class="note-list">
      <v-list-item
        class="note-item"
        v-for="item in allNotes"
        :key="item.link"
      >
        <Note :data="item"></Note>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import NewReleaseNote from "../components/NewReleaseNote";
import Note from "../components/Note";
import { mapGetters } from "vuex";
export default {
  name: "Projects",
  components: {
    NewReleaseNote,
    Note
  },
  data() {
    return {
      selected: [],
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date"
        },
        { text: "Link", value: "path" },
        { text: "Author", value: "fat" },
        { text: "Deployed", value: "deployed" }
      ]
    };
  },
  computed: {
    ...mapGetters(["allNotes"])
  }
};
</script>

<style lang="scss" scoped>
.note-item {
  .row {
    border-bottom: 1px solid #fff;
  }
  &:last-of-type {
    .row {
      border: none;
    }
  }
}
</style>