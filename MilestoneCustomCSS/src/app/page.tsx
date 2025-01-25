import Hero from './components/Hero';

const services = [
  {
    title: 'Web Development',
    description: 'Create modern, responsive websites that drive results.',
  },
  {
    title: 'Digital Marketing',
    description: 'Reach your target audience and grow your online presence.',
  },
  {
    title: 'Brand Strategy',
    description: 'Build a strong, memorable brand that connects with customers.',
  },
];

export default function Home() {
  return (
    <main>

      <Hero />
      <section className="section">

        <div className="container">

          <h2 className="section-title">Our Services</h2>

          <div className="cards-grid">

            {services.map((service, index) => (

              <div key={index} className="card">

                <h3 className="card-title">{service.title}</h3>

                <p className="card-text">{service.description}</p>

              </div>

            ))}

          </div>
          
        </div>

      </section>
    </main>
  );
}