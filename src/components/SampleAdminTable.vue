<template>
  <layout-admin>
    <header> <h1>테이블 넣고 빼기</h1> </header>
    <form>
      <input v-model="text">
      <b-button v-on:click="addRow">추가</b-button>
      <b-button v-on:click="callApi">HTTP로 불러오기</b-button>
    </form>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>#</th>
        <th>컬럼1</th>
        <th>컬럼2</th>
        <th>컬럼3</th>
        <th>컬럼4</th>
        <th>삭제</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(data,index) in tableData" :key="index">
        <td>{{index+1}}</td>
        <td>{{data.one}}</td>
        <td>{{data.two}}</td>
        <td>{{data.three}}</td>
        <td>{{data.four}}</td>
        <td><b-button v-on:click="delRow(data)">삭제</b-button></td>
      </tr>
      </tbody>

    </table>
  </layout-admin>
</template>

<script>
  import LayoutAdmin from '../layout/LayoutAdmin'
  import axios from 'axios'

  export default {
    name: "SampleAdminTable",
    components: {
      LayoutAdmin
    },
    data(){
      return {
        tableData:[{one:'내용1',two:'내용2',three:'내용3',four:'내용4'},{one:'내용1',two:'내용2',three:'내용3',four:'내용4'},{one:'내용1',two:'내용2',three:'내용3',four:'내용4'}],
        text:''
      }
    },
    methods:{
      addRow(){
        this.tableData.push({one:this.text,two:'내용2',three:'내용3',four:'내용4'})
        this.text = ''
      },
      delRow(data){
        this.tableData.splice(this.tableData.indexOf(data),1);
      },
      callApi(){
        let url ='../../static/test.json';
        let config = {
          method: 'GET',
          mode:'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
          },
          withCredentials: true,
          credentials: 'same-origin'
        };

        axios(url,config).then(res=>{
          this.text = res.data.text;
        }).catch(e => {
          alert(e);
        });
      }
    }
  }
</script>

<style scoped>

</style>
