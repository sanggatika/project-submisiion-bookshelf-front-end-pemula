/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function loadDataHTML()
{
    listBuku();
    listBukuSedangDibaca();
    listBukuSelesaiDibaca();
}

function listBuku()
{
    var filterKategori = document.getElementById('filterKategori').value;
    var filterTahun = document.getElementById('filterTahun').value;
    var filterJudul = document.getElementById('filterJudul').value;

    var dataFilterBuku = databuku;

    if(filterKategori != '-')
    {
        dataFilterBuku = dataFilterBuku.filter(function(itm){
            return itm.kategori_buku == filterKategori;
        });
    }

    if(filterTahun != '-')
    {
        dataFilterBuku = dataFilterBuku.filter(function(itm){
            return itm.tahun_buku == filterTahun;
        });
    }

    if(filterJudul != '' || filterJudul == ' ')
    {
        dataFilterBuku = dataFilterBuku.filter(function(itm){
            return itm.judul_buku.toLowerCase().includes(filterJudul.toLowerCase());
        });
    }

    document.getElementById('dataListBuku').innerHTML = '';
    var div = document.createElement('div'); //container to append to  

    for (let i = 0; i < dataFilterBuku.length; i++) {
        if(dataFilterBuku[i].status_buku == '0')
        {
            var tmpAssetIMG = assetImageBuku(dataFilterBuku[i].kategori_buku);

            div.innerHTML = '<div class="col-6 col-md-3 mb-2"><div class="card h-100"><!-- Product image--><img class="card-img-top" src="'+tmpAssetIMG+'" alt="logo-buku" /><!-- Product details--><div class="card-body p-4"><div class="text-center"><!-- Product name--><h5 class="fw-bolder">'+dataFilterBuku[i].judul_buku+'</h5><!-- Product price-->'+dataFilterBuku[i].kategori_buku+' - '+dataFilterBuku[i].tahun_buku+'</div></div><!-- Product actions--><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center"><button type="button" class="btn btn-outline-primary">Detail</button> <button type="button" class="btn btn-outline-secondary" onclick="changeStatusBuku(\'' + dataFilterBuku[i].judul_buku + '\',\'' + '1' + '\')">Baca Buku</button></div></div></div></div>';

            document.getElementById('dataListBuku').appendChild(div.children[0]);
        }        
    }
}

function listBukuSedangDibaca()
{
    var dataFilterBuku = databuku;

    dataFilterBuku = dataFilterBuku.filter(function(itm){
        return itm.status_buku == '1';
    });

    var jumlahBukuDibaca = dataFilterBuku.length;
    document.getElementById('v_jumlahBukuDibaca').innerHTML = jumlahBukuDibaca;   

    document.getElementById('dataListBukuSedangDibaca').innerHTML = '';
    var div = document.createElement('div'); //container to append to  

    for (let i = 0; i < dataFilterBuku.length; i++) {
        var tmpAssetIMG = assetImageBuku(dataFilterBuku[i].kategori_buku);

        div.innerHTML = '<div class="col-6 col-md-6 mb-2"><div class="card h-100"><!-- Product image--><img class="card-img-top" src="'+tmpAssetIMG+'" alt="logo-buku" /><!-- Product details--><div class="card-body p-4"><div class="text-center"><!-- Product name--><h5 class="fw-bolder">'+dataFilterBuku[i].judul_buku+'</h5><!-- Product price-->'+dataFilterBuku[i].kategori_buku+' - '+dataFilterBuku[i].tahun_buku+'</div></div><!-- Product actions--><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center"><button type="button" class="btn btn-outline-primary">Detail</button> <button type="button" class="btn btn-outline-secondary" onclick="changeStatusBuku(\'' + dataFilterBuku[i].judul_buku + '\',\'' + '2' + '\')">Selesai Baca</button></div></div></div></div>';

        document.getElementById('dataListBukuSedangDibaca').appendChild(div.children[0]);      
    }
}

function listBukuSelesaiDibaca()
{
    var dataFilterBuku = databuku;

    dataFilterBuku = dataFilterBuku.filter(function(itm){
        return itm.status_buku == '2';
    });


    document.getElementById('dataListBukuSelesaiDibaca').innerHTML = '';
    var div = document.createElement('div'); //container to append to  

    for (let i = 0; i < dataFilterBuku.length; i++) {
        var tmpAssetIMG = assetImageBuku(dataFilterBuku[i].kategori_buku);

        div.innerHTML = '<div class="col-6 col-md-6 mb-2"><div class="card h-100"><!-- Product image--><img class="card-img-top" src="'+tmpAssetIMG+'" alt="logo-buku" /><!-- Product details--><div class="card-body p-4"><div class="text-center"><!-- Product name--><h5 class="fw-bolder">'+dataFilterBuku[i].judul_buku+'</h5><!-- Product price-->'+dataFilterBuku[i].kategori_buku+' - '+dataFilterBuku[i].tahun_buku+'</div></div><!-- Product actions--><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center"><button type="button" class="btn btn-outline-primary">Detail</button> <button type="button" class="btn btn-outline-secondary" onclick="changeStatusBuku(\'' + dataFilterBuku[i].judul_buku + '\',\'' + '0' + '\')">Kembalikan</button></div></div></div></div>';

        document.getElementById('dataListBukuSelesaiDibaca').appendChild(div.children[0]);      
    }
}

function changeStatusBuku (judul_buku, status) {
    for (var i in databuku) {
      if (databuku[i].judul_buku == judul_buku) {
        databuku[i].status_buku = status;
         break; //Stop this loop, we found it!
      }
    }
    loadDataHTML();
}

function submitTambahData()
{
    var form_JudulBuku = document.getElementById('form_JudulBuku').value;
    var form_pengarangBuku = document.getElementById('form_pengarangBuku').value;
    var form_tahunBuku = document.getElementById('form_tahunBuku').value;
    var form_kategoriBuku = document.getElementById('form_kategoriBuku').value;
    var form_deskripsiBuku = document.getElementById('form_deskripsiBuku').value;

    if(form_JudulBuku == '')
    {
        alert('Judul Buku Tidak Boleh Kosong.');
        return false;
    }

    if(form_pengarangBuku == '')
    {
        alert('Pengarang Buku Tidak Boleh Kosong.');
        return false;
    }

    if(form_tahunBuku == '-')
    {
        alert('Tahun Buku Belum Anda Pilih.');
        return false;
    }

    if(form_kategoriBuku == '-')
    {
        alert('Kategori Buku Belum Anda Pilih.');
        return false;
    }

    if(form_deskripsiBuku == '')
    {
        alert('Deskripsi Buku Tidak Boleh Kosong.');
        return false;
    }

    var tmpDataBuku = {
        'judul_buku':form_JudulBuku,
        'pengarang_buku':form_pengarangBuku,
        'tahun_buku':form_tahunBuku,
        'kategori_buku':form_kategoriBuku,
        'deskripsi_buku':form_deskripsiBuku,
        'status_buku':'0'
    }

    databuku.push(tmpDataBuku);
    resetTamabahData();
    listBuku();

    var myModalEl = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}

function resetTamabahData()
{
    document.getElementById('form_JudulBuku').value='';
    document.getElementById('form_pengarangBuku').value='';
    document.getElementById('form_tahunBuku').value='-';
    document.getElementById('form_kategoriBuku').value='-';
    document.getElementById('form_deskripsiBuku').value='';
}

function assetImageBuku(kategoriBuku)
{
    var assetImg = 'assets/frontend-dev.png';

    if(kategoriBuku == 'frontend-dev')
    {
        assetImg = 'assets/frontend-dev.png';
    }else if(kategoriBuku == 'android-dev')
    {
        assetImg = 'assets/android-dev.png';
    }else if(kategoriBuku == 'ios-dev')
    {
        assetImg = 'assets/ios-dev.png';
    }else if(kategoriBuku == 'multiapp-dev')
    {
        assetImg = 'assets/multiapp-dev.png';
    }else if(kategoriBuku == 'azure-dev')
    {
        assetImg = 'assets/azure-dev.png';
    }else if(kategoriBuku == 'backend-dev')
    {
        assetImg = 'assets/backend-dev.png';
    }else if(kategoriBuku == 'cloud-dev')
    {
        assetImg = 'assets/cloud-dev.png';
    }else if(kategoriBuku == 'learnning-dev')
    {
        assetImg = 'assets/learnning-dev.png';
    }else{
        assetImg = 'assets/frontend-dev.png';
    }

    return assetImg;
}

loadDataHTML();