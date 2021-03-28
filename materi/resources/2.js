const artikel = document.getElementById('artikel');
const gambar = document.getElementById('gambar');
const isiArtikel = [
    'Di tahun 1984 IBM mencetuskan desain AT (Advanced Technology) pada motherboardnya, yang melahirkan konsep desain bagaimana komputer dirakit saat ini.  Desain Form factor (faktor bentuk) tipe AT ini sangat populer, digunakan pada desktop PC dan casing PC tipe Tower Case.',
    'Perusahaan perangkat keras komputer dari Taiwan yaitu Gigabyte lahir pada tahun 1986, didirikan oleh Pei-Cheng Yeh. Masih dari Taiwan, pada tahun 1989 sekelompok bekas karyawan Acer mendirikan sebuah perusahaan bernama ASUS – diambil dari kata “Pegasus” – yang nantinya menjadi salah satu produsen motherboard terbesar di dunia.',
    'Integrated Chip – IC, juga dikenal sebagai Super I/O chip, mulai ditambahkan ke motherboard di akhir 80-an untuk mendukung perangkat berkecepatan rendah seperti mouse, keyboard, floppy disk drive, port serial dan parallel.'
];
const isiGambar = [
    `<img src="./resources/img/2-at.jpg">`,
    `<img src="./resources/img/2-Apple-II-750px.jpg">`,
    `<img src="./resources/img/2-Capture.JPG">`
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
        next.innerHTML = `<a href="sejarah3.html#content">1990</a>`;
    }else{
        next.innerHTML = `Next`;
    }
    
    if (saatIni == 0) {
        back.innerHTML = `<a href="sejarah1.html#content">1970</a>`;
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
        next.innerHTML = `<a href="sejarah3.html#content">1990</a>`;
    }else{
        next.innerHTML = `Next`;
    }

    if (saatIni == 0) {
        back.innerHTML = `<a href="sejarah1.html#content">1970</a>`;
    }else{
        back.innerHTML = `Back`;
    }
    artikel.innerHTML = isiArtikel[saatIni];
    gambar.innerHTML = isiGambar[saatIni];
});