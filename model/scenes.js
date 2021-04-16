let scenes = {}

function createScene(id, title, description,options) {
    scenes[id] = {
        id,
        title,
        description,
        options
    }
}

function findSceneById(id) {
    let scene = scenes[id]
    if (!scene) {
        throw new Error("Scene " + id + " does not exist!")
    }
    return scene
}


module.exports = {
    createScene,
    findSceneById
}