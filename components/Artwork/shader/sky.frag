varying vec3 pos;
varying vec2 vuv;

void main() {
  float val = mod(vuv.y*5000.0, 1000.0) / 1000.0;
  val = val*0.3+0.7;
  // rgb
  vec4 color = vec4( val * 0.1, val * 0.8 , val, 0.3 );

  gl_FragColor = color;
}