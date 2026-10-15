/* =====================================================================
   FastLearner 2 (FL2) — client-side app
   Storage: localStorage (key "fl2_db"). No backend required.
===================================================================== */

const STORAGE_KEY = "fl2_db";
const SESSION_KEY = "fl2_session";

/* ---------------------------------------------------------------------
   Seed content — two full sample books so the app is usable immediately
--------------------------------------------------------------------- */
function seedBooks(){
  return [
    {
      id: "bk_lighthouse",
      title: "The Lighthouse Keeper's Secret",
      author: "M. Alcaraz",
      language: "en",
      summary: "Mira discovers a storm-soaked letter that leads her to the lonely lighthouse keeper Tobias, and the truth about why he never leaves his post.",
      cover: { emoji: "", color1: "#1F7A67", color2: "#123832" },
      pages: [
        "Mira had lived in the small coastal town of Puerto Azul her whole life, but she had never once been inside the old lighthouse at the edge of the cliff.",
        "Every evening, she watched its light sweep across the dark water, guiding fishing boats safely home.",
        "The lighthouse keeper, an old man named Tobias, rarely spoke to anyone in town.",
        "Some children said he was hiding treasure. Others whispered he was hiding something far stranger.",
        "One stormy afternoon, Mira found a soaked, torn letter washed up on the beach near the lighthouse steps.",
        "The letter was addressed to Tobias, and it mentioned a ship that had vanished thirty years ago.",
        "Curious, Mira climbed the winding stone steps to the lighthouse door and knocked.",
        "Tobias opened the door slowly, his eyes widening when he saw the letter in her hand.",
        "\u201CWhere did you find this?\u201D he asked, his voice trembling like the wind outside.",
        "Mira explained about the storm, and Tobias invited her in \u2014 something he had never done before.",
        "Inside, the walls were covered with old maps, photographs, and a model of a ship called the Estrella.",
        "Tobias explained that the Estrella was his brother's fishing boat, lost in a storm three decades ago.",
        "He had become the lighthouse keeper so that no other family would lose someone at sea the way he had.",
        "Mira realized the \u201Csecret\u201D everyone whispered about wasn't treasure or magic \u2014 it was grief turned into purpose.",
        "From that night on, Mira visited Tobias every week, and together they kept the light burning for every ship that passed."
      ],
      questions: [
        { q:"Where did Mira live?", options:["Puerto Azul","Manila","San Diego","Cebu City"], correct:0 },
        { q:"Who was the lighthouse keeper?", options:["Diego","Tobias","Mira's father","A fisherman named Cruz"], correct:1 },
        { q:"What did Mira find washed up on the beach?", options:["A gold coin","A torn letter","A broken compass","A message in a bottle"], correct:1 },
        { q:"What was the name of the lost ship?", options:["The Estrella","The Mira","The Horizon","The Azul"], correct:0 },
        { q:"Who had been on the lost ship?", options:["Tobias himself","A stranger","Tobias's brother","Mira's grandfather"], correct:2 },
        { q:"Why did Tobias become the lighthouse keeper?", options:["To find treasure","So no other family would lose someone at sea","Because he had nowhere else to live","To watch for pirates"], correct:1 },
        { q:"What covered the walls inside the lighthouse?", options:["Paintings of Mira","Maps, photographs, and a ship model","Old newspapers","Nothing, it was bare"], correct:1 },
        { q:"What was the weather like when Mira found the letter?", options:["Sunny","Snowy","Stormy","Foggy"], correct:2 },
        { q:"What was the town's \u201Csecret\u201D really about?", options:["Buried treasure","Grief turned into purpose","A hidden cave","A sea monster"], correct:1 },
        { q:"What did Mira do after that night?", options:["She moved away","She never returned","She visited Tobias every week","She became afraid of the sea"], correct:2 }
      ]
    },
    {
      id: "bk_gubat",
      title: "Ang Lihim ng Gubat",
      author: "J. Dela Peña",
      language: "fil",
      summary: "Si Diego ay natuklasan ang isang lihim na batis sa gubat ng Bundok Makiling, at natutunan ang tunay na kahulugan ng pag-aalaga sa kalikasan.",
      cover: { emoji: "", color1: "#F0983D", color2: "#C97223" },
      pages: [
        "Si Diego ay isang batang mahilig mag-eksplorá sa gubat malapit sa kanilang nayon sa Bundok Makiling.",
        "Bawat Sabado, dala ang kanyang lumang mapa, naglalakad siya papunta sa kailaliman ng kagubatan.",
        "Sinasabi ng mga matatanda na may isang lihim na batis doon na nagbibigay ng swerte sa sinumang makakakita nito.",
        "Isang umaga, habang naglalakad si Diego, narinig niya ang isang malambing na huni ng ibong hindi niya kilala.",
        "Sinundan niya ang tunog hanggang sa isang makapal na palumpon ng mga halaman.",
        "Doon, natagpuan niya ang isang maliit na batis na kumikinang sa sikat ng araw.",
        "Sa gilid ng batis, may nakaupong matandang lalaki na naghahabi ng basket mula sa yantok.",
        "\u201CMalapit ka na, batang matapang,\u201D sabi ng matanda nang hindi man lamang tumitingin.",
        "Nagtaka si Diego kung paano niya nalaman ang tungkol sa kanya, ngunit lumapit pa rin siya.",
        "Ikinuwento ng matanda na siya ang tagapag-alaga ng gubat, at ang batis ay hindi swerte kundi gantimpala para sa mga tunay na nag-aalaga sa kalikasan.",
        "Tinuruan niya si Diego kung paano magtanim ng puno at kung paano makinig sa mga tunog ng gubat.",
        "Sa paglipas ng mga linggo, nagbago ang tingin ni Diego sa kagubatan \u2014 hindi na ito basta lugar lamang para maglibang.",
        "Naging responsibilidad niya ang alagaan ang mga puno at hayop na doon nakatira.",
        "Nang minsang bumalik siya, wala na ang matanda, ngunit nag-iwan ito ng isang liham: \u201CIpagpatuloy mo ang lihim.\u201D",
        "Mula noon, si Diego ang naging bagong tagapag-alaga ng gubat, iniingatan ang lihim na ipinagkatiwala sa kanya."
      ],
      questions: [
        { q:"Saan matatagpuan ang gubat na ginagalugad ni Diego?", options:["Bundok Makiling","Palawan","Baguio","Batangas"], correct:0 },
        { q:"Anong araw karaniwang pumupunta si Diego sa gubat?", options:["Linggo","Sabado","Miyerkules","Biyernes"], correct:1 },
        { q:"Anong tunog ang sinundan ni Diego?", options:["Tunog ng ilog","Huni ng ibon","Tunog ng kulog","Tunog ng hayop na tumatakbo"], correct:1 },
        { q:"Sino ang natagpuan niya sa tabi ng batis?", options:["Isang bata","Matandang lalaki na naghahabi ng basket","Isang mangangaso","Wala siyang nakita"], correct:1 },
        { q:"Ano ang ginagawa ng matanda gamit ang yantok?", options:["Naghahabi ng basket","Nagluluto","Nagtatanim","Nangingisda"], correct:0 },
        { q:"Ayon sa matanda, ano talaga ang batis?", options:["Isang uri ng gamot","Gantimpala para sa nag-aalaga sa kalikasan","Isang lumang alamat lamang","Isang mapanganib na lugar"], correct:1 },
        { q:"Ano ang itinuro ng matanda kay Diego?", options:["Magluto ng pagkain","Magtanim ng puno at makinig sa gubat","Gumawa ng bangka","Maghabi ng damit"], correct:1 },
        { q:"Ano ang nangyari sa tingin ni Diego sa gubat pagkaraan?", options:["Hindi ito nagbago","Naging takot siya rito","Naging responsibilidad niya ito","Kinalimutan niya ito"], correct:2 },
        { q:"Ano ang iniwan ng matanda bago mawala?", options:["Isang mapa","Isang liham","Isang basket","Wala siyang iniwan"], correct:1 },
        { q:"Ano ang naging bagong tungkulin ni Diego?", options:["Naging guro","Naging tagapag-alaga ng gubat","Naging mangingisda","Umalis sa nayon"], correct:1 }
      ]
    }
  ];
}

function seedDB(){
  const adminId = "u_admin_demo";
  const stud1 = "u_student_demo";
  const classroomId = "c_demo01";
  const books = seedBooks();
  return {
    users: [
      { id: adminId, username:"admin", password:"admin123", role:"admin", name:"Ms. Santos", points:0, badges:[], joinedClassrooms:[classroomId], booksCompleted:[] },
      { id: stud1, username:"student", password:"student123", role:"student", name:"Ana Cruz", points:120, badges:["first_book"], joinedClassrooms:[classroomId], booksCompleted:["bk_lighthouse"] }
    ],
    classrooms: [
      { id: classroomId, name:"Grade 6 — Reading Circle", code:"DEMO01", adminId, studentIds:[stud1] }
    ],
    books: books.map(b => ({
      ...b,
      createdBy: adminId,
      global: true,
      assignments: [{ classroomId, dueDate: futureDateStr(10) }]
    })),
    progress: [
      { id:"p1", userId:stud1, bookId:"bk_lighthouse", currentPage:14, completed:true, quizScore:8, pointsEarned:90, completedAt: new Date(Date.now()-86400000*2).toISOString() }
    ]
  };
}

function futureDateStr(days){
  const d = new Date(); d.setDate(d.getDate()+days);
  return d.toISOString().slice(0,10);
}

/* ---------------------------------------------------------------------
   Storage helpers
--------------------------------------------------------------------- */
let DB = null;
function loadDB(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){ DB = JSON.parse(raw); }
    else { DB = seedDB(); saveDB(); }
  }catch(e){ DB = seedDB(); saveDB(); }
}
function saveDB(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(DB)); }

function getSession(){
  try{ return JSON.parse(localStorage.getItem(SESSION_KEY)); }catch(e){ return null; }
}
function setSession(userId){ localStorage.setItem(SESSION_KEY, JSON.stringify({userId})); }
function clearSession(){ localStorage.removeItem(SESSION_KEY); }

function currentUser(){
  const s = getSession();
  if(!s) return null;
  return DB.users.find(u => u.id === s.userId) || null;
}

function uid(prefix){ return prefix + "_" + Math.random().toString(36).slice(2,9) + Date.now().toString(36).slice(-3); }
function genCode(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let c = "";
  for(let i=0;i<6;i++) c += chars[Math.floor(Math.random()*chars.length)];
  return c;
}
function esc(str){
  const d = document.createElement("div"); d.textContent = str == null ? "" : String(str); return d.innerHTML;
}
function initials(name){
  return (name||"?").trim().split(/\s+/).slice(0,2).map(w=>w[0]?.toUpperCase()||"").join("");
}
function fmtDate(iso){
  if(!iso) return "";
  const d = new Date(iso + (iso.length<=10 ? "T00:00:00" : ""));
  return d.toLocaleDateString(undefined, {month:"short", day:"numeric", year:"numeric"});
}
function isOverdue(dueDate){
  if(!dueDate) return false;
  return new Date(dueDate+"T23:59:59") < new Date();
}

/* ---------------------------------------------------------------------
   Toast + confetti
--------------------------------------------------------------------- */
function toast(msg, kind){
  const stack = document.getElementById("toast-stack");
  const el = document.createElement("div");
  el.className = "toast" + (kind ? " "+kind : "");
  el.textContent = msg;
  stack.appendChild(el);
  setTimeout(()=>{ el.style.opacity="0"; el.style.transition="opacity .3s"; setTimeout(()=>el.remove(),300); }, 3200);
}
function confettiBurst(){
  const colors = ["#F0983D","#E15C4B","#E7B84B","#1F7A67","#123832"];
  for(let i=0;i<46;i++){
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = Math.random()*100 + "vw";
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (2.2 + Math.random()*1.6) + "s";
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(), 4000);
  }
}

/* ---------------------------------------------------------------------
   Router
--------------------------------------------------------------------- */
let ROUTE = { screen:"auth", params:{} };

function go(screen, params={}){
  ROUTE = { screen, params };
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}

function render(){
  const app = document.getElementById("app");
  const user = currentUser();

  if(!user){
    app.innerHTML = renderAuth();
    bindAuthEvents();
    document.getElementById("chatbot-root").innerHTML = "";
    return;
  }

  let body = "";
  switch(ROUTE.screen){
    case "student-home": body = renderStudentHome(user); break;
    case "library": body = renderLibrary(user); break;
    case "reader": body = renderReader(user, ROUTE.params.bookId); break;
    case "quiz": body = renderQuiz(user, ROUTE.params.bookId); break;
    case "leaderboard": body = renderLeaderboard(user); break;
    case "achievements": body = renderAchievements(user); break;
    case "admin-home": body = renderAdminHome(user); break;
    case "admin-classroom": body = renderAdminClassroom(user, ROUTE.params.classroomId, ROUTE.params.tab||"books"); break;
    default: body = user.role === "admin" ? renderAdminHome(user) : renderStudentHome(user);
  }

  app.innerHTML = renderNav(user) + `<div class="page"><div class="wrap">${body}</div></div>`;
  bindNavEvents(user);
  bindScreenEvents(user);
  renderChatbot(user);
}

/* ---------------------------------------------------------------------
   Nav
--------------------------------------------------------------------- */
function renderNav(user){
  const links = user.role === "admin"
    ? [["admin-home"," Classrooms"], ["leaderboard"," Leaderboard"]]
    : [["student-home"," Home"], ["library"," Library"], ["leaderboard"," Leaderboard"], ["achievements","🎖 Achievements"]];

  const linkHtml = links.map(([r,label])=>{
    const active = ROUTE.screen===r || (r==="admin-home" && ROUTE.screen==="admin-classroom");
    return `<button class="nav-link ${active?'active':''}" data-nav="${r}">${label}</button>`;
  }).join("");

  return `
  <div class="topnav">
    <div class="topnav-inner">
      <div class="brand" data-nav="${user.role==='admin'?'admin-home':'student-home'}">
        <div class="brand-mark"></div>
        <div class="brand-text">FastLearner 2<small>FL 2 · READ · PLAY · GROW</small></div>
      </div>
      <nav class="nav-links" id="navLinks">${linkHtml}
        <button class="nav-link" data-action="logout" style="color:var(--coral);">↩ Log out</button>
      </nav>
      <div class="nav-right">
        ${user.role==='student' ? `<div class="points-pill">✨ ${user.points} pts</div>` : ""}
        <div class="avatar" title="${esc(user.name)}">${esc(initials(user.name))}</div>
        <button class="hamburger" id="hamburgerBtn">☰</button>
      </div>
    </div>
  </div>`;
}

function bindNavEvents(user){
  document.querySelectorAll("[data-nav]").forEach(el=>{
    el.addEventListener("click", ()=> go(el.getAttribute("data-nav")));
  });
  document.querySelectorAll("[data-action='logout']").forEach(el=>{
    el.addEventListener("click", ()=>{ clearSession(); go("auth"); });
  });
  const hb = document.getElementById("hamburgerBtn");
  const nl = document.getElementById("navLinks");
  if(hb) hb.addEventListener("click", ()=> nl.classList.toggle("open"));
  if(nl) nl.querySelectorAll(".nav-link").forEach(b=> b.addEventListener("click", ()=> nl.classList.remove("open")));
}

/* =====================================================================
   AUTH SCREEN
===================================================================== */
let authState = { mode:"login", role:"student", error:"" };

function renderAuth(){
  return `
  <div class="auth-shell">
    <div class="auth-panel">
      <div class="auth-hero">
        <div>
          <div class="eyebrow" style="color:var(--gold);">WELCOME TO</div>
          <h1>FastLearner 2</h1>
          <p class="lede">A 3D reading world where every finished book earns points, badges, and a shot at Most Valuable Reader of the Year.</p>
        </div>
        <div class="stack3d">
          <div class="book3d b1"></div>
          <div class="book3d b2"></div>
          <div class="book3d b3"></div>
        </div>
        <div class="auth-feat">
          <span> English &amp; Filipino books</span>
          <span> Classrooms &amp; assignments</span>
          <span> AI reading buddy</span>
          <span> Leaderboards</span>
        </div>
      </div>
      <div class="auth-form">
        <div class="tabbar">
          <button data-mode="login" class="${authState.mode==='login'?'active':''}">Log In</button>
          <button data-mode="signup" class="${authState.mode==='signup'?'active':''}">Sign Up</button>
        </div>
        ${authState.error ? `<div class="err-msg">${esc(authState.error)}</div>` : ""}
        <div class="role-select">
          <div class="role-opt ${authState.role==='student'?'active':''}" data-role="student">
            <div class="ic"></div><span class="lb">Student</span>
          </div>
          <div class="role-opt ${authState.role==='admin'?'active':''}" data-role="admin">
            <div class="ic"></div><span class="lb">Admin</span>
          </div>
        </div>
        <form id="authForm">
          ${authState.mode==='signup' ? `
          <div class="field">
            <label>Full name</label>
            <input type="text" name="name" placeholder="e.g. Juan Dela Cruz" required>
          </div>` : ""}
          <div class="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="e.g. juan24" required>
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" required minlength="4">
          </div>
          <button type="submit" class="btn btn-mango btn-block">${authState.mode==='login' ? 'Log in' : 'Create account'} as ${authState.role}</button>
        </form>
        <p class="form-note">
          ${authState.mode==='login'
            ? `New here? <button data-switch="signup">Create an account</button>`
            : `Already have an account? <button data-switch="login">Log in</button>`}
        </p>
        <div class="demo-hint">
          <b>Try the demo:</b> admin / admin123 (role: Admin) or student / student123 (role: Student) — classroom code <b>DEMO01</b>.
        </div>
      </div>
    </div>
  </div>`;
}

function bindAuthEvents(){
  document.querySelectorAll("[data-mode]").forEach(b=>{
    b.addEventListener("click", ()=>{ authState.mode=b.getAttribute("data-mode"); authState.error=""; render(); });
  });
  document.querySelectorAll("[data-role]").forEach(b=>{
    b.addEventListener("click", ()=>{ authState.role=b.getAttribute("data-role"); render(); });
  });
  document.querySelectorAll("[data-switch]").forEach(b=>{
    b.addEventListener("click", ()=>{ authState.mode=b.getAttribute("data-switch"); authState.error=""; render(); });
  });
  const form = document.getElementById("authForm");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const username = (fd.get("username")||"").toString().trim();
    const password = (fd.get("password")||"").toString();
    const name = (fd.get("name")||"").toString().trim();

    if(authState.mode==="signup"){
      if(DB.users.some(u=>u.username.toLowerCase()===username.toLowerCase())){
        authState.error = "That username is already taken."; render(); return;
      }
      const newUser = {
        id: uid("u"), username, password, role: authState.role,
        name: name || username, points: 0, badges: [], joinedClassrooms: [], booksCompleted: []
      };
      DB.users.push(newUser); saveDB();
      setSession(newUser.id);
      toast(`Welcome to FastLearner 2, ${newUser.name}! 🎉`);
      go(authState.role==="admin" ? "admin-home" : "student-home");
    } else {
      const u = DB.users.find(u=>u.username.toLowerCase()===username.toLowerCase() && u.password===password && u.role===authState.role);
      if(!u){ authState.error = "Incorrect username, password, or role."; render(); return; }
      setSession(u.id);
      toast(`Welcome back, ${u.name}! `);
      go(u.role==="admin" ? "admin-home" : "student-home");
    }
  });
}

/* =====================================================================
   STUDENT HOME
===================================================================== */
function studentProgressFor(userId, bookId){
  return DB.progress.find(p=>p.userId===userId && p.bookId===bookId);
}
function assignedBooksForStudent(user){
  const out = [];
  DB.books.forEach(b=>{
    (b.assignments||[]).forEach(a=>{
      if(user.joinedClassrooms.includes(a.classroomId)){
        out.push({ book:b, dueDate:a.dueDate, classroomId:a.classroomId });
      }
    });
  });
  return out;
}

function renderStudentHome(user){
  const assigned = assignedBooksForStudent(user);
  const dueSoon = assigned.filter(a => !studentProgressFor(user.id,a.book.id)?.completed)
                           .sort((a,b)=> (a.dueDate||"9999").localeCompare(b.dueDate||"9999")).slice(0,3);
  const completedCount = user.booksCompleted.length;
  const classroomNames = DB.classrooms.filter(c=>user.joinedClassrooms.includes(c.id));

  return `
  <div class="section-head">
    <div>
      <div class="eyebrow">HELLO, ${esc(user.name.split(" ")[0])} 👋</div>
      <h1 class="title-xl">Your reading journey</h1>
      <p class="subtle">Pick up where you left off, or explore something new today.</p>
    </div>
  </div>

  <div class="stat-row">
    <div class="stat-card"><div class="ic"></div><div class="num">${user.points}</div><div class="lb">Total points</div></div>
    <div class="stat-card"><div class="ic"></div><div class="num">${completedCount}</div><div class="lb">Books finished</div></div>
    <div class="stat-card"><div class="ic"></div><div class="num">${classroomNames.length}</div><div class="lb">Classrooms joined</div></div>
    <div class="stat-card"><div class="ic"></div><div class="num">${user.badges.length}</div><div class="lb">Badges earned</div></div>
  </div>

  <div class="grid grid-2" style="margin-bottom:26px;">
    <div class="card">
      <h3 style="font-size:17px; margin-bottom:14px;"> Join a classroom</h3>
      <p class="subtle" style="margin-bottom:14px;">Enter the code your teacher gave you.</p>
      <form id="joinForm" class="join-box">
        <input type="text" name="code" maxlength="8" placeholder="Enter Code" required>
        <button class="btn btn-primary" type="submit">Join</button>
      </form>
    </div>
    <div class="card">
      <h3 style="font-size:17px; margin-bottom:14px;"> My Classrooms</h3>
      ${classroomNames.length ? classroomNames.map(c=>`
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--line);">
          <div><b>${esc(c.name)}</b><div class="subtle" style="margin-top:2px;">Code ${esc(c.code)}</div></div>
          <span class="chip" style="cursor:default;">${assignedBooksForStudent(user).filter(a=>a.classroomId===c.id).length} books</span>
        </div>`).join("") : `<p class="subtle">You haven't joined a classroom yet.</p>`}
    </div>
  </div>

  <div class="section-head"><h3 style="font-size:19px;">Book's Due soon</h3></div>
  ${dueSoon.length ? `<div class="book-grid" style="margin-bottom:30px;">${dueSoon.map(a=>bookCardHtml(user,a.book,a.dueDate)).join("")}</div>`
    : `<div class="empty-state" style="padding:30px;"><div class="ic">🎉</div><h4>All caught up!</h4><p>No pending assigned books right now.</p></div>`}

  <div class="section-head"><h3 style="font-size:19px;"> Jump back into the library</h3>
    <button class="btn btn-ghost btn-sm" data-nav="library">Browse all books</button>
  </div>
  <div class="book-grid">${DB.books.slice(0,4).map(b=>bookCardHtml(user,b, assignedDueDateFor(user,b))).join("")}</div>
  `;
}

function assignedDueDateFor(user, book){
  const a = (book.assignments||[]).find(a=>user.joinedClassrooms.includes(a.classroomId));
  return a ? a.dueDate : null;
}

function bookCardHtml(user, book, dueDate){
  const prog = studentProgressFor(user.id, book.id);
  const pct = prog ? Math.round(((prog.currentPage+1)/book.pages.length)*100) : 0;
  const completed = prog?.completed;
  let dueTag = "";
  if(completed){
    dueTag = `<span class="due-tag done">✓ Completed</span>`;
  } else if(dueDate){
    dueTag = `<span class="due-tag ${isOverdue(dueDate)?'late':'ok'}">${isOverdue(dueDate)?' Overdue':'Due '+fmtDate(dueDate)}</span>`;
  }
  return `
  <div class="book-card" data-open-book="${book.id}">
    <div class="book-cover" style="background:linear-gradient(155deg, ${book.cover.color1}, ${book.cover.color2});">
      <span class="lang-badge">${book.language==='en' ? 'ENGLISH' : 'FILIPINO'}</span>
      <div style="font-size:34px;">${book.cover.emoji}</div>
      <h4>${esc(book.title)}</h4>
      <div class="author">by ${esc(book.author)}</div>
      ${prog ? `<div class="book-progress-track"><div class="book-progress-fill" style="width:${completed?100:pct}%;"></div></div>` : ""}
    </div>
    <div class="book-title-below">${esc(book.title)}</div>
    <div class="book-sub-below">${book.pages.length} pages · ${book.language==='en'?'English':'Filipino'}</div>
    ${dueTag}
  </div>`;
}

/* =====================================================================
   LIBRARY
===================================================================== */
let libFilter = "all";
function renderLibrary(user){
  const books = DB.books.filter(b => libFilter==="all" || b.language===libFilter);
  return `
  <div class="section-head">
    <div><div class="eyebrow">EXPLORE</div><h1 class="title-xl">Book Library</h1><p class="subtle">${DB.books.length} books available across English &amp; Filipino.</p></div>
  </div>
  <div class="filter-bar">
    <button class="chip ${libFilter==='all'?'active':''}" data-filter="all">All languages</button>
    <button class="chip ${libFilter==='en'?'active':''}" data-filter="en">🇬🇧 English</button>
    <button class="chip ${libFilter==='fil'?'active':''}" data-filter="fil">🇵🇭 Filipino</button>
  </div>
  ${books.length ? `<div class="book-grid">${books.map(b=>bookCardHtml(user,b, assignedDueDateFor(user,b))).join("")}</div>`
    : `<div class="empty-state"><div class="ic">📭</div><h4>No books in this language yet</h4></div>`}
  `;
}

/* =====================================================================
   READER
===================================================================== */
let readerFlip = "";
function renderReader(user, bookId){
  const book = DB.books.find(b=>b.id===bookId);
  if(!book) return `<div class="empty-state"><h4>Book not found</h4></div>`;
  let prog = studentProgressFor(user.id, bookId);
  if(!prog){
    prog = { id:uid("p"), userId:user.id, bookId, currentPage:0, completed:false, quizScore:null, pointsEarned:0, completedAt:null };
    DB.progress.push(prog); saveDB();
  }
  const page = Math.min(prog.currentPage, book.pages.length-1);
  const pct = Math.round(((page+1)/book.pages.length)*100);
  const dots = book.pages.map((_,i)=>`<span class="rdot ${i<=page?'on':''}"></span>`).join("");

  return `
  <div class="reader-shell">
    <div class="reader-topbar">
      <button class="btn-icon" data-nav="library" title="Back to library">←</button>
      <div style="flex:1; text-align:center;">
        <div style="font-weight:700; font-size:14px;">${esc(book.title)}</div>
        <div class="subtle" style="font-size:11.5px;">Page ${page+1} of ${book.pages.length}</div>
      </div>
      <div style="width:44px;"></div>
    </div>
    <div class="reader-progress-outer"><div class="reader-progress-inner" style="width:${pct}%;"></div></div>
    <div class="page-stage">
      <div class="page-book ${readerFlip}" id="pageBookEl">
        <span class="page-lang-tag">${book.language==='en'?'ENGLISH':'FILIPINO'}</span>
        <p class="page-text">${esc(book.pages[page])}</p>
        <span class="page-num-tag">— ${page+1} —</span>
      </div>
    </div>
    <div class="reader-controls">
      <button class="btn btn-ghost" id="prevPageBtn" ${page===0?'disabled':''}>‹ Previous</button>
      <div class="reader-dots">${dots}</div>
      ${page < book.pages.length-1
        ? `<button class="btn btn-primary" id="nextPageBtn">Next ›</button>`
        : `<button class="btn btn-mango" id="finishBookBtn">Finish &amp; take quiz 🎉</button>`}
    </div>
  </div>`;
}

function goPage(user, book, prog, delta){
  const next = prog.currentPage + delta;
  if(next < 0 || next > book.pages.length-1) return;
  readerFlip = delta>0 ? "flip-next" : "flip-prev";
  prog.currentPage = next;
  saveDB();
  render();
  setTimeout(()=>{ readerFlip=""; }, 500);
}

/* =====================================================================
   QUIZ
===================================================================== */
let quizState = null; // {bookId, idx, correctCount, answered}

function renderQuiz(user, bookId){
  const book = DB.books.find(b=>b.id===bookId);
  if(!book) return `<div class="empty-state"><h4>Book not found</h4></div>`;

  if(!quizState || quizState.bookId !== bookId){
    quizState = { bookId, idx:0, correctCount:0, answered:false, picked:null };
  }

  if(quizState.idx >= book.questions.length){
    return renderQuizResult(user, book);
  }

  const q = book.questions[quizState.idx];
  const progressPct = Math.round((quizState.idx/book.questions.length)*100);

  return `
  <div class="quiz-shell">
    <div class="quiz-progress">Question ${quizState.idx+1} of ${book.questions.length} · ${esc(book.title)}</div>
    <div class="reader-progress-outer" style="margin-bottom:20px;"><div class="reader-progress-inner" style="width:${progressPct}%;"></div></div>
    <div class="quiz-card">
      <div class="quiz-q">${esc(q.q)}</div>
      <div id="quizOpts">
        ${q.options.map((opt,i)=>`
          <button class="quiz-opt" data-opt="${i}" ${quizState.answered?'disabled':''}>${esc(opt)}</button>
        `).join("")}
      </div>
    </div>
  </div>`;
}

function renderQuizResult(user, book){
  const total = book.questions.length;
  const score = quizState.correctCount;
  const pct = Math.round((score/total)*100);
  const emoji = pct>=80 ? "" : pct>=50 ? "" : "";
  const msg = pct>=80 ? "Outstanding comprehension!" : pct>=50 ? "Nice work — keep it up!" : "Good try — re-reading always helps!";

  return `
  <div class="quiz-shell">
    <div class="quiz-card quiz-result">
      <div class="big-emoji">${emoji}</div>
      <h3 style="margin-top:8px;">${msg}</h3>
      <div class="score">${score} / ${total} correct</div>
      <p class="subtle">You scored ${pct}% on "${esc(book.title)}".</p>
      <div style="margin-top:22px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn-primary" id="quizDoneBtn">Claim my points </button>
      </div>
    </div>
  </div>`;
}

function submitAnswer(idx, book){
  if(quizState.answered) return;
  quizState.answered = true;
  quizState.picked = idx;
  const q = book.questions[quizState.idx];
  if(idx === q.correct) quizState.correctCount++;
  render();
  document.querySelectorAll("[data-opt]").forEach(btn=>{
    const i = Number(btn.getAttribute("data-opt"));
    if(i===q.correct) btn.classList.add("correct");
    else if(i===idx) btn.classList.add("wrong");
  });
  setTimeout(()=>{
    quizState.idx++; quizState.answered=false; quizState.picked=null; render();
  }, 950);
}

function finalizeQuiz(user, book){
  const prog = studentProgressFor(user.id, book.id);
  const already = prog.completed;
  const total = book.questions.length;
  const scorePts = quizState.correctCount * 5; // up to 50
  const finishPts = already ? 0 : 50;
  const earned = already ? Math.max(0, scorePts - (prog.pointsEarned - 50)) : (finishPts + scorePts);

  prog.completed = true;
  prog.quizScore = quizState.correctCount;
  prog.completedAt = new Date().toISOString();
  if(!already){
    prog.pointsEarned = finishPts + scorePts;
    user.points += prog.pointsEarned;
    if(!user.booksCompleted.includes(book.id)) user.booksCompleted.push(book.id);
  }

  const newBadges = checkAchievements(user, quizState.correctCount === total);
  saveDB();

  toast(already ? `Quiz re-taken! Great review.` : `+${prog.pointsEarned} points earned! `, "gold");
  if(newBadges.length){
    confettiBurst();
    newBadges.forEach(b => toast(`Badge unlocked: ${b.name} ${b.icon}`, "gold"));
  }
  quizState = null;
  go("achievements-redirect-guard"); // placeholder, replaced below
  go("student-home");
}

function checkAchievements(user, perfectScore){
  const catalog = achievementCatalog();
  const newlyEarned = [];
  catalog.forEach(a=>{
    if(user.badges.includes(a.id)) return;
    let earn = false;
    if(a.id==="first_book" && user.booksCompleted.length>=1) earn=true;
    if(a.id==="bookworm" && user.booksCompleted.length>=5) earn=true;
    if(a.id==="mvr_award" && user.booksCompleted.length>=10) earn=true;
    if(a.id==="perfect_score" && perfectScore) earn=true;
    if(earn){ user.badges.push(a.id); newlyEarned.push(a); }
  });
  return newlyEarned;
}

function achievementCatalog(){
  return [
    { id:"first_book", name:"First Chapter", icon:"🌱", desc:"Finish your very first book." },
    { id:"bookworm", name:"Bookworm Club", icon:"🐛", desc:"Finish 5 books." },
    { id:"perfect_score", name:"Perfect Score", icon:"💯", desc:"Get 10/10 on a book quiz." },
    { id:"mvr_award", name:"Most Valuable Reader of the Year", icon:"🏆", desc:"Finish 10 books, in or outside your classrooms." }
  ];
}

/* =====================================================================
   ACHIEVEMENTS
===================================================================== */
function renderAchievements(user){
  const catalog = achievementCatalog();
  const hasMVR = user.badges.includes("mvr_award");
  return `
  <div class="section-head">
    <div><div class="eyebrow">YOUR TROPHY CASE</div><h1 class="title-xl">Achievements</h1>
    <p class="subtle">${user.booksCompleted.length} books finished · ${user.badges.length} badges unlocked</p></div>
  </div>
  ${hasMVR ? `
  <div class="mvr-banner">
    <div class="ic"></div>
    <div><h3>Most Valuable Reader of the Year</h3><p>Awarded for finishing 10+ books, in and outside the classroom. You're a reading legend!</p></div>
  </div>` : `
  <div class="card" style="margin-bottom:24px; display:flex; align-items:center; gap:16px;">
    <div style="font-size:34px;"></div>
    <div>
      <h3 style="font-size:16px;">${10-user.booksCompleted.length} more book${10-user.booksCompleted.length===1?'':'s'} to go</h3>
      <p class="subtle">Finish 10 books total to earn the Most Valuable Reader of the Year Award.</p>
    </div>
  </div>`}
  <div class="badge-grid">
    ${catalog.map(a=>{
      const owned = user.badges.includes(a.id);
      return `<div class="badge-card ${owned?'':'locked'}">
        <div class="bi">${a.icon}</div>
        <h5>${esc(a.name)}</h5>
        <p>${esc(a.desc)}</p>
      </div>`;
    }).join("")}
  </div>
  `;
}

/* =====================================================================
   LEADERBOARD
===================================================================== */
function renderLeaderboard(user){
  const myClassrooms = user.role==="admin"
    ? DB.classrooms.filter(c=>c.adminId===user.id)
    : DB.classrooms.filter(c=>user.joinedClassrooms.includes(c.id));

  const globalBoard = [...DB.users].filter(u=>u.role==="student").sort((a,b)=>b.points-a.points);

  let classroomBoards = "";
  myClassrooms.forEach(c=>{
    const students = DB.users.filter(u=>c.studentIds.includes(u.id)).sort((a,b)=>b.points-a.points);
    classroomBoards += `
    <div class="section-head" style="margin-top:30px;"><h3 style="font-size:18px;"> ${esc(c.name)}</h3></div>
    ${students.length ? students.map((s,i)=>lbRow(s,i)).join("") : `<p class="subtle">No students yet.</p>`}
    `;
  });

  return `
  <div class="section-head">
    <div><div class="eyebrow">TOP READERS</div><h1 class="title-xl">Leaderboard</h1><p class="subtle">Ranked by total points earned from finished books and quizzes.</p></div>
  </div>
  <div class="section-head"><h3 style="font-size:18px;"> Global — all students</h3></div>
  ${globalBoard.length ? globalBoard.map((s,i)=>lbRow(s,i)).join("") : `<p class="subtle">No students yet.</p>`}
  ${classroomBoards}
  `;
}
function lbRow(s, i){
  const rank = i+1;
  const crown = rank===1 ? "" : rank===2 ? "" : rank===3 ? "" : "";
  return `
  <div class="lb-row ${rank===1?'top1':rank===2?'top2':rank===3?'top3':''}">
    <div class="lb-rank">${rank}</div>
    <div class="lb-avatar">${esc(initials(s.name))}</div>
    <div class="lb-name">${esc(s.name)} ${s.badges.includes('mvr_award')?'🏆':''}<small>${s.booksCompleted.length} books finished</small></div>
    <div class="lb-crown">${crown}</div>
    <div class="lb-pts">${s.points} pts</div>
  </div>`;
}

/* =====================================================================
   ADMIN — HOME (classrooms)
===================================================================== */
let showCreateClassroom = false;
function renderAdminHome(user){
  const myClassrooms = DB.classrooms.filter(c=>c.adminId===user.id);
  return `
  <div class="section-head">
    <div><div class="eyebrow">TEACHER DASHBOARD</div><h1 class="title-xl">Your Classrooms</h1><p class="subtle">Create classrooms, publish books, and track every reader's progress.</p></div>
    <button class="btn btn-mango" id="openCreateClassroom">+ New classroom</button>
  </div>
  <div class="stat-row">
    <div class="stat-card"><div class="ic"></div><div class="num">${myClassrooms.length}</div><div class="lb">Classrooms</div></div>
    <div class="stat-card"><div class="ic"></div><div class="num">${myClassrooms.reduce((a,c)=>a+c.studentIds.length,0)}</div><div class="lb">Total students</div></div>
    <div class="stat-card"><div class="ic"></div><div class="num">${DB.books.filter(b=>b.createdBy===user.id).length}</div><div class="lb">Books published</div></div>
    <div class="stat-card"><div class="ic"></div><div class="num">${DB.progress.filter(p=>p.completed).length}</div><div class="lb">Books completed by readers</div></div>
  </div>
  ${myClassrooms.length ? `<div class="grid grid-3">${myClassrooms.map(c=>`
    <div class="classroom-card" data-open-classroom="${c.id}">
      <div class="tape"></div>
      <h3>${esc(c.name)}</h3>
      <div class="code">${esc(c.code)}</div>
      <div class="meta"><span> ${c.studentIds.length} students</span><span> ${DB.books.filter(b=>(b.assignments||[]).some(a=>a.classroomId===c.id)).length} books</span></div>
    </div>`).join("")}</div>`
    : `<div class="empty-state"><div class="ic"></div><h4>No classrooms yet</h4><p>Create your first classroom to start publishing books.</p></div>`}

  ${showCreateClassroom ? modalCreateClassroom() : ""}
  `;
}

function modalCreateClassroom(){
  return `
  <div class="modal-backdrop" id="createClassroomModal">
    <div class="modal-box">
      <h3>Create a classroom</h3>
      <form id="createClassroomForm">
        <div class="field"><label>Classroom name</label><input type="text" name="name" placeholder="e.g. Grade 7 — Section Rizal" required></div>
        <p class="subtle" style="margin-bottom:6px;">A unique join code will be generated automatically.</p>
        <div class="modal-close-row">
          <button type="button" class="btn btn-ghost" id="cancelCreateClassroom">Cancel</button>
          <button type="submit" class="btn btn-primary">Create classroom</button>
        </div>
      </form>
    </div>
  </div>`;
}

/* =====================================================================
   ADMIN — CLASSROOM DETAIL
===================================================================== */
let bookEditorState = null; // when creating/editing a book
let questionEditorTemp = null;

function renderAdminClassroom(user, classroomId, tab){
  const c = DB.classrooms.find(x=>x.id===classroomId);
  if(!c) return `<div class="empty-state"><h4>Classroom not found</h4></div>`;
  const books = DB.books.filter(b=>(b.assignments||[]).some(a=>a.classroomId===c.id));
  const students = DB.users.filter(u=>c.studentIds.includes(u.id));

  return `
  <button class="btn btn-ghost btn-sm" data-nav="admin-home" style="margin-bottom:16px;">← All classrooms</button>
  <div class="section-head">
    <div><div class="eyebrow">CLASSROOM</div><h1 class="title-xl">${esc(c.name)}</h1>
    <p class="subtle">Join code: <b style="font-family:monospace; letter-spacing:2px;">${esc(c.code)}</b> · ${students.length} students · ${books.length} books</p></div>
  </div>
  <div class="tabline">
    <button class="${tab==='books'?'active':''}" data-ctab="books"> Books &amp; Questionnaires</button>
    <button class="${tab==='roster'?'active':''}" data-ctab="roster"> Roster &amp; Attendance</button>
    <button class="${tab==='leaderboard'?'active':''}" data-ctab="leaderboard"> Leaderboard</button>
  </div>
  ${tab==='books' ? renderAdminBooksTab(c, books) : tab==='roster' ? renderAdminRosterTab(c, students, books) : renderAdminClassroomLeaderboard(students)}
  ${bookEditorState ? renderBookEditorModal(c) : ""}
  `;
}

function renderAdminBooksTab(c, books){
  return `
  <div class="section-head"><h3 style="font-size:17px;">Published to this classroom</h3>
    <div style="display:flex; gap:8px;">
      <button class="btn btn-ghost btn-sm" id="assignExistingBtn">+ Assign existing book</button>
      <button class="btn btn-mango btn-sm" id="publishNewBookBtn">+ Publish new book</button>
    </div>
  </div>
  ${books.length ? books.map(b=>{
    const a = (b.assignments||[]).find(a=>a.classroomId===c.id);
    return `
    <div class="card" style="margin-bottom:14px; display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
      <div style="width:52px; height:70px; border-radius:6px; background:linear-gradient(155deg, ${b.cover.color1}, ${b.cover.color2}); display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0;">${b.cover.emoji}</div>
      <div style="flex:1; min-width:180px;">
        <b>${esc(b.title)}</b>
        <div class="subtle">${b.pages.length} pages · ${b.language==='en'?'English':'Filipino'} · ${b.questions.length} quiz questions</div>
      </div>
      <div style="text-align:right;">
        <label class="subtle" style="font-size:11.5px; display:block; margin-bottom:4px;">Due date</label>
        <input type="date" value="${a?.dueDate||''}" data-due-book="${b.id}" style="padding:8px 10px; border-radius:8px; border:1.5px solid var(--line); font-size:13px;">
      </div>
    </div>`;
  }).join("") : `<div class="empty-state"><div class="ic">📭</div><h4>No books published yet</h4><p>Publish a new book or assign one from the library.</p></div>`}
  `;
}

function renderAdminRosterTab(c, students, books){
  return `
  <div class="section-head"><h3 style="font-size:17px;">Reading attendance</h3></div>
  ${students.length ? students.map(s=>{
    const statuses = books.map(b=>{
      const p = studentProgressFor(s.id, b.id);
      const a = (b.assignments||[]).find(a=>a.classroomId===c.id);
      let cls="notstarted", label="Not started";
      if(p?.completed){ cls="done"; label="✓ "+b.title.slice(0,14); }
      else if(p){ cls="progress"; label="Reading "+b.title.slice(0,12); }
      if(!p?.completed && a?.dueDate && isOverdue(a.dueDate)){ cls="late"; label=" "+b.title.slice(0,12); }
      return `<span class="pill-status ${cls}" title="${esc(b.title)}">${esc(label)}</span>`;
    }).join("");
    return `
    <div class="roster-row">
      <div class="lb-avatar">${esc(initials(s.name))}</div>
      <div class="roster-name">${esc(s.name)}<div class="subtle" style="font-size:11px;">${s.points} pts · ${s.booksCompleted.length} books</div></div>
      <div class="progress-mini">${statuses || '<span class="subtle" style="font-size:11.5px;">No books assigned</span>'}</div>
      <button class="btn btn-ghost btn-sm" data-award-points="${s.id}">+10 pts</button>
    </div>`;
  }).join("") : `<div class="empty-state"><div class="ic"></div><h4>No students yet</h4><p>Share the join code <b>${esc(c.code)}</b> with your students.</p></div>`}
  `;
}

function renderAdminClassroomLeaderboard(students){
  const sorted = [...students].sort((a,b)=>b.points-a.points);
  return sorted.length ? sorted.map((s,i)=>lbRow(s,i)).join("") : `<p class="subtle">No students yet.</p>`;
}

function renderBookEditorModal(c){
  const st = bookEditorState;
  return `
  <div class="modal-backdrop" id="bookEditorModal">
    <div class="modal-box" style="max-width:640px;">
      <h3>${st.mode==='assign' ? 'Assign an existing book' : 'Publish a new book'}</h3>
      ${st.mode==='assign' ? renderAssignExistingForm() : renderNewBookForm()}
    </div>
  </div>`;
}

function renderAssignExistingForm(){
  const unassigned = DB.books.filter(b => !(b.assignments||[]).some(a=>a.classroomId===bookEditorState.classroomId));
  return `
  <form id="assignExistingForm">
    <div class="field">
      <label>Choose a book</label>
      <select name="bookId" required>
        ${unassigned.map(b=>`<option value="${b.id}">${esc(b.title)} (${b.language==='en'?'EN':'FIL'})</option>`).join("") || `<option disabled>No other books available</option>`}
      </select>
    </div>
    <div class="field"><label>Due date</label><input type="date" name="dueDate" value="${futureDateStr(14)}" required></div>
    <div class="modal-close-row">
      <button type="button" class="btn btn-ghost" id="cancelBookEditor">Cancel</button>
      <button type="submit" class="btn btn-primary" ${unassigned.length===0?'disabled':''}>Assign to classroom</button>
    </div>
  </form>`;
}

function renderNewBookForm(){
  const draft = bookEditorState.draft;
  return `
  <form id="newBookForm">
    <div class="grid grid-2">
      <div class="field"><label>Title</label><input type="text" name="title" value="${esc(draft.title)}" required></div>
      <div class="field"><label>Author</label><input type="text" name="author" value="${esc(draft.author)}" required></div>
    </div>
    <div class="grid grid-2">
      <div class="field"><label>Language</label>
        <select name="language">
          <option value="en" ${draft.language==='en'?'selected':''}>English</option>
          <option value="fil" ${draft.language==='fil'?'selected':''}>Filipino</option>
        </select>
      </div>
      <div class="field"><label>Due date</label><input type="date" name="dueDate" value="${draft.dueDate}" required></div>
    </div>
    <div class="field"><label>Short summary</label><textarea name="summary" rows="2">${esc(draft.summary)}</textarea></div>

    <label style="font-size:12.5px; font-weight:700; color:var(--ink-soft); display:block; margin:14px 0 8px;">
      Pages (aim for 15–20 short pages) — ${draft.pages.length} added
    </label>
    <div id="pagesList">
      ${draft.pages.map((p,i)=>`
        <div class="page-editor-row">
          <div class="page-num-badge">${i+1}</div>
          <textarea data-page-idx="${i}">${esc(p)}</textarea>
          <button type="button" class="remove-x" data-remove-page="${i}">✕</button>
        </div>`).join("")}
    </div>
    <button type="button" class="btn btn-ghost btn-sm" id="addPageBtn" style="margin-bottom:16px;">+ Add page</button>

    <label style="font-size:12.5px; font-weight:700; color:var(--ink-soft); display:block; margin:6px 0 8px;">
      Quiz — 10 questions recommended (${draft.questions.length} added)
    </label>
    <div id="questionsList">
      ${draft.questions.map((q,i)=>renderQuestionBuilder(q,i)).join("")}
    </div>
    <button type="button" class="btn btn-ghost btn-sm" id="addQuestionBtn" style="margin-bottom:16px;">+ Add question</button>

    <div class="modal-close-row">
      <button type="button" class="btn btn-ghost" id="cancelBookEditor">Cancel</button>
      <button type="submit" class="btn btn-primary">Publish to classroom</button>
    </div>
  </form>`;
}

function renderQuestionBuilder(q, i){
  return `
  <div class="qbuilder-card">
    <input type="text" data-q-idx="${i}" placeholder="Question ${i+1}" value="${esc(q.q)}">
    ${q.options.map((opt,oi)=>`
      <div class="qopt-row">
        <input type="radio" name="correct_${i}" data-correct-idx="${i}" data-opt-val="${oi}" ${q.correct===oi?'checked':''}>
        <input type="text" data-opt-idx="${i}" data-opt-num="${oi}" placeholder="Option ${oi+1}" value="${esc(opt)}">
      </div>`).join("")}
    <button type="button" class="remove-x" data-remove-question="${i}">✕ Remove question</button>
  </div>`;
}

/* =====================================================================
   Event binding for interactive screens
===================================================================== */
function bindScreenEvents(user){
  document.querySelectorAll("[data-open-book]").forEach(el=>{
    el.addEventListener("click", ()=> go("reader", {bookId: el.getAttribute("data-open-book")}));
  });
  document.querySelectorAll("[data-open-classroom]").forEach(el=>{
    el.addEventListener("click", ()=> go("admin-classroom", {classroomId: el.getAttribute("data-open-classroom"), tab:"books"}));
  });

  // Student home: join classroom
  const joinForm = document.getElementById("joinForm");
  if(joinForm) joinForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const code = new FormData(joinForm).get("code").toString().trim().toUpperCase();
    const c = DB.classrooms.find(cc=>cc.code===code);
    if(!c){ toast("No classroom found with that code.", "err"); return; }
    if(user.joinedClassrooms.includes(c.id)){ toast("You're already in this classroom."); return; }
    user.joinedClassrooms.push(c.id);
    if(!c.studentIds.includes(user.id)) c.studentIds.push(user.id);
    saveDB();
    toast(`Joined "${c.name}"! 🎉`);
    render();
  });

  // Library filters
  document.querySelectorAll("[data-filter]").forEach(el=>{
    el.addEventListener("click", ()=>{ libFilter = el.getAttribute("data-filter"); render(); });
  });

  // Reader nav
  if(ROUTE.screen==="reader"){
    const book = DB.books.find(b=>b.id===ROUTE.params.bookId);
    const prog = studentProgressFor(user.id, ROUTE.params.bookId);
    const prevBtn = document.getElementById("prevPageBtn");
    const nextBtn = document.getElementById("nextPageBtn");
    const finishBtn = document.getElementById("finishBookBtn");
    if(prevBtn) prevBtn.addEventListener("click", ()=> goPage(user, book, prog, -1));
    if(nextBtn) nextBtn.addEventListener("click", ()=> goPage(user, book, prog, 1));
    if(finishBtn) finishBtn.addEventListener("click", ()=> go("quiz", {bookId: book.id}));
  }

  // Quiz
  if(ROUTE.screen==="quiz"){
    const book = DB.books.find(b=>b.id===ROUTE.params.bookId);
    document.querySelectorAll("[data-opt]").forEach(el=>{
      el.addEventListener("click", ()=> submitAnswer(Number(el.getAttribute("data-opt")), book));
    });
    const doneBtn = document.getElementById("quizDoneBtn");
    if(doneBtn) doneBtn.addEventListener("click", ()=> finalizeQuiz(user, book));
  }

  // Admin: create classroom
  const openCreateBtn = document.getElementById("openCreateClassroom");
  if(openCreateBtn) openCreateBtn.addEventListener("click", ()=>{ showCreateClassroom=true; render(); });
  const cancelCreate = document.getElementById("cancelCreateClassroom");
  if(cancelCreate) cancelCreate.addEventListener("click", ()=>{ showCreateClassroom=false; render(); });
  const createForm = document.getElementById("createClassroomForm");
  if(createForm) createForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = new FormData(createForm).get("name").toString().trim();
    let code; do{ code = genCode(); }while(DB.classrooms.some(c=>c.code===code));
    const c = { id: uid("c"), name, code, adminId:user.id, studentIds:[] };
    DB.classrooms.push(c); saveDB();
    showCreateClassroom = false;
    toast(`Classroom "${name}" created! Code: ${code}`, "gold");
    go("admin-classroom", {classroomId:c.id, tab:"books"});
  });

  // Admin classroom tabs
  document.querySelectorAll("[data-ctab]").forEach(el=>{
    el.addEventListener("click", ()=> go("admin-classroom", {classroomId: ROUTE.params.classroomId, tab: el.getAttribute("data-ctab")}));
  });

  // Due date change
  document.querySelectorAll("[data-due-book]").forEach(el=>{
    el.addEventListener("change", ()=>{
      const bookId = el.getAttribute("data-due-book");
      const book = DB.books.find(b=>b.id===bookId);
      const a = (book.assignments||[]).find(a=>a.classroomId===ROUTE.params.classroomId);
      if(a){ a.dueDate = el.value; saveDB(); toast("Due date updated."); }
    });
  });

  // Award bonus points
  document.querySelectorAll("[data-award-points]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const sid = el.getAttribute("data-award-points");
      const s = DB.users.find(u=>u.id===sid);
      s.points += 10; saveDB();
      toast(`Awarded 10 bonus points to ${s.name}.`, "gold");
      render();
    });
  });

  // Publish new book
  const publishNewBtn = document.getElementById("publishNewBookBtn");
  if(publishNewBtn) publishNewBtn.addEventListener("click", ()=>{
    bookEditorState = {
      mode:"new", classroomId:ROUTE.params.classroomId,
      draft:{ title:"", author:user.name, language:"en", summary:"", dueDate: futureDateStr(14),
        pages:["",""], questions:[ blankQuestion() ] }
    };
    render();
  });
  const assignExistingBtn = document.getElementById("assignExistingBtn");
  if(assignExistingBtn) assignExistingBtn.addEventListener("click", ()=>{
    bookEditorState = { mode:"assign", classroomId:ROUTE.params.classroomId };
    render();
  });
  const cancelEditor = document.getElementById("cancelBookEditor");
  if(cancelEditor) cancelEditor.addEventListener("click", ()=>{ bookEditorState=null; render(); });

  const assignForm = document.getElementById("assignExistingForm");
  if(assignForm) assignForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fd = new FormData(assignForm);
    const book = DB.books.find(b=>b.id===fd.get("bookId"));
    book.assignments = book.assignments || [];
    book.assignments.push({ classroomId: bookEditorState.classroomId, dueDate: fd.get("dueDate").toString() });
    saveDB();
    bookEditorState = null;
    toast(`"${book.title}" assigned to classroom.`, "gold");
    render();
  });

  bindNewBookFormEvents(user);
}

function blankQuestion(){ return { q:"", options:["","","",""], correct:0 }; }

function bindNewBookFormEvents(user){
  const addPageBtn = document.getElementById("addPageBtn");
  if(addPageBtn) addPageBtn.addEventListener("click", ()=>{ syncDraftFromDOM(); bookEditorState.draft.pages.push(""); render(); });

  document.querySelectorAll("[data-remove-page]").forEach(el=>{
    el.addEventListener("click", ()=>{
      syncDraftFromDOM();
      const i = Number(el.getAttribute("data-remove-page"));
      bookEditorState.draft.pages.splice(i,1);
      render();
    });
  });

  const addQBtn = document.getElementById("addQuestionBtn");
  if(addQBtn) addQBtn.addEventListener("click", ()=>{ syncDraftFromDOM(); bookEditorState.draft.questions.push(blankQuestion()); render(); });

  document.querySelectorAll("[data-remove-question]").forEach(el=>{
    el.addEventListener("click", ()=>{
      syncDraftFromDOM();
      const i = Number(el.getAttribute("data-remove-question"));
      bookEditorState.draft.questions.splice(i,1);
      render();
    });
  });

  const newBookForm = document.getElementById("newBookForm");
  if(newBookForm) newBookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    syncDraftFromDOM();
    const fd = new FormData(newBookForm);
    const draft = bookEditorState.draft;
    draft.title = fd.get("title").toString().trim();
    draft.author = fd.get("author").toString().trim();
    draft.language = fd.get("language").toString();
    draft.summary = fd.get("summary").toString().trim();
    const dueDate = fd.get("dueDate").toString();

    const cleanPages = draft.pages.map(p=>p.trim()).filter(Boolean);
    if(cleanPages.length < 1){ toast("Add at least one page.", "err"); return; }
    const cleanQuestions = draft.questions.filter(q=>q.q.trim() && q.options.every(o=>o.trim()));
    if(cleanQuestions.length < 1){ toast("Add at least one complete quiz question.", "err"); return; }

    const palette = [["#1F7A67","#123832"],["#F0983D","#C97223"],["#E15C4B","#8f2f22"],["#E7B84B","#a3792a"]];
    const colors = palette[Math.floor(Math.random()*palette.length)];
    const newBook = {
      id: uid("bk"), title: draft.title, author: draft.author, language: draft.language,
      summary: draft.summary, cover:{ emoji: draft.language==='en'?'📘':'📙', color1:colors[0], color2:colors[1] },
      pages: cleanPages, questions: cleanQuestions, createdBy:user.id, global:false,
      assignments:[{ classroomId: bookEditorState.classroomId, dueDate }]
    };
    DB.books.push(newBook); saveDB();
    bookEditorState = null;
    toast(`"${newBook.title}" published to classroom!`, "gold");
    render();
  });
}

function syncDraftFromDOM(){
  if(!bookEditorState || bookEditorState.mode!=="new") return;
  const draft = bookEditorState.draft;
  document.querySelectorAll("[data-page-idx]").forEach(el=>{
    draft.pages[Number(el.getAttribute("data-page-idx"))] = el.value;
  });
  document.querySelectorAll("[data-q-idx]").forEach(el=>{
    draft.questions[Number(el.getAttribute("data-q-idx"))].q = el.value;
  });
  document.querySelectorAll("[data-opt-idx]").forEach(el=>{
    const qi = Number(el.getAttribute("data-opt-idx"));
    const oi = Number(el.getAttribute("data-opt-num"));
    draft.questions[qi].options[oi] = el.value;
  });
  document.querySelectorAll("[data-correct-idx]:checked").forEach(el=>{
    const qi = Number(el.getAttribute("data-correct-idx"));
    draft.questions[qi].correct = Number(el.getAttribute("data-opt-val"));
  });
}

/* =====================================================================
   AI CHATBOT (rule-based reading buddy — no external API required)
===================================================================== */
let chatOpen = false;
let chatHistory = []; // {from:'bot'|'user', text}

function renderChatbot(user){
  const root = document.getElementById("chatbot-root");
  root.innerHTML = `
    ${chatOpen ? renderChatPanel(user) : ""}
    <button class="chat-fab" id="chatFab" aria-label="Open reading buddy chat">${chatOpen ? "✕" : "💬"}</button>
  `;
  document.getElementById("chatFab").addEventListener("click", ()=>{
    chatOpen = !chatOpen;
    if(chatOpen && chatHistory.length===0) seedChatGreeting(user);
    renderChatbot(user);
  });
  if(chatOpen) bindChatEvents(user);
}

function seedChatGreeting(user){
  const bookCtx = ROUTE.screen==="reader" || ROUTE.screen==="quiz" ? DB.books.find(b=>b.id===ROUTE.params.bookId) : null;
  const greet = user.role==="admin"
    ? `Hi ${user.name.split(" ")[0]}! I'm Buddy 🤖. Ask me about your classrooms, students, or any published book.`
    : bookCtx
      ? `Hi ${user.name.split(" ")[0]}! I see you're reading "${bookCtx.title}". Ask me what it's about, or anything else!`
      : `Hi ${user.name.split(" ")[0]}! I'm Buddy, your reading companion 🤖. Ask me about a book, your points, or how the app works.`;
  chatHistory.push({from:"bot", text:greet});
}

function renderChatPanel(user){
  const suggestions = user.role==="admin"
    ? ["How do I publish a book?", "How does the leaderboard work?", "What's the MVR award?"]
    : ["What is this book about?", "How do I earn points?", "What is the MVR award?"];
  return `
  <div class="chat-panel">
    <div class="chat-head">
      <div class="ic">🤖</div>
      <div><h4>Buddy — Reading Assistant</h4><p>Ask about any book or the app</p></div>
      <button class="x" id="chatCloseBtn">✕</button>
    </div>
    <div class="chat-body" id="chatBody">
      ${chatHistory.map(m=>`<div class="msg ${m.from}">${esc(m.text)}</div>`).join("")}
    </div>
    <div class="chat-suggestions">${suggestions.map(s=>`<button class="chat-sugg-btn" data-sugg="${esc(s)}">${esc(s)}</button>`).join("")}</div>
    <form class="chat-input-row" id="chatForm">
      <input type="text" id="chatInput" placeholder="Type a message…" autocomplete="off">
      <button type="submit">➤</button>
    </form>
  </div>`;
}

function bindChatEvents(user){
  document.getElementById("chatCloseBtn").addEventListener("click", ()=>{ chatOpen=false; renderChatbot(user); });
  const body = document.getElementById("chatBody");
  body.scrollTop = body.scrollHeight;
  document.querySelectorAll("[data-sugg]").forEach(el=>{
    el.addEventListener("click", ()=> sendChatMessage(user, el.getAttribute("data-sugg")));
  });
  const form = document.getElementById("chatForm");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if(!text) return;
    input.value = "";
    sendChatMessage(user, text);
  });
}

function sendChatMessage(user, text){
  chatHistory.push({from:"user", text});
  renderChatbot(user);
  const body = document.getElementById("chatBody");
  if(body){
    const typing = document.createElement("div");
    typing.className = "msg bot"; typing.id = "typingIndicator";
    typing.innerHTML = `<span class="typing-dots"><span></span><span></span><span></span></span>`;
    body.appendChild(typing); body.scrollTop = body.scrollHeight;
  }
  setTimeout(()=>{
    const reply = generateBotReply(user, text);
    chatHistory.push({from:"bot", text: reply});
    renderChatbot(user);
  }, 550 + Math.random()*400);
}

function generateBotReply(user, raw){
  const t = raw.toLowerCase();
  const bookCtx = (ROUTE.screen==="reader" || ROUTE.screen==="quiz")
    ? DB.books.find(b=>b.id===ROUTE.params.bookId) : null;

  const has = (...words) => words.some(w=>t.includes(w));

  if(has("hello","hi ","hi!","hey","kumusta","magandang")) {
    return `Hello!  ${bookCtx ? `Ready to talk about "${bookCtx.title}"?` : "What would you like to know?"}`;
  }
  if(has("thank","salamat")) return "You're welcome! Happy reading! ";

  if(has("what is this book about","summary","about the book","buod","tungkol saan")){
    if(bookCtx) return `"${bookCtx.title}" — ${bookCtx.summary}`;
    return "Open a book from the Library first, then ask me and I'll summarize it for you!";
  }
  if(has("author","sino ang may akda","gumawa")){
    if(bookCtx) return `"${bookCtx.title}" was written by ${bookCtx.author}.`;
    return "Tell me which book, or open one, and I can tell you the author.";
  }
  if(has("how many pages","ilang pahina")){
    if(bookCtx) return `"${bookCtx.title}" has ${bookCtx.pages.length} pages.`;
    return "Open a book and I'll tell you its page count!";
  }
  if(has("language","wika","filipino or english")){
    if(bookCtx) return `This book is written in ${bookCtx.language==='en'?'English':'Filipino'}.`;
    return "We have books in both English 🇬🇧 and Filipino 🇵🇭 — check the Library filters!";
  }
  if(has("points","score","how do i earn","paano kumita")){
    return "You earn 50 points for finishing a book, plus 5 points for each correct quiz answer — up to 100 points per book! Admins can also award bonus points.";
  }
  if(has("mvr","most valuable reader","award","trophy")){
    return "The Most Valuable Reader of the Year Award 🏆 is unlocked after finishing 10 books, in or outside your classrooms. Check your progress on the Achievements page!";
  }
  if(has("leaderboard","ranking","top reader")){
    return "The Leaderboard ranks readers by total points — check the Global board or your classroom's board from the top menu!";
  }
  if(has("join","classroom code","code")){
    return user.role==="admin"
      ? "Students join using the unique code shown on each classroom card — share it with your class!"
      : "Go to Home → Join a classroom, then type in the code your teacher gave you.";
  }
  if(has("publish","assign book","how do i add a book","due date")){
    return "Inside a classroom, open the Books tab and choose 'Publish new book' or 'Assign existing book', then set a due date.";
  }
  if(has("attendance","did i read","mark")){
    return user.role==="admin"
      ? "Open a classroom → Roster tab to see each student's reading status per book, and award bonus points."
      : "Your teacher can see your reading status once you start or finish a book — keep reading!";
  }
  if(has("quiz","questionnaire")){
    return "After you finish the last page, you'll get a fun 10-question quiz about the book. Answer well for bonus points!";
  }
  if(has("help","how does this work","features")){
    return "I can help with: book summaries, points & badges, the Most Valuable Reader award, joining classrooms, and quizzes. Just ask!";
  }
  if(bookCtx && has("hint","tip","help me remember")){
    return `Tip: try re-reading page ${Math.min((studentProgressFor(user.id,bookCtx.id)?.currentPage||0)+1, bookCtx.pages.length)} slowly — comprehension questions often hide in small details!`;
  }

  const fallback = [
    "That's a great question! Try browsing the Library — I can tell you about any book once you open it.",
    "Hmm, I'm best at book summaries, points, and classroom help. Could you rephrase that?",
    "I love a curious reader! Ask me about a book's summary, author, or how points work.",
    "Let's keep the reading streak going — want a book recommendation?"
  ];
  return fallback[Math.floor(Math.random()*fallback.length)];
}

/* =====================================================================
   Boot
===================================================================== */
function boot(){
  loadDB();
  const user = currentUser();
  ROUTE = { screen: user ? (user.role==="admin" ? "admin-home" : "student-home") : "auth", params:{} };
  render();
}
document.addEventListener("DOMContentLoaded", boot);