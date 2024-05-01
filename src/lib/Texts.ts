import getAlongImage from '@/assets/image/projects/realProjectsImage/getAlongCard.svg';
import instGenesisImage from '@/assets/image/projects/realProjectsImage/instGenesisCard.svg';

export const Texts = {
  home: {
    fistP: 'Olá!',
    spanP: 'Eu sou o Anderson,',
    fistPartH1: 'REACT',
    secondPartH1: 'DEVELOPER',
    description:
      'Tenho 32 anos, sou desenvolvedor front-end atuando como freelancer.',
  },
  projects: [
    {
      id: 1,
      nameOfProject: 'Curso de Idiomas Get Along',
      descriptionOfProject:
        'Landing page em 5 idiomas, com redirecionamento para outra plataforma integrada a um chatboot para auto atendimento. (Em desenvolvimento)',
      oficialWebsite: 'https://get-along-lc.vercel.app/',
      image: getAlongImage,
      callToAction: 'Veja mais',
    },
    {
      id: 2,
      nameOfProject: 'Instituto de Aperfeiçoamento Gênesis',
      descriptionOfProject:
        'Site para exposição dos cursos, com redirecionamento para plataformas externas, uma área de cadastro e um dashboard para edição de conteúdo por parte da equipe. (Em desenvolvimento)',
      oficialWebsite: 'https://genesis-institute.vercel.app/',
      image: instGenesisImage,
      callToAction: 'Em produção',
    },
  ],
  about: {
    titleH1: 'Disciplina, amor e coragem é o lema do nosso sucesso',
    titleSpan: '- So George Ayres Borges',
    decriptionFistPart:
      'Durante anos, servi com dedicação nas fileiras militares do Brasil, onde destaquei-me como Secretário do Diretor Aeronaves, obtendo a segunda posição em minha classe. Liderei missões críticas de manutenção da paz no Batalhão de Infantaria Especial do Galeão, o que me proporcionou experiências inestimáveis, moldando minha capacidade de liderança e minha habilidade para implementar operações eficazes. No entanto, uma mudança marcante em minha vida veio com a decisão de imigrar para Portugal em busca de uma existência longe da violência e de novas oportunidades.',
    decriptionSecondPart:
      'Essa transição representou um ponto de virada significativo em minha jornada, marcando o início de uma nova fase fora da área militar. Comprometido em encontrar meu lugar em uma nova terra, mergulhei de cabeça no mundo da programação. Como programador freelancer em Portugal, estou construindo uma carreira sólida, fundamentada em minha experiência militar em liderança e resolução de problemas. Cada desafio superado e cada projeto concluído reafirmam meu compromisso com o crescimento contínuo e a busca por excelência em minha nova trajetória profissional.',
  },
};
