var renderToCubemap = require('../render-to-cubemap');
var glslifySync = require('glslify-sync');

var VERT = glslifySync(__dirname + '/glsl/downsample.vert');
var FRAG = glslifySync(__dirname + '/glsl/downsample.frag');

var quadPositions = [[-1,-1],[1,-1], [1,1],[-1,1]];
var quadFaces = [ [0, 1, 2], [0, 2, 3]];

var quadMesh = null;
var downsampleProgram = null;

function downsampleCubemap(ctx, fromCubemap, toCubemap) {
    ctx.pushState(ctx.MESH_BIT | ctx.PROGRAM_BIT); //ctx.TEXTURE_BIT
    if (!quadMesh) {
        var quadAttributes = [ { data: quadPositions, location: ctx.ATTRIB_POSITION } ];
        var quadIndices = { data: quadFaces };
        quadMesh = ctx.createMesh(quadAttributes, quadIndices);

        downsampleProgram = ctx.createProgram(VERT, FRAG);
    }

    renderToCubemap(ctx, toCubemap, function() {
        ctx.bindTexture(fromCubemap, 0);
        ctx.bindProgram(downsampleProgram);
        downsampleProgram.setUniform('uEnvMap', 0);
        downsampleProgram.setUniform('uTextureSize', toCubemap.getWidth())
        ctx.bindMesh(quadMesh);
        ctx.drawMesh();
    });
    ctx.popState(ctx.MESH_BIT | ctx.PROGRAM_BIT); //ctx.TEXTURE_BIT
}

module.exports = downsampleCubemap;
