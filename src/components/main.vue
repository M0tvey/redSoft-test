<template>
  <main class="main">
    <div class="main_wrap container">
      <h1 class="main_title">Картины эпохи Возрождения</h1>

      <Products :products="products.products"/>
    </div>
  </main>
</template>

<script>
  import Products from './products';

  export default {
    name: 'Main',
    props: ['products'],
    components: {Products}
  }
</script>