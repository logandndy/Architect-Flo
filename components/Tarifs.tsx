import Link from 'next/link'

const prestations = [
  {
    id:'01', titre:'Esquisse & Faisabilité',
    description:"Analyse du site, étude des contraintes réglementaires, premières intentions spatiales. Le point de départ de tout projet.",
    inclus:["Analyse du site et du programme","Étude de faisabilité","Esquisses et premières propositions","Réunion de cadrage"],
    tarif:"À partir de 1 500 €", unite:'forfait', highlight:false,
  },
  {
    id:'02', titre:'Mission Complète',
    description:"De l'esquisse au suivi de chantier. La mission la plus complète pour un résultat maîtrisé, du crayon à la clef.",
    inclus:["Esquisse + Avant-Projet","Permis de construire ou déclaration","Dossier de consultation des entreprises","Suivi de chantier et réception"],
    tarif:"8 – 12% du coût travaux", unite:'honoraires', highlight:true,
  },
  {
    id:'03', titre:'Conseil & Accompagnement',
    description:"Pour les projets qui nécessitent un regard expert ponctuel. Analyse, orientations, aide à la décision.",
    inclus:["Consultation sur rendez-vous","Analyse de plans existants","Conseil réglementaire","Aide à la sélection d'entreprises"],
    tarif:"150 €", unite:'/ heure', highlight:false,
  },
]

export default function Tarifs() {
  return (
    <section id="tarifs" className="sec-sand arch-grid sec-pad">
      <div className="sep-sand mb-20" />

      <div className="sec-header">
        <div>
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-line" />
            <p className="t-label">Prestations</p>
          </div>
          <h2 className="t-section">Tarifs</h2>
        </div>
        <p className="t-body hidden md:block max-w-xs">
          Ces grilles sont indicatives — un devis précis est toujours établi après première consultation.
        </p>
      </div>

      <div className="tarif-grid">
        {prestations.map(p => (
          <div key={p.id} className={`tarif-card${p.highlight ? ' featured' : ''}`}>
            <p className="tarif-card-num">{p.id}</p>
            <h3 className="tarif-title">{p.titre}</h3>
            <p className="tarif-desc">{p.description}</p>
            <ul className="tarif-list">
              {p.inclus.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div className="tarif-footer">
              <p className="tarif-unite">{p.unite}</p>
              <p className="tarif-price">{p.tarif}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="t-body mb-6 italic">Toutes les missions peuvent être adaptées à votre projet.</p>
        <Link href="/#contact" className="btn-cta">
          Demander un devis
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </Link>
      </div>
    </section>
  )
}