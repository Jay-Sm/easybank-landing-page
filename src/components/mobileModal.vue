<template>
  <div
    class="fixed top-[5rem] left-0 right-0 bottom-0 bg-gradient-to-b from-dark-blue to-transparent z-20 flex justify-center">
    <div class="fixed top-0 right-0 left-0 bg-white h-[5rem] flex items-center justify-between px-[2rem]">
      <img src="../assets/images/logo.svg" alt="easybank logo" class="logo">

      <button @click="$emit('closeModal')"
        class="min-w-10 w-10 h-10 flex justify-center items-center hover:bg-grayish-blue hover:bg-opacity-20 rounded-full">
        <img src="../assets/images/icon-close.svg" class="w-8/12">
      </button>
    </div>
    <div class="absolute top-8 bg-white w-[23rem] h-fit rounded-md flex flex-col p-8 items-center space-y-4">
      <button class="w-fit flex flex-col justify-between items-center">
        <p class="my-auto">Home</p>
        <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
      </button>
      <button class="w-fit flex flex-col justify-between items-center">
        <p class="my-auto">About</p>
        <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
      </button>
      <button class="w-fit flex flex-col justify-between items-center">
        <p class="my-auto">Contact</p>
        <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
      </button>
      <button class="w-fit flex flex-col justify-between items-center">
        <p class="my-auto">Blog</p>
        <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
      </button>
      <button class="w-fit flex flex-col justify-between items-center">
        <p class="my-auto">Careers</p>
        <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style></style>