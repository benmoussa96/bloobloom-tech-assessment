<template>
  <div class="section-padding-1">
    <div class="container-fluid">
      <div class="shop-top-bar">
        <div class="shop-top-bar-left">
          <div class="shop-top-show">
            <span>
              Showing {{ loadedItemsCount }} of {{ totalCount }} results
            </span>
          </div>
        </div>
        <div class="shop-top-bar-right">
          <div class="shop-tab nav">
            <a href="#shop-1" class="active" data-bs-toggle="tab"
              ><i class="dlicon ui-2_grid-45"></i
            ></a>
            <a href="#shop-2" data-bs-toggle="tab"
              ><i class="dlicon design_bullet-list-69"></i
            ></a>
          </div>
          <div class="shop-filter ml-50" @click="showFilters = !showFilters">
            <a :class="['shop-filter-active', showFilters ? 'active' : '']"
              >Filters <i class="fa fa-angle-down angle-down"></i>
              <i class="fa fa-angle-up angle-up"></i
            ></a>
          </div>
          <div class="shop-short-by ml-50">
            <span
              >Sort by <i class="fa fa-angle-down angle-down"></i>
              <i class="fa fa-angle-up angle-up"></i
            ></span>
            <ul>
              <li class="active"><a href="#">Default sorting</a></li>
              <li><a href="#">Sort by popularity</a></li>
              <li><a href="#">Sort by average rating</a></li>
              <li><a href="#">Sort by latest</a></li>
              <li><a href="#">Sort by price: low to high</a></li>
              <li><a href="#">Sort by price: high to low</a></li>
            </ul>
          </div>
        </div>
      </div>

      <SlideToggle :open="showFilters">
        <ShopTopBarFilters :showFilters="showFilters" v-bind="$attrs" />
      </SlideToggle>
    </div>
  </div>
</template>

<script>
import SlideToggle from "../helpers/SlideToggle.vue";
import ShopTopBarFilters from "./ShopTopBarFilters.vue";

export default {
  name: "ShopTopBar",
  components: {
    ShopTopBarFilters,
    SlideToggle,
  },
  props: {
    totalCount: Number,
    loadedItemsCount: Number,
  },
  data() {
    return {
      showFilters: false,
    };
  },
};
</script>

<style>
</style>