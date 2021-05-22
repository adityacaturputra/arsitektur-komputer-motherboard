const komponens = [
    {
        name    : "Slot Processor",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Socket-Processor-300x229.jpg",
        artikel : "Slot Processor adalah tempat peletakan prosesor pada motherboard. Dudukan ini berbentuk segi empat dengan lubang-lubang kecil tempat tertancapnya kaki-kaki (pin-pin) prosesor yang tersusun membentuk matriks 2 dimensi. Yang berfungsi untuk meletakan processor ke motherboard.",
        link    : "#more-link",
        moreArtikel : `           
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
                    <td><a href="https://id.wikipedia.org/w/index.php?title=AMD_5x86&amp;action=edit&amp;redlink=1" class="new" title="AMD 5x86 (halaman belum tersedia)">AMD 5x86</a>-133 (<a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>)
                    </td></tr>
                    <tr>
                    <td>SSA5, Kryptonite
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_K5" title="AMD K5">AMD K5</a> (PR75-PR100) (<a href="https://id.wikipedia.org/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a> dan <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>)
                    </td></tr>
                    <tr>
                    <td>5k86
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_K5" title="AMD K5">AMD K5</a> (PR120-PR200) (<a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>)
                    </td></tr>
                    <tr>
                    <td>K6
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_K6" title="AMD K6">AMD K6</a> asli. Dibatalkan (diganti dengan NexGen Nx686).
                    </td></tr>
                    <tr>
                    <td>NX686
                    </td>
                    <td>NexGen K6 yang kemudian menjadi <a href="https://id.wikipedia.org/wiki/AMD_K6" title="AMD K6">AMD K6</a> (<a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>)
                    </td></tr>
                    <tr>
                    <td>Little Foot
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_K6" title="AMD K6">AMD K6</a> 250 nanometer (<a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>)
                    </td></tr>
                    <tr>
                    <td>Chompers
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_K6" title="AMD K6">AMD K6-2</a> (<a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>, <a href="https://id.wikipedia.org/wiki/Super7" title="Super7">Super7</a>)
                    </td></tr>
                    <tr>
                    <td>Sharptooth
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_K6" title="AMD K6">K6-3</a> (<a href="https://id.wikipedia.org/wiki/Super7" title="Super7">Super7</a>)
                    </td></tr>
                    <tr>
                    <td>Argon
                    </td>
                    <td>Prototipe <a href="https://id.wikipedia.org/wiki/K7" class="mw-redirect" title="K7">K7</a>.
                    </td></tr>
                    <tr>
                    <td>K7
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> (<a href="https://id.wikipedia.org/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>)
                    </td></tr>
                    <tr>
                    <td>K75
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> 180 nanometer (<a href="https://id.wikipedia.org/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>)
                    </td></tr>
                    <tr>
                    <td>K76
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> 180 nanometer dengan interkoneksi <a href="https://id.wikipedia.org/wiki/Tembaga" title="Tembaga">Tembaga</a> (<a href="https://id.wikipedia.org/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>)
                    </td></tr>
                    <tr>
                    <td>K8
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="https://id.wikipedia.org/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a>)
                    </td></tr>
                    <tr>
                    <td>K8L
                    </td>
                    <td><a href="https://id.wikipedia.org/w/index.php?title=AMD_Athlon_X2&amp;action=edit&amp;redlink=1" class="new" title="AMD Athlon X2 (halaman belum tersedia)">AMD Athlon X2</a>, 65 nanometer, AMD Athlon Quad FX
                    </td></tr>
                    <tr>
                    <td>Thunderbird
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> (<a href="https://id.wikipedia.org/w/index.php?title=Slot_A&amp;action=edit&amp;redlink=1" class="new" title="Slot A (halaman belum tersedia)">Slot A</a>, <a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>)
                    </td></tr>
                    <tr>
                    <td>Mustang
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a> dengan cache Level 2 yang besar (lebih dari 1024 KB), untuk <a href="https://id.wikipedia.org/wiki/Workstation" class="mw-redirect" title="Workstation">workstation</a> atau <a href="https://id.wikipedia.org/wiki/Server" class="mw-redirect" title="Server">server</a>. Dibatalkan.
                    </td></tr>
                    <tr>
                    <td>Corvette
                    </td>
                    <td>Mobile <a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon</a>, yang kemudian menjadi Palomino
                    </td></tr>
                    <tr>
                    <td>Palomino
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon XP/MP</a> dan <a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon 4</a> 180 nanometer (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>)
                    </td></tr>
                    <tr>
                    <td>Thoroughbred-A
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">Athlon XP/MP</a> 1700+ hingga 2100+ 130 nanometer (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>)
                    </td></tr>
                    <tr>
                    <td>Thoroughbred-B
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">AMD Athlon XP</a> 1700+ hingga 2400+; AMD Athlon XP 2600+ hingga 2800+ (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>); <a href="https://id.wikipedia.org/wiki/AMD_Sempron" class="mw-redirect" title="AMD Sempron">AMD Sempron</a> 2200+ hingga 2800+ (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>) 130 nanometer
                    </td></tr>
                    <tr>
                    <td>Barton
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon" class="mw-redirect" title="AMD Athlon">Athlon XP/MP</a> dengan <a href="https://id.wikipedia.org/wiki/Memori_cache" class="mw-redirect" title="Memori cache">cache</a> Level-2 sebesar 512KB (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>) 130 nanometer
                    </td></tr>
                    <tr>
                    <td>Thorton
                    </td>
                    <td>Athlon XP dengan cache Level-2 sebesar 256KB (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>) 130 nanometer
                    </td></tr>
                    <tr>
                    <td>Spitfire
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Duron" class="mw-redirect" title="AMD Duron">AMD Duron</a> [Socket A]
                    </td></tr>
                    <tr>
                    <td>Camaro
                    </td>
                    <td>Nama kode sebelum Morgan
                    </td></tr>
                    <tr>
                    <td>Morgan
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Duron" class="mw-redirect" title="AMD Duron">Mobile Duron</a> dan Duron Model 7 yang memiliki kecepatan 900MHz hingga 1.3GHz <a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>
                    </td></tr>
                    <tr>
                    <td>Applebred
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Duron" class="mw-redirect" title="AMD Duron">AMD Duron</a> 1.4GHz hingga 1.8GHz (<a href="https://id.wikipedia.org/wiki/Socket_A" title="Socket A">Socket A</a>)
                    </td></tr>
                    <tr>
                    <td>Appaloosa
                    </td>
                    <td>Morgan [Socket A] 130 nanometer
                    </td></tr>
                    <tr>
                    <td>ClawHammer
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="https://id.wikipedia.org/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a> dan <a href="https://id.wikipedia.org/w/index.php?title=Socket_939&amp;action=edit&amp;redlink=1" class="new" title="Socket 939 (halaman belum tersedia)">Socket 939</a>) 130 nanometer
                    </td></tr>
                    <tr>
                    <td>ClawHammer DP
                    </td>
                    <td>Nama kode awal untuk <a href="https://id.wikipedia.org/wiki/AMD_Opteron" title="AMD Opteron">AMD Opteron</a> Dual processor (seri 2xx)
                    </td></tr>
                    <tr>
                    <td>Newcastle
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="https://id.wikipedia.org/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a> dan <a href="https://id.wikipedia.org/w/index.php?title=Socket_939&amp;action=edit&amp;redlink=1" class="new" title="Socket 939 (halaman belum tersedia)">Socket 939</a>)
                    </td></tr>
                    <tr>
                    <td>Winchester
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Athlon_64" class="mw-redirect" title="AMD Athlon 64">AMD Athlon 64</a> (<a href="https://id.wikipedia.org/w/index.php?title=Socket_939&amp;action=edit&amp;redlink=1" class="new" title="Socket 939 (halaman belum tersedia)">Socket 939</a>) 90 nanometer
                    </td></tr>
                    <tr>
                    <td>San Diego
                    </td>
                    <td>Athlon 64 and Athlon 64 FX dengan set instruksi tambahan <a href="https://id.wikipedia.org/wiki/SSE" title="SSE">SSE3</a> [Socket 939] 90 nanometer
                    </td></tr>
                    <tr>
                    <td>Venice
                    </td>
                    <td>Athlon 64 dengan set instruksi tambahan <a href="https://id.wikipedia.org/wiki/SSE" title="SSE">SSE3</a> [Socket 939] [Socket 939] 90 nanometer
                    </td></tr>
                    <tr>
                    <td>Odessa
                    </td>
                    <td>Mobile Athlon 64 90 nanometer
                    </td></tr>
                    <tr>
                    <td>Manchester
                    </td>
                    <td>Athlon 64 X2 dengan cache Level-2 sebesar 512KB dan set instruksi tambahan <a href="https://id.wikipedia.org/wiki/SSE" title="SSE">SSE3</a> [Socket 939] 90 nanometer
                    </td></tr>
                    <tr>
                    <td>Toledo
                    </td>
                    <td>Athlon 64 X2 dengan cache Level-2 sebesar 1024KB dengan set instruksi tambahan <a href="https://id.wikipedia.org/wiki/SSE" title="SSE">SSE3</a> [Socket 939] 90 nanometer
                    </td></tr>
                    <tr>
                    <td>SledgeHammer
                    </td>
                    <td>AMD Opteron dengan cache Level-2 yang besar <a href="https://id.wikipedia.org/w/index.php?title=Socket_940&amp;action=edit&amp;redlink=1" class="new" title="Socket 940 (halaman belum tersedia)">Socket 940</a> 130 nanometer
                    </td></tr>
                    <tr>
                    <td>Palermo
                    </td>
                    <td>AMD Sempron <a href="https://id.wikipedia.org/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a> 90 nanometer
                    </td></tr>
                    <tr>
                    <td>Paris
                    </td>
                    <td>AMD Sempron <a href="https://id.wikipedia.org/w/index.php?title=Socket_754&amp;action=edit&amp;redlink=1" class="new" title="Socket 754 (halaman belum tersedia)">Socket 754</a>
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
                    <td><a href="https://id.wikipedia.org/wiki/AMD_Opteron" title="AMD Opteron">AMD Opteron</a> 90 nanometer, dengan set instruksi tambahan <a href="https://id.wikipedia.org/wiki/SSE" title="SSE">SSE3</a> [Socket 940 atau 939]
                    </td></tr>
                    <tr>
                    <td>P23
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 80486SX</a> (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P23S
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486SX</a> yang dilengkapi dengan fungsi manajemen daya (<i>SL-enhanced</i>) (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P23N
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 487SX</a> (coprocessor) (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>)
                    </td></tr>
                    <tr>
                    <td>P4
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX</a> (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P4S
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX</a> yang dilengkapi dengan fungsi manajemen daya (<i>SL-enhanced</i>) (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P24
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX2</a> (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P24S
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX2</a> yang dilengkapi dengan fungsi manajemen daya (<i>SL-enhanced</i>) (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P24D
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX2</a> yang dilengkapi dengan cache memori <a href="https://id.wikipedia.org/w/index.php?title=Write-back&amp;action=edit&amp;redlink=1" class="new" title="Write-back (halaman belum tersedia)">write-back</a> <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>
                    </td></tr>
                    <tr>
                    <td>P24C
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX4</a> <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>
                    </td></tr>
                    <tr>
                    <td>P23T
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX OverDrive</a> <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">Socket 3</a>
                    </td></tr>
                    <tr>
                    <td>P4T
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_80486" title="Intel 80486">Intel 486DX OverDrive</a> (<a href="https://id.wikipedia.org/wiki/Socket_1" class="mw-redirect" title="Socket 1">Socket 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P24T
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive</a> (<a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P24CT
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive</a> 3.3 <a href="https://id.wikipedia.org/wiki/Volt" title="Volt">Volt</a> (<a href="https://id.wikipedia.org/wiki/Socket_2" class="mw-redirect" title="Socket 2">2</a>, <a href="https://id.wikipedia.org/wiki/Socket_3" class="mw-redirect" title="Socket 3">3</a>)
                    </td></tr>
                    <tr>
                    <td>P5
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> generasi awal 60 MHz dan 66 MHz <a href="https://id.wikipedia.org/wiki/Socket_4" class="mw-redirect" title="Socket 4">Socket 4</a>
                    </td></tr>
                    <tr>
                    <td>P5T
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Pentium OverDrive</a> 120/133MHz <a href="https://id.wikipedia.org/wiki/Socket_4" class="mw-redirect" title="Socket 4">Socket 4</a>
                    </td></tr>
                    <tr>
                    <td>P54C
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> 75 MHz hingga 120 MHz (<a href="https://id.wikipedia.org/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">7</a>)
                    </td></tr>
                    <tr>
                    <td>P54CQS
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> 120 MHz hingga 133 MHz (<a href="https://id.wikipedia.org/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">7</a>)
                    </td></tr>
                    <tr>
                    <td>P54CS
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium</a> 120 MHz hingga 200 MHz <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>
                    </td></tr>
                    <tr>
                    <td>P54CT(A)
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive</a> (<a href="https://id.wikipedia.org/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">7</a>)
                    </td></tr>
                    <tr>
                    <td>P55C
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium MMX</a> <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">Socket 7</a>
                    </td></tr>
                    <tr>
                    <td>P54CTB
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Pentium OverDrive MMX</a> (<a href="https://id.wikipedia.org/wiki/Socket_5" class="mw-redirect" title="Socket 5">Socket 5</a>, <a href="https://id.wikipedia.org/wiki/Socket_7" title="Socket 7">7</a>)
                    </td></tr>
                    <tr>
                    <td>Tillamook
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium" class="mw-redirect" title="Intel Pentium">Intel Mobile Pentium MMX</a>
                    </td></tr>
                    <tr>
                    <td>P6
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_Pro" class="mw-redirect" title="Intel Pentium Pro">Intel Pentium Pro</a> <a href="https://id.wikipedia.org/wiki/Socket_8" title="Socket 8">Socket 8</a>
                    </td></tr>
                    <tr>
                    <td>P6T
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II OverDrive</a> <a href="https://id.wikipedia.org/wiki/Socket_8" title="Socket 8">Socket 8</a>
                    </td></tr>
                    <tr>
                    <td>Klamath
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II</a> 350 nanometer <a href="https://id.wikipedia.org/wiki/Slot_1" title="Slot 1">Slot 1</a>
                    </td></tr>
                    <tr>
                    <td>Deschutes
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II</a> 250 nanometer <a href="https://id.wikipedia.org/wiki/Slot_1" title="Slot 1">Slot 1</a>
                    </td></tr>
                    <tr>
                    <td>Drake
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Pentium II Xeon</a> 250 nanometer <a href="https://id.wikipedia.org/wiki/Slot_2" title="Slot 2">Slot 2</a>
                    </td></tr>
                    <tr>
                    <td>Tonga
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Mobile Pentium II</a>
                    </td></tr>
                    <tr>
                    <td>Covington
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Celeron</a> (<a href="https://id.wikipedia.org/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Pentium II</a> tanpa <a href="https://id.wikipedia.org/wiki/Memori_cache" class="mw-redirect" title="Memori cache">cache</a> Level-2) <a href="https://id.wikipedia.org/wiki/Slot_1" title="Slot 1">Slot 1</a>
                    </td></tr>
                    <tr>
                    <td>Mendocino
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Celeron</a> dengan cache Level-2 on-die sebesar 128KB on-die, 250 nanometer (<a href="https://id.wikipedia.org/wiki/Slot_1" title="Slot 1">Slot 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>)
                    </td></tr>
                    <tr>
                    <td>Dixon
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_II" class="mw-redirect" title="Intel Pentium II">Intel Mobile Pentium II</a> dengan cache Level-2 on-die sebesar 256KB
                    </td></tr>
                    <tr>
                    <td>Katmai
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> dengan tambahan instruksi <a href="https://id.wikipedia.org/wiki/SSE" title="SSE">Streaming SIMD Extension (SSE)</a> 250 nanometer <a href="https://id.wikipedia.org/wiki/Slot_1" title="Slot 1">Slot 1</a>
                    </td></tr>
                    <tr>
                    <td>Tanner
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Pentium III Xeon</a> dengan tambahan instruksi SSE 250 nanometer <a href="https://id.wikipedia.org/wiki/Slot_2" title="Slot 2">Slot 2</a>
                    </td></tr>
                    <tr>
                    <td>Coppermine
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> dengan cache Level-2 on-die sebesar 256KB, 180 nanometer (<a href=https://id.wikipedia.org"/wiki/Slot_1" title="Slot 1">Slot 1</a>, <a href="https://id.wikipedia.org/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>)
                    </td></tr>
                    <tr>
                    <td>Tualatin
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> 130 nanometer <a href="https://id.wikipedia.org/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>
                    </td></tr>
                    <tr>
                    <td>Coppermine-T
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_III" class="mw-redirect" title="Intel Pentium III">Intel Pentium III</a> dengan tegangan Tualatin voltage 180 nanometer <a href="https://id.wikipedia.org/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>
                    </td></tr>
                    <tr>
                    <td>Cascades
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Pentium III Xeon</a> 180 nanometer <a href="https://id.wikipedia.org/wiki/Slot_2" title="Slot 2">Slot 2</a>
                    </td></tr>
                    <tr>
                    <td>Coppermine-128
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Celeron</a> dengan cache Level-2 sebesar 128KB 180 nanometer <a href="https://id.wikipedia.org/wiki/Socket_370" class="mw-redirect" title="Socket 370">Socket 370</a>
                    </td></tr>
                    <tr>
                    <td>Timna
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Intel Mobile Celeron</a> yang dilengkapi dengan <i><a href="https://id.wikipedia.org/wiki/Dynamic_Random_Access_Memory" class="mw-redirect" title="Dynamic Random Access Memory">DRAM</a> controller</i>; dibatalkan.
                    </td></tr>
                    <tr>
                    <td>P68
                    </td>
                    <td>Nama kode sebelum Willamette
                    </td></tr>
                    <tr>
                    <td>Willamette
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a> 180 nanometer <a href="https://id.wikipedia.org/w/index.php?title=Socket_423&amp;action=edit&amp;redlink=1" class="new" title="Socket 423 (halaman belum tersedia)">Socket 423</a>, <a href="https://id.wikipedia.org/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>
                    </td></tr>
                    <tr>
                    <td>Northwood
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a> 130 nanometer <a href="https://id.wikipedia.org/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>
                    </td></tr>
                    <tr>
                    <td>Prescott
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a> dengan teknologi <a href="https://id.wikipedia.org/wiki/Hyper-Threading" title="Hyper-Threading">Hyper-Threading</a>; <a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Celeron D</a> <a href=https://id.wikipedia.org"/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>/<a href="https://id.wikipedia.org/w/index.php?title=Socket_775&amp;action=edit&amp;redlink=1" class="new" title="Socket 775 (halaman belum tersedia)">Socket 775</a>; <a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Celeron D</a> <a href="https://id.wikipedia.org/w/index.php?title=Socket_775&amp;action=edit&amp;redlink=1" class="new" title="Socket 775 (halaman belum tersedia)">Socket 775</a>/<a href="https://id.wikipedia.org/w/index.php?title=Socket_478&amp;action=edit&amp;redlink=1" class="new" title="Socket 478 (halaman belum tersedia)">Socket 478</a>
                    </td></tr>
                    <tr>
                    <td>Smithfield
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_D" class="mw-redirect" title="Intel Pentium D">Intel Pentium D</a>, <a href="https://id.wikipedia.org/wiki/Intel_Pentium_Extreme_Edition" class="mw-redirect" title="Intel Pentium Extreme Edition">Intel Pentium Extreme Edition</a> 90 nanometer <a href="https://id.wikipedia.org/w/index.php?title=Socket_775&amp;action=edit&amp;redlink=1" class="new" title="Socket 775 (halaman belum tersedia)">Socket 775</a>
                    </td></tr>
                    <tr>
                    <td>Cedar-Mill
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_4" class="mw-redirect" title="Intel Pentium 4">Intel Pentium 4</a>, dengan tambahan instruksi <i>Intel Enhanced SpeedStep Technology</i> 65 nanometer
                    </td></tr>
                    <tr>
                    <td>Presler
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_D" class="mw-redirect" title="Intel Pentium D">Intel Pentium D</a> 65 nanometer
                    </td></tr>
                    <tr>
                    <td>Conroe
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2 Duo</a>, prosesor dual core, 65 nanometer, dengan cache Level-2 4096 KB
                    </td></tr>
                    <tr>
                    <td>Allendale
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2 Duo</a>, prosesor dual core, 65 nanometer, dengan cache Level 2 2048 KB
                    </td></tr>
                    <tr>
                    <td>Kentsfield
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2 Extreme</a>, prosesor quad core, 65 nanometer
                    </td></tr>
                    <tr>
                    <td>Penryn
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Core_2" title="Intel Core 2">Intel Core 2</a> 45 nanometer
                    </td></tr>
                    <tr>
                    <td>Nehalem
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Core_i7" title="Intel Core i7">Intel Core i7</a> prosesor terbaru Intel yang saat ini menggantikan teknologi Intel Core yang memiliki kinerja super cepat salah satu fitur teknologi yang dibawa adalah <i>Quick Path</i> mengantikan teknologi Front Side Bus dan masih banyak fitur baru lainnya
                    </td></tr>
                    <tr>
                    <td>Banias
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_M" class="mw-redirect" title="Intel Pentium M">Intel Pentium M</a> dengan cache Level-2 1024KB
                    </td></tr>
                    <tr>
                    <td>Yonah
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_M" class="mw-redirect" title="Intel Pentium M">Intel Pentium M</a> (<i>dual-core</i>) dan <a href="https://id.wikipedia.org/wiki/Intel_Celeron" class="mw-redirect" title="Intel Celeron">Celeron M</a> (<i>single core</i>)
                    </td></tr>
                    <tr>
                    <td>Merom
                    </td>
                    <td>Yonah dengan tambahan instruksi <a href="https://id.wikipedia.org/w/index.php?title=EM64T&amp;action=edit&amp;redlink=1" class="new" title="EM64T (halaman belum tersedia)">EM64T</a>
                    </td></tr>
                    <tr>
                    <td>Foster
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon DP</a> [Socket 603]
                    </td></tr>
                    <tr>
                    <td>Foster MP
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon MP</a> [Socket 603]
                    </td></tr>
                    <tr>
                    <td>Prestonia
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon DP</a> 130 nanometer [Socket 603]
                    </td></tr>
                    <tr>
                    <td>Gallatin
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon MP</a> 130 nanometer [Socket 603]; Pentium 4 Extreme Edition [Socket 478]
                    </td></tr>
                    <tr>
                    <td>Nocona
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Xeon" title="Intel Xeon">Intel Xeon</a> 90 nanometer [Socket 603]; Pentium 4 Extreme Edition [Socket 478 and Socket 775]
                    </td></tr>
                    <tr>
                    <td>Dothan
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Pentium_M" class="mw-redirect" title="Intel Pentium M">Intel Pentium M</a> dengan cache Level-2 2048KB 90 nanometer [Socket 479]
                    </td></tr>
                    <tr>
                    <td>P7
                    </td>
                    <td>Nama kode sebelum Merced
                    </td></tr>
                    <tr>
                    <td>Merced
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium</a> [PAC 418]
                    </td></tr>
                    <tr>
                    <td>McKinley
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium 2</a> dengan cache Level-3 on-die sebesar 3MB [PAC 418]
                    </td></tr>
                    <tr>
                    <td>Madison
                    </td>
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium 2</a> 130 nanometer [PAC 418]
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
                    <td><a href="https://id.wikipedia.org/wiki/Intel_Itanium" title="Intel Itanium">Intel Itanium</a> dengan proses manufaktur 65 nanometer
                    </td></tr>
                    </tbody></table>
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/eJn-qPHtfzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    },
    {
        name    : "Konektor power",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/ATX-Power-300x270.jpg",
        artikel : "konektor power pada motherboard adalah Pin yang menyambungkan motherboard dengan power supply di casing sebuah komputer. Agar si motherboard menerima daya dari power supply.",
        link    : "#more-link",
        moreArtikel : `
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
            <iframe width="400" height="300" src="https://www.youtube.com/embed/6cNzPvjjsL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        `
    },
    {
        name    : "Northbridge",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Northbridge.jpg",
        artikel : "Northbridge adalah komponen yang menghubungkan procossor (CPU) ke sistem memori dan graphics controller (AGP dan PCI Express) melalui bus berkecepatan tinggi, dan ke southbridge. Fungsi dari Northbridge sendiri yaitu menjembatani arus data di sekitar main Memory, Prosesor, Front Side Bus dan AGP Bus juga mengatur kerja power management.",
        link    : "#more-link",
        moreArtikel : `
    
        <img width="300" src="https://4.bp.blogspot.com/-wyNuYskmL_s/WJK3P8RCniI/AAAAAAAAACI/U-jjFsrE0PgJiXzUBVZ_LFyk8RRPLhzlQCLcB/s1600/I815EP.png" alt="Northbridge">
        <p>
            Suatu northbridge secara umum bisa dikatakan lebih mempengaruhi kinerja mainboard dibandingkan dengan southbridge. Hal ini disebabkan northbridge ini bisa dibilang menanganprosesor, memori utama, kartu grafis, dan bahkan southbridge. Karena fungsinya yang menghubungkan beberapa komponen di atas itulah, northbridge sangat mempengaruhi kinerja darsistem.
        </p> <br>
        <p>
            Northbridge disebut juga dengan nama memory controller hub (MCH). Perusahaan pembuat chipset yang menggunakan nama sebutan MCH ini adalah Intel. Sedangkan AMD, VIA daperusahaan lainnya lebih banyak menggunakan nama sebutan northbridge. Northbridge memiliki peran khusus yang sangat penting dalam suatu sistem motherboard.
        </p> <br>
        <p>
            Northbridge adalah bagian yang menghubungkan prosesor (CPU) ke sistem memori dan graphics controller (AGP dan PCI Express) melalui bus berkecepatan tinggi, dan ke southbridgeDengan demikian, Northbridge bertugas mengendalikan/ menangani komunikasi antara CPU, RAM, AGP atau PCI Express, dan southbridge. Bahkan pada sebagian chipset, di dalanorthbridge juga berisi integrated video controller (pengendali video terintegrasi). Pada sistem Intel istilah integrated video controller ini disebut dengan nama Graphics anMemory Controller Hub (GMCH). Northbridge juga berperan menentukan jumlah, type dan kecepatan CPU yang dapat dipasangkan pada motherboard, termasuk menentukan jumlah, kecepatadan type RAM yang dapat digunakan. Setiap jenis chipset, kebanyakan dirancang hanya untuk mendukung seri prosesor tertentu saja, dengan jumlah RAM yang dapat dipasangkabervariasi bergantung type prosesor dan desain motherboardnya sendiri.
        </p> <br>
        <p>
            Prosesor-prosesor terbaru cukup sering memerlukan northbridge yang baru juga agar dapat bekerja dengan baik. Baru-baru ini dual kanal memori utama menjadi tren. Kemampuan untumendukung dual kanal memori utama ini jelas ditentukan oleh northbridge yang digunakan. Selain masalah dual kanal, masalah mengenai frekuensi kerja dan timing dari memori utamjuga dipengaruhi oleh northbridge ini. Wajar saja karena controller memori tentunya berada pada northbridge tersebut. Untuk prosesor, northbridge ini jelas mempengaruhi FS(Front Side Bus) yang didukung dan fitur yang didukung (misalnya Hyper-Threading), di samping hal-hal lain tentunya. Jenis memori utama dan prosesor yang didukung jugditentukan oleh northbridge ini. Hal yang sama juga berlaku untuk kartu grafis. Kartu grafis masa kini bisa dikatakan hampir semuanya menggunakan interface AGP. Dukungan akaversi AGP yang digunakan jelas diberikan oleh northbridge. Sebelum adanya AGP, kartu grafis menggunakan interface PCI dan tidak dihubungkan secara langsung dengan northbridge.
        </p> <br>
        <p>
            Northbridge berperan penting dalam seberapa jauh komputer dapat overclocked , karena frekuensi biasanya digunakan sebagai dasar untuk CPU untuk mendirikan frekuensi operassendiri . Chip ini biasanya akan lebih panas seperti kecepatan prosesor menjadi lebih cepat , karna itu membutuhkan pendingin yang lebih . Ada batas untuk overclocking CPU seperti sirkuit digital dibatasi oleh faktor fisik seperti delay propagasi yang meningkat dengan (antara faktor-faktor lainnya) suhu operasi , akibatnya aplikasi overclockinyang paling memiliki perangkat lunak yang dikenakan batasan pada multiplier dan pengaturan jam eksternal .
        </p> <br>
        <iframe width="400" height="300" src="https://www.youtube.com/embed/bSWM2wSfzgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        `
    },
    {
        name    : "Slot Memory RAM",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Slot-memory-300x200.jpg",
        artikel : "Slot Memory RAM berfungsi untuk memasang memory card (RAM), Memory atau RAM ada beberapa Jenis seperti SDRAM,DDR1,DDR2,DDR3 dan DDR4.",
        link    : "#more-link",
        moreArtikel : `
    
        <div>
                    <img src="https://www.astronkomputer.com/wp-content/uploads/2017/11/slot-memori.jpg" alt="">
                    <div>
            
    
                        <p><strong>Slot memori, soket memori</strong> atau <strong>slot RAM</strong> inilah yang merupakan tempat dimana memori (<strong>RAM</strong>) komputer dimasukkan ke dalam komputer.</p>
                        <p>Bergantung pada motherboard, mungkin ada dua sampai empat slot memori (kadang lebih pada <strong>motherboard</strong> high-end) dan itulah yang menentukan jenis RAM yang digunakan dengan komputer.</p>
                        <p>Jenis RAM yang paling umum adalah <strong>SDRAM</strong> dan <strong>DDR</strong> untuk komputer desktop dan <strong>SODIMM</strong> untuk laptop, masing-masing memiliki berbagai jenis dan kecepatan.</p>
                        <p>Pada gambar dibawah ini adalah contoh dari slot memori seperti yang ada pada motherboard komputer.</p>
                        
                        <p>Saat membeli komputer atau motherboard baru, perhatikan jenis slot memori RAM, sehingga kamu akan tahu jenis RAM apa yang akan kamu beli untuk komputer. Penting juga untuk di catat berapa banyak slot memori yang tersedia di komputer. Hal ini berguna untuk diwaktu yang akan datang jika kamu akan melakukan upgrade memori, mungkin ada beberapa atau bahkan semua memori lama harus dilepas terlebih dahulu.</p>
                        <p></p>			
                    </div>
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/PVad0c2cljo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        `
    },
    {
        name    : "Port SATA",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Port-Sata-300x212.jpg",
        artikel : "SATA singkatan dari Serial ATA yang berfungsi untuk menghubungkan Media penyimpanan seperti hardisk atau SSD ke Motherboard.",
        link    : "#more-link",
        moreArtikel : `
        <div>
                <img src="https://computory.com/wp-content/uploads/2019/02/fungsi-sata-pada-motherboard.jpg" width="400" height="300" alt="">
                    <p><strong>Serial Advanced Technology Attachment</strong> (serial ATA, SATA atau S-ATA) adalah antarmuka komputer pada Motherboard yang digunakan untuk menghubungkan adaptor bus host dengan perangkat penyimpanan massal seperti drive optik dan hard disk serta SSD.</p>
                    <p>Antarmuka ini biasanya digunakan untuk menghubungkan hard disk ke sistem host seperti motherboard komputer.</p>
                    <p>SATA adalah pembaruan untuk standar pensinyalan paralel (parallel ATA atau PATA) tahun 1980-an yang digunakan untuk elektronik drive terintegrasi yang disempurnakan (Enhanced Integrated Drive Electronics / EIDE)&nbsp; dan drive elektronik terintegrasi (Integrated Drive Electronics / IDE) sebelumnya .</p>
                    <p>Serial ATA diperkenalkan pada tahun 2005, dan kemudian pada tahun 2010, diperbarui untuk menggunakan kabel data dengan tujuh konduktor yang terdiri dari tiga kabel dan empat dua pasang jalur data aktif dengan konektor wafer di setiap ujungnya.</p>
                    <p>SATA menawarkan beberapa keunggulan dibandingkan ATA dan PATA. Fitur yang paling ditingkatkan adalah pertukaran panas dan kecepatan transfer data yang lebih cepat. Hot swapping adalah kemampuan untuk mengganti komponen sistem komputer tanpa harus mematikan sistem.</p>
                    <p>Sistem yang lebih lama harus dimatikan sebelum mengganti atau memasang modul sistem SATA. Kecepatan transfer data 6 Gbps SATA juga jauh lebih cepat daripada ATA dan PATA.</p>
                    <p>Antarmuka standar untuk SATA adalah antarmuka pengontrol host tingkat lanjut (AHCI), yang mencakup fitur-fitur inovatif seperti hot swapping dan antrian perintah asli.</p>
                    <p>Jika motherboard atau chipset tidak mendukung AHCI, SATA biasanya akan berjalan dalam mode emulasi IDE, yang tidak mendukung fitur-fitur canggih.</p>
                    <p>SATA juga memungkinkan Native Command Queueing (NCQ). Teknologi ini dimaksudkan untuk meningkatkan kinerja dengan membiarkan hard disk menambah urutan penerapan perintah baca / tulis. NCQ memungkinkan beberapa perintah untuk dijadwal ulang dan memungkinkan tuan rumah untuk mengirim lebih banyak perintah ke hard disk drive sambil mencari data untuk perintah lain.</p>
                    <p>NCQ juga memungkinkan drive untuk mentransfer data menggunakan operasi akses memori langsung tanpa gangguan dari CPU.</p>
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/TvZr8Pr3_vE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
            </div>
        `
    },
    {
        name    : "Slot PCI-E",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Slot-PCIE-300x163.jpg",
        artikel : "PCI Express (PCI–E/PCIex) adalah slot ekspansi yang didesain untuk menggantikan PCI bus yang lama. Banyak Motherboard mengadopsi PCI express karena PCI Express memiliki transfer data yang lebih cepat, terutama untuk keperluan grafis 3D.",
        link    : "#more-link",
        moreArtikel : `
            <img width="400" height="300" src="https://computory.com/wp-content/uploads/2019/02/fungsi-slot-pci-express-pada-motherboard.jpg" alt="">
            <p>Peripheral Component Interconnect Express, lebih dikenal dengan PCI Express (dan disingkat PCIe atau PCI-E) dan telah menjadi standar pada Motherboard modern sebagai penghubung dengan kartu ekspansi komputer.</p>
            <p>PCI-E digunakan sebagai perangkat koneksi dengan motherboard dan juga sebagai antarmuka kartu ekspansi.</p>
            <p>Standar baru untuk komputer pribadi disebut PCIe 3.0 yang merupakan salah satu peningkatan dibandingkan pendahulunya dengan menggunakan topologi baru yang memungkinkan transfer data lebih cepat.</p>
            <p>Teknologi PCI-E 3.0 baru berbeda dari papan PCI, PCI-X dan AGP sebelumnya dalam banyak hal, antara lain:</p>
            <ul>
            <li>Komunikasi terdiri dari lalu lintas data dan pesan status yang dipaketkan dan di-<em>depacket</em>.</li>
            <li>Data dikirim melalui tautan serial point-to-point berpasangan, yang disebut jalur, memungkinkan perpindahan data di kedua arah secara bersamaan dan memungkinkan lebih dari satu pasangan perangkat untuk berkomunikasi secara bersamaan.</li>
            <li>Slot PCI-E tersedia dari satu hingga 32 jalur dengan kekuatan 2 (1, 2,4, 8 dll). Setiap “jalur” adalah sepasang jalur transfer data, satu untuk transmisi dan satu untuk menerima, dan terdiri dari 4 kabel. Jumlah lajur dalam slot dilambangkan dengan x sebelumnya, mis. x16 menunjuk kartu PCI-E 16 jalur.</li>
            <li>Bandwidth yang lebih tinggi disediakan oleh pengelompokan saluran – menggunakan beberapa jalur untuk satu perangkat.</li>
            <li>Serial bus mentransmisikan data lebih cepat daripada bus paralel karena keterbatasan yang terakhir membutuhkan data untuk tiba secara bersamaan di tempat tujuan (Ini berkaitan dengan frekuensi dan panjang gelombang bit tunggal). Dengan bus serial tidak ada persyaratan untuk sinyal datang secara bersamaan.</li>
            <li>PCI-E mengikuti protokol berlapis yang terdiri dari 3 lapisan: lapisan transaksi, lapisan tautan data, dan lapisan fisik.</li>
            </ul>
            <p>Berikut ini adalah laju transmisi dan bandwidth untuk berbagai bus PCI-E. Tarif ini untuk transmisi total di kedua arah, 50% berada di kedua arah:</p>
            <ul>
            <li>PCI Express 1x 500 MB / s</li>
            <li>PCI Express 2×1000 MB / s</li>
            <li>PCI Express 4x 2000 MB / s</li>
            <li>PCI Express 8x 4000 MB / s</li>
            <li>PCI Express 16x 8000 MB / s (kartu x16 adalah ukuran terbesar yang umum digunakan.)</li>
            <li>PCI Express 32×16000 MB / s</li>
            </ul>
            <p>Sebagai perbandingan, kartu PCI memiliki bandwidth 132 MB / s; AGP 8x: 2.100 MB / s; USB 2.0: 60 MB / s; IDE: 100 hingga 133 MB / s; SATA: 150 MB / s; SATA II: 300 MB / s; Gigabit Ethernet: 125 MB / s; dan Firewire 800: sekitar. 100 MB / s.</p>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/sRx2YLzBIqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    },
    {
        name    : "Southbridge",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/southbridge.jpg",
        artikel : "adalah chip dalam arsitektur chipset logika inti pada bagian utara motherboard PC. Fungsi dari Southbridge adalah mengatur kerja perangkat semacam IDE Controller, PCI Bus, ROM Bios, Keyboard & Mouse, USB, Eth. LAN, Modem dan fungsi I/O lainnya.",
        link    : "#more-link",
        moreArtikel : `
            <img src="https://4.bp.blogspot.com/-N67kvAcyqWw/WJK2fdJrusI/AAAAAAAAAB8/YPO3mIvRMaYQyKVB4NQrBeEl2FmmXDIXQCLcB/s320/800px-IBM_T42_Motherboard_IMG_2591a.jpg" alt="">
            <div>
            <h2><span id="Pengertian_Southbridge">Pengertian Southbridge</span></h2>
            <p>Jadi Apa itu Pengertian Southbridge? <strong>Southbridge </strong>adalah IC pada motherboard yang bertanggung jawab untuk pengontrol hard drive, I/O controller, dan perangkat keras terintegrasi. Perangkat keras terintegrasi dapat menyertakan kartu suara dan kartu video jika pada motherboard, USB, PCI, ISA, IDE, BIOS, dan Ethernet.</p>
            <p>Berdasarkan situs Technopedia, Southbridge mendapatkan namanya karena umumnya Selatan dari bus PCI. Di bawah ini adalah ilustrasi grafis dari motherboard ASUS P5AD2-E dan beberapa penjelasan dasar dari masing-masing bagian utama motherboard termasuk southbridge. Seperti yang ditunjukkan pada gambar di bawah ini, biasanya jembatan utara dan selatan memiliki <strong>heat sink</strong>, selain itu, Northbridge biasanya sedikit lebih besar dari <strong>Southbridge</strong>.</p>
            <p>Meskipun southbridge menangani sebagian besar perangkat I / O, perangkat input / output yang kurang menonjol, seperti port serial, keyboard, dan mouse non-USB ditangani oleh SIO (super input / output).</p>
            <h3><span id="Chipset_dan_Motherboard_Baru">Chipset dan Motherboard Baru</span></h3>
            <p>Beberapa chipset yang lebih baru menggabungkan chip Southbridge dan Super I / O ke dalam satu chip dan mengacu pada chip ini sebagai chip Super Southbridge. Beberapa produsen seperti NVIDIA dan SiS bahkan telah menggabungkan Northbridge, Southbridge, dan Super I / O menjadi satu chip. Motherboard baru menggantikan northbridge dan southbridge dengan IHA.</p> 
            <h2><span id="Fungsi_Southbridge">Fungsi Southbridge</span></h2>

            <p>Mengacu pada Pengertian Southbridge di atas, <strong>Southbridge </strong>berfungsi untuk mengelola bentuk dasar input / output (I / O) seperti Universal Serial Bus (USB), serial, audio, Integrated Drive Electronics (IDE), dan I / O Arsitektur Standar Industri di komputer. Southbridge adalah salah satu dari dua chipset yang secara kolektif disebut Northbridge / Southbridge. Northbridge mengontrol prosesor, memori, bus Peripheral Component Interconnect (PCI), cache Level 2, dan semua aktivitas Accelerated Graphics Port (AGP). Tidak seperti Northbridge, Southbridge terdiri dari satu chip, yang duduk di bus PCI Northbridge.</p>
            <h2><span id="Sejarah_Southbridge">Sejarah Southbridge</span></h2>
            <p>Dalam membahas Pengertian Southbridge ini, adapun sedikit sejarah Southbridge yang mana Nama ini berasal dari desain motherboard Intel 1991 asli. Desain ini memiliki bus lokal PCI (tulang punggung) di tengah dan CPU, memori/cache dan komponen penting kinerja tinggi lainnya yang terletak di atas atau di utara. Komponen yang kurang penting-kinerja terletak di bawah, atau di sebelah selatan, bus lokal PCI.</p>
            <p>Jembatan ke dua rangkaian komponen dari tulang punggung ini sering disebut Southbridge dan Northbridge, meskipun arsitektur saat ini telah menggantikan tulang punggung bus PCI dengan bus I/O yang lebih cepat.</p> 
            <h2><span id="Kesimpulan">Kesimpulan</span></h2>
            <p>Berdasarkan pembahasan Pengertian Southbridge di atas, dapat kita simpulkan bahwa, <strong>Southbridge </strong>adalah chipset Intel yang mengelola bentuk dasar input/output (I/O) seperti Universal Serial Bus (USB), serial, audio, Integrated Drive Electronics (IDE), dan Industry Standard Architecture (ISA) I/O in komputer. Southbridge adalah salah satu dari dua chipset yang secara kolektif disebut Northbridge dan Southbridge.</p>
            <p>Northbridge mengontrol prosesor, memori, bus Peripheral Component Interconnect (PCI), cache Level 2, dan semua aktivitas Accelerated Graphics Port (AGP). Tidak seperti Northbridge, Southbridge terdiri dari satu chip, yang duduk di bus PCI Northbridge.</p>
            </div>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/XUVMf5XpbdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    },
    {
        name    : "LED",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Lampu-LED-300x194.jpg",
        artikel : "Power LED adalah lampu menyala jika terdapat standby power di Motherboard. LED ini bertindak sebagai reminder (pengingat) untuk mematikan system power sebelum menghidupkan atau mematikan komputer.",
        link    : "#more-link",
        moreArtikel : `Power LED adalah lampu menyala jika terdapat standby power di Motherboard. LED ini bertindak sebagai reminder (pengingat) untuk mematikan system power sebelum menghidupkan atau mematikan komputer.`
    },
    {
        name    : "Port PS/2",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/ps2_ports_atx-174x300.jpg",
        artikel : "Port PS/2 adalah konektor mini-DIN-6pin yang menghubungkan mouse ke komputer.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/7aXbh9VUB3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port Paralel",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/Port-Paralel-300x225.jpg",
        artikel : "Fungsi dari port paralel adalah menyambungkan komputer dengan printer, scanner, sampai dengan menghubungkan komputer dengan perangkat tambahan tertentu yang dirancang menggunakan koneksi port paralel.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/myU2x27FIIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port Serial",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/serial-300x154.jpg",
        artikel : "Port Serial adalah Port asinkron yang ada pada komputer yang digunakan untuk menghubungkan perangkat serial ke komputer dan mampu mengirimkan sedikit demi sedikit.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/myU2x27FIIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port VGA",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/vga-300x225.jpg",
        artikel : "Port VGA adalah sebuah antarmuka analog pada kartu grafis yang umumnya digunakan untuk menghubungkan antara komputer dengan monitor.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/iPyNNX_bowg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port DVI",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/dvi-300x120.jpg",
        artikel : "Port DVI adalah interface video display yang dikembangkan oleh Digital Display Working Group (DDWG). Interface digital ini digunakan untuk menghubungkan sumber video, seperti kartu grafis ke perangkat layar, seperti monitor komputer.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/iPyNNX_bowg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port HDMI",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/hdmi.jpg",
        artikel : "Port HDMI adalah interface yang berfungsi untuk menghubungkan Display ke komputer, seperti monitor, TV, Proyektor, dll.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/iPyNNX_bowg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port USB",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/usb.jpg",
        artikel : "Port USB berfungsi untuk menghubungkan perangkat seperti mouse,keyboard, flashdisk, printer, dan perangkat lainnya.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/iPyNNX_bowg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Battery CMOS",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/cmos-300x252.png",
        artikel : "sebuah baterai yang digunakan oleh BIOS untuk tetap aktif meski tanpa aliran listrik.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/oSrUsM0hoPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port RJ-45",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/rj45-300x203.png",
        artikel : "Port RJ-45 berfungsi untuk menghubungkan atau mengkoneksikan Internet pada komputer.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/iPyNNX_bowg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Port Audio",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/audio.jpg",
        artikel : `Pada Port Audio: <br>
        -	Port Line in jack(biru): untuk menghubungkan sumber dari audio. <br>
        -	Port Line out jack(hijau): untuk menghubungkan ke headphone atau headset. <br>
        -   Port Mikrofon (pink): untuk menghubungkan mikrofon pada komputer.
        `,
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/iPyNNX_bowg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Pin CPU Fan",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/cpu-fan-300x168.jpg",
        artikel : "Pin CPU Fan berfungsi untuk  memberikan daya ke kipas processor agar dia dapat menyala sehingga bisa mendinginkan processor.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/ieMvtUpFENM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
        name    : "Pin Front Panel",
        img     : "https://www.kiosbarcode.com/wp-content/uploads/2019/11/f_panel.jpg",
        artikel : "Pin Front Panel ini berfungsi sebagai konektor dari casing ke motherboard sehingga kita bisa menyalakan komputer melalui casing.",
        link    : "#more-link",
        moreArtikel : `<iframe width="400" height="300" src="https://www.youtube.com/embed/gHKoh8as2po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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
let more = document.getElementById('more');
let i = 0;
komponens.forEach(komponen => {
    document.getElementsByClassName('card')[i].addEventListener('click', function(){
        more.innerHTML = komponen.moreArtikel;
        more.style.width = "400vh";
    });
    i++;
});