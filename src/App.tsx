import { useState, useEffect } from 'react'
import logoImg from '@/imports/AERODUBAPNG.png'
import workersImg from '@/imports/Captura_de_pantalla_2026-08-09_234134.png'
import of21maImg from '@/imports/Captura_de_pantalla_2026-08-09_234150.png'
import cf1900Img from '@/imports/Captura_de_pantalla_2026-08-09_234200.png'
import htp25Img from '@/imports/Captura_de_pantalla_2026-08-09_234207.png'
import salpiqueoImg from '@/imports/Captura_de_pantalla_2026-08-09_234218.png'
import rejillaImg from '@/imports/Captura_de_pantalla_2026-08-09_234225.png'
import optiGridImg from '@/imports/Captura_de_pantalla_2026-08-09_234232.png'
import mesabarImg from '@/imports/Captura_de_pantalla_2026-08-09_234241.png'
import eliminadoresImg from '@/imports/Captura_de_pantalla_2026-08-09_234249.png'
import escalerasImg from '@/imports/Captura_de_pantalla_2026-08-09_234319.png'
import maderaImg from '@/imports/madera.png'
import torreImg from '@/imports/torre.png'
import ventiladorImg from '@/imports/ventilador.png'
import motorImg from '@/imports/motor.png'
import ns001Img from '@/imports/NS001.png'
import ns002Img from '@/imports/NS002.png'
import ns003Img from '@/imports/NS003.png'
import ns004Img from '@/imports/NS004.png'
import ns005Img from '@/imports/NS005.png'
import ns006Img from '@/imports/NS006.png'
import ns007Img from '@/imports/NS007.png'
import ns008Img from '@/imports/NS008.png'
import ns009Img from '@/imports/NS009.png'

const TEAL = '#1a5f7a'
const TEAL_DARK = '#0d3d50'
const AMBER = '#e8940a'

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function Arrow() {
  return <span style={{ color: AMBER, fontWeight: 700, marginRight: 8 }}>→</span>
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#nosotros' },
    { label: 'Qué Hacemos', href: '#hacemos' },
    { label: 'Productos', href: '#productos' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? TEAL_DARK : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        padding: '0 2rem',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="AERODUBA" style={{ height: 48, width: 'auto', objectFit: 'contain' }} />
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none', letterSpacing: 0.5, textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = AMBER)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >{l.label}</a>
          ))}
          <a href="#contacto" style={{
            background: AMBER, color: '#fff', padding: '8px 20px',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14,
            textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c77a00')}
            onMouseLeave={e => (e.currentTarget.style.background = AMBER)}
          >Cotizar</a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
        >
          <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 5 }} />
          <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 5 }} />
          <div style={{ width: 24, height: 2, background: '#fff' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: TEAL_DARK, padding: '1rem 2rem', borderTop: `1px solid rgba(255,255,255,0.1)` }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '10px 0',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 16,
              color: '#fff', textDecoration: 'none', textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1512584927346-c53de69dec17?w=1600&h=900&fit=crop&auto=format)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, rgba(13,61,80,0.92) 0%, rgba(13,61,80,0.75) 50%, rgba(13,61,80,0.4) 100%)`,
      }} />

      <div style={{
        position: 'relative', zIndex: 2, height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        maxWidth: 1200, margin: '0 auto', padding: '0 2rem',
      }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{
            display: 'inline-block',
            background: AMBER, color: '#fff',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 12, letterSpacing: 3, textTransform: 'uppercase',
            padding: '6px 16px', marginBottom: 24,
          }}>Empresa 100% Mexicana</div>

          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
            fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#fff',
            lineHeight: 1, marginBottom: 16, letterSpacing: -1,
          }}>
            TORRES DE<br />
            <span style={{ color: AMBER }}>ENFRIAMIENTO</span><br />
            INDUSTRIALES
          </h1>

          <p style={{
            fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6,
            marginBottom: 40, maxWidth: 520, fontWeight: 400,
          }}>
            Fabricación, reparación, instalación y suministro integral de refacciones para sistemas de enfriamiento industrial. Calidad · Eficiencia · Seguridad
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#productos" style={{
              background: AMBER, color: '#fff', padding: '14px 32px',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16,
              textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'background 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#c77a00'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = AMBER; e.currentTarget.style.transform = 'translateY(0)' }}
            >Ver Productos <ChevronRight /></a>
            <a href="#contacto" style={{
              border: `2px solid rgba(255,255,255,0.5)`, color: '#fff', padding: '14px 32px',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16,
              textDecoration: 'none', letterSpacing: 1, textTransform: 'uppercase',
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}
            >Contactar</a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: 40, right: '2rem',
          display: 'flex', gap: 24,
        }}>
          {[
            { num: '+20', label: 'Años de experiencia' },
            { num: '100%', label: 'Empresa mexicana' },
            { num: '360°', label: 'Servicio integral' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 32, color: AMBER, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <div style={{ width: 40, height: 3, background: AMBER }} />
      <span style={{
        fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: AMBER,
      }}>{children}</span>
    </div>
  )
}

function SectionTitle({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
      fontSize: 'clamp(2rem, 4vw, 3rem)', color: light ? '#fff' : TEAL_DARK,
      lineHeight: 1.05, letterSpacing: -0.5, marginBottom: 24,
    }}>{children}</h2>
  )
}

function Nosotros() {
  return (
    <section id="nosotros" style={{ background: '#fff', padding: '96px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          <div>
            <SectionLabel>Quiénes Somos</SectionLabel>
            <SectionTitle>Servicios integrales para la industria</SectionTitle>
            <div style={{ height: 4, width: 60, background: AMBER, marginBottom: 28 }} />

            <div style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: AMBER, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                <Arrow />Misión
              </h3>
              <p style={{ lineHeight: 1.75, color: '#444', fontSize: 16 }}>
                Somos una empresa 100% mexicana enfocada a ofrecer servicios integrales de calidad a la industria, principalmente relacionados a torres de enfriamiento, abarcando asesoría, diagnóstico, inspección, ingeniería, selección y provisión de suministros e instalación de refacciones, montaje, mantenimiento y puesta en marcha; además de servicio a calderas, sistemas de aire acondicionado y obra civil.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: AMBER, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                <Arrow />Visión
              </h3>
              <p style={{ lineHeight: 1.75, color: '#444', fontSize: 16 }}>
                Ser la empresa líder y sustentable preferida en la industria por trabajar con seguridad, calidad y eficiencia enfocada al logro de los objetivos en cada proyecto.
              </p>
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 48 }}>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 28,
                color: TEAL_DARK, marginBottom: 28, textTransform: 'uppercase',
              }}>Nuestros Valores</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {['Calidad', 'Eficiencia', 'Seguridad', 'Honestidad', 'Responsabilidad', 'Respeto'].map((v, i) => (
                  <div key={v} style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #eee',
                    borderRight: i % 2 === 0 ? '1px solid #eee' : 'none',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{ color: AMBER, fontWeight: 700, fontSize: 18 }}>→</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 17, color: TEAL_DARK }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
              <img src={workersImg} alt="Trabajadores AERODUBA en campo" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, rgba(13,61,80,0.85) 0%, rgba(13,61,80,0.4) 100%)`, display: 'flex', alignItems: 'center', padding: '24px 28px' }}>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 36, color: AMBER, lineHeight: 1 }}>CALIDAD</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>EFICIENCIA · SEGURIDAD</div>
                  <div style={{ marginTop: 10, fontSize: 13, color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', lineHeight: 1.6, maxWidth: 260 }}>
                    "Plena satisfacción del cliente superando sus expectativas."
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function Hacemos() {
  const materiales = ['Fibra de vidrio', 'Madera tratada', 'Concreto', 'Acero galvanizado']
  const refacciones = [
    'Relleno', 'Eliminador de rocío', 'Espreas - Boquillas', 'Louvers', 'Ventiladores', 'Fibra de vidrio', 'Válvulas', 'Madera tratada', 'Opti-bar',
    'Opti-wave', 'Opti-grid', 'Malla', 'Tirilla', 'Mesabar', 'Motores', 'Reductores', 'Flechas', 'Chimeneas',
  ]

  return (
    <section id="hacemos" style={{ background: '#f4f5f6', padding: '96px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Qué Hacemos</SectionLabel>
        <SectionTitle>Soluciones completas en torres de enfriamiento</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>

          <div style={{ background: TEAL_DARK, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: AMBER }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 52, color: 'rgba(255,255,255,0.06)', position: 'absolute', top: 16, right: 16, lineHeight: 1 }}>01</div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Fabricación de Torres
            </h3>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Materiales</div>
            {materiales.map(m => (
              <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ width: 6, height: 6, background: AMBER, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>{m}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', padding: '36px 32px', position: 'relative', overflow: 'hidden', border: `1px solid #e8e8e8` }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: TEAL }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 52, color: 'rgba(0,0,0,0.04)', position: 'absolute', top: 16, right: 16, lineHeight: 1 }}>02</div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Reparación
            </h3>
            <div style={{ fontSize: 13, color: '#999', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Todas las marcas y modelos</div>
            <p style={{ color: '#555', lineHeight: 1.7, fontSize: 15 }}>
              Diagnóstico, inspección y reparación integral de equipos de todas las marcas y modelos. Nuestro equipo especializado garantiza la máxima eficiencia en cada intervención.
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Diagnóstico', 'Inspección', 'Ingeniería', 'Montaje', 'Mantenimiento'].map(t => (
                <span key={t} style={{
                  background: '#f0f7fa', color: TEAL, padding: '4px 12px',
                  fontSize: 12, fontWeight: 600, letterSpacing: 0.5,
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ background: AMBER, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: TEAL_DARK }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 52, color: 'rgba(0,0,0,0.08)', position: 'absolute', top: 16, right: 16, lineHeight: 1 }}>03</div>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Suministro de Refacciones
            </h3>
            <div style={{ columns: 2, columnGap: 12 }}>
              {refacciones.map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0', breakInside: 'avoid' }}>
                  <div style={{ width: 4, height: 4, background: '#fff', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const TABS = [
  { id: 'rellenos', label: 'Rellenos' },
  { id: 'eliminadores', label: 'Eliminadores de Rocío' },
  { id: 'boquillas', label: 'Boquillas' },
  { id: 'perfiles', label: 'Perfiles y Estructuras' },
  { id: 'mecanico', label: 'Equipo Mecánico' },
  { id: 'madera', label: 'Madera Tratada' },
]

function ProductCardWithImage({ img, imgAlt, title, description, features }: { img: string; imgAlt: string; title: string; description: string; features: string[] }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #e8e8e8', display: 'flex', flexDirection: 'column',
      transition: 'box-shadow 0.2s, transform 0.2s', overflow: 'hidden',
    }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 8px 32px rgba(26,95,122,0.12)'; el.style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
    >
      <div style={{ height: 160, overflow: 'hidden', background: '#111' }}>
        <img src={img} alt={imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <div style={{ height: 3, width: 36, background: AMBER }} />
        <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: TEAL_DARK, margin: 0 }}>{title}</h4>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.65, margin: 0 }}>{description}</p>
        {features.length > 0 && (
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {features.map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#555' }}>
                <span style={{ color: AMBER, flexShrink: 0, marginTop: 1 }}>→</span>{f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function ProductCard({ title, description, features }: { title: string; description: string; features: string[] }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #e8e8e8',
      padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12,
      transition: 'box-shadow 0.2s, transform 0.2s',
    }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 8px 32px rgba(26,95,122,0.12)'; el.style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
    >
      <div style={{ height: 3, width: 40, background: AMBER }} />
      <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: TEAL_DARK, margin: 0 }}>{title}</h4>
      <p style={{ fontSize: 14, color: '#666', lineHeight: 1.65, margin: 0 }}>{description}</p>
      {features.length > 0 && (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#555' }}>
              <span style={{ color: AMBER, flexShrink: 0, marginTop: 1 }}>→</span>
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Productos() {
  const [active, setActive] = useState('rellenos')
  const mechanicalImages: Record<string, { img: string; alt: string }> = {
    'Fan Stack': { img: torreImg, alt: 'Torre de enfriamiento con fan stack' },
    Ventilador: { img: ventiladorImg, alt: 'Ventilador industrial para torre de enfriamiento' },
    'Motor Eléctrico': { img: motorImg, alt: 'Motor eléctrico industrial' },
  }
  const nozzleImages: Record<string, string> = {
    NS001: ns001Img,
    NS002: ns002Img,
    NS003: ns003Img,
    NS004: ns004Img,
    NS005: ns005Img,
    NS006: ns006Img,
    NS007: ns007Img,
    NS008: ns008Img,
    NS009: ns009Img,
  }

  const content: Record<string, React.ReactNode> = {
    rellenos: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        <ProductCardWithImage img={of21maImg} imgAlt="Relleno OF21MA" title="OF21MA" description="Relleno de alto rendimiento para torres de contraflujo. Ideal para industrias de energía, refinación, química, acero y procesamiento de alimentos." features={['Alto rendimiento térmico', 'Bajo potencial de ensuciamiento', 'Borde sellado con puntos de adhesión dedicados', 'Tecnología patentada de bloques cuadrados']} />
        <ProductCardWithImage img={cf1900Img} imgAlt="Relleno CF1900" title="CF1900" description="Diseñado para torres de contraflujo erigidas en campo o tipo paquete. También utilizable en torres de flujo cruzado." features={['Borde sellado con mayor durabilidad', 'Ingeniería de microestructura', 'Alto rendimiento térmico', 'Reborde patentado']} />
        <ProductCardWithImage img={htp25Img} imgAlt="Relleno HTP25" title="HTP25" description="Relleno moldeado por inyección de alto rendimiento térmico. Ideal para aguas sucias. Material de copolímero de polipropileno resistente a UV." features={['Para flujo contraflujo y cruzado', 'Inmune a degradación química', 'Resistente a ácidos, álcalis y aceites', 'Resistente a ataque biológico']} />
        <ProductCardWithImage img={salpiqueoImg} imgAlt="Relleno tipo Salpiqueo" title="Salpiqueo" description="Interrumpe la corriente de agua para dividir gotas, aumentando la interfaz aire-agua y acelerando el enfriamiento." features={['Modular', 'Barra', 'Rejilla PVC/aluminio/polipropileno', 'Para aguas residuales y alto contenido de partículas']} />
        <ProductCardWithImage img={rejillaImg} imgAlt="Rejilla Opti-Grid" title="Opti-Grid" description="Relleno contra salpicaduras de alta resistencia estructural para flujo cruzado y contraflujo." features={['Soporta hasta 180°C continuo', 'Flujo cruzado y contraflujo', 'Diseño sin incrustaciones', 'Fuerza máxima']} />
        <ProductCardWithImage img={optiGridImg} imgAlt="Opti-Lath y Optibar" title="Opti-Lath / Optibar" description="Maximiza la interfaz aire/agua para mayor eficiencia de enfriamiento. Disponible en HDPE o PP." features={['Rendimiento superior sobre madera/PVC', 'Soporta hasta 185°C constante', 'Disponible en HDPE', 'Mejora el rendimiento del sistema']} />
      </div>
    ),
    eliminadores: (
      <div>
        <div style={{ background: '#fff', border: '1px solid #e8e8e8', padding: 32, marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 12 }}>Eliminadores de Rocío</h3>
          <p style={{ color: '#555', lineHeight: 1.75, fontSize: 15, marginBottom: 20 }}>
            Específicamente diseñados para la máxima eficiencia de eliminación de rocío en aplicaciones de torres de flujo cruzado y contraflujo, con opciones para minimizar caída de presión, pérdida de rocío y costos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {['Cuchilla', 'Celulares', 'Opti-Wave'].map(t => (
              <div key={t} style={{ background: '#f4f5f6', padding: '20px 16px', borderTop: `3px solid ${AMBER}` }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: TEAL_DARK }}>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Diseñado para el máximo rendimiento y resistencia a la corrosión', 'Disponible en PVC, polímero híbrido termo endurecible, construcción galvanizada o de acero inoxidable', 'Juegos completos disponibles', 'Ayuda a conservar el agua'].map(f => (
              <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: '#555' }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>→</span>{f}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#111' }}>
            <img src={eliminadoresImg} alt="Eliminadores de rocío" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(13,61,80,0.85)', padding: '10px 14px' }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>Eliminadores Cuchilla / Celulares</span>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', background: '#111' }}>
            <img src={mesabarImg} alt="Mesabar" style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: `rgba(232,148,10,0.9)`, padding: '10px 14px' }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>Mesabar — Alto Rendimiento</span>
            </div>
          </div>
        </div>
      </div>
    ),
    boquillas: (
      <div>
        <div style={{ background: '#fff', border: '1px solid #e8e8e8', padding: 32, marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 12 }}>Boquillas de Aspersión</h3>
          <p style={{ color: '#555', lineHeight: 1.75, fontSize: 15, marginBottom: 24 }}>
            Gran variedad de modelos fabricadas en PVC y polipropileno para torres de enfriamiento de contraflujo y flujo cruzado.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {['NS001', 'NS002', 'NS003', 'NS004', 'NS005', 'NS006', 'NS007', 'NS008', 'NS009'].map(n => (
              <div key={n} style={{
                background: '#f4f5f6', padding: '12px', textAlign: 'center',
                border: '1px solid #e0e0e0',
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, color: TEAL,
              }}>
                <img src={nozzleImages[n]} alt={`Boquilla de aspersión ${n}`} style={{ width: '100%', height: 120, objectFit: 'contain', display: 'block', marginBottom: 10 }} />
                {n}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e8e8e8', padding: 32 }}>
          <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: TEAL_DARK, marginBottom: 12 }}>Sistema de Distribución</h4>
          <p style={{ color: '#555', lineHeight: 1.75, fontSize: 15 }}>
            Boquillas de distribución del agua, distribuidores y sistema de distribución completo para torres de flujo cruzado y contraflujo.
          </p>
        </div>
      </div>
    ),
    perfiles: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#fff', border: '1px solid #e8e8e8', padding: 32 }}>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 16 }}>Perfiles de Fibra de Vidrio</h3>
          {['Ángulo', 'Solera', 'Canal "U"', 'Canal "C"', 'Viga "I"', 'Viga "H"', 'Barra Cuadrada', 'Barra Redonda', 'PTR Tubo Cuadrado', 'Tubo Redondo', 'Placa'].map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: '1px solid #f0f0f0', fontSize: 15, color: '#444' }}>
              <div style={{ width: 6, height: 6, background: AMBER, flexShrink: 0 }} />{p}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ background: '#fff', border: '1px solid #e8e8e8', padding: 32 }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 16 }}>Rejillas de Fibra de Vidrio</h3>
            {['Rejilla tipo Irving Pultruida', 'Rejilla Moldeada', 'Barandales', 'Escaleras'].map(r => (
              <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: '1px solid #f0f0f0', fontSize: 15, color: '#444' }}>
                <div style={{ width: 6, height: 6, background: AMBER, flexShrink: 0 }} />{r}
              </div>
            ))}
          </div>
          <div style={{ background: TEAL_DARK, overflow: 'hidden', flex: 1 }}>
            <div style={{ position: 'relative', height: 180, background: '#e8e4dc' }}>
              <img src={escalerasImg} alt="Escaleras y plataformas de acceso a torres de enfriamiento" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            </div>
            <div style={{ padding: 28 }}>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: AMBER, marginBottom: 12 }}>Zona de Inspección Interna</h4>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7 }}>
                Escaleras y plataformas de acceso completas para zona de inspección interna de torres de enfriamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    mecanico: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
        {[
          { title: 'Fan Stack', desc: 'Chimeneas para torres de enfriamiento de todas las capacidades, en fibra de vidrio y materiales de alta resistencia.' },
          { title: 'Reductor', desc: 'Reductores de velocidad para sistemas de accionamiento de ventiladores en torres de enfriamiento industriales.' },
          { title: 'Ventilador', desc: 'Ventiladores industriales de alto rendimiento para extracción de calor en torres de enfriamiento.' },
          { title: 'Motor Eléctrico', desc: 'Motores eléctricos industriales para el accionamiento de sistemas mecánicos en torres de enfriamiento.' },
          { title: 'Flecha', desc: 'Flechas de transmisión para sistemas de accionamiento mecánico.' },
          { title: 'Alineación y Balanceo', desc: 'Servicio especializado de alineación y balanceo dinámico de ventiladores y equipos rotativos.' },
        ].map(item => (
          mechanicalImages[item.title]
            ? <ProductCardWithImage key={item.title} img={mechanicalImages[item.title].img} imgAlt={mechanicalImages[item.title].alt} title={item.title} description={item.desc} features={[]} />
            : <ProductCard key={item.title} title={item.title} description={item.desc} features={[]} />
        ))}
      </div>
    ),
    madera: (
      <div>
        <div style={{ background: '#fff', border: '1px solid #e8e8e8', padding: 32, marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 16 }}>Madera Tratada</h3>
          <img src={maderaImg} alt="Madera tratada para torres de enfriamiento" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block', marginBottom: 24 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {['Amplia variedad de medidas para entregas rápidas en cualquier especificación requerida.', 'Madera estufada y tratada con CCA (Sales hidrosolubles) para torres de enfriamiento y otros usos estructurales.', 'Proceso de vacío-presión conforme a normas AWPA (American Wood Preservers Association).'].map(f => (
              <div key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#555', lineHeight: 1.6 }}>
                <span style={{ color: AMBER, flexShrink: 0, marginTop: 2 }}>→</span>{f}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {['Enrejados de madera', 'Madera estructural', 'Entregas rápidas'].map(t => (
              <div key={t} style={{ background: '#f4f5f6', padding: '16px', textAlign: 'center', borderTop: `3px solid ${AMBER}` }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 16, color: TEAL_DARK }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  }

  return (
    <section id="productos" style={{ background: '#fff', padding: '96px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Qué Ofrecemos</SectionLabel>
        <SectionTitle>Catálogo de Productos y Servicios</SectionTitle>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, borderBottom: `2px solid #e8e8e8`, marginBottom: 40 }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActive(tab.id)} style={{
              padding: '12px 20px', border: 'none', cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14,
              letterSpacing: 0.5, textTransform: 'uppercase',
              background: active === tab.id ? TEAL_DARK : 'transparent',
              color: active === tab.id ? '#fff' : '#666',
              borderBottom: active === tab.id ? `2px solid ${AMBER}` : '2px solid transparent',
              marginBottom: -2, transition: 'all 0.2s',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        {content[active]}
      </div>
    </section>
  )
}

function Servicios() {
  const items = [
    { icon: '⚙️', title: 'Asesoría Técnica', desc: 'Diagnóstico e ingeniería especializada para optimizar tus sistemas de enfriamiento.' },
    { icon: '🔧', title: 'Mantenimiento', desc: 'Servicios de mantenimiento preventivo y correctivo para todas las marcas.' },
    { icon: '🏗️', title: 'Instalación', desc: 'Montaje y puesta en marcha con personal certificado y equipo especializado.' },
    { icon: '🌡️', title: 'Calderas y A/A', desc: 'Servicio integral a calderas y sistemas de aire acondicionado industrial.' },
  ]

  return (
    <section style={{ background: TEAL_DARK, padding: '80px 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', border: `50px solid ${AMBER}`, opacity: 0.06 }} />
      <div style={{ position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', border: `40px solid rgba(255,255,255,0.04)` }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <SectionLabel>Servicios</SectionLabel>
        <SectionTitle light>Solución integral en cada proyecto</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.08)', marginTop: 40 }}>
          {items.map((item) => (
            <div key={item.title} style={{ background: TEAL_DARK, padding: '32px 28px', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1e6f8e')}
              onMouseLeave={e => (e.currentTarget.style.background = TEAL_DARK)}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 10 }}>{item.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', border: '1px solid #ddd',
    fontSize: 15, fontFamily: "'Barlow', sans-serif",
    outline: 'none', background: '#f9fafb',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contacto" style={{ background: '#f4f5f6', padding: '96px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel>Contacto</SectionLabel>
        <SectionTitle>Contáctenos</SectionTitle>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start', marginTop: 40 }}>

          <div>
            <div style={{ background: TEAL_DARK, padding: 36, marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 24, textTransform: 'uppercase' }}>AERO DUBA S.A. DE C.V.</h3>

              {[
                { label: 'Email', value: 'Romina.videla@aeroduba.com.mx' },
                { label: 'Contacto', value: 'Ing. Romina Ayelen Videla\nGerente de Ventas' },
              ].map(c => (
                <div key={c.label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: 11, color: AMBER, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>{c.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{c.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#ddd' }}>
              {['Calidad', 'Eficiencia', 'Seguridad', 'Medio Ambiente'].map(v => (
                <div key={v} style={{ background: AMBER, padding: '14px 8px', textAlign: 'center' }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.5 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', padding: 40, border: '1px solid #e8e8e8' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 24, color: TEAL_DARK, marginBottom: 8 }}>Mensaje enviado</h3>
                <p style={{ color: '#666', fontSize: 15 }}>Nos pondremos en contacto a la brevedad posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: TEAL_DARK, marginBottom: 8 }}>Solicitar Cotización</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Nombre</label>
                    <input required style={inputStyle} value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = TEAL)} onBlur={e => (e.target.style.borderColor = '#ddd')} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Empresa</label>
                    <input style={inputStyle} value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = TEAL)} onBlur={e => (e.target.style.borderColor = '#ddd')} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Correo electrónico</label>
                  <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = TEAL)} onBlur={e => (e.target.style.borderColor = '#ddd')} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Teléfono</label>
                  <input style={inputStyle} value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = TEAL)} onBlur={e => (e.target.style.borderColor = '#ddd')} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Mensaje</label>
                  <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = TEAL)} onBlur={e => (e.target.style.borderColor = '#ddd')} />
                </div>
                <button type="submit" style={{
                  background: AMBER, color: '#fff', border: 'none', padding: '14px 32px', cursor: 'pointer',
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16,
                  letterSpacing: 1, textTransform: 'uppercase', transition: 'background 0.2s',
                  alignSelf: 'flex-start',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#c77a00')}
                  onMouseLeave={e => (e.currentTarget.style.background = AMBER)}
                >Enviar Solicitud</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#080f14', padding: '40px 2rem 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <img src={logoImg} alt="AERODUBA" style={{ height: 56, width: 'auto', objectFit: 'contain', marginBottom: 8 }} />
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>Torres de Enfriamiento Industriales</div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, marginTop: 8 }}>Empresa 100% Mexicana</div>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: AMBER, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Navegación</div>
              {['Quiénes Somos', 'Qué Hacemos', 'Productos', 'Contacto'].map(l => (
                <div key={l} style={{ marginBottom: 8 }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >{l}</a>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: AMBER, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Contacto</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.8 }}>
                Romina.videla@aeroduba.com.mx
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>© 2024 AERO DUBA S.A. DE C.V. Todos los derechos reservados.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Calidad', 'Eficiencia', 'Seguridad', 'Medio Ambiente'].map(v => (
              <span key={v} style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: 1 }}>{v}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"],
          section > div > div[style*="grid-template-columns: 1fr 1.2fr"],
          section > div > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Nav />
      <Hero />
      <Nosotros />
      <Hacemos />
      <Productos />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  )
}
