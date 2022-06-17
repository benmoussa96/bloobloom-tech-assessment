<template>
  <div class="shop-area pt-70 pb-100">
    <ShopTopBar
      :loadedItemsCount="glasses.length"
      :totalCount="totalCount"
      @filters-update="updateFilters"
    />
    <div class="tab-content jump-3 pt-30">
      <div id="shop-1" class="tab-pane active">
        <div class="row g-0 grid-2">
          <ShopItem
            v-for="(item, index) in glasses"
            :key="item.id"
            :item="item"
            :isLastItem="index === glasses.length - 1"
            @get-next-glasses.once="getNextGlasses"
          />
        </div>
      </div>
    </div>
    <div class="end-of-list">
      <ScaleLoader :loading="loading && !isAllItemsLoaded" />
      <div class="error-content text-center" v-if="isAllItemsLoaded">
        <h3>No more results to show!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ScaleLoader from "../helpers/ScaleLoader.vue";

import ShopTopBar from "./ShopTopBar.vue";
import ShopItem from "./ShopItem.vue";

export default {
  name: "ShopContent",
  components: {
    ShopTopBar,
    ShopItem,
    ScaleLoader,
  },
  data() {
    return {
      glasses: [],
      pageLimit: 12,
      pageNumber: 1,
      totalCount: 0,
      loading: true,
      isAllItemsLoaded: false,
      filters: {
        colors: [],
        shapes: [],
      },
    };
  },
  methods: {
    getGlasses() {
      this.loading = true;

      axios.get(this.buildQuery()).then((res) => {
        this.glasses.push(...res.data.glasses);
        this.totalCount = res.data.meta.total_count;

        this.isAllItemsLoaded = this.glasses.length === this.totalCount;
        this.loading = false;
      });
    },
    buildQuery() {
      let queryString = `/collections/${this.$route.params.col_name}/glasses`;

      queryString += `?page[limit]=${this.pageLimit}`;
      queryString += `&page[number]=${this.pageNumber}`;

      queryString += "&filters[lens_variant_presciptions][]=fashion";
      queryString += "&filters[lens_variant_types][]=classic";
      queryString += "&filters[frame_variant_home_trial_available]=false";

      this.filters.colors.map((filter) => {
        if (filter.active) {
          queryString += `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${filter.value.toLowerCase()}`;
        }
      });

      this.filters.shapes.map((filter) => {
        if (filter.active) {
          queryString += `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${filter.value.toLowerCase()}`;
        }
      });

      return queryString;
    },
    getNextGlasses() {
      this.pageNumber++;
      this.getGlasses();
    },
    updateFilters(filters) {
      this.filters = filters;
      this.glasses = [];
      this.pageNumber = 1;
      this.totalCount = 0;
      this.loading = true;
      this.isAllItemsLoaded = false;

      this.getGlasses();
    },
  },
  async created() {
    await this.getGlasses();
  },
};
</script>

<style>
.end-of-list {
  padding-top: 90px;
}
</style>