import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {currentUserSelector} from './redux/user/user.selectors';

class App extends React.Component {
 
  unsubscribeFromAuth=null;


  componentDidMount(){
    const {setCurrentUser}=this.props;
   this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
     createUserProfileDocument(userAuth);
     if(userAuth){
    const userRef=await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot=>{
      setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
        })
      }
    )
  }

    setCurrentUser(userAuth // userAuth is null in this case. 
      )
  
   })
   
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
      <Header currentUser/>
     <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render ={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUp/>)}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
     </Switch>
    </div>
  );
  }
}

const mapStateToProps =createStructuredSelector(
  {
    currentUser: currentUserSelector
  }
)

const mapDispatchToProps=dispatch=>(
  {
    setCurrentUser: user =>dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
