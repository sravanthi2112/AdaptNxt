import './App.css';
import Dashboard from './components/Dashboard'
import Returns from './components/Returns';
import Inventory from './components/Inventory';
import Reports from './components/Reports';
import Shipping from './components/Shipping';
import Customers from './components/Customers';
import Order from './components/Order';
import Channel from './components/Channel';
import Integrations from './components/Integrations';
import Calculators from './components/Calculators';
import Account from './components/Account';
import {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AlwaysShow from './components/AlwaysShow'
import Sidebar from './components/Sidebar';
import Header from './components/Header'

class App extends Component{
  state = {showsidebar: false, isdarktheme: false}
  toggleSidebar = () => {
    this.setState(prevState => ({showsidebar: !prevState.showsidebar}))
    console.log("CHanged")
  }

  changetheme = () => {
    this.setState(prevState => ({isdarktheme: !prevState.isdarktheme}))
    console.log("darktheme")
  }

  render(){
    const {showsidebar} = this.state
    return(
      <div className="app_container">
        <BrowserRouter>
        <Header />
        <div className='home_content'>
          <div>
            <Sidebar showhide={showsidebar} />
            <AlwaysShow />
          </div>
          <div className='home_content'>
            <Routes>
              <Route path="/" element={<Dashboard showsidebar={showsidebar}/>} />
              <Route exact path='/inventory' element={<Inventory showsidebar={showsidebar} />}/>
              <Route exact path = '/order' element={<Order showsidebar={showsidebar} />}/>
              <Route exact path = '/returns' element={<Returns showsidebar={showsidebar} />}/>
              <Route exact path = '/customers' element={<Customers showsidebar={showsidebar} />}/>
              <Route exact path = '/shipping' element={<Shipping showsidebar={showsidebar} />}/>
              <Route exact path = '/channel' element={<Channel showsidebar={showsidebar} />}/>
              <Route exact path = '/integrations' element={<Integrations showsidebar={showsidebar} />}/>
              <Route exact path = '/calculators' element={<Calculators showsidebar={showsidebar} />}/>
              <Route exact path = '/reports' element={<Reports showsidebar={showsidebar} />}/>
              <Route exact path = '/account' element={<Account showsidebar={showsidebar} />}/>
            </Routes>
          </div>
        </div>
        
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
