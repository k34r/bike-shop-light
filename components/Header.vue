<script setup lang="ts"></script>

<template>
  <header
    class="flex justify-between items-center bg-zinc-700 mb-2 py-3 px-6 rounded-lg shadow-xl"
  >
    <div class="flex gap-5 items-center">
      <!-- <RouterLink to="/"> -->
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Круг с однотонным цветом #b8e6fe -->
        <circle
          cx="40"
          cy="40"
          r="39"
          fill="none"
          stroke="#b8e6fe"
          stroke-width="2"
        />

        <!-- Градиент для текста (темно-голубой к темно-розовому, диагональный) -->
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4a90e2">
              <animate
                attributeName="stop-color"
                values="e91e63;#a8d0ff;e91e63"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stop-color="#e91e63">
              <animate
                attributeName="stop-color"
                values="#a8d0ff;#d76088;#a8d0ff"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <!-- Текст по центру круга -->
        <text
          x="50%"
          y="30%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="18"
          font-weight="bold"
          fill="url(#textGradient)"
        >
          Bike
        </text>
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="18"
          font-weight="bold"
          fill="url(#textGradient)"
        >
          Shop
        </text>
        <text
          x="50%"
          y="70%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="18"
          font-weight="bold"
          fill="url(#textGradient)"
        >
          Light
        </text>
      </svg>
      <!-- </RouterLink> -->
      <div>
        <h2 class="text-3xl font-bold sonsie-one-regular text-purple-200">
          Bike Shop Light
        </h2>
        <h3 class="text-3xl ml-7 amatic-sc-bold">
          Магазин лёгких велозапчастей
        </h3>
      </div>
    </div>

    <ul class="flex gap-5">
      <li class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-zinc-800">
        <NuxtLink to="/">На главную</NuxtLink>
      </li>
      <li class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-zinc-800">
        <img src="../pictures/cart.svg" alt="Cart" />
        <span>1205р.</span>
      </li>
      <li class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-zinc-800">
        <img src="../pictures/like-1.svg" alt="Heart" />
        <p>Избранное</p>
      </li>
      <li class="flex gap-2 p-3 rounded-lg cursor-pointer hover:bg-zinc-800">
        <img src="../pictures/signin.svg" alt="Out" />
        <p>Войти</p>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.sonsie-one-regular {
  font-family: "Sonsie One", serif;
  font-weight: 400;
  font-style: normal;
}

.amatic-sc-bold {
  font-family: "Amatic SC", serif;
  font-weight: 700;
  font-style: normal;
}

li img {
  width: 20px;
  height: 20px;
}
</style>
