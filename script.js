function start() {
    circle();
    paralelepiped();
    ellipse();
    square();
    rectangle();
    right_triangle()
}
function paralelepiped() {
    var paralelepiped = document.getElementById("paralelepiped");

    a = document.getElementById("paralelepiped_a").value;
    b = document.getElementById("paralelepiped_b").value;
    angle = document.getElementById("paralelepiped_angle").value;

    document.getElementById("paralelepiped_area").value = (a * b * Math.sin(angle * Math.PI / 180)).toFixed(3);
    document.getElementById("paralelepiped_h").value = (document.getElementById("paralelepiped_area").value / a).toFixed(3);
}

function circle() {
    var circle = document.getElementById("circle");

    r = document.getElementById("circle_r").value;

    document.getElementById("circle_area").value = (Math.PI * Math.pow(r, 2)).toFixed(3);
    document.getElementById("circle_l").value = (2 * Math.PI * r).toFixed(3);
}

function ellipse() {
    var ellipse = document.getElementById("ellipse");

    ellipse_hr = document.getElementById("ellipse_hr").value;
    ellipse_vr = document.getElementById("ellipse_vr").value;

    document.getElementById("ellipse_area").value = (Math.PI * ellipse_hr * ellipse_vr).toFixed(3);

    //2π * sqrt( (a2 + b2) / 2 )
    document.getElementById("ellipse_l").value = (2 * 3.14 * Math.sqrt((ellipse_vr * ellipse_vr + ellipse_hr * ellipse_hr) / (2 * 1.0))).toFixed(3)
}

function square() {
    var square = document.getElementById("square");

    a = document.getElementById("square_a").value;

    document.getElementById("square_diag").value = (Math.sqrt(2) * a).toFixed(3);
    document.getElementById("square_area").value = (Math.pow(a, 2)).toFixed(3);
}

function rectangle() {
    var rectangle = document.getElementById("rectangle");

    a = document.getElementById("rectangle_a").value;
    b = document.getElementById("rectangle_b").value;

    document.getElementById("rectangle_diag").value = (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))).toFixed(3);
    document.getElementById("rectangle_area").value = (a * b).toFixed(3);
}

function right_triangle() {
    var right_triangle = document.getElementById("right_triangle");

    a = document.getElementById("right_triangle_a").value;
    b = document.getElementById("right_triangle_b").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("right_triangle_c").value = c.toFixed(3);
    document.getElementById("right_triangle_area").value = ((a * b) / 2).toFixed(3);
    document.getElementById("right_triangle_cut_a").value = (Math.asin(a / c) * 180 / Math.PI).toFixed(3) + "°";
    document.getElementById("right_triangle_cut_b").value = (Math.asin(b / c) * 180 / Math.PI).toFixed(3) + "°";
    document.getElementById("right_triangle_cut_c").value = 90 + "°";
    document.getElementById("right_triangle_h").value = ((a * b) / c).toFixed(3);
}