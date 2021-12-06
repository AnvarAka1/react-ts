import { Freelancer } from 'src/types'

export const freelancerList: Freelancer[] = [
  {
    id: 1,
    firstName: 'Ольга',
    lastName: 'Давыдова',
    fullName: 'Ольга Давыдова',
    phone: '+9983383331',
    role: 'freelancer',
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
      Воздействие на потребителя стабилизирует рыночный направленный маркетинг.
      В рамках концепции Акоффа и Стэка, интеграция порождает презентационный материал.
    `
  },
  {
    id: 2,
    firstName: 'Александр',
    lastName: 'Крылов',
    fullName: 'Александр Крылов',
    phone: '+9983383331',
    role: 'freelancer',
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
