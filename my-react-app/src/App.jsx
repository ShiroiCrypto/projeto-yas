import { useState } from 'react'
import './App.css'

function App() {
  const [favSeries, setFavSeries] = useState(0)

  const series = [
    { name: 'The Vampire Diaries', emoji: '🧛' },
    { name: 'Outer Banks', emoji: '🏝️' },
    { name: 'Percy Jackson', emoji: '⚡' }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">✨ Presente para Yasmin ✨</h1>
        <p className="subtitle">Um site feito com amor enquanto estudava filosofia</p>
      </header>

      <section className="about">
        <div className="about-card">
          <h2>Sobre Yasmin</h2>
          <p>Essa garota incrível merecia um site especial!</p>
        </div>
      </section>

      <section className="interests">
        <div className="interest-item">
          <div className="interest-card dog">
            <h3>🐕 Animal Favorito</h3>
            <p>Cachorro</p>
            <p className="description">Leal, carinhoso e sempre pronto para brincar!</p>
          </div>
        </div>

        <div className="interest-item">
          <div className="interest-card color">
            <h3>💗 Cor Favorita</h3>
            <p>Rosa</p>
            <p className="description">Uma cor que combina com sua doçura</p>
          </div>
        </div>
      </section>

      <section className="series-section">
        <h2>📺 Séries Favoritas</h2>
        <div className="series-carousel">
          {series.map((s, index) => (
            <div
              key={index}
              className={`series-card ${favSeries === index ? 'active' : ''}`}
              onClick={() => setFavSeries(index)}
            >
              <span className="series-emoji">{s.emoji}</span>
              <p>{s.name}</p>
            </div>
          ))}
        </div>
        <div className="series-details">
          <p className="series-name">{series[favSeries].name}</p>
          <p className="series-desc">
            {favSeries === 0 && "Vampiros, romance e ação em Mystic Falls! 🧛‍♀️"}
            {favSeries === 1 && "Aventura e tesouro nas Outer Banks! 🏴‍☠️"}
            {favSeries === 2 && "Deuses gregos e demigods em uma jornada épica! ⚡"}
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Feito com 💖 e muito café</p>
        <p>Criado enquanto estudava a complexidade da existência 📚</p>
      </footer>
    </div>
  )
}

export default App
