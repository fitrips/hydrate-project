
<template>
  <Navbar></Navbar>
  <!-- INI BAGIAN SECTION 1 -->
  <section
    class="flex justify-center flex-col space-y-16 md:space-y-20 lg:space-y-24 items-center h-[600px] bg-white"
  >
    <div class="flex justify-center flex-col text-center">
      <span class="text-xl lg:text-2xl block">Kebutuhan air yang anda</span>
      <span class="text-xl lg:text-2xl block"
        >butuhkan adalah <span class="font-bold">1 liter perhari !</span></span
      >
      <span class="mt-2 font-thin"
        >Penuhi kebutuhan air anda setiap harinya</span
      >
    </div>
    <div
      class="grid grid-cols-2 grid-rows-2 gap-1 md:grid-cols-4 md:grid-rows-1 lg:gap-24"
    >
      <div
        class="w-44 h-[110px] rounded-xl bg-blue-500 text-center text-white py-8"
      >
        <span class="block">Kebutuhan</span>
        <span class="block font-bold">1 LT</span>
      </div>
      <div
        class="w-44 h-[110px] rounded-xl bg-blue-500 text-center text-white py-8"
      >
        <span class="block">Berat</span>
        <span class="block font-bold">50 KG</span>
      </div>
      <div
        class="w-44 h-[110px] rounded-xl bg-blue-500 text-center text-white py-8"
      >
        <span class="block">Cuaca</span>
        <span class="block font-bold">Dingin</span>
      </div>
      <div
        class="w-44 h-[110px] rounded-xl bg-blue-500 text-center text-white py-8"
      >
        <span class="block">Jenis Kelamin</span>
        <span class="block font-bold">Perempuan</span>
      </div>
    </div>
    <div class="w-56 bg-gray-500 h-1 rounded-full"></div>
  </section>

  <!-- INI BAGIAN SECTION 2 -->
  <section class="flex flex-col items-right bg-slate-300 h-[600px]">
    <div class="text-center mt-11 text-black text-xl lg:text-2xl font-semibold">
      <span class="block">Penuhi kebutuhan hidrasi</span>
      <span class="block">lihat progress anda disini</span>
    </div>
    <div class="flex items-center justify-around">
      <div class="flex flex-col justify-center mt-11">
        <div class="relative w-60 h-80">
          <!-- Tabung -->
          <div
            class="absolute right-[140px] transform translate-x-1/2 bottom-0"
          >
            <!-- Bagian luar tabung -->
            <div
              class="w-40 h-full bg-gray-300 border-2 border-gray-400"
              :style="{
                height: containerHeight + 'px',
                borderRadius: containerRadius,
              }"
            >
              <!-- Bagian air di dalam tabung -->
              <div
                class="absolute bottom-0 left-0 right-0 bg-blue-400"
                :style="{
                  height: waterHeight + '%',
                  borderBottomLeftRadius: containerRadius,
                  borderBottomRightRadius: containerRadius,
                }"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="w-40 mt-10 ml-[20px] bg-white h-5 rounded-full text-center relative"
        >
          <span class="absolute right-16 font-bold z-20">50%</span>
          <div
            class="w-20 bg-green-400 h-5 rounded-full relative z-10 text-gray-900"
          ></div>
        </div>
      </div>
      <div class="flex flex-col relative font-medium">
        <div class="font-medium">
          <label for="jumlah"></label>
          <input
            class="rounded-full w-96 h-12"
            type=""
            name=""
            id="jumlah"
            placeholder="&nbsp&nbsp&nbsp&nbsp Jumlah air yang diminum "
          />
        </div>
        <div class="text-white mt-10">
          <button class="w-32 h-9 bg-blue-600 rounded-full" type="submit">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- INI BAGIAN SECTION 3 -->
  <section
class="flex flex-col items-center h-[1600px] md:h-[1300px] lg:h-[800px] bg-white"
  >
    <div
      class="mt-10 text-2xl lg:text-3xl lg:mt-20 lg:mb-20 md:mt-20 md:mb-20 font-bold"
    >
      <span>Artikel</span>
    </div>
    <div
      class="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows md:gap-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-10"
    >
      <div
        class="flex flex-col w-[350px] h-[450px] mt-10 border border-gray-400"
        v-for="art in artikel"
        :key="art.id"
        @click="showReadMore(art)"
      >
        <img class="w-full" :src= art.image_url  alt="pict">
        <span class="m-3 font-semibold text-base">{{ art.judul }}</span>
        <span class="m-3 font-thin text-base">{{ art.konten }}</span>
        <span class="m-3 font-light text-gray-500 text-base">20 Mei 2007</span>
      </div>
    </div>
  </section>

  <!-- INI BAGIAN SECTION 4 -->
  <section
    class="flex flex-col items-center justify-center h-80 bg-slate-700 text-center text-white"
  >
    <span class="block text-2xl font-semibold">Hidrasi dan kesehatan</span>
    <span class="block text-2xl font-semibold">di ujung jari anda !</span>
    <span class="block mt-2 font-light">Hydrate Hero in here</span>
    <img class="w-40" src="" alt="pict" />
  </section>

  <section
    class="flex flex-col items-center justify-center space-y-12 h-[200px] bg-white"
  >
    <div class="flex space-x-10 font-semibold">
      <span>Beranda</span>
      <span>Progress</span>
      <span>Artikel</span>
    </div>
    <div class="font-thin">
      <span>@2024 Fitri Puspitasari</span>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

const containerHeight = 300; // Tinggi tabung
const waterHeight = 50; // Persentase tinggi air
const containerRadius = "20%"; // Radius Tabung

export default {
  computed: {
    ...mapGetters(["getArtikelData"]),
    artikel() {
      return this.getArtikelData;
    },
  },
  methods: {
    showReadMore(art) {
      this.$router.push(`/detail-artikel/${art.id}`); // Perbaikan: tutup kutipan di sini
    },
  },
  mounted() {
    this.$store.dispatch("getArtikel");
  },
};
</script>
