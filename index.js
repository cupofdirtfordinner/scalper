wood = 1000;
planks = 1000;
sticks = 1000;
stone = 1000;
door = 0;
shelter = 0;
iron = 10;
dirt = 0;

tools = 0;
var random = 0;

function collectWood() {
  wood += 1;
}

function mineStone() {
  stone += 1;
}

function woodToPlanks() {
  if (wood > 0) {
    wood -= 1;
    planks += 4;
  }
}

function digDirt() {
dirt += 1;
}

function planksToSticks() {
  if (planks >= 2) {
    planks -= 2;
    sticks += 4;
  }
}

function planksToDoor() {
  if (planks >= 6) {
    planks -= 6;
    door += 1;
  }
}

function stoneAndDoorToShelter() {
  if (door >= 1) {
    if (stone >= 26) {
      shelter += 1;
      door -= 1;
      stone -= 26;
    }
  }
}

function ironToBucket() {
if (iron >= 3) {
tool += 1;
}}

function planksAndSticksToPickaxe() {
  if (planks >= 3) {
    if (sticks >= 2) {
      tools += 1;
      planks -= 3;
      sticks -= 2;

      document.getElementById("planksAndSticksToPickaxe").style.display = "none";
      document.getElementById("pickaxeUpgradeOne").style.display = "inline-block";
      document.getElementById("mineStone").style.display = "inline-block";
      console.log("tools = " + tools);
    }
  }
}

function sticksAndIronForShovel() {
if (sticks >= 2) {if (iron >= 1) {
tools += 1;
sticks -= 2;
iron -= 1;
document.getElementById("shovel").style.display = "none";
document.getElementById("pickaxeUpgradeOne").style.display = "inline-block";
document.getElementById("digDirt").style.display = "inline-block";
}}}

function sticksAndPlanksAndIronToPickaxe() {
if (sticks >= 500) {if (planks >= 100) {if (iron >= 25){
ironPickaxe += 1;
sticks -= 500;
planks -= 100;
iron -= 25;
}}}}

function pickaxeUpgradeOne() {
  if (planks >= 150) {
    if (stone >= 75) {
      tools += 1;
      planks -= 150;
      stone -= 75;
      document.getElementById("pickaxeUpgradeOne").style.display = "none";
      document.getElementById("shovel").style.display = "inline-block";
    }
  }
}

function forever() {
  document.getElementById("woodDisplay").innerHTML = wood;
  document.getElementById("planksDisplay").innerHTML = planks;
  document.getElementById("sticksDisplay").innerHTML = sticks;
  document.getElementById("stoneDisplay").innerHTML = stone;
  document.getElementById("doorDisplay").innerHTML = door;
  document.getElementById("shelterDisplay").innerHTML = shelter;
  document.getElementById("pickaxeLevel").innerHTML = tools;
  document.getElementById("dirtDisplay").innerHTML = dirt;
  document.getElementById("ironDisplay").innerHTML = iron;
 
}

function sometimes() {
  console.log(random);
	random = (Math.random() * 100);
  if (tools >= 2) { if (random > 85) {
    document.getElementById("mineIron").style.display = "inline-block";
  	}
  }
}

function mineIron() {
  iron += 1;
  document.getElementById("mineIron").style.display = "none";
}

var intervalId = window.setInterval(function() {
  forever()
}, 10);

var intervalId = window.setInterval(function() {
  sometimes()
}, 4000);
