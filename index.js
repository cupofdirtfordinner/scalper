var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var wood = values[0];
var planks = values[1];
var sticks = values[2];
var stone = values[3];
var door = values[4];
var shelter = values[5];
var iron = values[6];
var dirt = values[7];
var coins = values[8];
var farm = values[9];
var villagers = values[10];
var wheat = values[11];

function updateValues() {
	username = document.getElementById("name").value;
  values[0] = wood;
  values[1] = planks;
  values[2] = sticks;
  values[3] = stone;
  values[4] = door;
  values[5] = shelter;
  values[6] = iron;
  values[7] = dirt;
  values[8] = coins;
  values[9] = farm;
  values[10] = villagers;
  values[11] = wheat;
  values[12] = toolArray[0]
  values[13] = toolArray[1]
  values[14] = toolArray[2]
  values[15] = toolArray[3]
  values[16] = toolArray[4]
}

function loadValues() {
  document.getElementById("name").value = username;
  wood = parseInt(values[0]);
  planks = parseInt(values[1]);
  sticks = parseInt(values[2]);
  stone = parseInt(values[3]);
  door = parseInt(values[4]);
  shelter = parseInt(values[5]);
  iron = parseInt(values[6]);
  dirt = parseInt(values[7]);
  coins = parseInt(values[8]);
  farm = parseInt(values[9]);
  villagers = parseInt(values[10]);
  wheat = parseInt(values[11]);
  toolArray[0] = parseInt(values[12]);
  toolArray[1] = parseInt(values[13]);
  toolArray[2] = parseInt(values[14]);
  toolArray[3] = parseInt(values[15]);
  toolArray[4] = parseInt(values[16]);
}

var ironPickaxe = 0;
var toolArray = [0, 0, 0, 0, 0];
//pickaxe, shovel, axe, sword, bucket
//axe sword and bucket not yet implemented
var autoToolArray = [0, 0, 0];
var villagerArray = [0, 0, 0];
//pickaxe, shovel, axe

var random = 0;
var changelog = 0;
var setting = 0;
var username = 0;
var chancce = 0;

function seeChangelog() {
  if (changelog === 0) {
    changelog = 1;
  } else {
    changelog = 0;
  }
}


function showsettings() {
  if (setting === 0) {
    setting = 1;
  } else {
    setting = 0;
  }
}

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

function refillWater() {
  toolArray[4] = 2;
  document.getElementById("refillWater").style.display = "none";
}

function harvestWheat() {
  wheat += farm;
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
    values[4] += 1;
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

function ironForBucket() {
  if (iron >= 3) {
    toolArray[4] = 1;
    iron -= 3;
    document.getElementById("bucket").style.display = "none";
  }
}

function planksAndSticksToPickaxe() {
  if (planks >= 3) {
    if (sticks >= 2) {
      toolArray[0] = 1;
      planks -= 3;
      sticks -= 2;

      document.getElementById("planksAndSticksToPickaxe").style.display = "none";
    }
  }
}

function sticksAndIronForShovel() {
  if (sticks >= 2) {
    if (iron >= 1) {
      toolArray[1] = 1;
      sticks -= 2;
      iron -= 1;
      document.getElementById("shovel").style.display = "none";
      document.getElementById("digDirt").style.display = "inline-block";
    }
  }
}

function dirtAndWaterForFarm() {
  if (dirt >= 8) {
    if (toolArray[4] === 2) {
      farm += 1;
      dirt -= 8;
      toolArray[4] = 1
    }
  }
}

function sticksAndPlanksAndIronToPickaxe() {
  if (values[2] >= 500) {
    if (values[1] >= 100) {
      if (values[6] >= 25) {
        ironPickaxe += 1;
        values[2] -= 500;
        values[1] -= 100;
        values[6] -= 25;
      }
    }
  }
}

function pickaxeUpgradeOne() {
  if (planks >= 150) {
    if (stone >= 75) {
      toolArray[0] = 1;
      planks -= 150;
      stone -= 75;
      document.getElementById("pickaxeUpgradeOne").style.display = "none";
      document.getElementById("shovel").style.display = "inline-block";
      document.getElementById("bucket").style.display = "inline-block";
    }
  }
}

function sellwood() {
  if (wood >= 1) {
    wood -= 1;
    coins += 2;
  }
}

function sellstone() {
  if (stone >= 1) {
    stone -= 1;
    coins += 2;
  }
}

function selliron() {
  if (iron >= 1) {
    iron -= 1;
    coins += 40;
  }
}

function selldirt() {
  if (dirt >= 1) {
    dirt -= 1;
    coins += 1;
  }
}

function sellplanks() {
  if (planks >= 1) {
    planks -= 1;
    coins += 2;
  }
}

function sellsticks() {
  if (sticks >= 1) {
    sticks -= 1;
    coins += 1;
  }
}

function selldoor() {
  if (door >= 1) {
    door -= 1;
    coins += 6;
  }
}

function sellshelter() {
  if (shelter >= 1) {
    shelter -= 1;
    coins += 60;
  }
}

function sellfarm() {
  if (farm > 0) {
    farm -= 1;
    coins += 12;
  }
}

function sellwheat() {
  if (wheat > 0) {
    wheat -= 1;
    coins += 1;
  }
}

function reapCrops() {
  farm += wheat;
  document.getElementById("wheatDisplay").style.display = "none";
}

function forever() {
  document.getElementById("woodDisplay").innerHTML = wood;
  document.getElementById("planksDisplay").innerHTML = planks;
  document.getElementById("sticksDisplay").innerHTML = sticks;
  document.getElementById("stoneDisplay").innerHTML = stone;
  document.getElementById("doorDisplay").innerHTML = door;
  document.getElementById("shelterDisplay").innerHTML = shelter;
  document.getElementById("toolDisp").innerHTML = toolArray;
  document.getElementById("dirtDisplay").innerHTML = dirt;
  document.getElementById("ironDisplay").innerHTML = iron;
  document.getElementById("coinDisplay").innerHTML = coins;
  document.getElementById("farmDisplay").innerHTML = farm;
  document.getElementById("wheatDisplay").innerHTML = wheat;

  if (toolArray[0] > 0) {
    document.getElementById("mineStone").style.display = "inline"
  }

  if (username === "secret code") {
    document.getElementById("devtools").style.display = "inline"
  }
  if (changelog === 1) {
    document.getElementById("changelog").style.display = "block";
  } else {
    if (changelog === 0) {
      document.getElementById("changelog").style.display = "none";
    }
    if (setting === 1) {
      document.getElementById("settingsTab").style.display = "block";
    } else {
      if (setting === 0) {
        document.getElementById("settingsTab").style.display = "none";
      }
    }
  
  
  }

  SaveGame = values;
  SaveGameTables = toolArray + "\n" + autoToolArray
}

function sometimes() {
  console.log("sometimes");
  if (toolArray[0] > 1) {
    document.getElementById("mineIron").style.display = "inline-block";
  }

  if (toolArray[4] === 1) {
    //if (random > 30) {
    document.getElementById("refillWater").style.display = "inline-block";
  }
  if (farm > 0) {
    //if (random > 30) {
    document.getElementById("reapCrops").style.display = "inline-block";
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
}, 12000);

var SaveGame = 0;

function saveFile() {
  var file = new File([allVarNewLine], 'save.txt', {
    type: "text/plain:charset=UTF-8"
  })
  url = window.URL.createObjectURL(file); //unused because cheating is easier. reimplement after encryption

  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = file.name;
  a.click();
  window.URL.revokeObjectURL(url);

}

function save() {
	updateValues();
  localStorage.setItem("save", values);
  localStorage.setItem("username", username);
  console.log(localStorage.getItem("save"));
  console.log(username);
  console.log("game saved");
}

function makewood4() {
  wood = 4;
}

var Load = 0;
var loadedSave = 0;

function load() {
  values = localStorage.getItem("save");
  values = values.split(",")
  username = localStorage.getItem("username");
  loadValues();
  console.log(localStorage.getItem("save"))
  console.log(localStorage.getItem("username"))
  console.log(values);
  console.log(username)
  document.getElementById("name").value = username;

  console.log("game loaded");
}

function devtools() {
  if (username === "secret code") {
    localStorage.setItem("save", "99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999,99999999");
    console.log("wee wah");
  } else {
    console.log("loser!");
  }
}
