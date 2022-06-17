<template>
  <div class="main-wrapper">
    <SideBar />
    <MobileTopBar />

    <div class="main-sidebar-right-3">
      <router-view />
      <FooterArea />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar/SideBar.vue";
import MobileTopBar from "@/components/topBarMobile/MobileTopBar.vue";
import FooterArea from "@/components/FooterArea.vue";

export default {
  name: "App",
  components: {
    SideBar,
    FooterArea,
    MobileTopBar,
  },
};
</script>

<style>
</style>
