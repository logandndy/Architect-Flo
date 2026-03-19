'use client'
import { useState, useEffect } from 'react'

const EMAIL_PARTS = ['contact','@','florence-jarlanmunoz','.','fr']
const PHONE_DISPLAY = '+33 (0)6 00 00 00 00'
const PHONE_HREF    = 'tel:+33600000000'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [email,   setEmail]   = useState('')
  const [copied,  setCopied]  = useState(false)

  useEffect(() => { if (visible) setEmail(EMAIL_PARTS.join('')) }, [visible])

  const copy = async () => {
    if (email) { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  }

  return (
    <section id="contact" className="sec-black arch-grid-dark sec-pad">

      <div className="mb-16 md:mb-24">
        <div className="sec-eyebrow">
          <span className="sec-eyebrow-line-lt" />
          <p className="t-label-dark">Travaillons ensemble</p>
        </div>
        <h2 className="t-section-light">Contact</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        <div>
          <p className="t-body-dark text-lg mb-8">
            Vous avez un projet de réhabilitation, d&apos;extension ou d&apos;aménagement ? Je suis disponible pour une première consultation sans engagement.
          </p>
          <p className="t-body-dark italic mb-10">
            Je travaille principalement en Occitanie et dans le Sud-Ouest, mais reste ouverte à des projets sur l&apos;ensemble du territoire français.
          </p>
          <div className="badge-dispo">
            <span className="badge-dot" />
            <span className="badge-txt">Disponible pour nouveaux projets</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {/* Téléphone */}
          <div className="contact-card">
            <p className="contact-label">Téléphone</p>
            <a href={PHONE_HREF} className="contact-val block">{PHONE_DISPLAY}</a>
            <p className="contact-sub">Lun – Ven, 9h – 18h</p>
          </div>

          {/* Email obfusqué */}
          <div className="contact-card">
            <p className="contact-label">Email</p>
            {!visible ? (
              <div className="flex items-center gap-3">
                <span className="email-mask">••••••••@••••••••••.fr</span>
                <button className="btn-reveal" onClick={() => setVisible(true)}>Afficher</button>
              </div>
            ) : (
              <div className="flex items-center gap-3 flex-wrap">
                <a href={`mailto:${email}`} className="contact-val" style={{fontSize:'1rem'}}>{email}</a>
                <button className="btn-copy" onClick={copy}>{copied ? '✓ Copié' : 'Copier'}</button>
              </div>
            )}
            <p className="contact-sub">Réponse sous 48h</p>
          </div>

          {/* Légal */}
          <p className="t-label-dark leading-loose">
            Florence Jarlan-Munoz — Architecte DPLG<br/>
            Membre de l&apos;Ordre des Architectes d&apos;Occitanie<br/>
            SIRET : 000 000 000 00000
          </p>
        </div>
      </div>
    </section>
  )
}