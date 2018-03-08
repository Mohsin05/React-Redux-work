// Component here uses ES6 destructuring syntax in import, what is means is "retrieve the property 'Component' off of the object exported from the 'react'"
import React, {Component} from 'react';

import  * as ReactBootstrap from 'react-bootstrap';


const {
    Grid, Row, Col, Button, FormGroup, ControlLabel, PageHeader
} = ReactBootstrap;


class AddPostForm extends Component {

    render() {
        return (
            <Row>
                <Grid>
                    <Col md={5} xsOffset={3}>
                        <PageHeader>Welcome to Inventroy Blog</PageHeader>
                    </Col>
                    <Col md={7} xsOffset={2}>
                        <form>
                            <FormGroup>
                                <Col md={2} xsOffset={0}>
                                    <ControlLabel pullLeft>Title: </ControlLabel>
                                </Col>
                                <Col md={10} xsOffset={0}>
                                    <input className="form-control" type="text" placeholder="Title"
                                           onChange={this.props.titleChange}
                                           value={this.props.title}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={2} xsOffset={0}>
                                    <ControlLabel pullLeft>Description:</ControlLabel>
                                </Col>
                                <Col md={10} xsOffset={0}>

                            <textarea style={{marginTop:'1%'}} className="form-control" placeholder="Write Here...."
                                   onChange={this.props.bodyChange}
                                   value={this.props.body}/>
                                </Col>
                            </FormGroup>
                            <Col md={2} xsOffset={2}>
                                <Button style={{marginTop:'4%'}} onClick={this.props.buttonClickFunc}>
                                    {this.props.buttonStr}
                                </Button>
                            </Col>
                        </form>
                    </Col>
                </Grid>
                <Col md={8} xsOffset={2} style={{borderBottom:'1px solid #bebebe', marginTop: '3%'}}>
                </Col>
                <Col md={5} xsOffset={3}>
                    <PageHeader>Blog List</PageHeader>
                </Col>
            </Row>

        );
    }
}

export default AddPostForm;
