function setup() {
    createCanvas(800, 500);

    background(0);
    stroke(5000, 5000);

    saveMovie("yin_and_yang.mp4", 5);
}

let t = 0;

function draw() {
    background(1);

    t += PI / 180;

    /* number of points */
    for (let i = 10000; i > 0; i--) {

        let y = i / 1000;

        let e = y / 13 - 13;

        /* xor discretizes the tail, unlike the continuity of head */
        let term = (y < 8) ? (8 + sin(Math.floor(y) ^ 9) * 6) : (3 + tan(y));

        /* removing cos(.) removes the point cloud */
        let k = term * cos(i + t / 4);

        let d = mag(k, e) + cos(e + t * 2 + (i % 2) * 4);

        let q = y * k / 5 * (2 + sin(d * 2 + y - t * 4)) + 80;

        let c = d / 4 - t / 2 + (i % 2) * 3;
        point(q * cos(c) + 400, q * sin(c) + d * 9 + 120);
    }
}

