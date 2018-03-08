// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, {Component} from 'react';

// Converts javascript date object to 2-digit slashes date format
import prettyDate from '../../utils/prettyDate';

import  * as ReactBootstrap from 'react-bootstrap';


const {
    Grid, Row, Col, Button, FormGroup, ControlLabel, PageHeader
} = ReactBootstrap;


class BlogPost extends Component {

    render() {
        return (
            <Row style={{paddingBottom:'3%'}}>
                <Grid>

                    <Col md={12}>

                        <Col md={4} xsOffset={1} style={{minHeight: '234px',background:'#c5e8fc',border:'1px solid skyblue',paddingBottom:'1%'}}>
                            <Col md={10} xsOffset={0} style={{marginTop:'3%'}}>
                            {this.props.post.photo && <img className="author-photo" src={this.props.post.photo}/>}
                                </Col>
                            <Col md={10} xsOffset={0} style={{marginTop:'3%'}}>

                            {this.props.post.email && <span className="author-email">Email: {this.props.post.email}</span>}
                                </Col>
                            {this.props.post.google_link &&
                            <a href={this.props.post.google_link} className="author-google">
                                <i className="fa fa-google o-auth-btn"/>
                            </a>}
                            {this.props.post.facebook_link &&
                            <a href={this.props.post.facebook_link} className="author-facebook">
                                <i className="fa fa-facebook o-auth-btn"/>
                            </a>}
                            {
                                // Conditional logic to hide update button if another user logged in and made that post (anonymous posts can be editted by anyone)
                                (!this.props.post.email || this.props.post.email === this.props.userEmail)
                                &&
                                <Col md={7} xsOffset={0} style={{marginTop:'3%'}}>
                                    <Button className="delete-post"
                                            onClick={() => this.props.delete(this.props.post._id)}>Delete</Button>{'\u00A0'}
                                    <Button className="update-post"
                                            onClick={() => this.props.edit(this.props.post, this.props.index)}>Update
                                        </Button>
                                </Col>
                            }
                        </Col>
                        <Col md={6} xsOffset={0} style={{background:'white',border:'1px solid skyblue', minHeight: '234px'}}>
                            <h3 className="blog-title">{this.props.post.title}</h3>
                            <p className="blog-created-date">Published On: {prettyDate(this.props.post.createdDate)}</p>
                            <p className="blog-body">{this.props.post.body}</p>
                        </Col>
                    </Col>
                </Grid>
            </Row>
        );
    }
}

export default BlogPost;
