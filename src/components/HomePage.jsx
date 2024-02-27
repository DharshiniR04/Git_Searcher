import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../css/HomePage.css';
import Video from '../assets/background.mp4';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import User from "./User";
import Repo from "./Repo";

function HomePage() {
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);

  // useEffect(() => {
  //   console.log("User:", user);
  //   console.log("Repositories:", repo);
  // }, [user, repo]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowNavbar(window.scrollY <= 650); 
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleSearch = async (username) => {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

      setUser(userResponse);
      setRepo(reposResponse.data);
      console.log(user, repo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <video autoPlay muted loop>
        <source src={Video} />
      </video>
     <Navbar />
      <SearchBar onSearch={handleSearch} />
      <User user={user} />
      <Repo repositories={repo}/>
      {/* <div id="Footer">
         <p>CopyRights@Dharshini</p>
      </div> */}
    </div>
  );
}

export default HomePage;
