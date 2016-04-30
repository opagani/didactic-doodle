/*global describe it */

import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
// import sinon from 'sinon'

chai.use(chaiEnzyme())

import { render } from 'enzyme'

import App from '../app/components/app.jsx'

describe('<App/>', () => {
  it('displays the welcome message', () => {
    const wrapper = render(<App />)

    console.log('The App', wrapper, wrapper.text())

    expect(wrapper.text()).to.contain('Welcome')
  })
})
