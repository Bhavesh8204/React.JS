import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItems from './WorksItems'


function Works() {
    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData)
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    }, [item])

    const handleclick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    }

    return (
        <div>
            <div className="work_filter">
                {projectsNav.map((items, index) => {
                    return <span onClick={(e) => { handleclick(e, index) }} className={`${active === index ? 'active-work' : ""} work_item`} key={index}>{items.name}</span>
                })}
            </div>

            <div className="work_container container grid">
                {projects.map((item) => {
                    return <WorksItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works
