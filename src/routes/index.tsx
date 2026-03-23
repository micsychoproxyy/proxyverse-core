import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 grid-bg pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-[#00ff9f]/30 bg-black/80 backdrop-blur-sm">
        <span className="text-[#00ff9f] font-black text-xl tracking-widest neon-text">
          PROXYVERSE
        </span>
        <span className="text-[#00ff9f] text-sm tracking-widest flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
          STATUS: ONLINE
        </span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#00ff9f] text-sm tracking-[0.4em] uppercase mb-6 opacity-80">
            Sistem Kecerdasan Terdistribusi
          </p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 neon-text-hero leading-none">
            PROXYVERSE
          </h1>
          <p className="text-[#00ff9f]/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Jaringan proxy generasi berikutnya dengan kecerdasan buatan, analitik pasar real-time, dan otomatisasi penuh untuk masa depan digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="cyber-btn px-10 py-4 text-sm tracking-widest font-bold"
            >
              MASUK SISTEM
            </a>
            <a
              href="#features"
              className="cyber-btn-outline px-10 py-4 text-sm tracking-widest font-bold"
            >
              PELAJARI LEBIH
            </a>
          </div>
        </div>
        {/* Decorative corner elements */}
        <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-[#00ff9f]/40" />
        <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-[#00ff9f]/40" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#00ff9f]/40" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#00ff9f]/40" />
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-24 px-4 border-t border-[#00ff9f]/20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>// TENTANG KAMI</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Apa Itu <span className="text-[#00ff9f]">ProxyVerse</span>?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            ProxyVerse adalah ekosistem proxy cerdas yang menggabungkan kekuatan kecerdasan buatan dengan infrastruktur jaringan terdistribusi. Kami menyediakan solusi proxy premium yang aman, cepat, dan dapat diandalkan untuk kebutuhan bisnis dan individu.
          </p>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            Dengan teknologi AI mutakhir, ProxyVerse mampu menganalisis pola lalu lintas, mendeteksi ancaman secara real-time, dan mengoptimalkan rute koneksi secara otomatis — memberikan pengalaman browsing yang tak tertandingi.
          </p>
        </div>
      </section>

      {/* Core System */}
      <section id="core" className="relative z-10 py-24 px-4 border-t border-[#00ff9f]/20">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>// SISTEM INTI</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight">
            Komponen <span className="text-[#00ff9f]">Sistem</span>
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
            Empat pilar utama yang menggerakkan infrastruktur ProxyVerse
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CoreCard
              icon="⬡"
              title="AI CORE"
              description="Inti kecerdasan buatan yang memproses jutaan permintaan per detik, belajar dari pola trafik dan mengoptimalkan performa secara mandiri."
            />
            <CoreCard
              icon="◈"
              title="MARKET INTELLIGENCE"
              description="Sistem analitik pasar real-time yang memantau tren, harga kompetitor, dan peluang bisnis secara otomatis 24/7."
            />
            <CoreCard
              icon="⚙"
              title="AUTOMATION ENGINE"
              description="Mesin otomatisasi canggih yang mengelola rotasi proxy, bypass deteksi, dan manajemen sesi tanpa intervensi manual."
            />
            <CoreCard
              icon="◉"
              title="COMMAND CENTER"
              description="Pusat komando terpusat dengan dashboard real-time, kontrol penuh atas seluruh jaringan, dan laporan analitik mendalam."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-24 px-4 border-t border-[#00ff9f]/20">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>// FITUR UNGGULAN</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight">
            Keunggulan <span className="text-[#00ff9f]">ProxyVerse</span>
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
            Teknologi terdepan yang membedakan kami dari solusi proxy konvensional
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              number="01"
              title="Kecepatan Ultra-Tinggi"
              description="Infrastruktur jaringan kami yang tersebar di 150+ lokasi global memastikan latensi minimal dan throughput maksimal. Nikmati koneksi dengan kecepatan hingga 10 Gbps tanpa throttling."
            />
            <FeatureCard
              number="02"
              title="Anonimitas Tingkat Militer"
              description="Enkripsi end-to-end dengan protokol terbaru, rotasi IP otomatis, dan kebijakan zero-log yang ketat memastikan identitas Anda selalu terlindungi."
            />
            <FeatureCard
              number="03"
              title="AI-Powered Bypass"
              description="Sistem AI kami secara proaktif mengidentifikasi dan melewati sistem deteksi anti-bot terbaru, memastikan akses tanpa hambatan ke semua platform."
            />
            <FeatureCard
              number="04"
              title="Skalabilitas Tanpa Batas"
              description="Dari 1 hingga 1 juta koneksi simultan, infrastruktur ProxyVerse tumbuh bersama kebutuhan bisnis Anda tanpa degradasi performa."
            />
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 py-24 px-4 border-t border-[#00ff9f]/20">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>// PETA JALAN</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight">
            Roadmap <span className="text-[#00ff9f]">Pengembangan</span>
          </h2>
          <p className="text-white/50 text-center mb-16 max-w-xl mx-auto">
            Perjalanan transformasi digital ProxyVerse menuju masa depan
          </p>
          <div className="space-y-0">
            <RoadmapItem
              phase="FASE 01"
              title="Fondasi Infrastruktur"
              status="SELESAI"
              statusColor="text-[#00ff9f]"
              description="Pembangunan infrastruktur inti, pengembangan API dasar, dan peluncuran layanan proxy premium pertama dengan 50 node global."
            />
            <RoadmapItem
              phase="FASE 02"
              title="Integrasi AI & Otomatisasi"
              status="AKTIF"
              statusColor="text-yellow-400"
              description="Implementasi mesin kecerdasan buatan untuk bypass otomatis, analitik trafik real-time, dan sistem manajemen sesi cerdas."
            />
            <RoadmapItem
              phase="FASE 03"
              title="Ekspansi Pasar Global"
              status="Q3 2025"
              statusColor="text-white/40"
              description="Perluasan jaringan ke 500+ node di 80 negara, peluncuran program partner reseller global, dan integrasi marketplace proxy."
            />
            <RoadmapItem
              phase="FASE 04"
              title="Ekosistem Terdistribusi"
              status="Q1 2026"
              statusColor="text-white/40"
              description="Peluncuran platform peer-to-peer terdesentralisasi, token utilitas ProxyVerse, dan program staking untuk penyedia bandwidth."
            />
            <RoadmapItem
              phase="FASE 05"
              title="Dominasi Total"
              status="2026+"
              statusColor="text-white/40"
              description="Integrasi dengan Web3, metaverse, dan infrastruktur AI generasi berikutnya. Menjadi standar industri untuk solusi proxy enterprise global."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="relative z-10 py-24 px-4 border-t border-[#00ff9f]/20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>// VISI KAMI</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            Masa Depan <span className="text-[#00ff9f]">Internet</span> Ada di Sini
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Kami percaya bahwa akses internet yang bebas, aman, dan tanpa batas adalah hak fundamental setiap individu dan bisnis. ProxyVerse hadir untuk mewujudkan visi tersebut melalui teknologi yang inovatif dan infrastruktur yang andal.
          </p>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            Dengan membangun ekosistem proxy terbesar dan paling cerdas di dunia, kami berkomitmen untuk terus mendorong batas teknologi — menciptakan dunia di mana jarak bukan penghalang, sensor tidak ada, dan privasi adalah standar, bukan privilese.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-[#00ff9f] neon-text">150+</div>
              <div className="text-white/50 text-sm mt-1 tracking-wider">LOKASI GLOBAL</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#00ff9f] neon-text">99.9%</div>
              <div className="text-white/50 text-sm mt-1 tracking-wider">UPTIME</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#00ff9f] neon-text">10M+</div>
              <div className="text-white/50 text-sm mt-1 tracking-wider">PENGGUNA AKTIF</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative z-10 py-24 px-4 border-t border-[#00ff9f]/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>// BERGABUNG SEKARANG</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight neon-text-hero">
            SIAP MASUK<br />KE SISTEM?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Bergabunglah dengan jutaan pengguna yang telah mempercayakan kebutuhan proxy mereka kepada ProxyVerse. Mulai gratis, tanpa kartu kredit.
          </p>
          <a href="#" className="cyber-btn px-14 py-5 text-base tracking-widest font-black">
            AKSES SEKARANG
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#00ff9f]/20 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#00ff9f] font-black text-lg tracking-widest neon-text">
            PROXYVERSE
          </div>
          <div className="text-white/30 text-sm tracking-wider">
            &copy; 2026 ProxyVerse. Hak Cipta Dilindungi.
          </div>
          <div className="flex gap-6 text-white/40 text-sm tracking-wider">
            <a href="#" className="hover:text-[#00ff9f] transition-colors">Privasi</a>
            <a href="#" className="hover:text-[#00ff9f] transition-colors">Syarat</a>
            <a href="#" className="hover:text-[#00ff9f] transition-colors">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#00ff9f]/60 text-xs tracking-[0.4em] uppercase mb-4 text-center font-mono">
      {children}
    </p>
  )
}

function CoreCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="cyber-card p-6 flex flex-col gap-4">
      <div className="text-[#00ff9f] text-3xl">{icon}</div>
      <h3 className="text-[#00ff9f] font-black text-sm tracking-widest">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function FeatureCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="cyber-card p-8 flex gap-6">
      <div className="text-[#00ff9f]/20 font-black text-5xl leading-none select-none">{number}</div>
      <div>
        <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
        <p className="text-white/50 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function RoadmapItem({
  phase,
  title,
  status,
  statusColor,
  description,
  isLast,
}: {
  phase: string
  title: string
  status: string
  statusColor: string
  description: string
  isLast?: boolean
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-[#00ff9f] bg-black mt-1 flex-shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-[#00ff9f]/20 mt-1" />}
      </div>
      <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[#00ff9f]/50 text-xs tracking-widest font-mono">{phase}</span>
          <span className={`text-xs tracking-widest font-bold ${statusColor}`}>{status}</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-white/50 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  )
}
