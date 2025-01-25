import { Code, LineChart, Palette, Check } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Create modern, responsive websites that drive results.',
    icon: <Code size={24} />,
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Web application development',
      'Responsive design',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Reach your target audience and grow your online presence.',
    icon: <LineChart size={24} />,
    features: [
      'Search engine optimization (SEO)',
      'Social media marketing',
      'Content marketing',
      'Email marketing',
    ],
  },
  {
    title: 'Brand Strategy',
    description: 'Build a strong, memorable brand that connects with customers.',
    icon: <Palette size={24} />,
    features: [
      'Brand identity design',
      'Brand messaging',
      'Visual design',
      'Brand guidelines',
    ],
  },
];

export default function Services() {
  return (
    <main>
      <section className="section">

        <div className="container">

          <h1 className="section-title">Our Services</h1>

          <div className="cards-grid">

            {services.map((service, index) => (

              <div key={index} className="service-card">

                <div className="service-icon">

                  {service.icon}

                </div>

                <h3 className="card-title">{service.title}</h3>

                <p className="card-text">{service.description}</p>

                <div className="service-features">

                  {service.features.map((feature, idx) => (

                    <div key={idx} className="feature-item">

                      <Check size={18} className="feature-icon" />

                      <span>{feature}</span>

                    </div>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      
    </main>
  );
}