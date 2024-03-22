import React, { useState, useEffect } from 'react';

export default function AboutPage() {
    const [profile, setProfile] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await fetch('api/profile');
                const data = await response.json();

                const imageResponse = await fetch('api/about-image');
                const imageData = await imageResponse.json();

                setProfile(data);
                setImage(imageData);
            } catch(err) {
                console.log(err)
            }
        }
        fetchProfile();
    }, []);

    return <div>
        <h1>About</h1>
        <img src={ image[0] ? image[0].image_blob : "" } />
        <p>{profile[0] ? profile[0].blurb : ""}</p>
    </div>
}