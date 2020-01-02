<template>
  <div id="app">
    <div class="father">
      <span>父亲有钱：<span class="data">{{father}}</span></span>
    </div>
    <Childone :child="father" v-on:update:child="father=$event"/>
    <Childtwo />
  </div>
</template>

<script>
import Childone from "./components/childone"
import Childtwo from "./components/childtwo"
export default {
  name: 'app',
  data(){
    return{
      father:100
    }
  },
  components:{
    Childone,
    Childtwo
  }
}
</script>

<style lang="scss">
.father{
  padding: 20px;
  margin: 20px;
  border: 1px solid black;
}
button{
  margin: 0 20px;
}
span.data{
  color: brown;
}
</style>
