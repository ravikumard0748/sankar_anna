import { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ArrowUpRight, Check, ChevronRight, Clock3, Mail, MapPin, Menu, Phone, Quote, X } from 'lucide-react'
import { company, gallery, process, relatedImages, services, whyUs } from './data/site'
import { tamilServices, uiText } from './data/translations'
import './App.css'

const navItems = [['/', 'Home'], ['/#about', 'About'], ['/#gallery', 'Gallery'], ['/#contact', 'Contact']]
const LanguageContext = createContext(null)

function useLanguage() { return useContext(LanguageContext) }

function localizeService(service, language) {
  const tamil = tamilServices[service.slug]
  return language === 'ta' && tamil ? { ...service, title: tamil[0], description: tamil[1] } : service
}

function languageText(text, english, tamil) { return text === uiText.ta ? tamil : english }

function LanguageToggle() {
  const { language, setLanguage, text } = useLanguage()
  return <button className="language-toggle" type="button" onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')} aria-label="Switch website language">{text.language}</button>
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const target = document.getElementById(hash.slice(1))
        if (target) window.scrollTo({ top: target.offsetTop - 110, behavior: 'auto' })
      }, 0)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const { text } = useLanguage()
  useEffect(() => {
    if (!open) return undefined
    const closeMenu = () => setOpen(false)
    window.addEventListener('popstate', closeMenu)
    return () => window.removeEventListener('popstate', closeMenu)
  }, [open])
  return <header className="site-header">
    <div className="header-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><img className="brand-logo" src="/sivasakthi-logo.png" alt="Sivasakthi PVC and Aluminium Works" /></Link>
      <div className="header-actions"><a className="header-phone" href={`tel:${company.phone}`}><Phone size={15} />{company.phone}</a><LanguageToggle /><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      <nav className={open ? 'main-nav is-open' : 'main-nav'}>{navItems.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{text[{ Home: 'navHome', About: 'navAbout', Gallery: 'navGallery', Contact: 'navContact' }[label]]}</NavLink>)}<Link className="nav-cta" to="/#quote" onClick={() => setOpen(false)}>{text.quote} <ArrowUpRight size={16} /></Link></nav>
    </div>
  </header>
}

function Footer() {
  const { text } = useLanguage()
  return <footer className="footer"><div className="footer-top"><div><Link to="/" className="brand footer-brand"><img className="brand-logo" src="/sivasakthi-logo.png" alt="Sivasakthi PVC and Aluminium Works" /></Link><p>{text.serviceCopy}</p></div><div className="footer-links"><div><small className="eyebrow">{text.explore}</small><Link to="/#about">{text.navAbout}</Link><Link to="/#gallery">{text.navGallery}</Link><Link to="/#contact">{text.navContact}</Link></div><div><small className="eyebrow">{text.contactPerson}</small><span>{company.contactPerson}</span><a href={`tel:${company.phone}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><span>{company.address}</span></div></div></div><div className="footer-bottom"><span>© 2026 {company.name}. Demo content for replacement.</span><span>Instagram <ArrowUpRight size={14} /></span></div></footer>
}

function QuickContact() { const { text } = useLanguage(); return <div className="quick-contact"><a className="quick-call" href={`tel:${company.phone}`}><Phone size={17} />{text.phone} <span>{company.phone}</span></a><a className="whatsapp" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">{text.whatsapp} <ArrowUpRight size={15} /></a></div> }

function SectionHeading({ eyebrow, title, copy, link }) { return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{copy && <p>{copy}</p>}{link && <Link className="text-link" to={link.to}>{link.label} <ArrowUpRight size={16} /></Link>}</div> }

function Home() {
  const { text } = useLanguage()
  return <>
    <main>
      <section className="hero"><div className="hero-image"><img src={services[4].image} alt="PVC interior design" /></div><div className="hero-content"><span className="eyebrow light">PVC interior design</span><h1>{languageText(text, 'Rooms with', 'உங்கள் அறைகளுக்கு')}<br /><em>{languageText(text, 'room to breathe.', 'புதிய தோற்றம் கொடுப்போம்.')}</em></h1><p>{languageText(text, 'Practical, considered PVC solutions for homes and workspaces. Designed around your life, installed with care.', 'வீடுகள் மற்றும் வேலை செய்யும் இடங்களுக்கு தேவைக்கேற்ப PVC தீர்வுகள். உங்கள் வாழ்க்கை முறைக்கு ஏற்ற வகையில் வடிவமைத்து, அக்கறையுடன் நிறுவுகிறோம்.')}</p><div className="hero-actions"><Link className="button button-copper" to="/contact">{text.startConversation} <ArrowUpRight size={17} /></Link><Link className="button button-ghost" to="/gallery">{text.browsePhotos} <ChevronRight size={17} /></Link></div></div><div className="hero-note"><span>01</span><span>{languageText(text, 'Spaces', 'இடங்கள்')}<br />{languageText(text, 'made personal', 'உங்களுக்காக உருவாக்கப்பட்டவை')}</span></div></section>
      <section id="about" className="intro section-pad"><div className="intro-stamp"><img src="/sivasakthi-logo.png" alt="Sivasakthi" /></div><div className="intro-copy"><span className="eyebrow">{languageText(text, 'A better way to build in', 'சிறந்த இடங்களை உருவாக்கும் வழி')}</span><h2>{languageText(text, 'Material honesty.', 'தரமான பொருட்கள்.')}<br /><em>{languageText(text, 'Everyday ease.', 'தினசரி வசதி.')}</em></h2><p>{languageText(text, 'We make PVC interiors and installations that feel at home. From the first measured conversation to the final clean-up, we bring clarity, precision and a calm eye for detail.', 'உங்கள் வீட்டிற்கு பொருந்தும் PVC இன்டீரியர் மற்றும் நிறுவல் பணிகளை செய்கிறோம். முதல் அளவீட்டிலிருந்து இறுதி சுத்தம் வரை, ஒவ்வொரு பணியையும் தெளிவாகவும் துல்லியமாகவும் கவனத்துடன் செய்கிறோம்.')}</p><Link className="text-link" to="/#contact">{text.aboutApproach} <ArrowUpRight size={16} /></Link></div><div className="intro-image"><img src={services[2].image} alt="PVC wardrobe detail" loading="lazy" /></div></section>
      <section className="statement"><span className="eyebrow light">{text.materialMatters}</span><h2>{text.builtRealLife}<br /><em>{text.beautifully}</em></h2><Link className="button button-light" to="/contact">{text.talkTeam} <ArrowUpRight size={17} /></Link></section>
      <GallerySection />
      <section className="process-section section-pad"><SectionHeading eyebrow={text.howWeWork} title={text.processTitle} /><div className="process-grid">{process.map(([number, _title, copy], index) => <div className="process-step" key={number}><span>{number}</span><h3>{[text.consultation, text.siteVisit, text.design, text.installation][index]}</h3><p>{languageText(text, copy, ['உங்கள் இடம், தேவைகள் மற்றும் விருப்பங்கள் குறித்து ஆலோசனை.', 'இடத்தை நேரில் பார்த்து, அளவீடுகள் மற்றும் தேவையான விவரங்களைப் புரிந்துகொள்கிறோம்.', 'பொருட்கள், சேமிப்பு, விளக்குகள் மற்றும் ஃபினிஷிங் ஆகியவற்றை ஒருங்கிணைத்து வடிவமைக்கிறோம்.', 'திறமையான பொருத்துதல், ஒழுங்கான பணிச்செயல் மற்றும் முறையான இறுதி ஒப்படைப்பு.'][index])}</p></div>)}</div></section>
      <div className="home-contact-full"><Contact /></div>
      <section id="quote" className="quote-section section-pad"><Quote size={34} /><blockquote>{languageText(text, 'Placeholder testimonial. A real customer story will be added here once the first project experiences are ready to share.', 'வாடிக்கையாளர் கருத்து இங்கே சேர்க்கப்படும்.')}</blockquote><span>{languageText(text, 'Customer name / Demo review', 'வாடிக்கையாளர் பெயர் / மாதிரி கருத்து')}</span><Link className="button button-dark" to="/#contact">{text.quote} <ArrowUpRight size={17} /></Link></section>
    </main>
  </>
}

function PageIntro({ eyebrow, title, copy }) { return <section className="page-intro section-pad"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{copy && <p>{copy}</p>}</section> }

function About() { const { text } = useLanguage(); return <main><PageIntro eyebrow={text.aboutStudio} title={<>{text.aboutTitle}<br /><em>{text.aboutAccent}</em></>} copy={text.aboutCopy} /><section className="about-feature section-pad"><div className="about-image"><img src={services[12].image} alt="PVC living room interior" /></div><div className="about-copy"><span className="eyebrow">{text.pointOfView}</span><h2>{text.useful}<br /><em>{text.beautiful}</em></h2><p>{languageText(text, 'There is a certain confidence in a room that has been properly considered. We work with PVC because it offers the resilience, flexibility and ease modern spaces need, without losing the warmth of a good finish.', 'சரியாக திட்டமிடப்பட்ட ஒரு இடம் எப்போதும் தனித்துவமாக இருக்கும். நவீன இடங்களுக்கு தேவையான நீடித்த தன்மை, நெகிழ்வுத்தன்மை மற்றும் பராமரிப்பு எளிமையை PVC வழங்குவதால் அதை பயன்படுத்துகிறோம்.')}</p><p>{languageText(text, 'Our role is to bring all of that together: listen closely, measure carefully, recommend honestly and install with respect for your home.', 'உங்கள் தேவைகளை கவனமாக புரிந்துகொண்டு, சரியான அளவீடுகளை எடுத்து, பொருத்தமான தீர்வுகளை பரிந்துரைத்து, உங்கள் வீட்டை மதித்து சிறப்பாக நிறுவுவதே எங்கள் நோக்கம்.')}</p><Link className="button button-dark" to="/contact">{text.planSpace} <ArrowUpRight size={17} /></Link></div></section><section className="values section-pad"><SectionHeading eyebrow={text.expect} title={text.detailsDifference} /><div className="values-grid">{whyUs.map(([number, _title, copy]) => <div className="value" key={number}><span>{number}</span><h3>{languageText(text, _title, ['பொருள் தேர்வில் தெளிவு', 'அளவுக்கேற்ற வடிவமைப்பு', 'கவனமான நிறுவல்', 'ஒரே தொடர்பு'][Number(number) - 1])}</h3><p>{languageText(text, copy, ['ஃபினிஷிங், பயன்பாடு மற்றும் பராமரிப்பு குறித்து தெளிவான ஆலோசனை.', 'ஒவ்வொரு கேபினெட், பேனல் மற்றும் பார்டிஷனும் அந்த இடத்தின் அளவுக்கு ஏற்ப திட்டமிடப்படுகிறது.', 'முதல் கட்டிங் முதல் இறுதி சரிபார்ப்பு வரை முழுமையான தொழில்முறை நிறுவல்.', 'டிசைன் முதல் தயாரிப்பு மற்றும் நிறுவல் வரை ஒரே தொடர்பு.'][Number(number) - 1])}</p></div>)}</div></section></main> }

function ServiceDetails() { const { slug } = useParams(); const { language, text } = useLanguage(); const serviceIndex = Math.max(0, services.findIndex((item) => item.slug === slug)); const source = services[serviceIndex]; const service = localizeService(source, language); const related = relatedImages[serviceIndex]; const previous = services[(serviceIndex - 1 + services.length) % services.length]; const next = services[(serviceIndex + 1) % services.length]; return <main><PageIntro eyebrow={service.eyebrow} title={<>{service.title}<br /><em>{languageText(text, 'made for your space.', 'உங்கள் இடத்திற்காக உருவாக்கப்பட்டது.')}</em></>} copy={service.description} /><section className="detail-feature section-pad"><img src={service.image} alt={service.title} /><div className="detail-copy"><span className="eyebrow">{text.whyChoose}</span><h2>{text.detailsMake}<br /><em>{text.difference}</em></h2><ul>{service.benefits.map((benefit) => <li key={benefit}><Check size={17} />{language === 'ta' ? languageText(text, benefit, ({ 'Water resistant surfaces': 'நீரைத் தாங்கும் மேற்பரப்புகள்', 'Made-to-measure dimensions': 'தேவைக்கேற்ப அளவுகள்', 'Clean, professional fitting': 'சுத்தமான தொழில்முறை நிறுவல்' })[benefit] || benefit) : benefit}</li>)}</ul><Link className="button button-dark" to="/contact">{text.requestQuote} <ArrowUpRight size={17} /></Link></div></section><section className="related-view section-pad"><div><span className="eyebrow">{text.relatedView}</span><h2>{service.title}</h2></div><img src={related.src} alt={`${service.title} related detail`} loading="lazy" /><div className="detail-nav"><Link to={`/services/${previous.slug}`}><span>{text.previous}</span>{localizeService(previous, language).title} <ChevronRight size={16} /></Link><Link to={`/services/${next.slug}`}><span>{text.next}</span>{localizeService(next, language).title} <ChevronRight size={16} /></Link></div></section></main> }

function GallerySection() { const [active, setActive] = useState('All Services'); const { language, text } = useLanguage(); const categories = ['All Services', ...gallery.map((item) => item.category)]; const visible = active === 'All Services' ? gallery : gallery.filter((item) => item.category === active); return <section id="gallery" className="gallery-section section-pad"><SectionHeading eyebrow={text.servicePhotos} title={<>{text.galleryTitle}<br /><em>{text.galleryAccent}</em></>} copy={text.galleryCopy} /><div className="filter-row">{categories.map((category) => { const label = category === 'All Services' ? text.allServices : localizeService(services.find((service) => service.slug === gallery.find((item) => item.category === category)?.serviceSlug) || services[0], language).title; return <button className={active === category ? 'filter active' : 'filter'} onClick={() => setActive(category)} key={category}>{label}</button> })}</div><div className="gallery-grid">{visible.map((item) => { const localized = localizeService(services.find((service) => service.slug === item.serviceSlug) || services[0], language); return <Link to={`/services/${item.serviceSlug}`} className="gallery-item" key={item.title}><img src={item.image} alt={localized.title} loading="lazy" /><div><span>{localized.title}</span><h3>{localized.title}</h3></div></Link> })}</div></section> }

function Gallery() { const { text } = useLanguage(); return <main><PageIntro eyebrow={text.navGallery} title={text.servicePhotos} copy={text.browseCopy} /><GallerySection /></main> }

function Contact() { const { language, text } = useLanguage(); const submitToWhatsApp = (event) => { event.preventDefault(); const values = new FormData(event.currentTarget); const message = language === 'ta' ? `வணக்கம், எனக்கு PVC இன்டீரியர் பணிகள் குறித்து விலை விவரம் வேண்டும்.\n\nபெயர்: ${values.get('name')}\nதொலைபேசி: ${values.get('phone')}\nமுகவரி: ${values.get('address') || '-'}\nமின்னஞ்சல்: ${values.get('email') || '-'}\nதேவைப்படும் பணி: ${values.get('service') || '-'}\nவிவரங்கள்: ${values.get('message') || '-'}` : `Hello, I would like a quotation for PVC interior work.\n\nName: ${values.get('name')}\nPhone: ${values.get('phone')}\nAddress: ${values.get('address') || '-'}\nEmail: ${values.get('email') || '-'}\nWhat I need: ${values.get('service') || '-'}\nDetails: ${values.get('message') || '-'}`; window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer') }; return <main><PageIntro eyebrow={text.conversation} title={<>{text.contactTitle}<br /><em>{text.contactAccent}</em></>} copy={text.contactCopy} /><section className="contact-section section-pad"><form id="contact" className="contact-form" onSubmit={submitToWhatsApp}><span className="eyebrow">{text.freeQuote}</span><div className="form-grid"><label>{text.name}<input name="name" required placeholder={language === 'ta' ? 'உங்கள் பெயர்' : 'Your name'} /></label><label>{text.phone}<input name="phone" required type="tel" placeholder={language === 'ta' ? 'உங்கள் தொலைபேசி எண்' : 'Your phone number'} /></label><label>{text.address}<input name="address" required placeholder={text.enterAddress} /></label><label>{text.email}<input name="email" type="email" placeholder="you@example.com" /></label><label>{text.whatYouWant}<select name="service" defaultValue=""><option value="" disabled>{text.chooseService}</option>{services.map((service) => <option key={service.slug}>{localizeService(service, language).title}</option>)}</select></label><label className="full">{text.spaceDetails}<textarea name="message" rows="5" placeholder={text.messagePlaceholder} /></label></div><button className="button button-dark" type="submit">{text.sendViaWhatsapp} <ArrowUpRight size={17} /></button></form><div className="contact-info"><div><span className="eyebrow">{text.contactDetails}</span><a href={`tel:${company.phone}`}><Phone size={17} />{company.phone}</a><a href={`mailto:${company.email}`}><Mail size={17} />{company.email}</a><span><MapPin size={17} />{company.address}</span></div><div><span className="eyebrow">{text.hours}</span><span><Clock3 size={17} />{company.hours}</span></div><div className="map-placeholder"><iframe title="Sivasakthi map location" src={company.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={company.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} />{text.mapPlaceholder}</a></div></div></section></main> }

function App() { const [language, setLanguage] = useState('en'); const text = uiText[language]; return <LanguageContext.Provider value={{ language, setLanguage, text }}><BrowserRouter><ScrollToTop /><div className={`app-shell language-${language}`}><Header /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Navigate to="/gallery" replace />} /><Route path="/services/:slug" element={<ServiceDetails />} /><Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} /></Routes><Footer /><QuickContact /></div></BrowserRouter></LanguageContext.Provider> }

export default App
