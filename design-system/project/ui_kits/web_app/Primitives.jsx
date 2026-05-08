/* Reusable primitives — Button, Card, Chip, Banner, Field, Tabs */

const Button = ({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, type = 'button', style }) => {
  const cls = ['btn', `btn-${variant}`, size === 'sm' ? 'btn-sm' : ''].filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} onClick={onClick} style={style}>
      {icon && <Icon name={icon} size={16}/>}
      {children}
      {iconRight && <Icon name={iconRight} size={16}/>}
    </button>
  );
};

const Card = ({ children, tight, style, onClick }) => (
  <div className={'card' + (tight ? ' card-tight' : '')} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', ...style }}>
    {children}
  </div>
);

const Chip = ({ kind = 'exact', children }) => (
  <span className={`chip chip-${kind}`}><span className="dot"></span>{children}</span>
);

const Banner = ({ level = 'info', title, children, actions }) => {
  const cls = { critical: 'banner-crit', warning: 'banner-warn', opportunity: 'banner-opp', info: 'banner-info' }[level];
  const iconName = { critical: 'alert-triangle', warning: 'alert-circle', opportunity: 'zap', info: 'info' }[level];
  return (
    <div className={`banner ${cls}`}>
      <Icon name={iconName} size={18}/>
      <div style={{ flex: 1 }}>
        <h4 className="banner-title">{title}</h4>
        <p className="banner-body">{children}</p>
        {actions && <div className="banner-actions">{actions}</div>}
      </div>
    </div>
  );
};

const Field = ({ label, help, error, children }) => (
  <div className="field">
    {label && <label className="field-label">{label}</label>}
    {children}
    {error ? <span className="field-error">{error}</span> : help && <span className="field-help">{help}</span>}
  </div>
);

const InputSuffix = ({ value, onChange, suffix, placeholder }) => (
  <div className="input-suffix">
    <input value={value} onChange={onChange} placeholder={placeholder}/>
    <span className="sfx">{suffix}</span>
  </div>
);

const Tabs = ({ tabs, value, onChange }) => (
  <div className="tabs">
    {tabs.map(t => (
      <div
        key={t.id}
        className={'tab' + (value === t.id ? ' active' : '')}
        onClick={() => onChange(t.id)}
      >
        {t.label}
      </div>
    ))}
  </div>
);

Object.assign(window, { Button, Card, Chip, Banner, Field, InputSuffix, Tabs });
