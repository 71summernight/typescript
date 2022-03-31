type Resource = LoadingState | SuccessState | FailState

type LoadingState ={
    state: 'loading'
}
type SuccessState = {
    state: 'success',
    response: {
     body: string
    }
}
type FailState = {
    state: 'fail'
    reason:string
}

function printLoginSTate(state:Resource){
        switch(state.state){
            case 'loading':
            console.log(`@@ ${state.state}...`)
            break
            case 'success':
            console.log(`^^ ${state.response.body}`)
            break
            case 'fail':
            console.log(`bb ${state.reason}`)
            break;
        }
    
}
printLoginSTate({state:'loading'})
printLoginSTate({state:'loading', response: {body: 'loaded'}})
printLoginSTate({state:'loading', reason: 'no network'})
printLoginSTate({state:'loading'})