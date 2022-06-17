<template>
  <li
    :class="[
      hasChildren ? 'menu-item-has-children' : '',
      showChildren ? 'active' : '',
    ]"
  >
    <span class="menu-expand" v-if="hasChildren" @click="toggleChildren"
      ><i></i
    ></span>
    <a
      :href="hasPath ? node.path : '#'"
      @click="toggleChildren"
      @keypress="toggleChildren"
    >
      {{ node.label }}
    </a>
    <SlideToggle v-if="hasChildren" :open="showChildren">
      <ul class="dropdown">
        <MobileSideMenuItem
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
  name: "MobileSideMenuItem",
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
</style>