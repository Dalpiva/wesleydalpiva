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

> enter a command:`

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

  const { input, setInput, history, runCommand } = useTerminalInput(step === "done")

  const endRef = useRef<HTMLDivElement | null>(null)

  const hiddenInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto" })
  }, [history, input, mainText, linkText])

  return (
    <div
      onClick={() => hiddenInputRef.current?.focus()}
      onTouchStart={() => hiddenInputRef.current?.focus()}
    >
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

          {history.map((item, i) => {
            if (item.type === "input" || item.type === "text") {
              return <div key={i}>{item.value}</div>
            }

            if (item.type === "link") {
              return (
                <div key={i}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </div>
              )
            }

            return null
          })}

          {step === "done" && (
            <div>{`> ${input}`}<Cursor /></div>
          )}
        </pre>
      )}

      <input
        ref={hiddenInputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            runCommand(input)
          }
        }}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      <div ref={endRef} />
    </div>
  )
}