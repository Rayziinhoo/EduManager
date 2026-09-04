import Image from "next/image";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F0F8FF',
    color: '#0A192F',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'rgba(240, 248, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(176, 224, 230, 0.5)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#0A192F',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#89CFF0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#0A192F',
    letterSpacing: '-0.5px',
  },
  logoAccent: {
    color: '#4682B4',
  },
  loginBtn: {
    padding: '10px 24px',
    backgroundColor: '#0A192F',
    color: '#FFFFFF',
    fontWeight: '600',
    borderRadius: '9999px',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  hero: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 24px 80px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '48px',
    alignItems: 'center',
  },
  heroColumn: {
    flex: '1 1 450px',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 16px',
    backgroundColor: 'rgba(176, 224, 230, 0.4)',
    color: '#0A192F',
    fontWeight: '600',
    fontSize: '0.85rem',
    borderRadius: '9999px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.75rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#0A192F',
  },
  description: {
    fontSize: '1.1rem',
    color: '#334155',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  primaryBtn: {
    padding: '14px 28px',
    backgroundColor: '#89CFF0',
    color: '#0A192F',
    fontWeight: '700',
    borderRadius: '12px',
    textDecoration: 'none',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  secondaryBtn: {
    padding: '14px 28px',
    border: '2px solid #0A192F',
    color: '#0A192F',
    fontWeight: '700',
    borderRadius: '12px',
    textDecoration: 'none',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    borderRadius: '24px',
    border: '1px solid rgba(176, 224, 230, 0.4)',
    boxShadow: '0 20px 25px -5px rgba(10, 25, 47, 0.08)',
    position: 'relative',
  },
  cardBadge: {
    position: 'absolute',
    top: '-12px',
    right: '24px',
    backgroundColor: '#89CFF0',
    color: '#0A192F',
    fontSize: '0.75rem',
    fontWeight: '800',
    padding: '4px 12px',
    borderRadius: '9999px',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#0A192F',
  },
  cardRow: {
    padding: '14px',
    backgroundColor: '#F0F8FF',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '0.9rem',
  },
  statusRow: {
    padding: '14px',
    backgroundColor: '#E6F4EA',
    color: '#137333',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: '0.9rem',
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: '80px 24px',
    borderTop: '1px solid rgba(176, 224, 230, 0.3)',
  },
  sectionContent: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 56px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#0A192F',
    marginBottom: '16px',
  },
  sectionSubtitle: {
    color: '#475569',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  gridTwo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
  },
  gridCard: {
    flex: '1 1 300px',
    padding: '32px',
    backgroundColor: '#F0F8FF',
    borderRadius: '20px',
    border: '1px solid rgba(176, 224, 230, 0.5)',
  },
  numberBox: {
    width: '48px',
    height: '48px',
    backgroundColor: '#0A192F',
    color: '#89CFF0',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  cardHeader: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#0A192F',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '0.925rem',
    color: '#334155',
    lineHeight: '1.6',
  },
  darkSection: {
    backgroundColor: '#0A192F',
    color: '#FFFFFF',
    padding: '64px 24px',
    textAlign: 'center',
  },
  darkTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#89CFF0',
    marginBottom: '16px',
  },
  darkText: {
    color: '#CBD5E1',
    maxWidth: '650px',
    margin: '0 auto',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  footer: {
    backgroundColor: '#071120',
    color: '#94A3B8',
    padding: '32px 24px',
    borderTop: '1px solid #1E293B',
    fontSize: '0.8rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  },
};

export default function Home() {
  return (
  <div className="min-h-screen bg-[#F0F8FF] text-[#0A192F] font-sans antialiased selection:bg-[#B0E0E6]">
  {/* HEADER / NAVBAR */}
  <header className="sticky top-0 z-50 bg-[#F0F8FF]/90 backdrop-blur-md border-b border-[#B0E0E6]/40">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
      {/* Logo: Lápis e Caderno em SVG */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#0A192F] rounded-xl flex items-center justify-center text-[#89CFF0] shadow-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6"
          >
            {/* Caderno */}
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            {/* Lápis */}
            <path d="m9 9 5 5" />
            <path d="m15 7 2 2" />
            <path d="M9 14 4 19" />
          </svg>
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#0A192F]">
          Edu<span className="text-[#4682B4]">Manager</span>
        </span>
      </div>

      {/* Botão de Login */}
      <a
        href="/login"
        className="px-6 py-2.5 bg-[#0A192F] hover:bg-[#1E3A8A] text-white font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
      >
        Entrar
      </a>
    </div>
  </header>

  {/* HERO SECTION */}
  <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <span className="inline-block px-4 py-1.5 bg-[#B0E0E6]/40 text-[#0A192F] font-semibold text-sm rounded-full">
        Tecnologia com propósito social
      </span>
      <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A192F] leading-tight">
        Mais tempo para ensinar, menos burocracia na sala de aula.
      </h1>
      <p className="text-lg text-[#334155] leading-relaxed">
        O EduManager foi feito para simplificar a gestão escolar em instituições que buscam eficiência sem complicação. Menos tempo encarando telas, mais interações humanas.
      </p>
      <div className="pt-2 flex flex-col sm:flex-row gap-4">
        <a
          href="#historia"
          className="px-8 py-3.5 bg-[#89CFF0] hover:bg-[#7AB8D6] text-[#0A192F] font-semibold rounded-xl text-center transition-all shadow-sm"
        >
          Conheça nossa proposta
        </a>
        <a
          href="/login"
          className="px-8 py-3.5 border-2 border-[#0A192F] text-[#0A192F] font-semibold rounded-xl text-center hover:bg-[#0A192F] hover:text-white transition-all"
        >
          Acessar Sistema
        </a>
      </div>
    </div>

    {/* Card Ilustrativo de Funcionalidade */}
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#B0E0E6]/30 relative">
      <div className="absolute -top-3 -right-3 bg-[#89CFF0] text-[#0A192F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Simplicidade
      </div>
      <h3 className="text-xl font-bold text-[#0A192F] mb-4">Lançamento Rápido de Notas</h3>
      <div className="space-y-3 font-mono text-sm">
        <div className="p-3 bg-[#F0F8FF] rounded-lg flex justify-between items-center">
          <span>Turma: 8º Ano A</span>
          <span className="text-xs bg-[#0A192F] text-white px-2 py-0.5 rounded">Ativa</span>
        </div>
        <div className="p-3 bg-[#F0F8FF] rounded-lg flex justify-between items-center">
          <span>Aluno: Lucas Silva</span>
          <span className="font-bold text-[#0A192F]">Média: 8.5</span>
        </div>
        <div className="p-3 bg-[#E6F4EA] text-[#137333] rounded-lg flex justify-between items-center font-bold">
          <span>Status Final</span>
          <span>APROVADO</span>
        </div>
      </div>
    </div>
  </section>

  {/* NOSSA HISTÓRIA E PROPÓSITO */}
  <section id="historia" className="bg-white py-20 border-t border-[#B0E0E6]/30">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Nossa História &amp; Propósito</h2>
        <p className="text-base text-[#475569] leading-relaxed">
          O EduManager nasceu da certeza de que qualquer empenho faz a diferença na educação. Acreditamos no uso consciente da tecnologia para unir pessoas, reduzindo o tempo nas telas e priorizando a convivência em sala.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-[#F0F8FF] rounded-2xl border border-[#B0E0E6]/40">
          <div className="w-12 h-12 bg-[#0A192F] text-[#89CFF0] rounded-xl flex items-center justify-center font-bold text-xl mb-6">
            01
          </div>
          <h3 className="text-xl font-bold text-[#0A192F] mb-3">Agilidade para o Professor</h3>
          <p className="text-sm text-[#334155] leading-relaxed">
            Desenvolvido para que os professores lancem notas apenas de seus alunos matriculados de forma rápida. O sistema calcula a soma, a média e indica a aprovação ou reprovação instantaneamente.
          </p>
        </div>

        <div className="p-8 bg-[#F0F8FF] rounded-2xl border border-[#B0E0E6]/40">
          <div className="w-12 h-12 bg-[#0A192F] text-[#89CFF0] rounded-xl flex items-center justify-center font-bold text-xl mb-6">
            02
          </div>
          <h3 className="text-xl font-bold text-[#0A192F] mb-3">Boletins Sem Atraso</h3>
          <p className="text-sm text-[#334155] leading-relaxed">
            Eliminamos a espera demorada pela emissão de notas. O professor consegue imprimir os boletins com alta frequência e entregar retornos ágeis aos alunos e familiares.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* FUTURO / VISÃO */}
  <section className="bg-[#0A192F] text-white py-16">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
      <h2 className="text-2xl font-bold text-[#89CFF0]">O que vem por aí</h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
        Estamos começando com uma ferramenta simples e objetiva para registro de notas. No futuro, os alunos poderão visualizar seus boletins diretamente na palma da mão, em qualquer lugar.
      </p>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-[#071120] text-gray-400 py-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
      <p>© {new Date().getFullYear()} EduManager. Todos os direitos reservados.</p>
      <p className="text-gray-500">Inclusão digital simples para quem faz a diferença.</p>
    </div>
  </footer>
</div>
  );
}
