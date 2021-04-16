const available_items =  ["knife","warm_clothes","med_supplies","food"]
let player_data = {"health":100, "inventory":[]}

function check_inventory(item){
    if (player_data.inventory.includes(item)){return true}
    return false}

function remove_from_inventory(item){
    const index = player_data.inventory.indexOf(item);
    if (index > -1) {player_data.inventory.splice(index, 1)}}

function random_between(a,b){return Math.floor(a + Math.random() * (b-a))}

function use_med_supplies(){
    player_data.health = Math.min(100, player_data.health + 25)
    remove_from_inventory("med_supplies")
}

function damage_return(a,b,message){
    const damage = random_between(a,b)
        player_data.health -= damage
        if (player_data.health>0) { 
            console.log(message, damage)
            console.log(player_data)
            return player_data
        }
        console.log ("GAME OVER")
}

//Scene 1:
async function scene_1(item_1, item_2){
    console.log("In Scene 1",item_1,item_2)
    if (available_items.includes(item_1) && available_items.includes(item_2)){
        player_data.inventory.push(item_1, item_2)
        console.log(player_data)
        return player_data
    }

    console.log("Invalid_item")    
}

// Scene2: 0=> don't give food, 1=> give food
async function scene_2(give_or_no_give){
    if (check_inventory("food") && give_or_no_give){
        remove_from_inventory("food")
        player_data.inventory.push("med_supplies")
        console.log("Food removed from inventory. Neighbour gave you med_supplies in return")
        return player_data
    }
    else if (check_inventory("knife")){
        console.log("When the neighbour tried to be aggressive, you threatened him with a knife. Both went their own ways unharmed.")
        return player_data
    }
    else {
        damage_return(20,40,"Fight occurs and you end up taking a small damage of")
    }
}

//Scene 3 0=> no fight wolf, 1=> fight
async function scene_3(fight_or_no_fight){
    if (fight_or_no_fight && check_inventory("knife")) 
        {damage_return(20,30,"You had a knife so took a small damage of") } 
    else if (fight_or_no_fight && !check_inventory("knife")) 
        {damage_return(60,80,"You didn't have a knife so took a big damage of")}
    else
        {damage_return(20,40,"You tried to avoid wolf but the wolf still attacked you. You managed to flee but still took a minor damage of")} 
    }

async function scene_4(){
    if (!check_inventory("warm_clothes")) {
        damage_return(60,70,"You didn't have warm clothes during this cold and took a damage of ")
    }
    console.log("You had warm clothes in cold weather and took no damage")
}

async function scene_5(){
    if (!check_inventory("knife")) {
        damage_return(40,50,"You didn't have any weapon during a fight and took a damage of ")
    }
    else {damage_return(10,20,"You had a knife and took a modest damage of ")}
}
// Testing functions:
//scene_1("knife","warm_clothes")
// scene_2(0)
// scene_3(0)
// scene_4()
// scene_5()

module.exports = {scene_1, scene_2, scene_3, scene_4, scene_5}