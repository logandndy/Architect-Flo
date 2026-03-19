'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const target = 2024, start = 2010, dur = 1400, t0 = performance.now()
    const run = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      if (counterRef.current)
        counterRef.current.textContent = String(Math.round(start + (target - start) * e))
      if (p < 1) requestAnimationFrame(run)
    }
    requestAnimationFrame(run)
  }, [])

  return (
    <section className="hero-v2">

      {/* ══ COLONNE GAUCHE — texte ══ */}
      <div className="hero-v2-left">

        {/* Ligne déco top */}
        <div className="hero-v2-topline anim-up d1" />

        {/* Eyebrow */}
        <div className="hero-v2-eyebrow anim-up d1">
          <span className="sec-eyebrow-line" />
          <p className="t-label">Architecte DPLG</p>
        </div>

        {/* Prénom */}
        <div className="anim-up d2">
          <h1 className="t-hero">Florence</h1>
        </div>

        {/* Nom outline */}
        <div className="anim-up d3">
          <h1 className="t-hero-outline">Jarlan-Munoz</h1>
        </div>

        {/* Séparateur animé */}
        <div className="hero-v2-sep anim-line d3" />

        {/* Accroche */}
        <p className="hero-v2-tagline anim-up d4">
          Concevoir des espaces qui résistent au temps.{' '}
          <em>Réhabilitation, extension, aménagement intérieur</em> — chaque projet porte une intention.
        </p>

        {/* CTA */}
        <div className="hero-v2-cta anim-up d4">
          <Link href="/#projets" className="btn-cta">
            Voir les projets
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
          <Link href="/#contact" className="hero-v2-link-contact">
            Contact →
          </Link>
        </div>

        {/* Coordonnées geo */}
        <div className="hero-v2-geo anim-up d5">
          <p className="t-label">43°12′N · 02°21′E</p>
          <div className="hero-v2-geo-sep" />
          <p className="t-label">Occitanie · France</p>
        </div>

        {/* Compteur années */}
        <div className="hero-v2-counter anim-up d1">
          <p className="t-label">Depuis</p>
          <p className="hero-v2-counter-year"><span ref={counterRef}>2010</span></p>
        </div>

        {/* Texte rotatif */}
        <p className="hero-sideways">Matière · Lumière · Espace · Structure</p>

        {/* Scroll hint */}
        <div className="hero-v2-scroll scroll-hint">
          <p className="t-label" style={{fontSize:'.5rem'}}>Scroll</p>
          <div className="hero-v2-scroll-line" />
        </div>
      </div>

      {/* ══ COLONNE DROITE — image avec effet burn ══ */}
      <div className="hero-v2-right anim-up d3">

        {/* Image principale */}
        <div className="hero-v2-img-wrap">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85"
            alt="Projet architectural — Florence Jarlan-Munoz"
            fill
            priority
            sizes="(max-width:1023px) 100vw, 45vw"
            className="hero-v2-img"
          />
          {/* Effet burn — dégradé qui "brûle" les bords */}
          <div className="hero-v2-burn-left"  />
          <div className="hero-v2-burn-top"   />
          <div className="hero-v2-burn-bottom"/>
          {/* Overlay grain */}
          <div className="hero-v2-grain" />
          {/* Badge flottant */}
          <div className="hero-v2-badge anim-up d5">
            <p className="t-label" style={{fontSize:'.55rem', color:'rgba(201,192,190,.5)'}}>Projet récent</p>
            <p className="hero-v2-badge-title">Maison L</p>
            <p className="t-label" style={{fontSize:'.5rem', color:'rgba(201,192,190,.4)'}}>Ariège · 2023 · 180 m²</p>
          </div>
        </div>

        {/* Plan SVG — dessous image, bien séparé */}
        <div className="hero-v2-plan anim-up d5">
          <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-v2-plan-svg">
            {/* Contour principal */}
            <rect x="20" y="20" width="200" height="160" stroke="#1a1816" strokeWidth="1.2"/>
            {/* Séparations intérieures */}
            <line x1="20"  y1="100" x2="130" y2="100" stroke="#1a1816" strokeWidth=".8"/>
            <line x1="130" y1="20"  x2="130" y2="180" stroke="#1a1816" strokeWidth=".8"/>
            <line x1="130" y1="120" x2="220" y2="120" stroke="#1a1816" strokeWidth=".8"/>
            {/* Portes */}
            <path d="M 20 65 A 25 25 0 0 1 45 40" stroke="#1a1816" strokeWidth=".6" fill="none"/>
            <line x1="20" y1="65" x2="20" y2="40" stroke="#1a1816" strokeWidth=".6"/>
            {/* Fenêtres */}
            <line x1="70"  y1="20"  x2="110" y2="20"  stroke="#1a1816" strokeWidth="2"/>
            <line x1="145" y1="20"  x2="200" y2="20"  stroke="#1a1816" strokeWidth="2"/>
            <line x1="20"  y1="120" x2="20"  y2="155" stroke="#1a1816" strokeWidth="2"/>
            {/* Labels */}
            <text x="68"  y="65"  textAnchor="middle" fill="#1a1816" fontSize="7" fontFamily="IBM Plex Mono" opacity=".55">SÉJOUR</text>
            <text x="175" y="75"  textAnchor="middle" fill="#1a1816" fontSize="7" fontFamily="IBM Plex Mono" opacity=".55">CUISINE</text>
            <text x="68"  y="145" textAnchor="middle" fill="#1a1816" fontSize="7" fontFamily="IBM Plex Mono" opacity=".55">CH. 01</text>
            <text x="175" y="152" textAnchor="middle" fill="#1a1816" fontSize="7" fontFamily="IBM Plex Mono" opacity=".55">CH. 02</text>
            {/* Cote horizontale */}
            <line x1="20" y1="190" x2="220" y2="190" stroke="#1a1816" strokeWidth=".5"/>
            <line x1="20" y1="186" x2="20"  y2="194" stroke="#1a1816" strokeWidth=".5"/>
            <line x1="220" y1="186" x2="220" y2="194" stroke="#1a1816" strokeWidth=".5"/>
            <text x="120" y="198" textAnchor="middle" fill="#1a1816" fontSize="6.5" fontFamily="IBM Plex Mono" letterSpacing="1.5">18.50 m</text>
            {/* Nord */}
            <circle cx="295" cy="30" r="10" stroke="#1a1816" strokeWidth=".7" fill="none" opacity=".5"/>
            <text x="295" y="34" textAnchor="middle" fill="#1a1816" fontSize="9" fontFamily="IBM Plex Mono" opacity=".5">N</text>
            {/* Référence */}
            <text x="250" y="100" fill="#1a1816" fontSize="6" fontFamily="IBM Plex Mono" opacity=".35">RDC — Plan masse</text>
            <text x="250" y="112" fill="#1a1816" fontSize="6" fontFamily="IBM Plex Mono" opacity=".25">Éch. 1:100</text>
            <text x="250" y="124" fill="#1a1816" fontSize="6" fontFamily="IBM Plex Mono" opacity=".25">FJM · 2024</text>
            {/* Ligne de séparation cartouche */}
            <line x1="240" y1="88" x2="320" y2="88" stroke="#1a1816" strokeWidth=".5" opacity=".3"/>
            <rect x="240" y="88" width="80" height="52" stroke="#1a1816" strokeWidth=".5" opacity=".25"/>
          </svg>
        </div>
      </div>

    </section>
  )
}