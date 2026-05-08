/* Check a quote — left: form, right: projection */
const CheckQuote = () => {
  const [unit, setUnit] = React.useState('27.95');
  const [stand, setStand] = React.useState('0.58');
  const [term, setTerm] = React.useState('12');
  const [supplier, setSupplier] = React.useState('NPower SME');

  // very rough projection from inputs (illustrative)
  const annualKwh = 10120;
  const annual = (parseFloat(unit) * annualKwh / 100 + parseFloat(stand) * 365).toFixed(0);
  const vsCurrent = (annual - 2847).toFixed(0);

  return (
    <div className="stack-6">
      <div className="page-head">
        <div>
          <h1>Check a quote</h1>
          <p>Paste in a tariff offer and see what it would have cost you, exactly, over the last 12 months.</p>
        </div>
      </div>

      <div className="grid-2">
        {/* Form */}
        <Card>
          <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 16px' }}>Quote details</h2>
          <div className="stack-4">
            <Field label="Supplier" help="Pick from the list or type any supplier name.">
              <input className="input" value={supplier} onChange={e => setSupplier(e.target.value)}/>
            </Field>
            <div className="grid-2">
              <Field label="Unit rate" help="Excluding VAT">
                <InputSuffix value={unit} onChange={e => setUnit(e.target.value)} suffix="p/kWh"/>
              </Field>
              <Field label="Standing charge" help="Daily fixed charge">
                <InputSuffix value={stand} onChange={e => setStand(e.target.value)} suffix="£/day"/>
              </Field>
            </div>
            <Field label="Contract term" help="How long the rates are locked for.">
              <select className="input" value={term} onChange={e => setTerm(e.target.value)}>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
              </select>
            </Field>
            <div className="row" style={{ gap: 8 }}>
              <Button variant="primary">Run projection</Button>
              <Button variant="secondary">Clear</Button>
            </div>
          </div>
        </Card>

        {/* Projection */}
        <div className="stack-4">
          <Card>
            <div className="metric-eyebrow"><span>Projected annual cost</span><Chip kind="exact">Exact replay</Chip></div>
            <div className="metric-row">
              <span className="metric-value mono">£{annual}</span>
              <span className={'metric-delta ' + (vsCurrent <= 0 ? 'delta-up' : 'delta-down')}>
                {vsCurrent <= 0 ? `▼ £${Math.abs(vsCurrent)} vs current` : `▲ £${vsCurrent} vs current`}
              </span>
            </div>
            <div className="metric-interp">
              Calculated by replaying your last 12 months of half-hourly readings against this quote's rates.
            </div>
          </Card>
          <Card>
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 10px' }}>Assumptions</h3>
            <div className="assumption"><span className="lbl">Annual consumption</span><span className="val">10,120 kWh</span></div>
            <div className="assumption"><span className="lbl">Period replayed</span><span className="val" style={{ fontFamily:'IBM Plex Sans' }}>1 May 2025 – 24 Apr 2026</span></div>
            <div className="assumption"><span className="lbl">Missing slots</span><span className="val">3 / 17,520 (0.02%)</span></div>
            <div className="assumption"><span className="lbl">VAT</span><span className="val" style={{ fontFamily:'IBM Plex Sans' }}>Excluded — match your bill</span></div>
            <div className="assumption"><span className="lbl">CCL</span><span className="val" style={{ fontFamily:'IBM Plex Sans' }}>Not modelled</span></div>
          </Card>
          <Banner level="info" title="How this differs from the supplier's quote">
            Suppliers usually quote based on EAC. Wattwise replays your real half-hourly use, so the number you see here reflects how this tariff would have actually billed you.
          </Banner>
        </div>
      </div>
    </div>
  );
};

window.CheckQuote = CheckQuote;
