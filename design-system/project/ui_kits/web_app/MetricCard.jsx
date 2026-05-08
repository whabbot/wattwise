/* MetricCard — eyebrow / value / delta / interpretation / action */
const MetricCard = ({ eyebrow, value, mono = false, delta, deltaTone = 'up', interpretation, action, chip, footer }) => (
  <Card>
    <div className="metric-eyebrow">
      <span>{eyebrow}</span>
      {chip}
    </div>
    <div className="metric-row">
      <span className={'metric-value' + (mono ? ' mono' : '')}>{value}</span>
      {delta && <span className={`metric-delta delta-${deltaTone}`}>{delta}</span>}
    </div>
    {interpretation && <div className="metric-interp">{interpretation}</div>}
    {(action || footer) && (
      <div className="metric-footer">
        {footer}
        {action && <a href="#" onClick={(e) => { e.preventDefault(); action.onClick && action.onClick(); }}>{action.label} →</a>}
      </div>
    )}
  </Card>
);

/* Energy Score ring — SVG arc */
const ScoreRing = ({ score = 72, band = 'Good' }) => {
  const r = 52, c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, score / 100));
  const dash = c * pct;
  const color = score >= 80 ? '#15803D' : score >= 60 ? '#0F766E' : score >= 40 ? '#D97706' : '#DC2626';
  return (
    <div className="score-ring">
      <svg viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r={r} stroke="#E7E5E4" strokeWidth="8" fill="none"/>
        <circle
          cx="60" cy="60" r={r}
          stroke={color} strokeWidth="8" fill="none"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dasharray 240ms cubic-bezier(.2,0,0,1)' }}
        />
      </svg>
      <div className="label">
        <span className="num">{score}</span>
        <span className="band">{band}</span>
      </div>
    </div>
  );
};

Object.assign(window, { MetricCard, ScoreRing });
