<template>
  <div :class="['header-aside-active', showSideMenu ? 'inside' : '']">
    <div class="header-aside-wrap">
      <a class="aside-close" @click="toggleSideMenu"
        ><i class="dlicon ui-1_simple-remove"></i
      ></a>
      <div class="header-aside-content">
        <div class="mobile-menu-area">
          <div class="mobile-search">
            <form class="search-form" action="#">
              <input type="text" placeholder="Search entire store…" />
              <button class="button-search">
                <i class="dlicon ui-1_zoom"></i>
              </button>
            </form>
          </div>
          <div class="mobile-menu-wrap">
            <!-- mobile menu start -->
            <div class="mobile-navigation">
              <!-- mobile menu navigation start -->
              <nav>
                <ul class="mobile-menu">
                  <MobileSideMenuItem
                    v-for="node in menu"
                    :key="node.id"
                    :node="node"
                  />
                </ul>
              </nav>
              <!-- mobile menu navigation end -->
            </div>
            <!-- mobile menu end -->
          </div>
        </div>
        <div class="header-aside-menu">
          <nav>
            <ul>
              <li><a href="#">About Toro</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Collection</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">New Look</a></li>
            </ul>
          </nav>
        </div>
        <img src="../../assets/images/icon-img/payments.png" alt="payment" />
        <p>
          Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi
          aliquet, sit amet fermentum justo dapibus.
        </p>
        <div class="aside-contact-info">
          <ul>
            <li>
              <i class="dlicon ui-2_time-clock"></i>Monday - Friday: 9:00 -
              19:00
            </li>
            <li><i class="dlicon ui-1_email-84"></i>Info@contact.com</li>
            <li><i class="dlicon tech-2_rotate"></i>(+55) 254. 254. 254</li>
            <li>
              <i class="dlicon ui-1_home-minimal"></i>Helios Tower 75 Tam Trinh
              Hoang - Ha Noi - Viet Nam
            </li>
          </ul>
        </div>
        <div class="social-icon-style mb-25">
          <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
          <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
          <a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a>
          <a class="behance" href="#"><i class="fa fa-behance"></i></a>
        </div>
        <div class="copyright">
          <p>
            © 2022
            <a href="https://github.com/benmoussa96">Ghaieth BEN MOUSSA.</a>
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu from "@/menu.json";
import MobileSideMenuItem from "./MobileSideMenuItem.vue";

export default {
  name: "MobileSideMenu",
  components: {
    MobileSideMenuItem,
  },
  props: {
    showSideMenu: Boolean,
  },
  data() {
    return {
      menu,
    };
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