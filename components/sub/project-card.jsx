// components/sub/project-card.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Stars, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// 3D Floating Cube Component
const FloatingCube = ({ color = "#7042f8", hovered = false }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={hovered ? 2 : 1}
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.2}
          distort={hovered ? 0.4 : 0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

// 3D Sphere Component
const FloatingSphere = ({ color = "#3b82f6", hovered = false }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={hovered ? 1.5 : 0.8}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.6 : 0.1}
          distort={hovered ? 0.3 : 0.1}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

// 3D Torus Knot Component
const FloatingTorusKnot = ({ color = "#f97316", hovered = false }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={hovered ? 2 : 1}
    >
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.4, 0.1, 100, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.7 : 0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

// Main Project Card Component
export const ProjectCard = ({
  src,
  title,
  description,
  technologies = [],
  link,
  github,
  features = [],
  category,
}) => {
  const [hovered, setHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);
  
  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);
  
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = e.clientX - rect.left - width / 2;
    const mouseYRelative = e.clientY - rect.top - height / 2;
    
    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };
  
  // Choose random 3D element based on project category
  const getThreeDElement = () => {
    const elements = {
      "Full Stack": <FloatingCube color="#7042f8" hovered={hovered} />,
      "MERN Stack": <FloatingSphere color="#3b82f6" hovered={hovered} />,
      "Full Stack + Mobile": <FloatingTorusKnot color="#f97316" hovered={hovered} />,
      "Mobile App": <FloatingSphere color="#10b981" hovered={hovered} />,
      "Fintech": <FloatingCube color="#f59e0b" hovered={hovered} />,
    };
    return elements[category] || <FloatingCube color="#7042f8" hovered={hovered} />;
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-[400px] h-[500px] perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Main Card */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden border border-[#7042f88b] bg-[#030014] backdrop-blur-sm cursor-pointer"
        animate={{
          boxShadow: hovered
            ? "0 20px 40px rgba(112, 66, 248, 0.3), 0 0 0 2px rgba(112, 66, 248, 0.5)"
            : "0 10px 30px rgba(0, 0, 0, 0.5)",
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {/* Three.js Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars count={500} depth={50} factor={4} fade speed={1} />
            <Sparkles count={20} scale={2} size={2} speed={0.4} color="#7042f8" />
            {hovered && (
              <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                {/* {getThreeDElement()} */}
              </Float>
            )}
          </Canvas>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
          
          {/* Category Badge */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#030014] border border-[#7042f88b] text-xs text-purple-300"
            animate={{
              scale: hovered ? 1.1 : 1,
              backgroundColor: hovered ? "#7042f8" : "#030014",
            }}
          >
            {category}
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6 z-10">
          <motion.h3
            className="text-2xl font-bold text-white mb-2"
            animate={{
              color: hovered ? "#b49bff" : "#ffffff",
            }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-gray-400 text-sm mb-4 line-clamp-3"
            animate={{
              color: hovered ? "#d1d5db" : "#9ca3af",
            }}
          >
            {description}
          </motion.p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech, index) => (
              <motion.span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-[#1a1a2e] text-purple-300 border border-[#7042f88b]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "#7042f8", color: "#ffffff" }}
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-full bg-[#1a1a2e] text-gray-400">
                +{technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 py-2 text-center text-sm bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </motion.a>
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 text-sm border border-[#7042f88b] rounded-lg text-gray-300 hover:bg-[#7042f8] hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: hovered
              ? "inset 0 0 30px rgba(112, 66, 248, 0.3)"
              : "inset 0 0 0px rgba(112, 66, 248, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Expanded Details Modal */}
      {showDetails && (
        <motion.div
          className="absolute inset-0 z-20 bg-[#030014] rounded-2xl border border-[#7042f88b] overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 180 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Three.js Background for Details */}
          <div className="absolute inset-0 opacity-20">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <Stars count={300} depth={30} factor={2} fade />
              <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
                <FloatingCube color="#7042f8" hovered={true} />
              </Float>
            </Canvas>
          </div>

          <div className="relative p-6 h-full overflow-y-auto z-10">
            <motion.button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a1a2e] border border-[#7042f88b] text-white flex items-center justify-center hover:bg-purple-600 transition-colors"
              onClick={() => setShowDetails(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h2>

            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">📋 Full Description</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{description}</p>
              </div>

              {features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">✨ Key Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">🛠️ Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[#1a1a2e] text-purple-300 border border-[#7042f88b]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "#7042f8" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <motion.a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 py-3 text-center bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo
              </motion.a>
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 py-3 text-center border border-[#7042f88b] rounded-lg text-gray-300 hover:bg-[#7042f8] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Source Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};