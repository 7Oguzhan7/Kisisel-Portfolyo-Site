import React, { useEffect, useRef } from 'react';
import './Background3D.css';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * width;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = (Math.random() - 0.5) * 1.2;
        this.zSpeed = (Math.random() - 0.5) * 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.zSpeed;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
        if (this.z < 0 || this.z > width) this.zSpeed *= -1;

        // 3D Perspective projection
        this.scale = width / (this.z + width / 2);
        this.projectedX = (this.x - width / 2) * this.scale + width / 2;
        this.projectedY = (this.y - height / 2) * this.scale + height / 2;
        this.projectedSize = this.size * this.scale;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.projectedX, this.projectedY, Math.abs(this.projectedSize), 0, Math.PI * 2);
        
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        const color = isLight ? 'rgba(139, 92, 246, ' : 'rgba(255, 255, 255, ';
        
        const opacity = (1 - this.z / width) * 0.8;
        ctx.fillStyle = `${color}${opacity > 0 ? opacity : 0})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections to form 3D mesh
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].projectedX - particles[j].projectedX;
          const dy = particles[i].projectedY - particles[j].projectedY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.25})`; // purple lines
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].projectedX, particles[i].projectedY);
            ctx.lineTo(particles[j].projectedX, particles[j].projectedY);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-3d"></canvas>;
};

export default Background3D;
