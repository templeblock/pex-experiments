//Based on http://gamedev.stackexchange.com/questions/60313/implementing-a-skybox-with-glsl-version-330
//
attribute vec4 aPosition;

#pragma glslify: inverse = require('glsl-inverse')
#ifdef GL_ES
#pragma glslify: transpose = require('glsl-transpose')
#endif

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;

varying vec3 wcNormal;

void main() {
    mat4 inverseProjection = inverse(uProjectionMatrix);
    mat3 inverseModelview = transpose(mat3(uViewMatrix));
    vec3 unprojected = (inverseProjection * aPosition).xyz;
    wcNormal = inverseModelview * unprojected;

    gl_Position = aPosition;
}
