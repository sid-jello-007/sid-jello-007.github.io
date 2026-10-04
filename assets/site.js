// Scripted "ask Sid" panel: pre-written answers, typed out. No network calls.
(function () {
  const QA = [
    ["What are you working on right now?",
     "Agents for the software delivery lifecycle of a mobile banking app: spec to tickets, code generation and test generation, on GitHub Copilot and custom MCP servers. My job is making them useful enough that developers keep using them, and safe enough that the bank lets them."],
    ["How do you approach an AI product?",
     "Problem first, model second. I find the handoff that hurts, agree with users and risk what 'good' looks like as an eval, then build to it. Guardrails are part of the product, not a wrapper around it."],
    ["Why fintech and banking?",
     "Regulated industries are where AI has the most to prove and the most to gain. I spent three years shipping wallets, card marketplaces and KYB onboarding, so I know where compliance turns a 'yes' into a 'yes, with these limits'."],
    ["What have you built yourself?",
     "An agentic SDLC playbook with working agents and evals, an interactive case study of a digital wallet, a learning app for AI PMs and a fitness app. All the code is on my GitHub, and three of them are live."],
  ];
  const out = document.getElementById("term-out");
  const qs = document.getElementById("term-qs");
  if (!out || !qs) return;
  const intro = "Hi, these are Sid's own answers to the questions people ask him most. Pick one below.";
  let timer = null;
  function type(text) {
    clearInterval(timer);
    let i = 0;
    out.innerHTML = '<span class="cursor"></span>';
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { out.textContent = text; return; }
    timer = setInterval(() => {
      i += 2;
      out.textContent = text.slice(0, i);
      const c = document.createElement("span"); c.className = "cursor"; out.appendChild(c);
      if (i >= text.length) clearInterval(timer);
    }, 14);
  }
  QA.forEach(([q, a]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = "› " + q;
    b.addEventListener("click", () => {
      qs.querySelectorAll("button").forEach((x) => x.classList.remove("on"));
      b.classList.add("on");
      type(a);
    });
    qs.appendChild(b);
  });
  type(intro);
})();
