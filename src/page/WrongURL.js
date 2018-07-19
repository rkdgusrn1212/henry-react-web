import React from 'react';
import {Grid, Col, Row, Image} from 'react-bootstrap';
const WrongURL = ()=>(
  <React.Fragment>
    <div style={
      {
        width:'100%',
        height:'370px'
      }
    }>
      <div style={
        {
          width:'100%',
          height:'50%',
          background:'DarkSlateGray'
        }
      }>
      </div>
      <div style={
        {
          width:'100%',
          height:'50%',
          background:'DarkSlateBlue'
        }
      }>
      </div>
    </div>
    <Grid>
      <Row>
        <Col>
          <Image src="http://placehold.it/1200x300" responsive/>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);
export default WrongURL;
