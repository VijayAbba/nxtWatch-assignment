import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`

export const MainHeading = styled.h1`
  color: green;
`

export const LoginCard = styled.div`
  padding: 10px;
  border-radius: 10px;

  box-shadow: ${props =>
    props.isDark ? '#0f0f0f' : '0px 4px 26px 0px #bfbfbf'};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 30px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};

  /* Extra Small */
  @media screen and (max-width: 575px) {
    height: 430px;
    width: 80%;
  }
  /* Small */
  @media screen and (min-width: 576px) {
    width: 400px;
  }
  /* Medium */
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  /* Large */
  @media screen and (min-width: 992px) {
  }
  /* Extra Large */
  @media screen and (min-width: 1200px) {
  }
`

export const LoginImage = styled.img`
  width: 130px;

  padding-bottom: 30px;
`
export const LoginForm = styled.form`
  padding: 10px;
  width: 90%;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  padding-top: 10px;
`

export const InputElement = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #94a3b8;
  margin-top: 10px;
`

export const LabelElement = styled.label`\

  color: ${props => (props.black ? '#000000' : '#8a8a96')} ;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};

`

export const CheckBoxElement = styled.input``

export const LoginButton = styled.button`
  margin-top: 10px;
  background-color: #3b82f6;
  border-width: 0px;
  color: #ffffff;
  border-radius: 5px;
  width: 100%;
  margin-top: 25px;
  height: 35px;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
`
