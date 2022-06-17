<template>
  <div class="sidebar" @mouseenter="sidedMenuOpen" @mouseleave="sidedMenuClose">
    <SideHeader
      :showSideMenu="showSideMenu"
      @toggle-side-menu="sidedMenuToggle"
    />
    <SideMenu :showSideMenu="showSideMenu" />
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue";
import SideHeader from "./SideHeader.vue";

export default {
  name: "SideBar",
  components: {
    SideMenu,
    SideHeader,
  },
  data() {
    return {
      showSideMenu: false,
    };
  },
  methods: {
    sidedMenuOpen() {
      this.showSideMenu = true;
    },
    sidedMenuClose() {
      this.showSideMenu = false;
    },
    sidedMenuToggle() {
      this.showSideMenu = !this.showSideMenu;
    },
  },
};
</script>

<style scoped>
</style>
