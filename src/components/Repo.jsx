import React from "react";
import '../css/Repo.css';
import Video from '../assets/background.mp4';


function Repo({ repositories }) {

  if (!Array.isArray(repositories)) {
    return <p>No repositories found.</p>;
  }

  return (
    
    <div id="back">
       <video autoPlay muted loop>
        <source src={Video} />
      </video>
    <div id="repo">
      <h2>Repositories</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Language: {repo.language}</p>
            <p>Stars: {repo.stargazers_count}</p>
            {repo.homepage && (
              <p>
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Repo;
