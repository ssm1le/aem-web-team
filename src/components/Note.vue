<template>
  <v-container fluid>
    <v-row d-flex>
      <v-col cols="2" md="2">{{ data.date }}</v-col>
      <v-col cols="2" md="2">{{ data.link }}</v-col>
      <v-col cols="2" md="2">{{ data.author }}</v-col>
      <v-col cols="2" md="2">{{ data.property }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Note",
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
</style>