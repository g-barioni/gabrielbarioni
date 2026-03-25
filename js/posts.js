// ========================
// POSTS DATA
// ========================
// Para adicionar um post:
// 1. Adicione um objeto aqui no array POSTS
// 2. Adicione o <article class="card"> correspondente no index.html
// ========================

const POSTS = {

  frequencia: {
    category: "Consciência",
    title: "O Único Sentimento que Eleva Nossa Frequência.",
    date: "MAR 2025",
    read: "4 min leitura",
    icon: "♡",
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    content: `
      <p>Existe uma força invisível que opera dentro de cada um de nós. Ela não pede permissão, não espera o momento certo, não se importa com o caos ao redor. Ela simplesmente <em>é</em>.</p>
      <p>Estamos acostumados a buscar paz lá fora — na próxima conquista, no próximo relacionamento, no próximo destino. E cada vez que chegamos, descobrimos que o vazio veio junto na mala.</p>
      <p><strong>A frequência que você emite não depende das circunstâncias externas.</strong> Ela depende da narrativa que você sustenta internamente, momento a momento.</p>
      <p>Quando falamos em "elevar frequência", não estamos falando de misticismo vago. Falamos de um estado de coerência entre pensamento, emoção e ação. E existe um único sentimento capaz de criar essa coerência:</p>
      <p><em>O amor — não o amor romantico e condicionado, mas o amor como estado de ser.</em></p>
      <p>Não é um amor que precisa de objeto. É a capacidade de existir sem contração, sem medo, sem necessidade de provar nada. É a diferença entre viver em modo de escassez e viver em modo de expansão.</p>
      <p><strong>Como praticar?</strong> Comece pelo mais difícil: você mesmo. Observe a dureza com que fala internamente quando erra. Substitua o julgamento pela curiosidade. Troque "que idiota que eu sou" por "interessante, por que fiz isso?"</p>
      <p>Essa pequena mudança de tom cria uma abertura. E pelas aberturas entra luz.</p>
    `
  },

  presenca: {
    category: "Presença",
    title: "Você Está Aqui. Isso É Suficiente.",
    date: "FEV 2025",
    read: "6 min leitura",
    icon: "◎",
    bg: "linear-gradient(135deg, #111 0%, #2a1a0a 100%)",
    content: `
      <p>A modernidade nos vendeu uma mentira elegante: que estar em múltiplos lugares ao mesmo tempo é sinal de relevância. Que a mente dispersa é uma mente produtiva.</p>
      <p>Mas observe o que acontece quando você para.</p>
      <p><strong>Quando você realmente para.</strong></p>
      <p>Não o tipo de pausa onde você verifica o telefone a cada 30 segundos. A pausa real — aquela que quase dói porque o silêncio começa a falar.</p>
      <p>Thich Nhat Hanh disse uma vez que a maioria das pessoas não está presente nem ao lavar a louça — estão pensando no que farão depois. E quando estão fazendo "depois", estão pensando em outra coisa.</p>
      <p><em>Vivemos constantemente em outro tempo que não este.</em></p>
      <p>O presente não pede muito. Ele só pede você. Inteiro. Com as contradições, com o cansaço, com a alegria imperfeita.</p>
      <p>Existe uma prática simples que uso: antes de qualquer conversa importante, respiro três vezes conscientemente. Não para relaxar. Para <em>chegar</em>. Para que a pessoa na minha frente sinta que não está disputando minha atenção com fantasmas.</p>
      <p><strong>Presença é o maior presente que você pode oferecer.</strong> E, paradoxalmente, é também o maior que você pode se dar.</p>
    `
  },

  silencio: {
    category: "Mente",
    title: "O Poder que Mora no Silêncio.",
    date: "JAN 2025",
    read: "3 min leitura",
    icon: "∿",
    bg: "linear-gradient(135deg, #050510 0%, #0a0a2a 100%)",
    content: `
      <p>Viktor Frankl sobreviveu a campos de concentração nazistas. E o que tirou daquela experiência absurda foi uma descoberta que mudou a psicologia para sempre:</p>
      <p><em>"Entre o estímulo e a resposta há um espaço. Nesse espaço está o nosso poder de escolher."</em></p>
      <p>O silêncio não é ausência. É o espaço onde você existe antes de ser moldado pelas expectativas, reações e ruídos do mundo.</p>
      <p><strong>A maioria das nossas dores não vem dos acontecimentos. Vem da história que contamos sobre eles.</strong></p>
      <p>No segundo em que algo ocorre, existe um flash de percepção pura — antes do julgamento, antes da narrativa, antes do "isso é bom" ou "isso é ruim". Esse flash é o silêncio.</p>
      <p>Meditar não é esvaziar a mente. É aprender a ser observador dos próprios pensamentos sem ser varrido por eles. É desenvolver uma relação diferente com o ruído interno.</p>
      <p>Com o tempo, o silêncio cresce. E nele, as escolhas ficam mais limpas.</p>
    `
  },

  escolha: {
    category: "Propósito",
    title: "Toda Escolha é uma Declaração de Quem Você É.",
    date: "DEZ 2024",
    read: "5 min leitura",
    icon: "⟡",
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)",
    content: `
      <p>Não existe escolha neutra.</p>
      <p>Quando você decide não se posicionar, tomou uma posição. Quando decide não agir, agiu. A passividade também é uma declaração — ela diz: "prefiro a confortável ambiguidade do silêncio à incerteza de escolher."</p>
      <p>Isso não é julgamento. É apenas a mecânica da existência.</p>
      <p><strong>Cada escolha que você faz deposita uma pequena pedra na construção do ser que você está se tornando.</strong> Escolhas menores constroem hábitos. Hábitos constroem caráter. Caráter, com o tempo, se torna destino.</p>
      <p>A boa notícia: você pode começar a escolher diferente a qualquer momento. Não amanhã. Agora.</p>
      <p><em>A próxima escolha que você fizer será mais uma declaração.</em> O que você quer declarar?</p>
      <p>Não precisa ser grandioso. Escolher ouvir mais e falar menos numa conversa difícil é uma declaração. Escolher dormir no horário certo é uma declaração. Escolher não enviar aquela mensagem de raiva é uma declaração.</p>
      <p><strong>A soma dessas pequenas declarações é quem você é.</strong></p>
    `
  },

  amor: {
    category: "Amor",
    title: "Amar Sem Condição Não É Fraqueza. É a Maior Coragem.",
    date: "NOV 2024",
    read: "7 min leitura",
    icon: "❋",
    bg: "linear-gradient(135deg, #100510 0%, #200520 100%)",
    content: `
      <p>Fomos ensinados a amar com cautela. A guardar um pedaço de nós mesmo como seguro, como garantia de que se as coisas derem errado, algo ficará intacto.</p>
      <p>Mas o amor com reserva técnica não é amor. É um contrato.</p>
      <p><em>E contratos não transformam ninguém.</em></p>
      <p>O amor incondicional assusta porque ele exige que a gente se despoje de toda armadura. E sem armadura, a exposição é total. A possibilidade de dor, máxima.</p>
      <p><strong>Mas aqui está o paradoxo que a maioria nunca descobre:</strong> quem ama sem condição não sofre mais. Sofre diferente. Sofre com inteireza, sim — mas sem a dor adicional do arrependimento de não ter amado plenamente.</p>
      <p>Rumi escreveu sobre o amante que não teme o fogo porque já foi consumido por ele uma vez e descobriu que o que resta após as chamas não pode mais ser destruído.</p>
      <p>Amar sem condição não é amar sem discernimento. Você pode amar profundamente e ainda reconhecer quando uma relação não é saudável. Você pode amar e ainda estabelecer limites.</p>
      <p><strong>Limites não contradizem o amor. Eles protegem o espaço onde o amor pode existir.</strong></p>
      <p>A coragem real é continuar abrindo o coração mesmo depois de tê-lo partido. Não porque você é ingênuo, mas porque você aprendeu que fechar o coração custa mais caro do que qualquer dor que ele possa sentir aberto.</p>
    `
  }

};
