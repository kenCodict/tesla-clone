import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backGroundImg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backGroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backGroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        backGroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back Guarantee'
        backGroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Cost less Than a new Roof'
        backGroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accessories'
        description='New Brand customized accessories'
        backGroundImg='accessories.jpg'
        leftBtnText='shop Now'
      />
    </Container>
  )
}

export default Home
const Container = styled.div`
  height: 100vh;
`
