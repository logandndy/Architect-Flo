import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projets } from '@/lib/projets'
import type { Metadata } from 'next'

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return projets.map(p => ({ id: p.id }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = projets.find(p => p.id === params.id)
  if (!p) return {}
  return { title: `${p.titre} — Florence Jarlan-Munoz`, description: p.description }
}

export default function ProjetPage({ params }: Props) {
  const projet = projets.find(p => p.id === params.id)
  if (!projet) notFound()

  const idx  = projets.findIndex(p => p.id === params.id)
  const prev = projets[idx - 1] ?? null
  const next = projets[idx + 1] ?? null

  return (
    <article className="detail-page">

      {/* ══════════════════════════════
          HERO — plein écran immersif
      ══════════════════════════════ */}
      <div className="detail-hero">
        <Image
          src={projet.image_principale}
          alt={projet.titre}
          fill priority
          sizes="100vw"
          className="detail-hero-img"
        />
        <div className="detail-overlay" />

        {/* Retour */}
        <Link href="/#projets" className="detail-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Tous les projets
        </Link>

        {/* Titre dans le hero */}
        <div className="detail-hero-title">
          <p className="detail-hero-cat">{projet.categorie} · {projet.annee}</p>
          <h1 className="detail-hero-h1">{projet.titre}</h1>
          <p className="detail-hero-sub">{projet.sous_titre}</p>
        </div>

        {/* Numéro filigrane */}
        <p className="detail-watermark">{projet.numero}</p>

        {/* Barre de méta en bas du hero */}
        <div className="detail-hero-meta">
          {[
            { label: 'Lieu',    value: projet.lieu     },
            { label: 'Surface', value: projet.surface  },
            { label: 'Année',   value: projet.annee    },
            { label: 'Type',    value: projet.categorie},
          ].map(({ label, value }) => (
            <div key={label} className="detail-hero-meta-item">
              <p className="detail-hero-meta-label">{label}</p>
              <p className="detail-hero-meta-val">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
          INTRODUCTION — citation forte
      ══════════════════════════════ */}
      <div className="detail-intro">
        <div className="detail-intro-inner">
          <span className="detail-intro-guillemet"></span>
          <blockquote className="detail-intro-quote">
            {projet.description}
          </blockquote>
          <div className="detail-intro-author">
            <div className="detail-intro-line" />
            <p className="detail-intro-name">Florence Jarlan-Munoz</p>
            <p className="detail-intro-role">Architecte DPLG, note d&apos;intention</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          CORPS — texte + image
      ══════════════════════════════ */}
      <div className="detail-body">

        {/* Bloc texte principal */}
        <div className="detail-body-grid">

          {/* Colonne texte */}
          <div className="detail-body-text">
            <div className="sec-eyebrow mb-8">
              <span className="sec-eyebrow-line" />
              <p className="t-label">Note de projet</p>
            </div>
            <div className="detail-paragraphs">
              {projet.description_longue.trim().split('\n\n').map((para, i) => (
                <p key={i} className="detail-para">{para}</p>
              ))}
            </div>

            {/* Tags matériaux */}
            <div className="detail-tags-wrap">
              <p className="t-label mb-4">Matériaux & Techniques</p>
              <div className="detail-tags">
                {projet.tags.map(tag => (
                  <span key={tag} className="detail-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne image + meta */}
          <div className="detail-body-aside">

            {/* Image secondaire */}
            {projet.images[0] && (
              <div className="detail-img-secondary">
                <Image
                  src={projet.images[0]}
                  alt={`${projet.titre} — vue intérieure`}
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="detail-img"
                />
                <div className="detail-img-caption">Vue intérieure</div>
              </div>
            )}

            {/* Fiche technique */}
            <div className="detail-fiche">
              <p className="detail-fiche-title">Fiche technique</p>
              {[
                { label: 'Maîtrise d\'œuvre', value: 'Florence Jarlan-Munoz' },
                { label: 'Lieu',              value: projet.lieu },
                { label: 'Année',             value: projet.annee },
                { label: 'Surface',           value: projet.surface },
                { label: 'Programme',         value: projet.categorie },
                { label: 'Mission',           value: 'Complète — APS au SAV' },
              ].map(({ label, value }) => (
                <div key={label} className="detail-fiche-row">
                  <p className="detail-fiche-label">{label}</p>
                  <p className="detail-fiche-val">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image panoramique pleine largeur */}
        {projet.images[1] && (
          <div className="detail-img-panorama">
            <Image
              src={projet.images[1]}
              alt={`${projet.titre} — panorama`}
              fill
              sizes="100vw"
              className="detail-img"
            />
            <div className="detail-img-panorama-caption">
              <p className="t-label" style={{color:'rgba(232,227,225,.5)'}}>Vue d&apos;ensemble</p>
            </div>
          </div>
        )}

        {/* Section chiffres clés */}
        <div className="detail-stats">
          {[
            { num: projet.surface,  label: 'Surface habitable' },
            { num: projet.annee,    label: 'Année de livraison' },
            { num: projet.tags.length + ' matériaux', label: 'Techniques employées' },
            { num: '12 mois',       label: 'Durée du chantier' },
          ].map(({ num, label }) => (
            <div key={label} className="detail-stat">
              <p className="detail-stat-num">{num}</p>
              <p className="detail-stat-label">{label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ══════════════════════════════
          CTA CONTACT
      ══════════════════════════════ */}
      <div className="detail-cta-band">
        <div className="detail-cta-inner">
          <div>
            <p className="t-label-dark mb-3">Vous avez un projet similaire ?</p>
            <p className="detail-cta-title">Parlons-en.</p>
          </div>
          <Link href="/#contact" className="btn-cta">
            Prendre contact
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════
          NAVIGATION PROJETS
      ══════════════════════════════ */}
      <div className="detail-nav-section">

        <div className="detail-nav-grid">
          {prev ? (
            <Link href={`/projets/${prev.id}`} className="detail-nav-card detail-nav-card--prev">
              <div className="detail-nav-card-img">
                <Image src={prev.image_principale} alt={prev.titre} fill sizes="50vw" className="detail-img"/>
                <div className="detail-nav-card-overlay" />
              </div>
              <div className="detail-nav-card-content">
                <p className="detail-nav-direction">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M9 5H1M4 2L1 5l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Projet précédent
                </p>
                <p className="detail-nav-card-num">{prev.numero}</p>
                <p className="detail-nav-card-title">{prev.titre}</p>
                <p className="detail-nav-card-sub">{prev.sous_titre}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link href={`/projets/${next.id}`} className="detail-nav-card detail-nav-card--next">
              <div className="detail-nav-card-img">
                <Image src={next.image_principale} alt={next.titre} fill sizes="50vw" className="detail-img"/>
                <div className="detail-nav-card-overlay" />
              </div>
              <div className="detail-nav-card-content detail-nav-card-content--right">
                <p className="detail-nav-direction">
                  Projet suivant
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </p>
                <p className="detail-nav-card-num">{next.numero}</p>
                <p className="detail-nav-card-title">{next.titre}</p>
                <p className="detail-nav-card-sub">{next.sous_titre}</p>
              </div>
            </Link>
          ) : <div />}
        </div>

      </div>

    </article>
  )
}