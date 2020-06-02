<template>
  <div class="box">
    <hr class="line" size="7" noshade />
    <div class="step-cont">
      <div class="bubble-box">
        <span
          :class="{
            dot: state[0].completed == true && state[0].current == false,
            circle: state[0].completed == false && state[0].current == false,
            current: state[0].completed == false || state[3].completed == true && state[0].current == true,
            }"
          @click="changeState(state[0])"
        ></span>
      </div>
      <p>{{ state[0].name }}</p>
    </div>
    <div class="step-cont">
      <div class="bubble-box">
        <span
          :class="{
            dot: state[1].completed == true && state[1].current == false,
            circle: state[1].completed == false && state[1].current == false,
            current: state[1].completed == false || state[3].completed == true && state[1].current == true,
            }"
          @click="changeState(state[1])"
        ></span>
      </div>
      <p>{{ state[1].name }}</p>
    </div>
    <div class="step-cont">
      <div class="bubble-box">
        <span
          :class="{
            dot: state[2].completed == true && state[2].current == false,
            circle: state[2].completed == false && state[2].current == false,
            current: state[2].completed == false || state[3].completed == true && state[2].current == true,
            }"
          @click="changeState(state[2])"
        ></span>
      </div>
      <p>{{ state[2].name }}</p>
    </div>
    <div class="step-cont">
      <div class="bubble-box">
        <span
          :class="{
            dot: state[3].completed == true && state[3].current == false,
            circle: state[3].completed == false && state[3].current == false,
            current: state[3].completed == false || state[3].completed == true && state[3].current == true,
            }"
          @click="changeState(state[3])"
        ></span>
      </div>
      <p>{{ state[3].name }}</p>
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
      state: [
        { name: "Cart", completed: false, current: false },
        { name: "Fulfillment", completed: false, current: false },
        { name: "Payment", completed: false, current: false },
        { name: "Review", completed: false, current: false }
      ]
    };
  },
  methods: {
    changeState(value) {
      // $emit a click event that returns the name of the state (e.g. 'Payment')
      value.current = !value.current;
    }
  }
};
</script>

<style lang="scss" scoped>
// Be mindful  that all of this needs to be mapped to Pressed engineering standards and color variables.
.test {
  background-color: #00ffff4d;
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
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 15px;
  width: 15px;
  border: 4px solid black;
  border-radius: 50%;
  display: inline-block;
}

.box {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
}

.line {
  width: 100%;
  position: absolute;
  z-index: -5;
  top: 4px;
  background-color: #bbb;
  border: none;
}

.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
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