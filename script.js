const questions = [
  {
    tag: "Nó de Decisão 01 • Ponto de Partida",
    question: "1. Qual aspecto da tecnologia mais desperta sua curiosidade?",
    desc: "Escolha a alternativa que mais combina com o seu interesse inicial.",
    options: [
      {
        label: "🎨 Visual, Design e Telas",
        sub: "Gosto da parte que as pessoas veem, clicam e interagem.",
        choiceText: "Visual & Telas",
        points: { frontend: 2, ux: 2 }
      },
      {
        label: "⚙️ Lógica, Códigos e Dados",
        sub: "Prefiro resolver problemas complexos, algoritmos e inteligência.",
        choiceText: "Lógica & Dados",
        points: { backend: 2, ai: 2 }
      },
      {
        label: "🛡️ Proteção, Redes e Hardware",
        sub: "Tenho interesse em segurança digital ou dispositivos físicos.",
        choiceText: "Segurança & Hardware",
        points: { cyber: 2, iot: 2 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 02 • Método de Trabalho",
    question: "2. Como você prefere resolver um desafio ou criar algo novo?",
    desc: "Seu jeito de pensar ajuda a direcionar a ramificação do fluxograma.",
    options: [
      {
        label: "📐 Desenhando e testando ideias com usuários",
        sub: "Foco em empatia, estética e facilidade de uso.",
        choiceText: "Design & Usuários",
        points: { ux: 3, frontend: 1 }
      },
      {
        label: "💻 Escrevendo código e estruturando regras",
        sub: "Gosto de fazer o sistema funcionar perfeitamente por trás das cenas.",
        choiceText: "Código & Regras",
        points: { frontend: 2, backend: 2 }
      },
      {
        label: "🔬 Investigando falhas ou montando circuitos",
        sub: "Gosto de testar limites, proteger sistemas ou mexer em hardware.",
        choiceText: "Testes & Circuitos",
        points: { cyber: 2, iot: 2 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 03 • Ferramentas",
    question: "3. Qual tipo de ferramenta você mais gostaria de dominar?",
    desc: "Escolha o conjunto tecnológico que parece mais interessante para você.",
    options: [
      {
        label: "🖌️ Figma, HTML, CSS e React",
        sub: "Criação de interfaces modernas, animações e aplicativos.",
        choiceText: "Interfaces & Web",
        points: { frontend: 2, ux: 2 }
      },
      {
        label: "🧠 Python, Bancos de Dados e Machine Learning",
        sub: "Manipulação de grandes volumes de informação e IA.",
        choiceText: "Python & IA",
        points: { backend: 2, ai: 3 }
      },
      {
        label: "🔌 Linux, Criptografia, Arduino e Sensores",
        sub: "Defesa cibernética, redes ou robótica conectada.",
        choiceText: "Linux & Robótica",
        points: { cyber: 2, iot: 3 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 04 • Onde seu trabalho aparece",
    question: "4. Em qual camada de um produto tecnológico você quer atuar?",
    desc: "Todo sistema moderno é dividido em camadas conectadas.",
    options: [
      {
        label: "📱 Na camada visível (Front-End / Experiência)",
        sub: "Onde o usuário toca, navega e avalia a qualidade do app.",
        choiceText: "Camada Visível",
        points: { frontend: 2, ux: 2 }
      },
      {
        label: "🗄️ Na camada lógica e inteligente (Servidores / IA)",
        sub: "Onde os dados são processados e decisões são tomadas.",
        choiceText: "Camada Lógica",
        points: { backend: 3, ai: 2 }
      },
      {
        label: "🌐 Na camada física e de defesa (Infraestrutura)",
        sub: "Onde os dispositivos se conectam e são protegidos.",
        choiceText: "Infraestrutura",
        points: { cyber: 2, iot: 2 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 05 • Matemática e Padrões",
    question: "5. Qual é a sua relação com matemática, estatística e gráficos?",
    desc: "A Matemática II está presente em várias áreas da computação.",
    options: [
      {
        label: "📊 Adoro! Quero usar estatística para prever tendências",
        sub: "Treinar modelos inteligentes e analisar padrões ocultos.",
        choiceText: "Estatística & IA",
        points: { ai: 3, backend: 1 }
      },
      {
        label: "📏 Uso lógica e geometria para proporções e cálculos",
        sub: "Alinhamento visual, física de jogos ou eletrônica.",
        choiceText: "Lógica & Geometria",
        points: { frontend: 1, ux: 1, iot: 2 }
      },
      {
        label: "🔐 Prefiro lógica booleana, criptografia e redes",
        sub: "Raciocínio investigativo para encontrar brechas e proteger dados.",
        choiceText: "Criptografia",
        points: { cyber: 3, backend: 1 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 06 • Resolução de Crises",
    question: "6. Se um aplicativo famoso falhar hoje, o que você faria primeiro?",
    desc: "Sua reação diante de um bug revela seu instinto profissional.",
    options: [
      {
        label: "🎯 Verificaria se os botões e telas confundiram o usuário",
        sub: "Foco na clareza visual e na jornada de quem usa.",
        choiceText: "Foco no Usuário",
        points: { ux: 3, frontend: 1 }
      },
      {
        label: "⚡ Analisaria se o servidor travou ou se o banco de dados caiu",
        sub: "Foco em estabilidade, APIs e desempenho do sistema.",
        choiceText: "Foco no Servidor",
        points: { backend: 3, ai: 1 }
      },
      {
        label: "🚨 Investigaria se houve ataque hacker ou falha de conexão",
        sub: "Foco em proteção, integridade e comunicação de rede.",
        choiceText: "Foco em Defesa",
        points: { cyber: 3, iot: 1 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 07 • Projeto dos Sonhos",
    question: "7. Qual destes projetos deixaria você mais orgulhoso(a) de construir?",
    desc: "Escolha o resultado prático que mais motiva você.",
    options: [
      {
        label: "✨ Um aplicativo super bonito, rápido e premiado pelo design",
        sub: "Milhões de pessoas usando sua interface todos os dias.",
        choiceText: "App Premiado",
        points: { frontend: 2, ux: 2 }
      },
      {
        label: "🤖 Uma Inteligência Artificial ou um robô autônomo",
        sub: "Tecnologia de ponta que aprende e interage com o mundo.",
        choiceText: "IA ou Robô",
        points: { ai: 2, iot: 2 }
      },
      {
        label: "🛡️ Um sistema bancário blindado contra qualquer invasão",
        sub: "Arquitetura robusta e segurança máxima de informações.",
        choiceText: "Sistema Blindado",
        points: { backend: 2, cyber: 2 }
      }
    ]
  },
  {
    tag: "Nó de Decisão 08 • Critério Final",
    question: "8. Na reta final de entrega de um projeto, qual é sua prioridade máxima?",
    desc: "Última decisão do fluxograma antes de calcular seu resultado!",
    options: [
      {
        label: "🎨 Que a interface seja impecável, intuitiva e responsiva",
        sub: "Cada pixel e animação no lugar certo.",
        choiceText: "Interface Impecável",
        points: { frontend: 3, ux: 2 }
      },
      {
        label: "🧠 Que o sistema seja inteligente, escalável e sem erros lógicos",
        sub: "Código limpo, rápido e orientado a dados.",
        choiceText: "Sistema Inteligente",
        points: { backend: 2, ai: 3 }
      },
      {
        label: "🔒 Que tudo esteja protegido, conectado e funcionando na prática",
        sub: "Segurança total e integração perfeita.",
        choiceText: "Proteção & Prática",
        points: { cyber: 2, iot: 3 }
      }
    ]
  }
];

const profiles = {
  frontend: {
    tag: "Terminal A1 • Resultado do Fluxograma",
    icon: "💻",
    title: "Desenvolvedor(a) Front-End",
    desc: "Suas respostas mostram forte afinidade com a criação de interfaces interativas! Você transforma ideias e designs em sites e aplicativos rápidos, modernos e responsivos.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind"]
  },
  ux: {
    tag: "Terminal A2 • Resultado do Fluxograma",
    icon: "✨",
    title: "UI/UX Designer",
    desc: "Você tem olhar apurado para estética, comportamento humano e usabilidade. Seu talento é projetar experiências digitais intuitivas que resolvem problemas reais das pessoas.",
    skills: ["Figma", "Design Systems", "Prototipagem", "Pesquisa UX", "Acessibilidade"]
  },
  backend: {
    tag: "Terminal B1 • Resultado do Fluxograma",
    icon: "⚙️",
    title: "Desenvolvedor(a) Back-End",
    desc: "Seu perfil é analítico e estruturado! Você constrói os bastidores dos sistemas: bancos de dados, regras de negócio, servidores de alta velocidade e APIs seguras.",
    skills: ["Python", "Node.js", "Java", "SQL", "APIs REST", "Docker"]
  },
  ai: {
    tag: "Terminal B2 • Resultado do Fluxograma",
    icon: "🧠",
    title: "Engenheiro(a) de IA & Dados",
    desc: "Você combina matemática, lógica e programação para ensinar máquinas a aprender, identificar padrões em grandes volumes de dados e criar soluções inteligentes.",
    skills: ["Python", "Machine Learning", "Estatística", "PyTorch", "Ciência de Dados"]
  },
  cyber: {
    tag: "Terminal C1 • Resultado do Fluxograma",
    icon: "🛡️",
    title: "Especialista em Cibersegurança",
    desc: "Seu instinto investigativo e foco em proteção fazem de você um(a) guardião(ã) digital — identificando vulnerabilidades, aplicando criptografia e defendendo sistemas.",
    skills: ["Redes", "Linux", "Criptografia", "Ethical Hacking", "Segurança em Nuvem"]
  },
  iot: {
    tag: "Terminal C2 • Resultado do Fluxograma",
    icon: "🤖",
    title: "Engenheiro(a) de Robótica & IoT",
    desc: "Você gosta de unir código ao mundo físico! Seu caminho envolve programar microcontroladores, sensores, automação inteligente e dispositivos conectados.",
    skills: ["C/C++", "Arduino / ESP32", "Eletrônica", "Sensores", "Automação"]
  }
};

let answersHistory = [];

function calculateResult() {
  const scores = { frontend: 0, ux: 0, backend: 0, ai: 0, cyber: 0, iot: 0 };

  answersHistory.forEach(answer => {
    for (const [key, val] of Object.entries(answer.points)) {
      scores[key] += val;
    }
  });

  let bestKey = 'frontend';
  let maxScore = -1;

  for (const [key, val] of Object.entries(scores)) {
    if (val > maxScore) {
      maxScore = val;
      bestKey = key;
    }
  }

  return profiles[bestKey];
}

function renderFlow() {
  const stepIndex = answersHistory.length;
  const totalQuestions = questions.length;
  const card = document.getElementById('flow-card');
  const trail = document.getElementById('trail');
  const progressFill = document.getElementById('progress-fill');
  const progressCount = document.getElementById('progress-count');

  // Atualiza trilha de navegação
  const trailItems = [`<span class="trail-step">🚀 Início</span>`];
  answersHistory.forEach(item => {
    trailItems.push(`<span class="trail-arrow">➔</span><span class="trail-step">${item.choiceText}</span>`);
  });
  trail.innerHTML = trailItems.join('');

  if (stepIndex < totalQuestions) {
    const q = questions[stepIndex];
    const percent = ((stepIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${percent}%`;
    progressCount.textContent = `Pergunta ${stepIndex + 1} de ${totalQuestions}`;

    card.innerHTML = `
      <span class="node-tag">${q.tag}</span>
      <h1 class="node-question">${q.question}</h1>
      <p class="node-desc">${q.desc}</p>
      <div class="options-grid">
        ${q.options.map((opt, idx) => `
          <button class="option-btn" onclick="chooseOption(${stepIndex}, ${idx})">
            <span class="option-title">
              ${opt.label}
              <span>→</span>
            </span>
            <span class="option-sub">${opt.sub}</span>
          </button>
        `).join('')}
      </div>
      <div class="controls">
        <button class="btn-secondary" onclick="goBack()" ${stepIndex === 0 ? 'disabled' : ''}>
          ← Voltar pergunta
        </button>
        <span style="font-size: 0.8rem; color: var(--text-muted);">
          Etapa ${stepIndex + 1} / ${totalQuestions}
        </span>
      </div>
    `;
  } else {
    const result = calculateResult();
    progressFill.style.width = `100%`;
    progressCount.textContent = `Concluído (8/8)`;

    card.innerHTML = `
      <span class="node-tag" style="color: var(--success);">${result.tag}</span>
      <h1 class="node-question">Resultado das suas 8 respostas:</h1>
      
      <div class="result-box">
        <div class="result-header">
          <div class="result-icon">${result.icon}</div>
          <div>
            <h2 style="font-size: 1.4rem; color: #fff;">${result.title}</h2>
            <span style="font-size: 0.85rem; color: #6ee7b7;">Caminho definido pelo algoritmo de decisão</span>
          </div>
        </div>
        <p style="color: #e2e8f0; line-height: 1.6; font-size: 0.95rem;">
          ${result.desc}
        </p>
        <div class="skills-list">
          ${result.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
        </div>
      </div>

      <div class="controls">
        <button class="btn-secondary" onclick="goBack()">
          ← Alterar última resposta
        </button>
        <button class="btn-secondary" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); border: none;" onclick="restartFlow()">
          ↻ Refazer as 8 Perguntas
        </button>
      </div>
    `;
  }
}

function chooseOption(questionIndex, optionIndex) {
  const selected = questions[questionIndex].options[optionIndex];
  answersHistory.push(selected);
  renderFlow();
}

function goBack() {
  if (answersHistory.length > 0) {
    answersHistory.pop();
    renderFlow();
  }
}

function restartFlow() {
  answersHistory = [];
  renderFlow();
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));

  if (tabName === 'interactive') {
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
    document.getElementById('interactive-view').classList.add('active');
  } else {
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
    document.getElementById('diagram-view').classList.add('active');
  }
}

renderFlow();