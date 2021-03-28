const simpleGit = require('simple-git')
const git = simpleGit()

async function status(){
    let statusSummary = null
    try{
        statusSummary = await git.status()
    }
    catch(e){
        console.error(`Unable to get status due to ${e}`)
    }
    return statusSummary
}

async function fetch(){
    let fetchResponse = null
    try{
        fetchResponse = await git.fetch(['--all'])
    }
    catch(e){
        console.error(`Unable to fetch due to ${e}`)
    }
    return fetchResponse
}

async function pull(){
    let pullResponse = null
    try{
        pullResponse = await git.pull()
    }
    catch(e){
        console.error(`Unable to pull due to ${e}`)
    }
    return pullResponse
}

async function checkoutNewBranch(){
    try{
        await git.checkoutBranch('newBranch', 'master')

    }
    catch(e){
        console.error(`Unable to checkout due to ${e}`)
    }
}

status()//.then(status => console.log('STATUS:', status));
fetch().then(fetchResponse => console.log('FETCH:', fetchResponse));
pull().then(pullResponse => console.log('PULL:',pullResponse))
//checkoutNewBranch()
//fetch().then(fetchResponse => console.log(fetchResponse));
