/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function loadDataHTML()
{

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

            div.innerHTML = '<div class="col-6 col-md-3 mb-2"><div class="card h-100"><!-- Product image--><img class="card-img-top" src="'+tmpAssetIMG+'" alt="logo-buku" /><!-- Product details--><div class="card-body p-4"><div class="text-center"><!-- Product name--><h5 class="fw-bolder">'+dataFilterBuku[i].judul_buku+'</h5><!-- Product price-->'+dataFilterBuku[i].kategori_buku+' - '+dataFilterBuku[i].tahun_buku+'</div></div><!-- Product actions--><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"><div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div></div></div></div>';

            document.getElementById('dataListBuku').appendChild(div.children[0]);
        }        
    }
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

listBuku();