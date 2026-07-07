export default function SectionLabel({ children, center = false }) {
  return <div className={`lbl ${center ? 'center' : ''}`}>{children}</div>;
}
