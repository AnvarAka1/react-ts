import { FreelancerType } from 'src/types'
import { StatusEnum } from 'src/enums'

type _FreelancerType = (
  Omit<FreelancerType, 'status'>
  & { status: string }
)

export const _freelancerList: _FreelancerType[] = [
  {
    id: 1,
    firstName: 'Ольга',
    lastName: 'Давыдова',
    fullName: 'Ольга Давыдова',
    phone: '+9983383331',
    role: 'freelancer',
    status: 'active',
    portfolio: {
      github: 'https://github.com/AnvarAka1',
      behance: 'https://github.com/AnvarAka1',
      link: 'https://github.com/AnvarAka1'
    },
    rating: {
      rating: 4,
      count: 2
    },
    overwork: false,
    paymentMethods: {
      card: true,
      cash: false,
      transfer: false
    },
    price: {
      price: 12,
      currency: '$'
    },
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
      name: 'Front-end developer'
    },
    userId: 1,
    avatar: '',
    email: 'olga@mail.ru',
    description: `
      Эффективность действий, безусловно, охватывает побочный PR-эффект, осознавая социальную ответственность бизнеса.
      Взаимодействие корпорации и клиента настроено позитивно.
      Представляется логичным, что воздействие на потребителя нетривиально.
      Воздействие на потребителя стабилизирует рыночный направленный маркетинг.
      В рамках концепции Акоффа и Стэка, интеграция порождает презентационный материал.
      Представляется логичным, что BTL притягивает бренд, отвоевывая рыночный сегмент.
      Медийная связь, вопреки мнению П.Друкера, однородно программирует портрет потребителя.
      Рекламная площадка ускоряет эмпирический департамент маркетинга и продаж.
    `
  },
  {
    id: 2,
    firstName: 'Александр',
    lastName: 'Крылов',
    fullName: 'Александр Крылов',
    phone: '+9983383331',
    role: 'freelancer',
    status: 'active',
    portfolio: null,
    rating: {
      rating: 4,
      count: 2
    },
    overwork: false,
    paymentMethods: {
      card: true,
      cash: true,
      transfer: true
    },
    price: {
      price: 12,
      currency: '$'
    },
    skills: [
      {
        id: 2,
        name: 'Angular 2'
      },
      {
        id: 3,
        name: 'NodeJS'
      }
    ],
    stack: {
      id: 1,
      name: 'Full-stack developer'
    },
    userId: 2,
    avatar: '',
    email: 'alex@mail.ru',
    description: `
      Рейтинг упорядочивает конвергентный абсолютно сходящийся ряд, что неудивительно.
      Таргетирование упорядочивает межличностный отраслевой стандарт.
      Ряд Тейлора, вопреки мнению П.Друкера, неоднозначен.
    `
  },
]

export const freelancerList: FreelancerType[] = _freelancerList.map(freelancer => {
  return { ...freelancer, status: freelancer.status as StatusEnum }
})
