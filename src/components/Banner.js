import React from 'react'
import { ReactComponent as RighArrow } from '../assets/arrow-right.svg'

export default function Banner() {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>CODE, EAT,</span>
                        </div>
                        <div className="line">
                            <span>SLEEP & REPEAT</span>
                        </div>
                        <div className="linea-abajo"></div>
                    </h2>
                    <div className="btn-row">
                        <a href="/about">Sobre mi <RighArrow />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

