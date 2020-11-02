import './App.css';
import {Loop} from '@material-ui/icons'

import {useStateValue} from './stateProvider'
import constants from './utils/constants';
const electron = window.require("electron")
function App() {
    const [{basket, user}, dispatch] = useStateValue()

    const handleAddToBasket =()=>{
        dispatch({
            type: constants.ADD_TO_BASKET,
            value: {
                name: "apples",
                price: 45,
                qnty: 5
            }
        })
    }
    const handleEmptyToBasket =()=>{
        dispatch({
            type: constants.EMPTY_BASKET,
        })
    }
    const handleLogin =()=>{
        if(user){
            dispatch({
                type: constants.SET_USER,
                value:null
            })
        }else{
            dispatch({
                type: constants.SET_USER,
                value:"TEST_USER"
            })
        }
    }
    return (
      <div className="app">
            <div  className ="app__controls">
                <p>The basket value is:{" " + basket?.length}</p>
                <button onClick={handleAddToBasket}>Add To basket</button>
                <button onClick={handleEmptyToBasket}>Empty basket</button>
                <br/>
                {
                    !user?  <p>You are Logged Out</p>:<p>You are Logged In as {user}</p>
                }
                <button onClick={handleLogin}>{!user? "Login" : "Logout"}</button>
            </div>
            
          <h1>Electron React BoilerPlate</h1>
              <Loop/>
          <p>Open <i><a href="">App.js</a></i> and start working with Coding.</p>
          <small>By Crispen Gari</small>
      </div>
    )
}
export default App;
