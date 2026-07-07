import Link from 'next/link';
import LoreFrame from '@/components/LoreFrame';

export default function NotFound() {
  return (
    <div className="lost">
      <LoreFrame className="veil-box">
        <div className="sigil" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--spirit)', textShadow: '0 0 30px rgba(155,93,229,.6)', marginBottom: '1rem' }}>
          ⟡
        </div>
        <div className="h3" style={{ marginBottom: '0.8rem' }}>You have wandered past the Veil</div>
        <p style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(221,184,255,.65)', marginBottom: '1.8rem' }}>
          This place is not on any record the Archive keeps. Whatever you were
          looking for, it is not here — or it has not been unsealed yet.
        </p>
        <Link href="/" className="btn-p">Return to the Realms</Link>
      </LoreFrame>
    </div>
  );
}
