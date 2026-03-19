'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#projets', label: 'Projets' },
  { href: '/#tarifs',  label: 'Tarifs'  },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link href="/" className="nav-logo flex flex-col leading-none">
            <span className="nav-logo-sub">Florence</span>
            <span className="nav-logo-name">Jarlan-Munoz</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2" aria-label="Menu">
            <span className={`burger-line${open ? ' rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`burger-line${open ? ' opacity-0' : ''}`} />
            <span className={`burger-line${open ? ' -rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 sec-black flex flex-col justify-center items-center transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-center">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="t-section-light hover:opacity-40 transition-opacity">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="absolute bottom-12 t-label-dark">Architecte DPLG</p>
      </div>
    </>
  )
}