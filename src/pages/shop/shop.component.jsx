import React from 'react';
import SHOP_DATA from './shop.data';
import ShopPreview from '../../components/shop-preview/shop-preview.component';



class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}=this.state;
        return(
        <div>
            {collections.map(({id, ...otherCollectionProps}) => 
                <ShopPreview key={id} {...otherCollectionProps}></ShopPreview>)}
        </div>
        )
    }
}
export default ShopPage;