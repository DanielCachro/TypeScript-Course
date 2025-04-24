
let userName = 'Max'


type UserName = typeof userName


const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
}






type Settings = typeof settings


function loadData(settings: Settings){
    // ...
}
loadData(settings)


