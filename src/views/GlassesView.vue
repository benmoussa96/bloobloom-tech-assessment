<template>
  <BreadCrumbs />
  <ShopContent />
</template>

<script>
import BreadCrumbs from "@/components/shop/ShopBreadCrumbs.vue";
import ShopContent from "@/components/shop/ShopContent.vue";

export default {
  name: "GlassesView",
  components: {
    BreadCrumbs,
    ShopContent,
  },
};
</script>

<style>
</style>