const canvas = document.getElementById('effects');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function initParticles() {
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 4 + 1,
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`, // Added missing comma
            angle: Math.random() * Math.PI * 2
        });
    }
}

function drawWorm() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of particles) {
        ctx.beginPath(); // Corrected spelling
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

       
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        particle.angle += 0.02;

       
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particle.x = canvas.width / 2;
            particle.y = canvas.height / 2;
        }
    }

    requestAnimationFrame(drawWorm);
}

initParticles();
drawWorm();
