import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import './App.css'

function App() {

  const form = useRef()
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    setSending(true)
    setMessage('')

    emailjs.sendForm(
      'service_d8npmgk',
      'template_2hdkcxg',
      form.current,
      {
        publicKey: 'gbAHUCI8jA1A3DWbW'
      }
    )
    .then(() => {
      setMessage('✅ Demande envoyée avec succès !')
      setSending(false)
      form.current.reset()
    })
    .catch((error) => {
      console.error(error)
      setMessage('❌ Erreur lors de l’envoi. Réessayez.')
      setSending(false)
    })
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>📚</span>
          Math<span>&</span>Physique
        </div>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#cours">Cours</a>
          <a href="#programme">Programme</a>
          <a href="#tarif">Tarif</a>
          <a href="#inscription">Inscription</a>
        </nav>

        <a className="contact-btn" href="tel:0558178942">
          📞 Contact
        </a>
      </header>


      {/* HERO */}
      <section id="accueil" className="hero-section">
        <div className="hero-content">

          <div className="badge">
            🎓 Primaire & CEM
          </div>

          <h1>
            Réussir en <span>Mathématiques</span> & Physique
          </h1>

          <p>
            Des cours particuliers simples, efficaces et adaptés
            au niveau de chaque élève.
          </p>

          <div className="hero-buttons">
            <a href="#inscription" className="primary-btn">
              S'inscrire maintenant →
            </a>

            <a href="#cours" className="secondary-btn">
              Découvrir les cours
            </a>
          </div>

          <div className="hero-info">
            <div>
              <strong>1000 DA</strong>
              <small>/ mois</small>
            </div>

            <div>
              <strong>6h</strong>
              <small>/ semaine</small>
            </div>

            <div>
              <strong>2</strong>
              <small>jours / semaine</small>
            </div>
          </div>

        </div>

        <div className="hero-card">
          <div className="floating-card card-one">
            📐 <strong>Mathématiques</strong>
          </div>

          <div className="book">
            📚
          </div>

          <div className="floating-card card-two">
            ⚡ <strong>Physique</strong>
          </div>
        </div>
      </section>


      {/* COURS */}
      <section id="cours" className="section">
        <div className="section-title">
          <span>Nos matières</span>
          <h2>Des cours pour progresser</h2>
          <p>
            Un accompagnement adapté aux élèves du primaire et du CEM.
          </p>
        </div>

        <div className="courses">

          <div className="course-card math">
            <div className="course-icon">📐</div>
            <h3>Mathématiques</h3>
            <p>
              Comprendre les notions, apprendre les méthodes
              et s'entraîner avec des exercices.
            </p>

            <ul>
              <li>✓ Cours adaptés au niveau</li>
              <li>✓ Exercices pratiques</li>
              <li>✓ Correction et explications</li>
              <li>✓ Préparation aux contrôles</li>
            </ul>
          </div>

          <div className="course-card physics">
            <div className="course-icon">⚡</div>
            <h3>Physique</h3>
            <p>
              Comprendre les phénomènes physiques grâce à des
              explications simples et des exercices.
            </p>

            <ul>
              <li>✓ Cours adaptés au niveau</li>
              <li>✓ Exercices pratiques</li>
              <li>✓ Méthodes de résolution</li>
              <li>✓ Préparation aux contrôles</li>
            </ul>
          </div>

        </div>
      </section>


      {/* NIVEAUX */}
      <section className="levels-section">
        <div className="section-title">
          <span>Pour tous les niveaux</span>
          <h2>Primaire & CEM</h2>
        </div>

        <div className="levels">

          <div className="level-card">
            <div>🟢</div>
            <h3>Primaire</h3>
            <p>Accompagnement et renforcement des bases.</p>
          </div>

          <div className="level-card">
            <div>🔵</div>
            <h3>1ère Année Moyenne</h3>
            <p>Consolidation des connaissances.</p>
          </div>

          <div className="level-card">
            <div>🔵</div>
            <h3>2ème Année Moyenne</h3>
            <p>Progression et entraînement.</p>
          </div>

          <div className="level-card">
            <div>🔵</div>
            <h3>3ème année moyenne</h3>
            <p>Préparation et amélioration du niveau.</p>
          </div>

          <div className="level-card">
            <div>⭐</div>
            <h3>4ème année moyenne</h3>
            <p>Préparation au BEM.</p>
          </div>

        </div>
      </section>


      {/* PROGRAMME */}
      <section id="programme" className="section">
        <div className="section-title">
          <span>Organisation</span>
          <h2>Notre programme</h2>
          <p>Un rythme régulier pour progresser efficacement.</p>
        </div>

        <div className="schedule">

          <div className="day-card">
            <div className="day-icon">📅</div>
            <div>
              <span>Vendredi</span>
              <h3>3 heures de cours</h3>
              <p>Mathématiques & exercices</p>
            </div>
          </div>

          <div className="day-card">
            <div className="day-icon">📅</div>
            <div>
              <span>Samedi</span>
              <h3>3 heures de cours</h3>
              <p>Physique & exercices</p>
            </div>
          </div>

        </div>
      </section>


      {/* TARIF */}
      <section id="tarif" className="price-section">
        <div className="price-card">

          <div>
            <span className="price-label">Tarif mensuel</span>

            <h2>
              1000 <small>DA</small>
            </h2>

            <p>
              Un prix simple et accessible pour un accompagnement
              régulier.
            </p>
          </div>

          <div className="price-features">
            <p>✓ Mathématiques</p>
            <p>✓ Physique</p>
            <p>✓ arabe</p>
            <p>✓ 6 heures par semaine</p>
            <p>✓ Vendredi & Samedi</p>
            <p>✓ Exercices et suivi</p>
          </div>

          <a href="#inscription" className="primary-btn">
            Je veux m'inscrire →
          </a>

        </div>
      </section>


      {/* POURQUOI NOUS */}
      <section className="section">
        <div className="section-title">
          <span>Notre objectif</span>
          <h2>Pourquoi choisir nos cours ?</h2>
        </div>

        <div className="advantages">

          <div>
            <span>🎯</span>
            <h3>Objectif réussite</h3>
            <p>Un travail régulier pour améliorer les résultats.</p>
          </div>

          <div>
            <span>🧠</span>
            <h3>Explications simples</h3>
            <p>Les notions sont expliquées de manière claire.</p>
          </div>

          <div>
            <span>📝</span>
            <h3>Beaucoup de pratique</h3>
            <p>Des exercices pour maîtriser les méthodes.</p>
          </div>

          <div>
            <span>👨‍🏫</span>
            <h3>Accompagnement</h3>
            <p>Un suivi régulier pour identifier les difficultés.</p>
          </div>

        </div>
      </section>


      {/* INSCRIPTION */}
      <section id="inscription" className="registration-section">
        <div className="registration-content">

          <div>
            <span>📩 Inscription</span>

            <h2>
              Prêt à commencer ?
            </h2>

            <p>
              Pour inscrire votre enfant ou obtenir plus
              d'informations, contactez-nous directement.
            </p>

            <a href="tel:0558178942" className="phone">
              📞 0558 17 89 42
            </a>
          </div>

          <div className="registration-box">
            <h3>Demander une inscription</h3>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="nom_eleve"
                placeholder="Nom et prénom de l'élève"
                required
              />

              <select name="niveau" defaultValue="" required>
                <option value="" disabled>
                  Choisir le niveau
                </option>
                <option>Primaire</option>
                <option>1 ère année moyenne</option>
                <option>2 ème année moyenne</option>
                <option>3 ème année moyenne</option>
                <option>4 ème année moyenne</option>
              </select>

              <select name="matiere" defaultValue="" required>
                <option value="" disabled>
                  Choisir la matière
                </option>
                <option>Mathématiques</option>
                <option>Physique</option>
                <option>Mathématiques + Physique</option>
              </select>

              <input
                type="tel"
                name="telephone_parent"
                placeholder="Numéro du parent"
                required
              />

              <button type="submit" disabled={sending}>
               {sending ? 'Envoi en cours...' : 'Envoyer la demande →'}
              </button>

              {message && (
                <p className="form-message">
                  {message}
                </p>
              )}
            </form>

            <p className="form-note">
              Nous vous contacterons pour confirmer l'inscription.
            </p>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <div className="logo">
          📚 Math<span>&</span>Physique
        </div>

        <p>
          Cours particuliers de Mathématiques & Physique
          <br />
          Primaire & CEM
        </p>

        <a href="tel:0558178942">
          📞 0558 17 89 42
        </a>

        <small>
          © 2026 Math & Physique — Tous droits réservés.
        </small>
      </footer>

    </div>
  )
}

export default App