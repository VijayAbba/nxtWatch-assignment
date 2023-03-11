import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
`

export const CloseButtonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
`

export const BannerDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  /* Small */
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`

export const BannerImg = styled.img`
  width: 180px;

  /* Small */
  @media screen and (max-width: 767px) {
    width: 130px;
  }
`
export const BannerText = styled.p`
  font-size: 18px;
  /* Small */
  @media screen and (max-width: 767px) {
    font-size: 13px;
    width: 50%;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: 120px;
  color: black;
`
