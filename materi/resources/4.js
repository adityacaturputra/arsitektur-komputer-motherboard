const artikel = document.getElementById('artikel');
const isiArtikel = [
    'Memasuki era millenium para produsen komputer ternama berlomba-lomba mendesain motherboard sekecil dan seekonomis mungkin, dengan performa yang tidak kalah dengan desain biasa. VIA, sekali lagi dari Taiwan, mengawali dengan membuat terobosan baru: Mini ITX. Meski ditujukan untuk casing kecil, performa motherboard ini sebanding dengan tipe ATX dan Micro ATX.',
    'Intel kembali mencoba mendesain ulang form factor motherboard dengan memperkenalkan Balanced Technology Extended di tahun 2005. Namun, karena komponen kompatibel yang tersedia sedikit, serta tidak bisa menggunakan komponen hemat daya yang sudah ada, konsep ini hanya berumur pendek.',
    'Di tahun 2007 ASUStek dinobatkan menjadi produsen terbesar motherboard sedunia. 2 Tahun kemdian, lagi-lagi VIA, berhasil merilis mobile-ITX, motherboard terkecil sedunia dengan ukuran 60mm x 60mm.',
    'Motherboard sekarang menjadi semakin kaya fitur. Overclocking (GPU, CPU, dan bahkan RAM), integrated Wi-fi dan Bluetooth, port USB berkecepatan tinggi seperti USB Type-C, hingga lampu RGB yang bisa dikustomisasi sesuai selera. Seiring perkembangan zaman, semakin banyak fitur baru yang bakal ditambahkan.'
];
const back = document.querySelector('#back');
const next = document.querySelector('#next');
saatIni = 0;
artikel.innerHTML = isiArtikel[saatIni];

const tombol = document.getElementsByClassName('tombol-artikel');

tombol[1].addEventListener("click", function(){
    saatIni++;
    if (saatIni == isiArtikel.length) {
        saatIni--; 
    }
    
    if (saatIni == isiArtikel.length - 1) {
        next.innerHTML = `<a href="../index.html">Selesai</a>`;
    }else{
        next.innerHTML = `Next`;
    }
    
    if (saatIni == 0) {
        back.innerHTML = `<a href="sejarah3.html#content">1990</a>`;
    }else{
        back.innerHTML = `Back`;
    }
    artikel.innerHTML = isiArtikel[saatIni];
});

tombol[0].addEventListener("click", function(){
    saatIni--;
    if (saatIni == -1) {
        saatIni++; 
    }

    if (saatIni == isiArtikel.length - 1) {
        next.innerHTML = `<a href="../index.html">Selesai</a>`;
    }else{
        next.innerHTML = `Next`;
    }

    if (saatIni == 0) {
        back.innerHTML = `<a href="sejarah3.html#content">1990</a>`;
    }else{
        back.innerHTML = `Back`;
    }
    artikel.innerHTML = isiArtikel[saatIni];
});