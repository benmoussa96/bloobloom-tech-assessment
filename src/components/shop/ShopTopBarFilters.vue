<template>
  <div class="product-filter-wrapper">
    <div class="row">
      <!-- Color Filter -->
      <div class="col-md-3 col-sm-6 col-xs-12 mb-20">
        <div class="product-filter">
          <h5>Color</h5>
          <div class="product-color">
            <ul>
              <li
                v-for="color in filters.colors"
                :key="color.id"
                :class="color.active ? 'active' : ''"
                @click="toggleFilter('colors', color.id)"
              >
                <a>{{ color.value }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Shape Filter -->
      <div class="col-md-3 col-sm-6 col-xs-12 mb-20">
        <div class="product-filter">
          <h5>Shape</h5>
          <div class="product-size">
            <ul>
              <li
                v-for="shape in filters.shapes"
                :key="shape.id"
                :class="shape.active ? 'active' : ''"
                @click="toggleFilter('shapes', shape.id)"
                v-bind="$attrs"
              >
                <a>{{ shape.value }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopTopBarFilters",
  inheritAttrs: false,
  props: {
    showFilters: Boolean,
  },
  data() {
    return {
      filters: {
        colors: [
          {
            id: 1,
            value: "Black",
            active: false,
          },
          {
            id: 2,
            value: "Tortoise",
            active: false,
          },
          {
            id: 3,
            value: "Coloured",
            active: false,
          },
          {
            id: 4,
            value: "Crystal",
            active: false,
          },
          {
            id: 5,
            value: "Dark",
            active: false,
          },
          {
            id: 6,
            value: "Bright",
            active: false,
          },
        ],
        shapes: [
          {
            id: 7,
            value: "Square",
            active: false,
          },
          {
            id: 8,
            value: "Rectangle",
            active: false,
          },
          {
            id: 9,
            value: "Round",
            active: false,
          },
          {
            id: 10,
            value: "Cat-eye",
            active: false,
          },
        ],
      },
    };
  },
  methods: {
    toggleFilter(filterType, id) {
      this.filters[filterType].forEach((color) => {
        color.active = color.id === id ? !color.active : color.active;
      });
      this.$emit("filters-update", this.filters);
    },
  },
};
</script>

<style>
</style>