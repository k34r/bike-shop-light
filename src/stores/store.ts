import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  // Состояние
  const cards = ref([
    { id: 1, title: 'Кольцо проставочное рулевой 3мм', imageUrl: '/кольцо_проставочное_3мм.jpg', price: 100, isFavorite: false },
    { id: 2, title: 'Кольцо проставочное рулевой 3мм', imageUrl: '/кольцо_проставочное_3мм.jpg', price: 100, isFavorite: true },
    { id: 3, title: 'Кольцо проставочное рулевой 3мм', imageUrl: '/кольцо_проставочное_3мм.jpg', price: 100, isFavorite: false },
    { id: 4, title: 'Кольцо проставочное рулевой 3мм', imageUrl: '/кольцо_проставочное_3мм.jpg', price: 100, isFavorite: false },
    { id: 5, title: 'Кольцо проставочное рулевой 3мм', imageUrl: '/кольцо_проставочное_3мм.jpg', price: 100, isFavorite: false },
    { id: 6, title: 'Кольцо проставочное рулевой 3мм', imageUrl: '/кольцо_проставочное_3мм.jpg', price: 100, isFavorite: false }
  ])

  // Геттер для получения карточки по ID
  const getCardById = computed(() => (id: number) => cards.value.find(card => card.id === id))

  // Геттер для избранных карточек
  const favoriteCards = computed(() => cards.value.filter(card => card.isFavorite))

  // Функция переключения статуса "избранное"
  function toggleFavorite(id: number) {
    const card = cards.value.find(card => card.id === id)
    if (card) {
      card.isFavorite = !card.isFavorite
    }
  }

  return { cards, getCardById, favoriteCards, toggleFavorite }
})

