<script setup>
import {
  ClockIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <section>
    <MainHero />
  </section>
  <section class="bg-base-100 text-base-content">
    <div>
      <header
        class="text-xl flex flex-col justify-center items-center p-20 gap-8"
      >
        <h2 class="text-primary">About</h2>
        <h1 class="text-3xl font-bold">Work Procress</h1>
      </header>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mt-14 px-32 gap-16 sm:gap-2"
      >
        <div
          class="flex flex-col justify-center items-center border-dashed border-gray-400 border-2 rounded-xl w-80 h-80 cursor-pointer transition duration-300 hover:border-primary animate-bounce-slow"
        >
          <header>
            <ClockIcon class="h-22 w-28 m-2" />
            <h1 class="text-center text-2xl font-bold w-full">Fast</h1>
          </header>
          <article class="text-gray-500 text-center p-4 px-8">
            <p class="text-base">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </article>
        </div>

        <div
          class="flex flex-col justify-center items-center border-dashed border-gray-400 border-2 rounded-xl w-80 h-80 cursor-pointer transition duration-300 hover:border-primary animate-bounce-slow"
        >
          <header>
            <CheckCircleIcon class="h-22 w-28 m-2" />
            <h1 class="text-center text-2xl font-bold w-full">Turst</h1>
          </header>
          <article class="text-gray-500 text-center p-4 px-8">
            <p class="text-base">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </article>
        </div>

        <div
          class="flex flex-col justify-center items-center border-dashed border-gray-400 border-2 rounded-xl w-80 h-80 cursor-pointer transition duration-300 hover:border-primary animate-bounce-slow"
        >
          <header>
            <LockClosedIcon class="h-22 w-28 m-2" />
            <h1 class="text-center text-2xl font-bold w-full">Secure</h1>
          </header>
          <article class="text-gray-500 text-center p-4 px-8">
            <p class="text-base">
              Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed
              diam voluptua. At vero eos accusam et justo duo dolores
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
