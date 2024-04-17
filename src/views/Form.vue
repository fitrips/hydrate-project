<template>
  <div>
    <Navbar></Navbar>
    <div class="relative">
      <div class="absolute top-full left-0 w-full flex justify-center mt-4">
        <h6 class="font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-400">50%</h6>
      </div>
      <div class="relative w-full mt-2 border border-blue-gray-200 rounded-full">
        <div class="h-2.5 rounded-full bg-blue-500" style="width: 50%; left: 0;"></div>
      </div>
    </div>
  </div>
  <div class="mx-5 mt-8 mb-8">
    <p class="text-xl text-sm text-black font-semibold mb-2">Masukkan berat badan anda</p>
    <div class="w-full mx-auto flex justify-center">
      <div class="relative h-15 w-full">
        <input type="number" placeholder="Kilogram (KG)" min="0" step="0.1"
          class="peer h-full w-full rounded-[15px] border border-gray-300 border-t-transparent bg-gray-500 bg-opacity-30 px-5 py-2.5 font-sans text-l font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline-none ring-4 ring-transparent transition-all placeholder-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-transparent focus:border-t-transparent focus:outline-none focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
    </div>
  </div>
  <div class="mx-5 mt-8 mb-8">
  <p class="text-xl text-sm text-black font-medium mb-2">Jenis kelamin</p>
  <div class="w-full mx-auto flex justify-center relative">
    <select class="peer h-full w-full rounded-[15px] border border-gray-300 border-t-transparent bg-gray-500 bg-opacity-30 px-5 py-2.5 font-sans text-l font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline-none ring-4 ring-transparent transition-all placeholder-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-transparent focus:border-t-transparent focus:outline-none focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 appearance-none pr-8">
      <option disabled selected >Pilih jenis kelamin</option>
      <option>Perempuan</option>
      <option>Laki-laki</option>
    </select>
  </div>
</div>
<div class="mx-5 mt-8 mb-8">
  <p class="text-xl text-sm text-black font-medium mb-2">Cuaca</p>
  <div class="w-full mx-auto flex justify-center relative">
    <select class="peer h-full w-full rounded-[15px] border border-gray-300 border-t-transparent bg-gray-500 bg-opacity-30 px-5 py-2.5 font-sans text-l font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline-none ring-4 ring-transparent transition-all placeholder-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-transparent focus:border-t-transparent focus:outline-none focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 appearance-none pr-8">
      <option disabled selected >Pilih cuaca</option>
      <option>Panas</option>
      <option>Sedang</option>
      <option>Dingin</option>
    </select>
  </div>
</div>
<div class="col-span-full flex justify-end">
    <a href="/" class="inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 ml-auto mx-5">Selanjutnya &rarr;</a>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
