<template>
  <div class="modal-wrapper">
    <div class="back-shadow" @click="click" />
    <div class="modal-content">
      <figure>
        <img :src="selectedItemData.image" />
      </figure>
      <section>
        <P>商品名: {{selectedItemData.name}}</P>
        <p>価格: {{selectedItemData.price}}</p>
        <p>説明: {{selectedItemData.detail}}</p>
        <p v-if="selectedItemData.favorite == 1">この商品はお気に入りに登録されています</p>
      </section>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product } from "../../../@types/Product";

export default Vue.extend({
  props: {
    selectedItemData: Object as PropType<Product>,
    click: Function,
  },
});
</script>

<style scope>
.modal-wrapper {
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.back-shadow {
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 70vw;
  height: 30vh;
  padding: 1em;
  background-color: #fff;
}
</style>
