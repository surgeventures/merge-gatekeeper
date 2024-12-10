const process = require('node:process');
const core = require('@actions/core');
const os = require('node:os');
const childProcess = require('node:child_process');

const PLATFORM = process.platform;
const CPU_ARCH = os.arch();


function chooseBinary() {
    if ( PLATFORM !== 'linux') {
        throw new Error('Only linux is supported')
    }

    if ( CPU_ARCH !== 'x64' && CPU_ARCH !== 'arm64') {
        throw new Error('Only x64 and arm64 are supported')
    }

    if (PLATFORM === 'linux' && CPU_ARCH === 'x64') {
        core.notice("Linux ARM64 binary selected")
        return `action-linux-amd64`
    }
    if (PLATFORM === 'linux' && CPU_ARCH === 'arm64') {
        core.notice("Linux ARM64 binary selected")
        return `action-linux-arm64`
    }
}

let pathToBinaries = `${__dirname}`
if (__filename.split("/").pop() === "invoke-binary.js") {
    core.notice("Running invoke-binary.js")
    pathToBinaries = `${__dirname}/dist`
}

const binary = chooseBinary()
const mainScript = `${pathToBinaries}/${binary} validate --token="${core.getInput('token')}" --self="${core.getInput('self')}" --interval="${core.getInput('interval')}" --ref="${core.getInput('ref')}" --timeout="${core.getInput('timeout')}" --ignored="${core.getInput('ignored')}"`
const spawnSyncReturns = childProcess.spawnSync(mainScript, { 
    stdio: 'inherit',
    shell: true,
 })
process.exit(spawnSyncReturns.status ?? 0)
