const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Genera archivo de la tabla de multiplicar', opts)
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
}