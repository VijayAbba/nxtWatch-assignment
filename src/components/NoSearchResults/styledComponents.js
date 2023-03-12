import styled from 'styled-components'

export const NoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  width: 100vw;
  margin-top: 10px;
`

export const NoSearchImg = styled.img`
  width: 400px;
`
export const NoSearchHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#00000')};
`

export const NoSearchText = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#00000')};
`

export const Retry = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border-width: 0px;
  padding: 10px;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
`
