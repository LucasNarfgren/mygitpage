import {Link} from "react-router-dom"

export default function About() {
    return (
      <>
        <nav>
          <ul className="my-list">
            <li>
              <Link to="/mygitpage/">Home</Link>
            </li>
            <li>About</li>
            <li>
              <Link to="/mygitpage/privacy">Privacy</Link>
            </li>
            <li>
            <Link to="/mygitpage/myportfolio">My Portfolio</Link>
          </li>
          </ul>
        </nav>
        <main>
          <h2>Welcome to read more information about me</h2>
          <p>I am a man living far north in a country called sweden, </p>
          <p>
            Sweden is the largest country in the Nordic Region and has the biggest
            population. For many people, it is synonymous with flat-pack
            furniture, innovation, iron and steel. The country spends 3% of GDP on
            research and development.
          </p>
          <p>
            Sweden shares land borders with Norway in the west and Finland in the
            northeast. It also has coasts facing its Nordic neighbours Denmark,
            Norway, Åland and Finland.
          </p>
          <p>
            I am not born in sweden, but born anyway. I am intrested in music and
            i am not playing computer game anymore?
          </p>
        </main>
        <section></section>
        <footer></footer>
      </>
    );
  }
