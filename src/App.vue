<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-row align="center">
        <v-btn text class="mr-3 btn" @click="generateNewArray">
          Generate New Array
        </v-btn>
        <div class="sorter-box px-5">
          <p>Change Array Sorting Speed & Size</p>
          <v-slider
            class="ml-5"
            v-model="arraySize"
            :min="minArraySize"
            :max="maxArraySize"
            color="orange darken3"
          ></v-slider>
        </div>
        <div class="sorter-type px-5">
          <v-btn
            @click="setSortType('mergeSort')"
            disabled
            :style="getButtonColor('mergeSort')"
            >Merge Sort</v-btn
          >
          <v-btn
            @click="setSortType('quickSort')"
            disabled
            :style="getButtonColor('quickSort')"
            >Quick Sort</v-btn
          >
          <v-btn
            @click="setSortType('heapSort')"
            disabled
            :style="getButtonColor('heapSort')"
            >Heap Sort</v-btn
          >
          <v-btn
            @click="setSortType('bubbleSort')"
            :style="getButtonColor('bubbleSort')"
            >Bubble Sort</v-btn
          >
        </div>
        <v-btn
          class="ml-6"
          color="orange darken3"
          @click="sortArray"
          :disabled="!sortType"
          >Sort</v-btn
        >
      </v-row>
    </v-app-bar>
    <v-main>
      <div class="bars">
        <div
          class="bar"
          v-for="(value, index) in getCurrentArray"
          :style="
            `margin-left: ${determineMargin()}; color: ${determineColor()}; background-color: ${determineBackgroundColor(
              index
            )}; width: ${determineWidth()}; height: ${determineHeight(index)}`
          "
          :key="index"
        >
          {{ value }}
        </div>
      </div>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>
<script>
import { UtilFunctions, bubbleSort } from "./logic";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      sortType: "",
      arraySize: 25,
      minArraySize: 5,
      maxArraySize: 200,
      maxWidth: 700,
    };
  },
  computed: mapGetters([
    "getCurrentArray",
    "getCurrentSwappers",
    "getCurrentBubble",
    "getRunning",
  ]),
  methods: {
    ...mapActions([
      "setCurrentArray",
      "setCurrentSwappers",
      "setCurrentBubble",
      "setRunning",
    ]),
    getAllActions() {
      return {
        setCurrentArray: this.setCurrentArray,
        setCurrentSwappers: this.setCurrentSwappers,
        setCurrentBubble: this.setCurrentBubble,
        setRunning: this.setRunning,
      };
    },
    setSortType(type) {
      this.sortType = type;
    },
    generateNewArray() {
      const generatedArray = UtilFunctions.generateRandomArray(this.arraySize);
      this.setCurrentArray(generatedArray);
    },
    determineMargin() {
      if (this.checkArraySize(6)) {
        return "10px";
      } else if (this.checkArraySize(20)) {
        return "3.5px";
      } else if (this.checkArraySize(50)) {
        return "3px";
      }
      return "2.5px";
    },
    determineWidth() {
      return `${this.maxWidth / this.arraySize}px`;
    },
    determineHeight(index) {
      const number = this.checkArraySize(10) ? 5 : 3;
      return this.getCurrentArray[index] * number + "px";
    },
    determineColor() {
      if (this.checkArraySize(10)) return "#fff";
      return "transparent";
    },
    getButtonColor(type) {
      return `background-color: ${this.sortType === type ? "grey" : ""}`;
    },
    determineBackgroundColor(index) {
      const bgColor = this.getCurrentSwappers.includes(index)
        ? "red"
        : this.getCurrentBubble.includes(index)
        ? "purple"
        : "blue";
      return bgColor;
    },
    checkArraySize(number) {
      return this.arraySize < number;
    },
    sortArray() {
      let sortAlgorithm =
        this.sortType === "bubbleSort" ? bubbleSort : () => {};
      const speed =
        570 - Math.pow(this.getCurrentArray.length, 2) > 0
          ? 570 - Math.pow(this.getCurrentArray.length, 2)
          : 0;
      this.setRunning(true);
      sortAlgorithm(this.getCurrentArray, this.getAllActions, speed);
    },
  },
  watch: {
    arraySize: function() {
      this.generateNewArray();
      this.determineMargin();
      this.determineWidth();
    },
  },
  created() {
    this.generateNewArray();
  },
};
</script>
