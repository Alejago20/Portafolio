import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Configuración de partículas
const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#000000", // Color de fondo oscuro
    },
    image: "url('https://images.pexels.com/photos/7736101/pexels-photo-7736101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover", // Asegúrate de que la imagen cubra el área
    opacity: 1,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.1,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff", // Color de las partículas blanco
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

// Componente de fondo de partículas
const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <div style={{
        position: 'fixed', // Cambiado a fixed para estar siempre en el fondo
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',// Asegúrate de que esté detrás del contenido principal
        overflow: 'hidden' ,
        pointerEvents: "none", 
         // Asegura que las partículas no se salgan del contenedor
      }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: "none", 
            zIndex: -1, 
          }}
        />
      </div>
    );
  }

  return null;
};

export default ParticlesBackground;
