import React, { useState } from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const Lang = ({ title }) => {
  const { languages, originalPath, changeLanguage, language } = useI18next()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = lng => {
    changeLanguage(lng)
    setIsOpen(false)
  }

  const languageNames = {
    en: "English - EN",
    fr: "Français - FR",
  }

  const shortNames = {
    en: "EN",
    fr: "FR",
  }

  return (
    <div className="lang-container">
      <h1 className="lang-title">
        <Link to="/">{title}</Link>
      </h1>
      <button
        className="lang-button bx bx-globe"
        onClick={() => setIsOpen(!isOpen)}
      >
        {shortNames[language]} <i className="bx bx-chevron-down"></i>
      </button>
      {isOpen && (
        <ul className="lang-dropdown">
          {languages.map(lng => (
            <li key={lng} onClick={() => handleLanguageChange(lng)}>
              {languageNames[lng]}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Lang
