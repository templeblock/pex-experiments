#ifdef GL_ES
precision highp float;
#endif

uniform mat3 uNormalMatrix;

varying vec3 ecNormal;

void main() {
    gl_FragColor = vec4(normalize(uNormalMatrix * ecNormal) * 0.5 + 0.5, 1.0);
}
