import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Myportfolio() {
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/lucasnarfgren/repos')
            .then(res => res.json())
            .then(data => {
                setName((prevname) => [...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    url: data[3].html_url
                }
                ]);
            });
    }, []);


    return (
        <div className="App">
            <nav>
                <ul className="my-list">
                    <li>
                        <Link to="/mygitpage/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mygitpage/about">About</Link>
                    </li>
                    <li>
                        <Link to="/mygitpage/privacy">Privacy</Link>
                    </li>
                    <li>My Portfolio</li>
                </ul>
            </nav>
            <main>
                <h2>Mina Publika Github Projekt</h2>
                {name.map((names) => (
                    <>
                        <h3>
                            {names.name}
                        </h3>
                        <p>{names.description}</p>
                        <p><a href={names.html_url}>Link to Repository</a></p>
                    </>
                ))
                }
            </main>

        </div>
    )
}