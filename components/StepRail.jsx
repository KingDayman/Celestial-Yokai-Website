/** Numbered vertical flow — used only where order carries meaning. */
export default function StepRail({ steps }) {
  return (
    <div className="rail">
      {steps.map((s, i) => (
        <div className="rail-step" key={i}>
          <div className="rail-num">{['I', 'II', 'III', 'IV', 'V', 'VI'][i] || i + 1}</div>
          <div className="rail-body">
            <div className="h3">{s.title}</div>
            <p>{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
