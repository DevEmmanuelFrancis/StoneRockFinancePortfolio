import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navigation from './navigation/navigation.tsx'
import Header from './header/header.tsx'
import PreHeader from './preheader/preheader.tsx'


import OverView from './overview/overview.tsx'
import OverviewContent from './body/overviewContent.tsx'
import Footer from './assets/footer/footer.tsx'
import Gap from './gap.tsx'
import Contact from './contactus/contact.tsx'
import Client from './clients/client.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Navigation/>
    <PreHeader/>
    <Header/>
    <Client/>
   <OverView/>
    <OverviewContent/>
    <Gap/>
    <Footer/>
    <Contact/>
    
  </StrictMode>
)
