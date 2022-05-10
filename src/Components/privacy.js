import {Link} from "react-router-dom";

export default function Privacy() {
    return (
      <>
        <nav>
          <ul className="my-list">
            <li>
              <Link to="/mygitpage/">Home</Link>
            </li>
            <li>
              <Link to="/mygitpage/about">About</Link>
            </li>
            <li>
            <Link to="/mygitpage/myportfolio">My Portfolio</Link>
          </li>
            <li>Privacy</li>
          </ul>
        </nav>
        <main>
          <h2>Privacy</h2>
          <p>We are very private . . .</p>
        </main>
      </>
    );
  }
