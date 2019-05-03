<template>
  <layout-default>
    <b-button>그냥 버튼</b-button>
    <b-button href="www.naver.com">링크 있는 버튼</b-button>
    <hr/>
    <b-button disabled variant="success">비 활성화 버튼</b-button>
    <b-button variant="success">버튼 색깔</b-button>
    <b-button size="sm">작은버튼</b-button>
    <b-button size="lg">큰버튼</b-button>

  </layout-default>
</template>

<script>
  import LayoutDefault from '../layout/LayoutDefault'

  export default {
    name: "Btn",
    components:{
        LayoutDefault
    }
  }
</script>

<style scoped>

</style>
