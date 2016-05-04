/*global describe it */

import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
// import sinon from 'sinon'

chai.use(chaiEnzyme())

import { shallow } from 'enzyme'

import { createStore } from 'redux'

import reducer from '../app/reducer.js'

import App from '../app/components/app.jsx'
import Header from '../app/components/header.jsx'

describe('<App/>', () => {
  it('includes the <Header/>', () => {
    const wrapper = shallow(<App><p/></App>)

    expect(wrapper).to.contain(<Header/>)
  })
})

describe('reducer', () => {
  it('increments the count when an INCREMENT action is dispatched', () => {
    const store = createStore(reducer)
    const action = { type: 'INCREMENT' }

    store.dispatch(action)
    store.dispatch(action)
    store.dispatch(action)

    expect(store.getState().count).to.equal(3)
  })

  it('decrements the count when a DECREMENT action is dispatched', () => {
    const store = createStore(reducer)
    const action = { type: 'DECREMENT' }

    store.dispatch(action)
    store.dispatch(action)
    store.dispatch(action)

    expect(store.getState().count).to.equal(-3)
  })
})

