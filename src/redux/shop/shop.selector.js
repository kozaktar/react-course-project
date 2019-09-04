import {createSelector} from 'reselect'



const shopSelector=state=>state.shop;

export const shopDataSelector=createSelector(
    [shopSelector],
    shop=>shop.shopData
)

export const selectCollectionsForPreview=createSelector(
    [shopDataSelector],
    shopData=>shopData? Object.keys(shopData).map(key=>shopData[key]):[]
)

export const selectCollection=collectionUrlParam=>
    createSelector(
        [shopDataSelector],
        shopData=>shopData ? shopData[collectionUrlParam]: null);