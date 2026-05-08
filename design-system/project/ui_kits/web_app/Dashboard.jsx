/* Dashboard screen */
const Dashboard = ({ onOpenAnomaly, onNav }) => (
  <div className="stack-6">
    <div className="page-head">
      <div>
        <h1>Good afternoon, Priya</h1>
        <p>Here's what your meter has told us about Bramble Lane Café over the last 30 days.</p>
      </div>
      <div className="row">
        <Button variant="secondary" icon="calendar">Last 30 days</Button>
        <Button variant="secondary" icon="download">Export report</Button>
      </div>
    </div>

    {/* Primary answer row */}
    <div className="grid-4">
      <Card>
        <div className="metric-eyebrow"><span>Energy score</span><Chip kind="healthy">Healthy</Chip></div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <ScoreRing score={72} band="Good"/>
          <div style={{ fontSize:13, color:'#334155', lineHeight:'18px' }}>
            Peak-hour use dropped 11% versus last month. Keep evening shutdowns consistent to reach 80.
          </div>
        </div>
        <div className="metric-footer"><a href="#" onClick={(e)=>{e.preventDefault(); onNav('consumption');}}>View score breakdown →</a></div>
      </Card>
      <MetricCard
        eyebrow="Estimated annual cost"
        value="£2,847"
        delta="▲ £142 vs last year"
        deltaTone="down"
        chip={<Chip kind="estimated">Estimated</Chip>}
        interpretation="Based on your last 90 days at current rates."
        action={{ label: 'See assumptions', onClick: () => onNav('tariff') }}
      />
      <MetricCard
        eyebrow="Savings potential"
        value="£148"
        delta="/ year"
        deltaTone="up"
        chip={<Chip kind="estimated">Estimated</Chip>}
        interpretation="Switching to Octopus Agile would have cost £92 less last month."
        action={{ label: 'Compare tariffs', onClick: () => onNav('tariff') }}
      />
      <MetricCard
        eyebrow="Active anomalies"
        value="2"
        chip={<Chip kind="anomaly">Review</Chip>}
        interpretation="Standing charge spike on 18 Apr · unusual evening peak on 21 Apr."
        action={{ label: 'Review anomalies', onClick: () => onNav('anomalies') }}
      />
    </div>

    {/* Evidence: chart */}
    <Card>
      <div className="row-between" style={{ marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>Half-hourly use · Mon 21 Apr</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#142132', marginTop: 2 }}>
            <span className="ww-mono" style={{ fontFamily: 'IBM Plex Mono' }}>32.4 kWh</span>
            <span style={{ fontSize: 13, color: '#DC2626', marginLeft: 10, fontWeight: 500 }}>▲ 18% vs typical Monday</span>
          </div>
        </div>
        <div className="row" style={{ fontSize: 12, color: '#64748B' }}>
          <span className="row" style={{ gap: 6 }}><span style={{ width:12, height:3, background:'#142132' }}/>Actual</span>
          <span className="row" style={{ gap: 6 }}><span style={{ width:12, height:3, background:'#2563EB', borderTop:'1px dashed #2563EB' }}/>Expected</span>
          <span className="row" style={{ gap: 6 }}><span style={{ width:8, height:8, borderRadius:99, background:'#DC2626' }}/>Anomaly</span>
        </div>
      </div>
      <ConsumptionChart onAnomalyClick={onOpenAnomaly}/>
      <div style={{ fontSize: 12, color: '#64748B', marginTop: 8 }}>
        Click a red marker to inspect the anomaly. Tooltips show exact kWh per half-hour.
      </div>
    </Card>

    {/* Interpretation + Action */}
    <div className="grid-2-3">
      <div className="stack-4">
        <Banner level="critical" title="Standing charge increased above your usual range" actions={
          <><Button variant="secondary" size="sm">View bill</Button><Button variant="tertiary" size="sm">Dismiss</Button></>
        }>
          Your daily fixed cost is now £0.61/day, up from £0.48/day on 18 Apr. Review your latest bill and tariff terms.
        </Banner>
        <Banner level="opportunity" title="Estimated savings: £148 / year on Octopus Agile" actions={
          <Button variant="secondary" size="sm" iconRight="arrow-right">See comparison</Button>
        }>
          Based on your last 90 days of half-hourly use. Confirm before switching.
        </Banner>
        <Banner level="warning" title="3 half-hourly readings missing on Tue 22 Apr">
          We've estimated those slots based on the surrounding 24 hours. Reconnect your meter feed to backfill exact values.
        </Banner>
      </div>
      <Card>
        <div className="section-h"><h2>Recent anomalies</h2><a href="#" style={{ fontSize: 13, color: '#0F766E' }}>All →</a></div>
        <div className="stack-3">
          <AnomalyRow when="18 Apr · 09:00" title="Standing charge +27%" severity="anomaly" onClick={onOpenAnomaly}/>
          <AnomalyRow when="21 Apr · 16:30" title="Evening peak above expected" severity="anomaly" onClick={onOpenAnomaly}/>
          <AnomalyRow when="22 Apr · 03:00" title="Missing half-hourly readings" severity="review"/>
        </div>
      </Card>
    </div>
  </div>
);

const AnomalyRow = ({ when, title, severity, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display:'flex', justifyContent:'space-between', alignItems:'center', gap:12,
      padding:'10px 0', borderTop:'1px solid #F5F5F4', cursor: onClick ? 'pointer' : 'default'
    }}
  >
    <div>
      <div style={{ fontSize: 14, color: '#142132', fontWeight: 500 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#64748B', fontFamily: 'IBM Plex Mono' }}>{when}</div>
    </div>
    <Chip kind={severity === 'anomaly' ? 'anomaly' : 'estimated'}>{severity === 'anomaly' ? 'Anomaly' : 'Review'}</Chip>
  </div>
);

window.Dashboard = Dashboard;
