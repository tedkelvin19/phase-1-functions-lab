// Code your solution in this file!
const hqBlock = 42

function distanceFromHqInBlocks(block){
    if (block>hqBlock) {
        return block-hqBlock
    } else {
        return hqBlock-block
    }
}

function distanceFromHqInFeet(block){
    return  distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1,block2){
    if (block1<block2) {
        return (block2 - block1)*264
    } else {
        return (block1 - block2)*264
    }
}
function calculatesFarePrice(block1,block2){
    let distance = distanceTravelledInFeet(block1,block2)
    if(distance<=400){
        return 0
    }
    if (distance>400 && distance<=2000) {
        return (distance-400) * 0.02
    } else if(distance>2000 && distance<=2500) {
        return 25;
    } else{
        return "cannot travel that far"
    }
}