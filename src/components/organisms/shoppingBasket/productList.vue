<template>
  <li @click="click(product)" class="productListItem">
    <p class="favoriteMark" v-if="product.favorite == true">★</p>
    <p>商品名： {{product.name}} |</p>
    <p>価格： {{product.price}} |</p>
    <p>個数： {{productCount}} |</p>
    <p>合計： {{productCount * product.price}}円</p>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product } from "../../../@types/Product";

export default Vue.extend({
  props: {
    product: Object as PropType<Product>,
    productCount: Number,
    click: Function,
  },
});
</script>

<style scoped>
.productListItem {
  display: flex;
}

li {
  background-color: rgba(0, 0, 0, 0.3);
  padding-left: 10px;
  margin-bottom: 10px;
}

.favoriteMark {
  color: orange;
}
</style>
