import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Profile from './pages/Profile.jsx'
import Experience from './pages/Experience.jsx'
import FocusAreas from './pages/FocusAreas.jsx'
import Advisory from './pages/Advisory.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Impact from './pages/Impact.jsx'
import Insights from './pages/Insights.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/focus-areas" element={<FocusAreas />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
