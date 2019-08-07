import React from 'react';
import './collection_item.styles.scss';

const CollectionItem=({id, name, price, imageUrl})=>(
<div className="collection-item">
    <div className="image" style={{
        backgroundImage: `url(${imageUrl})`
    }}></div>
    <div className="collection-footer">
        <span className="item-name">{name}</span>
        <span className="item-price">{price}</span>
    </div>
</div>
)
export default CollectionItem;