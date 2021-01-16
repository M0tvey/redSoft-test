<template>
  <header class="header">
    <div class="header_wrap container">
      <div class="header-logo_wrap">
        <img class="header-logo_img" src="../assets/images/header-logo.svg" title="The Famous"/>
      </div>

      <Menu :menu="headerMenu.hMenu"/>

      <Search />
    </div>
  </header>
</template>

<script>
  import Menu from './menu.vue';
  import Search from './search.vue';

  export default {
    name: 'Header',
    props: ['headerMenu'],
    components: {Menu, Search}
  }
</script>