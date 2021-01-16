<template>
  <nav :class="menu.name + '-menu menu_wrap'">
    <li class="menu_item" v-for="item in menu.items" :key="item.id">
      <a class="menu_link" :href="item.url">{{ item.title }}</a>
    </li>
  </nav>
</template>

<script>
  export default {
    name: 'Menu',
    props: ['menu']
  }
</script>