<script setup>
import { ref } from 'vue'

const novels = ref([
  {
    id: 1,
    title: 'syren the robot killer',
    image: '/novel1.jpg',
    button: 'Baca'
  },
  {
    id: 2,
    title: 'date a live',
    image: '/novel1.jpg',
    button: 'Baca'
  },
  {
    id: 3,
    title: 'Loli Elf dan Dunia Ajaib',
    image: '/novel1.jpg',
    button: 'Baca'
  }
])
</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="logo">First Novel</h1>
    </header>

    <h2 class="subtitle">Daftar Novel</h2>

    <main class="novel-list">
      <div class="novel-card" v-for="n in novels" :key="n.id">
        <router-link :to="`/novel/${n.id}`">
          <img :src="n.image" class="novel-cover" />
        </router-link>
        <div class="novel-title">{{ n.title }}</div>
        <router-link :to="`/novel/${n.id}`" class="novel-button-link">
          <div class="novel-button">{{ n.button }}</div>
        </router-link>
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  font-family: sans-serif;
  background: #f5f5f5;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #a855f7;
  color: #000;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.search-icon {
  width: 30px;
  height: 30px;
}

.novel-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
}

.novel-card {
  width: 150px;
  margin: 1rem;
  background: white;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.novel-cover {
  width: 100%;
  height: 220px;
  object-fit: cover;
  cursor: pointer;
}

.novel-title {
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.novel-button-link {
  text-decoration: none;
}

.novel-button {
  background: blue;
  color: white;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 1.5rem 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid black;
  display: inline-block;
}
</style>
