import TerminalHero from "./components/TerminalHero"

export default function Home() {
  return (
    <main>
      <div className="sr-only">
        <h1>Wesley Dalpiva</h1>
        <p>
          Desenvolvedor FullStack com experiência em Python, Next.js, Flutter e C/C++.
        </p>
      </div>
      <section>
        <TerminalHero />
      </section>
      <noscript>
        <p>
          Wesley Dalpiva - Desenvolvedor FullStack.
          Acesse com JavaScript habilitado para experiência completa.
        </p>
      </noscript>
    </main>
  )
}