import { useState } from 'react'
import './App.css'

function App() {
  const [favSeries, setFavSeries] = useState(1)

  const series = [
    { 
      name: 'The Vampire Diaries',
      info: 'Uma pequena cidade repleta de vampiros, lobisomens e bruxas. Stefan e Damon Salvatore trazem caos e romance para Mystic Falls.',
      year: '2009-2017'
    },
    { 
      name: 'Outer Banks',
      info: 'Um grupo de adolescentes em uma ilha que buscam por um tesouro perdido. Aventura, mistério e amizades que testam limites.',
      year: '2020-presente'
    },
    { 
      name: 'Percy Jackson',
      info: 'Um campista descobre que é filho de Poseidon. Deuses gregos, monstros e uma jornada épica pelo mundo moderno.',
      year: '2023'
    }
  ]

  return (
    <div className="container">
      <div className="wallpaper-frame">
        <div className="content">
          <header className="header">
            <h1 className="title">Yasmin</h1>
            <p className="subtitle">Seus Favoritos</p>
          </header>

          <section className="interests">
            <div className="interest-item">
              <div className="interest-card">
                <h3>Animal Favorito</h3>
                <p>Cachorro 🐕</p>
              </div>
            </div>

            <div className="interest-item">
              <div className="interest-card">
                <h3>Cor Favorita</h3>
                <p>Rosa 💗</p>
              </div>
            </div>
          </section>

          <section className="series-section">
            <h2>Séries Favoritas</h2>
            <div className="series-carousel">
              {series.map((s, index) => (
                <div
                  key={index}
                  className={`series-card ${favSeries === index ? 'active' : ''}`}
                  onClick={() => setFavSeries(index)}
                >
                  <p>{s.name}</p>
                </div>
              ))}
            </div>
            
            <div className="series-details">
              <p className="series-name">{series[favSeries].name}</p>
              <p className="series-year">{series[favSeries].year}</p>
              <p className="series-desc">
                {series[favSeries].info}
              </p>
            </div>
          </section>

          <footer className="footer">
            <p>Feito com carinho 💖</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
