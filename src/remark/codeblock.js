const visit = require('unist-util-visit');
const { spawnSync } = require('child_process');

const plugin = (options) => {
    const preprocess = code => {

        const docRunner = spawnSync('java.exe', ['-cp', 'rascal.jar', 'org.rascalmpl.shell.DocRunner'], { input: code });

        if (docRunner.status === 1) { 
            console.log('>> error:', docRunner.stderr.toString());
            throw new Error(`Problem in code block:\n${code}`);
        }
        return docRunner.stdout ? docRunner.stdout.toString() : null;
    };

    const transformer = async (ast) => {
        // console.log(ast);
        visit(ast, 'code', (node) => {
            // console.log(node);
            if (node.lang && node.lang.includes('rascal')) {
                node.value = preprocess(node.value);
            }
        });
    };
    return transformer;
};

module.exports = plugin;