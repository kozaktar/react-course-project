import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import Collection from '../../components/collection/collection.component';
import {firestore, converCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionWithSpinner=WithSpinner(Collection);

class ShopPage extends React.Component{

  state={
    loading:true
  }
unsubscribeFromSnapshot=null;

componentDidMount(){
  const collectionRef=firestore.collection('collections');
  const {updateCollections}=this.props;

  //Data fetch using promisses
  collectionRef.get().then(
    snapshot=>{
        const collectionsMap=converCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);
        updateCollections(collectionsMap);
        this.setState({
          loading:false
        })
      }
  )

  //Data Fetch using observer pattern
  // this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot=>{
  //   const collectionsMap=converCollectionsSnapshotToMap(snapshot);
  //   console.log(collectionsMap);
  //   updateCollections(collectionsMap);
  //   this.setState({
  //     loading:false
  //   })
  // })
}

  render(){
      const {match} =this.props;
      const {loading}=this.state;
      return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`${match.path}/:categoryId`} render={(props)=><CollectionWithSpinner isLoading={loading} {...props}/>}/>
      </div>
      );
    
  }
}

const mapDispatchToProps=dispatch=>(
{
  updateCollections: collectionsMap=>dispatch(updateCollections(collectionsMap))
}
)

export default connect(null, mapDispatchToProps)(ShopPage);
