const items = ['Réhabilitation','Extension','Aménagement Intérieur','Permis de Construire',"Maîtrise d'Œuvre","Design d'Espace",'Conception','Sur Mesure']
const doubled = [...items,...items]

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={i % (items.length) === items.length - 1 ? 'marquee-dot' : 'marquee-item'}>
            {i % 1 === 0 && i % items.length !== items.length - 1 ? item : '·'}
          </span>
        ))}
      </div>
    </div>
  )
}