import Link from 'next/link';
import Image from 'next/image';
import StatusChip from './StatusChip';

export default function SpeciesCard({ s }) {
  const sealed = s.status === 'sealed';
  return (
    <Link href={`/world/species/${s.slug}`} className={`sp-card ${sealed ? 'sealed-card card' : ''}`}>
      <div className="art">
        {s.image ? (
          <Image src={s.image} alt={s.name} width={280} height={280} />
        ) : (
          <span className="sil" aria-hidden="true">{sealed ? '?' : s.name[0]}</span>
        )}
      </div>
      <StatusChip status={s.status} />
      <div className="name">{sealed ? `${s.name} · record sealed` : s.name}</div>
      <div className="epithet">{sealed ? 'The Archive has not unsealed this record.' : s.epithet}</div>
    </Link>
  );
}
