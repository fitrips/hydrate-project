<!-- src/components/Profile.vue -->
<template>
  <div class="container mx-auto mt-8">
    <div class="bg-blue-100 p-8 rounded shadow-md">
      <h1 class="text-3xl font-semibold mb-4 text-blue-700">Profil Pengguna</h1>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
        <p class="text-gray-800">{{ user.name }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <p class="text-gray-800">{{ user.email }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
        <p class="text-gray-800">{{ user.username }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Role:</label>
        <p class="text-gray-800">{{ user.role }}</p>
      </div>
      <!-- Tambahkan informasi profil lainnya sesuai kebutuhan -->

      <!-- Tombol Edit Profil -->
      <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Edit Profil
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'john_doe123',
        role: 'Pengguna Biasa',
        // Tambahkan properti lainnya sesuai kebutuhan
      },
    };
  },  
};
</script>

<style scoped>
/* Gaya khusus untuk komponen ini */

/* Memberikan padding dan margin pada elemen */
.container {
  padding: 1rem;
}

/* Memberikan tampilan kartu dengan bayangan dan sudut yang membulat */
.bg-blue-100 {
  background-color: #ebf8ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.rounded {
  border-radius: 0.375rem; /* 6px */
}

/* Memberikan warna teks dan latar belakang yang sesuai */
.text-gray-700 {
  color: #4a5568;
}

.text-gray-800 {
  color: #2d3748;
}

/* Memberikan warna teks dan latar belakang pada judul */
.text-blue-700 {
  color: #3182ce;
}

/* Memberikan warna latar belakang dan teks pada tombol */
.bg-blue-500 {
  background-color: #4299e1;
}

.hover\:bg-blue-700:hover {
  background-color: #2b6cb0;
}
</style>
