import React from 'react';
import {Grid, Col, Row, Image} from 'react-bootstrap';
const WrongURL = ()=>(
  <React.Fragment>
    <div style={
      {
        width:'100%',
        height:'370px',
        position:'static',
        top:'0px',
        right:'0px',
      }
    }>
      <div style={
        {
          width:'100%',
          height:'100%',
          position
        }
      }>
      </div>
    </div>
    <img style={{height:'370px'}} src="http://placehold.it/1200x670"/>
    <Grid>
      <Row>
        <Col>
          <Image src="http://placehold.it/1200x300"/>
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
