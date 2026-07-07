import express from 'express';
import cors from 'cors';

// 1. EXPRESS UYGULAMASI OLUŞTURMA
// Express, yapacağımız araba motorunun iskeletidir. Bütün tekerlekleri ona bağlayacağız.
const app = express();

// Sunucumuzun çalışacağı port numarası. React 5173'ü kullanıyor, biz 5000'i alalım çakışmasın.
const PORT = 5000; 

// 2. MIDDLEWARE (ARA YAZILIMLAR)
// "app.use()" komutu, sunucumuza gelen ve giden verinin ön kapıdan geçerken kontrolden geçmesi demektir.

// cors(): Güvenlik görevlisidir. React projemizin (farklı bir portta çalıştığı için) bu Backend'e ulaşmasına "izin verir". Başka sitelerin girmesini engeller.
app.use(cors()); 

// Frontend'den gelen şifreli verileri (form mesajları vs.) bizim okuyabileceğimiz "JSON" formatına çevirir.
app.use(express.json());


// 3. İLK API UÇ NOKTASI (ENDPOINT)
// Tarayıcıdan "http://localhost:5000/" adresine bir istek ("GET") atılırsa burası tetiklenir.
app.get('/', (req, res) => {
  // req: (Request/İstek) Frontend'den gelen bilgiler.
  // res: (Response/Cevap) Backend'in geriye vereceği cevap.
  res.send('Backend Sunucumuza Hoş Geldin Oğuzhan! Her Şey Yolunda.');
});


// 4. DENEME VERİSİ (API) YARATMA
// React sitemiz bizden "Projeleri" isteyeceği zaman gideceği adres burası olacak.
app.get('/api/projects', (req, res) => {
  
  // Şimdilik veritabanımız (MongoDB) olmadığı için projeleri geçici (fake) olarak buraya bir değişkenin içine yazıyoruz.
  const projelerim = [
    { id: 1, isim: "E-Ticaret Sitesi", teknoloji: "React", yayinda: true },
    { id: 2, isim: "Görev Yöneticisi", teknoloji: "Node.js", yayinda: false }
  ];
  
  // Bu veriyi (json) aynen React'e gönderiyoruz (response).
  res.json(projelerim);
});


// 5. SUNUCUYU AYAĞA KALDIRMA (DİNLEME)
// Motoru çalıştıracağımız yer burası. Belirttiğimiz PORT üzerinden dış dünyayı dinlemeye başlıyor.
app.listen(PORT, () => {
  console.log(`🚀 API Sunucusu http://localhost:${PORT} adresinde çalışıyor!`);
});
