import { ProjectType } from 'src/types'
import { ProjectStatusEnum } from 'src/enums'

import { freelancerList } from './freelancer'
import { clientList } from './client'

type _ProjectType = Omit<ProjectType, 'status'> & { status: string }

const _projectList: _ProjectType[] = [
  {
    id: 1,
    name: 'Создать Лединг страницу для компании',
    description: `
      Эффективность действий, безусловно, охватывает побочный PR-эффект,
      осознавая социальную ответственность бизнеса. Взаимодействие корпорации и клиента настроено позитивно.
      Представляется логичным, что воздействие на потребителя нетривиально.
     `,
    requirement: `
      Медиамикс основательно подпорчен предыдущим опытом применения.
      Как предсказывают футурологи рекламная акция интуитивно тормозит комплексный системный анализ.
      Узнавание бренда концентрирует охват аудитории.
      Маркетинговая коммуникация, как следует из вышесказанного, откровенно цинична.
      Отраслевой стандарт порождает сублимированный рекламный блок.
      Размещение стабилизирует социометрический поведенческий таргетинг,
      оптимизируя бюджеты.
    `,
    paymentMethods: {
      card: true,
      cash: true,
      transfer: false
    },
    additionalComment: null,
    overwork: false,
    skills: [
      {
        id: 1,
        name: 'ReactJS'
      },
      {
        id: 2,
        name: 'Angular 2'
      }
    ],
    stack: {
      id: 1,
      name: 'Front-end'
    },
    status: 'inProgress',
    freelancers: null,
    freelancer: null,
    client: clientList[0],
    price: {
      price: 290,
      currency: 'usd'
    },
    file: null,
    review: {
      id: 1,
      rating: 5,
      comment: 'Great',
      user: freelancerList[0]
    },
    createdDate: '05-03-2021, 9:38',
    updatedDate: null
  },
  {
    id: 2,
    name: 'Верстка сайта в HTML, CSS, JS',
    description: `
      Медийная связь, вопреки мнению П.Друкера, однородно программирует портрет потребителя.
      Рекламная площадка ускоряет эмпирический департамент маркетинга и продаж.
    `,
    requirement: `
      Медиамикс основательно подпорчен предыдущим опытом применения.
      Как предсказывают футурологи рекламная акция интуитивно тормозит комплексный системный анализ.
      Узнавание бренда концентрирует охват аудитории.
      Маркетинговая коммуникация, как следует из вышесказанного, откровенно цинична.
      Отраслевой стандарт порождает сублимированный рекламный блок.
      Размещение стабилизирует социометрический поведенческий таргетинг,
      оптимизируя бюджеты.
    `,
    paymentMethods: {
      card: true,
      cash: true,
      transfer: false
    },
    additionalComment: null,
    overwork: false,
    skills: [
      {
        id: 1,
        name: 'ReactJS'
      },
      {
        id: 2,
        name: 'Angular 2'
      }
    ],
    stack: {
      id: 1,
      name: 'Front-end'
    },
    price: {
      price: 290,
      currency: 'usd'
    },
    file: null,
    status: 'completed',
    freelancers: [],
    freelancer: null,
    review: {
      id: 2,
      rating: 2,
      comment: 'Hello',
      user: freelancerList[1]
    },
    client: clientList[0],
    createdDate: '05-03-2021, 9:38',
    updatedDate: null
  },
  {
    id: 3,
    name: 'Верстка сайта в HTML, CSS, JS',
    description: `
      Воздействие на потребителя стабилизирует рыночный направленный маркетинг.
      В рамках концепции Акоффа и Стэка, интеграция порождает презентационный материал.
      Представляется логичным, что BTL притягивает бренд, отвоевывая рыночный сегмент.
    `,
    requirement: `
      Медиамикс основательно подпорчен предыдущим опытом применения.
      Как предсказывают футурологи рекламная акция интуитивно тормозит комплексный системный анализ.
      Узнавание бренда концентрирует охват аудитории.
      Маркетинговая коммуникация, как следует из вышесказанного, откровенно цинична.
      Отраслевой стандарт порождает сублимированный рекламный блок.
      Размещение стабилизирует социометрический поведенческий таргетинг,
      оптимизируя бюджеты.
    `,
    paymentMethods: {
      card: true,
      cash: true,
      transfer: false
    },
    additionalComment: null,
    overwork: false,
    skills: [
      {
        id: 1,
        name: 'ReactJS'
      },
      {
        id: 2,
        name: 'Angular 2'
      }
    ],
    stack: {
      id: 1,
      name: 'Front-end'
    },
    price: {
      price: 290,
      currency: 'usd'
    },
    file: null,
    status: 'inProgress',
    freelancers: freelancerList,
    freelancer: null,
    client: clientList[1],
    createdDate: '05-03-2021, 9:38',
    updatedDate: null
  }
]

export const projectList: ProjectType[] = _projectList.map(project => {
  return {
    ...project,
    status: project.status as ProjectStatusEnum
  }
})
