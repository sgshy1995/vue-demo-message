<template>
  <div class="one">
      <span>大儿子父亲给的钱：</span><span class="data">{{child}}</span>
      <button @click="$emit('update:child',child-100)">给父亲减100</button>
      <br>
      <br>
      <span>大儿子自己有的钱：</span><span class="data">{{word}}</span>
      <button @click="add">自己加100</button>
      <button @click="putWord">告诉兄弟</button>
  </div>
</template>

<script>
export default {
    props:['child'],
    data(){
        return{
            word:1000
        }
    },
    methods:{
        putWord(){
            this.$eventHub.$emit('put',this.word)
        },
        add(){
            this.word+=100
        }
    }
}
</script>

<style lang="scss">
.one{
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
}
</style>