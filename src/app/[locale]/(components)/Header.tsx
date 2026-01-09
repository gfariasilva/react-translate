import LangSwitcher from './LangSwitcher';

export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid #eaeaea',
        background: '#fafafa',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      <LangSwitcher />
    </header>
  );
}