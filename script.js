class barang{
    constructor(nama, jumlah, harga){
        this.nama = nama
        this.harga = harga
        this.jumlah = jumlah
    }

    totalHarga(){
        return this.jumlah * this.harga
    }
}

let daftarBarang = []
let info = document.getElementById('info')

function tambahBarang(){
    let namaBarang = document.getElementById('barang').value.trim()
    let jumlahBarang = document.getElementById('jumlah').value.trim()
    let hargaBarang = document.getElementById('harga').value.trim()
      
    
    if(namaBarang === "" || hargaBarang === "" || jumlahBarang === "" || jumlahBarang == 0 ) return

    let barangBaru = new barang(namaBarang, parseInt(jumlahBarang), parseInt(hargaBarang))

    daftarBarang.push(barangBaru)

    console.log(daftarBarang)
    clear()
    renderTabel()
    tampilHarga()
    document.getElementById('edit-form').style.display = 'none';
}

function renderTabel(){
    let tabel = document.getElementById('daftar-barang')

    tabel.innerHTML = 
    `
    <tr>
        <td>No.</td>
        <td>Nama Barang</td>
        <td>Jumlah</td>
        <td>Harga</td>
        <td>Action</td>
    </tr>
    `

    daftarBarang.forEach((barang, index) => {
        const row = 
        `
        <tr>
            <td>${index + 1}</td>
            <td>${barang.nama}</td>
            <td>${barang.jumlah}</td>
            <td>${barang.harga}</td>
            <td> <button onclick="hapus(${index})">hapus</button> <button onclick="tampilEdit(${index})">edit</button> </td>
        </tr>
        `
        tabel.innerHTML += row
    });
}

function hapus(index){
    daftarBarang.splice(index, 1)
    renderTabel();
    tampilHarga()
}

let indexEdit = null

function tampilEdit(index){
    indexEdit = index
    document.getElementById('edit-form').style.display = 'flex'
    console.log(indexEdit)
}

function edit(){
    daftarBarang[indexEdit].nama = document.getElementById('barangEdit').value
    daftarBarang[indexEdit].jumlah = parseInt(document.getElementById('jumlahEdit').value)
    daftarBarang[indexEdit].harga = parseInt(document.getElementById('hargaEdit').value)

    renderTabel()
    tampilHarga()

    document.getElementById('edit-form').style.display = 'none'
    indexEdit = null

    document.getElementById('barangEdit').value = ""
    document.getElementById('jumlahEdit').value = ""
    document.getElementById('hargaEdit').value = ""
}

function clear(){
    document.getElementById('barang').value = ""
    document.getElementById('harga').value = ""
    document.getElementById('jumlah').value = ""
}

function totalHarga(){
    let total = 0
    daftarBarang.forEach((barang) => {
        total += barang.totalHarga()
    })
    return total
}

function tampilHarga(){
    document.getElementById('display-harga').value = totalHarga()
}
