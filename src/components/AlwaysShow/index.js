import { Component } from "react";
import './index.css'
import { Link } from "react-router-dom";

class AlwaysShow extends Component{
    render(){
        return(
            <div className="alwaysshowsidebar">
                <div>
                    <Link to='/' className="link_buttons">
                    <div className= "options-container" >
                        <p className ="options">Dashboard</p>
                    </div>
                    </Link> 
                    <Link to='/inventory' className="link_buttons">
                        <div className="options-container">
                            <p className ="options">Inventory </p>
                        </div>
                    </Link> 
                    <Link to='/order' className="link_buttons">
                    <div className="options-container"  >
                        <p className ="options">Order</p>
                    </div>
                    </Link> 
                    <Link to='/returns' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Returns</p>
                    </div>
                    </Link>
                    <Link to='/customers' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Customers</p> 
                    </div>
                    </Link>
                    <Link to='/shipping' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Shipping</p>
                    </div>
                    </Link>
                    <Link to='/channel' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Channel</p>
                    </div>
                    </Link>
                    <Link to='/integrations' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Integrations</p>
                    </div>
                    </Link>
                    <Link to='/calculators' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Calculators</p>
                    </div>
                    </Link>
                    <Link to='/reports' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Reports</p>
                    </div>
                    </Link>
                    <Link to='/account' className="link_buttons">
                    <div className="options-container">
                        <p className ="options">Account</p>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default AlwaysShow

