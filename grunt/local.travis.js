
exports.setup = function(grunt, mzax, DEBUG_NS)
{
    
    mzax.registerBuild(grunt, 'travis', '../MagentoDir', {
        debug: false
    });
    
    
}
