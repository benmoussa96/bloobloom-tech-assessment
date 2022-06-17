<template>
  <div
    :class="[
      'clickalbe-menu15-active',
      'clickable-mainmenu-wrap',
      'clickable-mainmenu-wrapper15',
      showSideMenu ? 'open' : '',
    ]"
  >
    <div class="clickable-mainmenu-style15">
      <nav>
        <ul>
          <SideMenuItem v-for="node in menu" :key="node.id" :node="node" />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import menu from "@/menu.json";
import SideMenuItem from "./SideMenuItem.vue";

export default {
  name: "SideMenu",
  components: {
    SideMenuItem,
  },
  props: {
    showSideMenu: Boolean,
  },
  data() {
    return {
      menu,
    };
  },
};
</script>

<style scoped>
</style>
