import React, { useState } from 'react'
import Support from '../components/Support'
import Styles from './styles/service.module.css'

const suggestions = [
  'Warranty & coverage',
  'Schedule a service',
  'Test drive booking',
  'Insurance & documents',
  'Return & refund policy',
]

const chips = ['Warranty', 'Test Drive', 'Insurance', 'Financing', 'Roadside Assist', 'Book Service']

function Service() {
  const [query, setQuery] = useState('')
  const [showSugg, setShowSugg] = useState(false)

  const filtered = suggestions.filter(s =>
    s.toLowerCase().includes(query.toLowerCase())
  )

  const pickSugg = (val) => {
    setQuery(val)
    setShowSugg(false)
  }

  return (
    <>
    <div className={Styles.service}>

      {/* Hero */}
      <div className={Styles.hero}>
        <h1>How can we help today?</h1>
        <p className={Styles.subtitle}>Search for answers or submit a support request below</p>

        <div className={Styles.searchWrap}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search a keyword..."
            value={query}
            onChange={e => { setQuery(e.target.value); setShowSugg(true) }}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setTimeout(() => setShowSugg(false), 150)}
            autoComplete="off"
          />
        </div>

        {showSugg && query && filtered.length > 0 && (
          <div className={Styles.suggestions}>
            {filtered.map((s, i) => (
              <div key={i} className={Styles.suggItem} onClick={() => pickSugg(s)}>
                <span className={Styles.dot}></span> {s}
              </div>
            ))}
          </div>
        )}

        <div className={Styles.chips}>
          {chips.map((c, i) => (
            <span key={i} className={Styles.chip} onClick={() => pickSugg(c)}>{c}</span>
          ))}
        </div>
      </div>

      {/* Form + Contact side by side */}
      <div className={Styles.formSection} id="section-1">
        <div className={Styles.formInner}>

          {/* Left — Form */}
          <div className={Styles.formCard}>
            <h2>Any Enquiry?</h2>
            <div className={Styles.row}>
              <div className={Styles.field}>
                <label>First Name</label>
                <input type="text" placeholder="Mahima" />
              </div>
              <div className={Styles.field}>
                <label>Last Name</label>
                <input type="text" placeholder="Chaudhary" />
              </div>
            </div>
            <div className={Styles.field}>
              <label>Topic</label>
              <select>
                <option value="">Select a topic</option>
                <option>Warranty & Coverage</option>
                <option>Test Drive Booking</option>
                <option>Financing & Loans</option>
                <option>Insurance</option>
                <option>Roadside Assistance</option>
                <option>Other</option>
              </select>
            </div>
            <div className={Styles.field}>
              <label>Your Query</label>
              <input type="text" placeholder="Briefly describe your issue" />
            </div>
            <div className={Styles.field}>
              <label>Additional Comments</label>
              <textarea placeholder="Any extra details or feedback..." />
            </div>
            <button className={Styles.submitBtn}>Send Request</button>
          </div>

          {/* Right — Contact */}
          <div className={Styles.contact}>
            <h2>Contact Us</h2>
            <p>We are 24*7 available to help you out</p>
            
            <div className={Styles.item}>
            <div className={Styles.contactItem}>
              <i className="fa-solid fa-location-dot"></i>
              <p>Chakupat, Lalitpur, Nepal</p>
            </div>
            <div className={Styles.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <p>mahimac777@gmail.com</p>
            </div>
            <div className={Styles.contactItem}>
              <i className="fa-solid fa-phone"></i>
              <p>+977-98234567, 97654323</p>
            </div>
            <div className={Styles.contactItem}>
              <i className="fa-brands fa-facebook"></i>
              <p>Facebook</p>
              </div>
              <div className={Styles.contactItem}>
              <i className="fa-brands fa-twitter"></i>
              <p>Twitter</p>
              </div>
              <div className={Styles.contactItem}>
              <i className="fa-brands fa-github"></i>
              <p>Github</p>
              </div>
              <div className={Styles.contactItem}>
              <i className="fa-brands fa-instagram"></i>
              <p>Instagram</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <Support/>
    </>
  )
}

export default Service