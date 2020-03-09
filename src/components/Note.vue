<template>
  <v-row d-flex>
    <v-col cols="1" md="2" class="date">{{ data.date }}</v-col>
    <v-col cols="6" md="6" class="link" v-clipboard="data.link">{{ data.link }}</v-col>
    <v-col cols="3" md="3" class="author">{{ data.author }}</v-col>
    <v-col cols="1" md="1" class="status">
      <v-checkbox hide-details v-model="data.deployed"></v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Note",
  props: {
    data: Object,
  }
};
</script>

<style lang="scss" scoped>
.row {
  border-bottom: 1px solid #fff;
}
.v-input--checkbox {
  margin-top: 0px;
  padding-top: 0px;
}
.link {
  cursor: pointer;
}
</style>