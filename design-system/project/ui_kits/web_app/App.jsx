/* App shell — sidebar + topbar + route switch + drawer */
const App = () => {
  const [route, setRoute] = React.useState('dashboard');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const titles = {
    dashboard: 'Dashboard',
    consumption: 'Consumption',
    tariff: 'Tariff comparison',
    quote: 'Check a quote',
    anomalies: 'Anomalies',
    reports: 'Reports',
    business: 'Business profile',
    meter: 'Meter & data',
    settings: 'Settings',
  };

  const screen = {
    dashboard: <Dashboard onOpenAnomaly={() => setDrawerOpen(true)} onNav={setRoute}/>,
    tariff:    <TariffComparison/>,
    quote:     <CheckQuote/>,
    anomalies: <AnomaliesStub onOpen={() => setDrawerOpen(true)}/>,
  }[route] || <ComingSoon route={route}/>;

  return (
    <div className="app">
      <Sidebar route={route} onNav={setRoute}/>
      <div className="main">
        <Topbar title={titles[route] || 'Wattwise'}/>
        <div className="content">{screen}</div>
      </div>
      <AnomalyDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}/>
    </div>
  );
};

const AnomaliesStub = ({ onOpen }) => (
  <div className="stack-6">
    <div className="page-head"><div><h1>Anomalies</h1><p>Events flagged for your review.</p></div></div>
    <div className="table-wrap">
      <table className="tbl">
        <thead><tr><th>When</th><th>Event</th><th className="num">Deviation</th><th>Severity</th><th>Status</th></tr></thead>
        <tbody>
          <tr onClick={onOpen} style={{ cursor:'pointer' }}>
            <td className="muted" style={{ fontFamily:'IBM Plex Mono' }}>21 Apr · 16:30</td>
            <td>Evening peak above expected</td>
            <td className="num" style={{ color:'#DC2626' }}>+75%</td>
            <td><Chip kind="anomaly">Severe</Chip></td>
            <td className="muted">Open</td>
          </tr>
          <tr onClick={onOpen} style={{ cursor:'pointer' }}>
            <td className="muted" style={{ fontFamily:'IBM Plex Mono' }}>18 Apr · 09:00</td>
            <td>Standing charge increased above usual range</td>
            <td className="num" style={{ color:'#DC2626' }}>+27%</td>
            <td><Chip kind="anomaly">Anomaly</Chip></td>
            <td className="muted">Open</td>
          </tr>
          <tr>
            <td className="muted" style={{ fontFamily:'IBM Plex Mono' }}>22 Apr · 03:00</td>
            <td>Missing half-hourly readings (3 slots)</td>
            <td className="num muted">—</td>
            <td><Chip kind="estimated">Review</Chip></td>
            <td className="muted">Estimated</td>
          </tr>
          <tr>
            <td className="muted" style={{ fontFamily:'IBM Plex Mono' }}>09 Apr · 14:00</td>
            <td>Off-peak use higher than baseline</td>
            <td className="num" style={{ color:'#15803D' }}>−12%</td>
            <td><Chip kind="healthy">Resolved</Chip></td>
            <td className="muted">Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ComingSoon = ({ route }) => (
  <div className="stack-6">
    <div className="page-head"><div><h1 style={{ textTransform:'capitalize' }}>{route}</h1><p>This screen is part of the UI kit but not yet built. The components used elsewhere will compose this page.</p></div></div>
    <Card>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'40px 20px', gap:12 }}>
        <Icon name="file-text" size={28} color="#64748B"/>
        <div style={{ fontSize:16, fontWeight:600 }}>Not in this prototype</div>
        <div style={{ fontSize:13, color:'#64748B', maxWidth: 360 }}>This kit focuses on the dashboard, tariff comparison, quote check, and anomaly review flows.</div>
      </div>
    </Card>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
