/* Half-hourly consumption chart — column chart + comparison line.
   Pure SVG; data is a 48-slot array (one per half-hour). */

const HHU_DATA = [
  // synthetic café: low overnight, ramp 6am, peaks lunch + dinner, slow off ~22:00
  0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 0.6,
  1.4, 2.6, 3.2, 3.6, 3.4, 3.0, 2.8, 2.6, 2.4, 2.7, 3.1, 3.6,
  3.8, 3.4, 2.6, 2.2, 2.4, 2.6, 2.8, 3.4, 4.2, 4.8, 5.6, 5.2,
  4.4, 3.6, 2.8, 2.2, 1.8, 1.4, 1.0, 0.8, 0.6, 0.5, 0.5, 0.4,
];
// expected baseline (typical day for this business)
const BASELINE = HHU_DATA.map((v, i) => v * (0.85 + 0.1 * Math.sin(i * 0.6)));
// anomaly markers (slot indices)
const ANOMALIES = [33, 34];

const ConsumptionChart = ({ height = 260, onAnomalyClick }) => {
  const W = 720, H = height, padL = 36, padR = 12, padT = 16, padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const max = 6;
  const slots = HHU_DATA.length;
  const colW = innerW / slots;
  const yScale = v => padT + innerH - (v / max) * innerH;
  const xSlot = i => padL + i * colW;

  // baseline polyline
  const linePoints = BASELINE.map((v, i) => `${xSlot(i) + colW / 2},${yScale(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display: 'block' }} role="img" aria-label="Half-hourly consumption">
      {/* gridlines */}
      <g stroke="#E7E5E4" strokeWidth="1">
        {[0, 1.5, 3, 4.5, 6].map(v => (
          <line key={v} x1={padL} x2={W - padR} y1={yScale(v)} y2={yScale(v)}/>
        ))}
      </g>
      {/* y labels */}
      <g fill="#64748B" fontSize="11" fontFamily="IBM Plex Mono">
        {[0, 1.5, 3, 4.5, 6].map(v => (
          <text key={v} x={padL - 6} y={yScale(v) + 3} textAnchor="end">{v.toFixed(1)}</text>
        ))}
      </g>
      {/* x labels (every 4 slots = 2h) */}
      <g fill="#64748B" fontSize="11" fontFamily="IBM Plex Mono">
        {[0, 8, 16, 24, 32, 40, 47].map(i => {
          const hr = Math.floor(i / 2);
          const lbl = `${String(hr).padStart(2, '0')}:00`;
          return <text key={i} x={xSlot(i) + colW / 2} y={H - 8} textAnchor="middle">{lbl}</text>;
        })}
      </g>
      {/* columns */}
      {HHU_DATA.map((v, i) => {
        const isAnom = ANOMALIES.includes(i);
        const y = yScale(v);
        const h = padT + innerH - y;
        const fill = isAnom ? '#DC2626' : '#142132';
        return (
          <rect
            key={i}
            x={xSlot(i) + 1} y={y} width={Math.max(1, colW - 2)} height={h}
            fill={fill} opacity={isAnom ? 1 : 0.85}
            onClick={() => isAnom && onAnomalyClick && onAnomalyClick(i)}
            style={{ cursor: isAnom ? 'pointer' : 'default' }}
          >
            <title>{`${String(Math.floor(i/2)).padStart(2,'0')}:${i%2 ? '30' : '00'} · ${v.toFixed(2)} kWh`}</title>
          </rect>
        );
      })}
      {/* baseline line (expected) */}
      <polyline fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" points={linePoints}/>
      {/* anomaly markers */}
      {ANOMALIES.map(i => (
        <circle key={i} cx={xSlot(i) + colW / 2} cy={yScale(HHU_DATA[i]) - 8} r="4" fill="#DC2626" stroke="#fff" strokeWidth="2"/>
      ))}
    </svg>
  );
};

/* Monthly savings bars — for tariff comparison */
const MonthlySavingsChart = () => {
  const months = ['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'];
  const current   = [248, 232, 224, 220, 235, 270, 318, 342, 358, 322, 286, 254];
  const alternate = [224, 208, 198, 196, 212, 244, 290, 312, 326, 294, 258, 230];
  const W = 720, H = 220, padL = 40, padR = 12, padT = 16, padB = 28;
  const innerW = W - padL - padR, innerH = H - padT - padB;
  const max = 400;
  const groupW = innerW / months.length;
  const barW = groupW * 0.36;
  const yScale = v => padT + innerH - (v / max) * innerH;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display: 'block' }}>
      <g stroke="#E7E5E4" strokeWidth="1">
        {[0, 100, 200, 300, 400].map(v => <line key={v} x1={padL} x2={W - padR} y1={yScale(v)} y2={yScale(v)}/>)}
      </g>
      <g fill="#64748B" fontSize="11" fontFamily="IBM Plex Mono">
        {[0, 100, 200, 300, 400].map(v => <text key={v} x={padL - 6} y={yScale(v) + 3} textAnchor="end">£{v}</text>)}
      </g>
      {months.map((m, i) => {
        const cx = padL + groupW * i + groupW / 2;
        return (
          <g key={m}>
            <rect x={cx - barW - 2} y={yScale(current[i])}   width={barW} height={padT + innerH - yScale(current[i])}   fill="#142132" opacity="0.9"/>
            <rect x={cx + 2}        y={yScale(alternate[i])} width={barW} height={padT + innerH - yScale(alternate[i])} fill="#2563EB"/>
            <text x={cx} y={H - 8} textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="IBM Plex Mono">{m}</text>
          </g>
        );
      })}
    </svg>
  );
};

Object.assign(window, { ConsumptionChart, MonthlySavingsChart });
