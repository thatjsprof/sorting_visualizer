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
          <v-btn @click="setSortType('mergeSort')" disabled>Merge Sort</v-btn>
          <v-btn @click="setSortType('quickSort')" disabled>Quick Sort</v-btn>
          <v-btn @click="setSortType('heapSort')" disabled>Heap Sort</v-btn>
          <v-btn @click="setSortType('bubbleSort')">Bubble Sort</v-btn>
        </div>
        <v-btn class="ml-6" color="orange darken3" @click="sortArray"
          >Sort</v-btn
        >
      </v-row>
    </v-app-bar>
    <v-main>
      <div class="bars">
        <div
          class="bar"
          v-for="(value, index) in arrayToBeSorted"
          :style="
            `margin-left: ${determineMargin()}; color: ${determineColor()}; width: ${determineWidth()}; height: ${determineHeight(
              index
            )}`
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
import { UtilFunctions } from "./logic";

export default {
  name: "App",
  data() {
    return {
      sortType: "",
      arraySize: 25,
      minArraySize: 5,
      maxArraySize: 200,
      maxWidth: 700,
      arrayToBeSorted: [],
    };
  },
  methods: {
    setSortType(type) {
      this.sortType = type;
    },
    generateNewArray() {
      this.arrayToBeSorted = UtilFunctions.generateRandomArray(this.arraySize);
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
      return this.arrayToBeSorted[index] * number + "px";
    },
    determineColor() {
      if (this.checkArraySize(10)) return "#fff";
      return "transparent";
    },
    checkArraySize(number) {
      return this.arraySize < number;
    },
    sortArray() {},
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
