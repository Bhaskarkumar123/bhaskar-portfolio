const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

const glow = document.querySelector(".mouse-glow");

let width;
let height;

let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};


function resizeCanvas() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


window.addEventListener("mousemove", (event) => {

    mouse.x = event.clientX;
    mouse.y = event.clientY;

    glow.style.left = `${mouse.x}px`;
    glow.style.top = `${mouse.y}px`;

});


/* =========================
   PARTICLES
========================= */

const particles = [];

const particleCount = 90;


for (let i = 0; i < particleCount; i++) {

    particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,

        radius: Math.random() * 1.5 + 0.5
    });

}


function drawParticles() {

    ctx.clearRect(0, 0, width, height);


    for (let i = 0; i < particles.length; i++) {

        const particle = particles[i];


        particle.x += particle.vx;
        particle.y += particle.vy;


        if (particle.x < 0 || particle.x > width) {
            particle.vx *= -1;
        }


        if (particle.y < 0 || particle.y > height) {
            particle.vy *= -1;
        }


        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(61, 240, 255, 0.65)";

        ctx.fill();


        for (let j = i + 1; j < particles.length; j++) {

            const other = particles[j];

            const dx = particle.x - other.x;
            const dy = particle.y - other.y;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );


            if (distance < 130) {

                const opacity =
                    (1 - distance / 130) * 0.18;


                ctx.beginPath();

                ctx.moveTo(
                    particle.x,
                    particle.y
                );

                ctx.lineTo(
                    other.x,
                    other.y
                );

                ctx.strokeStyle =
                    `rgba(124, 92, 255, ${opacity})`;

                ctx.lineWidth = 0.6;

                ctx.stroke();

            }

        }

    }


    requestAnimationFrame(drawParticles);

}


drawParticles();