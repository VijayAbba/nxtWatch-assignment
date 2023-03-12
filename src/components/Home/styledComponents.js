import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding-top: 100px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};

  /* Small */
  @media screen and (max-width: 767px) {
    padding-top: 70px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};

  /* Small */
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
export const SearchCard = styled.div`
  height: 40px;
  border: 1px solid ${props => (props.isDark ? '#616e7c' : '#94a3b8')};
  width: 410px;
  border-radius: 2px;
  margin-top: 20px;
  background-color: ${props => (props.isDark ? '#231f20' : '#f9f9f9')};

  /* Small */
  @media screen and (max-width: 767px) {
    width: 90%;
  }
  /* Medium */
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const SearchInput = styled.input`
  outline: none;
  height: 90%;
  width: 70%;
  border-width: 0px;
  font-size: 18px;
  padding-left: 15px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#231f20')};
  background-color: ${props => (props.isDark ? '#231f20' : '#f9f9f9')};
`

export const SearchButton = styled.button`
  height: 100%;
  width: 30%;
  border-width: 0px;
  border-left: 2px solid silver;
  background-color: ${props => (props.isDark ? '#383838' : '#f9f9f9')};
`

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const VideoListCard = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 30px;
`
