<script setup lang="ts">
import { Gender, Popularity, Length } from "../data.ts";

interface OptionProps {
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Popularity[] | Length[];
  };

  options: {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  };
}
const props = defineProps<OptionProps>();

const computeButtonClasses = (value, index) => {
  const classNames = [];
  if (props.options[props.option.category] === value) {
    classNames.push("option-active");
  }
  if (index === 0) {
    classNames.push("option-left");
  }
  if (index === props.option.buttons.length - 1) {
    classNames.push("option-right");
  }
  return classNames.join(" ");
};
</script>

<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <div class="options-buttons">
      <button
        v-for="(value, index) in option.buttons"
        :key="value"
        class="option"
        :class="computeButtonClasses(value, index)"
        v-on:click="options[option.category] = value"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.option-container {
  margin-bottom: 2rem;
}

.option {
  color: rgb(27, 60, 138);
  border: none;
  padding: 0.75rem;
  outline: 0.15rem solid rgb(249, 87, 89);
  font-weight: 200;
  cursor: pointer;
  font-size: 1rem;
  width: 12rem;
  background-color: white;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}
.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>
