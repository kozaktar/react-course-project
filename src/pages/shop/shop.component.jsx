import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import Collection from '../../components/collection/collection.component';

const ShopPage =(props)=>(
      <div className='shop-page'>
        <Route exact path={`${props.match.path}`} component={CollectionsOverview}/>
        <Route path={`${props.match.path}/:categoryId`} component={Collection}/>
      </div>
    );


export default ShopPage;
