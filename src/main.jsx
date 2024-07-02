import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../src/assets/css/main.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "./components/transition/Transition";

const Loader = () => (
  <div className="flex justify-center items-center h-screen top-0 z-0 fixed w-full bg-transparent inset-0">
    <div className="loader"></div>
  </div>
);

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Transition key="transition" />
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <App />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Toaster />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
