<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
