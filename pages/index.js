import Layout from "../components/Layout";
import { skills, experiencias, projects } from "../profile";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="ryan-ray-profile2.jpeg"
                alt="ryan-ray-profile"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h1>Rayn Ray</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                expedita minus repellendus adipisci nemo reprehenderit atque ex
                quidem sit culpa? Eaque laudantium excepturi quisquam neque.
                Nisi rem minima aliquid odit.
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, porcentaje }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiencias.map(({ title, descripcion, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to}
                  </h5>
                  <p>{descripcion}</p>
                </li>
              ))}
            </ul>
            <Link href="/experiencias">
              <a className="btn btn-light">Conoce mas</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Portafolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>

            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt="portafolio"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <Link href="/knowmore">
                      <a>Know More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Index;
