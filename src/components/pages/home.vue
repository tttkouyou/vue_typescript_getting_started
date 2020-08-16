<template>
  <div>
    <div>home</div>
    <section>
      <div v-for="product in products" :key="product.id">
        <card
          class="notFavorite-cardContent"
          v-if="product.favorite == 0"
          :product="product"
          :click="selectProduct"
        />
        <card
          class="favorite-cardContent"
          v-else-if="product.favorite == 1"
          :product="product"
          :click="selectProduct"
        />
        <div v-else>致命的なエラーが検出されました。商品データを表示できません</div>
      </div>
    </section>
    <modal
      v-if="selectedItemData"
      :selectedItemData="selectedItemData"
      :click="canceledSelectProduct"
    >
      <div class="bottonWrapper">
        <button class="buttonInModal" @click="addStoreProduct(selectedItemData)">購入</button>
        <button
          class="buttonInModal"
          @click="favoriteOn(selectedItemData)"
          v-if="selectedItemData.favorite == 0"
        >お気に入りに追加</button>
        <button class="buttonInModal" @click="favoriteOff(selectedItemData)" v-else>お気に入りから削除</button>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import Card from "../../components/organisms/home/card.vue";
import Modal from "../../components/organisms/home/modal.vue";
import { getProducts } from "../../helper/getProducts";
import { Product } from "../../@types/Product";

interface State {
  selectedItemData: Product | null;
  productInHome: Product[];
}

export default Vue.extend({
  // importしてきたコンポーネントはここで定義をしないと使えない
  components: {
    Card,
    Modal,
  },
  data(): State {
    return {
      selectedItemData: null,
      productInHome: getProducts(10),
    };
  },
  computed: {
    // 何でもかんでもdataに置くのでなく、不変なものをcomputedに切り出す
    products(): Product[] {
      return this.productInHome
        .sort((a, b) => {
          return a.id - b.id;
        })
        .sort((a, b) => {
          return b.favorite - a.favorite;
        });
    },
  },
  mounted() {
    console.log(this.products);
  },
  methods: {
    selectProduct(product: Product) {
      this.selectedItemData = product;
      console.log(this.selectedItemData);
    },
    canceledSelectProduct() {
      this.selectedItemData = null;
    },
    addStoreProduct(product: Product) {
      this.$store.commit("addProduct", product);
      this.selectedItemData = null;
    },
    favoriteOn(product: Product) {
      //favorite(お気に入り)を有効にする(有効：１、無効：０)
      product.favorite += 1;
    },
    favoriteOff(product: Product) {
      //favorite(お気に入り)を無効にする
      product.favorite -= 1;
    },
  },
});
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

section::after {
  content: "";
  display: block;
  width: 45vw;
}

.bottonWrapper {
  display: flex;
  padding: 10px;
  position: absolute;
  bottom: 1vh;
}

.favorite-cardContent {
  background-color: orange;
}
</style>
