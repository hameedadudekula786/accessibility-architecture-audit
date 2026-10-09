
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [audit, setAudit] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/audit')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load audit information')
        }
        return response.json()
      })
      .then((data) => setAudit(data))
      .catch(() => {
        setError('Backend server is not available.')
      })
  }, [])

  return (
    <div className="app">
      <header className="header">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <h1>Accessibility Audit Project</h1>
        <p>Making websites easier for everyone to use.</p>
      </header>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#audit">Audit Results</a>
        <a href="#contact">Contact</a>
      </nav>

      <main id="main">
        <section id="about" className="card">
          <h2>About This Project</h2>
          <p>
            This project evaluates website accessibility
            using Lighthouse and keyboard navigation.
          </p>
        </section>

        <section id="audit" className="card">
          <h2>Audit Information from Backend</h2>

          {error && <p role="alert">{error}</p>}

          {!audit && !error && <p>Loading audit information...</p>}

          {audit && (
            <div>
              <p><strong>Project:</strong> {audit.project}</p>
              <p><strong>Website:</strong> {audit.website}</p>
              <p><strong>Status:</strong> {audit.status}</p>
              <h3>Audit Methods</h3>
              <ul>
                {audit.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section id="contact" className="card">
          <h2>Project Documentation</h2>
          <p>
            Review the audit report and screenshots in
            the project repository.
          </p>
        </section>
      </main>

      <footer>
        <p>Accessibility Audit Project</p>
      </footer>
    </div>
  )
}

export default App