document.getElementById('tuyenSinh').onclick = function(){
    // var kv = document.getElementById('kv').value;
    // var dt = Number(document.getElementById('dt').value);
    // var baMon = Number(document.getElementById('baMon').value);
    // var dc = Number(document.getElementById('dc').value);
    // var point = 0;
    // var ketQua = '';
    // if (kv == 'a'){
    //     point = 2

    // }else if(kv == 'b'){
    //     point == 1;
    // }else if(kv == 'c'){
    //     point = 0.5;

    // }

    // if(dt === 1){
    //     point = 2.5;

    // }else if(dt === 2){
    //     point = 1.5;
    // }else if(dt === 3){
    //     point = 1;
    // }
    
    // if(dc =(kv + dt + baMon)){
    //     point == dc;
    //     ketQua = 'Đậu';


    // }else if(dc != (kv + dt + baMon)){
    //     point != dc;
    //     ketQua = ' Không Đủ Điểm';
    // }
    // document.getElementById('ketQua').innerHTML = point + ketQua;


    var kv = document.getElementById('kv').value;
    var dt = Number(document.getElementById('dt').value);
    var baMon = Number(document.getElementById('baMon').value);
    var dc = Number(document.getElementById('dc').value);
    var point = 0;
    var ketQua = '';
    if (kv == 'a'){
        kv = 2;

    }else if(kv == 'b'){
        kv == 1;
    }else if(kv == 'c'){
        kv = 0.5;

    }

    if(dt === 1){
        dt = 2.5;

    }else if(dt === 2){
        dt = 1.5;
    }else if(dt === 3){
        dt = 1;
    }
    point = kv + dt + baMon;
    if(point > dc){
        
        ketQua = ' Bạn đã đậu !';
    }else {
        ketQua = ' Bạn không đủ điểm !';
    }
    document.getElementById('ketQua').innerHTML = point + ketQua;
}



document.getElementById('tienDien').onclick = function(){
    var ten = document.getElementById('ten').value;
    var kw = Number(document.getElementById('soKw').value);
    var tongTienDien = 0;
    var bac1 = 500, bac2 = 650, bac3 = 850, bac4 =1100;
    if(kw <= 50){
        tongTienDien = kw * bac1;

    }else if(kw >50 && kw <= 100){
        tongTienDien = (50 * bac1) + ((kw -50)*bac2);

    }else if(kw > 100 && kw <150){
        tongTienDien = (50 * bac1) + (50*bac2) + ((kw-100)*bac3);

    }else if(kw > 150){
        tongTienDien = (50 * bac1) + (50*bac2) + (50*bac3) + ((soDien-150)*bac4);
    }
    document.getElementById('ketQua2').innerHTML = tongTienDien;

}