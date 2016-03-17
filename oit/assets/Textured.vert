attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aTexCoord0;
uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;
uniform mat3 uNormalMatrix;

varying vec2 vTexCoord0;
varying vec3 ecNormal;

void main() {
  vTexCoord0 = aTexCoord0;
  gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aPosition;
  ecNormal = uNormalMatrix * aNormal;
}
