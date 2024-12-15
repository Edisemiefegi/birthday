<template>
  <div class="flex items-center justify-center h-screen bg-pink-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-500 animate-bounce">
        Happy Birthday, Babe! 🎉
      </h1>
      <p class="mt-4 text-lg text-gray-700">
        Click below to start our journey ❤️
      </p>
      <button
        @click="navigate"
        class="px-4 py-2 mt-6 font-semibold text-white bg-red-500 rounded hover:bg-red-700"
      >
        Let's Begin
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const navigate = () => {
  router.push("/chapter1");
};
</script>
