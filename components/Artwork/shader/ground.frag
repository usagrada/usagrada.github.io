varying vec3 pos;
varying vec2 vuv;

void main() {
  // float val = mod(vuv.y*3000.0, 1000.0) / 1000.0;
  float val = vuv.y;
  val = val*0.3+0.5;
   // rgb
  vec4 color = vec4( 0.0, val , val*0.8, 0.3 );

  gl_FragColor = color;
}