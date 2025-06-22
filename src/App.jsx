
import { Routes, Route } from 'react-router-dom'
import ReferSection from './components/ReferSection'
import Banner from './components/HomeBanner'
import PopularGame from './components/PopularGame'
import SubscribeSection from './components/SubscribeSection'
import SocialMedia from './components/SocialMedia'
import FooterSection from './components/HomeFooter'
import MyAccount from './components/Account'


function HomePage() {
  return (
    <>
      <Banner />
      <div className="bg-banner" id="next-section">
        <ReferSection />
        <PopularGame />
        <SubscribeSection />
        <SocialMedia />
        <FooterSection />
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/myAccount" element={<MyAccount />} />
    </Routes>
  )
}

export default App
