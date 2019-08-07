import React from 'react';
import './shop-preview.styles.scss';
import '../collection_item/collection_item.component'
import CollectionItem from '../collection_item/collection_item.component';

const ShopPreview=({ title, items })=>{
    return(
        <div className="shop-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                .filter((item, idx)=>idx < 4)
                .map(({id,...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
            </div>
        </div>
    )
}

export default ShopPreview;