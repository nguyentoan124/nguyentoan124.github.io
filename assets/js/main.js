
function slider(select_class, class_, width){
    const soAnh = document.querySelectorAll(select_class);
    console.log(soAnh) 
    const margin = (soAnh.length - 1) * width;
    var kichThuoc = 0;
    function chuyenAnh()
    {
        if(kichThuoc < margin)
        {
            kichThuoc += width;
        }else{
            kichThuoc = 0;
        }
        document.getElementsByClassName(class_)[0].style.marginLeft = '-' + kichThuoc + 'px';

    }
    setTimeout(() => {
        setInterval(() => {
            chuyenAnh();
        }, 2000);
    }, 5000);
}

slider(".slider .slider_01 img", "slider_01", 656)
slider(".slider .slider_02 img", "slider_02", 328)
slider(".slider .slider_03 img", "slider_03", 328)
slider(".slider .slider_04 img", "slider_04", 280)
