export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background:
          'radial-gradient(1200px 600px at 50% -10%, rgba(99,102,241,0.25), transparent), radial-gradient(800px 400px at 110% 110%, rgba(16,185,129,0.25), transparent)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'rgba(255,255,255,0.8)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
          maxWidth: 720,
        }}
      >
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: 0 }}>Hj</h1>
        <p style={{ margin: 0, color: '#374151' }}>
          Your lightweight Next.js app is live-ready.
        </p>
      </div>
    </main>
  );
}
