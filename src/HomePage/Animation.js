import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Animation.css";

const configParticles = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]
    },
    shape: {
      type: ["circle", "triangle"],
      options: {
        triangle: {
          sides: 3
        }
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.3,
        sync: false
      }
    },
    size: {
      value: { min: 15, max: 30 },
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 10,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    },
    life: {
      duration: {
        sync: false,
        value: 3
      },
      count: 1,
      delay: {
        random: {
          enable: true,
          minimumValue: 0.5
        },
        value: 1
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.5
        }
      },
      push: {
        quantity: 2
      }
    }
  },
  detectRetina: true,
  fullScreen: {
    enable: false
  },
  background: {
    color: "transparent"
  }
};

function Animation() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="animation">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={configParticles}
      />
    </div>
  );
}

export default Animation;
