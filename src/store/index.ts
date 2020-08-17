import Vue from 'vue';
import Vuex from 'vuex';
import { Product } from '@/@types/Product';
import { GroupeByProductsId } from '@/@types/GroupeByProductsId';
import { getProducts } from '../helper/getProducts';

Vue.use(Vuex);

interface State {
	products: Product[];
	productInHome: Product[];
}

const initState: State = {
	products: [],
	productInHome: getProducts(10)
};

export default new Vuex.Store({
	state: initState,
	mutations: {
		//storeに商品を追加する処理
		addProduct: (state, product: Product) => {
			state.products.push(product);
		},
		//storeの商品を削除する処理
		cancelProduct: (state, product: Product) => {
			const idx = state.products.map((product: Product) => product.id).indexOf(product.id);
			state.products.splice(idx, 1);
		},
		//お気に入りを有効にする
		favoriteOnFunction: (state, product: Product) => {
			const idx = state.productInHome.indexOf(product);
			state.productInHome[idx].favorite += 1;
		},
		//お気に入りを無効にする
		favoriteOffFunction: (state, product: Product) => {
			const idx = state.productInHome.indexOf(product);
			state.productInHome[idx].favorite -= 1;
		}
	},
	getters: {
		//商品をkeyを重複なしのproductIdにしてproductsを表示
		groupeByProductsId(state): GroupeByProductsId[] {
			return state.products
				.map((product: Product) => product.id)
				.filter((x, i, self) => {
					return self.indexOf(x) === i;
				})
				.map((productId) => {
					return {
						[productId]: state.products.filter((product: Product) => product.id === productId)
					};
				});
		},
		productFavoriteSort(state): Product[] {
			return state.productInHome
				.sort((a, b) => {
					return a.id - b.id;
				})
				.sort((a, b) => {
					return b.favorite - a.favorite;
				});
		}
	}
});
