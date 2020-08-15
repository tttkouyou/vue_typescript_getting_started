<template>
  <div>
    <div class="card-container" @click="click(product)">
      <figure>
        <img :src="product.image" />
      </figure>
      <section>
        <P>商品名: {{product.name}}</P>
        <p>価格: {{product.price}}</p>
        <p>説明: {{product.detail}}</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product } from "../../../@types/Product";

export default Vue.extend({
  props: {
    product: Object as PropType<Product>,
    click: Function,
  },
  methods: {},
});
</script>

<style scope>
.card-container {
  border: 1px solid;
  width: 20vw;
  height: 60vh;
  padding: 3px;
  margin-bottom: 30px;
}
</style>
