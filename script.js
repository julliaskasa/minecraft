 // плавна прокрутка
document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const id = btn.getAttribute('data-scroll');
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  });
});

// контент модалки
const players = {
  dream: `
    <h3>Dream</h3>
    <p>Dream — популярний ютубер і стрімер, відомий своїми швидкісними забігами у Minecraft.</p>
  `,
  technoblade: `
    <h3>Technoblade</h3>
    <p>Technoblade — легендарний PvP-гравець, чия майстерність і гумор зробили його іконою спільноти.</p>
  `,
  cap: `
    <h3>CaptainSparklez</h3>
    <p>Відомий завдяки своїм музичним пародіям і картам. Його контент — частина історії Minecraft YouTube.</p>
  `,
  hermit: `
    <h3>HermitCraft</h3>
    <p>Спільнота креативних творців, які створюють грандіозні світи у своїх сезонах Minecraft.</p>
  `
};

// відкриття модалки
document.querySelectorAll('[data-player]').forEach(b=>{
  b.addEventListener('click',()=>{
    const id = b.getAttribute('data-player');
    document.getElementById('modalContent').innerHTML = players[id] || '<p>Немає інформації</p>';
    document.getElementById('modal').classList.add('open');
  });
});

// закриття модалки
document.getElementById('closeBtn').addEventListener('click',()=>{
  document.getElementById('modal').classList.remove('open');
});

// закриття по кліку на фон
document.getElementById('modal').addEventListener('click',e=>{
  if(e.target.id==='modal')document.getElementById('modal').classList.remove('open');
});
