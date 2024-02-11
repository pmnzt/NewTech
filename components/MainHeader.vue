<template>
  <header class="sticky w-full top-0 z-10 shadow">
    <div
      class="navbar flex justify-around items-center gap-4 bg-base-100 text-base-content border-b-2 border-base-300"
    >
      <div>
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Vision</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <NuxtLink class="btn btn-ghost text-xl sm:text-2xl"
          ><h1>New<span class="text-blue-600">Tech</span></h1>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Vision</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <LanguageSelector />
        <TheamToggle />
      </div>
    </div>
  </header>
</template>
