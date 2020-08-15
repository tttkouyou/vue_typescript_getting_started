<template>
  <div>
    <div>basket</div>
    <ul>
      <productList
        v-for="(groupByProduct, index) in groupByProducts"
        :key="index"
        :product="removingProduct(groupByProduct)"
        :productCount="groupByProductsCount(groupByProduct)"
        :click="listItemClick"
      />
    </ul>
    <p>合計| {{ shoppingCartTotalPrice }}円</p>
    <modal v-if="selectedItemData" :selectedItemData="selectedItemData" :click="modalDelete">
      <div class="store-button__container">
        <button @click="deleteStoreProduct(selectedItemData)">取り消す</button>
        <button @click="addStoreProduct(selectedItemData)">追加購入</button>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Product } from "../../@types/Product";
import { GroupeByProductsId } from "@/@types/GroupeByProductsId";
import { prototype } from "vue/types/umd";
import ProductList from "../organisms/shoppingBasket/productList.vue";
import Modal from "../organisms/home/modal.vue";

interface State {
  selectedItemData: Product | null;
}

export default Vue.extend({
  components: {
    ProductList,
    Modal,
  },
  computed: {
    //重複なし購入予定商品情報配列を呼び出し
    groupByProducts(): GroupeByProductsId[] {
      return this.$store.getters.groupeByProductsId;
    },
    //購入予定商品の金額の合計を呼び出し
    shoppingCartTotalPrice(): number {
      const reducer = (total: number, groupByProductId: GroupeByProductsId) => {
        const products: Product[] = Object.values(groupByProductId)[0];
        return total + products.length * products[0].price;
      };
      // reduceは配列の各要素に関数を適用して、単一の結果値にする。　第二引数は初期値
      return this.$store.getters.groupeByProductsId.reduce(reducer, 0);
    },
  },
  methods: {
    listItemClick(product: Product) {
      this.selectedItemData = product;
    },
    modalDelete() {
      this.selectedItemData = null;
    },
    deleteStoreProduct(product: Product) {
      this.$store.commit("cancelProduct", product);
      this.selectedItemData = null;
    },
    addStoreProduct(product: Product) {
      this.$store.commit("addProduct", product);
      this.selectedItemData = null;
    },
    removingProduct(groupByProduct: GroupeByProductsId): Product {
      return Object.values(groupByProduct)[0][0];
    },
    groupByProductsCount(groupByProduct: GroupeByProductsId): number {
      return Object.values(groupByProduct)[0].length;
    },
  },
  data(): State {
    return {
      selectedItemData: null,
    };
  },
});
</script>

<style scoped>
.store-button__container {
  display: flex;
  justify-content: space-around;
  width: 20vw;
}
</style>
