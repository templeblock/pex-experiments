attribute vec4 aPosition;
attribute vec3 aNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;
uniform mat3 uNormalMatrix;

varying vec3 ecPosition;
varying vec3 ecNormal;

void main() {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aPosition;
    ecPosition = vec3(uViewMatrix * uModelMatrix * aPosition);

    //???float4 normalWorld = mul(float4(input.normal, 0.0), _World2Object);
    //ecNormal = (uModelMatrix * vec4(aNormal, 0.0)).xyz;
    ecNormal = uNormalMatrix * aNormal;
}
