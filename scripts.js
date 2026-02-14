// ===== КНОПКА ПРИЗНАНИЯ =====
const btn = document.getElementById("loveBtn");
const hiddenText = document.getElementById("hiddenText");

btn.addEventListener("click", () => {
  hiddenText.classList.add("show");
  btn.style.display = "none";
});


// ===== ПАДАЮЩИЕ СЕРДЕЧКИ =====
const canvas = document.getElementById("hearts-bg");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const hearts = [];

function newHeart(){
  const colors = ["#ff4d88","#ff9ecb","#ffffff","#ffd1dc"];

  hearts.push({
    x: Math.random()*canvas.width,
    y: -20,
    size: 12 + Math.random()*18,
    speed: 0.6 + Math.random()*1.2,
    drift: (Math.random()-0.5)*0.6,
    alpha: 0.5 + Math.random()*0.5,
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(Math.random()<0.06) newHeart();

  for(let i=hearts.length-1;i>=0;i--){
    const h = hearts[i];

    h.y += h.speed;
    h.x += h.drift;

    ctx.globalAlpha = h.alpha;
    ctx.font = `${h.size}px serif`;
    ctx.fillStyle = h.color;
  ctx.fillText("❤", h.x, h.y);


    if(h.y > canvas.height+30) hearts.splice(i,1);
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

draw();
