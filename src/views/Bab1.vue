<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goBack = () => {
    router.push('/novel/1')
  }
  
  const title = 'Bab 1 - bara dalam kenangan'
  const fontSize = ref(18)
  
  const increaseFontSize = () => {
    fontSize.value += 2
  }
  
  const decreaseFontSize = () => {
    if (fontSize.value > 12) fontSize.value -= 2
  }
  function goHome() {
  router.push('/')
  }
  
  const story = `
  Aku masih ingat bau logam terbakar itu.

Bau yang sama seperti hari ketika segalanya berakhir.

Langit runtuh. Awan menjadi merah menyala, seperti terbakar oleh kemarahan para dewa. Tapi itu bukan murka ilahi—itu mesin. Mesin tanpa hati, tanpa ampun, dengan mata merah yang tak pernah berkedip. Mereka datang dari arah utara, meratakan kota satu per satu, hingga akhirnya mencapai tempatku tinggal.

“Ayo Syren, bantu Ibu bawa ini,” kata Ibu dengan senyuman tergesa, tangannya memeluk sebuah tas lusuh berisi makanan kalengan.

Aku waktu itu baru berusia dua belas tahun, belum tahu apa-apa soal perang atau dendam. Yang kupikirkan hanya bagaimana agar aku bisa bermain di hutan belakang rumah tanpa dilarang. Tapi hari itu, suara dentuman menggantikan tawa, dan tangisan menggantikan obrolan sore.

Ledakan itu begitu dekat. Getarannya membuat lantai rumah berderak, dan kaca jendela pecah berhamburan. Ayah langsung menarikku ke dalam pelukannya.

“Jangan keluar, apa pun yang terjadi. Lindungi ibumu,” katanya cepat sebelum berlari keluar, membawa senapan usang dari masa perang sebelumnya.

Aku hanya bisa menatap punggungnya.

Itu terakhir kalinya aku melihat Ayah.

Beberapa menit setelahnya, suara tembakan terdengar, diikuti jeritan—jeritan yang terlalu lirih untuk disebut manusia. Ibu memelukku erat, tubuhnya gemetar. Tapi saat pintu rumah didobrak dan logam dingin menembus dinding kayu, hanya satu hal yang kupikirkan:

Kenapa? Kenapa mereka menyerang kami? Kami cuma petani...

Sosok robot itu masuk. Matanya merah. Tangannya berubah bentuk, menjadi semacam senjata plasma. Ibu mencoba berdiri di hadapanku.

Dan saat itu...

“AARRGHH!!!”

Cahaya putih meledak dari senjata mereka.

Ibu terhempas, tubuhnya tak bergerak lagi.

Aku...

Aku tak bisa berteriak. Suaraku tercekat di tenggorokan.

Sesuatu dalam diriku retak. Dan dari serpihan itulah, Syren yang sekarang lahir.

Sepuluh tahun berlalu sejak hari itu. Dunia berubah menjadi puing-puing. Kota-kota runtuh, hutan-hutan terbakar, dan langit menjadi gelap oleh abu mesin. Para manusia yang masih hidup dipaksa tunduk, dijadikan budak untuk memperpanjang umur para mesin yang mereka ciptakan sendiri.

Aku tidak tunduk.

Tidak setelah mereka mengambil segalanya dariku.

Namaku Syren. Aku pemburu.

Dan aku tidak berdoa pada dewa.

Aku melompat dari reruntuhan gedung bertingkat yang sudah dipenuhi tumbuhan liar. Angin menyapu wajahku saat aku menjatuhkan diri, lalu menancapkan kaki ke dinding yang curam. Satu lompatan lagi dan—

ZRAAKK!

Aku menarik pedangku—yang juga berfungsi sebagai senapan plasma. Senjata itu bukan buatan pabrik. Aku merakitnya sendiri. Kombinasi logam kuno dan teknologi hasil rampasan dari robot yang pernah kubantai. Tapi keunggulan utamanya bukan kekuatan serangannya...

Melainkan kemampuan meretas sistem mereka setiap kali aku menembak.

Tiga robot penjaga muncul dari bawah. Model tipe-buru, berkaki empat, dengan mata sensor yang menyala merah. Mereka mengarahkanku dan mulai menembak.

Aku menembak duluan.

TZZZZT!

Satu tembakan. Dan seluruh sistem mereka membeku. Matanya padam, lalu tubuh mereka jatuh seperti bangkai.

“Masih terlalu mudah,” gumamku, melangkahi tubuh besi mereka yang kini tak bernyawa.

Di sabukku, layar kecil menampilkan peta. Titik merah besar bergerak cepat. Aku sudah menandai targetku berikutnya: salah satu komandan mesin yang menguasai wilayah sektor 7—Robot Iblis tingkat Beta.

Mereka bilang robot iblis ini pernah membakar seluruh desa hanya karena seorang anak mencuri suku cadang. Aku tahu aku masih belum cukup kuat untuk menantang yang paling tinggi—Ziraxis, penguasa semua mesin—tapi aku akan memulai dari bawah.

Satu per satu. Aku akan membuat mereka merasakan apa itu kehilangan.

Tapi saat aku melangkah ke arah target, aku mendengar sesuatu.

Jeritan kecil. Tertahan.

Aku berhenti. Fokus. Itu suara manusia. Anak-anak?

Aku mengikuti suara itu melewati reruntuhan tua dan lorong bawah tanah yang gelap. Hingga akhirnya, aku melihatnya.

Seorang gadis kecil, tubuhnya mungil, terikat di tiang logam. Bajunya compang-camping, wajahnya penuh luka dan debu. Di hadapannya berdiri satu robot penjaga, bersiap untuk memberikan 'hukuman'.

Dan dia... tersenyum.

Meski tubuhnya gemetar, dia menatap robot itu dengan mata penuh perlawanan.

Aku tahu tatapan itu. Tatapan seseorang yang sudah kehilangan segalanya... tapi tetap memilih untuk melawan.

Aku tak sempat berpikir panjang.

BRAK!

Aku muncul dari balik bayangan dan menembak tepat ke inti robot itu. Tubuhnya langsung lumpuh dan roboh. Gadis itu menatapku dengan mata membelalak.

“Kau... siapa?” tanyanya dengan suara lirih.

Aku mendekat dan memotong tali pengikat di tangannya.

“Namaku Syren,” jawabku singkat.

Dia terjatuh, tapi aku menangkapnya sebelum menyentuh tanah. Beratnya ringan. Terlalu ringan. Dia pasti belum makan berhari-hari.

“Aku Rena...” bisiknya sebelum akhirnya pingsan di pelukanku.

Aku bawa dia ke tempat persembunyianku—sebuah bunker tua yang dulu dipakai oleh pasukan manusia sebelum mereka kalah. Letaknya tersembunyi di balik reruntuhan stasiun kereta bawah tanah, dikelilingi kawat berduri dan sensor jebakan.

Begitu kami tiba, aku meletakkan Rena di atas tempat tidur darurat yang kupasang dari sisa-sisa kursi dan kain. Wajahnya pucat, napasnya lemah. Tanganku bergerak cepat, membuka kotak medis yang kubawa di tas, mengambil serum penyembuh dan beberapa perban.

Tubuhnya dipenuhi memar. Ada luka bakar di pundak kirinya, bekas sabetan alat penyiksa robot penjaga. Giginya gemeretuk karena demam.

Aku mendesah pelan.

"Anak ini... diperlakukan seperti binatang."

Tanganku tak gemetar saat membersihkan lukanya. Sudah terlalu biasa melihat darah. Tapi ada sesuatu dalam diriku yang terasa... berbeda. Ada perasaan asing saat melihat tubuh kecil itu tergeletak tak berdaya.

Aku bukan penyelamat.

Aku bukan pahlawan.

Aku hanya seseorang yang punya dendam dan senjata. Tapi malam itu, aku merasa... bukan cuma itu.

Beberapa jam berlalu. Api kecil menyala di tengah ruangan, cukup untuk menghangatkan udara. Aku duduk di ujung ruangan, memandangi api, sementara Rena masih tertidur di balik selimut.

Pikiranku kembali ke masa lalu. Saat Ibu mengelus rambutku dengan lembut. Saat Ayah mengajakku memancing di sungai kecil dekat ladang. Semua itu telah direnggut oleh robot—oleh monster yang mereka ciptakan sendiri.

Aku mengepalkan tangan.

“Ziraxis...” gumamku. “Aku akan menyeretmu ke neraka, satu baut demi satu.”

“Ziraxis... itu siapa?”

Suaranya membuatku terlonjak sedikit. Rena terbangun. Matanya masih lemah, tapi dia menatapku dengan rasa penasaran yang jujur.

“Musuhku,” jawabku singkat. “Dan musuh semua manusia.”

Dia diam sebentar, lalu berusaha duduk walau tubuhnya gemetar.

“Kau... selamatkan aku.”

Aku menoleh. “Karena aku benci melihat mereka menyakiti orang lemah.”

Dia tersenyum kecil, meski bibirnya pecah-pecah.

“Aku tidak lemah. Aku cuma... belum sempat balas.”

Aku terdiam. Anak ini... punya bara api yang sama.

“Apa mereka membunuh keluargamu juga?” tanyaku.

Dia mengangguk pelan. “Mereka bilang orangtuaku ‘tidak efisien’. Jadi mereka dibuang ke lubang sampah di sektor 12. Aku disimpan... karena tubuhku kecil. Bisa dijadikan penguji alat.”

Tangan kiriku mengepal lagi. Aku menatap ke arah luar bunker.

“Mulai besok, kau ikut denganku.”

Dia menatapku heran. “Kenapa?”

“Karena dunia ini hanya menyisakan dua jenis orang. Mereka yang diam... dan mereka yang melawan.”

Fajar di dunia ini tidak pernah benar-benar terang. Matahari tersembunyi di balik kabut tebal abu dan debu yang menggantung sejak kehancuran besar. Tapi bagiku, pagi tetap waktu terbaik untuk bergerak. Sensor robot tak sepeka malam hari, dan udara lebih tenang sebelum drone patroli mulai berkeliling.

Aku menyiapkan ranselku, memeriksa peluru, dan menyimpan energi baterai cadangan.

Rena berdiri di belakangku, mengenakan jaket bekas yang kebesaran di tubuh kecilnya.

“Ke mana kita akan pergi?” tanyanya.

Aku menunjuk layar kecil di pergelangan tanganku.

“Sektor 7. Ada pusat kontrol milik robot iblis kelas Beta di sana. Target utamaku.”

Dia menelan ludah. “Berbahaya?”

Aku menoleh, menatap matanya. “Semua yang kita lakukan berbahaya. Tapi kalau kau takut, aku bisa—”

“Aku ikut,” potongnya cepat.

Matanya serius. Tidak ada keraguan, meski tubuhnya belum pulih sepenuhnya.

Aku mengangguk. “Baik. Tapi jangan menghalangi. Aku takkan menyelamatkan dua kali kalau kau ceroboh.”

Dia tertawa kecil. “Kau galak ya.”

Aku tak menjawab. Hanya memutar tubuh dan membuka pintu baja bunker.

Angin dingin menerpa wajahku. Udara dipenuhi aroma karat dan kehancuran.

Kami berjalan melewati puing-puing kota tua, di antara kerangka kendaraan dan sisa-sisa bangunan. Setiap langkah adalah bahaya. Sensor, perangkap, drone pengintai. Tapi aku sudah hafal semua itu.

Lalu... sesuatu terjadi.

Saat kami melewati sebuah pilar logam tumbang, tiba-tiba terdengar suara bip pelan dari alat pemindai di pergelangan tanganku. “Ada sinyal energi abnormal,” gumamku.

Aku berhenti. Menunduk.

Lantai tanah yang kami lewati—retak. Cahaya biru redup bersinar samar dari sela-sela retakan. Aku berjongkok dan menyentuhnya dengan sarung tangan, mencoba membaca sumbernya.

Tapi saat aku menyentuhnya—

ZAAAP!

Sinar biru menyambar tanganku. Aku terdorong ke belakang.

“Syren!” Rena berteriak, berlari menghampiriku.

Aku memegang tanganku. Panas. Tapi lebih dari itu—aku melihat sesuatu sekilas. Sebuah bayangan. Simbol aneh. Dan suara... suara lembut, tapi penuh gema.

| “Pewarisan telah dimulai…”

Aku terdiam. Jantungku berdegup kencang. Apa itu tadi? Siapa yang bicara?

Saat aku menoleh ke Rena, dia memegang tanganku. Tapi anehnya, sinar biru itu mereda saat dia menyentuhku.

Dan di matanya... aku melihat pantulan cahaya yang sama. Biru.

Bukan merah seperti robot, bukan putih seperti manusia biasa.

“Rena... kau... siapa sebenarnya?”

Dia tampak bingung. “Aku... tidak tahu. Tapi... aku selalu merasa ada sesuatu dalam tubuhku. Seperti suara... atau cahaya... yang ingin keluar.”

Aku menatapnya lama. Dunia ini penuh rahasia. Tapi aku tahu satu hal—pertemuan kami bukan kebetulan.

Aku berdiri dan meraih tangannya.

“Kita akan cari jawabannya. Bersama.”

Dan untuk pertama kalinya dalam bertahun-tahun... aku tersenyum.
`
</script>

<template>
    <div class="bab1-container">
      <div>
        <button @click="goBack">Kembali ke halaman novel</button>
        <button @click="goHome">Kembali ke Beranda</button>
      </div>
  
      <h1 class="chapter-title">{{ title }}</h1>
  
      <div class="font-buttons">
        <button @click="decreaseFontSize">A-</button>
        <button @click="increaseFontSize">A+</button>
      </div>
  
      <div class="story-box" :style="{ fontSize: fontSize + 'px' }">
        {{ story }}
      </div>
    </div>
</template>
  
<style scoped>
  .bab1-container {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
  }
  
  .back-button {
    background-color: #eee;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .chapter-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .font-buttons {
    margin-bottom: 15px;
  }
  
  .font-buttons button {
    margin-right: 10px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .story-box {
    background-color: #fdfdfd;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
    line-height: 1.8;
    white-space: pre-line;
  }
</style>
  