import chalk from 'chalk';
import logSymbols from 'log-symbols'

console.log(logSymbols.success, chalk.gray.italic('Servidor Iniciado'))

console.log(`
CPU: ${chalk.red('90%')} ${logSymbols.error}
RAM: ${chalk.green('40%')} ${logSymbols.success}
DISK: ${chalk.yellow('70%')} ${logSymbols.warning}
`);

