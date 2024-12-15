<template>
  <div class="min-h-screen bg-romanticBlue p-6">
    <h2 class="text-4xl font-bold text-loveRed text-center">
      My Favorite Messages 💌
    </h2>
    <div
      class="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-6 gap-2 mt-8"
    >
      <div v-for="message in messages" :key="message.id" class="flip-card">
        <div
          class="flip-card-inner cursor-pointer"
          @click="message.flipped = !message.flipped"
          :class="{ 'transform rotate-y-180': message.flipped }"
        >
          <div class="flip-card-front">
            <p class="text-lg font-semibold">Tap to see ❤️</p>
          </div>
          <div class="flip-card-back">
            <img
              :src="message.image"
              alt="Message screenshot"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/official"
      class="px-4 py-2 mt-6 font-semibold text-white bg-red-500 rounded hover:bg-red-700 block text-center"
    >
      When we became official
    </NuxtLink>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const messages = reactive([
  { id: 1, image: "/images/img1.jpg", flipped: false },
  { id: 2, image: "/images/img2.jpg", flipped: false },
  { id: 3, image: "/images/img3.jpg", flipped: false },
  { id: 4, image: "/images/img4.jpg", flipped: false },
  { id: 5, image: "/images/img11.jpg", flipped: false },
  { id: 6, image: "/images/img6.jpg", flipped: false },
  { id: 7, image: "/images/img7.jpg", flipped: false },
  { id: 8, image: "/images/img12.jpg", flipped: false },
  { id: 9, image: "/images/img9.jpg", flipped: false },
  { id: 10, image: "/images/img10.jpg", flipped: false },
  { id: 7, image: "/images/img7.jpg", flipped: false },
  { id: 11, image: "/images/img13.jpg", flipped: false },
  { id: 12, image: "/images/img14.jpg", flipped: false },
  { id: 13, image: "/images/img15.jpg", flipped: false },
  { id: 15, image: "/images/img17.jpg", flipped: false },
  { id: 16, image: "/images/img18.jpg", flipped: false },
  { id: 17, image: "/images/img19.jpg", flipped: false },
]);
</script>
<style scoped>
.flip-card {
  @apply relative w-44 h-44;
  perspective: 1000px;
}
.flip-card-inner {
  @apply absolute w-full h-full transition-transform duration-500 ease-in-out;
  transform-style: preserve-3d;
}
.flip-card-front,
.flip-card-back {
  @apply absolute w-full h-full flex items-center justify-center rounded-lg shadow-lg;
  backface-visibility: hidden; /* Ensure this works for 3D flip */
}
.flip-card-back {
  transform: rotateY(180deg);
  @apply bg-white;
}
.flip-card-inner.transform.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
