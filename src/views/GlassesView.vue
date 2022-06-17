<template>
  <ShopBreadCrumbs />
  <ShopContent />
</template>

<script>
import ShopBreadCrumbs from "@/components/shop/ShopBreadCrumbs.vue";
import ShopContent from "@/components/shop/ShopContent.vue";

export default {
  name: "GlassesView",
  components: {
    ShopBreadCrumbs,
    ShopContent,
  },
};
</script>

<style>
</style>