<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const novels = {
  1: {
    title: 'syren the robot killer',
    image: '/novel1.jpg',
    ranking: 'Top 1',
    views: '12.000',
    status: 'Ongoing',
    genre: 'Fantasy, Romance',
    synopsis: `Di dunia yang telah berubah menjadi neraka besi dan api, aku hanya punya satu tujuan—menghancurkan robot iblis yang telah merenggut keluargaku.
Namaku Syren. Aku pemburu mesin, pembunuh robot, musuh terakhir mereka.
Tapi takdir memberiku sesuatu yang tak pernah kuduga: seorang gadis mungil bernama Rena—lemah lembut, penuh rahasia, dan nyaris musnah di tangan para robot. Aku menyelamatkannya... dan mungkin, dia juga menyelamatkanku.
Bersama, kami menembus reruntuhan dunia. Peluru demi peluru, luka demi luka. Namun di tengah darah dan logam, benih cinta tumbuh.
Ini bukan hanya kisah balas dendam. Ini kisah tentang harapan, cinta, dan akhir dari tirani besi.`,
    chapters: [
      { number: 1, title: "Awal Perjalanan" },
    ],
  },
}

const novelId = route.params.id
const novel = ref(novels[novelId])

function goHome() {
  router.push('/')
}

function selectChapter(chapter) {
  router.push(`/novel/${novelId}/bab${chapter.number}`)
}

</script>

<template>
  <div class="novel-detail">
    <button class="back-button" @click="goHome">← Kembali ke Beranda</button>
    <img :src="novel.image" alt="Novel Cover" class="novel-cover" />

    <h1 class="novel-title">{{ novel.title }}</h1>

    <div class="novel-info-box">
      <p><strong>Ranking:</strong> {{ novel.ranking }}</p>
      <p><strong>Tayangan:</strong> {{ novel.views }}</p>
      <p><strong>Status:</strong> {{ novel.status }}</p>
      <p><strong>Genre:</strong> {{ novel.genre }}</p>
    </div>

    <div class="novel-synopsis">
      <h2>Sinopsis</h2>
      <p class="sinopsis-text">{{ novel.synopsis }}</p>
    </div>

    <div class="novel-chapters">
      <h3>Bab-bab</h3>
      <ul>
        <li v-for="chapter in novel.chapters" :key="chapter.number">
          <button class="chapter-link" @click="selectChapter(chapter)">
            Bab {{ chapter.number }}: {{ chapter.title }}
          </button>
          <hr class="chapter-divider"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #a855f7;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #9333ea;
}

.novel-synopsis {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.sinopsis-text {
  font-size: 16px;
  line-height: 1.8;
  white-space: pre-line; 
  word-wrap: break-word;
}

.novel-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.novel-cover {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 20px;
  display: block;
}

.novel-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.novel-info-box {
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.novel-synopsis h2 {
  margin-bottom: 10px;
}

.novel-synopsis p {
  line-height: 1.6;
}

.novel-chapters {
  margin-top: 30px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.novel-chapters h3 {
  margin-bottom: 10px;
  font-size: 22px;
}

.novel-chapters ul {
  list-style-type: none;
  padding: 0;
}

.novel-chapters li {
  font-size: 16px;
  padding: 5px 0;
}

.chapter-divider {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #ddd;
}

.chapter-link {
  background: none;
  border: none;
  color: #a855f7;
  font-size: 18px;
  cursor: pointer;
  text-align: left;
  padding: 5px 0;
  width: 100%;
}

.chapter-link:hover {
  color: #9333ea;
}
</style>
