import { Product } from './Product';

export interface GroupeByProductsId {
	[productId: number]: Product[];
}
