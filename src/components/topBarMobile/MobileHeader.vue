<template>
  <div class="header-small-mobile section-padding-1">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="mobile-logo logo-width">
            <a href="index.html">
              <img alt="" src="../../assets/images/logo/logo.png" />
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="mobile-header-right-wrap">
            <div class="header-right-wrap header-right-flex">
              <div class="same-style cart-wrap">
                <a href="#" class="cart-active">
                  <i class="dlicon shopping_bag-20"></i>
                  <span class="count-style">02</span>
                </a>
              </div>
              <div class="same-style header-off-canvas">
                <a
                  :class="['header-aside-button', showSideMenu ? 'open' : '']"
                  href="#"
                >
                  <i class="dlicon ui-3_menu-left" @click="toggleSideMenu"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileHeader",
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

<style>
</style>