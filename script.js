var cards = document.getElementsByClassName("card");

function toggleDescription() {
    var p = this.getElementsByTagName("p")[0];

    if (p.style.display == "none") {
        p.style.display = "block";
    } else { 
        p.style.display = "none";
    }

    var jurusan = document.getElementsByClassName("jurusan")[0];
    var ps = jurusan.getElementsByTagName("p");
    for (var i = 0; i < ps.length; i++) {
        if (ps[i] != p) { 
            ps[i].style.display = "none";
        }
    }
}


for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", toggleDescription);
}

