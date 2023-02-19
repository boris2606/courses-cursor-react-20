import image1 from '../../img/photo_1.jpeg'
import image2 from '../../img/photo_2.jpeg'
import image3 from '../../img/photo_3.jpeg'
import image4 from '../../img/photo_4.jpeg'
import image5 from '../../img/photo_5.webp'

import photo1 from '../../img/member_1.jpeg'
import photo2 from '../../img/member_2.jpeg'
import photo3 from '../../img/member_3.jpeg'

const messagePersons = [
    {
        message: 'Привіт де зустрічаємось після роботи?',
        unsver: 'На звичному місці, випємо пивка, подимимось футбол'
    },
    {
        message: 'Хто грає сьогодні?',
        unsver: 'На місці побачимо )'
    },
]

const gallaryImage =[ 
    {
        image:image1,
        alt:'Space poto',
        flag: true
    },
    {
        image:image2,
        alt:'Space poto',
        flag: true
    },
    {
        image:image3,
        alt:'Space poto',
        flag: true
    },
    {
        image:image4,
        alt:'Space poto',
        flag: true
    },
    {
        image:image5,
        alt:'Space poto',
        flag: true
    },
    {
        image:image1,
        alt:'Space poto',
        flag: true
    },
    {
        image:image2,
        alt:'Space poto',
        flag: true
    },
    {
        image:image3,
        alt:'Space poto',
        flag: true
    },
    {
        image:image4,
        alt:'Space poto',
        flag: true
    },
    {
        image:image5,
        alt:'Space poto',
        flag: true
    },
    {
        image:image1,
        alt:'Space poto',
        flag: true
    },
    {
        image:image2,
        alt:'Space poto',
        flag: true
    },
    {
        image:image3,
        alt:'Space poto',
        flag: true
    },
    {
        image:image4,
        alt:'Space poto',
        flag: true
    },
    {
        image:image5,
        alt:'Space poto',
        flag: true
    }
]

const navList = [
    {
        title: "Головна",
        link: '/',
        flag: true
    },
    {
        title: "Новини",
        link: '/news',
        flag: true
    },
    {
        title: "Галерея",
        link: '/gallery',
        flag: true
    },
    {
        title: "Контакти",
        link: '/contacts',
        flag: true
    }
]

const newsList = [
    {
        title: `Curiosity сфотографував на Марсі стародавні «хвилі»`,
        author: 'Live Science',
        date: '17.02.2023',
        descr: "На думку науковців, це найточніший доказ наявності води та хвиль, який їм вдалося побачити за всю місію.",
        flag:true
    },
    {
        title: 'Астрономи виявили нову екзопланету неподалік від Землі',
        author: 'Укрінформ',
        date: '15.02.2023',
        descr: "SМіжнародна група вчених виявила у космосі нову екзопланету K2-415b завбільшки із Землю, яка знаходиться за 72 світлових років від нашої планети.",
        flag:true
    },
    {
        title: `SpaceX вивела на орбіту іспанський супутник зв'язку SpaceX вивела на орбіту іспанський супутник зв'язку`,
        author: 'Укрінформ',
        date: '07.02.2023',
        descr: "Американська компанія SpaceX у вівторок вивела на орбіту іспанський супутник зв'язку Amazonas Nexus від компанії Hispasat.",
        flag:true
    }
]

const contacts = [
    {
        photo:photo1,
        name: 'Сергій',
        secondName:'Сергійович',
        lastName:'Лунович',
        position: 'Дослідник',
        phone: '+380671111111',
    },
    {
        photo:photo2,
        name: 'Віталій',
        secondName:'Віталійович',
        lastName:'Марсович',
        position: 'Директор',
        phone: '+380672222222'
    },
    {
        photo:photo3,
        name: 'Іван',
        secondName:'Іванович',
        lastName:'Просто Космос',
        position: 'Керівник відділу кадрів',
        phone: '+380673333333'
    }
]

let data = {
    gallaryImage,
    navList,
    newsList,
    contacts,
    messagePersons
}
export default data