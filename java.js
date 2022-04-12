function klik(){
    let a=document.getElementById("a")
    if(a.className=="on"){
        a.className="off";
        a.value="OFF"
    }else{
        a.className="on";
        a.value="ON"
    }
}

function moveb(){
    let b=document.getElementById("b")
    if(b.className=="na"){
        b.className="za";
    }else{
        b.className="na";
    }
    setTimeout(1)
}

function movec(){
    let c=document.getElementById("c")
    if(c.className=="na"){
        c.className="za";
    }else{
        c.className="na";
    }
    setTimeout(1)
}

function moved(){
    let d=document.getElementById("d")
    if(d.className=="na"){
        d.className="za";
    }else{
        d.className="na";
    }
    setTimeout(1)
}

let z=0;
function move(){
    let e=document.getElementById("e");
    z+=1;
    e.value=z;
}

function selekt(){
    let fi=document.getElementById("fi")
    fi.value="Zazanaczyłeś/zaznaczyłaś tekst w obszarze tekstowym"
}

function czysc(){
    let fi=document.getElementById("fi")
    fi.value=""
}

function zmianag(){
    let g=document.getElementById("g")
    if(g.className=="zaz"){
        g.className="odz";
    }else{
        g.className="zaz";
    }
}

function zmianah(){
    let h=document.getElementById("h")
    if(h.className=="zaz"){
        h.className="odz";
    }else{
        h.className="zaz";
    }
}

function zmianai(){
    let i=document.getElementById("i")
    if(i.className=="zaz"){
        i.className="odz";
    }else{
        i.className="zaz";
    }
}

function edit(){
    let fi=document.getElementById("fi")
    fi.value="Zmieniłeś/zmieniłaś tekst w obszarze tekstowym"
}



klik();
moveb();
movec();
moved();
move();
selekt();
zmianag();
zmianah();
zmianai();