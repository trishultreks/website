import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Compass,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Route,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import type { SyntheticEvent } from "react";
import { company, faqs, testimonials, treks, trustPoints } from "./data/treks";

const enquiryText = encodeURIComponent(
  "Hi Trishul Treks, I want to know more about your upcoming Himalayan trek batches.",
);

const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${enquiryText}`;
const fallbackPhoto = treks[0].image.src;
const uniquePhotoSources = new Set<string>();
const photoTreks = treks.filter((trek) => {
  if (uniquePhotoSources.has(trek.image.src)) {
    return false;
  }

  uniquePhotoSources.add(trek.image.src);
  return true;
});
const photoTrekNames = new Set(photoTreks.map((trek) => trek.name));
const listTreks = treks.filter((trek) => !photoTrekNames.has(trek.name));

const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
  if (event.currentTarget.src !== fallbackPhoto) {
    event.currentTarget.src = fallbackPhoto;
  }
};

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Trishul Treks home">
          <span className="brand-mark">
            <Mountain size={22} strokeWidth={2.4} />
          </span>
          <span>
            <strong>{company.name}</strong>
            <small>India's Himalayan trails</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#treks">Treks</a>
          <a href="#founder">Founder</a>
          <a href="#safety">Safety</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp enquiry
        </a>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <SparkIcon /> Uttarakhand based trekking company
          </p>
          <h1>Walk into the Himalaya with a crew that treats safety as seriously as the summit.</h1>
          <p className="hero-text">
            {company.tagline} Explore curated Indian treks, transparent batches, local guides,
            and WhatsApp-first planning for friends, families, and first-time trekkers.
          </p>

          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Plan my trek <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#treks">
              Explore treks
            </a>
          </div>

          <dl className="hero-stats" aria-label="Company highlights">
            <div>
              <dt>27</dt>
              <dd>curated routes</dd>
            </div>
            <div>
              <dt>4.9/5</dt>
              <dd>guest rating</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>trip support</dd>
            </div>
          </dl>
        </div>

        <div className="hero-card" aria-label="Featured trek photography">
          <div className="terrain-card photo-card">
            <img src={treks[1].image.src} alt={treks[1].image.alt} onError={handleImageError} />
            <div className="photo-caption">
              <span>{treks[1].name}</span>
              <a href={treks[1].image.sourceUrl} target="_blank" rel="noreferrer">
                {treks[1].image.credit}
              </a>
            </div>
          </div>
          <div className="floating-card top">
            <ShieldCheck size={20} />
            <span>Weather-aware trek decisions</span>
          </div>
          <div className="floating-card bottom">
            <MapPin size={20} />
            <span>Base: {company.base}</span>
          </div>
        </div>
      </section>

      <section className="section-shell intro-grid" aria-label="Why trekkers choose Trishul Treks">
        <article>
          <span className="icon-pill">
            <Compass size={20} />
          </span>
          <h2>Built for Indian trekkers</h2>
          <p>
            Clear preparation calls, practical packing guidance, and a crew that
            understands first-time questions before the trail begins.
          </p>
        </article>
        <article>
          <span className="icon-pill">
            <Users size={20} />
          </span>
          <h2>Small-group focus</h2>
          <p>
            Batches are kept personal so the leader can track pace, health, food, and morale
            across the whole route.
          </p>
        </article>
        <article>
          <span className="icon-pill">
            <Route size={20} />
          </span>
          <h2>Local trail knowledge</h2>
          <p>
            Local guides, verified campsites, and route plans shaped around season, altitude, and
            daily trail conditions.
          </p>
        </article>
      </section>

      <section id="founder" className="section-shell founder-section">
        <figure className="founder-photo">
          <img src="/founder-kaku-rana.png" alt="Kaku Rana, founder of Trishul Treks" />
        </figure>

        <div className="founder-copy">
          <p className="eyebrow">Meet the founder</p>
          <h2>Kaku Rana</h2>
          <p className="founder-role">Founder, trek leader, and mountain safety mentor.</p>
          <p>
            Kaku Rana brings years of hands-on Himalayan trail experience to Trishul Treks. His
            style is calm, practical, and safety-first: steady pacing, clear briefings, honest
            weather calls, and route decisions that put the group before the summit.
          </p>

          <div className="founder-points">
            <span>
              <ShieldCheck size={18} /> Safety-led route decisions
            </span>
            <span>
              <Users size={18} /> Patient with first-time trekkers
            </span>
            <span>
              <MapPin size={18} /> Deep local trail knowledge
            </span>
          </div>
        </div>
      </section>

      <section id="treks" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Featured Himalayan treks</p>
          <h2>Choose your first summit, valley, snow trail, or monsoon escape.</h2>
          <p>
            Routes with distinct photo sources are shown first. The remaining routes are listed
            compactly below so repeated placeholder imagery does not clutter the page.
          </p>
        </div>

        <div className="trek-grid">
          {photoTreks.map((trek) => (
            <article className="trek-card" key={trek.name}>
              <figure className="trek-photo">
                <img
                  src={trek.image.src}
                  alt={trek.image.alt}
                  loading="lazy"
                  onError={handleImageError}
                />
                <figcaption>
                  <a href={trek.image.sourceUrl} target="_blank" rel="noreferrer">
                    {trek.image.credit}
                  </a>
                </figcaption>
              </figure>
              <div className="trek-card-top">
                <span>{trek.region}</span>
                <BadgeCheck size={19} />
              </div>
              <h3>{trek.name}</h3>
              <p>{trek.description}</p>
              <div className="trek-meta">
                <span>
                  <CalendarDays size={16} /> {trek.season}
                </span>
                <span>
                  <Mountain size={16} /> {trek.altitude}
                </span>
                <span>
                  <Compass size={16} /> {trek.difficulty}
                </span>
              </div>
              <div className="trek-highlights">
                {trek.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              <div className="trek-footer">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Enquire <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="trek-list-block">
          <div className="trek-list-header">
            <div>
              <p className="eyebrow">More routes</p>
              <h3>Available treks:</h3>
            </div>
            <a className="button secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Ask about any route
            </a>
          </div>

          <div className="trek-list-grid">
            {listTreks.map((trek) => (
              <article className="trek-list-item" key={trek.name}>
                <div>
                  <span>{trek.region}</span>
                  <h3>{trek.name}</h3>
                </div>
                <div className="trek-list-meta">
                  <span>
                    <CalendarDays size={15} /> {trek.season}
                  </span>
                  <span>
                    <Mountain size={15} /> {trek.altitude}
                  </span>
                  <span>
                    <Compass size={15} /> {trek.difficulty}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="section-shell safety-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Safety first, summit second</p>
          <h2>The mountain plan changes when the mountain asks for it.</h2>
        </div>
        <div className="safety-grid">
          {trustPoints.map((point) => (
            <div className="safety-point" key={point}>
              <CheckCircle2 size={20} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell quote-section">
        <div className="quote-copy">
          <p className="eyebrow">Guest stories</p>
          <h2>Warm crews, clear communication, and treks that feel well held.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name}>
              <div className="stars" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"{testimonial.quote}"</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Before you pack</p>
          <h2>Common questions from first-time Himalayan trekkers.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div>
          <p className="eyebrow">Start planning</p>
          <h2>Tell us your month, fitness level, and dream trail.</h2>
          <p>
            The fastest way to plan is WhatsApp. For brand partnerships, group departures, or school
            and college trips, email works best.
          </p>
        </div>
        <div className="contact-card">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={22} />
            <span>
              WhatsApp
              <strong>{company.phoneDisplay}</strong>
            </span>
          </a>
          <a href={`tel:${company.phoneDisplay.replaceAll(" ", "")}`}>
            <Phone size={22} />
            <span>
              Call
              <strong>{company.phoneDisplay}</strong>
            </span>
          </a>
          <a href={`mailto:${company.email}`}>
            <Mail size={22} />
            <span>
              Email
              <strong>{company.email}</strong>
            </span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>{company.name}</span>
        <span>{company.base}</span>
        <span>Domain target: trishultrek.in</span>
      </footer>
    </main>
  );
}

function SparkIcon() {
  return <span className="spark" aria-hidden="true" />;
}

export default App;
