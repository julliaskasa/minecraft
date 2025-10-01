// Smooth scroll
    document.querySelectorAll('[data-scroll]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const id = btn.getAttribute('data-scroll');
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
      })
    })

    const players = {
      dream: `
        <h3>Dream</h3>
        <p>Dream — популярний ютубер, відомий своїми серіями по виживанню і швидкісними челенджами. Його контент вплинув на популярність Minecraft серед молодших гравців.</p>
      `,
      technoblade: `
        <h3>Technoblade</h3>
        <p>Technoblade був відомим PvP-гравцем і стрімером. Його техніка бою і харизма зробили його легендою спільноти.</p>
      `,
      cap: `
        <h3>CaptainSparklez</h3>
        <p>Його музичні пародії і пригодницькі карти мали великий вплив на фан-культуру Minecraft.</p>
      `,
      hermit: `
        <h3>HermitCraft</h3>
        <p>HermitCraft — це група творців, які роблять складні будови і великі проєкти у спільному світі.</p>
      `
    }

    document.querySelectorAll('[data-player]').forEach(b=>{
      b.addEventListener('click',()=>{
        const id = b.getAttribute('data-player');
        document.getElementById('modalContent').innerHTML = players[id] || '<p>Немає інформації</p>';
        document.getElementById('modal').classList.add('open');
      })
    })
    document.getElementById('closeBtn').addEventListener('click',()=>document.getElementById('modal').classList.remove('open'))
    // close on outside click
    document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')document.getElementById('modal').classList.remove('open')})
