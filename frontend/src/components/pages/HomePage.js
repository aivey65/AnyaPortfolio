import React, { useState, useEffect } from 'react';

export default function HomePage() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch('api/all-projects');
                const data = await response.json();
                setProfile(data);
            } catch(err) {
                console.log(err)
            }
        }
        fetchProfile();
    }, []);

    return <div id="home-section">
        <h1 id="home-title">Anya Ivey</h1>
        <h2>{profile.blurb}</h2>
    </div>
}