<template>
  <layout-default>
    layout-default 이것도 컴포넌트임

    <p>이것은 지역 컴포넌트 입니다.</p>
    <ex-com></ex-com>

    <p>데이터를 갖는 컴포넌트</p>
    <ex-com-t></ex-com-t>

    <p>부모 -> 자식으로 데이터를 넘겨주는 컴포넌트</p>
    <child message="props에 매칭된 값"></child>

    <p>부모 -> 자식으로 데이터 넘거져눈 컴포넌트 ( 동적 ) </p>
    <input type="text" v-model="text">
    <child :message="text"></child>
    <!--<child v-bind:message="text"></child> 위에랑 같음, 위는 약어 -->

    <p>데이터 바인딩은 단방향</p>
    <ex-com-t2 :init="cnt"></ex-com-t2>
    <p> 부모의 cnt : {{cnt}}</p>

    <p>props 검증</p>
    <ex-com-t3 v-bind:propA="1234" :propC="text"></ex-com-t3>

    <p>CNT : {{cnt}}</p>
    자식에서 부모로 : <ex-com-t4 :cnt.sync="cnt"></ex-com-t4><br>
    부모에서 변경 : <b-button v-on:click="cnt++">{{cnt}}</b-button>

  </layout-default>
</template>

<script>
  import LayoutDefault from '../layout/LayoutDefault'

  export default {
    name: "ComponentEx",
    components: {
      LayoutDefault,
      ExCom: {
        template : '<p>이것은 컴포넌트로 출력하는 것임 </p>'
      },
      ExComT:{
        template : '<p>데이터를 갖는 컴포넌트 : {{dataEx}}</p>',
        data(){
          return {
            dataEx: '123'
          }
        }
      },
      Child: {
        props : ['message'],
        template : '<p>부모로 부터 받은값 : {{message}}</p>'
      },
      ExComT2: {
        props : ['init'],
        data(){
          return {
            initCnt : this.init + 10
          }
        },
        template : '<p>받아서 +10 CNT : {{initCnt}}</p>'
      },
      ExComT3: {
        props: {
          propA: Number,
          propB: [String, Number],
          propC: {
            type: String,
            required: true
          },
          propD: {
            type: Number,
            default: 100
          }
        },
        template: '<p>propA: {{propA}}, propB: {{propB}}, propC: {{propC}},propD: {{propD}} </p>'
      },
      ExComT4: {
        template: '<b-button v-on:click="addCnt">이것은 자식의 cnt: {{count}}</b-button>',
        data() {
          return {
            count : 0
          }
        },
        methods: {
          addCnt: function () {
            ++this.count
            this.$emit('update:cnt',this.count)
          }
        }
      }
    },
    data(){
      return {
        text : '입력하기',
        cnt: 0
      }
    }
  }
</script>

<style scoped>

</style>
