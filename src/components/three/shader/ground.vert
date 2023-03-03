varying vec3 pos;
varying vec2 vuv;

void main() {
    pos = position;
    // uv: ShaderMaterialで補完される vec2 型(xy)の変数
    vuv = uv;

    gl_Position += projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
