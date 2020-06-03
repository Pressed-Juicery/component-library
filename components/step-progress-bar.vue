<template>
  <div class="box">
    <div class="line" />
    <div
      :class="['step-cont', {current: index === currentIndex}]"
      v-for="(step, index) in states"
      :key="index"
    >
      <div class="bubble-box">
        <!-- Refer to a computed property for styles -->
        <span
          :class="{
          circle: index >= currentIndex,
          dot: index <= currentIndex
          }"
          @click="changeState(index)"
        ></span>
      </div>
      <p>{{ states[index].name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     state: {
  //       type: Array,
  //       required: true
  //     },
  //     currentState: {
  //       type: Object,
  //       required: true
  //     }
  //   },
  data() {
    return {
      states: [
        { name: "Cart", completed: false },
        { name: "Fulfillment", completed: false },
        { name: "Payment", completed: false },
        { name: "Review", completed: false }
      ],
      currentState: { name: "Cart", completed: false },
      currentIndex: 0
    };
  },
  computed: {
    current() {
      // Any time currentIndex is updated this will re-render.
      // Use this to set current
      currentIndex = this.states.indexOf(this.currentState);
      return this.state[this.currentIndex];
    }
  },
  methods: {
    // Separation of responsibilities
    changeState(index) {
      // $emit a click event that returns the name of the state (e.g. 'Payment')
      //   value.current = !value.current;
      this.currentState = this.states[index];
    }
  }
};
</script>

<style lang="scss" scoped>
// Be mindful  that all of this needs to be mapped to Pressed engineering standards and color variables.
.test {
  background-color: #00ffff4d;
}

.box {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
}

.line {
  width: 100%;
  height: 3px;
  position: absolute;
  border-radius: 1px;
  z-index: -1;
  top: 14px;
  background-color: #bbb;
}

.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.circle {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 15px;
  width: 15px;
  border: 4px solid #bbb;
  border-radius: 50%;
  display: inline-block;
}

.current {
  p {
    color: black;
  }

  .dot {
    background-color: black;
  }

  .circle {
    border-color: black;
  }
}

.bubble-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: white;
}

.step-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #bbb;
  font-family: Verdana, Geneva, sans-serif;
}
</style>