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
    let newBranchResponse = null
    try{
        newBranchResponse = await git.checkoutBranch('newBranch3', 'master')

    }
    catch(e){
        console.error(`Unable to checkout to new branch due to ${e}`)
    }
    return newBranchResponse
}

async function checkout(branch){
    let checkoutResponse = null
    try{
        console.log(`Checking out to existing branch ${branch}`)
        checkoutResponse = await git.checkout(branch)
    }
    catch(e){
        console.error(`Unable to checkout to existing branch due to ${e}`)
    }
    return checkoutResponse
}

async function addAll(){
    try{
        await git.add('.').commit("automated commit!")
    }
    catch(e){
        console.error(`Add failed due to ${e}`)
    }
}

async function commit(){
    try{
        await git.commit("automated commit!")
    }
    catch(e){
        console.error(`Commit failed due to ${e}`)

    }
}

async function pushNoVerify(){
    try{
        await git.push(['--no-verify'])
    }
    catch(e){
        console.error(`Unable to push --no-verify due to ${e}`)
    }
}

//status()//.then(status => console.log('STATUS:', status));
//fetch()//.then(fetchResponse => console.log('FETCH:', fetchResponse));
//pull()//.then(pullResponse => console.log('PULL:',pullResponse))
//checkoutNewBranch().then(newBranchResponse => console.log('CHECKOUT -B:',newBranchResponse))
//checkout('newBranch').then(existingBranchResponse => console.log('CHECKOUT:',existingBranchResponse))
status().then(status => console.log('STATUS:', status));
addAll()
//commit()
pushNoVerify()

// checkout('master').then(existingBranchResponse => console.log('CHECKOUT:',existingBranchResponse))
// status().then(status => console.log('STATUS:', status));

// fetch().then(fetchResponse => console.log(fetchResponse));
