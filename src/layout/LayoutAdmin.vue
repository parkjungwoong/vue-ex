<template>
  <div>
    <!-- 탑 네비 -->
    <nav class="navbar navbar-light bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/img/Tulips.jpg" width="30" height="30">
          <span class="text-light">샘플 이것저것 해봄</span>
        </a>
      </div>
    </nav>
    <!-- 탑 네비 //-->

    <div class="container">
      <div class="row">
        <!-- 사이드 메뉴 -->
        <nav class="col-md-2 bg-light">
          <side-menu></side-menu>
        </nav>
        <!-- 사이드 메뉴 //-->
        <nav class="col-md-10 bg-light">
          <!-- 페이지 내용 //-->
          <slot/>
          <!-- 페이지 내용 //-->
        </nav>

      </div>
    </div>
    <!-- 푸터 -->
    <footer class="footer">
      <div class="container">
        <div class="copyright">
          &copy; 2019 made with
          <a href="#" target="_blank">링크</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import SideMenu from './LayoutSideMenu'

  export default {
    name: "LayoutAdmin",
    components: {
      SideMenu
    },
    methods: {
    }
  }
</script>

<style scoped>
  .sidebar {
    margin-top: 0.5em;
  }
</style>
