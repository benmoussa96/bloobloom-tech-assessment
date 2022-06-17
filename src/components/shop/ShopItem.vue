<template>
  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 grid-item-2">
    <div class="product-wrap">
      <div class="product-img default-overlay">
        <a href="#">
          <img class="default-img" :src="defaultImgURL" alt="" />
          <img class="hover-img" :src="hoverImgURL" alt="" />
        </a>
        <div
          class="
            product-action product-action-position-3
            action-inc-width-height
          "
        >
          <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"
            ><i class="fa fa-eye"></i><span>Home Try On</span></a
          >
          <a title="Add to Wishlist" href="#"
            ><i class="fa fa-heart"></i><span>Add to Wishlist</span></a
          >
          <a class="icon-blod" title="Add to Compare" href="#"
            ><i class="dlicon arrows-4_compare"></i
            ><span>Add to Compare</span></a
          >
          <a title="Add to Cart" href="#"
            ><i class="fa fa-shopping-cart"></i><span>Add to Cart</span></a
          >
        </div>
        <div class="product-content-5">
          <h4>
            <a href="#">{{ item.name }}</a>
          </h4>
          <span>{{ "$" + item.cost_breakdown.bloobloom_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    item: Object,
    isLastItem: Boolean,
  },
  methods: {
    getNextGlasses() {
      window.onscroll = () => {
        if (this.isLastItem && this.isInViewport(this.$el))
          this.$emit("get-next-glasses");
      };
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
  data() {
    return {
      defaultImgURL: "",
      hoverImgURL: "",
    };
  },
  created() {
    this.defaultImgURL = this.item.glass_variants[0].media[0].url;
    this.hoverImgURL =
      typeof this.item.glass_variants[0].media[2] !== "undefined"
        ? this.item.glass_variants[0].media[2].url
        : this.item.glass_variants[0].media[1].url;
  },
  mounted() {
    this.getNextGlasses();
  },
};
</script>

<style>
</style>