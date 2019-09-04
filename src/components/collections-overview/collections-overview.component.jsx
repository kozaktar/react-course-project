import React from 'react';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.styles.scss'

const CollectionsOverview=({shopData})=>(
    <div className="collections-overview">
         {shopData.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps=createStructuredSelector(
    {
      shopData:selectCollectionsForPreview
    }
  )


export default connect(mapStateToProps)(CollectionsOverview);