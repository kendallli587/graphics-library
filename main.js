let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

ellipse(200, 400, 30, 50, Math.PI / 4, 0, Math.PI, "fill");

let imgEl = document.getElementById("testImg");
image(imgEl, 200, 200, 90, 100);