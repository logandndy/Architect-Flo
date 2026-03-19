'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projets } from '@/lib/projets'

export default function Projets() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="projets" className="sec-sand arch-grid sec-pad">

      <div className="sec-header">
        <div>
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-line" />
            <p className="t-label">Travaux sélectionnés</p>
          </div>
          <h2 className="t-section">Projets</h2>
        </div>
        <p className="t-label hidden md:block">{projets.length} réalisations</p>
      </div>

      <div>
        {projets.map(projet => (
          <div key={projet.id} className="proj-row">
            <div className="proj-row-inner">

              <span className="proj-num">{projet.numero}</span>

              <button onClick={() => setActive(active === projet.id ? null : projet.id)} className="text-left">
                <p className="t-proj-title hover:opacity-60 transition-opacity">{projet.titre}</p>
                <p className="t-label mt-1">{projet.sous_titre}</p>
              </button>

              <div className="proj-meta">
                <p className="t-label">{projet.lieu}</p>
                <p className="t-label">{projet.annee}</p>
                <span className="proj-tag">{projet.categorie}</span>
              </div>

              <Link href={`/projets/${projet.id}`} className="btn-details" onClick={e => e.stopPropagation()}>
                Détails
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>

            {/* Accordéon */}
            <div className={`proj-expand${active === projet.id ? ' open' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
                <div className="proj-img-wrap">
                  <Image src={projet.image_principale} alt={projet.titre} fill sizes="(max-width:768px) 100vw, 50vw"/>
                  <span className="proj-surface-tag">{projet.surface}</span>
                </div>
                <div className="flex flex-col justify-between py-2">
                  <p className="t-body">{projet.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projet.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
                  </div>
                  <Link href={`/projets/${projet.id}`} className="link-proj mt-6 self-start">
                    Voir le projet complet
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="sep-sand" />
      </div>
    </section>
  )
}