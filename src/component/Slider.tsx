import React from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from './AnimatedText';

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Tienda Celulares 2024',
    image: '/images/proyecto.png',
    link: 'https://celularesbara.netlify.app/',
  },
];

const ProjectSlider: React.FC = () => {
  if (projects.length === 0) {
    return <p>No projects to display.</p>;
  }

  const settings: Settings = {
    dots: true,
    infinite: projects.length > 1,
    speed: 500,
    slidesToShow: Math.min(2, projects.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slider-container"
      style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: '138px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        paddingLeft: '10px',
        paddingRight: '10px',
        boxSizing: 'border-box',
        color: 'white',
      }}
    >
      {/* Título arriba del slider */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <AnimatedText message="Proyecto" />
      </div>

      {/* Slider de proyectos */}
      <Slider {...settings}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  aspectRatio: '4 / 3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#111',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <p
                style={{
                  marginTop: '10px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {project.title}
              </p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
