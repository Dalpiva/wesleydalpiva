"use client"

import { useEffect, useRef, useState } from "react"
import { sectionNavigation, translate, uiCopy } from "@/constants"
import type { Locale } from "@/constants/types"

type CommandPaletteProps = {
  locale: Locale
}

export default function CommandPalette({ locale }: CommandPaletteProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const copy = uiCopy[locale]

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen(true)
      }

      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const normalizedQuery = query.trim().toLowerCase()
  const results = sectionNavigation.filter((section) => {
    if (!normalizedQuery) return true

    return (
      section.id.includes(normalizedQuery) ||
      translate(section.label, locale).toLowerCase().includes(normalizedQuery)
    )
  })

  return (
    <>
      <button
        className="command-trigger"
        type="button"
        aria-label={copy.commandPalette}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">+</span>
        <kbd>{copy.commandHint}</kbd>
      </button>

      {open ? (
        <div className="palette-backdrop" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="command-palette"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="command-palette-heading">
              <div>
                <p className="eyebrow">{copy.commandEyebrow}</p>
                <h2 id="command-palette-title">{copy.commandTitle}</h2>
              </div>
              <button
                className="command-close"
                type="button"
                aria-label={copy.closeCommandPalette}
                onClick={() => setOpen(false)}
              >
                {copy.close}
              </button>
            </div>

            <label className="sr-only" htmlFor="command-search">
              {copy.commandPlaceholder}
            </label>
            <input
              ref={inputRef}
              id="command-search"
              className="command-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.commandPlaceholder}
              autoComplete="off"
            />

            <nav aria-label={copy.navigation} className="command-results">
              {results.length > 0 ? (
                results.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="command-result-number">{section.number}</span>
                    <span>{translate(section.label, locale)}</span>
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                ))
              ) : (
                <p className="command-empty">{copy.noResults}</p>
              )}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  )
}
