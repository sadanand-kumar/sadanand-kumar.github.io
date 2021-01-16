setInterval(() => {

    d = new Date();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();

    hrotation = 30*hh + mm/2;
    mrotation = 6*mm;
    srotation = 6*ss;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;
    

}, 1000);