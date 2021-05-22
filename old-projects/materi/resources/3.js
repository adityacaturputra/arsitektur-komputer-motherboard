const artikel = document.getElementById('artikel');
const gambar = document.getElementById('gambar');
const isiArtikel = [
    'Di akhir 80-an dan awal 90-an menggabungkan banyak perangkat dalam satu motherboard menjadi semakin ekonomis. Akan tetapi, desain form factor AT memiliki beberapa kekurangan, seperti ruang dan kemampuan menukar perangkat keras.',
    'Datanglah Intel di tahun 1995 dengan desain baru mereka – ATX form factor, yang menawarkan motherboard dengan dimensi dan layout yang baru. Desain ini juga menjawab berbagai permasalahan yang dimiliki form factor AT. 3 Tahun kemudian diperkenalkan motherboard dengan desain yang lebih kecil, Form factor Micro ATX. Kelebihannya adalah, meskipun kecil, sangat kompatibel dengan perangkat-perangkat dari form faktor lama.',
    'Menjelang awal Millenium motherboard menjadi semakin lengkap. Banyak yang sudah dilengkapi dengan fungsi audio, video, penyimpanan tanpa butuh expansion card lagi. Gaming, desain grafis dan animasi kini menjadi makin mudah, canggih dan cepat dengan kartu grafis yang bisa dipasang sesuai dengan kebutuhan.',
    'Laptop, berbeda dengan PC, memilih desain motherboard yang lebih terintegrasi. Dengan kata lain hampir semua komponen komputer seperti GPU dan CPU tersolder, sehingga tidak bisa diupgrade. Desain seperti ini justru menjadi tren hingga saat ini pada laptop, netbook dan tablet.'
];
const isiGambar = [
    `<img src="./resources/img/2-at.JPG">`,
    `<img src="./resources/img/3-atx.PNG">`,
    `<img src="./resources/img/3-Contoh-Micro-ATX-Board.jpg">`,
    `<img src="./resources/img/3-Galaxy_Atom_ATX_motherboard.jpg">`
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
        next.innerHTML = `<a href="sejarah4.html#content">2000</a>`;
    }else{
        next.innerHTML = `Next`;
    }
    
    if (saatIni == 0) {
        back.innerHTML = `<a href="sejarah2.html#content">1980</a>`;
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
        next.innerHTML = `<a href="sejarah4.html#content">2000</a>`;
    }else{
        next.innerHTML = `Next`;
    }

    if (saatIni == 0) {
        back.innerHTML = `<a href="sejarah2.html#content">1980</a>`;
    }else{
        back.innerHTML = `Back`;
    }
    artikel.innerHTML = isiArtikel[saatIni];
    gambar.innerHTML = isiGambar[saatIni];
});