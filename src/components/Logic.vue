<template>
  <layout-default>
    <div class="fixed-top">이 텍스트는 top에 픽스됨</div>
    <div class="fixed-bottom text-right"><a href="#">젤 위로 가기 </a>(이 텍스트는 bottom에 픽스됨)</div>
    <p class="text-center">{{text}}</p>
    <p class="text-left">{{text}}</p>
    <p class="text-right">{{text}}</p>

    <p class="text-justify">{{text}} 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 가나다라 마바사아 </p>

    <b-card title="조건 예제">
      <b-button size="sm" v-on:click="ok=!ok">보기</b-button>
      <p v-if="ok">안보이던거</p>
      <p v-show="ok">SHOW</p>
      <br>
      OK 값 :
      <span v-if="ok">{{ok}}</span>
      <span v-else>{{ok}}</span>

    </b-card>

    <b-card title="반복문 예제">
      기본 반복문
      <ol>
        <li v-for="item in arr" :key="item.name">
          {{item.name}}
        </li>
      </ol>

      숫자 반복
      <span v-for="n in 10" :key="n">{{n}}</span>

      <br><br>

      컴포넌트를 이용한 반복문
      <ol>
        <list-ex
          v-for="item in arr"
          v-bind:todo="item"
          v-bind:key="item.name">
        </list-ex>
      </ol>

      인덱스 번호 표기
      <ol>
        <li v-for="(item, index) in arr" :key="index">
          {{item.name}} ( 인덱스 : {{index}} )
        </li>
      </ol>

      객체의 값 출력
      <ol>
        <li v-for="val in exObj" :key="val">
          {{ val }}
        </li>
      </ol>

      객체의 값 출력2 ( 두번째 인자는 객체의 키임 )
      <ol>
        <li v-for="(val, key) in exObj" :key="key">
          {{key}} : {{ val }}
        </li>
      </ol>

      객체의 값 출력3 ( 세번째 인자는 인덱스 )
      <ol>
        <li v-for="(val, key, index) in exObj" :key="index">
          {{key}} : {{ val }}, ( 인덱스 : {{index}})
        </li>
      </ol>

      배열 추가
      <b-button size="sm" v-on:click="arr.push({name: arr.length+'new'})">배열에 값 추가</b-button>
      <ol>
        <li v-for="(item, index) in arr" :key="index">
          {{item.name}}
        </li>
      </ol>

      배열 빼기
      <b-button size="sm" v-on:click="arr.splice(0,1)">배열에 값 빼기</b-button>
      <ol>
        <li v-for="(item, index) in arr" :key="index">
          {{item.name}}
        </li>
      </ol>

    </b-card>

    <b-card title="이벤트 예제">

      <p>v-on에 바로 작성</p>
      <b-button variant="success" v-on:click="btnCnt++">+1</b-button>
      <p> btn count : {{btnCnt}}</p>

      <p>v-on에 메소드명 전달</p>
      <b-button variant="success" v-on:click="initBtnCnt">0으로 초기화</b-button>

      <p>v-on에 메소드명 파리미터 전달</p>
      <b-button variant="success" v-on:click="initBtnCnt(10)">10으로 초기화</b-button>

      <p> 이벤트 전파 관련 </p>
      <a href="#" v-on:click="initBtnCnt">0으로 초기화 버튼 그런데 브라우저 상단으로 이동</a> <br>
      <a href="#" v-on:click.prevent="initBtnCnt">0으로 초기화 버튼 브라우저 상단으로 이동 안함</a>  <br>
      <b-button variant="success" v-on:click.once="onceBtn">한번만 실행됨</b-button>
    </b-card>

    <b-card title="폼 예제">
      <input v-model="text">
      <p>입력 메시지 : {{text}}</p>
      <b>input 태그에 초기화 값으로 value, checked 이런 속성은 다 무시됨!, 꼭 소스 코드에 초기화 값 명시</b>
      <br>
      <input type="checkbox" id="checkbox" v-model="isChecked">
      <label for="checkbox">{{isChecked}}</label>

      <select v-model="selectedVale">
        <option>A</option>
        <option>B</option>
        <option v-bind:value="{a:1}">C</option>
      </select>

      선택된 값 : {{selectedVale}}
      <br>

      체크박스에 값 할당
      <input
        type="checkbox"
        v-model="yesOrNo"
        true-value="yes"
        false-value="no"
        >
      Yes OR No: {{yesOrNo}}
      <br><br>

      Change 이벤트로 입력값 바인딩<br>
      <input v-model.lazy="text">
      <p>입력 메시지 : {{text}}</p>


      공백없이 입력됨<br>
      <input v-model.trim="text2">
      <p>입력 메시지 : {{text2}}</p>

    </b-card>


  </layout-default>
</template>

<script>
  import LayoutDefault from '../layout/LayoutDefault'

  export default {
    name: "Logic",
    components: {
      LayoutDefault,
      'listEx':{
        props: ['todo'],
        template: '<li> {{ todo.name }} </li>'
      }
    },
    data(){
      return {
        ok: false,
        text: '소스에서 불러온 텍스트값',
        text2:'',
        arr: [
          {name:'one'},{name:'two'},{name:'three'}
        ],
        exObj: {
          name:'pjw',
          age:'29',
          company:'KG'
        },

        btnCnt: 0,
        isChecked: false,
        selectedVale:'',
        yesOrNo:''
      }
    },
    methods: {
      initBtnCnt: function (init) {
        this.btnCnt = init === 10 ? init : 0;
      },
      onceBtn: function () {
        alert('1번만');
      }
    }
  }
</script>

<style scoped>

</style>
