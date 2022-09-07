import Particles from "react-particles";
import configParticles from "../config/configParticles";
import { loadFull } from "tsparticles";
import "./Animation.css";

import React, { useCallback } from "react";

function Animation() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="animation">
      <div className="particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={configParticles}
        />
      </div>
    </div>
  );
}

export default Animation;
