import Landing from "./components/Landing";

export default function App() {
  return (
    <main>
      <Landing />

      <section className="temporary-section" id="p1">
        <p className="temporary-label">PROLOGUE · 01</p>
        <h2>The last signal.</h2>
        <p>The story begins with a machine going silent.</p>
        <a href="#prologue">Back to beginning ↑</a>
      </section>

      <section className="temporary-section chapter-placeholder" id="ch1">
        <p className="temporary-label">CHAPTER 01</p>
        <h2>Apollo Laser Mirrors</h2>
        <p>How far away is the Moon, exactly?</p>
        <a href="#prologue">Back to beginning ↑</a>
      </section>
    </main>
  );
}sob