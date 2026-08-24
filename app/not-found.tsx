import Link from "next/link"

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>This route does not exist.</h1>
      <Link className="text-link" href="/">
        -&gt; Return to profile
      </Link>
    </main>
  )
}
