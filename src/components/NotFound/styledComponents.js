// import styled from 'styled-components'
import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  padding-top: 100px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
`
export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin: 10px;
  text-align: center;
`
export const NotFoundImg = styled.img`
  height: 180px;

  /* Medium */
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`

export const NotFoundHeading = styled.h1`
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const NotFoundText = styled.p`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
