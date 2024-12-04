import getAlongImage from '@/assets/image/projects/realProjectsImage/getAlongCard.svg';
import instGenesisImage from '@/assets/image/projects/realProjectsImage/instGenesisCard.svg';

export const Texts = {
  home: {
    name: 'Anderson Carvalho',
    subtitle: 'Web and Software Developer',

    calToAction: 'Turning ideais',
    subtitleCalToAction: 'into possibilities'
  },

  resume: {
    top: {
      title: 'Web Developer',
      subtitle: 'End-to-end web development',
      description: 'Development of projects in search of validation of the user experience.'
    },
    left: {
      title: 'UX/UI',
      subtitle: 'Software prototyping',
      description: 'Development of projects in search of validation of the user experience.'
    },
    right: {
      title: 'Designer',
      subtitle: 'Visual identity creation',
      description: 'Development of visual identities that reinforce the brand &apos;s identity.'
    }

  },

  about: {
    titleH1: 'Disciplina, amor e coragem é o lema do nosso sucesso',
    titleSpan: '- So George Ayres Borges',
    decriptionFistPart:
      'Durante anos, servi com dedicação nas fileiras militares do Brasil, onde destaquei-me como Secretário do Diretor Aeronaves, obtendo a segunda posição em minha classe. Liderei missões críticas de manutenção da paz no Batalhão de Infantaria Especial do Galeão, o que me proporcionou experiências inestimáveis, moldando minha capacidade de liderança e minha habilidade para implementar operações eficazes. No entanto, uma mudança marcante em minha vida veio com a decisão de imigrar para Portugal em busca de uma existência longe da violência e de novas oportunidades.',
    decriptionSecondPart:
      'Essa transição representou um ponto de virada significativo em minha jornada, marcando o início de uma nova fase fora da área militar. Comprometido em encontrar meu lugar em uma nova terra, mergulhei de cabeça no mundo da programação. Como programador freelancer em Portugal, estou construindo uma carreira sólida, fundamentada em minha experiência militar em liderança e resolução de problemas. Cada desafio superado e cada projeto concluído reafirmam meu compromisso com o crescimento contínuo e a busca por excelência em minha nova trajetória profissional.',
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
      oficialWebsite: 'https://instituto-genesis.com/',
      image: instGenesisImage,
      callToAction: 'Em produção',
    },
  ],

  footer: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati on ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    contacts: [
      {
        id: 1,
        image: '/contacts/linkedin.svg',
        alt: 'linkedin',
        href: 'https://www.linkedin.com/in/andersoninn/'
      },
      {
        id: 2,
        image: '/contacts/github.svg',
        alt: 'github',
        href: 'https://github.com/andersoninn'
      },
      {
        id: 3,
        image: '/contacts/cv.svg',
        alt: 'curriculum',
        href: 'https://drive.google.com/file/d/1wttA0BPcDON1vijG78N9UZqr2EDuZKxu/view?usp=sharing'
      },
      {
        id: 4,
        image: '/contacts/gmail.svg',
        alt: 'gmail',
        href: 'https://mailto:andersoninnocencio17@gmail.com/'
      },
      {
        id: 5,
        image: '/contacts/whatsapp.svg',
        alt: 'whatsapp',
        href: 'https://wa.me/351933864893'
      },



    ]
  }
};