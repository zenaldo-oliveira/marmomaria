// Conteúdo centralizado do site — edite textos e imagens aqui.

export const IMG = {
  hero: 'https://images.hostinger.com/96f14871-10ad-4c19-b58d-b473a03234ef.png',
  marble: 'https://images.hostinger.com/215c4a85-c420-47c3-ac70-00f037c3927c.png',
  granite: 'https://images.hostinger.com/d9b02d62-283d-44a9-a95a-0a6b1319ae5d.png',
  quartz: 'https://images.hostinger.com/6c4a0e5f-0cc4-46ee-b336-0dfd23297fdf.png',
  quartzite: 'https://images.hostinger.com/9077ee3b-6dbf-443e-af60-f48b52d650ae.png',
  bathroom: 'https://images.hostinger.com/3d1a7780-1975-4b98-af7d-e32891b1d585.png',
  stairs: 'https://images.hostinger.com/453bad2e-01af-4058-9d9a-874ff113c9eb.png',
  gourmet: 'https://images.hostinger.com/c61d8628-2694-4ceb-8754-d88009057935.png',
  facade: 'https://images.hostinger.com/1688236a-f097-4fb9-8436-e11e8b94d282.png',
  floor: 'https://images.hostinger.com/d96a9111-5fa1-45ae-8993-912f7119e586.png',
  cnc: 'https://images.hostinger.com/4e08be5e-4105-4087-a2a9-7829b56c43d3.png',
  living: 'https://images.hostinger.com/1895a1d6-4733-4655-a2a7-83e9c1a77bf5.png',
  polish: 'https://images.hostinger.com/4e08be5e-4105-4087-a2a9-7829b56c43d3.png',
  avatar1: 'https://images.hostinger.com/b2d8a6ab-cd56-4528-b87c-6f14ecc7ce3a.png',
  avatar2: 'https://images.hostinger.com/a48f9bd8-8559-4e9c-b9bf-7496b5efd723.png',
  avatar3: 'https://images.hostinger.com/1a09c378-b182-485b-90a1-596a3232af12.png',
};

export const STATS = [
  { value: '+15', label: 'anos de mercado' },
  { value: '+500', label: 'projetos entregues' },
  { value: '+40mil', label: 'm² instalados' },
  { value: '98%', label: 'clientes satisfeitos' },
];

export const MATERIALS = [
  {
    name: 'Mármore',
    img: IMG.marble,
    desc: 'Elegância atemporal com veios naturais únicos. Ideal para ambientes sofisticados.',
    uses: ['Bancadas', 'Banheiros', 'Revestimentos'],
  },
  {
    name: 'Granito',
    img: IMG.granite,
    desc: 'Resistência e durabilidade excepcionais para uso intenso do dia a dia.',
    uses: ['Cozinhas', 'Fachadas', 'Pisos'],
  },
  {
    name: 'Quartzo',
    img: IMG.quartz,
    desc: 'Superfície de engenharia, não porosa, uniforme e de baixa manutenção.',
    uses: ['Cozinhas', 'Banheiros', 'Comercial'],
  },
  {
    name: 'Quartzito',
    img: IMG.quartzite,
    desc: 'A dureza do granito com a beleza do mármore. Peça exclusiva de alto padrão.',
    uses: ['Bancadas', 'Painéis', 'Fachadas'],
  },
];

export const SERVICES = [
  { title: 'Bancadas de cozinha', desc: 'Tampos sob medida com acabamento premium para sua cozinha.', img: IMG.hero },
  { title: 'Bancadas de banheiro', desc: 'Bancadas e cubas que valorizam o seu banheiro.', img: IMG.bathroom },
  { title: 'Pias e cubas esculpidas', desc: 'Peças esculpidas em pedra única, artesanais.', img: IMG.polish },
  { title: 'Pisos e revestimentos', desc: 'Pisos e paredes revestidos com nobreza e precisão.', img: IMG.floor },
  { title: 'Fachadas em granito/mármore', desc: 'Fachadas imponentes com durabilidade e beleza.', img: IMG.facade },
  { title: 'Escadas em mármore/granito', desc: 'Escadas esculturais que impressionam.', img: IMG.stairs },
  { title: 'Soleiras e peitoris', desc: 'Detalhes de acabamento com perfeito encaixe.', img: IMG.marble },
  { title: 'Tampos de mesa sob medida', desc: 'Mesas exclusivas com tampos em pedra natural.', img: IMG.living },
  { title: 'Churrasqueiras e áreas gourmet', desc: 'Espaços gourmet completos e sofisticados.', img: IMG.gourmet },
  { title: 'Lavatórios e bancadas de spa', desc: 'Ambientes decorativos de banho e bem-estar.', img: IMG.bathroom },
  { title: 'Restauração e polimento', desc: 'Recuperamos o brilho original das suas pedras.', img: IMG.polish },
  { title: 'Manutenção e cristalização', desc: 'Cristalização de pisos para proteção e brilho.', img: IMG.floor },
];

export const GALLERY = [
  { img: IMG.hero, cat: 'Cozinhas', title: 'Cozinha em mármore Carrara' },
  { img: IMG.bathroom, cat: 'Banheiros', title: 'Banheiro com cuba esculpida' },
  { img: IMG.facade, cat: 'Fachadas', title: 'Fachada em granito polido' },
  { img: IMG.living, cat: 'Cozinhas', title: 'Painel book-match na sala' },
  { img: IMG.gourmet, cat: 'Cozinhas', title: 'Área gourmet em granito' },
  { img: IMG.stairs, cat: 'Fachadas', title: 'Escada em mármore' },
  { img: IMG.floor, cat: 'Banheiros', title: 'Revestimento de piso e parede' },
  { img: IMG.quartzite, cat: 'Cozinhas', title: 'Ilha em quartzito exótico' },
];

export const DIFFERENTIALS = [
  { icon: 'ShieldCheck', title: 'Procedência garantida', desc: 'Material selecionado com origem e qualidade comprovadas.' },
  { icon: 'Ruler', title: 'Corte de precisão (CNC)', desc: 'Acabamento perfeito com tecnologia de corte CNC.' },
  { icon: 'HardHat', title: 'Instalação própria', desc: 'Equipe profissional própria, sem terceirização.' },
  { icon: 'BadgeCheck', title: 'Garantia e pós-venda', desc: 'Suporte completo após a entrega do seu projeto.' },
  { icon: 'Clock', title: 'Prazo cumprido', desc: 'Compromisso real com os prazos combinados.' },
  { icon: 'Gift', title: 'Orçamento sem compromisso', desc: 'Visita técnica e orçamento gratuitos.' },
];

export const TESTIMONIALS = [
  { name: 'Ricardo Almeida', role: 'Arquiteto', avatar: IMG.avatar1, rating: 5, text: 'Acabamento impecável e prazo cumprido à risca. Recomendo para todos os meus projetos de alto padrão.' },
  { name: 'Fernanda Costa', role: 'Designer de Interiores', avatar: IMG.avatar2, rating: 5, text: 'A qualidade da pedra e o cuidado na instalação superaram minhas expectativas. Parceria de confiança.' },
  { name: 'Marcos Pereira', role: 'Cliente residencial', avatar: IMG.avatar3, rating: 5, text: 'Transformaram minha cozinha em uma verdadeira obra de arte. Atendimento excelente do início ao fim.' },
];

export const FAQ = [
  { q: 'Qual o prazo de entrega e instalação?', a: 'O prazo médio é de 7 a 15 dias úteis após a medição no local e a aprovação do projeto, variando conforme o material e a complexidade.' },
  { q: 'Vocês fazem a medição no local?', a: 'Sim. Realizamos medição técnica no local para garantir encaixe perfeito. Para orçamentos iniciais também aceitamos as medidas enviadas por você.' },
  { q: 'Quais materiais vocês trabalham?', a: 'Mármore, granito, quartzo e quartzito, em uma ampla variedade de cores e padrões, nacionais e importados.' },
  { q: 'O orçamento tem algum custo?', a: 'Não. O orçamento e a visita técnica são gratuitos e sem compromisso.' },
  { q: 'Existe garantia sobre o serviço?', a: 'Sim, oferecemos garantia sobre a instalação e acabamento, além de suporte de pós-venda e orientações de manutenção.' },
  { q: 'Vocês atendem obras e reformas comerciais?', a: 'Sim, atendemos projetos residenciais e comerciais, de bancadas individuais a fachadas e grandes revestimentos.' },
];

export const PROJECT_TYPES = [
  'Bancada de cozinha',
  'Bancada de banheiro',
  'Piso / revestimento',
  'Fachada',
  'Escada',
  'Área gourmet / churrasqueira',
  'Restauração / polimento',
  'Outro',
];
