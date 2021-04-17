const komponens = [
    {
        name    : "Slot Processor",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Socket-Processor-300x229.jpg",
        artikel : "Slot Processor adalah tempat peletakan prosesor pada motherboard. Dudukan ini berbentuk segi empat dengan lubang-lubang kecil tempat tertancapnya kaki-kaki (pin-pin) prosesor yang tersusun membentuk matriks 2 dimensi. Yang berfungsi untuk meletakan processor ke motherboard.",
        link    : "#more"
    },
    {
        name    : "Konektor power",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/ATX-Power-300x270.jpg",
        artikel : "konektor power pada motherboard adalah Pin yang menyambungkan motherboard dengan power supply di casing sebuah komputer. Agar si motherboard menerima daya dari power supply.",
        link    : "#more"
    },
    {
        name    : "Northbridge",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Northbridge.jpg",
        artikel : "Northbridge adalah komponen yang menghubungkan procossor (CPU) ke sistem memori dan graphics controller (AGP dan PCI Express) melalui bus berkecepatan tinggi, dan ke southbridge. Fungsi dari Northbridge sendiri yaitu menjembatani arus data di sekitar main Memory, Prosesor, Front Side Bus dan AGP Bus juga mengatur kerja power management.",
        link    : ""
    },
    {
        name    : "Slot Memory RAM",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Slot-memory-300x200.jpg",
        artikel : "Slot Memory RAM berfungsi untuk memasang memory card (RAM), Memory atau RAM ada beberapa Jenis seperti SDRAM,DDR1,DDR2,DDR3 dan DDR4.",
        link    : ""
    },
    {
        name    : "Port SATA",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Port-Sata-300x212.jpg",
        artikel : "SATA singkatan dari Serial ATA yang berfungsi untuk menghubungkan Media penyimpanan seperti hardisk atau SSD ke Motherboard.",
        link    : ""
    },
    {
        name    : "Slot PCI-E",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Slot-PCIE-300x163.jpg",
        artikel : "PCI Express (PCI–E/PCIex) adalah slot ekspansi yang didesain untuk menggantikan PCI bus yang lama. Banyak Motherboard mengadopsi PCI express karena PCI Express memiliki transfer data yang lebih cepat, terutama untuk keperluan grafis 3D.",
        link    : ""
    },
    {
        name    : "Southbridge",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/southbridge.jpg",
        artikel : "adalah chip dalam arsitektur chipset logika inti pada bagian utara motherboard PC. Fungsi dari Southbridge adalah mengatur kerja perangkat semacam IDE Controller, PCI Bus, ROM Bios, Keyboard & Mouse, USB, Eth. LAN, Modem dan fungsi I/O lainnya.",
        link    : ""
    },
    {
        name    : "LED",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Lampu-LED-300x194.jpg",
        artikel : "Power LED adalah lampu menyala jika terdapat standby power di Motherboard. LED ini bertindak sebagai reminder (pengingat) untuk mematikan system power sebelum menghidupkan atau mematikan komputer.",
        link    : ""
    },
    {
        name    : "Port PS/2",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/ps2_ports_atx-174x300.jpg",
        artikel : "Port PS/2 adalah konektor mini-DIN-6pin yang menghubungkan mouse ke komputer.",
        link    : ""
    },
    {
        name    : "Port Paralel",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Port-Paralel-300x225.jpg",
        artikel : "Fungsi dari port paralel adalah menyambungkan komputer dengan printer, scanner, sampai dengan menghubungkan komputer dengan perangkat tambahan tertentu yang dirancang menggunakan koneksi port paralel.",
        link    : ""
    },
    {
        name    : "Port Serial",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/serial-300x154.jpg",
        artikel : "Port Serial adalah Port asinkron yang ada pada komputer yang digunakan untuk menghubungkan perangkat serial ke komputer dan mampu mengirimkan sedikit demi sedikit.",
        link    : ""
    },
    {
        name    : "Port VGA",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/vga-300x225.jpg",
        artikel : "Port VGA adalah sebuah antarmuka analog pada kartu grafis yang umumnya digunakan untuk menghubungkan antara komputer dengan monitor.",
        link    : ""
    },
    {
        name    : "Port DVI",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/dvi-300x120.jpg",
        artikel : "Port DVI adalah interface video display yang dikembangkan oleh Digital Display Working Group (DDWG). Interface digital ini digunakan untuk menghubungkan sumber video, seperti kartu grafis ke perangkat layar, seperti monitor komputer.",
        link    : ""
    },
    {
        name    : "Port HDMI",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/hdmi.jpg",
        artikel : "Port HDMI adalah interface yang berfungsi untuk menghubungkan Display ke komputer, seperti monitor, TV, Proyektor, dll.",
        link    : ""
    },
    {
        name    : "Port USB",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/usb.jpg",
        artikel : "Port USB berfungsi untuk menghubungkan perangkat seperti mouse,keyboard, flashdisk, printer, dan perangkat lainnya.",
        link    : ""
    },
    {
        name    : "Battery CMOS",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/cmos-300x252.png",
        artikel : "sebuah baterai yang digunakan oleh BIOS untuk tetap aktif meski tanpa aliran listrik.",
        link    : ""
    },
    {
        name    : "Port RJ-45",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/rj45-300x203.png",
        artikel : "Port RJ-45 berfungsi untuk menghubungkan atau mengkoneksikan Internet pada komputer.",
        link    : ""
    },
    {
        name    : "Port Audio",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/audio.jpg",
        artikel : `Pada Port Audio: <br>
        -	Port Line in jack(biru): untuk menghubungkan sumber dari audio. <br>
        -	Port Line out jack(hijau): untuk menghubungkan ke headphone atau headset. <br>
        -   Port Mikrofon (pink): untuk menghubungkan mikrofon pada komputer.
        `,
        link    : ""
    },
    {
        name    : "Pin CPU Fan",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/cpu-fan-300x168.jpg",
        artikel : "Pin CPU Fan berfungsi untuk  memberikan daya ke kipas processor agar dia dapat menyala sehingga bisa mendinginkan processor.",
        link    : ""
    },
    {
        name    : "Pin Front Panel",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/f_panel.jpg",
        artikel : "Pin Front Panel ini berfungsi sebagai konektor dari casing ke motherboard sehingga kita bisa menyalakan komputer melalui casing.",
        link    : ""
    }
];

var temp = "";
var card = document.getElementById('list-komponen');
komponens.forEach(komponen => {
    temp = `${temp}
    <div>
    <div class="card card-1">
    <img class="card-img" src="${komponen.img}" alt="${komponen.name}">
    <a href="${komponen.link}">
    <h1>${komponen.name}</h1>
    </a>
    <p class="card-text">${komponen.artikel}</p>
    </div>
    </div>
    `
});

card.innerHTML = temp;



document.getElementsByClassName('card')[1].addEventListener('click', function(){
    document.getElementById('more').innerHTML = `
    <div >Power Supply Komputer merupakan komponen yang sangat penting pada komputer yang berfungsi untuk memberikan daya pada perangkat komputer yang membutuhkan tegangan. Pada kesempatan kali ini saya akan berbagi tentang jenis dan macam-macam konektor pada power supply komputer.<br>
        <br>
        Berikut adalam jenis-jenis konektor pada power supply dan fungsinya:<br>
        <br>
        <b>1. Konektor 20/24 Pin ATX motherboard</b><br>
        Konektor 20/24 Pin ATX berfungsi untuk memberikan daya pada motherboard. Konektor ini biasanya terdiri dari 2 buah konektor yaitu 20 pin dan 4 pin yang kemudian dijadikan 1 membentuk konektor 24 pin. konektor 20 pin digunakan untuk motherboard jenis lama sedangkan untuk konektor 24 pin biasanya digunakan untuk jenis motherboard model baru.<br>
        <div>
        <a href="//3.bp.blogspot.com/-PXWClE0rO04/UuRy7uvF4OI/AAAAAAAAArA/6wdAzjjS8GE/s1600/konektor+20+dan+24+pin+motherboard.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="240" src="//3.bp.blogspot.com/-PXWClE0rO04/UuRy7uvF4OI/AAAAAAAAArA/6wdAzjjS8GE/s1600/konektor+20+dan+24+pin+motherboard.jpg" width="320"></a></div>
        <br>
        <b>2. Konektor 4 pin 12V</b><br>
        Konektor 4/8 pin 12V berfungsi untuk memberikan tegangan untuk prosessor. Konektor ini digunakan mulai jenis komputer pentium IV keatas sampai sekarang.<br>
        <div>
        <a href="//4.bp.blogspot.com/-DnPs63HYLWc/UuR5eofwPYI/AAAAAAAAArQ/CLOZKSr9fWs/s1600/konektor+4+pin+12+V.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="//4.bp.blogspot.com/-DnPs63HYLWc/UuR5eofwPYI/AAAAAAAAArQ/CLOZKSr9fWs/s1600/konektor+4+pin+12+V.jpg"></a></div>
        <br>
        <b>3. Konektor 6 pin PCIe</b><br>
        Konektor jenis ini digunakan untuk memberikan daya tambahan pada perangkat VGA card atau kartu grafis yang berjenis PCIe karena VGA Card jenis PCIe membutuhkan daya yang lebih dibandingkan dengan VGA jenis lainnya.</div>
    
    
    
    
        <div >
            <div >
            <a href="//3.bp.blogspot.com/-E5YKGOEVayM/UuR5_aeEV2I/AAAAAAAAArY/j2KCwwrOTF4/s1600/Konektor+6+pin+PCIe.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="214" src="//3.bp.blogspot.com/-E5YKGOEVayM/UuR5_aeEV2I/AAAAAAAAArY/j2KCwwrOTF4/s1600/Konektor+6+pin+PCIe.jpg" width="320"></a></div>
            <br>
            <br>
            <b>4. Konektor 4 pin peripheral</b><br>
            konektor 4 pin peripheral berfungsi untuk memberikan daya pada peralatan atau komponen komputer seperti harddis, CR Room, kipas pendingin dan lain-lain.<br>
            <div >
            <a href="//3.bp.blogspot.com/-W-a_OplROI4/UuR6grH5FCI/AAAAAAAAArg/hzHR31dhT8g/s1600/Konektor+4+pin+peripheral.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="//3.bp.blogspot.com/-W-a_OplROI4/UuR6grH5FCI/AAAAAAAAArg/hzHR31dhT8g/s1600/Konektor+4+pin+peripheral.jpg"></a></div>
            <br>
            <b>5. Konektor Floppy</b><br>
            Konektor jenis ini berfungsi untuk memberikan daya dan tegangan pada komponen floppy disk.<br>
            <div >
            <a href="//2.bp.blogspot.com/-TUEh0Wbw-50/UuR6yxcv5rI/AAAAAAAAAro/paKUw3dSwcc/s1600/Konektor+Floppy.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="//2.bp.blogspot.com/-TUEh0Wbw-50/UuR6yxcv5rI/AAAAAAAAAro/paKUw3dSwcc/s1600/Konektor+Floppy.jpg"></a></div>
            <br>
            <b>6. Konektor SATA</b><br>
            Konektor jenis ini berfunsgi untuk memberikan daya kepada komponen komputer yang memiliki port SATA seperti CD Room, Harddisk dan komponen lainnya.<br>
            <div >
            <a href="//4.bp.blogspot.com/-RHW2zBKLKow/UuR7HTI1ORI/AAAAAAAAArw/cjT2HdYm_GA/s1600/konektor+SATA.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="//4.bp.blogspot.com/-RHW2zBKLKow/UuR7HTI1ORI/AAAAAAAAArw/cjT2HdYm_GA/s1600/konektor+SATA.jpg"></a></div>
            <br>
            Itulah macam-macam dan jenis konektor pada power supply dan fungsinya semoga bisa membantu ....</div>
    `
})

document.getElementsByClassName('card')[0].addEventListener('click', function(){
    document.getElementById('more').innerHTML = `
    <style>
        table {
        border-collapse: collapse;
        }
        table input[type=checkbox]:checked ~ td {
        background: gray;
        }
        th, td {
        transition: all 0.3s;
        }
        tr:nth-child(even) {
        background-color: #f2f2f2;
        }
    </style>
    
    
    
    
    <p>Tabel berikut berisi beberapa nama kode prosesor yang beredar.
    </p>
    <table class="wikitable">
        <tbody><tr>
        <th>Codename
        </th>
        <th>Nama Prosesor
        </th></tr>
        <tr>
        <td>X5
        </td>
        <td><a href="/w/index.php?title=AMD_5x86&amp;action=edit&amp;redlink=1" class="new" title="AMD 5x86 (halaman belum tersedia)">AMD 5x86</a>-133 (<a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>)
        </td></tr>
        <tr>
        <td>SSA5, Kryptonite
        </td>
        <td><a href="/wiki/AMD_K5" title="AMD K5">AMD K5</a> (PR75-PR100) (<a href="/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a> dan <a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>)
        </td></tr>
        <tr>
        <td>5k86
        </td>
        <td><a href="/wiki/AMD_K5" title="AMD K5">AMD K5</a> (PR120-PR200) (<a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>)
        </td></tr>
        <tr>
        <td>K6
        </td>
        <td><a href="/wiki/AMD_K6" title="AMD K6">AMD K6</a> asli. Dibatalkan (diganti dengan NexGen Nx686).
        </td></tr>
        <tr>
        <td>NX686
        </td>
        <td>NexGen K6 yang kemudian menjadi <a href="/wiki/AMD_K6" title="AMD K6">AMD K6</a> (<a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>)
        </td></tr>
        <tr>
        <td>Little Foot
        </td>
        <td><a href="/wiki/AMD_K6" title="AMD K6">AMD K6</a> 250 nanometer (<a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>)
        </td></tr>
        <tr>
        <td>Chompers
        </td>
        <td><a href="/wiki/AMD_K6" title="AMD K6">AMD K6-2</a> (<a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>, <a href="/wiki/Super7" title="Super7">Super7</a>)
        </td></tr>
        <tr>
        <td>Sharptooth
        </td>
        <td><a href="/wiki/AMD_K6" title="AMD K6">K6-3</a> (<a href="/wiki/Super7" title="Super7">Super7</a>)
        </td></tr>
        <tr>
        <td>Argon
        </td>
        <td>Prototipe <a href="/wiki/K7" class="mw-redirect" title="K7">K7</a>.
        </td></tr>
        <tr>
        <td>K7
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> (<a href="/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>)
        </td></tr>
        <tr>
        <td>K75
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> 180 nanometer (<a href="/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>)
        </td></tr>
        <tr>
        <td>K76
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> 180 nanometer dengan interkoneksi <a href="/wiki/Tembaga" title="Tembaga">Tembaga</a> (<a href="/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>)
        </td></tr>
        <tr>
        <td>K8
        </td>
        <td><a href="/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a>)
        </td></tr>
        <tr>
        <td>K8L
        </td>
        <td><a href="/w/index.php?title=AMD_Athlon_X2&amp;action=edit&amp;redlink=1" class="new" title="AMD Athlon X2 (halaman belum tersedia)">AMD Athlon X2</a>, 65 nanometer, AMD Athlon Quad FX
        </td></tr>
        <tr>
        <td>Thunderbird
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> (<a href="/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>, <a href="/wiki/Socket_A" title="Socket A">Socket A</a>)
        </td></tr>
        <tr>
        <td>Mustang
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> dengan cache Level 2 yang besar (lebih dari 1024 KB), untuk <a href="/wiki/Workstation" class="mw-redirect" title="Workstation">workstation</a> atau <a href="/wiki/Server" class="mw-redirect" title="Server">server</a>. Dibatalkan.
        </td></tr>
        <tr>
        <td>Corvette
        </td>
        <td>Mobile <a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a>, yang kemudian menjadi Palomino
        </td></tr>
        <tr>
        <td>Palomino
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon XP/MP</a> dan <a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon 4</a> 180 nanometer (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>)
        </td></tr>
        <tr>
        <td>Thoroughbred-A
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">Athlon XP/MP</a> 1700+ hingga 2100+ 130 nanometer (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>)
        </td></tr>
        <tr>
        <td>Thoroughbred-B
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon XP</a> 1700+ hingga 2400+; AMD Athlon XP 2600+ hingga 2800+ (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>); <a href="/wiki/AMD_Sempron" class="mw-redirect" title="AMD Sempron">AMD Sempron</a> 2200+ hingga 2800+ (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>) 130 nanometer
        </td></tr>
        <tr>
        <td>Barton
        </td>
        <td><a href="/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">Athlon XP/MP</a> dengan <a href="/wiki/Memori_cache" class="mw-redirect" title="Memori cache">cache</a> Level-2 sebesar 512KB (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>) 130 nanometer
        </td></tr>
        <tr>
        <td>Thorton
        </td>
        <td>Athlon XP dengan cache Level-2 sebesar 256KB (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>) 130 nanometer
        </td></tr>
        <tr>
        <td>Spitfire
        </td>
        <td><a href="/wiki/AMD_Duron" class="mw-redirect" title="AMD Duron">AMD Duron</a> [Socket A]
        </td></tr>
        <tr>
        <td>Camaro
        </td>
        <td>Nama kode sebelum Morgan
        </td></tr>
        <tr>
        <td>Morgan
        </td>
        <td><a href="/wiki/AMD_Duron" class="mw-redirect" title="AMD Duron">Mobile Duron</a> dan Duron Model 7 yang memiliki kecepatan 900MHz hingga 1.3GHz <a href="/wiki/Socket_A" title="Socket A">Socket A</a>
        </td></tr>
        <tr>
        <td>Applebred
        </td>
        <td><a href="/wiki/AMD_Duron" class="mw-redirect" title="AMD Duron">AMD Duron</a> 1.4GHz hingga 1.8GHz (<a href="/wiki/Socket_A" title="Socket A">Socket A</a>)
        </td></tr>
        <tr>
        <td>Appaloosa
        </td>
        <td>Morgan [Socket A] 130 nanometer
        </td></tr>
        <tr>
        <td>ClawHammer
        </td>
        <td><a href="/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a> dan <a href="/w/index.php?title=Socket_939&amp;action=edit&amp;redlink=1" class="new" title="Socket 939 (halaman belum tersedia)">Socket 939</a>) 130 nanometer
        </td></tr>
        <tr>
        <td>ClawHammer DP
        </td>
        <td>Nama kode awal untuk <a href="/wiki/AMD_Opteron" title="AMD Opteron">AMD Opteron</a> Dual processor (seri 2xx)
        </td></tr>
        <tr>
        <td>Newcastle
        </td>
        <td><a href="/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a> dan <a href="/w/index.php?title=Socket_939&amp;action=edit&amp;redlink=1" class="new" title="Socket 939 (halaman belum tersedia)">Socket 939</a>)
        </td></tr>
        <tr>
        <td>Winchester
        </td>
        <td><a href="/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="/w/index.php?title=Socket_939&amp;action=edit&amp;redlink=1" class="new" title="Socket 939 (halaman belum tersedia)">Socket 939</a>) 90 nanometer
        </td></tr>
        <tr>
        <td>San Diego
        </td>
        <td>Athlon 64 and Athlon 64 FX dengan set instruksi tambahan <a href="/wiki/SSE" title="SSE">SSE3</a> [Socket 939] 90 nanometer
        </td></tr>
        <tr>
        <td>Venice
        </td>
        <td>Athlon 64 dengan set instruksi tambahan <a href="/wiki/SSE" title="SSE">SSE3</a> [Socket 939] [Socket 939] 90 nanometer
        </td></tr>
        <tr>
        <td>Odessa
        </td>
        <td>Mobile Athlon 64 90 nanometer
        </td></tr>
        <tr>
        <td>Manchester
        </td>
        <td>Athlon 64 X2 dengan cache Level-2 sebesar 512KB dan set instruksi tambahan <a href="/wiki/SSE" title="SSE">SSE3</a> [Socket 939] 90 nanometer
        </td></tr>
        <tr>
        <td>Toledo
        </td>
        <td>Athlon 64 X2 dengan cache Level-2 sebesar 1024KB dengan set instruksi tambahan <a href="/wiki/SSE" title="SSE">SSE3</a> [Socket 939] 90 nanometer
        </td></tr>
        <tr>
        <td>SledgeHammer
        </td>
        <td>AMD Opteron dengan cache Level-2 yang besar <a href="/w/index.php?title=Socket_940&amp;action=edit&amp;redlink=1" class="new" title="Socket 940 (halaman belum tersedia)">Socket 940</a> 130 nanometer
        </td></tr>
        <tr>
        <td>Palermo
        </td>
        <td>AMD Sempron <a href="/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a> 90 nanometer
        </td></tr>
        <tr>
        <td>Paris
        </td>
        <td>AMD Sempron <a href="/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a>
        </td></tr>
        <tr>
        <td>Oakville
        </td>
        <td>Mobile Athlon 64 dan Sempron [Socket 754]
        </td></tr>
        <tr>
        <td>Windsor
        </td>
        <td>Athlon 64 X2 dan Athlon 64 FX-62 [Socket M2]
        </td></tr>
        <tr>
        <td>Orleans
        </td>
        <td>Athlon 64 [Socket M2]
        </td></tr>
        <tr>
        <td>Manila
        </td>
        <td>Sempron [Socket M2]
        </td></tr>
        <tr>
        <td>Venus
        </td>
        <td><a href="/wiki/AMD_Opteron" title="AMD Opteron">AMD Opteron</a> 90 nanometer, dengan set instruksi tambahan <a href="/wiki/SSE" title="SSE">SSE3</a> [Socket 940 atau 939]
        </td></tr>
        <tr>
        <td>P23
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 80486SX</a> (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P23S
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486SX</a> yang dilengkapi dengan fungsi manajemen daya (<i>SL-enhanced</i>) (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P23N
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 487SX</a> (coprocessor) (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>)
        </td></tr>
        <tr>
        <td>P4
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX</a> (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P4S
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX</a> yang dilengkapi dengan fungsi manajemen daya (<i>SL-enhanced</i>) (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P24
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX2</a> (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P24S
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX2</a> yang dilengkapi dengan fungsi manajemen daya (<i>SL-enhanced</i>) (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P24D
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX2</a> yang dilengkapi dengan cache memori <a href="/w/index.php?title=Write-back&amp;action=edit&amp;redlink=1" class="new" title="Write-back (halaman belum tersedia)">write-back</a> <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>
        </td></tr>
        <tr>
        <td>P24C
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX4</a> <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>
        </td></tr>
        <tr>
        <td>P23T
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX OverDrive</a> <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>
        </td></tr>
        <tr>
        <td>P4T
        </td>
        <td><a href="/wiki/Intel_80486" title="Intel 80486">Intel 486DX OverDrive</a> (<a href="/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P24T
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive</a> (<a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P24CT
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive</a> 3.3 <a href="/wiki/Volt" title="Volt">Volt</a> (<a href="/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
        </td></tr>
        <tr>
        <td>P5
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> generasi awal 60 MHz dan 66 MHz <a href="/wiki/Socket_4" class="mw-redirect" title="Socket 4">Socket 4</a>
        </td></tr>
        <tr>
        <td>P5T
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Pentium OverDrive</a> 120/133MHz <a href="/wiki/Socket_4" class="mw-redirect" title="Socket 4">Socket 4</a>
        </td></tr>
        <tr>
        <td>P54C
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> 75 MHz hingga 120 MHz (<a href="/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="/wiki/Socket_7" title="Socket 7">7</a>)
        </td></tr>
        <tr>
        <td>P54CQS
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> 120 MHz hingga 133 MHz (<a href="/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="/wiki/Socket_7" title="Socket 7">7</a>)
        </td></tr>
        <tr>
        <td>P54CS
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> 120 MHz hingga 200 MHz <a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>
        </td></tr>
        <tr>
        <td>P54CT(A)
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive</a> (<a href="/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="/wiki/Socket_7" title="Socket 7">7</a>)
        </td></tr>
        <tr>
        <td>P55C
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium MMX</a> <a href="/wiki/Socket_7" title="Socket 7">Socket 7</a>
        </td></tr>
        <tr>
        <td>P54CTB
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive MMX</a> (<a href="/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="/wiki/Socket_7" title="Socket 7">7</a>)
        </td></tr>
        <tr>
        <td>Tillamook
        </td>
        <td><a href="/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Mobile Pentium MMX</a>
        </td></tr>
        <tr>
        <td>P6
        </td>
        <td><a href="/wiki/Intel_Pentium_Pro" class="mw-redirect" title="Intel Pentium Pro">Intel Pentium Pro</a> <a href="/wiki/Socket_8" title="Socket 8">Socket 8</a>
        </td></tr>
        <tr>
        <td>P6T
        </td>
        <td><a href="/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II OverDrive</a> <a href="/wiki/Socket_8" title="Socket 8">Socket 8</a>
        </td></tr>
        <tr>
        <td>Klamath
        </td>
        <td><a href="/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II</a> 350 nanometer <a href="/wiki/Slot_1" title="Slot 1">Slot 1</a>
        </td></tr>
        <tr>
        <td>Deschutes
        </td>
        <td><a href="/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II</a> 250 nanometer <a href="/wiki/Slot_1" title="Slot 1">Slot 1</a>
        </td></tr>
        <tr>
        <td>Drake
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Pentium II Xeon</a> 250 nanometer <a href="/wiki/Slot_2" title="Slot 2">Slot 2</a>
        </td></tr>
        <tr>
        <td>Tonga
        </td>
        <td><a href="/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Mobile Pentium II</a>
        </td></tr>
        <tr>
        <td>Covington
        </td>
        <td><a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Celeron</a> (<a href="/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II</a> tanpa <a href="/wiki/Memori_cache" class="mw-redirect" title="Memori cache">cache</a> Level-2) <a href="/wiki/Slot_1" title="Slot 1">Slot 1</a>
        </td></tr>
        <tr>
        <td>Mendocino
        </td>
        <td><a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Celeron</a> dengan cache Level-2 on-die sebesar 128KB on-die, 250 nanometer (<a href="/wiki/Slot_1" title="Slot 1">Slot 1</a>, <a href="/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>)
        </td></tr>
        <tr>
        <td>Dixon
        </td>
        <td><a href="/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Mobile Pentium II</a> dengan cache Level-2 on-die sebesar 256KB
        </td></tr>
        <tr>
        <td>Katmai
        </td>
        <td><a href="/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> dengan tambahan instruksi <a href="/wiki/SSE" title="SSE">Streaming SIMD Extension (SSE)</a> 250 nanometer <a href="/wiki/Slot_1" title="Slot 1">Slot 1</a>
        </td></tr>
        <tr>
        <td>Tanner
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Pentium III Xeon</a> dengan tambahan instruksi SSE 250 nanometer <a href="/wiki/Slot_2" title="Slot 2">Slot 2</a>
        </td></tr>
        <tr>
        <td>Coppermine
        </td>
        <td><a href="/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> dengan cache Level-2 on-die sebesar 256KB, 180 nanometer (<a href="/wiki/Slot_1" title="Slot 1">Slot 1</a>, <a href="/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>)
        </td></tr>
        <tr>
        <td>Tualatin
        </td>
        <td><a href="/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> 130 nanometer <a href="/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>
        </td></tr>
        <tr>
        <td>Coppermine-T
        </td>
        <td><a href="/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> dengan tegangan Tualatin voltage 180 nanometer <a href="/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>
        </td></tr>
        <tr>
        <td>Cascades
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Pentium III Xeon</a> 180 nanometer <a href="/wiki/Slot_2" title="Slot 2">Slot 2</a>
        </td></tr>
        <tr>
        <td>Coppermine-128
        </td>
        <td><a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Celeron</a> dengan cache Level-2 sebesar 128KB 180 nanometer <a href="/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>
        </td></tr>
        <tr>
        <td>Timna
        </td>
        <td><a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Mobile Celeron</a> yang dilengkapi dengan <i><a href="/wiki/Dynamic_Random_Access_Memory" class="mw-redirect" title="Dynamic Random Access Memory">DRAM</a> controller</i>; dibatalkan.
        </td></tr>
        <tr>
        <td>P68
        </td>
        <td>Nama kode sebelum Willamette
        </td></tr>
        <tr>
        <td>Willamette
        </td>
        <td><a href="/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a> 180 nanometer <a href="/w/index.php?title=Socket_423&amp;action=edit&amp;redlink=1" class="new" title="Socket 423 (halaman belum tersedia)">Socket 423</a>, <a href="/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>
        </td></tr>
        <tr>
        <td>Northwood
        </td>
        <td><a href="/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a> 130 nanometer <a href="/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>
        </td></tr>
        <tr>
        <td>Prescott
        </td>
        <td><a href="/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a> dengan teknologi <a href="/wiki/Hyper-Threading" title="Hyper-Threading">Hyper-Threading</a>; <a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Celeron D</a> <a href="/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>/<a href="/w/index.php?title=Socket_775&amp;action=edit&amp;redlink=1" class="new" title="Socket 775 (halaman belum tersedia)">Socket 775</a>; <a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Celeron D</a> <a href="/w/index.php?title=Socket_775&amp;action=edit&amp;redlink=1" class="new" title="Socket 775 (halaman belum tersedia)">Socket 775</a>/<a href="/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>
        </td></tr>
        <tr>
        <td>Smithfield
        </td>
        <td><a href="/wiki/Intel_Pentium_D" class="mw-redirect" title="Intel Pentium D">Intel Pentium D</a>, <a href="/wiki/Intel_Pentium_Extreme_Edition" class="mw-redirect" title="Intel Pentium Extreme Edition">Intel Pentium Extreme Edition</a> 90 nanometer <a href="/w/index.php?title=Socket_775&amp;action=edit&amp;redlink=1" class="new" title="Socket 775 (halaman belum tersedia)">Socket 775</a>
        </td></tr>
        <tr>
        <td>Cedar-Mill
        </td>
        <td><a href="/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a>, dengan tambahan instruksi <i>Intel Enhanced SpeedStep Technology</i> 65 nanometer
        </td></tr>
        <tr>
        <td>Presler
        </td>
        <td><a href="/wiki/Intel_Pentium_D" class="mw-redirect" title="Intel Pentium D">Intel Pentium D</a> 65 nanometer
        </td></tr>
        <tr>
        <td>Conroe
        </td>
        <td><a href="/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2 Duo</a>, prosesor dual core, 65 nanometer, dengan cache Level-2 4096 KB
        </td></tr>
        <tr>
        <td>Allendale
        </td>
        <td><a href="/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2 Duo</a>, prosesor dual core, 65 nanometer, dengan cache Level 2 2048 KB
        </td></tr>
        <tr>
        <td>Kentsfield
        </td>
        <td><a href="/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2 Extreme</a>, prosesor quad core, 65 nanometer
        </td></tr>
        <tr>
        <td>Penryn
        </td>
        <td><a href="/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2</a> 45 nanometer
        </td></tr>
        <tr>
        <td>Nehalem
        </td>
        <td><a href="/wiki/Intel_Core_i7" title="Intel Core i7">Intel Core i7</a> prosesor terbaru Intel yang saat ini menggantikan teknologi Intel Core yang memiliki kinerja super cepat salah satu fitur teknologi yang dibawa adalah <i>Quick Path</i> mengantikan teknologi Front Side Bus dan masih banyak fitur baru lainnya
        </td></tr>
        <tr>
        <td>Banias
        </td>
        <td><a href="/wiki/Intel_Pentium_M" class="mw-redirect" title="Intel Pentium M">Intel Pentium M</a> dengan cache Level-2 1024KB
        </td></tr>
        <tr>
        <td>Yonah
        </td>
        <td><a href="/wiki/Intel_Pentium_M" class="mw-redirect" title="Intel Pentium M">Intel Pentium M</a> (<i>dual-core</i>) dan <a href="/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Celeron M</a> (<i>single core</i>)
        </td></tr>
        <tr>
        <td>Merom
        </td>
        <td>Yonah dengan tambahan instruksi <a href="/w/index.php?title=EM64T&amp;action=edit&amp;redlink=1" class="new" title="EM64T (halaman belum tersedia)">EM64T</a>
        </td></tr>
        <tr>
        <td>Foster
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon DP</a> [Socket 603]
        </td></tr>
        <tr>
        <td>Foster MP
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon MP</a> [Socket 603]
        </td></tr>
        <tr>
        <td>Prestonia
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon DP</a> 130 nanometer [Socket 603]
        </td></tr>
        <tr>
        <td>Gallatin
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon MP</a> 130 nanometer [Socket 603]; Pentium 4 Extreme Edition [Socket 478]
        </td></tr>
        <tr>
        <td>Nocona
        </td>
        <td><a href="/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon</a> 90 nanometer [Socket 603]; Pentium 4 Extreme Edition [Socket 478 and Socket 775]
        </td></tr>
        <tr>
        <td>Dothan
        </td>
        <td><a href="/wiki/Intel_Pentium_M" class="mw-redirect" title="Intel Pentium M">Intel Pentium M</a> dengan cache Level-2 2048KB 90 nanometer [Socket 479]
        </td></tr>
        <tr>
        <td>P7
        </td>
        <td>Nama kode sebelum Merced
        </td></tr>
        <tr>
        <td>Merced
        </td>
        <td><a href="/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium</a> [PAC 418]
        </td></tr>
        <tr>
        <td>McKinley
        </td>
        <td><a href="/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium 2</a> dengan cache Level-3 on-die sebesar 3MB [PAC 418]
        </td></tr>
        <tr>
        <td>Madison
        </td>
        <td><a href="/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium 2</a> 130 nanometer [PAC 418]
        </td></tr>
        <tr>
        <td>Deerfield
        </td>
        <td>Versi murah dari Madison (tanpa Level-3 cache)
        </td></tr>
        <tr>
        <td>Montecito
        </td>
        <td>Madison dengan proses manufaktur 90 nanometer
        </td></tr>
        <tr>
        <td>Shavano
        </td>
        <td><a href="/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium</a> dengan proses manufaktur 65 nanometer
        </td></tr>
        </tbody></table>`
})