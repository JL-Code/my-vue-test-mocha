<template>
  <div class="counter">
    <div class="count">{{count}}</div>
    <button class="increment" type="button" @click="increment">自增</button>
    <button class="incrementAsync" type="button" @click="incrementAsync">异步自增</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    }
  }
};
</script>
