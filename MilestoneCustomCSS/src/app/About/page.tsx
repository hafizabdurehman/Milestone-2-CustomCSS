import { Users, Trophy, Building2, Globe } from 'lucide-react';

export default function About() {
  return (
     //About section
    <main>
      <section className="section">

        <div className="container">

          <div className="about-grid">

            <div>

              <h1 className="section-title" style={{ textAlign: 'left' }}>About Our Company</h1>

              <p className="text-lg text-gray-600 mb-6">
                We are a team of passionate professionals dedicated to delivering exceptional
                digital solutions. With years of experience and a commitment to excellence,
                we help businesses transform their digital presence.
              </p>

              <p className="text-lg text-gray-600">
                Our mission is to empower businesses with innovative technology solutions
                that drive growth and success in the digital age. We believe in creating
                lasting partnerships with our clients and delivering results that exceed
                expectations.
              </p>

            </div>

              {/* About Image here */}
            <div className="about-image">

              <img
                src="/Aboutimage.avif"
                alt="Our team"
              />

            </div>

          </div>
           
           {/* More details */}
          <div className="stats-grid">

            <div className="stat-card">

              <Users size={32} className="mx-auto mb-4 text-primary" />

              <div className="stat-number">100+</div>

              <div className="stat-label">Happy Clients</div>
                <br />
            </div>
            
            <div className="stat-card">

              <Trophy size={32} className="mx-auto mb-4 text-primary" />

              <div className="stat-number">15+</div>

              <div className="stat-label">Projects Completed</div>
                <br />
            </div>

            <div className="stat-card">

              <Building2 size={32} className="mx-auto mb-4 text-primary" />

              <div className="stat-number">1+</div>

              <div className="stat-label">Years Experience</div>
                 <br />
            </div>

            <div className="stat-card">

              <Globe size={32} className="mx-auto mb-4 text-primary" />

              <div className="stat-number">3+</div>

              <div className="stat-label">Countries Served</div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}