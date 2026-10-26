import { Link } from 'react-router-dom';

const highlights = [
  { number: '01', title: 'A better way to search', text: 'Find a home by the things that matter to you: the neighborhood, the layout, and the little details.' },
  { number: '02', title: 'People, not just listings', text: 'Get in touch with property professionals and have a real conversation about your next move.' },
  { number: '03', title: 'Your next chapter', text: 'From first look to final decision, keep the important details together in one place.' },
];

export default function Home() {
  return <main className="home">
    <section className="home-hero">
      <div className="home-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> FIND A PLACE TO CALL YOURS</p>
        <h1>A little closer to <em>home.</em></h1>
        <p className="home-lead">Thoughtful spaces, good neighborhoods, and a more personal way to find your next home.</p>
        <div className="home-actions"><Link className="cta" to="/properties">Explore homes <span>↗</span></Link><a className="text-link" href="#how-it-works">How it works <span>↓</span></a></div>
        <div className="home-note"><span className="note-mark">✳</span><span>Good places. Good people.<br/><b>A better way to find both.</b></span></div>
      </div>
      <div className="hero-visual"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85" alt="Warm, light-filled contemporary living room"/><div className="image-caption"><span>SPACE TO SETTLE IN</span><span>01 / 04</span></div><div className="floating-card"><span className="floating-icon">⌂</span><span><b>Your next chapter</b><small>starts somewhere</small></span><span className="floating-arrow">↗</span></div></div>
      <div className="hero-index">01 <span /> A MORE HUMAN WAY HOME</div>
    </section>
    <section className="home-intro" id="how-it-works"><p className="eyebrow">A PLACE FOR WHAT’S NEXT</p><div className="intro-row"><h2>Finding home should<br/>feel like <em>coming home.</em></h2><p>Less scrolling through sameness. More discovering the places and people that make a move feel right. Start with what you’re looking for—we’ll help with the rest.</p></div>
      <div className="highlight-grid">{highlights.map(item=><article className="highlight" key={item.number}><span className="highlight-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>
    <section className="home-bottom"><div><p className="eyebrow">YOUR SEARCH STARTS HERE</p><h2>Somewhere good<br/>is waiting.</h2></div><Link className="cta cta-light" to="/properties">Find your place <span>↗</span></Link></section>
    <footer className="site-footer"><Link to="/" className="brand">estate<span>hub</span><i>.</i></Link><p>Thoughtful places, found together.</p><span>© 2026 EstateHub</span></footer>
  </main>;
}
