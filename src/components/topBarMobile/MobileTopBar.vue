<template>
  <MobileHeader
    :showSideMenu="showSideMenu"
    @toggle-side-menu="sidedMenuToggle"
  />
  <MobileSideMenu
    :showSideMenu="showSideMenu"
    @toggle-side-menu="sidedMenuToggle"
  />
</template>

<script>
import MobileHeader from "./MobileHeader";
import MobileSideMenu from "./MobileSideMenu";

export default {
  name: "MobileTopBar",
  components: {
    MobileHeader,
    MobileSideMenu,
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

<style>
</style>