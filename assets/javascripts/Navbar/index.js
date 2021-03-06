// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, {Component} from 'react';

import  * as ReactBootstrap from 'react-bootstrap';


const {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid, Row, Col, Thumbnail, Button, FormGroup, ControlLabel, FormControl, HelpBlock,
    Carousel
} = ReactBootstrap;

class Navigation extends Component {


    constructor() {
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
            <Row>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand" style={{color:'white',fontWeight:'Bold'}}>Inventory Blog</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <li className={`nav user-photo ${user && user.google && user.google.photo && 'show'}`}
                                style={user && user.google && user.google.photo && {backgroundImage: `url(${user.google.photo})`}}/>
                            <li className={`nav user-photo ${user && user.facebook && user.facebook.photo && 'show'}`}
                                style={user && user.facebook && user.facebook.photo && {backgroundImage: `url(${user.facebook.photo})`}}></li>
                        </Nav>
                        {
                            (!user || !user.email || !user.hasPassword || !user.google || !user.google.photo || !user.facebook || !user.facebook.photo)
                            &&
                            <Navbar.Form pullRight>

                                {
                                    (!user || !user.google)
                                    &&
                                    <FormGroup>
                                        <a href="/auth/google">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                                                weign="38" height="38"/>
                                        </a>{'\u00A0'}
                                    </FormGroup>
                                }
                                {
                                    (!user || !user.facebook)
                                    &&
                                    <FormGroup>
                                        <a href="/auth/facebook">
                                            <img
                                                src="http://sundevilgymnastics.com/wp-content/uploads/2016/11/FB-Icon.png"
                                                weign="32" height="32"/>
                                        </a>{'\u00A0'}
                                    </FormGroup>
                                }
                                {
                                    (!user || !user.email)
                                    &&
                                    <FormGroup>
                                        <input className="form-control" type="text" ref="email" placeholder="Email"/>{'\u00A0'}
                                    </FormGroup>
                                }
                                {/*Repeating logic the the two below because of some CSS annoying-ness*/}
                                {
                                    (!user || !user.hasPassword)
                                    &&
                                    <FormGroup>
                                        <input className="form-control" type="password" ref="password" placeholder="Password"/>{'\u00A0'}
                                    </FormGroup>
                                }
                                {
                                    (!user || !user.hasPassword)
                                    &&
                                    <Button onClick={this.handleLocalAuth.bind(this)}>Login</Button>
                                }
                            </Navbar.Form>
                        }
                        {
                            user
                            &&
                            <Navbar.Form pullRight>
                                <Button onClick={this.props.logout}>LOG OUT</Button>
                            </Navbar.Form>
                        }

                    </Navbar.Collapse>
                </Navbar>



                {/* <nav className="cruddy-auth-blog-nav navbar navbar-fixed-top">
                    <div className="navbar-header">
                        <span className="navbar-brand">Inventory Blog</span>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className={`nav user-photo ${user && user.google && user.google.photo && 'show'}`}
                            style={user && user.google && user.google.photo && {backgroundImage: `url(${user.google.photo})`}}/>
                        <li className={`nav user-photo ${user && user.facebook && user.facebook.photo && 'show'}`}
                            style={user && user.facebook && user.facebook.photo && {backgroundImage: `url(${user.facebook.photo})`}}></li>
                        <li className="nav-button">
                            {
                                (!user || !user.email || !user.hasPassword || !user.google || !user.google.photo || !user.facebook || !user.facebook.photo)
                                &&
                                <span>
                LOG IN &#10161;
                                    {
                                        (!user || !user.google)
                                        &&
                                        <a href="/auth/google"><i className="fa fa-google o-auth-btn"></i></a>
                                    }
                                    {
                                        (!user || !user.facebook)
                                        &&
                                        <a href="/auth/facebook"><i className="fa fa-facebook o-auth-btn"></i></a>
                                    }
                                    {
                                        (!user || !user.email)
                                        &&
                                        <input className="nav-input" ref="email" placeholder="email" type="text"/>
                                    }


                                    *Repeating logic the the two below because of some CSS annoying-ness

                                    {
                                        (!user || !user.hasPassword)
                                        &&
                                        <input className="nav-input" ref="password" placeholder="password"
                                               type="password"/>
                                    }
                                    {
                                        (!user || !user.hasPassword)
                                        &&
                                        <button className="local-auth-button" onClick={this.handleLocalAuth.bind(this)}>
                                            Login</button>
                                    }
              </span>
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
                </nav> */}
            </Row>
        );
    }
}

export default Navigation;
