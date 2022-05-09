import React from 'react';
import {
    Icon28UserCircleOutline,
    Icon28MessageOutline,
    Icon28ServicesOutline,
    Icon28ListOutline,
    Icon28ClipOutline,
    Icon28TearOffFlyerOutline,
    Icon28Users3Outline,
    Icon28VinylOutline,
    Icon28SettingsOutline,
    Icon28PhoneOutline,
    Icon28UsersOutline,
    Icon28StoryOutline,
    Icon28VideoOutline,
    Icon28HeartCircleOutline,
    Icon28MoneyCircleOutline,
    Icon28PodcastOutline,
    Icon20UserCircleOutline,
    Icon20MessageOutline,
    Icon20ServicesOutline,
    Icon20MenuOutline,
    Icon20GesturePlayOutline,
    Icon20TearOffFlyerOutline,
    Icon20Users3Outline,
    Icon20VinylOutline,
    Icon20GearOutline,
    Icon20PhoneOutline,
    Icon20UsersOutline,
    Icon20StoryOutline,
    Icon20VideoCircleOutline,
    Icon20LikeOutline,
    Icon20MoneyCircleOutline,
    Icon20PodcastOutline,

} from '@vkontakte/icons';

import { LinkHandler } from './Utils';

export const APP_ID = 8154914;
export const IMAGES_URL = process.env.PUBLIC_URL + '/img';
export const CHANNELS_IMG_URL = process.env.PUBLIC_URL + '/img/channels_avatar';
export const viewsStructure = {
    Excursions: {
        navName: 'Excursions',
        name: 'Экскурсия ВКонтакте',
        panels: {
            homepanel: 'home',
        }
    },
    Communites: {
        navName: 'Communites',
        name: 'Официальные сообщества',
        panels: {
            homepanel: 'home',
        },
    },
    Services: {
        navName: 'Services',
        name: 'Чаты и каналы',
        panels: {
            homepanel: 'home',
        },
    },
    Disconnect: {
        navName: 'disconnect',
        name: 'Ошибка сети',
        panels: {
            homepanel: 'load',
        }
    }
}
export const CATEGORIES = [
    {
        name: 'Профиль',
        icon: <Icon28UserCircleOutline />,
        ios_restrict: true,
        category: 'profile',
        description: <span>Как открыть свой профиль?
        <br/><br/>1. Нажмите на свою фотографию в левом верхнем углу.
        <br/>2. Выберите «Мой профиль».<br/><br/>Опубликуйте свежие фото, обновите аватар, поделитесь новостями — всё это поможет найти старых друзей или завести новые знакомства.</span>,
        access_on_mobile: false,
        img: '/profile.png',
        mini_icon: Icon20UserCircleOutline,
        link_button: 'https://vk.com/id0',
    },
    {
        name: 'Мессенджер',
        icon: <Icon28MessageOutline />,
        category: 'messenger',
        description: <span>Это один из главных разделов приложения ВКонтакте. В нём есть всё для общения: мы заходим туда, чтобы позвонить, отправить деньги, музыку, фото, видео или документы,
        про голосовые сообщения не забываем. Теперь это стало неотъемлемой частью общения.<br/><br/>Также можно поменять вид вашего чата: для этого необходимо выбрать раздел «Внешний вид» и выбрать подходящую тему для общения.
        Писать друзьям можно даже по номеру телефона. Допустим, вы обменялись телефонами с коллегой и хотите продолжить общение в VK. Не нужно тратить часы на поиск по имени, месту работы и возрасту.
        Просто синхронизируйте контакты.<br/><br/>Когда вы напишете коллеге, у него или у неё в разделе «Мессенджер» появится заметная вкладка «Приглашения». В ней и окажется переписка с вами. Если коллега одобрит запрос, вы сможете общаться как обычно и отправить заявку в друзья.<br/><br/>
        ВКонтакте, вдобавок ко всему, увеличил размер документов, которые можно отправлять в мессенджере, комментариях и обсуждениях, с 200 мегабайт до 2 гигабайт. Делитесь файлами по работе или учёбе без сторонних сервисов.</span>,
        access_on_mobile: false,
        img: '/messenger.png',
        mini_icon: Icon20MessageOutline,
        link_button: 'https://vk.com/im',
    },
    {
        name: 'Сервисы',
        icon: <Icon28ServicesOutline />,
        category: 'services',
        description: <span>Вторая вкладка в меню снизу — каталог всех сервисов ВКонтакте. Здесь VK Музыка, VK Видео, «Сообщества», «Объявления», «Здоровье» и «Шаги», игры и многое другое.<br/><br/>Если вам что-то нужно, — заказать продукты или пиццу, найти скидки и акции, узнать погоду или курсы валют — откройте вкладку «Сервисы».<br/><br/>
        У нас для вас задание: подпишитесь на любое понравившееся сообщество, чтобы в будущем получать более точные рекомендации.
        </span>,
        access_on_mobile: true,
        img: '/services.png',
        mini_icon: Icon20ServicesOutline,
        link_button: 'https://vk.com/services',
    },
    {
        name: 'Ленты',
        icon: <Icon28ListOutline />,
        category: 'feed',
        description: <span>Ленты ВКонтакте собрались на первой вкладке меню: «Новости», «Для вас» и «Актуальное».<br/><br/>В ленте «Актуальное» собраны все самые актуальные события страны и мира. Громкие сюжеты будут сгруппированы по темам.<br/><br/>Группировкой сюжетов занимается специальный алгоритм, который находит и определяет темы с высоким потенциалом цитируемости и обсуждаемости.
        Он также учитывает персональные интересы пользователей и показывает темы, которые могут быть интересны именно вам.<br/><br/>Чтобы рекомендации лент стали точнее, оставляйте реакции под записями друзей и сообществ.<br/><br/>Это и будет вашим заданием: прямо сейчас поставьте реакцию понравившейся записи.</span>,
        access_on_mobile: true,
        img: '/tapes.png',
        mini_icon: Icon20MenuOutline,
        link_button: 'https://vk.com/feed/trends',
    },
    {
        name: 'Клипы',
        icon: <Icon28ClipOutline />,
        category: 'clips',
        description: <span>«Клипы» — бесконечная лента коротких роликов на четвёртой вкладке.<br/><br/>Каждый день здесь появляется множество новых клипов, и алгоритм выбирает те, что понравятся именно вам. А самые популярные клипы ищите в подборках раздела «Тренды».<br/><br/>А если вы сами хотите снять и выложить клип, смотрите нашу пошаговую видеоинструкцию.</span>,
        access_on_mobile: false,
        img: '/clips.png',
        video_instruction: 'https://vk.com/video-27902394_456239581',
        community_id: 194351072,
        mini_icon: Icon20GesturePlayOutline,
        link_button: 'https://vk.com/clips',
    },
    {
        name: 'Объявления',
        icon: <Icon28TearOffFlyerOutline />,
        category: 'ad',
        description: <span>Продавайте лишнее и покупайте нужное в Объявлениях ВКонтакте.<br/><br/>Ваше объявление сразу попадёт в раздел «Объявления», на сайт Юлы и в тематические сообщества ВКонтакте, которые вы сами выберете. Это значит, что ваше предложение увидит гораздо больше людей — потенциальных покупателей.</span>,
        access_on_mobile: false,
        img: '/classifieds.png',
        community_id: 200241296,
        mini_icon: Icon20TearOffFlyerOutline,
        link_button: 'https://vk.com/classifieds',
    },
    {
        name: 'Сообщества',
        icon: <Icon28Users3Outline />,
        category: 'communites',
        description: <span>Сообщества — это объединения людей по интересам, позволяющие получать новости, вести бизнес или просто развлекаться<br/><br/>Существует возможность создавать закрытые сообщества (чьи материалы скрыты от случайных посетителей), попасть в которые можно только по приглашениям.
        Поэтому сообщества можно использовать и для организации дистанционной работы, общения с друзьями и множества других задач.<br/><br/>Одним из ключевых отличий сообществ от личных страниц является то, что добавлять материалы в сообщества могут и сами участники.
        Наличие гибкой системы настроек приватности и назначения руководства позволяет с помощью сообществ с удобством организовывать любые виды общественной деятельности: от бизнеса до общения с фанатами.<br/><br/>У нас для вас задание: подпишитесь на любое понравившееся сообщество, чтобы в будущем получать более точные рекомендации.</span>,
        access_on_mobile: false,
        img: '/groups.png',
        community_id: 59800369,
        mini_icon: Icon20Users3Outline,
        link_button: 'https://vk.com/groups',
    },
    {
        name: 'Музыка',
        icon: <Icon28VinylOutline />,
        category: 'musics',
        button_text: 'музыку',
        description: <span>Данный раздел объединяет все музыкальные продукты VK в едином музыкальном направлении: музыкальные разделы соцсетей ВКонтакте и Одноклассники, общую библиотеку контента, продукты для музыкантов и лейблов, общие технологии рекомендаций и отдельное мобильное приложение VK Музыка.
        <br/><br/>VK Музыка выходит за пределы алгоритмических рекомендаций и предлагает пользователям новый опыт — рекомендации от людей. Сейчас в базе раздела более 100 млн уникальных плейлистов, которые собраны людьми и сообществами.
        </span>,
        access_on_mobile: false,
        img: '/music.png',
        community_id: 147845620,
        mini_icon: Icon20VinylOutline,
        link_button: 'https://vk.com/audio',
    },
    {
        name: 'Настройки',
        icon: <Icon28SettingsOutline />,
        category: 'settings',
        description: <span>Пора настроить ВКонтакте под себя!<br/><br/>1. Нажмите на свою фотографию в левом верхнем углу.<br/>2. Выберите «Настройки».<br/><br/>Настройте свой профиль так, чтобы Вашим друзьям не составило труда найти Вас в самый необходимый момент. Пишите только настоящие данные — это важно.</span>,
        access_on_mobile: false,
        img: '/settings.png',
        mini_icon: Icon20GearOutline,
        link_button: 'https://vk.com/settings',
    },
    {
        name: 'Звонки',
        icon: <Icon28PhoneOutline />,
        category: 'calls',
        description: <span>Здесь можно создать звонок с доступом по ссылке на неограниченное количество участников, посмотреть историю вызовов, в том числе пропущенных, присоединиться к текущим конференциям или быстро связаться с друзьями из списка контактов — им есть возможность позвонить как с личной страницы, так и от имени сообщества.
        <br/><br/>В разделе есть все инструменты для управления большими по составу звонками и их модерации: для обеспечения комфортного ведения мероприятия администраторы конференций могут выключать микрофоны у всех участников и регулировать правила их включения, предоставляя слово при использовании участником функции «Поднять руку».
        <br/><br/>Нейтрализовать все посторонние шумы на фоне во время звонка помогает собственная технология интеллектуального шумоподавления — она активна даже при слабом и нестабильном интернет-соединении. Обеспечить приватность звонка помогает функция «Зал ожидания»: войти в конференцию получится только после того, как организатор одобрит заявку. При этом к разговору можно присоединяться анонимно без профиля в социальной сети ВКонтакте.
        <br/><br/>Для этого даже есть отдельные приложения для компьютеров и мобильных устройств: <LinkHandler href='https://vk.com/video-calls'>vk.com/video-calls</LinkHandler>.</span>,
        access_on_mobile: false,
        img: '/calls.png',
        mini_icon: Icon20PhoneOutline,
        link_button: 'https://vk.com/calls',
    },
    {
        name: 'Друзья',
        icon: <Icon28UsersOutline />,
        category: 'friends',
        description: <span>Раздел «Друзья» найдёте во вкладке «Сервисы».<br/><br/>Вы можете добавить в друзья людей, которые записаны в вашем телефоне. В видео рассказываем, как это сделать.<br/><br/>Когда вы нажимаете «Добавить», то отправляете человеку заявку в друзья и сразу же подписываетесь. Если человек одобрит вашу заявку, вы станете друзьями. Попробуйте!</span>,
        access_on_mobile: false,
        img: '/friends.png',
        mini_icon: Icon20UsersOutline,
        link_button: 'https://vk.com/friends',
    },
    {
        name: 'Истории',
        icon: <Icon28StoryOutline />,
        category: 'history',
        description: <span>Поделитесь историей с друзьями с помощью кнопки «Опубликовать», а с подписчиками сообщества — через кнопку «Получатели».<br/><br/>Если вы не хотите, чтобы истории пропали через 24 часа, сохраните их в сюжет. Для этого откройте историю и нажмите на значок карточки с сердечком в верхнем углу.<br/><br/>Ищите сюжеты в специальном блоке на личной странице или в сообществе.</span>,
        access_on_mobile: false,
        img: '/history.png',
        community_id: 139533130,
        mini_icon: Icon20StoryOutline,
    },
    {
        name: 'Видео',
        icon: <Icon28VideoOutline />,
        category: 'videos',
        description: <span>Смотрите видео бесплатно в Full HD и 4K в VK Видео.<br/><br/>Здесь миллионы роликов всех форм и жанров: фильмы, сериалы, телешоу, спортивные матчи, киберспортивные трансляции и много чего ещё.<br/><br/>Долго искать нужные видео не придётся: те, что могут быть интересны именно вам, алгоритмы соберут в разделе «Для вас».
        <br/><br/>Чтобы поделиться своим видео, нажмите «+» в правом верхнем углу и загрузите ролик.</span>,
        access_on_mobile: false,
        img: '/video.png',
        community_id: 207536086,
        mini_icon: Icon20VideoCircleOutline,
        link_button: 'https://vk.com/video',
    },
    {
        name: 'Знакомства',
        icon: <Icon28HeartCircleOutline />,
        category: 'acquaintances',
        description: <span>Этот сервис с легкостью поможет найти пару для дружеского или романтического общения.<br/><br/>Специальный алгоритм сервиса проанализирует ваши интересы, жизненную позицию, музыкальные вкусы и предложит наиболее подходящих собеседников. Понравившиеся анкеты смахивайте вправо, непонравившиеся — влево.
        Когда человек ответит вам взаимностью, для вас двоих создастся чат.</span>,
        access_on_mobile: false,
        img: '/dating.png',
        community_id: 180262371,
        mini_icon: Icon20LikeOutline,
        link_button: 'https://vk.com/dating',
    },
    {
        name: 'VK Pay',
        icon: <Icon28MoneyCircleOutline />,
        category: 'vkpay',
        button_text: 'VK Pay',
        description: <span>Это платформа для коммуникации бизнеса и пользователей на основе экосистемы ВКонтакте. Мы предлагаем пользователям новый способ оплаты товаров и услуг в приложениях ВКонтакте и в интернет-магазинах.
        <br/><br/>К примеру, вы собираетесь с друзьями на VK Fest, договариваетесь об этом в беседе и сразу можете купить билеты через VK Pay, не покидая ВКонтакте.</span>,
        access_on_mobile: false,
        img: '/pay.png',
        community_id: 166850908,
        mini_icon: Icon20MoneyCircleOutline,
        link_button: 'https://vk.com/vkpay',
    },
    {
        name: 'Подкасты',
        icon: <Icon28PodcastOutline />,
        category: 'podcasts',
        description: <span>Подкасты – это аудиоблоги ВКонтакте. Лента подкастов доступна для прослушивания всем пользователям на любом устройстве. Вы можете попасть туда через раздел Новости → Подкасты. <br/><br/>Прослушивание на разных устройствах синхронизировано. Вы можете начать слушать подкаст в приложении на телефоне и продолжить на компьютере с того же места. Есть возможность регулировать скорость воспроизведения.
        <br/><br/>Ограничения фонового прослушивания на подкасты не распространяются.</span>,
        access_on_mobile: false,
        img: '/podcasts.png',
        community_id: 170417593,
        mini_icon: Icon20PodcastOutline,
        link_button: 'https://vk.com/podcasts',
    },
]

export const OFFICIAL_COMMUNITES = {
    news: [
        {
            community_id: 22822305,
            description: 'Главные новости о ВКонтакте и нашей Команде',
        },
        {
            community_id: 163055303,
            description: 'Сообщество Команды ВКонтакте на английском',
        },
        {
            community_id: 35005,
            description: 'Сообщество экосистемы VK',
        },
        {
            community_id: 147415323,
            description: 'Когда создавать новое — это твой профиль',
        },
        {
            community_id: 59800369,
            description: 'Рекомендации для администраторов и владельцев сообществ',
        },
        {
            community_id: 76477496,
            description: 'Рассказываем о талантливых людях и интересных страницах ВКонтакте',
        },
    ],
    countries: [
        {
            community_id: 550910,
            description: 'Для пользователей из Украины',
        },
        {
            community_id: 100936019,
            description: 'Для пользователей из Казахстана',
        },
        {
            community_id: 75813940,
            description: 'Для пользователей из Бразилии',
        },
        {
            community_id: 183785728,
            description: 'Для пользователей из Испании',
        },
    ],
    security: [
        {
            community_id: 22884714,
            description: 'Сообщество межгалактического бюро Поддержки ВКонтакте',
        },
        {
            community_id: 777107,
            description: 'Советы по информационной безопасности и защите профиля',
        },
    ],
    development: [
        {
            community_id: 166562603,
            description: 'Сообщество для разработчиков приложений',
        },
        {
            community_id: 1,
            description: 'API для разработчиков приложений',
        },
        {
            community_id: 84585194,
            description: 'Сообщество тестировщиков ВКонтакте',
        },
        {
            community_id: 28551727,
            description: 'Информация об изменениях в API ВКонтакте',
        },
        {
            community_id: 9713780,
            description: 'Объединение людей, заинтересованных в развитии сервиса игр и приложений, а также игровых API и SDK в целом',
        },
        {
            community_id: 187376020,
            description: 'Создание искусственного интеллекта',
        },
    ],
    products: [
        {
            community_id: 166850908,
            description: 'Платформа социальной коммерции: удобная оплата товаров и услуг в сообществах ВКонтакте и интернет-магазинах',
        },
        {
            community_id: 139533130,
            description: 'Сообщество с новостями о масках и обновлениях историй ВКонтакте',
        },
        {
            community_id: 68218830,
            description: 'Сообщество стикеромэнов',
        },
        {
            community_id: 49849615,
            description: 'Новые подарки VK',
        },
        {
            community_id: 186112991,
            description: 'Получайте бонусы за покупки',
        },
    ],
    mobile_apps: [
        {
            community_id: 27902394,
            description: 'Сообщество мобильного приложения ВКонтакте',
        },
        {
            community_id: 193445661,
            description: 'Только общение',
        },
        {
            community_id: 128012194,
            description: 'Администрирование сообществ',
        },
    ],
    design: [
        {
            community_id: 44384363,
            description: 'Сообщество дизайнеров ВКонтакте. Предложение пользователей по улучшению дизайна',
        },
        {
            community_id: 113856473,
            description: 'Поиск талантливых иллюстраторов',
        },
        {
            community_id: 157574223,
            description: 'Группа для художников масок',
        },
    ],
    business: [
        {
            community_id: 19542789,
            description: 'Как бизнесу найти новых клиентов и обратиться к огромной аудитории социальной сети',
        },
        {
            community_id: 192668858,
            description: 'Монетизируйте свой контент с помощью платной подписки',
        },
        {
            community_id: 178889418,
            description: 'Клуб предпринимателей, которые используют для продаж инструменты ВКонтакте',
        },
        {
            community_id: 212221031,
            description: 'Эффективнее. Быстрее. Точнее.',
        },
    ],
    charity: [
        {
            community_id: 133169189,
            description: 'Новости о социальных проектах и акциях ВКонтакте',
        },
    ],
    games: [
        {
            community_id: 78616012,
            description: 'Информация про игровую платформу ВКонтакте, самые интересные и захватывающие игры',
        },
        {
            community_id: 120730815,
            description: 'Новости игр и киберспорта, а также записи о верифицированных сообществах и профилях',
        },
        {
            community_id: 126093223,
            description: 'Официальное сообщество игры Dota 2',
        },
        {
            community_id: 212496568,
            description: 'Российская площадка для любителей игр, разработчиков и авторов контента',
        },
    ],
    sport: [
        {
            community_id: 29809500,
            description: 'Спортивные новости: эксклюзивные трансляции, конкурсы и репортажи',
        },
        {
            community_id: 197864572,
            description: 'Сообщество, где рассказывают полезные материлы, чтобы поддерживать свое здоровье в норме',
        },
    ],
    music: [
        {
            community_id: 188659484,
            description: 'Cкидки и спецпредложения в популярных сервисах доставки еды, каршеринг, музыка без рекламы и многое другое',
        },
        {
            community_id: 50695130,
            description: 'Музыка начинающих артистов. Публикуются предложенные пользователями записи',
        },
        {
            community_id: 182611749,
            description: 'Объединение энтузиастов, которые делают тематические ленты лучше',
        },
        {
            community_id: 22079806,
            description: 'Информация о новых официальных страницах и самое интересное о верифицированных сообществах и профилях',
        },
        {
            community_id: 86529522,
            description: 'Фестиваль ВКонтакте',
        },
        {
            community_id: 203197497,
            description: 'Заказывайте самокаты вместе с друзьями',
        },
        {
            community_id: 206974895,
            description: 'Акселератор талантов платформы Видео ВКонтакте',
        },
    ],
    education: [
        {
            community_id: 92204627,
            description: 'Начни карьеру в IT вместе с VK',
        },
        {
            community_id: 153502007,
            description: 'Новости о программе стажировок ВКонтакте и других образовательных проектах',
        },
        {
            community_id: 197700721,
            description: 'Сообщество для участников соревнования',
        },
    ]
}
export const SERVICES = {
    vk: [
        {
            service_id: 7786561,
            description: 'Создайте паспорт своего питомца и следите за его здоровьем',
        },
        {
            service_id: 8015950,
            description: 'Покупайте интересные товары от разных продавцов и магазинов',
        },
        {
            service_id: 8109817,
            description: 'Инструмент, который позволит перенести все видеоролики с YouTube в VK Видео',
        },
    ],
    other: {
        tools: [
            {
                service_id: 6798836,
                description: 'Инстурмент, который позволит узнать о своем профиле больше',
            },
            {
                service_id: 7183114,
                description: 'Просмотр комментариев пользователя, созданных сообществ, приложений и прочего контента',
            },
            {
                service_id: 7557431,
                description: 'С помощью сервиса и рекомендаций автор может улучшить контент, а также получить огонь прометея',
            },
        ],
        communication: [
            {
                service_id: 8054530,
                description: 'Каталог бесед ВКонтакте',
            },
            {
                service_id: 8089955,
                description: 'Запиши, чтобы не потерять',
            },
            {
                service_id: 7588940,
                description: 'Совместный выгул питомцев',
            },
        ],
        education: [
            {
                service_id: 7576544,
                description: 'Учебный глоссарий всегда под рукой',
            },
            {
                service_id: 7259402,
                description: 'Астрономический календарь',
            },
        ]
    }
}

export const CHANNELS = [
    {
        avatar: '/consequence.jpg',
        title: 'Consequence_s Photography',
        caption: 'Фотограф',
        link: 'https://vk.me/join/Dm0QlpWbBl2aautrqois4X3jQNFoW226kug=',
    },
    {
        avatar: '/vpsh.jpg',
        title: 'ВПШ',
        caption: 'Интернет-СМИ',
        link: 'https://vk.me/join/4P2RiPZM3mAOMMw7951ynA8/iKuSgB1jLbc=',
    },
    {
        avatar: '/ce.jpg',
        title: 'Це канал',
        caption: 'Бизнес',
        link: 'https://vk.me/join/dYQUIpctOO3sEq1MfE2/49P3r7HnoGWDLgs=',
    },
    {
        avatar: '/rhymes.jpg',
        title: 'Рифмы и Новости',
        caption: 'Блог',
        link: 'https://vk.me/join/gSUph1elksZ2XRqSbWY8yzN5Z7AJiITHD1c=',
    },
]
export const IS_MOBILE = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
