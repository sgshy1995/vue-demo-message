<template>
  <div class="two">
      <span>二儿子知道大儿子有这么多钱：</span><span class="data">{{wordNew}}</span>
      </div>
</template>

<script>
export default {
  data() {
    return {
      wordNew: 0
    };
  },
  watch: {
    wordNew: {
      handler() {
        this.$eventHub.$on("put", dataFrom => {
          this.wordNew = dataFrom;
        });
      },
      deep: true,
      immediate: true
    }
  },
  /* created() {
    setTimeout(() => {
      console.log(1);
      this.wordNew = "";
    }, 0);
  },
  updated() {
    console.log(this.$eventHub);
    this.$eventHub.$on("put", dataFrom => {
      this.wordNew = dataFrom;
    });
  } */
};
</script>

<style lang="scss">
.two {
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
}
</style>>
