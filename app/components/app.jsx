import React from 'react'

import { Col, Grid , Row } from 'react-bootstrap'

import Header from './header.jsx'

const App = () => <div>
  <Header />
  <Grid>
    <Row>
      <Col xs={12}>
        <p>Welcome to the App!</p>
      </Col>
    </Row>
  </Grid>     
</div>

export default App
