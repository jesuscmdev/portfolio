import React from "react";

function About() {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="row">
            <div className="columns">
              <div className="col-1">
                <h2>
                  <div className="line">
                    <span> HEY, SOY YISUS </span>
                  </div>
                  <div className="linea-abajo"> </div>
                </h2>
                <div className="texto">
                  <p>
                    Hola, soy Jesus Cortes Morales, Ingeniero en sistemas
                    computacionales y actualmente Desarrollador Web.
                  </p>
                  <p>
                    Me encanta codear y tengo la fortuna de hacer eso como mi
                    trabajo. Trabajo para THK Marketing desarrollando sitios
                    web, landing pages, e-commerce entre otras cosas del mundo
                    web.
                  </p>
                  <p>
                    Soy apasionado de React y JavaScript pero también trabajo
                    con PHP, WordPress y otras Tecnologías
                  </p>
                </div>
              </div>
              <div className="col-2"> ¿Qué puedo desarrolar ?</div>
            </div>
          </div>
        </div>
      </section>
      <section className="cases">
        <div className="container-fluid">
          <div className="row">
            <div className="case">
              <div className="case-details">
                <h2>Hola</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
