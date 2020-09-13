import React from 'react'
import { ReactComponent as Casesnext } from '../assets/arrow-right.svg'
import { ReactComponent as Casesprev } from '../assets/arrow-left.svg'

const caseStudies = [
    {
        id: 1,
        title: "Skills",
        subtitle: "Desarrollo Web",
        desc: "FrontEnd, Backend, UI/UX Designer",
        button: "Ver proyectos recientes"
    },
    {
        id: 2,
        title: "Tecnologías",
        subtitle: "",
        desc: "Node JS, Mongo DB, React, Gsap, Docker, WordPress, SCSS"
    },
    {
        id: 3,
        title: "Servicios",
        subtitle: "",
        desc: "Sitios y Aplicaciones Web, Administración de servidores, Hosting, Gestión de correos institucionales "
    },

]



function Cases() {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="row">
                    {
                        caseStudies.map((caseItem) => (
                            <div className="case" key={caseItem.id}>
                                <div className="case-details">
                                    <h2>{caseItem.title}</h2>
                                    <span>{caseItem.subtitle}</span>
                                    <span>{caseItem.desc}</span>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    )
}

export default Cases

