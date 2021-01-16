let store = {
  _state : {
    menu: {
      header: {
        name: 'header',
        items: [
          {id: 1, url: '#', title: 'Каталог'},
          {id: 2, url: '#', title: 'Доставка'},
          {id: 3, url: '#', title: 'Оплата'},
          {id: 4, url: '#', title: 'Контакты'},
          {id: 5, url: '#', title: 'О галерее'}
        ]
      },
      footer: {
        name: 'footer',
        items: [
          {id: 1, url: '#', title: 'Каталог'},
          {id: 2, url: '#', title: 'Доставка'},
          {id: 3, url: '#', title: 'оплата'},
          {id: 4, url: '#', title: 'Контакты'},
          {id: 5, url: '#', title: 'О галерее'}
        ]
      }
    },
    images: [
      {id: 1, sizes: {default: require('../assets/images/painting-63186_1280 1.jpg')}},
      {id: 2, sizes: {default: require('../assets/images/ae973f6678e037cd297053384aa7dca0 1.jpg')}},
      {id: 3, sizes: {default: require('../assets/images/image-19 1.jpg')}},
      {id: 4, sizes: {default: require('../assets/images/20152310142330 1.jpg')}}
    ],
    product: {
      products: [
        {id: 1, title: '«Рождение Венеры» Сандро Боттичелли', link: '#', imageId: 1, price: 1000000, oldPrice: 2000000, quantity: 1},
        {id: 2, title: '«Тайная вечеря» Леонардо да Винчи', link: '#', imageId: 2, price: 3000000, oldPrice: 0, quantity: 1},
        {id: 3, title: '«Сотворение Адама» Микеланджело', link: '#', imageId: 3, price: 5000000, oldPrice: 6000000, quantity: 1},
        {id: 4, title: '«Урок анатомии» Рембрандт', link: '#', imageId: 4, price: 3000000, oldPrice: 4000000, quantity: 0},
      ],
      getImageSrc (id=1, size='default') {
        let images = this,
            imageSrc = images[0];

        images.some(image => {
          if (image.id === id) imageSrc = image;
          return false;
        });

        return imageSrc.sizes[size];
      }
    }
  },
  getState () {
    return this._state
  }
}

export default store;