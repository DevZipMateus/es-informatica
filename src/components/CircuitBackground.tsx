
import React, { useRef, useEffect } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cores para personalização
  const backgroundColor = '#222222'; // Cinza-médio escuro
  const lineColor = '#ff0000';       // Vermelho vivo

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Ajusta o tamanho do canvas para preencher o container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const gridSize = 25; // Tamanho dos segmentos do circuito
    const particleCount = 70; // Quantidade de "pacotes de dados" na tela

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
        this.ttl = Math.random() * 200 + 100; // Time to live (tempo de vida)
        this.life = this.ttl;
        this.history = [];

        // Define uma direção inicial aleatória (cima, baixo, esquerda, direita)
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

        // Adiciona a posição atual ao histórico para desenhar o rastro
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 20) { // Limita o tamanho do rastro
          this.history.shift();
        }

        this.x += this.vx * gridSize;
        this.y += this.vy * gridSize;

        // Chance de mudar de direção em cada "cruzamento"
        if (Math.random() > 0.95) {
          const directions = (this.vx === 0) ? [[-1, 0], [1, 0]] : [[0, -1], [0, 1]];
          const [vx, vy] = directions[Math.floor(Math.random() * 2)];
          this.vx = vx;
          this.vy = vy;
        }

        // Se sair da tela, reseta
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        // Desenha o rastro
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

        // Desenha a "cabeça" da partícula
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = lineColor;
        ctx.fill();
      }
    }

    // Inicia as partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Desenha um fundo semi-transparente para criar o efeito de "fade"
      ctx.fillStyle = `rgba(34, 34, 34, 0.2)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Limpeza ao desmontar o componente
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [lineColor, backgroundColor]); // Roda o efeito novamente se as cores mudarem

  return (
    <canvas 
      ref={canvasRef} 
      className="block w-full h-full"
    />
  );
};

export default CircuitBackground;
