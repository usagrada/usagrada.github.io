varying vec3 pos;
varying vec2 vuv;
uniform float iTime;

void main() {
    float val = (vuv.y + 1.0) * 0.5;
    float noise = (vuv.y + 1.0) * 0.5;
    val = val * 0.8 + (1.0+sin(iTime * 0.001))* 0.10;
    // rgb
    vec4 color = vec4( 0.2, val, 0.2, 0.6);

    gl_FragColor = color;
}
