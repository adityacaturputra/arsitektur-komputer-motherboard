const artikel = document.getElementById('artikel');
const gambar = document.getElementById('gambar');
const isiArtikel = [
    'Menurut sejarah yang dicatat oleh dunia teknologi, motherboard pertama kali dibuat oleh Steve Jobs dan Wozniak, dua pendiri perusahaan Apple. Saat itu mereka sedang merencanakan mengembangan Apple I menjadi Apple II namun dengan bentuk yang lebih ringkas.',
    'Saat itu tahun 1977 di mana komputer Apple I masih berbentuk tak karuan dengan bagian-bagian yang terpisah-pisah dan dihubungkan dengan kabel-kabel yang ruwet. Kedua pendiri Apple tersebut memikirkan cara untuk meletakkan komponen-komponen komputer yang berserakan tersebut disatu tempat khusus yang bisa ditempatkan di dalam komputer.',
    'Ide tersebut dikembangkan di produk Apple II dan kemudian diikuti oleh oleh beberapa perusahaan pengembang awal mortherboard seperti DFI, Orchid Tech, AMI, Huppauge, Micronic, dan Elitegroup.',
    'Selain itu, sebelum ditemukannya microprocessor komputer terdiri dari sejumlah papan sirkuit yang terhubung dengan backplane, sebuah papan penghubung perangkat komputer – bisa dibilang nenek moyangnya motherboard. Dahulu setiap perangkat keras komputer ditempatkan pada papan sirkuit yang berbeda. Baru masing-masing papan sirkuit itu dihubungkan ke backplane. Salah satu contoh populer tipe backplane ini adalah S-100 bus, bagian dari mikro-komputer Altair 8800.'
];
const isiGambar = [
    `<img src="../resources/images/penemu.jpg">`,
    `<img src="./resources/img/1-IBM-planar-breadboard.jpg"> <p class="font-size mby">IBM Planar Breadboard, motheboard pertama di dunia yang digunakan pada PC (Timetoast.com)</p>`,
    `<img src="../resources/images/penemu.jpg">`,
    `<img src="./resources/img/1-cromenco-s-100-backplane.jpg" /> <p class="font-size mby">Backplane Cromenco S-100 yang digunakan pada komputer Altair 8800</p>"`
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
        next.innerHTML = `<a href="sejarah2.html#content">1980</a>`;
    }else{
        next.innerHTML = `Next`;
    }
    
    if (saatIni == 0) {
        back.innerHTML = "";
    }else{
        back.innerHTML = `Back`;
    }
    artikel.innerHTML = isiArtikel[saatIni];
    gambar.innerHTML = isiGambar[saatIni];
});

tombol[0].addEventListener("click", function(){
    saatIni--;
    if (saatIni == -1) {
        saatIni++; 
    }

    if (saatIni == isiArtikel.length - 1) {
        next.innerHTML = `<a href="sejarah2.html#content">1980</a>`;
    }else{
        next.innerHTML = `Next`;
    }

    if (saatIni == 0) {
        back.innerHTML = "";
    }else{
        back.innerHTML = `Back`;
    }
    artikel.innerHTML = isiArtikel[saatIni];
    gambar.innerHTML = isiGambar[saatIni];
});