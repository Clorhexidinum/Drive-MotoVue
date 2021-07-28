<template>
  <div class="content">
    <div class="range-box">
      <input type="number" name="price" :value="min" :placeholder="min"/>
      <input type="number" name="price" :value="max" :placeholder="max"/>
    </div>

    <div
      id="my-slider"
      :se-min="minThreshold"
      :se-step="step"
      :se-min-value="min"
      :se-max-value="max"
      :se-max="maxThreshold"
      class="slider"
    >
      <div class="slider-touch-left">
        <span></span>
      </div>
      <div class="slider-touch-right">
        <span></span>
      </div>
      <div class="slider-line">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import ZbRangeSlider from "../utils/ZbRangeSlider";
export default {
  props: {
    minThreshold: {
      type: Number,
      default: 0,
    },
    maxThreshold: {
      type: Number,
      default: 10000,
    },
    step: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  
  data: function () {
    return {
      instance: undefined,
    };
  },
  mounted: function () {
    this.instance = new ZbRangeSlider("my-slider");
    this.instance.onChange = (min, max) => this.updateValues(min, max);
  },

  methods: {
    updateValues: function (min, max) {
      this.$emit("update:min", min);
      this.$emit("update:max", max);
    },
  },
};
</script>

<style lang="scss">
.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 100%;
  user-select: none;
}
.range-box {
  display: flex;
  justify-content: space-between;
  & > input {
    width: 40%;
  }
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 30px;
  width: 30px;
  padding: 6px;
  z-index: 2;
  cursor: pointer;
  bottom: 3px;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  border: 1px solid #a4a4a4;
  border-radius: 50%;
}
.slider .slider-line {
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 36px);
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: #f0f0f0;
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: #1c62cd;
}
</style>