<template>
  <div class="products">
    <section v-for="product in products.products" :key="product.id" class="product_wrap" :class="[product.quantity? '' : 'not-available']">
      <div class="product">
        <div class="product-image_wrap">
          <a :href="product.link" class="product-image_link no-s">
            <img :src="products.getImageSrc(product.imageId)" :alt="product.title" class="product-image" />
          </a>
        </div>

        <div class="product-title_wrap">
          <h1 class="product-title">
            <a :href="product.link" class="product-title_link no-s">{{product.title}}</a>
          </h1>
        </div>

        <div v-if="product.quantity" class="product-by_wrap">
          <div class="product-by_prices">
            <p class="product-by_old-price" v-if="product.oldPrice">{{ money(product.oldPrice) }}</p>
            <p class="product-by_price">{{ money(product.price) }}</p>
          </div>

          <div class="product-by_add-wrap">
            <button class="product-by_add bttn" :class="ifInCart(product.id)? 'bttn--active' : ''" @click="addToCart(product.id, $event.target)">
              <span class="a" v-if="ifInCart(product.id)" v-html="successfullyText"></span>
              <span class="a" v-else>Купить</span>
            </button>
          </div>
        </div>

        <div v-else class="product-by_wrap">
          <p class="product-by_not-available">Продана на аукционе</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Products',
    props: ['products'],
    data() {
      return {
        preloader: '<svg class="preloader"><use xlink:href="#preloader"></use></svg>',
        successfullyText:  '<svg class="check"><use xlink:href="#check"></use></svg> В корзине'
      }
    },
    beforeCreate() {
      if (localStorage.getItem('products') == null) localStorage.setItem('products', JSON.stringify([]));
    },
    methods: {
      money: price => {
        let newPrice = price.toString().split('').reduce((priceArray, i, index, arr) => {
          priceArray.push(i);
          if (index == 0 || index % 3 == 0 && index != arr.length -1) priceArray.push(' ');

          return priceArray;
        }, []);

        newPrice.push(' $');

        return newPrice.join('');
      },

      addToCart(id, target) {
        let localProducts = JSON.parse(localStorage.getItem('products'));
        if (localProducts.indexOf(id) != -1) return;

        target.classList.add('hide');

        setTimeout(() => {
          target.classList.remove('hide');
          target.innerHTML = this.preloader;

          setTimeout(() => {
            axios.get('https://reqres.in/api/products/3').then(response => {
              target.classList.add('hide');

              setTimeout(() => {
                if (response.status == 200) {
                  target.innerHTML = this.successfullyText;

                  localProducts.push(id);
                  localStorage.setItem('products', JSON.stringify(localProducts));

                  target.parentNode.classList.add('bttn--active');

                } else {
                  target.innerHTML = 'Купить';
                }

                target.classList.remove('hide');
              }, 600);

            }).catch(error => {
              target.innerHTML = 'Купить';
              console.log(error);

            });
          }, 1000);
        }, 600);
      },

      ifInCart(id) {
        return localStorage.getItem('products').indexOf(id) == -1? false : true;
      }
    }
  }
</script>