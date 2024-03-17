import React, { useState, useEffect } from 'react';

export default function AboutPage() {
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

    return <div>
        <h1>About</h1>
    </div>
}