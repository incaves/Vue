<template>
  <div>
    <Test />
    <hr />
    <Vios />
    <hr />
    <Mol />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Vios from "./components/Vios.vue";
import Mol from "./components/Mol.vue";
export default {
  name: "App",
  components: {
    Test,
    Vios,
    Mol,
  },
  methods: {},
};
</script>

<style>
</style>
