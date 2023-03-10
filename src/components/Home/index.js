import {HomeContainer, HomeHeading, SubContainer} from './styledComponents'
import Header from '../Header'
import Sidebar from '../SideBar'

const Home = props => {
  console.log(props)
  return (
    <HomeContainer>
      <Header />
      <SubContainer>
        <Sidebar />
        <HomeHeading className="">Home</HomeHeading>
      </SubContainer>
    </HomeContainer>
  )
}

export default Home
