<template>
  <div
    :class="[
      imageClass,
      'breadcrumb-area',
      'section-padding-1',
      'res-white-overly-xs',
      'res-white-overly-md',
      'breadcrumb-ptb-2',
    ]"
  >
    <div class="container-fluid">
      <div class="breadcrumb-content text-center">
        <div class="breadcrumb-title">
          <h2>{{ collection.name }}</h2>
        </div>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li><span> > </span></li>
          <li class="active">Colletions</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../http-common";

export default {
  name: "BreadCrumbs",
  data() {
    return {
      imageClass: String,
      collection: Object,
    };
  },
  methods: {
    getCollection() {
      HTTP.get(`/collections`).then((res) => {
        this.collection = res.data.collections.filter((col) => {
          return col.configuration_name === this.$route.params.col_name;
        })[0];

        const type = this.collection.configuration_name.split("-")[0];
        this.imageClass = "breadcrumb-bg-" + type;
      });
    },
  },
  created() {
    this.getCollection();
  },
};
</script>

<style>
</style>