const stories = [
  {
    number: '01',
    title: 'Learning beyond the classroom',
    location: 'Add location',
    theme: 'Access',
    image: '',
  },
  {
    number: '02',
    title: 'Connection creates opportunity',
    location: 'Add location',
    theme: 'Connectivity',
    image: '',
  },
  {
    number: '03',
    title: 'A safe place to keep learning',
    location: 'Add location',
    theme: 'Resilience',
    image: '',
  },
  {
    number: '04',
    title: 'Teachers as digital pioneers',
    location: 'Add location',
    theme: 'Training',
    image: '',
  },
  {
    number: '05',
    title: 'Knowledge in every language',
    location: 'Add location',
    theme: 'Inclusion',
    image: '',
  },
  {
    number: '06',
    title: 'Powering a brighter future',
    location: 'Add location',
    theme: 'Infrastructure',
    image: '',
  },
]

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={down ? 'rotate-90' : ''}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
    >
      <path d="M3 9h11M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function App() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Learning Forward home">
          <span className="brand-mark">4</span>
          <span>LEARNING<br />FORWARD</span>
        </a>
        <div className="nav-links">
          <a href="#gallery">Stories</a>
          <a href="#mission">Mission</a>
          <a className="nav-cta" href="#add-images">Add your images <Arrow /></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="eyebrow">A visual archive for UN Sustainable Development Goal 4</div>
        <h1>
          Education should<br />
          <span>reach everyone.</span>
        </h1>
        <div className="hero-footer">
          <p>
            Stories of how technology can protect and improve education in communities
            affected by poverty, conflict, and limited infrastructure.
          </p>
          <a className="circle-link" href="#gallery" aria-label="Explore the gallery">
            <Arrow down />
          </a>
        </div>
        <div className="hero-grid" aria-hidden="true">
          <span>QUALITY</span><span>EDUCATION</span><span>04</span>
        </div>
      </header>

      <section className="gallery-section" id="gallery">
        <div className="section-heading">
          <div>
            <p className="kicker">The collection</p>
            <h2>Technology as a<br />bridge to learning</h2>
          </div>
          <p className="section-intro">
            Replace each frame with your own photography to build a visual record of
            ideas, people, and projects advancing inclusive education.
          </p>
        </div>

        <div className="gallery-grid">
          {stories.map((story, index) => (
            <article className={`story-card story-${index + 1}`} key={story.number}>
              <div className="image-frame">
                {story.image ? (
                  <img src={story.image} alt={story.title} />
                ) : (
                  <div className="image-placeholder">
                    <span>{story.number}</span>
                    <p>Add your image</p>
                  </div>
                )}
                <span className="theme-tag">{story.theme}</span>
              </div>
              <div className="story-meta">
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.location}</p>
                </div>
                <span className="story-number">{story.number}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mission" id="mission">
        <p className="kicker">Why SDG 4 matters</p>
        <blockquote>
          “Ensure inclusive and equitable quality education and promote lifelong learning
          opportunities for all.”
        </blockquote>
        <div className="mission-footer">
          <p>
            Technology is not the destination. It is a tool—one that can connect teachers,
            deliver local learning materials, and keep education alive through disruption.
          </p>
          <span>UN SDG 4 · Quality Education</span>
        </div>
      </section>

      <section className="add-images" id="add-images">
        <div>
          <p className="kicker">Make it yours</p>
          <h2>Add your<br />own stories.</h2>
        </div>
        <div className="instructions">
          <p>
            Put your images in the <code>public</code> folder, then add each file path to
            the <code>image</code> field in <code>src/App.tsx</code>.
          </p>
          <div className="code-example">image: '/your-photo.jpg'</div>
          <p className="small-note">
            Use respectful, consent-based photography and include meaningful alternative
            text for every image.
          </p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">4</span>
          <span>LEARNING<br />FORWARD</span>
        </a>
        <p>A visual project inspired by the United Nations Sustainable Development Goals.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  )
}
