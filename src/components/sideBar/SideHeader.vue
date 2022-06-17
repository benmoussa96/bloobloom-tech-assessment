<template>
  <header class="header-sidebar-area">
    <div class="header-sidebar-wrap-all3">
      <div class="header-sidebar-wrap-3">
        <div class="logo-15">
          <router-link to="/">
            <img alt="" src="@/assets/images/logo/logo-white-2.jpg" />
          </router-link>
        </div>
        <div class="menu15-icon-position">
          <a :class="['menu-active-15', showSideMenu ? 'open' : '']" href="#">
            <i class="dlicon ui-3_menu-left m-open"></i>
            <i
              class="dlicon ui-1_simple-remove m-close"
              @click="toggleSideMenu"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SideHeader",
  props: {
    showSideMenu: Boolean,
  },
  methods: {
    toggleSideMenu(e) {
      e.preventDefault();
      this.$emit("toggle-side-menu");
    },
  },
};
</script>

<style scoped>
</style>
