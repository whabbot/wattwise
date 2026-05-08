/* Right-side anomaly drawer */
const AnomalyDrawer = ({ open, onClose }) => (
  <>
    <div className={'drawer-scrim' + (open ? ' open' : '')} onClick={onClose}/>
    <aside className={'drawer' + (open ? ' open' : '')} aria-hidden={!open}>
      <header className="drawer-head">
        <div>
          <div style={{ fontSize: 12, fontFamily:'IBM Plex Mono', color:'#64748B' }}>21 Apr 2026 · 16:30 GMT</div>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: '4px 0 6px' }}>Evening peak above expected</h2>
          <Chip kind="anomaly">Anomaly · severe</Chip>
        </div>
        <button className="icon-btn" onClick={onClose} aria-label="Close drawer"><Icon name="x"/></button>
      </header>
      <div className="drawer-body">
        <Card tight>
          <div style={{ fontSize: 12, color: '#64748B', fontWeight: 500, marginBottom: 6 }}>What happened</div>
          <p style={{ fontSize: 14, lineHeight: '20px', color: '#334155', margin: 0 }}>
            Your half-hourly use hit <span className="ww-mono" style={{ fontFamily:'IBM Plex Mono' }}>5.6 kWh</span> at 16:30, against an expected <span className="ww-mono" style={{ fontFamily:'IBM Plex Mono' }}>3.2 kWh</span> for a Monday afternoon — a 75% deviation.
          </p>
        </Card>

        <div>
          <div style={{ fontSize: 12, color:'#64748B', fontWeight: 500, marginBottom: 8 }}>Evidence</div>
          <Card tight>
            <div className="assumption"><span className="lbl">Observed</span><span className="val">5.62 kWh</span></div>
            <div className="assumption"><span className="lbl">Expected baseline</span><span className="val">3.21 kWh</span></div>
            <div className="assumption"><span className="lbl">Deviation</span><span className="val" style={{ color:'#DC2626' }}>+2.41 kWh (+75%)</span></div>
            <div className="assumption"><span className="lbl">Severity</span><span className="val" style={{ fontFamily:'IBM Plex Sans' }}>Severe (top 1% of days)</span></div>
            <div className="assumption"><span className="lbl">Confidence</span><span className="val" style={{ fontFamily:'IBM Plex Sans' }}>Exact reading</span></div>
          </Card>
        </div>

        <div>
          <div style={{ fontSize: 12, color:'#64748B', fontWeight: 500, marginBottom: 8 }}>Likely cause</div>
          <Card tight>
            <p style={{ fontSize: 14, lineHeight: '20px', color: '#334155', margin: 0 }}>
              An afternoon peak this size on a Monday is usually a piece of equipment running outside its normal hours — most often a fridge defrost cycle, an oven left on, or HVAC.
            </p>
          </Card>
        </div>

        <Banner level="opportunity" title="Recommended next step">
          Check whether equipment was scheduled correctly between 16:00–17:30 on Monday 21 Apr. If this becomes a pattern we'll flag it again.
        </Banner>
      </div>
      <footer className="drawer-foot">
        <Button variant="tertiary">Mark as expected</Button>
        <Button variant="secondary">Add note</Button>
        <Button variant="primary" icon="check-circle">Resolve</Button>
      </footer>
    </aside>
  </>
);

window.AnomalyDrawer = AnomalyDrawer;
