import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/profile', label: 'Profile'},
  { to: '/experience', label: 'Experience'},
  { to: '/focus-areas', label: 'Focus Areas' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/case-studies', label: 'Case Studies'},
  { to: '/impact', label: 'Impact' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact'},
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* mobile bar */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-hairline bg-ink sticky top-0 z-40">
        <span className="font-display text-lg tracking-widish text-paper">Bikram B</span>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="text-brass font-mono text-xs tracking-widish border border-hairline px-3 py-2"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-[#0a0f1a] 
        
          flex justify-between object-center 
          transition-transform duration-300 lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
          p-4
        `}
      >
        {/* <div className="flex justify-center object-center"> */}
          <div className="mr-8">
            <a href='/' className="font-display text-2xl text-paper tracking-wide">Bikram Banerjee</a>
            <p className="font-mono text-[11px] text-slate tracking-widish mt-2 uppercase">
              AI Transformation · Financial Services
            </p>
          </div>

          <nav className="flex gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-baseline gap-3 py-2.5 font-body text-sm transition-colors ${
                    isActive ? 'text-paper' : 'text-slate hover:text-paper'
                  }`
                }
              >
               
                {l.label}
              </NavLink>
            ))}
          </nav>
        {/* </div> */}

      </header>
    </>
  )
}
