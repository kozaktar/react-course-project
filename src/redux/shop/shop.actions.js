import ShopActionTypes from './shop.types';

export const updateCollections=(collectinonsMap)=>(
    {
        type:ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectinonsMap
    }
)