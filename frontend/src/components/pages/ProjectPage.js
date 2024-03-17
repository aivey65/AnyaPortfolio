import React, { useState, useEffect } from 'react';
import Project from '../Project';

export default function ProjectSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('api/all-projects');
                const data = await response.json();
                setProjects(data);
            } catch(err) {
                console.log(err)
            }
        }
        fetchProjects();
    }, []);

    return <div id="project-section">
        <h1>Projects</h1>
        <div id="project-container">
            { projects.map(function(item) {
                return <Project 
                    key={item.id} 
                    name={item.name} 
                    description={item.description}
                    date={item.date}
                    links={item.links}
                    skills={item.skills}
                />;
            }) }
        </div>
    </div>
}