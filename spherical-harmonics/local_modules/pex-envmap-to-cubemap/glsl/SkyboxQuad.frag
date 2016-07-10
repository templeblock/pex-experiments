#ifdef GL_ES
precision highp float;
#endif

#pragma glslify: envMapEquirect  = require(../../glsl-envmap-equirect)

varying vec3 wcNormal;

uniform sampler2D uEnvMap;

void main() {
    gl_FragColor.rgb = texture2D(uEnvMap, envMapEquirect(normalize(wcNormal), 1.0)).rgb;
    gl_FragColor.a = 1.0;
}
