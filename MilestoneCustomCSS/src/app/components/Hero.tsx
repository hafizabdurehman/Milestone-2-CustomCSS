import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
      //Hero section
    <section className="hero">

      <div className="container">

        <div className="hero-content">

          <div className="hero-text">

            <h1 className="hero-title">Transform Your Vision Into Reality</h1>

            <p className="hero-description">
              We create innovative solutions that help businesses thrive in the digital age.
            </p>
             
             {/* Button here */}
            <div className="button-group">

              <button className="button button-primary">Get Started</button>

              <button className="button button-outline">
                Learn More <ArrowRight size={20} />
              </button>

            </div>

          </div>
             
             {/* Image here */}
          <div className="hero-image">

            <img
              src="/Heroimage.avif"
              alt="Team collaboration"
            />

          </div>

        </div>

      </div>

    </section>
  );
}