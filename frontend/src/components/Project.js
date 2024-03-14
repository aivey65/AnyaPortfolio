import React from 'react';

export default function Project({ id, name, description, date, links, skills }) {
    return (
        <div className="project">
            <h2>{name}</h2>
            <h3>{date}</h3>

            <p>{description}</p>
            { links.split(",").map(function(link, i) {
                return <a href={link} key={id + "link" + i}>Link</a>;
            }) }

            <ul className='skill-list'>
                { skills.split(",").map(function(skill, i) {
                    return <li className="skill-item" key={id + "skill" + i}>{skill}</li>;
                }) }
            </ul>
            
        </div>
    )
}