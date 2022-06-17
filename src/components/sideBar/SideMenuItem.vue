<template>
  <li
    :class="[hasChildren ? 'has-sub-menu' : '', showChildren ? 'active' : '']"
  >
    <a
      :href="hasPath ? node.path : '#'"
      @click="toggleChildren"
      @keypress="toggleChildren"
    >
      {{ node.label }}
      <span class="menu-expand" v-if="hasChildren">
        <i :class="toggleChildrenIcon"></i>
      </span>
    </a>
    <SlideToggle v-if="hasChildren" :open="showChildren">
      <ul class="sub-menu-2">
        <SideMenuItem
          v-for="child in node.children"
          :key="child.id"
          :node="child"
        />
      </ul>
    </SlideToggle>
  </li>
</template>

<script>
import SlideToggle from "../helpers/SlideToggle.vue";

export default {
  name: "SideMenuItem",
  components: {
    SlideToggle,
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showChildren: false,
    };
  },
  computed: {
    hasPath() {
      const { path } = this.node;
      return path && path.length > 0;
    },
    hasChildren() {
      const { children } = this.node;
      return children && children.length > 0;
    },
    toggleChildrenIcon() {
      return this.showChildren ? "fa fa-chevron-up" : "fa fa-chevron-down";
    },
  },
  methods: {
    toggleChildren(e) {
      if (!this.hasPath) {
        e.preventDefault();
        this.showChildren = !this.showChildren;
      }
    },
  },
};
</script>

<style>
.sub-menu-2 {
  overflow-y: hidden;
  max-height: 500px; /* approximate max height */

  transition-property: all;
  transition-duration: 0.5s;
}
</style>