import { Product } from '../@types/Product';
// ここでは本来はAPiを叩く処理が入るが、今回はダミーデータを返すものにしている
export const getProducts = (quantity: number): Product[] => {
	return [ ...Array(10).keys() ].map((i) => {
		const product: Product = {
			id: i,
			name: `商品番号${i}`,
			price: i * 100,
			detail: 'ダミーデータ・ダミーデータ・ダミーデータ・ダミーデータ・ダミーデータ・ダミーデータ・ダミーデータ',
			favorite: 0,
			image: require('@/assets/logo.png')
		};

		return product;
	});
};
