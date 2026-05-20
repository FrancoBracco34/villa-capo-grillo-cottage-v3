'use client';

import { motion } from 'framer-motion';
import {
  AirVent,
  Camera,
  Car,
  Coffee,
  Compass,
  Home,
  Mail,
  MapPin,
  Mountain,
  ParkingCircle,
  Phone,
  ShipWheel,
  Sparkles,
  Sun,
  Trees,
  Utensils,
  Waves,
  Wifi
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 }
};

const features = [
  ['Terrazza panoramica', Sun],
  ['Aria condizionata', AirVent],
  ['Wi‑Fi disponibile', Wifi],
  ['Parcheggio privato', ParkingCircle],
  ['Cucina attrezzata', Utensils],
  ['Area relax esterna', Trees],
  ['Ideale per famiglie', Home],
  ['Vicino a Capo Grillo', Compass]
];

const villaDetails = [
  'Villa di circa 100 m²',
  '3 camere da letto',
  'Soggiorno luminoso',
  'Cucina attrezzata',
  'Zona pranzo',
  'Macchina da caffè',
  'Frigorifero',
  'TV a schermo piatto',
  'Bagno',
  'Patio e terrazza',
  'Arredi da esterno',
  'Parcheggio gratuito'
];

const experiences = [
  ['Trekking al Gran Cratere', Mountain],
  ['Escursioni in barca', ShipWheel],
  ['Tramonti a Capo Grillo', Sun],
  ['Spiagge e mare cristallino', Waves],
  ['Ristoranti tipici', Utensils],
  ['Fanghi termali', Sparkles],
  ['Snorkeling', Waves],
  ['Fotografia e natura', Camera]
];

const galleryImages = [
  '/images/veranda.jpg',
  '/images/capo-grillo.jpg',
  '/images/living-room.jpg',
  '/images/bedroom1.jpg',
  '/images/kitchen.jpg',
  '/images/vulcano-cratere.jpg',
  '/images/spiaggia-asino.jpg',
  '/images/sabbie-nere2.jpg',
  '/images/valle-dei-mostri.jpg'
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-terracotta">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight text-volcanic md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-base leading-7 text-volcanic/70">{text}</p>}
    </motion.div>
  );
}

export default function Page() {
  return (
    <main className="overflow-hidden bg-cream text-volcanic">
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-2">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2 shadow-soft">
          <a href="#home" className="font-serif text-xl font-semibold">Villa Capo Grillo</a>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#villa">La villa</a>
            <a href="#experience">Vulcano</a>
            <a href="#gallery">Galleria</a>
            <a href="#contact">Contatti</a>
          </div>
          <a href="#contact" className="rounded-full bg-ocean px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-ocean/20">Richiedi disponibilità</a>
        </div>
      </nav>

      <section id="home" className="relative min-h-[86vh]">
        <div className="absolute inset-0 bg-[url('/images/capo-grillo4.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-volcanic/70" />
        <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-6 pt-20 text-white">
          <motion.div initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sand">Vulcano · Isole Eolie</p>
            <h1 className="font-serif text-5xl leading-none md:text-7xl">Villa Capo Grillo Cottage</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">Una casa vacanze panoramica nel cuore dell’isola di Vulcano, dove natura, mare e tramonti si incontrano.</p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-white px-7 py-3 text-center font-semibold text-volcanic shadow-soft">Richiedi disponibilità</a>
              <a href="#villa" className="rounded-full border border-white/50 px-7 py-3 text-center font-semibold text-white backdrop-blur">Scopri la villa</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="glass mt-9 grid max-w-4xl grid-cols-2 gap-3 rounded-3xl p-4 text-volcanic md:grid-cols-5">
            {['3 camere', 'Terrazza', 'Parcheggio', 'Wi‑Fi', 'A/C'].map((item) => <div key={item} className="rounded-2xl bg-white/55 px-4 py-2 text-center font-semibold">{item}</div>)}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-terracotta">Il rifugio</p>
            <h2 className="font-serif text-2xl leading-tight md:text-4xl">Privacy, panorama e atmosfera mediterranea.</h2>
            <p className="mt-4 text-base leading-7 text-volcanic/70">Villa Capo Grillo Cottage è una casa vacanze indipendente a Vulcano, pensata per chi cerca relax, natura e spazi autentici. Gli ambienti climatizzati, la terrazza e gli esterni rendono ogni giornata semplice e piacevole, dal caffè del mattino al tramonto.</p>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[4/4] rounded-[2rem] bg-[url('/images/veranda2.jpg')] bg-cover bg-center shadow-soft" />
            <div className="absolute -bottom-5 -left-5 hidden rounded-3xl bg-white p-4 shadow-soft md:block">
              <p className="font-serif text-2xl text-ocean">100 m²</p>
              <p className="text-sm text-volcanic/60">di comfort e spazi esterni</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20">
        <SectionTitle eyebrow="Comfort" title="Tutto il necessario per vivere Vulcano con leggerezza" />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([label, Icon]) => (
            <motion.div key={label as string} {...fadeUp} className="rounded-3xl border border-sand/50 bg-cream p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Icon className="mb-3 h-7 w-7 text-ocean" />
              <h3 className="font-semibold">{label as string}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="villa" className="px-6 py-14 md:py-20">
        <SectionTitle eyebrow="La villa" title="Spazi accoglienti, pensati per famiglie e gruppi" text="Una casa completa, comoda e funzionale per godersi l’isola con indipendenza." />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {villaDetails.map((item) => (
            <motion.div key={item} {...fadeUp} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sand/60 text-ocean">✓</div>
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-volcanic px-6 py-14 text-white md:py-20">
        <SectionTitle eyebrow="Esperienze" title="Vivi il ritmo autentico delle Eolie" text="Tra crateri, mare, tramonti e sapori locali, Vulcano è un’isola da esplorare lentamente." />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map(([label, Icon]) => (
            <motion.div key={label as string} {...fadeUp} className="rounded-3xl border border-white/10 bg-white/7 p-6 backdrop-blur transition hover:bg-white/12">
              <Icon className="mb-3 h-7 w-7 text-sand" />
              <h3 className="font-semibold">{label as string}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-[2rem] bg-ocean p-7 text-white shadow-soft">
            <MapPin className="mb-6 h-8 w-8 text-sand" />
            <h2 className="font-serif text-2xl">Posizione tranquilla vicino a Capo Grillo</h2>
            <p className="mt-4 leading-7 text-white/78">La villa si trova in una zona pacifica dell’isola di Vulcano, comoda per raggiungere punti panoramici, spiagge, percorsi naturalistici e servizi locali. Per muoversi con libertà è consigliato il noleggio di auto o scooter.</p>
          </motion.div>
          <motion.div {...fadeUp} className="min-h-[280px] rounded-[2rem] bg-[linear-gradient(135deg,#e8d8bd,#f7efe1)] p-5 shadow-soft">
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-volcanic/10 bg-white/50 text-center">
              <div>
                <MapPin className="mx-auto mb-4 h-8 w-8 text-terracotta" />
                <p className="font-serif text-2xl">Vulcano, Isole Eolie</p>
                <p className="mt-2 text-volcanic/60">Sezione mappa pronta per integrazione Google Maps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-6 py-14 md:py-20">
        <SectionTitle eyebrow="Galleria" title="Atmosfere mediterranee e dettagli di viaggio" />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.div key={src} {...fadeUp} className={`rounded-[2rem] bg-cover bg-center shadow-soft ${index === 0 || index === 3 ? 'md:row-span-2 min-h-[390px]' : 'min-h-[200px]'}`} style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <SectionTitle eyebrow="Info utili" title="Tutto chiaro prima dell’arrivo" />
        <div className="mx-auto grid max-w-4xl gap-3">
          {[
            ['Check-in', 'Dalle 12:30 / 13:00'],
            ['Check-out', 'Entro le 10:00'],
            ['Regole', 'Struttura non fumatori, animali non ammessi'],
            ['Servizi', 'Wi‑Fi, aria condizionata, parcheggio gratuito'],
            ['Consiglio', 'Per esplorare l’isola è consigliato un mezzo proprio o scooter']
          ].map(([title, text]) => (
            <motion.div key={title} {...fadeUp} className="rounded-3xl bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-ocean">{title}</h3>
              <p className="mt-1 text-volcanic/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative px-6 py-14 text-white md:py-20">
        <div className="absolute inset-0 bg-[url('/images/vulcano-isola.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-volcanic/72" />
        <div className="relative mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sand">Contatti</p>
            <h2 className="font-serif text-4xl leading-tight">Pronto a vivere Vulcano?</h2>
            <p className="mt-4 text-base leading-7 text-white/78">Contattaci per disponibilità, prezzi e informazioni personalizzate. Ti risponderemo con tutti i dettagli utili per organizzare il soggiorno.</p>
            <div className="mt-7 space-y-3 text-white/86">
              <p className="flex items-center gap-3"><MapPin /> Villa Capo Grillo Cottage · Vulcano, Isole Eolie</p>
              <p className="flex items-center gap-3"><Mail /> terabit@tiscali.it</p>
              <p className="flex items-center gap-3"><Phone /> +39 338 64 43 652</p>
            </div>
          </motion.div>
          <motion.form {...fadeUp} 
              action="https://formspree.io/f/xqejpayv"
              method="POST"
              className="glass rounded-[2rem] p-4 text-volcanic shadow-soft grid gap-3"
            >
              {['Nome', 'Email', 'Telefono', 'Date richieste', 'Numero ospiti'].map((field) => (
                <input key={field} name={field} placeholder={field} className="rounded-2xl border border-white/40 bg-white/80 px-4 py-3 outline-none ring-ocean/20 transition focus:ring-4" />
              ))}
              <textarea name="Messaggio" placeholder="Messaggio" rows={4} className="rounded-2xl border border-white/40 bg-white/80 px-4 py-3 outline-none ring-ocean/20 transition focus:ring-4" />
              <button type="submit" className="rounded-full bg-ocean px-7 py-3 font-semibold text-white shadow-lg shadow-ocean/20">Richiedi informazioni</button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-volcanic px-6 py-7 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p className="font-serif text-2xl">Villa Capo Grillo Cottage</p>
          <p className="text-sm text-white/60">Vulcano Island · Aeolian Islands · Italy · Privacy · Instagram</p>
        </div>
      </footer>
    </main>
  );
}
