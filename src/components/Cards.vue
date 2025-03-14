<script setup lang="ts">
import Card from '../components/Card.vue'
import { useCardsStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const cardsStore = useCardsStore()
const { cards } = storeToRefs(cardsStore)

</script>

<template>
  <div class="cards flex flex-wrap justify-between gap-4">
    <div v-for="card in cards" :key="card.id">
      <RouterLink :to="`/card/${card.id}`">
        <div
          class="card relative bg-zinc-700 rounded-lg w-[200px] cursor-pointer shadow-md hover:shadow-xl hover:translate-y-[-2px]">
          <img class="absolute top-[10px] right-[10px] favorit-ico"
            :src="!card.isFavorite ? '/src/pictures/like-1.svg' : '/src/pictures/like-2.svg'" alt="">
          <img class="size-[200px] object-cover rounded-lg" :src="card.imageUrl" alt="card">
          <p class="p-2">{{ card.title }}</p>
          <p class="p-1 text-center">{{ card.price }} р.</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>


<style scoped></style>