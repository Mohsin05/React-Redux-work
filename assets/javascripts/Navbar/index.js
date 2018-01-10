// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, { Component } from 'react';

class Navbar extends Component {

  constructor(){
    super();
  }

  handleLocalAuth() {
    const email = this.refs.email && this.refs.email.value;
    const password = this.refs.password && this.refs.password.value;
    this.props.localAuth(email, password);
  }

  render() {
    const user = this.props.user;

    return (
      <nav className="cruddy-auth-blog-nav navbar navbar-fixed-top">
        <div className="navbar-header">
          <span className="navbar-brand"><b>Inventory Blog</b></span>
        </div>
        <ul className="nav navbar-nav navbar-right">
                <li className="nav-button">
            {

              &&
              <span>
                LOG IN &#10161;

                  (!user || !user.email)
                  &&
                  <input className="nav-input" ref="email" placeholder="email" type="text"/>
                }
                {/*Repeating logic the the two below because of some CSS annoying-ness*/}
                {
                  (!user || !user.hasPassword)
                  &&
                  <input className="nav-input" ref="password" placeholder="password" type="password"/>
                }
                {
                  (!user || !user.hasPassword)
                  &&
                  <button className="local-auth-button" onClick={this.handleLocalAuth.bind(this)}>Post LocalAuth</button>
                }
         
            }
            {
              user
              &&
              <a className="nav-button log-out-button show" href="#" onClick={this.props.logout}>
                LOG OUT
              </a>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
