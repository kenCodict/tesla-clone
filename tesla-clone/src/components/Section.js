import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
const Section = ({
  title,
  description,
  backGroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backGroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description} </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText} </LeftButton>
            <RightButton>{rightBtnText} </RightButton>
          </ButtonGroup>
        </Fade>
        <DownArrow src='./images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 30px;
  width: 70vw;
  grid-row-gap: 8px;
  align-content: center;
  justify-content: center;
  max-width: 500px;
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 200px;
  color: white;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  align-self: center;
  /* margin-right: 16px; */
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
