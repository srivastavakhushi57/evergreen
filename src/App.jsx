import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="home">
          <div className="hero__copy">
            <p className="eyebrow">
              <span aria-hidden="true">✳</span> A little more room to grow
            </p>
            <h1>Make good things happen, <em>together.</em></h1>
            <p className="hero__description">
              A calmer, clearer way to bring your best ideas to life. Make space
              for the work that matters.
            </p>
            <a className="hero__button" href="#signup">
              Get started <span aria-hidden="true">↗</span>
            </a>
            <p className="hero__note">Free to start. Room to grow.</p>
          </div>

          <div className="hero__art" aria-label="An illustration of a growing plant">
            <div className="hero__sun" />
            <div className="hero__plant">
              <span className="hero__leaf hero__leaf--left" />
              <span className="hero__leaf hero__leaf--right" />
              <span className="hero__stem" />
              <span className="hero__pot" />
            </div>
            <div className="hero__tag hero__tag--top">A fresh start</div>
            <div className="hero__tag hero__tag--bottom">Growing at your pace</div>
          </div>
        </section>

        <section className="info-section" id="how-it-works">
          <p className="eyebrow">01 / Simple by nature</p>
          <h2>Start with a seed of an idea.</h2>
          <p>Bring your plans together, make steady progress, and celebrate how far you have come.</p>
        </section>

        <section className="info-section info-section--tint" id="features">
          <p className="eyebrow">02 / Made for your everyday</p>
          <h2>Everything in its right place.</h2>
          <p>Thoughtful tools help you focus on the next step, keep your team in sync, and see the big picture.</p>
        </section>

        <section className="info-section" id="pricing">
          <p className="eyebrow">03 / A plan that fits</p>
          <h2>Good things start free.</h2>
          <p>Find a plan that works for you today, with plenty of space for whatever comes next.</p>
        </section>

        <section className="signup" id="signup">
          <p className="eyebrow">Ready when you are</p>
          <h2>Let’s grow something good.</h2>
          <a className="hero__button" href="mailto:hello@evergreen.example">
            Create your account <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <footer className="footer">
        <span>evergreen</span>
        <span>Small steps. Good things.</span>
      </footer>
    </>
  )
}

export default App
