<template>
  <div class="box">
    <div class="line" />
    <div class="step-cont">
      <div class="bubble-box">
        <!-- Refer to a computed property for styles -->
        <span class="dot" @click="changeState(0)"></span>
      </div>
      <p>{{ states[0].name }}</p>
    </div>
    <div class="step-cont">
      <div class="bubble-box">
        <span class="circle" @click="changeState(1)"></span>
      </div>
      <p>{{ states[1].name }}</p>
    </div>
    <div class="step-cont current">
      <div class="bubble-box">
        <span class="circle" @click="changeState(2)"></span>
      </div>
      <p>{{ states[2].name }}</p>
    </div>
    <div class="step-cont">
      <div class="bubble-box">
        <span class="circle" @click="changeState(3)"></span>
      </div>
      <p>{{ states[3].name }}</p>
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
      currentState: { name: "Cart", completed: false }
    };
  },
  computed: {
    stepIndicator() {
      return {
        dot: this.currentState.completed,
        circle: this.currentState.name
      };
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