import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const proyectos = [
  {
    nombre: 'Menú Digital Tre Fratelli',
    descripcion: 'App completa de menú digital para restaurante italiano con carrito de compras, checkout, datos de entrega, NIT para facturación y pagos con tarjeta o efectivo.',
    tecnologias: ['React', 'React Router', 'Vite', 'Vercel'],
    link: 'https://menu-trefratelli.vercel.app',
    github: 'https://github.com/diegolivad-cell/menu-trefratelli',
    emoji: '🍝',
    destacado: true,
  },
  {
  nombre: 'TELUS Work Hub',
  descripcion: 'Corporate task management system built for team collaboration. Features department filtering, priority levels, status tracking and team member assignment.',
  tecnologias: ['React', 'localStorage', 'Vite', 'Vercel'],
  link: 'https://telus-work-hub.vercel.app',
  github: 'https://github.com/diegolivad-cell/telus-work-hub',
  emoji: '💼',
  destacado: true,
  },
  {
  nombre: 'Inventario en Tiempo Real',
  descripcion: 'Sistema de control de stock para restaurantes con base de datos en tiempo real. Permite agregar productos, actualizar cantidades y recibir alertas de stock bajo.',
  tecnologias: ['React', 'Supabase', 'PostgreSQL', 'Vite', 'Vercel'],
  link: 'https://inventario-restaurante.vercel.app',
  github: 'https://github.com/diegolivad-cell/inventario-restaurante',
  emoji: '📦',
  destacado: true,
  },
  {
  nombre: 'NexTech - Tienda Tech',
  descripcion: 'E-commerce de tecnología estilo Click Guatemala con catálogo, carrito de compras, páginas de producto y diseño responsive.',
  tecnologias: ['React', 'React Router', 'Vite', 'Vercel'],
  link: 'https://tech-store-sb99.vercel.app/',
  github: 'https://github.com/diegolivad-cell/tech-store',
  emoji: '🛒',
  destacado: true,
},
{
  nombre: 'NexTech API',
  descripcion: 'API REST para e-commerce con FastAPI y Python. Incluye CRUD de productos, registro/login de usuarios y documentación interactiva automática.',
  tecnologias: ['Python', 'FastAPI', 'SQLite', 'SQLAlchemy', 'Render'],
  link: 'https://nextech-api-wwbd.onrender.com/docs',
  github: 'https://github.com/diegolivad-cell/nextech-api',
  emoji: '🐍',
  destacado: true,
},
{
  nombre: 'NexTech DB',
  descripcion: 'Sistema de gestión de inventario y ventas con Microsoft SQL Server. Incluye tablas relacionales, Views, Stored Procedures, Triggers e historial de stock automático.',
  tecnologias: ['MSSQL', 'SQL Server', 'T-SQL', 'SSMS'],
  link: 'https://github.com/diegolivad-cell/nextech-db',
  github: 'https://github.com/diegolivad-cell/nextech-db',
  emoji: '🗄️',
  destacado: true,
},
{
  nombre: 'NexTech Admin Dashboard',
  descripcion: 'Panel de administración empresarial construido con Angular. Incluye dashboard con estadísticas, gestión de productos con CRUD completo y gestión de clientes.',
  tecnologias: ['Angular', 'TypeScript', 'Angular Material', 'Vercel'],
  link: 'https://nextech-admin-theta.vercel.app/dashboard',
  github: 'https://github.com/diegolivad-cell/nextech-admin',
  emoji: '🔺',
  destacado: true,
},
{
  nombre: "EmpleadosCRUD",
  descripcion: "Sistema de gestión de empleados con ASP.NET Core MVC y SQL Server. Incluye CRUD completo, búsqueda por nombre/puesto y filtro por departamento.",
  tecnologias: ["C#", ".NET MVC", "MSSQL", "SQL Server"],
  github: "https://github.com/diegolivad-cell/EmpleadosCRUD",
  link: null,
  destacado: true,
  emoji: "👥"
},
]


const habilidades = [
  { nombre: 'React', nivel: 75, icono: '⚛️' },
  { nombre: 'JavaScript', nivel: 70, icono: '🟨' },
  { nombre: 'HTML & CSS', nivel: 80, icono: '🎨' },
  { nombre: 'Git & GitHub', nivel: 70, icono: '🐙' },
  { nombre: 'Vercel', nivel: 75, icono: '▲' },
  { nombre: 'Node.js', nivel: 70, icono: '🟢' },
  { nombre: 'Python', nivel: 70, icono: '🐍' },
  { nombre: 'FastAPI', nivel: 65, icono: '⚡' },
  { nombre: 'SQL / MSSQL', nivel: 70, icono: '🗄️' },
  { nombre: 'Angular', nivel: 70, icono: '🔺' },
];

function Navbar({ darkMode, toggleDark }) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const links = ['Sobre mí', 'Proyectos', 'Habilidades', 'Contacto']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuAbierto(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e8e8e8',
      padding: '0 40px', height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '20px', color: '#111', letterSpacing: '-0.5px' }}>
        Diego<span style={{ color: '#2563eb' }}>.</span>
      </span>

      {/* Desktop */}
      <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="nav-desktop">
        {links.map(link => (
          <button key={link} onClick={() => scrollTo(link.toLowerCase().replace(' ', '-'))}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', fontSize: '14px', fontFamily: 'inherit', letterSpacing: '0.3px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#2563eb'}
            onMouseLeave={e => e.target.style.color = '#555'}>
            {link}
          </button>
        ))}
        <button onClick={toggleDark} style={{
        background: darkMode ? '#1e293b' : '#f1f5f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '8px 14px',
        cursor: 'pointer',
        fontSize: '18px',
        marginRight: '8px'
}}>
  {darkMode ? '☀️' : '🌙'}
</button>
        <a href="mailto:diegoliva@live.com" style={{
          backgroundColor: '#2563eb', color: 'white', textDecoration: 'none',
          padding: '8px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: '500',
          transition: 'background 0.2s'
        }}>
          Contáctame
        </a>
      </div>

      {/* Hamburguesa móvil */}
      <button onClick={() => setMenuAbierto(!menuAbierto)} className="nav-hamburguesa"
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: '#111' }}>
        {menuAbierto ? '✕' : '☰'}
      </button>

      {/* Menú móvil */}
      {menuAbierto && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          backgroundColor: 'white', borderBottom: '1px solid #e8e8e8',
          padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: '15px'
        }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link.toLowerCase().replace(' ', '-'))}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333', fontSize: '16px', textAlign: 'left', fontFamily: 'inherit', padding: '5px 0' }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default function App() {
  const [formEnviado, setFormEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

    useEffect(() => {
    const roles = ['React', 'Angular', 'Python', 'FastAPI', 'SQL Server'];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    const el = document.getElementById('typed-text');

        const type = () => {
      if (!el) return;
      const current = roles[i % roles.length];
      el.textContent = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
      if (!isDeleting && j === current.length + 1) { isDeleting = true; setTimeout(type, 1200); return; }
      if (isDeleting && j === 0) { isDeleting = false; i++; }
      setTimeout(type, isDeleting ? 50 : 100);
    };
    type();
  }, []);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }, 100);

  return () => observer.disconnect();
}, []);

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, sans-serif", backgroundColor: darkMode ? '#0f172a' : '#fafafa', color: '#111', lineHeight: 1.6 }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap" rel="stylesheet" />

      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />

      {/* ── HERO ── */}
      <section style={{
  minHeight: '100vh', display: 'flex', alignItems: 'center',
  padding: '100px 40px 60px', maxWidth: '1100px', margin: '0 auto',
  gap: '60px', flexWrap: 'wrap'
}}>
  <div style={{ flex: 1, minWidth: '280px' }}>
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      background: '#eff6ff', border: '1px solid #bfdbfe',
      padding: '6px 14px', borderRadius: '99px', marginBottom: '24px'
    }}>
      <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
      <span style={{ color: '#2563eb', fontSize: '13px', fontWeight: '600' }}>Disponible para trabajar</span>
    </div>

    <p style={{ color: '#2563eb', fontSize: '14px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
      Desarrollador Full Stack
    </p>

    <h1 data-aos="fade-down" style={{
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'normal',
      lineHeight: 1.1, margin: '0 0 16px 0', color: '#0a0a0a',
      letterSpacing: '-1px'
    }}>
      Hola, soy<br />
      <span style={{ color: '#2563eb' }}>Diego Oliva</span>
    </h1>

    <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', fontSize: '1.3rem', fontWeight: '600', color: '#0a0a0a' }}>
      <span>Especializado en</span>
      <span style={{
        color: '#2563eb', borderBottom: '2px solid #2563eb',
        minWidth: '180px', display: 'inline-block'
      }} id="typed-text"></span>
    </div>

    <p data-aos="fade-up" data-aos-delay="400" style={{ color: '#666', fontSize: '17px', maxWidth: '480px', margin: '0 0 35px 0', lineHeight: 1.8 }}>
      Desarrollador Full Stack de Guatemala con pasión por crear aplicaciones web modernas. 
      Construyo productos digitales que resuelven problemas reales.
    </p>

    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
      <button
        data-aos="fade-up"
        data-aos-delay="600"
        onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}
        onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={e => e.target.style.transform = 'none'}
      >
        Ver mis proyectos →
      </button>
      <button
      data-aos="fade-up"
      data-aos-delay="800"
        onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ backgroundColor: 'transparent', color: '#0a0a0a', border: '1.5px solid #ddd', padding: '13px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }}
        onMouseEnter={e => e.target.style.borderColor = '#2563eb'}
        onMouseLeave={e => e.target.style.borderColor = '#ddd'}
      >
        Contactarme
      </button>
    </div>

    <div style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}>
      {[['5+', 'Proyectos'], ['3+', 'Tecnologías'], ['100%', 'Dedicación']].map(([num, label]) => (
        <div key={label}>
          <div style={{ fontSize: '24px', fontWeight: '800', color: '#0a0a0a' }}>{num}</div>
          <div style={{ fontSize: '13px', color: '#888' }}>{label}</div>
        </div>
      ))}
    </div>
  </div>
  <div style={{
  flex: '0 0 auto',
  width: '320px',
  height: '380px',
  borderRadius: '24px',
  overflow: 'hidden',
  border: '4px solid #e2e8f0',
  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
  position: 'relative'
}}>
  <img 
    src="/foto.jpeg" 
    alt="Diego Oliva"
    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
  />
  <div style={{
    position: 'absolute', bottom: '16px', left: '16px',
    background: 'white', borderRadius: '10px', padding: '8px 14px',
    display: 'flex', alignItems: 'center', gap: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }}>
    <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' }}></span>
    <span style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b' }}>Disponible</span>
  </div>
</div>
</section>

      {/* ── SOBRE MÍ ── */}
      <section id="sobre-mí" data-aos="fade-up" style={{ backgroundColor: 'white', padding: '80px 40px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#2563eb', fontSize: '13px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Sobre mí</p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem', fontWeight: 'normal', margin: '0 0 25px 0', color: '#0a0a0a' }}>
            Un poco sobre mí
          </h2>
          <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, margin: '0 0 20px 0' }}>
          Soy Diego Oliva, Desarrollador Full Stack de Guatemala con pasión por crear aplicaciones web modernas y funcionales. He construido proyectos reales trabajando con tecnologías frontend como React, Angular y TypeScript, y en el backend con Python (FastAPI), C# (.NET MVC) y Node.js. También manejo bases de datos relacionales como SQL Server, PostgreSQL y SQLite, así como servicios en la nube como Supabase y Vercel.
          </p>
          <p style={{ color: '#555', fontSize: '17px', lineHeight: 1.8, margin: 0 }}>
          Me apasiona aprender constantemente y convertir ideas en productos digitales que resuelvan problemas reales. Actualmente busco oportunidades para seguir creciendo como desarrollador.
          </p>

          <div style={{ display: 'flex', gap: '30px', marginTop: '35px', flexWrap: 'wrap' }}>
            {[['🇬🇹', 'Guatemala City'], ['💼', 'Disponible para trabajar'], ['🎯', 'Full Stack Developer']].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555', fontSize: '14px' }}>
                <span>{icon}</span> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" data-aos="fade-up" style={{ padding: '80px 40px', maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#2563eb', fontSize: '13px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Proyectos</p>
        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem', fontWeight: 'normal', margin: '0 0 40px 0', color: '#0a0a0a' }}>
          Lo que he construido
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
          {proyectos.map(p => (
            <div key={p.nombre} data-aos="fade-up" style={{
              backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid #ebebeb', transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'default'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>

              {/* Preview */}
              <div style={{ backgroundColor: '#0f0a05', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px', position: 'relative' }}>
                {p.emoji}
                {p.destacado && (
                  <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#2563eb', color: 'white', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: '500' }}>
                    ⭐ Destacado
                  </div>
                )}
              </div>

              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#0a0a0a', fontWeight: '600' }}>{p.nombre}</h3>
                <p style={{ color: '#777', fontSize: '13px', margin: '0 0 15px 0', lineHeight: 1.6 }}>{p.descripcion}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {(p.tecnologias || []).map(t => (
                    <span key={t} style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '12px', padding: '3px 10px', borderRadius: '20px', fontWeight: '500' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={p.link} target="_blank" rel="noreferrer" style={{ flex: 1, backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', padding: '9px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', textAlign: 'center' }}>
                    Ver proyecto →
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ flex: 1, backgroundColor: '#f5f5f5', color: '#333', textDecoration: 'none', padding: '9px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', textAlign: 'center' }}>
                    GitHub 🐙
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Tarjeta "Próximamente" */}
          <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '2px dashed #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center', minHeight: '300px' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🚀</div>
            <h3 style={{ color: '#aaa', fontSize: '16px', fontWeight: '500', margin: '0 0 8px 0' }}>Próximo proyecto</h3>
            <p style={{ color: '#ccc', fontSize: '13px', margin: 0 }}>En construcción...</p>
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ── */}
      <section id="habilidades" data-aos="fade-up" style={{ backgroundColor: 'white', padding: '80px 40px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#2563eb', fontSize: '13px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Habilidades</p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem', fontWeight: 'normal', margin: '0 0 40px 0', color: '#0a0a0a' }}>
            Tecnologías que manejo
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {habilidades.map(h => (
              <div key={h.nombre}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>{h.icono} {h.nombre}</span>
                  <span style={{ fontSize: '13px', color: '#999' }}>{h.nivel}%</span>
                </div>
                <div style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', height: '8px', overflow: 'hidden' }}>
                  <div style={{
                    backgroundColor: '#2563eb', height: '100%', borderRadius: '10px',
                    width: `${h.nivel}%`, transition: 'width 1s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" data-aos="fade-up" style={{ padding: '80px 40px', maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ color: '#2563eb', fontSize: '13px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Contacto</p>
        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.2rem', fontWeight: 'normal', margin: '0 0 10px 0', color: '#0a0a0a' }}>
          ¡Hablemos!
        </h2>
        <p style={{ color: '#777', margin: '0 0 35px 0' }}>¿Tienes un proyecto en mente o quieres contactarme? Escríbeme.</p>

        {formEnviado ? (
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #ebebeb' }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>🎉</div>
            <h3 style={{ color: '#2563eb', margin: '0 0 10px 0' }}>¡Mensaje enviado!</h3>
            <p style={{ color: '#777', margin: 0 }}>Te responderé pronto a <strong>{form.email}</strong></p>
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #ebebeb', padding: '35px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {[['nombre', 'Tu nombre', 'text'], ['email', 'tu@email.com', 'email']].map(([key, placeholder, type]) => (
              <div key={key}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px', textTransform: 'capitalize' }}>{key}</label>
                <input type={type} placeholder={placeholder} value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = '#2563eb'}
                  onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#444', display: 'block', marginBottom: '6px' }}>Mensaje</label>
              <textarea placeholder="Cuéntame sobre tu proyecto..." value={form.mensaje}
                onChange={e => setForm({ ...form, mensaje: e.target.value })}
                style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #e0e0e0', fontSize: '14px', fontFamily: 'inherit', outline: 'none', resize: 'vertical', height: '120px', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
            </div>
            <button onClick={() => { if (form.nombre && form.email && form.mensaje) setFormEnviado(true) }}
              style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '13px', borderRadius: '10px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.target.style.transform = 'none'}>
              Enviar mensaje ✉️
            </button>
          </div>
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#0a0a0a', color: '#666', textAlign: 'center', padding: '30px', fontSize: '13px' }}>
        <p style={{ margin: '0 0 8px 0', color: '#fff', fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '18px' }}>
          Diego<span style={{ color: '#2563eb' }}>.</span>
        </p>
        <p style={{ margin: 0 }}>© 2025 Diego Oliva · Desarrollado con React ⚛️</p>
      </footer>
    </div>
  )
}
