export type dataType = {
  id: string,
  linkProduct: string,
  text: string
  nameProductRu: string,
  nameProductEa: string,
  image: string,
  recommendation: null | Array<recommendationType>
}

export type recommendationType = {
  id: string,
  linkProduct: string,
  text: string,
  nameProductRu: string,
  nameProductEa: string,
  image: string,
  priority: number
}

export const dataCat: Array<dataType> = [
  {
    id: '2544',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-2544',
    text: 'Сухой корм для беременных и кормящих кошек, а также для котят в возрасте от 1 до 4 месяцев',
    nameProductRu: 'Мазер энд Бэбикет',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137058-master.jpg',
    nameProductEa: 'Mother&baby cat',
    recommendation: [
      {
        id: '2522',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
        text: 'Сухой корм для котят в возрасте до 12 месяцев',
        nameProductRu: 'Киттен',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten',
        priority: 1,
      },
    ]
  },
  {
    id: '2522',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
    text: 'Сухой корм для котят в возрасте до 12 месяцев',
    nameProductRu: 'Киттен',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
    nameProductEa: 'Kitten',
    recommendation: [
      {
        id: '2544',
        linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-2544',
        text: 'Сухой корм для беременных и кормящих кошек, а также для котят в возрасте от 1 до 4 месяцев',
        nameProductRu: 'Мазер энд Бэбикет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137058-master.jpg',
        nameProductEa: 'Mother&baby cat',
        priority: 2
      },
      {
        id: '2562',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2562',
        text: 'сухой корм для стерилизованных котят в возрасте от 6 до 12 месяцев',
        nameProductRu: 'Киттен Cтерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/o-dFTIABaPOZra8qzNge/v7/kitten-ster-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten sterilised',
        priority: 1
      }
    ]
  },
  {
    id: '2562',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2562',
    text: 'сухой корм для стерилизованных котят в возрасте от 6 до 12 месяцев',
    nameProductRu: 'Киттен Cтерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/o-dFTIABaPOZra8qzNge/v7/kitten-ster-packshot-profil-b1-sol21-rus',
    nameProductEa: 'Kitten sterilised',
    recommendation: [
      {
        id: '2522',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
        text: 'Сухой корм для котят в возрасте до 12 месяцев',
        nameProductRu: 'Киттен',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten',
        priority: 1,
      },
    ]
  },
  {
    id: '2537',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
    text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
    nameProductRu: 'Стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
    nameProductEa: 'Sterilised',
    recommendation: [
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2531',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
        text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
        nameProductRu: 'Сэйвор экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
        nameProductEa: 'Savour exigent',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 1
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
      {
        id: '2568',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2568',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении и склонных к перееданию',
        nameProductRu: 'Индор Апетайт Контрол',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136963-master.jpg',
        nameProductEa: 'Indoor Appetite Control',
        priority: 1
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 1
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 1
      },
      {
        id: '2563',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2563',
        text: 'корм сухой для взрослых кошек - Рекомендуется для контроля выпрашивания корма',
        nameProductRu: 'Аппетайт Контрол Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-487593-master.jpg',
        nameProductEa: 'Appetite control Care',
        priority: 1
      },
      {
        id: '1800',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-1800',
        text: 'сухой корм для профилактики образования мочевых камней.',
        nameProductRu: 'Уринари кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137003-master.jpg',
        nameProductEa: 'Urinary Care',
        priority: 2
      },
      {
        id: '2721',
        linkProduct: 'https://www.royalcanin.com/ru/shop/neutered-satiety-balance-2721',
        nameProductRu: 'Ньютрид Сэтаети Бэлэнс',
        text: 'корм сухой для взрослых котов и кошек с момента стерилизации до 7 лет.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_687002_master.jpg',
        nameProductEa: 'Neutered Satiety Balance',
        priority: 1,
      }
    ]
  },
  {
    id: '2560',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
    text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
    nameProductRu: 'Стерилайзд+7',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
    nameProductEa: 'Sterilised 7+',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 1
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 2
      },
      {
        id: '2721',
        linkProduct: 'https://www.royalcanin.com/ru/shop/neutered-satiety-balance-2721',
        nameProductRu: 'Ньютрид Сэтаети Бэлэнс',
        text: 'корм сухой для взрослых котов и кошек с момента стерилизации до 7 лет.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_687002_master.jpg',
        nameProductEa: 'Neutered Satiety Balance',
        priority: 2,
      }
    ]
  },
  {
    id: '2565',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
    text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
    nameProductRu: 'Эйджинг стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
    nameProductEa: 'Sterilised 12+',
    recommendation: [
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
    ]
  },
  {
    id: '2521',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
    text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
    nameProductRu: 'Сенсибл 33',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
    nameProductEa: 'Sensible',
    recommendation: [
      {
        id: '2531',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
        text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
        nameProductRu: 'Сэйвор экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
        nameProductEa: 'Savour exigent',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      }
    ]
  },
  {
    id: '2543',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2543',
    text: 'сухой корм для привередливых кошек с особо развитым обонянием.',
    nameProductRu: 'Арома экзиджент',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136955-master.jpg',
    nameProductEa: 'Aroma exigent',
    recommendation: [
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 2
      },
      {
        id: '2531',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
        text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
        nameProductRu: 'Сэйвор экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
        nameProductEa: 'Savour exigent',
        priority: 1
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 1
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
    ]
  },
  {
    id: '2531',
    linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
    text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
    nameProductRu: 'Сэйвор экзиджент',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
    nameProductEa: 'Savour exigent',
    recommendation: [
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 1
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
    ]
  },
  {
    id: '2542',
    linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
    text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
    nameProductRu: 'Протеин экзиджент',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
    nameProductEa: 'Protein exigent',
    recommendation: [
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 2
      },
      {
        id: '2531',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
        text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
        nameProductRu: 'Сэйвор экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
        nameProductEa: 'Savour exigent',
        priority: 1
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
    ]
  },
  {
    id: '2529',
    linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
    text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
    nameProductRu: 'Индор',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
    nameProductEa: 'Indoor',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 1
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
      {
        id: '2568',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2568',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении и склонных к перееданию',
        nameProductRu: 'Индор Апетайт Контрол',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136963-master.jpg',
        nameProductEa: 'Indoor Appetite Control',
        priority: 1
      },
      {
        id: '2563',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2563',
        text: 'корм сухой для взрослых кошек - Рекомендуется для контроля выпрашивания корма',
        nameProductRu: 'Аппетайт Контрол Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-487593-master.jpg',
        nameProductEa: 'Appetite control Care',
        priority: 2
      },
      {
        id: '1800',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-1800',
        text: 'сухой корм для профилактики образования мочевых камней.',
        nameProductRu: 'Уринари кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137003-master.jpg',
        nameProductEa: 'Urinary Care',
        priority: 2
      },
    ]
  },
  {
    id: '2549',
    linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
    text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
    nameProductRu: 'Индор лонг хэйр',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
    nameProductEa: 'Indoor Long Hair',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 1
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 1
      }
    ]
  },
  {
    id: '2548',
    linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
    text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
    nameProductRu: 'Индор 7+',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
    nameProductEa: 'Indoor 7+',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 1
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
    ]
  },
  {
    id: '2568',
    linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2568',
    text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении и склонных к перееданию',
    nameProductRu: 'Индор Апетайт Контрол',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136963-master.jpg',
    nameProductEa: 'Indoor Appetite Control',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 1
      },
    ]
  },
  {
    id: '2520',
    linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
    text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
    nameProductRu: 'Фит 32',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
    nameProductEa: 'Fit',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 1
      },
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 2
      },
      {
        id: '2531',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
        text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
        nameProductRu: 'Сэйвор экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
        nameProductEa: 'Savour exigent',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 1
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 1
      },
      {
        id: '2532',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2532',
        text: 'сухой корм для профилактики образования зубного камня.',
        nameProductRu: 'Орал кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137001-master.jpg',
        nameProductEa: 'Oral Care ',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 2
      },
    ]
  },
  {
    id: '2561',
    linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2561',
    text: 'сухой корм для стареющих кошек в возрасте старше 12 лет.',
    nameProductRu: 'Эйджинг 12+',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136953-master.jpg',
    nameProductEa: 'Ageing +12',
    recommendation: [
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 1
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
    ]
  },
  {
    id: '2532',
    linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2532',
    text: 'сухой корм для профилактики образования зубного камня.',
    nameProductRu: 'Орал кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137001-master.jpg',
    nameProductEa: 'Oral Care ',
    recommendation: [
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 2
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 1
      },
      {
        id: '1800',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-1800',
        text: 'сухой корм для профилактики образования мочевых камней.',
        nameProductRu: 'Уринари кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137003-master.jpg',
        nameProductEa: 'Urinary Care',
        priority: 2
      },
    ]
  },
  {
    id: '2526',
    linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
    text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
    nameProductRu: 'Хэйр энд скин кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
    nameProductEa: 'Hair&Skin Care',
    recommendation: [
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 1
      },
    ]
  },
  {
    id: '2524',
    linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
    text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
    nameProductRu: 'Лайт Вейт Кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
    nameProductEa: 'Light Weight Care',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 1
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2568',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2568',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении и склонных к перееданию',
        nameProductRu: 'Индор Апетайт Контрол',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136963-master.jpg',
        nameProductEa: 'Indoor Appetite Control',
        priority: 2
      },
      {
        id: '2563',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2563',
        text: 'корм сухой для взрослых кошек - Рекомендуется для контроля выпрашивания корма',
        nameProductRu: 'Аппетайт Контрол Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-487593-master.jpg',
        nameProductEa: 'Appetite control Care',
        priority: 2
      },
    ]
  },
  {
    id: '2534',
    linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
    text: 'сухой корм для профилактики образования волосяных комочков.',
    nameProductRu: 'Хэйрболл кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
    nameProductEa: 'HAIRBALL Care',
    recommendation: [
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 1
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
    ]
  },
  {
    id: '2555',
    linkProduct: 'https://www.royalcanin.com/ru/shop/digestive-care-2555',
    text: 'поддержание здоровья пищеварительной системы',
    nameProductRu: 'Дайджестив кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/2foya2QBIYfdNSoCbADs/v174/digestive-int-fcn-packshot',
    nameProductEa: 'Digestive Care ',
    recommendation: [
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 1
      },
      {
        id: '2531',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2531',
        text: 'сухой корм для привередливых взрослых кошек в возрасте от 1 года до 7 лет, особо чувствительных к вкусу пищи. ',
        nameProductRu: 'Сэйвор экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136972-master.jpg',
        nameProductEa: 'Savour exigent',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 2
      }
    ]
  },
  {
    id: '2563',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2563',
    text: 'корм сухой для взрослых кошек - Рекомендуется для контроля выпрашивания корма',
    nameProductRu: 'Аппетайт Контрол Кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-487593-master.jpg',
    nameProductEa: 'Appetite control Care',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
      {
        id: '2568',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2568',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении и склонных к перееданию',
        nameProductRu: 'Индор Апетайт Контрол',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136963-master.jpg',
        nameProductEa: 'Indoor Appetite Control',
        priority: 1
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 1
      },
      {
        id: '2721',
        linkProduct: 'https://www.royalcanin.com/ru/shop/neutered-satiety-balance-2721',
        nameProductRu: 'Ньютрид Сэтаети Бэлэнс',
        text: 'корм сухой для взрослых котов и кошек с момента стерилизации до 7 лет.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_687002_master.jpg',
        nameProductEa: 'Neutered Satiety Balance',
        priority: 1,
      }
    ]
  },
  {
    id: '1800',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-1800',
    text: 'сухой корм для профилактики образования мочевых камней.',
    nameProductRu: 'Уринари кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137003-master.jpg',
    nameProductEa: 'Urinary Care',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 1
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2529',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2529',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136960-master.jpg',
        nameProductEa: 'Indoor',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2548',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2548',
        text: 'сухой корм для стареющих кошек (в возрасте от 7 до 12 лет), живущих в помещении.',
        nameProductRu: 'Индор 7+',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136962-master.jpg',
        nameProductEa: 'Indoor 7+',
        priority: 2
      },
    ]
  },
  {
    id: '2554',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2554',
    text: 'сухой корм специально для персидских котят (в возрасте до 12 месяцев).',
    nameProductRu: 'Киттен персиан',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136945-master.jpg',
    nameProductEa: 'Kitten Persian',
    recommendation: [
      {
        id: '2522',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
        text: 'Сухой корм для котят в возрасте до 12 месяцев',
        nameProductRu: 'Киттен',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten',
        priority: 1,
      },
      {
        id: '2562',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2562',
        text: 'сухой корм для стерилизованных котят в возрасте от 6 до 12 месяцев',
        nameProductRu: 'Киттен Cтерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/o-dFTIABaPOZra8qzNge/v7/kitten-ster-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten sterilised',
        priority: 2
      }
    ]
  },
  {
    id: '2552',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2552',
    text: 'сухой корм специально для персидских кошек старше 12 месяцев.',
    nameProductRu: 'Персиан',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136947-master.jpg',
    nameProductEa: 'Persian',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 2
      }
    ]
  },
  {
    id: '2566',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2566',
    text: 'сухой корм специально для котят британской короткошерстной породы (в возрасте до 12 месяцев).',
    nameProductRu: 'Киттен британская короткошерстная',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136935-master.jpg',
    nameProductEa: 'Kitten British Shorthair',
    recommendation: [
      {
        id: '2522',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
        text: 'Сухой корм для котят в возрасте до 12 месяцев',
        nameProductRu: 'Киттен',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten',
        priority: 1,
      },
      {
        id: '2562',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2562',
        text: 'сухой корм для стерилизованных котят в возрасте от 6 до 12 месяцев',
        nameProductRu: 'Киттен Cтерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/o-dFTIABaPOZra8qzNge/v7/kitten-ster-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten sterilised',
        priority: 2
      }
    ]
  },
  {
    id: '2557',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2557',
    text: 'сухой корм специально для британских короткошерстных кошек старше 12 месяцев. ',
    nameProductRu: 'Британская короткошерстная',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136937-master.jpg',
    nameProductEa: 'British Shorthair',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 1
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2532',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2532',
        text: 'сухой корм для профилактики образования зубного камня.',
        nameProductRu: 'Орал кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137001-master.jpg',
        nameProductEa: 'Oral Care ',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 2
      },
    ]
  },
  {
    id: '2558',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2558',
    text: 'сухой корм специально для котят породы Мэйн Кун (в возрасте до 15 месяцев). ',
    nameProductRu: 'Киттен мейн кун',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136939-master.jpg',
    nameProductEa: 'Kitten Main Coon',
    recommendation: [
      {
        id: '2522',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
        text: 'Сухой корм для котят в возрасте до 12 месяцев',
        nameProductRu: 'Киттен',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten',
        priority: 1,
      },
      {
        id: '2562',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2562',
        text: 'сухой корм для стерилизованных котят в возрасте от 6 до 12 месяцев',
        nameProductRu: 'Киттен Cтерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/o-dFTIABaPOZra8qzNge/v7/kitten-ster-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten sterilised',
        priority: 2
      }
    ]
  },
  {
    id: '2550',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2550',
    text: 'сухой корм специально для кошек породы Мэйн Кун старше 15 месяцев.',
    nameProductRu: 'Мэйн кун',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136941-master.jpg',
    nameProductEa: 'Main Coon',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 2
      }
    ]
  },
  {
    id: '1231',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-12311',
    text: 'корм сухой специально для котят породы сфинкс в возрасте до 12 месяцев.',
    nameProductRu: 'Киттен Сфинкс',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-199461-master.jpg',
    nameProductEa: 'Kitten Sphynx',
    recommendation: [
      {
        id: '2522',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-2522',
        text: 'Сухой корм для котят в возрасте до 12 месяцев',
        nameProductRu: 'Киттен',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/kudYS4ABaPOZra8qCNhE/v3/kitten-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten',
        priority: 1,
      },
      {
        id: '2562',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2562',
        text: 'сухой корм для стерилизованных котят в возрасте от 6 до 12 месяцев',
        nameProductRu: 'Киттен Cтерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/o-dFTIABaPOZra8qzNge/v7/kitten-ster-packshot-profil-b1-sol21-rus',
        nameProductEa: 'Kitten sterilised',
        priority: 2
      }
    ]
  },
  {
    id: '2556',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2556',
    text: 'сухой корм специально для кошек породы Cфинкс старше 12 месяцев',
    nameProductRu: 'Сфинкс',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136952-master.jpg',
    nameProductEa: 'Sphynx',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2521',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2521',
        text: 'сухой корм для взрослых кошек (в возрасте от 1 года до 7 лет) с повышенной чувствительностью пищеварительной системы.',
        nameProductRu: 'Сенсибл 33',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136975-master.jpg',
        nameProductEa: 'Sensible',
        priority: 1
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 2
      }
    ]
  },
  {
    id: '2551',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2551',
    text: 'Сиамис: сухой корм специально для сиамских кошек старше 12 месяцев',
    nameProductRu: 'Сиамис',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136949-master.jpg',
    nameProductEa: 'Siamese',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 1
      },
    ]
  },
  {
    id: '4370',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-4370',
    text: 'сухой корм специально для бенгальских кошек старше 12 месяцев.',
    nameProductRu: 'Бенгал',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136933-master.jpg',
    nameProductEa: 'Bengal',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2542',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2542',
        text: 'сухой корм для привередливых кошек, особо чувствительных к составу корма.',
        nameProductRu: 'Протеин экзиджент',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136970-master.jpg',
        nameProductEa: 'Protein exigent',
        priority: 1
      },
      {
        id: '2520',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2520',
        text: 'Фит 32: сухой корм для поддержания здоровья взрослых кошек. ',
        nameProductRu: 'Фит 32',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136958-master.jpg',
        nameProductEa: 'Fit',
        priority: 2
      },
    ]
  },
  {
    id: '2516',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2561',
    text: 'сухой корм для стареющих кошек в возрасте старше 12 лет.',
    nameProductRu: 'Эйджинг 12+',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136953-master.jpg',
    nameProductEa: 'Norwegian Forest Cat',
    recommendation: [
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 1
      },
      {
        id: '2524',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2524',
        text: 'корм сухой полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
        nameProductRu: 'Лайт Вейт Кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404804-master.jpg',
        nameProductEa: 'Light Weight Care',
        priority: 2
      },
    ]
  },
  {
    id: '4360',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-4360',
    text: 'сухой корм специально для сибирских кошек старше 12 месяцев',
    nameProductRu: 'Сибирская',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136950-master.jpg',
    nameProductEa: 'Siberian',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 2
      }
    ]
  },
  {
    id: '2515',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-2515',
    text: 'для взрослых кошек старше 12 месяцев',
    nameProductRu: 'Рэгдолл',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_662263_master.jpg',
    nameProductEa: 'Ragdoll',
    recommendation: [
      {
        id: '2537',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2537',
        text: 'сухой корм для стерилизованных взрослых кошек в возрасте от 1 года до 7 лет.',
        nameProductRu: 'Стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136979-master.jpg',
        nameProductEa: 'Sterilised',
        priority: 2
      },
      {
        id: '2560',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2560',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 7 лет.',
        nameProductRu: 'Стерилайзд+7',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136981-master.jpg',
        nameProductEa: 'Sterilised 7+',
        priority: 2
      },
      {
        id: '2565',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-sterilised-2565',
        text: 'сухой корм для стерилизованных кошек в возрасте старше 12 лет. ',
        nameProductRu: 'Эйджинг стерилайзд',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136977-master.jpg',
        nameProductEa: 'Sterilised 12+',
        priority: 2
      },
      {
        id: '2549',
        linkProduct: 'https://www.royalcanin.com/ru/shop/protein-exigent-2549',
        text: 'сухой корм для взрослых длинношерстных кошек (в возрасте от 1 года до 7 лет), живущих в помещении.',
        nameProductRu: 'Индор лонг хэйр',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136965-master.jpg',
        nameProductEa: 'Indoor Long Hair',
        priority: 2
      },
      {
        id: '2526',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2526',
        text: 'сухой корм способствует здоровью кожи и блеску шерсти.',
        nameProductRu: 'Хэйр энд скин кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136996-master.jpg',
        nameProductEa: 'Hair&Skin Care',
        priority: 1
      },
      {
        id: '2534',
        linkProduct: 'https://www.royalcanin.com/ru/shop/indoor-appetite-control-2534',
        text: 'сухой корм для профилактики образования волосяных комочков.',
        nameProductRu: 'Хэйрболл кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136997-other-490534.jpg',
        nameProductEa: 'HAIRBALL Care',
        priority: 2
      },
      {
        id: '1800',
        linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-1800',
        text: 'сухой корм для профилактики образования мочевых камней.',
        nameProductRu: 'Уринари кэа',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137003-master.jpg',
        nameProductEa: 'Urinary Care',
        priority: 2
      },
    ]
  },
  {
    id: '40980019A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-4098',
    text: 'Для кошек, а также для котят в возрасте от 1 до 4 месяцев.',
    nameProductRu: 'Мазер энд Бэбикет (мусс)',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/EPoxa2QBIYfdNSoCEgBD/v438/bbcat-cim-n-can195',
    nameProductEa: 'BABYCAT INSTINCTIVE (БЕБИКЭТ ИНСТИНКТИВ)',
    recommendation: [
      {
        id: '4058',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-соусе)-4058',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/tmkxa2QBG95Xk-RBHtSa/v211/fhnw16-kit-cig-n-pouch',
        nameProductEa: 'Kitten (соус)',
        priority: 1
      },
      {
        id: '4150',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-желе)-4150',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/FVaPsoABBKJuub5qqN5S/v5/sol-kitten-cij-wet-packshot-b1-editable-version-804369-rus-rgb',
        nameProductEa: 'Kitten (желе)',
        priority: 2
      }
    ]
  },
  {
    id: '41450008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-babycat-4098',
    text: 'влажный корм для котят в возрасте до 12 месяцев.',
    nameProductRu: 'Киттен',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136988_master.jpg',
    nameProductEa: 'KITTEN (паштет)',
    recommendation: [
      {
        id: '4058',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-соусе)-4058',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/tmkxa2QBG95Xk-RBHtSa/v211/fhnw16-kit-cig-n-pouch',
        nameProductEa: 'Kitten (соус)',
        priority: 1
      },
      {
        id: '4150',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-желе)-4150',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/FVaPsoABBKJuub5qqN5S/v5/sol-kitten-cij-wet-packshot-b1-editable-version-804369-rus-rgb',
        nameProductEa: 'Kitten (желе)',
        priority: 2
      }
    ]
  },
  {
    id: '10710008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1071',
    text: 'влажный корм для стерилизованных котят в возрасте от 6 до 12 месяцев.',
    nameProductRu: 'Киттен стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137059-master.jpg',
    nameProductEa: 'KITTEN STERILISED (соус)',
    recommendation: [
      {
        id: '4058',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-соусе)-4058',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/tmkxa2QBG95Xk-RBHtSa/v211/fhnw16-kit-cig-n-pouch',
        nameProductEa: 'Kitten (соус)',
        priority: 1
      },
      {
        id: '4150',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-желе)-4150',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/FVaPsoABBKJuub5qqN5S/v5/sol-kitten-cij-wet-packshot-b1-editable-version-804369-rus-rgb',
        nameProductEa: 'Kitten (желе)',
        priority: 2
      }
    ]
  },
  {
    id: '10720008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1072',
    text: 'влажный корм для стерилизованных котят в возрасте от 6 до 12 месяцев.',
    nameProductRu: 'Киттен стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_137060_master.jpg',
    nameProductEa: 'KITTEN STERILISED (желе)',
    recommendation: [
      {
        id: '4058',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-соусе)-4058',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/tmkxa2QBG95Xk-RBHtSa/v211/fhnw16-kit-cig-n-pouch',
        nameProductEa: 'Kitten (соус)',
        priority: 2
      },
      {
        id: '4150',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-желе)-4150',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/FVaPsoABBKJuub5qqN5S/v5/sol-kitten-cij-wet-packshot-b1-editable-version-804369-rus-rgb',
        nameProductEa: 'Kitten (желе)',
        priority: 1
      }
    ]
  },
  {
    id: '41470008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-4147',
    text: 'влажный корм для стерилизованных взрослых кошек.',
    nameProductRu: 'Стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136989-master.jpg',
    nameProductEa: 'STERILISED (паштет)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 1
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '40590008R0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-4059',
    text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет. ',
    nameProductRu: 'Инстинктив',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
    nameProductEa: 'INSTINCTIVE (паштет)',
    recommendation: [
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '40830008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-4083',
    text: 'влажный корм для кошек в возрасте старше 7 лет.',
    nameProductRu: 'Инстинктив 7+',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137005-master.jpg',
    nameProductEa: 'INSTINCTIVE +7 (соус)',
    recommendation: [
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '40820008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-4082',
    text: 'влажный корм для стареющих кошек в возрасте старше 12 лет.',
    nameProductRu: 'Эйджинг +12',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/pGkxa2QBG95Xk-RBCtSi/v234/fhnw16-ag12-cig-n-pouch',
    nameProductEa: 'AGEING +12 (соус)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      }
    ]
  },
  {
    id: '41530008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-4153',
    text: 'влажный корм для стареющих кошек в возрасте старше 12 лет.',
    nameProductRu: 'Эйджинг +12',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/1yExa2QBaxEApS7LD_y_/v88/fhnw16-ag12-cij-n-pouch',
    nameProductEa: 'AGEING +12 (желе)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 2
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 1
      }
    ]
  },
  {
    id: '12780008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1278',
    text: 'корм консервированный полнорационный для взрослых кошек (в возрасте от 1 года до 7 лет), постоянно живущих в помещении',
    nameProductRu: 'Индор Стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-403559-master.jpg',
    nameProductEa: 'INDOOR (соус)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 2
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 2
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '12880008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1288',
    text: 'корм консервированный полнорационный для взрослых кошек (в возрасте от 1 года до 7 лет), постоянно живущих в помещении',
    nameProductRu: 'Индор Стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-403553-master.jpg',
    nameProductEa: 'INDOOR (желе)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 2
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 1
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 2
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 2
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '12930008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1293',
    text: 'корм консервированный полнорационный для взрослых кошек (в возрасте от 1 года до 7 лет), постоянно живущих в помещении',
    nameProductRu: 'Индор Стерилайзд',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-403511-master.jpg',
    nameProductEa: 'INDOOR (паштет)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 2
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 2
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '13050008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1305',
    text: 'корм консервированный полнорационный для стареющих кошек (в возрасте от 7 до 12 лет), постоянно живущих в помещении',
    nameProductRu: 'Индор Стерилайзд 7+ лет',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-403475-master.jpg',
    nameProductEa: 'INDOOR 7+ (соус)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 2
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 2
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '13130008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1313',
    text: 'корм консервированный полнорационный для стареющих кошек (в возрасте от 7 до 12 лет), постоянно живущих в помещении',
    nameProductRu: 'Индор Стерилайзд 7+ лет',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/SH4q528BGYYl5D-l50Rn/v147/fhnw20-indoor-7-ster-jelly-packshot-pouch85-b1n',
    nameProductEa: 'INDOOR 7+ (желе)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 10
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 1
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 2
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 2
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '15170008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/mother-&-babycat-1517',
    text: 'корм консервированный полнорационный для взрослых кошек  (в возрасте от 1 года до 7 лет), стимулирующий обонятельные рецепторы, кусочки в соусе',
    nameProductRu: 'Сенсори Запах',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_738957_master.jpg',
    nameProductEa: 'SENSORY SMELL (СЕНСОРИ ЗАПАХ)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '15180008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/sensory™-запах-(в-соусе)-1518',
    text: 'корм консервированный полнорационный для взрослых кошек  (в возрасте от 1 года до 7 лет), стимулирующий обонятельные рецепторы, кусочки в соусе',
    nameProductRu: 'Сенсори Вкус',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_738983_master.jpg',
    nameProductEa: 'SENSORY TASTE (СЕНСОРИ ВКУС)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '15190008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/sensory™-ощущения-(в-соусе)-1519',
    text: 'корм консервированный полнорационный для взрослых кошек  (в возрасте от 1 года до 7 лет), стимулирующий обонятельные рецепторы, кусочки в соусе',
    nameProductRu: 'Сенсори Ощущения',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_739016_master.jpg',
    nameProductEa: 'SENSORY FEEL (СЕНСОРИ ОЩУЩЕНИЯ)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '20300008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/persian-(в-паштете)-2030',
    text: 'для взрослых кошек старше 12 месяцев',
    nameProductRu: 'Персиан',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136911-master.jpg',
    nameProductEa: 'PERSIAN (ПЕРСИАН)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 10
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 2
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 1
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '12320008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/maine-coon-kitten-(в-соусе)-1232',
    text: 'специально для котят породы Мэйн Кун (в возрасте до 15 месяцев)',
    nameProductRu: 'Киттен Мэйн Кун',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/RmnNt2sBG95Xk-RBcPwm/v46/fbnw18-mcoon-kit-pouch',
    nameProductEa: 'KITTEN MAINE COON (КИТТЕН МЕЙН-КУН)',
    recommendation: [
      {
        id: '4058',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-соусе)-4058',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/tmkxa2QBG95Xk-RBHtSa/v211/fhnw16-kit-cig-n-pouch',
        nameProductEa: 'Kitten (соус)',
        priority: 1
      },
      {
        id: '4150',
        linkProduct: 'https://www.royalcanin.com/ru/shop/kitten-(в-желе)-4150',
        nameProductRu: 'Киттен',
        text: 'влажный корм для котят в возрасте до 12 месяцев',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/FVaPsoABBKJuub5qqN5S/v5/sol-kitten-cij-wet-packshot-b1-editable-version-804369-rus-rgb',
        nameProductEa: 'Kitten (желе)',
        priority: 2
      }
    ]
  },
  {
    id: '40700008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/light-weight-care-(в-соусе)-4070',
    text: 'корм консервированный полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
    nameProductRu: 'Лайт Вейт Кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/VH6IYGwBGYYl5D-lCCy2/v338/light-gravy-packshot-pouch-b1n',
    nameProductEa: 'LIGHT WEIGHT (ЛАЙТ ВЕЙТ) (соус)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 1
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '41520008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/light-weight-care-(в-желе)-4152',
    text: 'корм консервированный полнорационный для взрослых кошек - Рекомендуется для профилактики лишнего веса.',
    nameProductRu: 'Лайт Вейт Кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-404827-master.jpg',
    nameProductEa: 'LIGHT WEIGHT (ЛАЙТ ВЕЙТ) (желе)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4059',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-соусе)-4059',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137006-master.jpg',
        nameProductEa: 'Instinctive (соус)',
        priority: 2
      },
      {
        id: '4074',
        linkProduct: 'https://www.royalcanin.com/ru/shop/instinctive-(в-желе)-4074',
        nameProductRu: 'Инстинктив',
        text: 'влажный корм для взрослых кошек в возрасте от 1 года до 7 лет',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137008-master.jpg',
        nameProductEa: 'Instinctive (желе)',
        priority: 1
      },
    ]
  },
  {
    id: '41570008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/urinary-care-(в-соусе)-415770008A0',
    text: 'влажный корм для взрослых кошек.',
    nameProductRu: 'Уринари кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/zPoya2QBIYfdNSoCTwDw/v262/fcnw16-urinary-cig-n-pouch',
    nameProductEa: 'URINARY CARE (УРИНАРИ КЭА)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 1
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      }
    ]
  },
  {
    id: '41580008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/hairball-care-(в-соусе)-4158',
    text: 'влажный корм для взрослых кошек.',
    nameProductRu: 'Хэйрболл кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/p_oya2QBIYfdNSoCCgAC/v352/fcnw16-hairball-cig-n-pouch',
    nameProductEa: 'HAIRBALL CARE (ХЭЙРБОЛЛ КЭА)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 1
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      },
      {
        id: '4076',
        linkProduct: 'https://www.royalcanin.com/ru/shop/digest-sensitive-(в-соусе)-4076',
        text: 'Дайджест сенситив',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/RU_136982_master.jpg',
        nameProductEa: 'Digest Sensitive',
        priority: 1
      },
      {
        id: '4071',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-соусе)-4071',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136985-master.jpg',
        nameProductEa: 'Intense Beauty (соус)',
        priority: 2
      },
      {
        id: '4151',
        linkProduct: 'https://www.royalcanin.com/ru/shop/intense-beauty-(в-желе)-4151',
        text: 'Интенс бьюти',
        nameProductRu: 'влажный корм для взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-136987-master.jpg',
        nameProductEa: 'Intense Beauty (желе)',
        priority: 2
      },
    ]
  },
  {
    id: '14660008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-(в-соусе)-1466',
    text: 'для контроля выпрашивания корма у кошек, предрасположенных к набору лишнего веса, в том числе после стерилизации.',
    nameProductRu: 'Аппетайт Контрол Кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://cdn.royalcanin-weshare-online.io/aefTqHUBaPOZra8qUphE/v11/fcnw20-appetite-control-gravy-packshot-pouch-b1n-rc-psd-png-2000x1320-150-rgb',
    nameProductEa: 'APPETITE CONTROL CARE (АППЕТАЙТ КОНТРОЛ КЭА) (соус)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 1
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 2,
      }
    ]
  },
  {
    id: '14670008A0',
    linkProduct: 'https://www.royalcanin.com/ru/shop/appetite-control-care-(в-желе)-1467',
    text: 'для контроля выпрашивания корма у кошек, предрасположенных к набору лишнего веса, в том числе после стерилизации.',
    nameProductRu: 'Аппетайт Контрол Кэа',
    image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-502526-master.jpg',
    nameProductEa: 'APPETITE CONTROL CARE (АППЕТАЙТ КОНТРОЛ КЭА) (желе)',
    recommendation: [
      {
        id: '4095',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-соусе)-4095',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137011-master.jpg',
        nameProductEa: 'Sterilised (cоус)',
        priority: 2
      },
      {
        id: '4156',
        linkProduct: 'https://www.royalcanin.com/ru/shop/sterilised-(в-желе)-4156',
        nameProductRu: 'Стерилайзд',
        text: 'влажный корм для стерилизованных взрослых кошек.',
        image: 'https://d2c-cdn.royalcanin.com/cdn-cgi/image/width=500,h=500,format=webp/https://d2cfgseuprod.z6.web.core.windows.net/ruv1/ru-137012-master.jpg',
        nameProductEa: 'Sterilised (желе)',
        priority: 1,
      }
    ]
  },
]
