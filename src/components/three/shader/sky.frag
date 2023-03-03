varying vec3 pos;
varying vec2 vuv;

void main() {
    // float val = mod(vuv.y*1.0, 1.0);
    float val = 1.0-vuv.y;
    // val = (val + fract(vuv.x * 100) + fract(vuv.y * 100))/3;
    // val = val*0.3+0.7;
    // rgb
    float r1 = 149.0/255.0;
    float g1 = 191.0/255.0;
    float b1 = 234.0/255.0;
    float r2 = 170.0/255.0;
    float g2 = 170.0/255.0;
    float b2 = 1.0;

    float r = r1*val + r2*(1.0-val);
    float g = g1*val + g2*(1.0-val);
    float b = b1*val + b2*(1.0-val);

    vec4 color = vec4(r, g, b, 0.8);

    gl_FragColor = color;
}
