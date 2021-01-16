<template>
  <Svg />
	<Header :header-menu="headerMenu" />
  <Main :products="products" />
  <Footer  :footer-menu="footerMenu" />
</template>

<script>
  import store from './store/store.js';
  import Svg from './components/svg.vue';
  import Header from './components/header.vue';
  import Main from './components/main.vue';
  import Footer from './components/footer.vue';

  let state = store.getState(),
      hMenu = state.menu.header,
      fMenu = state.menu.footer,
      products = state.product;

  products.getImageSrc = products.getImageSrc.bind(state.images);

  export default {
    name: 'App',
    data() {
      return {
        headerMenu: {hMenu},
        products: {products},
        footerMenu: {fMenu},
      }
    },
    components: {Svg, Header, Main, Footer}
  }
</script>