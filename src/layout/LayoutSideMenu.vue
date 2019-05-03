<template>
  <div class="sidebar">
    <ul class="nav flex-column">
      <li class="item" v-for="(menu,index) in menuList" :key="index">
        <a class="item" href="#" v-on:click.prevent="toggleMenu(menu)">{{menu.name}}</a>
        <ul class="nav flex-column item-sub" v-for="(sub,index) in menu.sub" :key="index" v-show="menu.toggle">
          <li>
            <b-link :to="sub.url">{{sub.name}}</b-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "LayoutSideMenu",
    data(){
      return {
        menuList: [
          {name:'대분류1',toggle:false, sub:[{name:'소분류1',url:'/AdminEx'},{name:'소분류2',url:'/AdminForm'},{name:'소분류3',url:''}]},
          {name:'대분류2',toggle:false, sub:[{name:'소분류1',url:''},{name:'소분류2',url:''},{name:'소분류3',url:''}]}
        ]
      }
    },
    methods: {
      toggleMenu:function (menu) {
        menu.toggle = !menu.toggle;
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    margin-top: 0.5em;
  }

  .sidebar .item {
    color: black;
  }

  .sidebar .item-sub {
    margin-left: 1em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }
</style>
