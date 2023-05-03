import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars, FaWindowClose, FaTimes } from 'react-icons/fa'
import { selectCars } from '../features/cars/carSlice'
import { useSelector } from 'react-redux'
const Header = () => {
  const cars = useSelector(selectCars)
  console.log(cars)
  const [burgerStatus, setBurgerStatus] = useState(false)
  return (
    <Container>
      <a>
        <img src='./images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a href='#' key={index}>
                {car}
              </a>
            )
          })}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomIcon onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)} />
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href='#'>{car}</a>
              </li>
            )
          })}
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
        <li>
          <a href='#'>Semi</a>
        </li>
        <li>
          <a href='#'>Charging</a>
        </li>
        <li>
          <a href='#'>Power</a>
        </li>
        <li>
          <a href='#'>Commercial</a>
        </li>
        <li>
          <a href='#'>Utilities</a>
        </li>
        <li>
          <a href='#'>Test Drive</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const CustomIcon = styled(FaBars)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  box-shadow: 0 0 10px black;
  padding: 10px;
  overflow-y: auto;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.25s linear;
  li {
    list-style-type: none;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`
const CustomClose = styled(FaTimes)`
  position: absolute;
  top: 5px;
  right: 30px;
  font-size: 1.5rem;
  cursor: pointer;
`
