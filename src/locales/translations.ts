import { Language } from '@/types';

export type TranslationKey = keyof typeof translations.uz;

export const translations = {
  uz: {
    // Nav
    home: 'Bosh sahifa',
    about: 'Biz haqimizda',
    products: 'Mahsulotlar',
    contact: 'Aloqa',
    cart: 'Savat',

    // Hero
    heroTitle: 'Gulchekhra_collection',
    heroSubtitle: 'An\'anaviy o\'zbek moda san\'ati — qo\'lda ishlangan, noyob va nafis',
    heroShop: 'Xarid qilish',
    heroAbout: 'Batafsil',

    // Products
    allProducts: 'Barcha mahsulotlar',
    searchProducts: 'Mahsulot qidirish...',
    noProducts: 'Mahsulotlar topilmadi',
    loadingProducts: 'Yuklanmoqda...',
    errorLoading: 'Xatolik yuz berdi',
    viewDetails: 'Batafsil',
    addToCart: 'Savatga qo\'shish',
    featured: 'Tanlanganlar',
    price: 'Narx',
    sortByPrice: 'Narx bo\'yicha',
    sortDefault: 'Standart',
    sortLowHigh: 'Arzon → Qimmat',
    sortHighLow: 'Qimmat → Arzon',

    // Product Detail
    relatedProducts: 'O\'xshash mahsulotlar',
    quantity: 'Miqdor',

    // Cart
    cartEmpty: 'Savat bo\'sh',
    cartEmptyDesc: 'Hali mahsulot qo\'shilmagan',
    cartTotal: 'Jami',
    checkout: 'Buyurtma berish',
    remove: 'O\'chirish',
    continueShopping: 'Xaridni davom ettirish',

    // Order
    orderTitle: 'Buyurtma',
    fullName: 'To\'liq ism',
    phone: 'Telefon raqam',
    address: 'Manzil',
    email: 'Elektron pochta',
    oferta: 'Oferta shartlarini qabul qilaman',
    placeOrder: 'Buyurtma berish',
    orderSuccess: 'Buyurtma muvaffaqiyatli yuborildi!',
    orderError: 'Buyurtma yuborishda xatolik',
    required: 'Majburiy maydon',
    invalidEmail: 'Noto\'g\'ri email',
    invalidPhone: 'Noto\'g\'ri telefon raqam',

    // About
    aboutTitle: 'Gulchehra haqida',
    aboutStory: 'Bizning hikoya',
    aboutStoryText: 'Gulchehra — bu an\'anaviy o\'zbek hunarmandchiligining zamonaviy ifodasi. Har bir mahsulot qo\'lda, nafis va ehtiyotkorlik bilan tayyorlanadi.',
    aboutMission: 'Missiyamiz',
    aboutMissionText: 'Biz o\'zbek milliy madaniyatini dunyo miqyosida targ\'ib qilishni va har bir buyumda tarixiy merosni saqlab qolishni maqsad qilganmiz.',
    aboutCraft: 'Hunarmandchilik',
    aboutCraftText: 'Har bir tikuv, har bir naqsh — bu avlodlardan meros bo\'lib kelgan san\'atning davomi.',
    aboutValues: 'Qadriyatlarimiz',
    aboutValuesText: 'Sifat, an\'ana, nafislik va halollik — bu Gulchehra brendining asosiy qadriyatlari.',

    // Contact
    contactTitle: 'Biz bilan bog\'lanish',
    contactDesc: 'Savollaringiz bormi? Biz bilan bog\'laning!',
    contactName: 'Ismingiz',
    contactMessage: 'Xabar',
    contactSend: 'Yuborish',
    contactInfo: 'Aloqa ma\'lumotlari',
    contactAddress: 'Toshkent, O\'zbekiston',

    // Footer
    footerDesc: 'An\'anaviy o\'zbek moda san\'ati — qo\'lda ishlangan noyob kiyimlar.',
    quickLinks: 'Tezkor havolalar',
    contactUs: 'Biz bilan bog\'lanish',
    rights: 'Barcha huquqlar himoyalangan.',

    // Theme
    lightMode: 'Yorug\' rejim',
    darkMode: 'Tungi rejim',

    // Benefits
    benefitsTitle: 'Nega aynan biz?',
    benefit1Title: 'Qo\'lda ishlangan',
    benefit1Desc: 'Har bir buyum mohir ustalar tomonidan qo\'lda tayyorlanadi.',
    benefit2Title: 'Milliy an\'analar',
    benefit2Desc: 'Asrlar davomida saqlanib kelgan naqshlar va uslublar.',
    benefit3Title: 'Premium sifat',
    benefit3Desc: 'Faqat eng yaxshi tabiiy materiallardan foydalaniladi.',
    benefit4Title: 'Yetkazib berish',
    benefit4Desc: 'O\'zbekiston bo\'ylab va xalqaro yetkazib berish.',

    // Testimonials
    testimonialsTitle: 'Mijozlar fikri',

    // CTA
    ctaTitle: 'Milliy modasini kashf eting',
    ctaDesc: 'Gulchehra kolleksiyasini ko\'ring va o\'zingizga mos mahsulotni tanlang.',
    ctaButton: 'Mahsulotlarni ko\'rish',
  },
  en: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
    cart: 'Cart',

    heroTitle: 'Feel the Soul of Silk',
    heroSubtitle: 'Traditional Uzbek fashion art — handmade, unique, and exquisite',
    heroShop: 'Shop Now',
    heroAbout: 'Learn More',

    allProducts: 'All Products',
    searchProducts: 'Search products...',
    noProducts: 'No products found',
    loadingProducts: 'Loading...',
    errorLoading: 'An error occurred',
    viewDetails: 'View Details',
    addToCart: 'Add to Cart',
    featured: 'Featured',
    price: 'Price',
    sortByPrice: 'Sort by price',
    sortDefault: 'Default',
    sortLowHigh: 'Low → High',
    sortHighLow: 'High → Low',

    relatedProducts: 'Related Products',
    quantity: 'Quantity',

    cartEmpty: 'Cart is empty',
    cartEmptyDesc: 'No items have been added yet',
    cartTotal: 'Total',
    checkout: 'Checkout',
    remove: 'Remove',
    continueShopping: 'Continue Shopping',

    orderTitle: 'Place Order',
    fullName: 'Full Name',
    phone: 'Phone',
    address: 'Address',
    email: 'Email',
    oferta: 'I accept the offer terms',
    placeOrder: 'Place Order',
    orderSuccess: 'Order placed successfully!',
    orderError: 'Error placing order',
    required: 'Required field',
    invalidEmail: 'Invalid email',
    invalidPhone: 'Invalid phone number',

    aboutTitle: 'About Gulchehra',
    aboutStory: 'Our Story',
    aboutStoryText: 'Gulchehra is a modern expression of traditional Uzbek craftsmanship. Every product is handmade with care, precision, and elegance.',
    aboutMission: 'Our Mission',
    aboutMissionText: 'We aim to promote Uzbek national culture globally and preserve historical heritage in every piece.',
    aboutCraft: 'Craftsmanship',
    aboutCraftText: 'Every stitch, every pattern is a continuation of art passed down through generations.',
    aboutValues: 'Our Values',
    aboutValuesText: 'Quality, tradition, elegance, and integrity — the core values of the Gulchehra brand.',

    contactTitle: 'Get in Touch',
    contactDesc: 'Have questions? Reach out to us!',
    contactName: 'Your Name',
    contactMessage: 'Message',
    contactSend: 'Send',
    contactInfo: 'Contact Information',
    contactAddress: 'Tashkent, Uzbekistan',

    footerDesc: 'Traditional Uzbek fashion art — unique handmade clothing.',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    rights: 'All rights reserved.',

    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',

    benefitsTitle: 'Why Choose Us?',
    benefit1Title: 'Handcrafted',
    benefit1Desc: 'Every item is handmade by skilled artisans.',
    benefit2Title: 'National Traditions',
    benefit2Desc: 'Patterns and styles preserved for centuries.',
    benefit3Title: 'Premium Quality',
    benefit3Desc: 'Only the finest natural materials are used.',
    benefit4Title: 'Delivery',
    benefit4Desc: 'Delivery across Uzbekistan and internationally.',

    testimonialsTitle: 'Customer Reviews',

    ctaTitle: 'Discover National Fashion',
    ctaDesc: 'Browse the Gulchehra collection and find your perfect piece.',
    ctaButton: 'View Products',
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    products: 'Товары',
    contact: 'Контакты',
    cart: 'Корзина',

    heroTitle: 'Почувствуйте душу шёлка',
    heroSubtitle: 'Традиционное узбекское модное искусство — ручная работа, уникальность и изысканность',
    heroShop: 'Купить',
    heroAbout: 'Подробнее',

    allProducts: 'Все товары',
    searchProducts: 'Поиск товаров...',
    noProducts: 'Товары не найдены',
    loadingProducts: 'Загрузка...',
    errorLoading: 'Произошла ошибка',
    viewDetails: 'Подробнее',
    addToCart: 'В корзину',
    featured: 'Рекомендуемые',
    price: 'Цена',
    sortByPrice: 'Сортировка по цене',
    sortDefault: 'По умолчанию',
    sortLowHigh: 'Дешевле → Дороже',
    sortHighLow: 'Дороже → Дешевле',

    relatedProducts: 'Похожие товары',
    quantity: 'Количество',

    cartEmpty: 'Корзина пуста',
    cartEmptyDesc: 'Товары ещё не добавлены',
    cartTotal: 'Итого',
    checkout: 'Оформить заказ',
    remove: 'Удалить',
    continueShopping: 'Продолжить покупки',

    orderTitle: 'Оформление заказа',
    fullName: 'Полное имя',
    phone: 'Телефон',
    address: 'Адрес',
    email: 'Эл. почта',
    oferta: 'Я принимаю условия оферты',
    placeOrder: 'Оформить заказ',
    orderSuccess: 'Заказ успешно оформлен!',
    orderError: 'Ошибка при оформлении заказа',
    required: 'Обязательное поле',
    invalidEmail: 'Неверный email',
    invalidPhone: 'Неверный номер телефона',

    aboutTitle: 'О Gulchehra',
    aboutStory: 'Наша история',
    aboutStoryText: 'Gulchehra — это современное выражение традиционного узбекского мастерства. Каждый продукт создаётся вручную с заботой и элегантностью.',
    aboutMission: 'Наша миссия',
    aboutMissionText: 'Мы стремимся продвигать узбекскую национальную культуру по всему миру и сохранять историческое наследие в каждом изделии.',
    aboutCraft: 'Мастерство',
    aboutCraftText: 'Каждый стежок, каждый узор — это продолжение искусства, передаваемого из поколения в поколение.',
    aboutValues: 'Наши ценности',
    aboutValuesText: 'Качество, традиции, элегантность и честность — основные ценности бренда Gulchehra.',

    contactTitle: 'Свяжитесь с нами',
    contactDesc: 'Есть вопросы? Свяжитесь с нами!',
    contactName: 'Ваше имя',
    contactMessage: 'Сообщение',
    contactSend: 'Отправить',
    contactInfo: 'Контактная информация',
    contactAddress: 'Ташкент, Узбекистан',

    footerDesc: 'Традиционное узбекское модное искусство — уникальная одежда ручной работы.',
    quickLinks: 'Быстрые ссылки',
    contactUs: 'Связаться',
    rights: 'Все права защищены.',

    lightMode: 'Светлая тема',
    darkMode: 'Тёмная тема',

    benefitsTitle: 'Почему именно мы?',
    benefit1Title: 'Ручная работа',
    benefit1Desc: 'Каждое изделие создаётся мастерами вручную.',
    benefit2Title: 'Национальные традиции',
    benefit2Desc: 'Узоры и стили, сохранённые веками.',
    benefit3Title: 'Премиум качество',
    benefit3Desc: 'Используются только лучшие натуральные материалы.',
    benefit4Title: 'Доставка',
    benefit4Desc: 'Доставка по Узбекистану и за рубеж.',

    testimonialsTitle: 'Отзывы клиентов',

    ctaTitle: 'Откройте национальную моду',
    ctaDesc: 'Просмотрите коллекцию Gulchehra и найдите свой идеальный образ.',
    ctaButton: 'Смотреть товары',
  },
} as const;
