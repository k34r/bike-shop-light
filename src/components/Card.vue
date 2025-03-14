<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCardsStore } from "../stores/store";
import { computed } from "vue";

const route = useRoute();
const cardsStore = useCardsStore();

// Получаем id из параметров маршрута
const cardId = computed(() => Number(route.params.id));

// Получаем карточку из хранилища
const card = computed(() => cardsStore.getCardById(cardId.value));
</script>

<template>
  <div v-if="card" class="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 text-center">
    <h1 class="text-xl font-bold mb-4">{{ card.title }}</h1>
    <img :src="card.imageUrl" alt="Card image" class="w-full rounded-lg mb-4">
    <p class="text-lg font-semibold">{{ card.price }} р.</p>
    <button 
      @click="cardsStore.toggleFavorite(card.id)" 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {{ card.isFavorite ? "Удалить из избранного" : "Добавить в избранное" }}
    </button>
  </div>
  <div v-else class="text-center text-red-500">Карточка не найдена</div>
</template>



<style scoped>

</style>