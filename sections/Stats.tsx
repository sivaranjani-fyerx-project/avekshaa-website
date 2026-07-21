// sections/Stats.tsx

'use client';

export default function Stats() {

  return (

    <section className="gd">

      <div className="wrap">

        <header className="head">

          <h1><span className="grad">GoodDay v.7</span> – A Decade of Innovation</h1>

          <p>Experience the future of work with GoodDay v.7 — smarter workflows, greater flexibility and a better way to work.</p>

        </header>

        {/* Row 1 */}

        <div className="row">

          <section className="card blue ws">

            <div className="ws-art">

              <span className="ico person">👤</span>

              <span className="ico bank">🏛️</span>

              <span className="ico doc">📄</span>

              <span className="ico target">🎯</span>

              <span className="pill pw">Workflow</span>

              <span className="pill pf">Fields</span>

              <span className="pill ps">Solution</span>

            </div>

            <div className="txt">

              <h2>Workspace 2.0</h2>

              <p className="body">Customize your space, optimize workflows, and collaborate seamlessly.</p>

            </div>

          </section>

          <section className="card cream fv">

            <div className="txt" style={{ flex: 1 }}>

              <h2>Flex Views</h2>

              <p className="body">Flex Views give you full control over organizing and analyzing your work.</p>

            </div>

            <div className="fv-art">

              <div className="mini m1"><div className="ln a" /><div className="ln b" /><div className="ln c" /></div>

              <div className="mini m2"><div className="ln b" /><div className="ln a" /><div className="ln b" /></div>

              <div className="mini m3"><div className="ln c" /><div className="ln b" /><div className="ln a" /></div>

            </div>

          </section>

        </div>

        {/* Bento */}

        <div className="bento">

          <section className="card green prod">

            <div className="apps">

              <span className="app"><span className="e">🎥</span>Meetings</span>

              <span className="app"><span className="e">📅</span>Events</span>

              <span className="app"><span className="e">📨</span>Requests</span>

              <span className="app"><span className="e">📝</span>Notes</span>

              <span className="app"><span className="e">📁</span>Files</span>

              <span className="app"><span className="e">⚙️</span>Automations</span>

              <span className="app"><span className="e">💬</span>Discussion</span>

              <span className="app"><span className="e">✅</span>To-do lists</span>

              <span className="app"><span className="e">💭</span>Chats</span>

              <span className="app"><span className="e">📄</span>Documents</span>

              <span className="app"><span className="e">🏆</span>Goals</span>

              <span className="app"><span className="e">⭐</span>My work</span>

              <span className="app"><span className="e">🔔</span>Reminders</span>

              <span className="app"><span className="e">⏱️</span>Time</span>

            </div>

            <div className="foot-txt">

              <h2>Productivity Suite</h2>

              <p className="body">Work isn&apos;t just tasks! Boost productivity of your team by 20% with GoodDay&apos;s suite of apps.</p>

              <a className="learn" href="#">Learn more →</a>

            </div>

          </section>

          <section className="card lav action">

            <h2>Action Required</h2>

            <p className="body">Use transparent, seamless collaboration as part of your day-to-day workflow.</p>

            <div className="timeline">

              <div className="tl-line" />

              <div className="tl">

                <span className="av a1">🧑🏽</span><span className="node" />

                <span className="when"><b>Monday</b><span>6:00 AM</span></span>

              </div>

              <div className="tl">

                <span className="av a2">🧑🏻</span><span className="node" />

                <span className="when"><b>Monday</b><span>4:00 PM</span></span>

              </div>

              <div className="tl">

                <span className="av a3">👧🏼</span><span className="node" />

                <span className="when"><b>Thursday</b><span>8:00 AM</span></span>

              </div>

            </div>

          </section>

          <section className="card plum tpl">

            <h2>One-click start with GoodDay Workspace Templates</h2>

            <div className="tpl-art">

              <div className="row2">

                <div className="side">

                  <div className="li" /><div className="li" /><div className="li" /><div className="li" /><div className="li" />

                </div>

                <div className="folder" />

              </div>

            </div>

          </section>

          <section className="card pink ai">

            <div className="txt">

              <h2>GoodDay AI</h2>

              <p className="body">AI assistant for smarter work, and seamless productivity.</p>

            </div>

            <div className="ai-art">

              <div className="circle" />

              <span className="ai-word">AI</span>

              <span className="chip c1">📋</span>

              <span className="chip c2">🗂️</span>

              <span className="chip c3">📊</span>

              <span className="chip c4">🔔</span>

              <span className="badge">7</span>

            </div>

          </section>

        </div>

      </div>

      <style jsx>{`

        .gd { --ink:#26304a; --ink-soft:#5b6178; --muted:#7b8194; --purple:#7c5cff; --purple2:#9b5cff;

          background:#fff; color:var(--ink); -webkit-font-smoothing:antialiased; padding:80px 24px;

          font-family:'Inter','Segoe UI',system-ui,-apple-system,Arial,sans-serif; }

        @media (min-width:640px){ .gd{ padding-top:112px; padding-bottom:112px; } }

        @media (min-width:1024px){ .gd{ padding-left:40px; padding-right:40px; } }

        .wrap{ max-width:940px; margin:0 auto; }

        .head{ text-align:center; margin-bottom:34px; }

        .head h1{ font-size:34px; font-weight:800; letter-spacing:-.02em; }

        .head h1 .grad{ background:linear-gradient(90deg, #16b48e, #9b5cff87);

          -webkit-background-clip:text; background-clip:text; color:transparent; }

        .head p{ margin:12px auto 0; max-width:660px; font-size:15px; color:#5f8a86; }

        .row{ display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px; }

        .bento{ display:grid; grid-template-columns:repeat(3,1fr); grid-auto-rows:1fr; gap:18px; }

        .card{ position:relative; border-radius:20px; padding:26px;

          border:1px solid rgba(38,48,74,.06); overflow:hidden; }

        .card h2{ font-size:22px; font-weight:700; letter-spacing:-.01em; margin-bottom:10px; }

        .card .body{ font-size:14px; line-height:1.55; color:var(--ink-soft); }

        .blue{ background:linear-gradient(135deg,#e9f3fb 0%,#f6fbff 70%); }

        .cream{ background:linear-gradient(135deg,#fdf4e8 0%,#fffaf1 70%); }

        .green{ background:linear-gradient(135deg,#eef6ec 0%,#f6fbf4 70%); }

        .lav{ background:linear-gradient(135deg,#eef0f8 0%,#f6f7fc 70%); }

        .plum{ background:linear-gradient(135deg,#f0ecfa 0%,#f8f4fd 70%); }

        .pink{ background:linear-gradient(135deg,#fceef2 0%,#fef6f8 70%); }

        .ws{ display:flex; align-items:center; gap:22px; }

        .ws-art{ position:relative; width:150px; height:170px; flex:0 0 150px; }

        .ico{ position:absolute; width:52px; height:52px; border-radius:15px; display:grid; place-items:center;

          font-size:24px; color:#fff; box-shadow:0 8px 18px -8px rgba(38,48,74,.35); }

        .ico.person{ background:linear-gradient(135deg,#e0559a,#c93f86); left:6px; top:12px; }

        .ico.bank{ width:66px; height:66px; border-radius:50%; background:linear-gradient(135deg,#4a90e2,#3f7fd0);

          left:50px; top:60px; font-size:28px; }

        .ico.doc{ background:linear-gradient(135deg,#f4a52a,#ef8f1f); right:0; top:34px; }

        .ico.target{ background:linear-gradient(135deg,#9a5fe0,#7d43cf); left:8px; bottom:8px; }

        .pill{ position:absolute; background:#fff; border:1px solid #eef0f4; border-radius:100px;

          font-size:11.5px; font-weight:600; color:#4a4f63; padding:5px 12px;

          box-shadow:0 6px 14px -8px rgba(38,48,74,.25); }

        .pill.pw{ right:-4px; top:2px; } .pill.pf{ left:-14px; top:70px; } .pill.ps{ right:2px; bottom:22px; }

        .ws .txt h2{ margin-bottom:8px; }

        .fv{ display:flex; align-items:center; gap:20px; }

        .fv-art{ position:relative; width:150px; height:150px; flex:0 0 150px; }

        .mini{ position:absolute; width:96px; height:70px; background:#fff; border-radius:10px;

          border:1px solid #f0e7d5; box-shadow:0 8px 18px -10px rgba(120,90,20,.3); padding:9px; }

        .mini .ln{ height:5px; border-radius:3px; background:#eef1f5; margin-bottom:5px; }

        .mini .ln.a{ width:60%; } .mini .ln.b{ width:85%; } .mini .ln.c{ width:45%; }

        .m1{ left:8px; top:6px; transform:rotate(-8deg); }

        .m2{ right:6px; top:30px; transform:rotate(7deg); z-index:2; }

        .m3{ left:20px; bottom:6px; transform:rotate(-3deg); }

        .prod{ grid-row:span 2; display:flex; flex-direction:column; }

        .apps{ display:flex; flex-wrap:wrap; gap:7px; margin-bottom:20px; }

        .app{ display:inline-flex; align-items:center; gap:6px; background:#fff; border:1px solid #edf1ec;

          border-radius:100px; padding:6px 11px; font-size:12px; font-weight:600; color:#4a4f63;

          box-shadow:0 4px 10px -8px rgba(38,48,74,.3); }

        .app .e{ font-size:13px; line-height:1; }

        .prod .foot-txt{ margin-top:auto; }

        .learn{ display:inline-flex; align-items:center; gap:6px; margin-top:12px;

          color:#3a7bd5; font-weight:600; font-size:14px; text-decoration:none; }

        .learn:hover{ text-decoration:underline; }

        .action{ grid-row:span 2; display:flex; flex-direction:column; }

        .timeline{ margin-top:20px; position:relative; padding-left:8px; }

        .tl-line{ position:absolute; left:19px; top:14px; bottom:14px; width:2px;

          background:repeating-linear-gradient(#cfd4e6 0 6px,transparent 6px 12px); }

        .tl{ display:flex; align-items:center; gap:14px; margin-bottom:22px; position:relative; }

        .av{ width:40px; height:40px; border-radius:50%; display:grid; place-items:center; font-size:20px;

          background:#fff; border:2px solid #fff; box-shadow:0 6px 14px -8px rgba(38,48,74,.35); z-index:1; }

        .av.a1{ background:linear-gradient(135deg,#5b6bd6,#48539f); }

        .av.a2{ background:linear-gradient(135deg,#3fae8a,#2f8f70); }

        .av.a3{ background:linear-gradient(135deg,#f0c04a,#e0a52a); }

        .tl .when{ font-size:13px; }

        .tl .when b{ display:block; font-weight:700; color:var(--ink); }

        .tl .when span{ color:var(--muted); font-size:12px; }

        .tl .node{ width:9px; height:9px; border-radius:50%; background:#8f9bd6; margin-left:-3px; }

        .tpl{ overflow:hidden; }

        .tpl h2{ max-width:11ch; }

        .tpl-art{ position:absolute; right:-6px; bottom:-6px; width:150px; height:120px;

          background:#fff; border-radius:12px 0 0 0; border:1px solid #ece6f6; padding:12px;

          box-shadow:-8px -8px 20px -14px rgba(90,60,150,.4); }

        .tpl-art .row2{ display:flex; gap:8px; }

        .tpl-art .side .li{ width:56px; height:6px; border-radius:3px; background:#eceaf3; margin-bottom:7px; }

        .tpl-art .side .li:first-child{ background:#d9d2ee; }

        .tpl-art .folder{ width:34px; height:26px; background:linear-gradient(135deg,#5a8dee,#3f6fd0);

          border-radius:5px; margin-left:auto; position:relative; }

        .tpl-art .folder:before{ content:""; position:absolute; top:-5px; left:4px; width:14px; height:6px;

          background:#3f6fd0; border-radius:3px 3px 0 0; }

        .ai{ display:flex; align-items:center; gap:8px; }

        .ai .txt{ max-width:52%; }

        .ai-art{ position:relative; width:150px; height:130px; flex:0 0 150px; }

        .ai-art .circle{ position:absolute; inset:14px; border:2px dashed #e6b9cf; border-radius:50%; }

        .ai-art .ai-word{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);

          font-size:34px; font-weight:800; background:linear-gradient(135deg,#8a5fe0,#e0559a);

          -webkit-background-clip:text; background-clip:text; color:transparent; }

        .chip{ position:absolute; width:30px; height:30px; background:#fff; border-radius:9px; display:grid;

          place-items:center; font-size:15px; box-shadow:0 6px 14px -8px rgba(150,60,110,.4); }

        .chip.c1{ left:6px; top:4px; } .chip.c2{ right:0; top:16px; }

        .chip.c3{ right:8px; bottom:6px; } .chip.c4{ left:2px; bottom:16px; }

        .badge{ position:absolute; left:60px; bottom:36px; width:20px; height:20px; border-radius:50%;

          background:#e8517a; color:#fff; font-size:11px; font-weight:700; display:grid; place-items:center;

          box-shadow:0 4px 10px -4px rgba(200,40,90,.5); }

        @media (max-width:820px){

          .row{ grid-template-columns:1fr; }

          .bento{ grid-template-columns:1fr; }

          .prod, .action{ grid-row:auto; }

        }

        @media (max-width:560px){

          .head h1{ font-size:26px; }

          .head p{ font-size:14px; }

          .card{ padding:20px; }

          .card h2{ font-size:19px; }

          .ws, .fv, .ai{ flex-direction:column; align-items:flex-start; gap:16px; }

          .ws-art, .fv-art, .ai-art{ width:120px; height:120px; flex:0 0 auto; align-self:center; }

          .ai .txt{ max-width:100%; }

        }

      `}</style>

    </section>

  );

}
