
import './App.css';
import {Home} from './pages/Home'
import {Films} from './pages/Films'
import {Writings} from './pages/Writings'
import {Books} from './pages/Books'
import {About} from './pages/About'
import {Admin} from './pages/Admin'
import {firebaseauth} from './firebase'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useEffect} from 'react'
import {Post} from './pages/Post'
function App() {
  // useEffect (()=>{
  //   console.log
  //   }, [])
  const signup= async()=>{

  // const respond = await firebaseauth.createUserWithEmailAndPassword ('tunghx0701@gmail.com', "abcd12345678910");
  const respond = await firebaseauth.signInWithEmailAndPassword ("tunghx0701@gmail.com", "abcd12345678910")
  //   console.log(respond);
  //  await respond.user.sendEmailVerification()
  // console.log(firebaseauth.user)
  const signoutrespond = await firebaseauth.signOut()
  console.log (signoutrespond)
    }

  
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route path ="/" exact component ={Home}/>
       <Route path="/home" exact component ={Home}/>
       <Route path= "/films" exact component={Films}/>
       <Route path ="/writings" exact component={Writings}/>
       <Route path="/books" exact component={Books}/>
       <Route path="/about" exact component={About}/>
       <Route path="/admin" exact component={Admin}/>
       <Route path="/post" component={Post}/>
      </Switch>
    </div>
    </Router>
  )
}



export default App;

