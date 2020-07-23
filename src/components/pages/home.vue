<template>
  <div>
    <div>home</div>
    <section>
      <card v-for="product in products" :key="product.id" :product="product" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "../../components/organisms/home/card.vue";
import { getProducts } from "../../helper/getProducts";
import { Product } from "../../@types/Product";

export default Vue.extend({
  // importしてきたコンポーネントはここで定義をしないと使えない
  components: {
    Card,
  },
  data() {
    return {};
  },
  computed: {
    // 何でもかんでもdataに置くのでなく、不変なものをcomputedに切り出す
    products(): Product[] {
      return getProducts(10);
    },
  },
  mounted() {
    console.log(this.products);
  },
});
</script>

<style>
section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
section::after {
  content: "";
  display: block;
  width: 42.3vw;
}
</style>
