import { statusLabel } from '@/content/species';

export default function StatusChip({ status }) {
  return <span className={`chip ${status}`}>{statusLabel[status] || status}</span>;
}
