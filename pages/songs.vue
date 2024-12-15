<template>
  <div class="min-h-screen bg-softPink p-8">
    <h2 class="text-4xl font-romantic text-loveRed text-center">
      Songs That Remind Me of You 🎵
    </h2>
    <div class="mt-8 space-y-8">
      <div class="song">
        <h3 class="text-xl font-semibold text-loveRed">
          1. Perfect - Ed Sheeran
        </h3>
        <iframe
          src="https://www.youtube.com/embed/2Vv-BfVoq4g"
          class="w-full h-64 rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div class="song">
        <h3 class="text-xl font-semibold text-loveRed">
          2. You Are The Reason - Calum Scott
        </h3>
        <iframe
          src="https://www.youtube.com/embed/ShZ978fBl6Y"
          class="w-full h-64 rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
    <NuxtLink
      to="/moments"
      class="px-4 py-2 mt-6 font-semibold text-white bg-red-500 rounded hover:bg-red-700 block text-center"
    >
      Wishes
    </NuxtLink>
  </div>
</template>
