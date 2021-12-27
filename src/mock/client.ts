import { ClientType } from 'src/types'

export const clientList: ClientType[] = [
  {
    id: 1,
    firstName: 'Ольга',
    lastName: 'Давыдова',
    fullName: 'Ольга Давыдова',
    phone: '+9983383331',
    role: 'client',
    position: {
      id: 1,
      name: 'HR'
    },
    companyName: 'Worklance',
    userId: 3,
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
    role: 'client',
    position: {
      id: 2,
      name: 'Accounting'
    },
    companyName: 'Facebook',
    userId: 4,
    avatar: '',
    email: 'alex@mail.ru',
    description: `
      Рейтинг упорядочивает конвергентный абсолютно сходящийся ряд, что неудивительно.
      Таргетирование упорядочивает межличностный отраслевой стандарт.
      Ряд Тейлора, вопреки мнению П.Друкера, неоднозначен.
    `
  }
]
