import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-name">Florence Jarlan-Munoz</p>
          <p className="footer-sub">Architecte DPLG — Occitanie, France</p>
        </div>
        <nav className="flex items-center gap-8">
          {[['/#projets','Projets'],['/#tarifs','Tarifs'],['/#contact','Contact']].map(([href,label]) => (
            <Link key={href} href={href} className="footer-link">{label}</Link>
          ))}
        </nav>
        <p className="footer-sub">© {new Date().getFullYear()} — Tous droits réservés</p>
      </div>
    </footer>
  )
}