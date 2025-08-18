
import React, { useRef, useEffect } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- ALTERAÇÃO DE COR AQUI ---
  const backgroundColor = '#cccccc'; // Cinza claro
  const lineColor = '#ff0000';       // Vermelho vivo (mantido)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // --- CONTROLE DE VELOCIDADE ---
    let lastUpdateTime = 0;
    const updateInterval = 80;
    
    // Ajusta o tamanho do canvas para preencher o container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Define a cor de fundo inicial sólida quando o canvas é redimensionado
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const gridSize = 25;
    const particleCount = 70;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      ttl: number;
      life: number;
      history: { x: number; y: number }[];

      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.ttl = 0;
        this.life = 0;
        this.history = [];
        this.reset();
      }

      reset() {
        this.x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
        this.y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
        this.ttl = Math.random() * 200 + 100;
        this.life = this.ttl;
        this.history = [];

        const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        const [vx, vy] = directions[Math.floor(Math.random() * 4)];
        this.vx = vx;
        this.vy = vy;
      }

      update() {
        this.life--;
        if (this.life <= 0) {
          this.reset();
        }

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 20) {
          this.history.shift();
        }

        this.x += this.vx * gridSize;
        this.y += this.vy * gridSize;

        if (Math.random() > 0.95) {
          const directions = (this.vx === 0) ? [[-1, 0], [1, 0]] : [[0, -1], [0, 1]];
          const [vx, vy] = directions[Math.floor(Math.random() * 2)];
          this.vx = vx;
          this.vy = vy;
        }

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        if (this.history.length > 1) {
          ctx.moveTo(this.history[0].x, this.history[0].y);
          for (let i = 1; i < this.history.length; i++) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
          }
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = lineColor;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = lineColor;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = (currentTime: number) => {
      // --- ALTERAÇÃO DE COR AQUI ---
      // Desenha um retângulo cinza claro semi-transparente para criar o efeito de rastro
      // O RGB (204, 204, 204) corresponde ao hexadecimal #cccccc
      ctx.fillStyle = `rgba(204, 204, 204, 0.2)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.draw();
      });
      
      const deltaTime = currentTime - lastUpdateTime;

      if (deltaTime > updateInterval) {
        lastUpdateTime = currentTime;
        particles.forEach(p => {
          p.update();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [lineColor, backgroundColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="block w-full h-full"
    />
  );
};

export default CircuitBackground;
