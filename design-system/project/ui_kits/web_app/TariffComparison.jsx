/* Tariff comparison screen */
const TariffComparison = () => {
  const [selected, setSelected] = React.useState('agile');
  const tariffs = [
    { id: 'current',  name: 'EDF Fix 12M (current)', type: 'Fixed',       unit: '28.42', stand: '0.61', annual: '2,847', diff: '—',     conf: 'exact',     locked: true },
    { id: 'agile',    name: 'Octopus Agile',         type: 'Half-hourly', unit: '23.10', stand: '0.49', annual: '2,694', diff: '−153',  conf: 'estimated' },
    { id: 'bg',       name: 'British Gas Standard',  type: 'Variable',    unit: '29.84', stand: '0.62', annual: '3,142', diff: '+295',  conf: 'exact'     },
    { id: 'eon',      name: 'E.ON Next Pulse',       type: 'Time-of-use', unit: '24.80', stand: '0.55', annual: '2,748', diff: '−99',   conf: 'estimated' },
    { id: 'peer',     name: 'SME peer median',       type: '—',           unit: '28.10', stand: '0.58', annual: '2,810', diff: '−37',   conf: 'benchmark' },
  ];
  return (
    <div className="stack-6">
      <div className="page-head">
        <div>
          <h1>Tariff comparison</h1>
          <p>What your last 90 days of use would have cost on each tariff.</p>
        </div>
        <div className="row">
          <Button variant="secondary" icon="calendar">Last 90 days</Button>
          <Button variant="primary" icon="plus">Add tariff</Button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid-3">
        <MetricCard
          eyebrow="Best alternative"
          value="Octopus Agile"
          chip={<Chip kind="estimated">Estimated</Chip>}
          interpretation="Half-hourly tariff that rewards off-peak use."
        />
        <MetricCard
          eyebrow="Annual saving vs current"
          mono
          value="£153"
          delta="5.4%"
          deltaTone="up"
          chip={<Chip kind="estimated">Estimated</Chip>}
          interpretation="Replays your 90-day pattern at each tariff's published rates."
        />
        <MetricCard
          eyebrow="Confidence"
          value="High"
          chip={<Chip kind="exact">Based on exact use</Chip>}
          interpretation="Built from 4,320 half-hourly readings · no estimated slots."
        />
      </div>

      {/* Table */}
      <div>
        <div className="section-h"><h2>All tariffs</h2><div className="row" style={{ fontSize: 13, color: '#64748B' }}>Sort: annual cost ↑</div></div>
        <div className="table-wrap">
          <table className="tbl">
            <thead><tr>
              <th style={{ width:36 }}></th>
              <th>Tariff</th>
              <th>Type</th>
              <th className="num">Unit rate</th>
              <th className="num">Standing</th>
              <th className="num">Annual cost</th>
              <th className="num">vs current</th>
              <th>Confidence</th>
            </tr></thead>
            <tbody>
              {tariffs.map(t => (
                <tr key={t.id} onClick={() => setSelected(t.id)} style={{ cursor: 'pointer', background: selected === t.id ? '#F0FDFA' : undefined }}>
                  <td><input type="radio" checked={selected === t.id} onChange={() => setSelected(t.id)}/></td>
                  <td><span style={{ fontWeight: 500 }}>{t.name}</span></td>
                  <td className="muted">{t.type}</td>
                  <td className="num">{t.unit} p/kWh</td>
                  <td className="num">£{t.stand}/day</td>
                  <td className="num">£{t.annual}</td>
                  <td className="num" style={{ color: t.diff.startsWith('−') ? '#15803D' : t.diff.startsWith('+') ? '#DC2626' : '#64748B' }}>{t.diff === '—' ? '—' : `£${t.diff}`}</td>
                  <td><Chip kind={t.conf}>{t.conf[0].toUpperCase()+t.conf.slice(1)}</Chip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Monthly savings chart */}
      <Card>
        <div className="row-between" style={{ marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>Monthly cost · current vs Octopus Agile</div>
            <div style={{ fontSize: 14, color: '#334155', marginTop: 2 }}>You would have paid less every month except August.</div>
          </div>
          <div className="row" style={{ fontSize: 12, color: '#64748B' }}>
            <span className="row" style={{ gap:6 }}><span style={{ width:12, height:10, background:'#142132' }}/>Current</span>
            <span className="row" style={{ gap:6 }}><span style={{ width:12, height:10, background:'#2563EB' }}/>Octopus Agile</span>
          </div>
        </div>
        <MonthlySavingsChart/>
      </Card>

      {/* Confidence explainer */}
      <Card>
        <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>What "Exact", "Estimated" and "Benchmark" mean here</h2>
        <div className="grid-3">
          <div>
            <Chip kind="exact">Exact</Chip>
            <p style={{ marginTop: 8, fontSize: 13, lineHeight: '18px', color: '#334155' }}>The supplier's published rate, applied to your actual half-hourly readings.</p>
          </div>
          <div>
            <Chip kind="estimated">Estimated</Chip>
            <p style={{ marginTop: 8, fontSize: 13, lineHeight: '18px', color: '#334155' }}>Half-hourly tariff replayed against representative wholesale rates for your region.</p>
          </div>
          <div>
            <Chip kind="benchmark">Benchmark</Chip>
            <p style={{ marginTop: 8, fontSize: 13, lineHeight: '18px', color: '#334155' }}>Median annual cost for SMEs in your sector with similar consumption.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

window.TariffComparison = TariffComparison;
