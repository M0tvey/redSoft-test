<template>
  <footer class="footer">
    <div class="footer_wrap container">
      <div class="footer-logo_wrap">
        <img class="footer-logo_img" src="../assets/images/footer-logo.svg" title="The Famous"/>
      </div>

      <Menu :menu="footerMenu.fMenu"/>

      <div class="footer-contacts">
        <div class="footer-contacts_item"><svg class="footer-contacts_icon phone"><use xlink:href="#phone"></use></svg>
          <a href="tel:+74955555555">+7 (495) 555-55-55</a>
        </div>

        <div class="footer-contacts_item"><svg class="footer-contacts_icon bulet"><use xlink:href="#bulet"></use></svg>г. Москва, ул. Расплетина, 24</div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Menu from './menu.vue';

  export default {
    name: 'Footer',
    props: ['footerMenu'],
    components: {Menu}
  }
</script>