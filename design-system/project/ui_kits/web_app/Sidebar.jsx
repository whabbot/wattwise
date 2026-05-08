/* Sidebar nav */
const Sidebar = ({ route, onNav }) => {
  const items = [
    { id: 'dashboard', icon: 'home', label: 'Dashboard' },
    { id: 'consumption', icon: 'activity', label: 'Consumption' },
    { id: 'tariff', icon: 'bar-chart', label: 'Tariff comparison' },
    { id: 'quote', icon: 'file-text', label: 'Check a quote' },
    { id: 'anomalies', icon: 'alert-triangle', label: 'Anomalies' },
    { id: 'reports', icon: 'download', label: 'Reports' },
  ];
  const settings = [
    { id: 'business', icon: 'building', label: 'Business profile' },
    { id: 'meter', icon: 'gauge', label: 'Meter & data' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <svg viewBox="0 0 32 32" width="26" height="26"><rect width="32" height="32" rx="6" fill="#142132"/><path d="M6 8 L11 26 L16 14 L21 26 L26 8" fill="none" stroke="#14B8A6" strokeWidth="2.6" strokeLinecap="square" strokeLinejoin="miter"/></svg>
        <span className="sidebar-brand-name">Wattwise</span>
      </div>
      <div className="sidebar-section">Workspace</div>
      {items.map(it => (
        <div key={it.id} className={'nav-item' + (route === it.id ? ' active' : '')} onClick={() => onNav(it.id)}>
          <Icon name={it.icon}/><span>{it.label}</span>
        </div>
      ))}
      <div className="sidebar-section">Account</div>
      {settings.map(it => (
        <div key={it.id} className={'nav-item' + (route === it.id ? ' active' : '')} onClick={() => onNav(it.id)}>
          <Icon name={it.icon}/><span>{it.label}</span>
        </div>
      ))}
    </aside>
  );
};

const Topbar = ({ title }) => (
  <header className="topbar">
    <div className="topbar-title">{title}</div>
    <div className="topbar-meta">
      <span className="meter"><span className="dot"></span>Meter live · last reading 18:30</span>
      <span style={{ fontFamily: "var(--font-family-mono)", fontSize: 12 }}>MPAN 1900-0000-0123-456</span>
      <Button variant="secondary" size="sm" icon="upload">Import data</Button>
    </div>
  </header>
);

Object.assign(window, { Sidebar, Topbar });
