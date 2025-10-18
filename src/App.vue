<template>
  <div class="App">
    <ZooShortCut></ZooShortCut>
    <ZooHeaderNav></ZooHeaderNav>
    <ZooBanner></ZooBanner>
    <ZooHotAnimal></ZooHotAnimal>
    <ZooGoods></ZooGoods>
    <ZooTopic></ZooTopic>
    <ZooFooter></ZooFooter>
  </div>
</template>

<script>
import ZooShortCut from "./components/ZooShortCut";
import ZooHeaderNav from "./components/ZooHeaderNav";
import ZooBanner from "./components/ZooBanner";
import ZooHotAnimal from "./components/ZooHotAnimal";
import ZooGoods from "./components/ZooGoods";
import ZooTopic from "./components/ZooTopic";
import ZooFooter from "./components/ZooFooter.vue";

export default {
  components: {
    ZooShortCut,
    ZooHeaderNav,
    ZooBanner,
    ZooHotAnimal,
    ZooGoods,
    ZooTopic,
    ZooFooter,
  },
};
</script>

<style></style>