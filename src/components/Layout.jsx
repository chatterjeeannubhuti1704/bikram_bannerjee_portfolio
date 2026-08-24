import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
export default function Layout({ children }) {
  return (
    <div className="min-h-screen  bg-[#0a0f1a]  text-paper font-body flex flex-col ">
      <Nav />
      <main className="flex-1 min-w-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
