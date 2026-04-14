"use client"

import { useState, useRef, useEffect } from "react"
import { useTerminalSequence } from "../hooks/useTerminalSequence"
import { useTypewriter } from "../hooks/useTypewriter"
import Cursor from "./Cursor"
import { useTerminalInput } from "../hooks/useTerminalInput"

const BEFORE_LINK = ` __      __      _            
 \\ \\    / /__ __| |___ _  _   
  \\ \\/\\/ / -_|_-< / -_) || |  
  _\\_/\\_/\\___/__/_\\___|\\_, |  
 |   \\ __ _| |_ __(_)_ |__/ _ 
 | |) / _\` | | '_ \\ \\ V / _\` |
 |___/\\__,_|_| .__/_|\\_/\\__,_|
             |_|              

> summary
Olá, me chamo Wesley Dalpiva. Sou apaixonado por aprender e resolver problemas.

> main Stack:
- Python
- Flutter (Dart)
- Next.js

## low level:
- C/C++
- EasyEDA (diagramas)

> work:
Desenvolvedor FullStack na `

export default function TerminalHero() {
  const { phase, setPhase } = useTerminalSequence()

  const [step, setStep] = useState<"main" | "link" | "done">("main")

  const mainText = useTypewriter(
    BEFORE_LINK,
    5,
    phase === "typing" && step === "main",
    () => setStep("link")
  )

  const linkText = useTypewriter(
    "QuatroIn",
    5,
    step === "link",
    () => {
      setStep("done")
      setPhase("done")
    }
  )

  const { input, history } = useTerminalInput(step === "done")

  const endRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto" })
  }, [history, input, mainText, linkText])

  return (
    <div>
      {/* LOADING */}
      {phase === "loading" && (
        <pre>
          {`> initializing... `}
          <Cursor
            interval={500}
            maxBlinks={3}
            onFinish={() => setPhase("typing")}
          />
        </pre>
      )}

      {/* TYPEWRITER */}
      {(phase === "typing" || phase === "done") && (
        <pre>
          {mainText}
          {step !== "main" && (
            <a
              href="https://quatroin.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          )}
          {"\n\n> "}

          {/* HISTÓRICO */}
          {history.map((item, i) => (
            <div key={i}>
              {item.value}
            </div>
          ))}
          {step === "done" && (
            <>
              <div>{`> ${input}`}<Cursor /></div>
            </>
          )}
        </pre>
      )}
      <div ref={endRef} />
    </div>
  )
}