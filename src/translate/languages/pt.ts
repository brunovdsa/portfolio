const messages = {
  pt: {
    translations: {
      chooseLanguageBar: {
        titlePT: 'Português',
        titleEN: 'Inglês',
      },
      header: {
        headerHomeLink: 'Início',
        headerProjectsLink: 'Projetos',
        headerExperienceLink: 'Experiência',
        headerContactLink: 'Contato',
        headerAboutLink: 'Sobre',
      },
      //HOME PAGE TRANSLATION
      homePageTabTitle: 'Início - ',

      homePageTitles: {
        pt1: 'Oi! Me chamo ',
        pt2: 'Bruno',
        pt3: 'Seu dev frontend junior.',
      },
      homePageDescription: {
        text: 'Gosto de criar produtos frontend sólidos com ótimas experiências para o usuário.',
      },
      homePageButtons: {
        homePageToProject: 'Projetos',
        homePageToAbout: 'Saiba mais sobre mim',
      },
      navBarComponent: {
        navLinkHome: 'Início',
        navLinkProjects: 'Projetos',
        navLinkExperience: 'Experiência',
        navLinkContact: 'Contato',
        navLinkAbout: 'Sobre',
        changeThemeBtnPt1: 'Mude para ',
        changeThemeBtnPt2: ' theme',
      },
      //PROJECTS PAGE TRANSLATION
      projectsPageTabTitle: 'Projetos - ',
      projectsPage: {
        title: 'Uma seleção dos meus melhores trabalhos.',
        coockedDescription:
          'Cooked é um site de receitas, que lhe permite pesquisar e encontrar como suas receitas favoritas são feitas.',
        stockPhotosDescription:
          'Um lugar para você encontrar e fazer download de fotografias e imagens grátis, feitas por pessoas de todo o mundo.',
        stockExchangeDescription:
          'Uma plataforma para pesquisar e comparar receita, despesas, lucro e EBITDA das empresas selecionadas, usando gráficos.',
        madeUsing: 'Desenvolvido com: ',
        visitProject: 'Visite ',
        altText: 'Fotografia mostrando o projeto: ',
      },
      //EXPERIENCE PAGE TRANSLATION
      experienceTabTitle: 'Experiência - ',
      experiencePage: {
        title: 'Experiência de Trabalho.',

        company1: '1WolrdSync',
        jobTitle1: 'Desenvolvedor Full Stack Java Jr',
        description1:
          'Para o segmento de varejo, o desenvolvimento tinha o dever de entregar sempre a melhor informação e as melhores imagens com relação ao produto, ao cliente. Com boas práticas e códigos limpos e de fácil manutenção. Contato com clientes internos e externos por meio de chamadas de voz e vídeo, sendo a maioria em inglês por conta da grande variedade de pessoas de fora do país envolvidas nos projetos.',

        company2: 'Opentech Soluções em Gerenciamento de Risco e Logística',
        jobTitle2: 'Desenvolvedor Frontend Junior',
        description2:
          'Desenvolvimento de soluções para a gestão de riscos e veículos para o segmento de rastreamento e logística. Trabalhando com manutenção do sistema logístico da empresa, criando novas páginas e funcionalidades para o usuário final. Aplicando conceitos de mobile first e UX. Iniciado em um sistema legado, utilizando jQuery e bootstrap como ferramentas principais, e posteriormente convidado a participar do desenvolvimento do produto principal, utilizando React.',

        company3: 'Opentech Soluções em Gerenciamento de Risco e Logística',
        jobTitle3: 'Assistente de Processos',
        description3:
          'No setor de Processos, utilizava uma plataforma front-end, automatizando processos da área de rastreamento e cadastro da empresa. Contato direto com clientes internos e externos por e-mail, para alinhamento de regras de negócio.',

        company4: 'Opentech Soluções em Gerenciamento de Risco e Logística',
        jobTitle4: 'Operador de Rastreamento',
        description4:
          'Realização de rastreamento via satélite e GPRS de viagens de veículos de pequeno, médio e grande porte. Atendimento ao cliente via e-mail e telefone, mantendo comunicação constante com ambos ao longo da viagem, verificando sempre o andamento da viagem como um todo, do ponto de partida à chegada.',
        specialTag: 'Sistemas Internos',
      },
      //CONTACT PAGE TRANSLATION
      contactPageTabTitle: 'Contato - ',
      contactPage: {
        title: 'Entre em contato.',
        contacts: {
          name: 'Nome',
          email: 'Email',
        },
        emailInfo: {
          subject: 'Assunto',
          message: 'Mensagem',
        },
        sendMessageBtn: 'Enviar!',

        modalFieldsError: {
          title: 'Opa...',
          text: 'Por gentileza preencha todos os campos em branco!',
          button: 'Ok',
        },

        modalEmailError: {
          title: 'Opa...',
          text: 'Um erro selvagem apareceu!',
          errorType: 'Erro: ',
          button: 'Ok',
        },

        modalEmailSent: {
          title: 'Email enviado!',
          text: 'Obrigado por entrar em contato! Nos falaremos em breve!',
          button: 'Ok',
        },
      },

      //ABOUT PAGE TRANSLATION
      aboutPageTabTitle: 'Sobre - ',
      aboutPage: {
        title: 'Esta é minha história.',
        introInfo: {
          pt1: 'Me chamo Bruno, um desenvolvedor & ',
          pt2: 'creative coder ',
          pt3: 'especializado em desenvolvimento front-end. Minha missão é traduzir designs focados no usuário em lindos sites ou aplicativos.',
          pt4: ' Também sou fotógrafo e músico nas minhas horas vagas, e levo isso como um hobby e uma forma de me expressar ou de como enxergo o mundo.',
          pt5: 'Atualmente estou procurando uma oportunidade de usar meu conhecimento e experiência para ajudar o usuário e a equipe da qual farei parte.',
        },
        contentInfo: {
          altTextImg:
            'Uma fotografia do meu tatuador, tatuando no estúdio dele.',
          imgSubtitle: 'Uma fotografia tirada por mim.',
          pt1: 'Em minha última experiência, trabalhei como desenvolvedor full-stack junior para o segmento de varejo e produto na ',
          pt2: '1WorldSyncBR',
          pt3: '. Onde ajudava a manter, e criar novas funcionalidades para o produto principal da empresa, que consiste em uma plataforma que fornece soluções de conteúdo para produtos.',
          pt4: 'Antes da ',
          pt5: '1WorldSyncBR',
          pt6: ', trabalhei também na ',
          pt7: 'Opentech',
          pt8: '. Primeiramente, como assistente de processos automatizando processos de tomada de decisão do sistema de rastreamento de caminhões. E posteriormente, me tornei desenvolvedor front-end júnior, auxiliando na manutenção do sistema logístico que a empresa utiliza.',
          pt9: 'Você pode me encontrar pelo ',
          pt10: 'Linkedin',
          pt11: ' , onde mantenho todos meus dados profissionais atualizados, e onde compartilho e atualizo projetos. Você também pode me seguir no ',
          pt12: 'GitHub',
          pt13: ', ou entrar em contato comigo por ',
          pt14: 'aqui.',
          pt15: 'Veja toda minha jornada ',
          pt16: 'aqui',
        },
      },
    },
  },
};

export { messages };
