const scenes = require('./scenes.js')

scenes.createScene('Act_I', `
Home Sweet Home:
The home is full of wildlife and greenery. While you're enjoying life a wildfire breaks out causing the entire town to go into a state of emergency. You need to abandon your house. The gas station is burnt down and you can only take 2 items with you.`,
[
    { description: "Not so friendly neighborhood", scene: "Act_II"},
])

scenes.createScene('Act_II',`
Not so friendly neighborhood
As you begin to leave home, that your neighbours have no food left and are starving. Out of desperation, they ask you for food.`,
[
    { description: "Wild Wolf", scene: "Act_III"} 
])

scenes.createScene('Act_III',`
Wild Wolf: You continue along the path, there is a wolf nearby. Its a dangerous animal that can kill you. However, its fur can be used to keep you warm if you don't have a pair of warm clothes if you can kill it. You can choose to engage in a fight or leave.`,
[
    { description: "Cold Days Ahead", scene: "Act_IV"}
])

scenes.createScene('Act_IV',`
Cold Days Ahead:You continue in your journey. As you keep moving you get hit by a severly cold weather. You check for warm clothes in your inventory`,
[
    { description: "Nearby town", scene: "Act_V"}
])

scenes.createScene('Act_V', `
Nearby town: You finally got through winter and reached the nearby town. But along with you there are many displaced people from your hometown causing a strain on the resources in this new town. The grocery stores are emptied. As a result the town's residents are hostile and has turned into a anarchy. It is a kill or be killed situation.`,
[
    { description: "You have survived", scene: "Act_VI"}
])

scenes.createScene('Act_VI',`
You have survived: Despite all the obstacles and adversity you have survived to see another day. Congratulations Survivor! You have made it so far and are looking forward to better days.`)