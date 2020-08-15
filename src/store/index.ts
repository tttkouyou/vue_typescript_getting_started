import Vue from 'vue';
import Vuex from 'vuex';
import { Product } from '@/@types/Product';
import { GroupeByProductsId } from '@/@types/GroupeByProductsId';

Vue.use(Vuex);

interface State {
	products: Product[];
}

const initState: State = {
	products: []
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
		}
	}
});
