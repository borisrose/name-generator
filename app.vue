<script setup lang="ts">
//auto import of reactive from vue
import { Gender, Popularity, Length, names } from "./data.ts";

interface OptionsState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  popularity: Popularity.UNIQUE,
  length: Length.ALL,
});

const selectedNames = ref<string[]>([]);

const optionsArray = [
  {
    title: "1) Choisis un genre",
    category: "gender",
    buttons: [Gender.BOY, Gender.UNISEX, Gender.GIRL],
  },
  {
    title: "2) Choisis le niveau de popularité du nom",
    category: "popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    title: "3) Choisis la taille du nom",
    category: "length",
    buttons: [Length.LONG, Length.ALL, Length.SHORT],
  },
];

const findName = () => {
  selectedNames.value = names
    .filter((n) => n.gender === options.gender)
    .filter((n) => n.popularity === options.popularity)
    .filter((n) => {
      if (options.length === Length.ALL) return true;
      else return n.length === options.length;
    });
};
</script>

<template>
  <div class="container">
    <h1>Générateur de noms de bébé</h1>
    <p>Choisis tes options</p>

    <div class="options-container">
      <Option
        v-for="option in optionsArray"
        :key="option.title"
        :option="option"
        :options="options"
      />
    </div>

    <div class="find-name-div">
      <button @click="findName">Trouver un nom</button>
      <div class="cards-container">
        <div class="name" v-for="(name, i) in selectedNames" :key="i">
          <h5>{{ name.name }}</h5>
          <span>x</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50em;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.find-name-div {
  margin-top: 2rem;
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 2rem;
}

.find-name-div button {
  color: white;

  padding: 0.75rem;
  border: 0.15rem solid black;
  font-weight: 200;
  cursor: pointer;
  font-size: 1rem;
  width: 12rem;
  background-color: rgb(27, 60, 138);
}

.cards-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.name {
  padding: 0.5rem;
  width: 30%;
  border-radius: 0.75rem;
  background-color: rgb(27, 60, 138);
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
}

.name span {
  position: absolute;
  top: 10%;
  right: 10%;
  cursor: pointer;
}
</style>
