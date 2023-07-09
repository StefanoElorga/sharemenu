import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import instagram from "./instagram.png";

const variants = {
  close: {
    x: 0,
    y: 0,
  },

  opentwitter: {
    y: -120,
    transition: { delay: 1 },
  },
  openfacebook: {
    y: 120,
    transition: { delay: 0.75 },
  },
  openwspp: {
    x: -120,
    transition: { delay: 0.5 },
  },
  openinstagram: {
    x: 120,
    transition: { delay: 0.25 },
  },
  showtext: {
    x: 0,
    opacity: 1,
  },

  hiddetext: {
    x: -120,
    opacity: 0,
  },
};
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <motion.button
        className="our-button"
        initial={{
          width: 100,
          height: 100,
          borderRadius: 10,
          border: "none",
          fontSize: 20,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        animate={isOpen ? "openbutton" : "closebutton"}
        whileHover={{ cursor: "pointer" }}
        variants={variants}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.p
          initial={{ position: "absolute" }}
          animate={isOpen ? "hiddetext" : "showtext"}
          variants={variants}
        >
          Compartir
        </motion.p>
        <motion.p
          initial={{ position: "absolute" }}
          animate={isOpen ? "showtext" : "hiddetext"}
          variants={variants}
        >
          Cerrar
        </motion.p>
      </motion.button>

      <motion.label
        initial={{
          position: "absolute",
          zIndex: 1,
          width: 100,
          height: 100,
          borderRadius: 10,
          display: "grid",
          placeContent: "center",
        }}
        animate={isOpen ? "opentwitter" : "close"}
        className="twitter"
        whileHover={{
          scale: 1.3,
          borderRadius: 100,
          cursor: "pointer",
          rotate: 360,
        }}
        variants={variants}
      >
        <motion.img src={twitter} initial={{ width: 60, height: 60 }} />
      </motion.label>

      <motion.label
        initial={{
          position: "absolute",
          zIndex: 1,
          width: 100,
          height: 100,
          borderRadius: 10,
          display: "grid",
          placeContent: "center",
        }}
        animate={isOpen ? "openfacebook" : "close"}
        whileHover={{
          scale: 1.3,
          borderRadius: 100,
          cursor: "pointer",
          rotate: 360,
        }}
        variants={variants}
        className="facebook"
      >
        <motion.img src={facebook} initial={{ width: 60, height: 60 }} />
      </motion.label>

      <motion.label
        initial={{
          position: "absolute",
          zIndex: 1,
          width: 100,
          height: 100,
          borderRadius: 10,
          display: "grid",
          placeContent: "center",
        }}
        className="wsp"
        animate={isOpen ? "openwspp" : "close"}
        whileHover={{
          scale: 1.3,
          borderRadius: 100,
          cursor: "pointer",
          rotate: 360,
        }}
        variants={variants}
      >
        <motion.img src={whatsapp} initial={{ width: 60, height: 60 }} />
      </motion.label>

      <motion.label
        initial={{
          position: "absolute",
          zIndex: 1,
          width: 100,
          height: 100,
          borderRadius: 10,
          display: "grid",
          placeContent: "center",
        }}
        className="instagram"
        animate={isOpen ? "openinstagram" : "close"}
        whileHover={{
          scale: 1.3,
          borderRadius: 100,
          cursor: "pointer",
          rotate: 360,
        }}
        variants={variants}
      >
        <motion.img src={instagram} initial={{ width: 60, height: 60 }} />
      </motion.label>
    </div>
  );
};

export default App;
