function updateGeneralModifiers() {
  // Updates Size modifier based on the value of the Size dropdown

  var advRank = document.getElementById("advRank").value;
  document.getElementById("advRankValue").innerHTML = advRank[4];

  var charSize = document.getElementById("charSize").value;

  switch (charSize) {
    case "tiny":
      sizeMod = 1;
      break;
    case "small":
      sizeMod = 3;
      break;
    case "medium":
      sizeMod = 5;
      break;
    case "large":
      sizeMod = 10;
      break;
    case "huge":
      sizeMod = 30;
      break;
    case "giant":
      sizeMod = 100;
      break;
    case "gargantuan":
      sizeMod = 200;
      break;
  }
  document.getElementById("sizeMod").innerHTML = sizeMod;
}

function rollDice(number) {
  // Generates random number form 1 to {number}; good for DICE ROLLING
  randNum = Math.floor(Math.random() * number + 1);
  return randNum;
}

function rollRandZeroedIndex(number) {
  // Generates random number from 0 to {number}; good for ARRAY INDEXES
  randNum = Math.floor(Math.random() * number);
  return randNum;
}

function updateRaceAndSize() {
  // Updates Size dropdown (charSize) based on Race (charRace)
  var charRace = document.getElementById("charRace").value;

  if (charRace == "orc") {
    document.getElementById("charSize").value = "large";
  } else if (charRace == "halfling" || charRace == "gnome") {
    document.getElementById("charSize").value = "small";
  } else {
    document.getElementById("charSize").value = "medium";
  }
}

function generateRandomAspects() {
  // Randomly assigns the 8, 8, 9 values to each Aspect column
  var highMightAspect = rollDice(3);
  if (highMightAspect == 1) {
    document.getElementById("strScore").value = 9;
    document.getElementById("conScore").value = 8;
    document.getElementById("rlvScore").value = 8;
  } else if (highMightAspect == 2) {
    document.getElementById("strScore").value = 8;
    document.getElementById("conScore").value = 9;
    document.getElementById("rlvScore").value = 8;
  } else if (highMightAspect == 3) {
    document.getElementById("strScore").value = 8;
    document.getElementById("conScore").value = 8;
    document.getElementById("rlvScore").value = 9;
  }

  var highAwarenessAspect = rollDice(3);
  if (highAwarenessAspect == 1) {
    document.getElementById("perScore").value = 9;
    document.getElementById("intScore").value = 8;
    document.getElementById("wisScore").value = 8;
  } else if (highAwarenessAspect == 2) {
    document.getElementById("perScore").value = 8;
    document.getElementById("intScore").value = 9;
    document.getElementById("wisScore").value = 8;
  } else if (highAwarenessAspect == 3) {
    document.getElementById("perScore").value = 8;
    document.getElementById("intScore").value = 8;
    document.getElementById("wisScore").value = 9;
  }

  var highIntellectAspect = rollDice(3);
  if (highIntellectAspect == 1) {
    document.getElementById("witScore").value = 9;
    document.getElementById("logScore").value = 8;
    document.getElementById("memScore").value = 8;
  } else if (highIntellectAspect == 2) {
    document.getElementById("witScore").value = 8;
    document.getElementById("logScore").value = 9;
    document.getElementById("memScore").value = 8;
  } else if (highIntellectAspect == 3) {
    document.getElementById("witScore").value = 8;
    document.getElementById("logScore").value = 8;
    document.getElementById("memScore").value = 9;
  }

  var highAptitudeAspect = rollDice(3);
  if (highAptitudeAspect == 1) {
    document.getElementById("creScore").value = 9;
    document.getElementById("dexScore").value = 8;
    document.getElementById("deftScore").value = 8;
  } else if (highAptitudeAspect == 2) {
    document.getElementById("creScore").value = 8;
    document.getElementById("dexScore").value = 9;
    document.getElementById("deftScore").value = 8;
  } else if (highAptitudeAspect == 3) {
    document.getElementById("creScore").value = 8;
    document.getElementById("dexScore").value = 8;
    document.getElementById("deftScore").value = 9;
  }
}

function assignRandomFavorites() {
  // Randomly determines favored ATTRIBUTES based on race and updates Base Attribute values; assigns favored Aspects based on race and updates the aspectScore; randomly determines favored Traits and Skills and displays them

  var charRace = document.getElementById("charRace").value;
  document.getElementById("baseMight").value = 0;
  document.getElementById("baseAwareness").value = 0;
  document.getElementById("baseIntellect").value = 0;
  document.getElementById("baseAptitude").value = 0;

  var baseMight = parseInt(document.getElementById("baseMight").value);
  var baseAwareness = parseInt(document.getElementById("baseAwareness").value);
  var baseIntellect = parseInt(document.getElementById("baseIntellect").value);
  var baseAptitude = parseInt(document.getElementById("baseAptitude").value);

  if (charRace == "human") {
    var randAttributeIndexOne = rollDice(4);
    var randAttributeIndexTwo = rollDice(4);

    if (randAttributeIndexOne != randAttributeIndexTwo) {
      if (randAttributeIndexOne == 1) {
        baseMight = 1;
      } else if (randAttributeIndexOne == 2) {
        baseAwareness = 1;
      } else if (randAttributeIndexOne == 3) {
        baseIntellect = 1;
      } else if (randAttributeIndexOne == 4) {
        baseAptitude = 1;
      }

      if (randAttributeIndexTwo == 1) {
        baseMight = 1;
      } else if (randAttributeIndexTwo == 2) {
        baseAwareness = 1;
      } else if (randAttributeIndexTwo == 3) {
        baseIntellect = 1;
      } else if (randAttributeIndexTwo == 4) {
        baseAptitude = 1;
      }
    } else if (randAttributeIndexOne == randAttributeIndexTwo) {
      if (randAttributeIndexOne == 1) {
        baseMight = 2;
      } else if (randAttributeIndexOne == 2) {
        baseAwareness = 2;
      } else if (randAttributeIndexOne == 3) {
        baseIntellect = 2;
      } else if (randAttributeIndexOne == 4) {
        baseAptitude = 2;
      }
    }
  } else if (charRace[3] === "g") {
    //this one is super funky. In order to avoid having a bunch of || for each color of dragonborn, I just picked an index of the word "dragonborn" that was unique ("g" in the 3rd position). But it works!
    baseMight = 1;
    baseIntellect = 1;
  } else if (charRace === "orc") {
    baseMight = 1;
    baseAwareness = 1;
  } else if (charRace === "goliath") {
    baseMight = 1;
    baseAwareness = 1;
  } else if (charRace === "elf") {
    baseAwareness = 1;
    baseAptitude = 1;
  } else if (charRace === "halfling") {
    baseIntellect = 1;
    baseAwareness = 1;
  } else if (charRace[1] === "w") {
    baseMight = 1;
    baseAptitude = 1;
  } else if (charRace === "gnome") {
    baseIntellect = 1;
    baseAptitude = 1;
  }

  document.getElementById("baseMight").value = baseMight;
  document.getElementById("baseAwareness").value = baseAwareness;
  document.getElementById("baseIntellect").value = baseIntellect;
  document.getElementById("baseAptitude").value = baseAptitude;

  // ASSIGN RANDOM FAVORED ASPECTS

  var baseStr = parseInt(document.getElementById("strScore").value);
  var baseCon = parseInt(document.getElementById("conScore").value);
  var baseRlv = parseInt(document.getElementById("rlvScore").value);
  var basePer = parseInt(document.getElementById("perScore").value);
  var baseInt = parseInt(document.getElementById("intScore").value);
  var baseWis = parseInt(document.getElementById("wisScore").value);
  var baseWit = parseInt(document.getElementById("witScore").value);
  var baseLog = parseInt(document.getElementById("logScore").value);
  var baseMem = parseInt(document.getElementById("memScore").value);
  var baseCre = parseInt(document.getElementById("creScore").value);
  var baseDex = parseInt(document.getElementById("dexScore").value);
  var baseDeft = parseInt(document.getElementById("deftScore").value);

  var favorBonus = 2;

  if (charRace == "human") {
    var randAspectIndexOne = rollDice(12);
    var randAspectIndexTwo = rollDice(12);

    if (randAspectIndexOne == randAspectIndexTwo) {
      upOrDown = rollDice(2);
      if (upOrDown == 1) {
        randAspectIndexTwo = randAspectIndexOne + 1;
      } else {
        randAspectIndexTwo = randAspectIndexOne - 1;
      }
    }

    if (randAspectIndexOne == 1) {
      document.getElementById("strScore").value =
        baseStr + parseInt(favorBonus);
    } else if (randAspectIndexOne == 2) {
      document.getElementById("conScore").value = baseCon + favorBonus;
    } else if (randAspectIndexOne == 3) {
      document.getElementById("rlvScore").value = baseRlv + favorBonus;
    } else if (randAspectIndexOne == 4) {
      document.getElementById("perScore").value = basePer + favorBonus;
    } else if (randAspectIndexOne == 5) {
      document.getElementById("intScore").value = baseInt + favorBonus;
    } else if (randAspectIndexOne == 6) {
      document.getElementById("wisScore").value = baseWis + favorBonus;
    } else if (randAspectIndexOne == 7) {
      document.getElementById("witScore").value = baseWit + favorBonus;
    } else if (randAspectIndexOne == 8) {
      document.getElementById("logScore").value = baseLog + favorBonus;
    } else if (randAspectIndexOne == 9) {
      document.getElementById("memScore").value = baseMem + favorBonus;
    } else if (randAspectIndexOne == 10) {
      document.getElementById("creScore").value = baseCre + favorBonus;
    } else if (randAspectIndexOne == 11) {
      document.getElementById("dexScore").value = baseDex + favorBonus;
    } else if (randAspectIndexOne == 12) {
      document.getElementById("deftScore").value = baseDeft + favorBonus;
    }

    if (randAspectIndexTwo == 1 && randAspectIndexTwo != randAspectIndexOne) {
      document.getElementById("strScore").value = baseStr + favorBonus;
    } else if (
      randAspectIndexTwo == 2 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("conScore").value = baseCon + favorBonus;
    } else if (
      randAspectIndexTwo == 3 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("rlvScore").value = baseRlv + favorBonus;
    } else if (
      randAspectIndexTwo == 4 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("perScore").value = basePer + favorBonus;
    } else if (
      randAspectIndexTwo == 5 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("intScore").value = baseInt + favorBonus;
    } else if (
      randAspectIndexTwo == 6 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("wisScore").value = baseWis + favorBonus;
    } else if (
      randAspectIndexTwo == 7 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("witScore").value = baseWit + favorBonus;
    } else if (
      randAspectIndexTwo == 8 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("logScore").value = baseLog + favorBonus;
    } else if (
      randAspectIndexTwo == 9 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("memScore").value = baseMem + favorBonus;
    } else if (
      randAspectIndexTwo == 10 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("creScore").value = baseCre + favorBonus;
    } else if (
      randAspectIndexTwo == 11 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("dexScore").value = baseDex + favorBonus;
    } else if (
      randAspectIndexTwo == 12 &&
      randAspectIndexTwo != randAspectIndexOne
    ) {
      document.getElementById("deftScore").value = baseDeft + favorBonus;
    }
  } else if (charRace[3] === "g") {
    //this one is super funky. In order to avoid having a bunch of || for each color of dragonborn, I just picked an index of the word "dragonborn" that was unique ("g" in the 3rd position). But it works!
    document.getElementById("strScore").value = baseStr + favorBonus;
    document.getElementById("conScore").value = baseCon + favorBonus;
    document.getElementById("rlvScore").value = baseRlv + favorBonus;
    document.getElementById("memScore").value = baseMem + favorBonus;
  } else if (charRace === "orc") {
    document.getElementById("strScore").value = baseStr + favorBonus;
    document.getElementById("conScore").value = baseCon + favorBonus;
    document.getElementById("perScore").value = basePer + favorBonus;
    document.getElementById("intScore").value = baseInt + favorBonus;
  } else if (charRace === "elf") {
    document.getElementById("wisScore").value = baseWis + favorBonus;
    document.getElementById("perScore").value = basePer + favorBonus;
    document.getElementById("dexScore").value = baseDex + favorBonus;
    document.getElementById("deftScore").value = baseDeft + favorBonus;
  } else if (charRace === "halfling") {
    document.getElementById("memScore").value = baseMem + favorBonus;
    document.getElementById("witScore").value = baseWit + favorBonus;
    document.getElementById("intScore").value = baseInt + favorBonus;
    document.getElementById("wisScore").value = baseWis + favorBonus;
  } else if (charRace[1] === "w") {
    document.getElementById("strScore").value = baseStr + favorBonus;
    document.getElementById("conScore").value = baseCon + favorBonus;
    document.getElementById("rlvScore").value = baseRlv + favorBonus;
    document.getElementById("deftScore").value = baseDeft + favorBonus;
  } else if (charRace === "gnome") {
    document.getElementById("deftScore").value = baseDeft + favorBonus;
    document.getElementById("creScore").value = baseCre + favorBonus;
    document.getElementById("logScore").value = baseLog + favorBonus;
    document.getElementById("witScore").value = baseWit + favorBonus;
  }

  // ASSIGN FAVORED TRAITS
  var traitArray = [
    "Fear",
    "Hate",
    "Honor",
    "Loyalty",
    "Love",
    "Focus",
    "Madness",
    "Faith",
    "Devotion",
    "Addiction",
    "Authority",
    "Autonomy",
    "Good",
    "Neutral",
    "Evil",
  ];
  var randTraitIndexOne = rollRandZeroedIndex(14);
  var randTraitIndexTwo = rollRandZeroedIndex(13);
  var favoredFirstTrait;
  var favoredSecondTrait;
  var favoredThirdTrait;
  var favoredFourthTrait;
  var traitArray2;

  if (charRace == "human") {
    var disadvantages = "None.";
    favoredFirstTrait = "Ambition";
    favoredSecondTrait = "Hubris";
    favoredThirdTrait = `${traitArray[randTraitIndexOne]}`;
    traitArray2 = traitArray.filter(function (element) {
      return element != favoredThirdTrait;
    });
    favoredFourthTrait = `${traitArray2[randTraitIndexTwo]}`;
  } else if (charRace[3] == "g") {
    var disadvantages = "None.";
    favoredFirstTrait = "Honor";
    favoredSecondTrait = "Focus";
    favoredThirdTrait = "Authority";
    favoredFourthTrait = "Evil";
  } else if (charRace == "orc") {
    var disadvantages = "None.";
    favoredFirstTrait = "Devotion";
    favoredSecondTrait = "Hate";
    favoredThirdTrait = "Neutral";
    favoredFourthTrait = "Evil";
  } else if (charRace == "elf") {
    var disadvantages =
      "Strength maximum is 16. Cannot have the Ambition Trait.";
    favoredFirstTrait = "Fear";
    favoredSecondTrait = "Neutral";
    favoredThirdTrait = "Autonomy";
    favoredFourthTrait = "";
  } else if (charRace === "halfling") {
    var disadvantages =
      "Strength and Constitution maximums are 12. Cannot have Authority Trait.";
    favoredFirstTrait = "Devotion";
    favoredSecondTrait = "Love";
    favoredThirdTrait = "Hope";
    favoredFourthTrait = "Autonomy";
  } else if (charRace[1] == "w") {
    var disadvantages =
      "Creativity Maximum is 12. You cannot create or invent original works.";
    favoredFirstTrait = "Loyalty";
    favoredSecondTrait = "Focus";
    favoredThirdTrait = "Hate";
    favoredFourthTrait = "Authority";
  } else if (charRace == "gnome") {
    var disadvantages = "Strength maximum is 10. Constitution maximum is 12.";
    favoredFirstTrait = "Hope";
    favoredSecondTrait = "Hate";
    favoredThirdTrait = "Focus";
    favoredFourthTrait = "Autonomy";
  }

  if (favoredFourthTrait) {
    var favoredTraitsText = `${favoredFirstTrait}, ${favoredSecondTrait}, ${favoredThirdTrait}, ${favoredFourthTrait}.`;
  } else {
    var favoredTraitsText = `${favoredFirstTrait}, ${favoredSecondTrait}, ${favoredThirdTrait}.`;
  }
  document.getElementById("traitsText").innerHTML = favoredTraitsText;
  document.getElementById("disadvantagesText").innerHTML = disadvantages;

  // ASSIGN FAVORED SKILLS

  var skillArray = [
    "Intrigue",
    "Leadership",
    "Fast Talk",
    "Perform",
    "Storytelling",
    "Insight",
    "Work Mechanism",
    "Sleight Of Hand",
    "Craft Armor",
    "Craft Jewelry Or Gem",
    "Craft Blade",
    "Leatherworking",
    "Cooking Lore",
    "History",
    "Plant Lore",
    "Cult Lore",
    "Creature Lore",
    "Spot Hidden",
    "Listen",
    "Scan",
    "Hunt And Track",
    "Drive",
    "Sail",
    "Swim",
    "Climb",
    "Jump",
    "Move Silently",
    "Sword",
    "Dagger",
    "Spear",
    "Blunt",
    "Axe",
    "Crossbow",
    "Bow",
    "Sling",
  ];
  var skillCategoryArray = [
    "socialSkills",
    "manipulationSkills",
    "loreSkills",
    "awarenessSkills",
    "movementSkills",
    "martialSkills",
  ];
  var skillPatternIndex = rollDice(10);
  if (skillPatternIndex <= 3) {
    skillPattern = "categoryPattern";
  } else if (skillPatternIndex > 3) {
    skillPattern = "fiveRandomPattern";
  }

  var favoredSkills;

  if (charRace == "human") {
    if (skillPattern == "categoryPattern") {
      var categoryIndex = skillCategoryArray[rollDice(5)];
      if (categoryIndex == "socialSkills") {
        favoredSkills = "Social Skills.";
      } else if (categoryIndex == "manipulationSkills") {
        favoredSkills = "Manipulation Skills.";
      } else if (categoryIndex == "loreSkills") {
        favoredSkills = "Lore Skills.";
      } else if (categoryIndex == "awarenessSkills") {
        favoredSkills = "Awareness Skills.";
      } else if (categoryIndex == "movementSkills") {
        favoredSkills = "Movement Skills.";
      } else if (categoryIndex == "martialSkills") {
        favoredSkills = "Martial Skills.";
      }
    } else if (skillPattern == "fiveRandomPattern") {
      var randSkillOneIndex = rollDice(34);
      var randSkillTwoIndex = rollDice(33);
      var randSkillThreeIndex = rollDice(32);
      var randSkillFourIndex = rollDice(31);
      var randSkillFiveIndex = rollDice(30);

      var randSkillOne = skillArray[randSkillOneIndex];

      var skillArray2 = skillArray.filter(function (element) {
        return element != randSkillOne;
      });
      var randSkillTwo = skillArray2[randSkillTwoIndex];
      //------------------------------------------------------------------------------
      var skillArray3 = skillArray2.filter(function (element) {
        return element != randSkillTwo;
      });
      var randSkillThree = skillArray3[randSkillThreeIndex];
      //------------------------------------------------------------------------------
      var skillArray4 = skillArray3.filter(function (element) {
        return element != randSkillThree;
      });
      var randSkillFour = skillArray4[randSkillFourIndex];
      //------------------------------------------------------------------------------
      var skillArray5 = skillArray4.filter(function (element) {
        return element != randSkillFour;
      });
      var randSkillFive = skillArray5[randSkillFiveIndex];
      //------------------------------------------------------------------------------
      favoredSkills = `${randSkillOne}, ${randSkillTwo}, ${randSkillThree}, ${randSkillFour}, ${randSkillFive}.`;
    }
  } else if (
    charRace == "dragonbornShinyBlack" ||
    charRace == "dragonbornDullBlack"
  ) {
    favoredSkills =
      "Training Sword Skill costs half the money and Downtime Actions (Rounded up). Breath weapon deals acid damage.";
  } else if (
    charRace == "dragonbornShinyBrassBronzeCopper" ||
    charRace == "dragonbornDullBrassBronzeCopper"
  ) {
    favoredSkills =
      "Base Armor is +2, instead of 0. Breath weapon deals fire damage.";
  } else if (
    charRace == "dragonbornShinyGold" ||
    charRace == "dragonbornDullGold"
  ) {
    favoredSkills =
      "Training Leadership costs half the money and Downtime Actions (Rounded up). Breath weapon deals fire damage.";
  } else if (
    charRace == "dragonbornShinyGreen" ||
    charRace == "dragonbornDullGreen" ||
    charRace == "dragonbornShinySilver" ||
    charRace == "dragonbornDullSilver"
  ) {
    favoredSkills =
      "Training Lore Skills costs half the money and Downtime Actions (Rounded up).";
  } else if (
    charRace == "dragonbornShinyRed" ||
    charRace == "dragonbornDullRed"
  ) {
    favoredSkills =
      "Training any Martial Skills costs half the money and Downtime Actions (Rounded up).";
  } else if (
    charRace == "dragonbornShinyBlue" ||
    charRace == "dragonbornDullBlue" ||
    charRace == "dragonbornDullWhite" ||
    charRace == "dragonbornShinyWhite"
  ) {
    favoredSkills = "Scan, Insight, Spear, Axe.";
  } else if (charRace == "orc") {
    favoredSkills = "Martial Skills, Perform (Sing), Awareness Skills.";
  } else if (charRace == "elf") {
    favoredSkills =
      "Ranged weapon skills, Sail, Plant Lore, Creature Lore, Perform (Instrument).";
  } else if (charRace === "halfling") {
    favoredSkills =
      "Fast Talk, Intrigue, Sleight of Hand, Cooking Lore, Move Silently.";
  } else if (charRace[1] == "w") {
    favoredSkills = "Craft Blade, Craft Armor, Axe, Blunt.";
  } else if (charRace == "gnome") {
    favoredSkills = "Manipulation Skills and Lore Skills.";
  }

  document.getElementById("favoredSkillsText").innerHTML = favoredSkills;
}

function generateRandomCulture() {
  // Randomly picks a culture from an array and changes the Culture dropdown to match
  const cultureArray = ["alliance"];
  const cultureArrayLength = cultureArray.length;
  const randCultureIndex = Math.floor(Math.random() * cultureArrayLength);
  const randCulture = cultureArray[randCultureIndex];

  document.getElementById("charCulture").value = randCulture;
}

function generateRandomRace() {
  // Rolls a d100 to determine Race (and subrace, if applicable) and changes the Race dropdown to match
  const randRaceIndex = Math.floor(Math.random() * 100 + 1);
  const randScaleTypeLusterIndex = Math.floor(Math.random() * 100 + 1);
  const randScaleTypeColorIndex = Math.floor(Math.random() * 100 + 1);

  if (randScaleTypeLusterIndex <= 58) {
    randScaleType = "human";
  } else if (randScaleTypeLusterIndex >= 73 && randScaleTypeLusterIndex <= 83) {
    randScaleType = "dwarf";
  } else if (randScaleTypeLusterIndex >= 84 && randScaleTypeLusterIndex <= 90) {
    randScaleType = "halfling";
  } else if (randScaleTypeLusterIndex >= 91 && randScaleTypeLusterIndex <= 94) {
    randScaleType = "elf";
  } else if (randScaleTypeLusterIndex >= 95 && randScaleTypeLusterIndex <= 97) {
    randScaleType = "orc";
  } else if (randScaleTypeLusterIndex >= 98 && randScaleTypeLusterIndex <= 99) {
    randScaleType = "gnome";
  } else if (randScaleTypeLusterIndex == 100) {
    randScaleType = "dragonborn";
  }

  if (randRaceIndex <= 73) {
    randRace = "human";
  } else if (randRaceIndex >= 73 && randRaceIndex <= 83) {
    randRace = "dwarf";
  } else if (randRaceIndex >= 84 && randRaceIndex <= 90) {
    randRace = "halfling";
  } else if (randRaceIndex >= 91 && randRaceIndex <= 94) {
    randRace = "elf";
  } else if (randRaceIndex >= 95 && randRaceIndex <= 97) {
    randRace = "orc";
  } else if (randRaceIndex >= 98 && randRaceIndex <= 99) {
    randRace = "gnome";
  } else if (randRaceIndex == 100) {
    randRace = "dragonborn";
    if (randScaleTypeLusterIndex <= 90) {
      randScaleTypeLuster = "Dull";
    } else {
      randScaleTypeLuster = "Shiny";
    }

    if (randScaleTypeColorIndex <= 58) {
      randScaleTypeColor = "BrassBronzeCopper";
    } else if (randScaleTypeColorIndex >= 59 && randScaleTypeColorIndex <= 64) {
      randScaleTypeColor = "Black";
    } else if (randScaleTypeColorIndex >= 65 && randScaleTypeColorIndex <= 70) {
      randScaleTypeColor = "Blue";
    } else if (randScaleTypeColorIndex >= 71 && randScaleTypeColorIndex <= 76) {
      randScaleTypeColor = "White";
    } else if (randScaleTypeColorIndex >= 77 && randScaleTypeColorIndex <= 82) {
      randScaleTypeColor = "Silver";
    } else if (randScaleTypeColorIndex >= 83 && randScaleTypeColorIndex <= 88) {
      randScaleTypeColor = "Gold";
    } else if (randScaleTypeColorIndex >= 89 && randScaleTypeColorIndex <= 94) {
      randScaleTypeColor = "Green";
    } else if (
      randScaleTypeColorIndex >= 95 &&
      randScaleTypeColorIndex <= 100
    ) {
      randScaleTypeColor = "Red";
    }

    dragonbornType = `${randRace}${randScaleTypeLuster}${randScaleTypeColor}`;
  }

  if (randRace == "dragonborn") {
    document.getElementById("charRace").value = `${dragonbornType}`;
  } else {
    document.getElementById("charRace").value = randRace;
  }
}

function generateRandomProfession() {
  // Rolls a d100 to determine character Profession and changes the Profession dropdown to match
  const randProfessionIndex = Math.floor(Math.random() * 100 + 1);

  if (randProfessionIndex <= 30) {
    var profession = "hunting";
  } else if (randProfessionIndex >= 30 && randProfessionIndex <= 50) {
    var profession = "labor";
  } else if (randProfessionIndex >= 51 && randProfessionIndex <= 62) {
    var profession = "craftsman";
  } else if (randProfessionIndex >= 63 && randProfessionIndex <= 70) {
    var profession = "merchant";
  } else if (randProfessionIndex >= 71 && randProfessionIndex <= 72) {
    var profession = "special";
  } else if (randProfessionIndex >= 73 && randProfessionIndex <= 77) {
    var profession = "criminal";
  } else if (randProfessionIndex >= 78 && randProfessionIndex <= 85) {
    var profession = "entertainment";
  } else if (randProfessionIndex >= 86 && randProfessionIndex <= 90) {
    var profession = "government";
  } else if (randProfessionIndex >= 91 && randProfessionIndex <= 100) {
    var profession = "military";
  }

  document.getElementById("charProfession").value = profession;
}

function updateAttributesAndAspects() {
  // Gets Aspect scores, calculates Aspect modifiers, and calculates Attribute scores
  var baseMight = parseInt(document.getElementById("baseMight").value);
  var baseAwareness = parseInt(document.getElementById("baseAwareness").value);
  var baseIntellect = parseInt(document.getElementById("baseIntellect").value);
  var baseAptitude = parseInt(document.getElementById("baseAptitude").value);

  // MIGHT ATTRIBUTE AND ASPECTS

  var strScore = document.getElementById("strScore").value;
  var conScore = document.getElementById("conScore").value;
  var rlvScore = document.getElementById("rlvScore").value;

  if (strScore <= 10) {
    strMod = Math.floor((strScore - 10) / 2);
  } else {
    strMod = Math.floor((strScore - 10) / 2);
  }
  document.getElementById("strMod").value = strMod;

  if (conScore <= 10) {
    conMod = Math.floor((conScore - 10) / 2);
  } else {
    conMod = Math.floor((conScore - 10) / 2);
  }
  document.getElementById("conMod").value = conMod;

  if (rlvScore <= 10) {
    rlvMod = Math.floor((rlvScore - 10) / 2);
  } else {
    rlvMod = Math.floor((rlvScore - 10) / 2);
  }
  document.getElementById("rlvMod").value = rlvMod;

  mightModSum = strMod + conMod + rlvMod;

  if (mightModSum >= 0) {
    mightScore = Math.floor((strMod + conMod + rlvMod) / 2) + baseMight;
  } else {
    mightScore = Math.floor((strMod + conMod + rlvMod) / 2) + baseMight;
  }
  document.getElementById("mightScore").value = mightScore;

  // AWARENESS ATTRIBUTE AND ASPECTS

  var perScore = document.getElementById("perScore").value;
  var intScore = document.getElementById("intScore").value;
  var wisScore = document.getElementById("wisScore").value;

  if (perScore <= 10) {
    perMod = Math.floor((perScore - 10) / 2);
  } else {
    perMod = Math.floor((perScore - 10) / 2);
  }
  document.getElementById("perMod").value = perMod;

  if (intScore <= 10) {
    intMod = Math.floor((intScore - 10) / 2);
  } else {
    intMod = Math.floor((intScore - 10) / 2);
  }
  document.getElementById("intMod").value = intMod;

  if (wisScore <= 10) {
    wisMod = Math.floor((wisScore - 10) / 2);
  } else {
    wisMod = Math.floor((wisScore - 10) / 2);
  }
  document.getElementById("wisMod").value = wisMod;

  awarenessModSum = perMod + intMod + wisMod;

  if (awarenessModSum >= 0) {
    awarenessScore = Math.floor((perMod + intMod + wisMod) / 2) + baseAwareness;
  } else {
    awarenessScore = Math.floor((perMod + intMod + wisMod) / 2) + baseAwareness;
  }
  document.getElementById("awarenessScore").value = awarenessScore;

  // INTELLECT AWARENESS AND ASPECTS

  var witScore = document.getElementById("witScore").value;
  var logScore = document.getElementById("logScore").value;
  var memScore = document.getElementById("memScore").value;

  if (witScore <= 10) {
    witMod = Math.floor((witScore - 10) / 2);
  } else {
    witMod = Math.floor((witScore - 10) / 2);
  }
  document.getElementById("witMod").value = witMod;

  if (logScore <= 10) {
    logMod = Math.floor((logScore - 10) / 2);
  } else {
    logMod = Math.floor((logScore - 10) / 2);
  }
  document.getElementById("logMod").value = logMod;

  if (memScore <= 10) {
    memMod = Math.floor((memScore - 10) / 2);
  } else {
    memMod = Math.floor((memScore - 10) / 2);
  }
  document.getElementById("memMod").value = memMod;

  intellectModSum = witMod + logMod + memMod;

  if (intellectModSum >= 0) {
    intellectScore = Math.floor((witMod + logMod + memMod) / 2) + baseIntellect;
  } else {
    intellectScore = Math.floor((witMod + logMod + memMod) / 2) + baseIntellect;
  }
  document.getElementById("intellectScore").value = intellectScore;

  // APTITUDE AWARENESS AND ASPECTS

  var creScore = document.getElementById("creScore").value;
  var dexScore = document.getElementById("dexScore").value;
  var deftScore = document.getElementById("deftScore").value;

  if (creScore <= 10) {
    creMod = Math.floor((creScore - 10) / 2);
  } else {
    creMod = Math.floor((creScore - 10) / 2);
  }
  document.getElementById("creMod").value = creMod;

  if (dexScore <= 10) {
    dexMod = Math.floor((dexScore - 10) / 2);
  } else {
    dexMod = Math.floor((dexScore - 10) / 2);
  }
  document.getElementById("dexMod").value = dexMod;

  if (deftScore <= 10) {
    deftMod = Math.floor((deftScore - 10) / 2);
  } else {
    deftMod = Math.floor((deftScore - 10) / 2);
  }
  document.getElementById("deftMod").value = deftMod;

  aptitudeModSum = creMod + dexMod + deftMod;

  if (aptitudeModSum >= 0) {
    aptitudeScore = Math.floor((creMod + dexMod + deftMod) / 2) + baseAptitude;
  } else {
    aptitudeScore = Math.floor((creMod + dexMod + deftMod) / 2) + baseAptitude;
  }
  document.getElementById("aptitudeScore").value = aptitudeScore;
}

function updateArmorAndDefense() {
  var weaponTypeEquipped = document.getElementById("weaponTypeEquipped").value;
  var shieldClassEquipped = document.getElementById("shieldClass").value;
  var armorType = document.getElementById("armorType").value;
  var armorQuality = document.getElementById("armorQuality").value;
  var dexMod = parseInt(document.getElementById("dexMod").value);

  var swordRank = parseInt(document.getElementById("swordSkill").value[4]);
  var spearRank = parseInt(document.getElementById("spearSkill").value[4]);
  var bluntRank = parseInt(document.getElementById("bluntSkill").value[4]);
  var axeRank = parseInt(document.getElementById("axeSkill").value[4]);

  switch (shieldClassEquipped) {
    case "noshield":
      var shieldMeleeArmorBonus = 0;
      var shieldRangedBonus = 0;
      break;
    case "special":
      var shieldMeleeArmorBonus = 1;
      var shieldRangedBonus = 0;
      break;
    case "light":
      var shieldMeleeArmorBonus = 1;
      var shieldRangedBonus = 1;
      break;
    case "medium":
      var shieldMeleeArmorBonus = 2;
      var shieldRangedBonus = 3;
      break;
    case "heavy":
      var shieldMeleeArmorBonus = 3;
      var shieldRangedBonus = 5;
      break;
  }

  var meleeSkillArray = [swordRank, spearRank, bluntRank, axeRank];
  var sortedMeleeArray = meleeSkillArray.sort(function (a, b) {
    return b - a;
  }); // Sorts the melee skills in order of descending value
  var highestMeleeSkill = sortedMeleeArray[0];

  // MELEE DEFENSE AND ARMOR
  if (weaponTypeEquipped == "melee") {
    meleeDefense = 10 + highestMeleeSkill + dexMod;
  } else {
    meleeDefense = 10 + dexMod;
  }

  switch (armorType) {
    case "unarmored":
      var baseArmor = 0;
      document.getElementById("armorQuality").value = "n/a";
      break;
    case "leather":
      var baseArmor = 1;
      break;
    case "studdedleather":
      var baseArmor = 2;
      break;
    case "chainmail":
      var baseArmor = 3;
      break;
    case "brigandine":
      var baseArmor = 4;
      break;
    case "splintmail":
      var baseArmor = 5;
      break;
    case "halfplate":
      var baseArmor = 6;
      break;
    case "fullplate":
      var baseArmor = 7;
      break;
  }

  switch (armorQuality) {
    case "n/a":
      var qualityBonus = 0;
      break;
    case "shoddy":
      if (armorType == "leather" || armorType == "studded") {
        var qualityBonus = -1;
      } else if (armorType == "unarmored") {
        qualityBonus = 0;
      } else {
        var qualityBonus = -2;
      }
      break;
    case "standard":
      var qualityBonus = 0;
      break;
    case "superior":
      var qualityBonus = 1;
      break;
    case "masterwork":
      var qualityBonus = 2;
      break;
  }

  var meleeArmor = baseArmor + qualityBonus + shieldMeleeArmorBonus;

  // RANGED ARMOR AND DEFENSE

  var rangedDefense = 10 + dexMod + shieldRangedBonus;
  var rangedArmor = baseArmor + qualityBonus;

  document.getElementById("meleeDefense").innerHTML = meleeDefense;
  document.getElementById("meleeArmor").innerHTML = meleeArmor;
  document.getElementById("rangedDefense").innerHTML = rangedDefense;
  document.getElementById("rangedArmor").innerHTML = rangedArmor;
}

function generateAllianceName() {
  /*ALLIANCE NAME ARRAYS*/
  /*Raw Arrays: You can add new names here as you like.
      The forEach() that comes after will filter and make sure no duplicates make it
      into the arrays that the function actually pulls from */
  var rawMaleFirstArray = [
    "Thor",
    "Sven",
    "Stig",
    "Sigurd",
    "Rosen",
    "Olof",
    "Oliver",
    "Knut",
    "Ingolf",
    "Kjeld",
    "Iver",
    "Inge",
    "Holger",
    "Harold",
    "Harald",
    "Halvor",
    "Haakon",
    "Gunnar",
    "Gunder",
    "Gulbrand",
    "Espen",
    "Erken",
    "Erick",
    "Einar",
    "Kalfr",
    "Bran",
    "Bodil",
    "Bjorn",
    "Bjarne",
    "Baard",
    "Arvid",
    "Arne",
    "Alvar",
    "Alf",
    "Ake",
    "Agnar",
    "Freaca",
    "Fenbrand",
    "Goldmod",
    "Hereere",
    "Guthcanstan",
    "Haleth",
    "Derntor",
    "Leod",
    "Fengel",
    "Gamling",
    "Alleth",
    "Leoheort",
    "Dernor",
    "Frumdor",
    "Dunbald",
    "Erkendig",
    "Gleoda",
    "Folcwine",
    "Gleothain",
    "Walda",
    "Haling",
    "Frumere",
    "Goldgar",
    "Grimfara",
    "Widhelm",
    "Fastlaf",
    "Eorl",
    "Gleolaf",
    "Hagar",
    "Hereere",
    "Elfnere",
    "Garbald",
    "Frealing",
    "Leodan",
    "Badlred",
    "Folca",
    "Frumgar",
    "Aegir",
    "Age",
    "Aghi",
    "Agmundr",
    "Agnar",
    "Agnarr",
    "Agner",
    "Aage",
    "Aarne",
    "Ake",
    "Alva",
    "Arvid",
    "Asger",
    "Asmund",
    "Audun",
    "Balder",
    "Bard",
    "Birger",
    "Bjarke",
    "Bjarni",
    "Bjarte",
    "Bjorn",
    "Brandt",
    "Brant",
    "Brynjar",
    "Calder",
    "Canute",
    "Carr",
    "Colborn",
    "Colby",
    "Colden",
    "Corey",
    "Crosby",
    "Cuyler",
    "Dag",
    "Dagfinn",
    "Darby",
    "Destin",
    "Dustin",
    "Dusty",
    "Eerikki",
    "Egil",
    "Einar",
    "Eindride",
    "Eirik",
    "Elof",
    "Eluf",
    "Endre",
    "Eric",
    "Erico",
    "Erland",
    "Erlend",
    "Erling",
    "Even",
    "Fell",
    "Felman",
    "Fiske",
    "Folke",
    "Frey",
    "Fritjof",
    "Frode",
    "Gandalf",
    "Garth",
    "Geir",
    "Gosta",
    "Gudbrand",
    "Gudmund",
    "Gulbrand",
    "Gunnar",
    "Gunne",
    "Gustav",
    "Gustavo",
    "Hackett",
    "Hagen",
    "Hakon",
    "Haldor",
    "Hall",
    "Halstein",
    "Halvar",
    "Halvard",
    "Halvdan",
    "Halvor",
    "Hammond",
    "Haskell",
    "Havardr",
    "Hemming",
    "Herleig",
    "Herleifr",
    "Hjalmar",
    "Holger",
    "Holmes",
    "Igor",
    "Inge",
    "Ingemar",
    "Ingfred",
    "Inhard",
    "Ingolf",
    "Ingvar",
    "Ivar",
    "Iver",
    "Jari",
    "Jarl",
    "Jarle",
    "Jary",
    "Jerk",
    "Jerker",
    "Jerrik",
    "Kare",
    "Kelby",
    "Keld",
    "Kensley",
    "Kettil",
    "Kirby",
    "Kirk",
    "Kirkland",
    "Kirkwood",
    "Kjeld",
    "Kjell",
    "Knud",
    "Knute",
    "Kory",
    "Kustaa",
    "Lamont",
    "Lamonte",
    "Langley",
    "Latham",
    "Leif",
    "Loki",
    "Manning",
    "Odin",
    "Olaf",
    "Olavi",
    "Olavo",
    "Olin",
    "Olle",
    "Olsen",
    "Oluf",
    "Osmond",
    "Ove",
    "Ralph",
    "Randolph",
    "Rangvald",
    "Rangvaldr",
    "Raoul",
    "Raul",
    "Ronald",
    "Ronaldo",
    "Roscoe",
    "Selby",
    "Shelby",
    "Sigurd",
    "Soini",
    "Steen",
    "Stein",
    "Steiner",
    "Sten",
    "Stian",
    "Stig",
    "Stigr",
    "Sture",
    "Sutherland",
    "Sveinn",
    "Sven",
    "Svend",
    "Tait",
    "Tarben",
    "Thor",
    "Thorpe",
    "Thorsen",
    "Thorsten",
    "Thovaldr",
    "Thurman",
    "Thurmond",
    "Thurston",
    "Torben",
    "Torbjorn",
    "Tore",
    "Torsten",
    "Torvald",
    "Troels",
    "Trygve",
    "Tue",
    "Tyr",
    "Uffe",
    "Ulf",
    "Unn",
    "Vali",
    "Vern",
    "Vernon",
    "Vidar",
    "Viggo",
    "Welch",
  ];
  var rawFemaleFirstArray = [
    "Aila",
    "Aili",
    "Alfhild",
    "Alivia",
    "Alof",
    "Alva",
    "Alvilda",
    "Alwilda",
    "Angrboda",
    "Annbjorg",
    "Arnbjorg",
    "Asdis",
    "Ashildr",
    "Freya",
    "Frida",
    "Frea",
    "Eydis",
    "Erykah",
    "Erna",
    "Erle",
    "Embla",
    "Elli",
    "Eir",
    "Ebba",
    "Dora",
    "Dasa",
    "Dagrun",
    "Dagnija",
    "Dagmaer",
    "Cori",
    "Brynja",
    "Britta",
    "Brenna",
    "Bothildr",
    "Borghildur",
    "Theohild",
    "Beylida",
    "Ealwell",
    "Eowara",
    "Holddis",
    "Maetryth",
    "Gamgyth",
    "Theodwyn",
    "Widwyn",
    "Gleowen",
    "Heruhild",
    "Eadhild",
    "Eaddis",
    "Gamhild",
    "Godwen",
    "Maeryn",
    "Ceoldoina",
    "Maetlida",
    "Widwena",
    "Leofhild",
    "Holdhild",
    "Maetwine",
    "Widlith",
    "Aldrun",
    "Gleohild",
    "Elfwyn",
    "Hererith",
    "Leofgyth",
    "Dernwena",
    "Saedoina",
    "Gamwyn",
    "Waerwen",
    "Holdwyn",
    "Gleowyn",
    "Earun",
    "Hawyn",
    "Waerdis",
    "Beylid",
    "Eadnild",
    "Tidwyn",
    "Adalbjorg",
    "Audhild",
    "Aase",
    "Alfhild",
    "Alva",
    "Alvilda",
    "Ase",
    "Aslaug",
    "Aslog",
    "Asta",
    "Astrid",
    "Audhild",
    "Bergljot",
    "Bodil",
    "Borghild",
    "Brenda",
    "Brenna",
    "Dagmar",
    "Dagny",
    "Darby",
    "Dusty",
    "Eerika",
    "Eira",
    "Embla",
    "Erica",
    "Erika",
    "Eydis",
    "Freja",
    "Gerd",
    "Gull",
    "Gunborg",
    "Gunhild",
    "Gunilla",
    "Gunvor",
    "Gyda",
    "Hege",
    "Helga",
    "Helka",
    "Hella",
    "Helle",
    "Hertha",
    "Hillevi",
    "Inge",
    "Ingeborg",
    "Inger",
    "Ingrid",
    "Inkeri",
    "Iona",
    "Jorunn",
    "Kari",
    "Magnhild",
    "Nanna",
    "Oili",
    "Olga",
    "Oydis",
    "Ragna",
    "Ragnhild",
    "Runa",
    "Saga",
    "Sassa",
    "Selby",
    "Shelby",
    "Sigfrid",
    "Signe",
    "Signy",
    "Sigrid",
    "Sigrun",
    "Siri",
    "Siv",
    "Solveig",
    "Solvej",
    "Solvi",
    "Sylvi",
    "Thora",
    "Thyra",
    "Tone",
    "Torborg",
    "Tordis",
    "Torhild",
    "Toril",
    "Torny",
    "Tove",
    "Turid",
    "Tyra",
    "Unn",
    "Ylva",
  ];
  var rawLastArray = [
    "Wray",
    "Wragge",
    "Westerberg",
    "Waldo",
    "Vollan",
    "Vinter",
    "Vang",
    "Toft",
    "Thorburn",
    "Taft",
    "Strom",
    "Strand",
    "Stein",
    "Stendahl",
    "Stenberg",
    "Steensen",
    "Stack",
    "Sowards",
    "Solberg",
    "Soderberg",
    "Skovstrom",
    "Skovgard",
    "Skov",
    "Sjogren",
    "Sjoberg",
    "Shelby",
    "Seward",
    "Selby",
    "Schofield",
    "Sandstrom",
    "Sandberg",
    "Rusnak",
    "Rosenstrom",
    "Rosenberg",
    "Ray",
    "Randal",
    "Pilkvist",
    "Ostgaard",
    "Ostberg",
    "Osferth",
    "Osbourne",
    "Olsson",
    "Olsen",
    "Oliver",
    "Nystrom",
    "Nyquist",
    "Nykvist",
    "Nyberg",
    "Nordstrom",
    "Nickleby",
    "Ness",
    "Nass",
    "Naess",
    "Mondy",
    "Monday",
    "Moller",
    "Moen",
    "Moe",
    "Lundstrom",
    "Lundquist",
    "Lundin",
    "Lundgren",
    "Lundberg",
    "Lund",
    "Lofgren",
    "Ljungman",
    "Ljungstrand",
    "Ljungborg",
    "Ljung",
    "Lindquist",
    "Lindstrom",
    "Lindholm",
    "Lindberg",
    "Lindbeck",
    "Lind",
    "Lien",
    "Lie",
    "Lang",
    "Lange",
    "Kjaer",
    "Kirk",
    "Kirby",
    "Kerr",
    "Keir",
    "Ivers",
    "Hume",
    "Hult",
    "Howse",
    "Horn",
    "Holt",
    "Holmstrom",
    "Holmes",
    "Holme",
    "Holmberg",
    "Holm",
    "Hjort",
    "Hellstrom",
    "Haward",
    "Hallman",
    "Haig",
    "Hagen",
    "Gustaf",
    "Haakon",
    "Gunder",
    "Fisker",
    "Espen",
    "Erik",
    "Erckens",
    "Engstrom",
    "Engman",
    "Engberg",
    "Eld",
    "Eklund",
    "Ek",
    "Einar",
    "Eerken",
    "Porsteinn",
    "Dane",
    "Dam",
    "Dalgaard",
    "Dahlmann",
    "Dahl",
    "Cason",
    "Carr",
    "Bystrom",
    "Byquist",
    "Brant",
    "Bran",
    "Brand",
    "Borg",
    "Bodil",
    "Blomqvist",
    "Blomgren",
    "Blom",
    "Bjorkman",
    "Bjorklund",
    "Bjork",
    "Bjarn",
    "Bergstrom",
    "Bergman",
    "Berglund",
    "Berggren",
    "Bergfalk",
    "Berg",
    "Begbie",
    "Becket",
    "Beck",
    "Bakken",
    "Bakke",
    "Bager",
    "Baard",
    "Arvid",
    "Arud",
    "Akerman",
    "Akesson",
    "Alf",
    "Almstedt",
    "Alvar",
    "Amundsen",
    "Arne",
    "Agnar",
    "Aaby",
    "Aakre",
    "Aamodt",
    "Arud",
    "Aune",
    "Bang",
    "Becken",
    "Calland",
    "Dahl",
    "Dale",
    "Dammen",
    "Dybdahl",
    "Ege",
    "Elden",
    "Elstad",
    "Enberg",
    "Fadness",
    "Falla",
    "Fehn",
    "Fiske",
    "Flaa",
    "Fure",
    "Gaarder",
    "Gilla",
    "Granberg",
    "Greseth",
    "Hagen",
    "Hoye",
    "Igle",
    "Jahr",
    "Ahlberg",
    "Kahlberg",
    "Kolden",
    "Kvam",
    "Lund",
    "Manger",
    "Morken",
    "Narum",
    "Nes",
    "Odden",
    "Omdahl",
    "Pollen",
    "Ranum",
    "Rinde",
    "Selland",
    "Skagen",
    "Solberg",
    "Tanberg",
    "Ulven",
    "Valen",
    "Wahl",
    "Wang",
    "Anker",
    "Aubert",
    "Benkestok",
    "Bjelke",
    "Estridsen",
    "Falkenskiold",
    "Galtung",
    "Guldencrone",
    "Gyledenkrantz",
    "Gyldenlove",
    "Gyldenpalm",
    "Gyldenstjerne",
    "Hielmstierne",
    "Huitfeldt",
    "Kaas",
    "Kane",
    "Knagenhjelm",
    "Lovenskiold",
    "Lovenorn",
    "Munthe af Morgenstierne",
    "Roos af Hjelmaster",
    "Rosenvinge",
    "Skanke",
    "Smor",
    "Stockfleth",
    "Svanenhielm",
    "Treschow",
    "Werenskiold",
  ];

  var maleFirstArray = [];
  var femaleFirstArray = [];
  var lastArray = [];

  var lastDottirArray = [];
  var lastSonArray = [];

  rawMaleFirstArray.forEach((input) => {
    if (!maleFirstArray.includes(input)) {
      maleFirstArray.push(input);
    }
  });

  rawMaleFirstArray.forEach((input) => {
    if (!lastDottirArray.includes(input)) {
      lastDottirArray.push(`${input}sdottir`);
    }
  });

  rawMaleFirstArray.forEach((input) => {
    if (!lastSonArray.includes(input)) {
      lastSonArray.push(`${input}son`);
    }
  });

  rawFemaleFirstArray.forEach((input) => {
    if (!femaleFirstArray.includes(input)) {
      femaleFirstArray.push(input);
    }
  });

  rawLastArray.forEach((input) => {
    if (!lastArray.includes(input)) {
      lastArray.push(input);
    }
  });

  var maleFirstRand = Math.floor(Math.random() * maleFirstArray.length);
  var femaleFirstRand = Math.floor(Math.random() * femaleFirstArray.length);
  var lastRand = Math.floor(Math.random() * lastArray.length);

  /* Toggle these on and off to check redunancies. Helpful if you want to go through and clean up at any point

  console.log(`rawmale length: ${rawMaleFirstArray.length}`)
  console.log(`male length: ${maleFirstArray.length}`)

  console.log(`rawfemale length: ${rawFemaleFirstArray.length}`)
  console.log(`rawmale length: ${femaleFirstArray.length}`)

  console.log(`rawlast length: ${rawLastArray.length}`)
  console.log(`last length: ${lastArray.length}`) */

  /*THE RANDOMNESS*/
  var genderSelected = document.getElementById("genderSelect").value;
  var gender;

  switch (genderSelected) {
    case "genderMale":
      gender = "male";
      var maleLastRand = Math.floor(Math.random() * 5);
      var maleLastRandLength = Math.floor(Math.random() * lastSonArray.length);

      var firstName = maleFirstArray[maleFirstRand];

      if (maleLastRand === 0) {
        var lastName = lastSonArray[maleLastRandLength];
      } else {
        var lastName = lastArray[lastRand];
      }
      break;
    case "genderFemale":
      gender = "female";
      var femLastRand = Math.floor(Math.random() * 5);
      var femLastRandLength = Math.floor(
        Math.random() * lastDottirArray.length
      );

      var firstName = femaleFirstArray[femaleFirstRand];

      if (femLastRand === 0) {
        var lastName = lastDottirArray[femLastRandLength];
      } else {
        var lastName = lastArray[lastRand];
      }
      break;
    case "genderRandom":
      var maleOrFemale = Math.floor(Math.random() * 2);
      if (maleOrFemale === 1) {
        gender = "male";
        var firstName = maleFirstArray[maleFirstRand];
        var maleLastRand = Math.floor(Math.random() * 5);
        var maleLastRandLength = Math.floor(
          Math.random() * lastSonArray.length
        );

        if (maleLastRand === 0) {
          var lastName = lastSonArray[maleLastRandLength];
        } else {
          var lastName = lastArray[lastRand];
        }
      } else {
        gender = "female";
        var firstName = femaleFirstArray[femaleFirstRand];
        var femLastRand = Math.floor(Math.random() * 5);
        var femLastRandLength = Math.floor(
          Math.random() * lastDottirArray.length
        );

        if (femLastRand === 0) {
          var lastName = lastDottirArray[femLastRandLength];
        } else {
          var lastName = lastArray[lastRand];
        }
      }
      break;
  }

  document.getElementById(
    "Name!"
  ).value = `${firstName} ${lastName} (${gender})`;
}

function equipCharacter() {
  document.getElementById("equipWeapons").innerHTML = "";
  document.getElementById("equipArmor").innerHTML = "";
  document.getElementById("equipMisc").innerHTML = "";
  var armorQuality = "n/a";
  var shieldClass = "noshield";
  var armorType = "unarmored";
  var shieldFiftyFifty = rollDice(2);
  charProfession = document.getElementById("charProfession").value;
  var weapons = [];
  var armor = [];
  /* ------------------------------------------------------------------------ */
  if (
    charProfession == "hunting" ||
    charProfession == "craftsman" ||
    charProfession == "government"
  ) {
    document.getElementById("equipMisc").innerHTML =
      "Three 'Tools of the Trade'.";
  } else if (charProfession == "labor") {
    document.getElementById("equipMisc").innerHTML = "One 'Tool of the Trade'.";
  } else if (charProfession == "merchant") {
    document.getElementById("equipMisc").innerHTML =
      "Five 'Tools of the Trade'.";
  } else if (charProfession == "criminal") {
    document.getElementById("equipMisc").innerHTML =
      "Two 'Tools of the Trade'.";
    weapons.push("Standard Dagger");
  } else if (charProfession == "special") {
    document.getElementById("equipMisc").innerHTML = "A spellcasting focus.";
  } else if (charProfession == "entertainment") {
    document.getElementById("equipMisc").innerHTML =
      "Two 'Tools of the Trade'.";
  } else if (charProfession == "military") {
    armorQuality = "standard";
    var weaponIndex = rollDice(4);
    var swordIndex = rollDice(2);
    var spearIndex = rollDice(2);
    var armorIndex = rollDice(4);
    var bluntIndex = rollDice(3);

    if (weaponIndex == 1) {
      if (swordIndex == 1) {
        weapons.push("Standard Longsword");
      } else if (swordIndex == 2) {
        weapons.push("Standard Shortsword");
      }
    } else if (weaponIndex == 2) {
      if (spearIndex == 1) {
        weapons.push("Standard Spear");
      } else if (spearIndex == 2) {
        weapons.push("Standard Pike");
      }
    } else if (weaponIndex == 3) {
      if (bluntIndex == 1) {
        weapons.push("Standard club");
      } else if (bluntIndex == 2) {
        weapons.push("Standard Warhammer");
      } else if (bluntIndex == 3) {
        weapons.push("Standard Spiked Hammer");
      }
    } else if (weaponIndex == 4) {
      weapons.push("Standard Battleaxe");
    }

    if (shieldFiftyFifty == 1) {
      shieldClass = "noshield";
    } else if (shieldFiftyFifty == 2) {
      shieldClass = "medium";
    }

    if (armorIndex == 1) {
      armor.push("Standard Leather Armor");
      var armorType = "leather";
    } else if (armorIndex == 2) {
      armor.push("Standard Studded Leather Armor");
      var armorType = "studdedleather";
    } else if (armorIndex == 3) {
      armor.push("Standard Brigandine Armor");
      var armorType = "brigandine";
    } else if (armorIndex == 4) {
      armor.push("Standard Chain mail Armor");
      var armorType = "chainmail";
    }

    document.getElementById("equipMisc").innerHTML =
      "Three other 'Tools of the Trade'.";
  }

  /* ------------------------------------------------------------------------ */

  /* ------------------------------------------------------------------------ */
  document.getElementById("equipArmor").innerHTML = weapons;
  document.getElementById("equipWeapons").innerHTML = armor;
  document.getElementById("armorType").value = armorType;
  document.getElementById("armorQuality").value = armorQuality;
  document.getElementById("shieldClass").value = shieldClass;
}

function hideStuffOnLoad() {
  document.getElementById("fasttalkSkillDisplay").style.display = "none";
  document.getElementById("insightSkillDisplay").style.display = "none";
  document.getElementById("intrigueSkillDisplay").style.display = "none";
  document.getElementById("leadershipSkillDisplay").style.display = "none";
  document.getElementById("performSkillDisplay").style.display = "none";
  document.getElementById("storytellingSkillDisplay").style.display = "none";
  document.getElementById("craftarmorSkillDisplay").style.display = "none";
  document.getElementById("craftbladeSkillDisplay").style.display = "none";
  document.getElementById("craftjewelryorgemSkillDisplay").style.display =
    "none";
  document.getElementById("leatherworkingSkillDisplay").style.display = "none";
  document.getElementById("sleightofhandSkillDisplay").style.display = "none";
  document.getElementById("workmechanismSkillDisplay").style.display = "none";
  document.getElementById("historySkillDisplay").style.display = "none";
  document.getElementById("plantloreSkillDisplay").style.display = "none";
  document.getElementById("cookingloreSkillDisplay").style.display = "none";
  document.getElementById("creatureloreSkillDisplay").style.display = "none";
  document.getElementById("cultloreSkillDisplay").style.display = "none";
  document.getElementById("spothiddenSkillDisplay").style.display = "none";
  document.getElementById("listenSkillDisplay").style.display = "none";
  document.getElementById("scanSkillDisplay").style.display = "none";
  document.getElementById("huntandtrackSkillDisplay").style.display = "none";
  document.getElementById("driveSkillDisplay").style.display = "none";
  document.getElementById("sailSkillDisplay").style.display = "none";
  document.getElementById("swimSkillDisplay").style.display = "none";
  document.getElementById("climbSkillDisplay").style.display = "none";
  document.getElementById("jumpSkillDisplay").style.display = "none";
  document.getElementById("movesilentlySkillDisplay").style.display = "none";
  document.getElementById("swordSkillDisplay").style.display = "none";
  document.getElementById("daggerSkillDisplay").style.display = "none";
  document.getElementById("spearSkillDisplay").style.display = "none";
  document.getElementById("bluntSkillDisplay").style.display = "none";
  document.getElementById("axeSkillDisplay").style.display = "none";
  document.getElementById("crossbowSkillDisplay").style.display = "none";
  document.getElementById("bowSkillDisplay").style.display = "none";
  document.getElementById("slingSkillDisplay").style.display = "none";
}

function moreAspectAndSkillPoints() {
  var charProfession = document.getElementById("charProfession").value;
  var charRace = document.getElementById("charRace").value;
  var racialAspectBonuses = "";
  var professionAspectBonuses = "";
  var professionSkillBonuses = "";

  var humanAspectBonuses = "4 points to distribute to any Aspects";
  var dragonbornAspectBonuses =
    "6 points to distribute to Strength, Constitution, Logic, and Memory";
  var orcAspectBonuses =
    "6 points to distribute to Strength, Constitution, Intuition, and Perception";
  var elfAspectBonuses =
    "6 points to distribute to Wisdom, Perception, Dexterity, and Deftness";
  var halflingAspectBonuses =
    "6 points to distribute to Resolve, Intuition, Wit, and Dexterity";
  var dwarfAspectBonuses =
    "6 points to distribute to Constitution, Deftness, Memory, and Resolve";
  var gnomeAspectBonuses =
    "6 points to distribute to Deftness, Creativity, Wit, Resolve";

  if (charRace == "human") {
    racialAspectBonuses = humanAspectBonuses;
  } else if (charRace[3] == "g") {
    racialAspectBonuses = dragonbornAspectBonuses;
  } else if (charRace == "orc") {
    racialAspectBonuses = orcAspectBonuses;
  } else if (charRace == "elf") {
    racialAspectBonuses = elfAspectBonuses;
  } else if (charRace == "halfling") {
    racialAspectBonuses = halflingAspectBonuses;
  } else if (charRace[1] == "w") {
    racialAspectBonuses = dwarfAspectBonuses;
  } else if (charRace == "gnome") {
    racialAspectBonuses = gnomeAspectBonuses;
  }

  var huntingAspectBonuses =
    "6 points to distribute to Perception, Intuition, Wisdom, Wit, Logic, Memory, and Deftness.";
  var laborAspectBonuses =
    "6 points to distribute to Strength, Constitution, Resolve, Dexterity, and Deftness.";
  var craftsmanAspectBonuses =
    "6 points to distribute to Creativity, Dexterity, Deftness, Wit, Logic, Memory, and Strength.";
  var merchantAspectBonuses =
    "6 points to distribute to Wit, Logic, Memory, Perception, Intuition, and Wisdom.";
  var specialAspectBonuses =
    "6 points to distribute to Wit, Logic, Memory, Creativity, Dexterity, and Deftness.";
  var criminalAspectBonuses = "6 points to distribute to any aspects.";
  var entertainmentAspectBonuses =
    "6 points to distribute to Perception, Intuition, Wisdom, Creativity, Dexterity, and Deftness.";
  var governmentAspectBonuses =
    "6 points to distribute to Wit, Logic, Memory, Creativity, Dexterity, and Deftness.";
  var militaryAspectBonuses =
    "6 points to distribute to Strength, Constitution, Resolve, Perception, Intuition, and Wisdom.";

  var huntingSkillBonuses =
    "2 Ranks to Creature Lore, 2 Ranks to to distribute to Movement Skills, 2 Ranks to distribute to Martial Skills.";
  var laborSkillBonuses = "6 Ranks to distribute to Movement Skills.";
  var craftsmanSkillBonuses =
    "3 Ranks to distribute to Manipulation Skills, 3 Ranks to distribute to Social Skills.";
  var merchantSkillBonuses =
    "3 Ranks to distribute to Social Skills, 3 Ranks to distribute to Lore and/or Manipulation Skills.";
  var specialSkillBonuses = "6 points to distribute to [ADVANCED SKILL].";
  var criminalSkillBonuses =
    "3 Ranks to distribute to Movement, Martial, and/or Manipulation Skills, 3 Ranks to distribute to Martial Skills.";
  var entertainmentSkillBonuses =
    "5 Ranks to distribute to Social Skills, 1 Rank to any Lore Skill.";
  var governmentSkillBonuses = "6 Ranks to distribute to Social Skills.";
  var militarySkillBonuses =
    "6 Ranks to distribute to Martial skills, 2 Ranks to distribute to Lore or Social Skills.";

  if (charProfession == "hunting") {
    professionAspectBonuses = huntingAspectBonuses;
    professionSkillBonuses = huntingSkillBonuses;
  } else if (charProfession == "labor") {
    professionAspectBonuses = laborAspectBonuses;
    professionSkillBonuses = laborSkillBonuses;
  } else if (charProfession == "craftsman") {
    professionAspectBonuses = craftsmanAspectBonuses;
    professionSkillBonuses = craftsmanSkillBonuses;
  } else if (charProfession == "merchant") {
    professionAspectBonuses = merchantAspectBonuses;
    professionSkillBonuses = merchantSkillBonuses;
  } else if (charProfession == "special") {
    professionAspectBonuses = specialAspectBonuses;
    professionSkillBonuses = specialSkillBonuses;
  } else if (charProfession == "criminal") {
    professionAspectBonuses = criminalAspectBonuses;
    professionSkillBonuses = criminalSkillBonuses;
  } else if (charProfession == "entertainment") {
    professionAspectBonuses = entertainmentAspectBonuses;
    professionSkillBonuses = entertainmentSkillBonuses;
  } else if (charProfession == "government") {
    professionAspectBonuses = governmentAspectBonuses;
    professionSkillBonuses = governmentSkillBonuses;
  } else if (charProfession == "military") {
    professionAspectBonuses = militaryAspectBonuses;
    professionSkillBonuses = militarySkillBonuses;
  }

  document.getElementById(
    "raceAspectBonuses"
  ).innerHTML = `Race: ${racialAspectBonuses}`;
  document.getElementById("professionAspectBonuses").innerHTML = `Profession:
    ${professionAspectBonuses}`;
  document.getElementById("professionSkillBonuses").innerHTML =
    professionSkillBonuses;
}

function generateRandomCharacter() {
  hideStuffOnLoad();
  generateRandomCulture();
  generateAllianceName();
  generateRandomAspects();
  generateRandomRace();
  generateRandomProfession();
  updateRaceAndSize();
  updateGeneralModifiers();
  assignRandomFavorites();
  updateAttributesAndAspects();
  updateHPAndStamina();
  equipCharacter();
  moreAspectAndSkillPoints();
  applyOnSkillChange();
  updateArmorAndDefense();
}

function updateHPAndStamina() {
  // Updates HP and Stamina after getting the rlvMod, conMod, advRank, and Size Modifier
  var conMod = parseInt(document.getElementById("conMod").value);
  var sizeMod = parseInt(document.getElementById("sizeMod").innerHTML);
  var rlvMod = parseInt(document.getElementById("rlvMod").value);
  var advRank = parseInt(document.getElementById("advRank").value[4]);

  var hitpointMaxCalc = sizeMod + conMod + advRank;
  var staminaMaxCalc = rlvMod * 2 * advRank;

  if (hitpointMaxCalc <= 1) {
    hitpointMaxCalc = 1;
  }

  if (staminaMaxCalc <= 0) {
    staminaMaxCalc = 0;
  }
  document.getElementById("hitPointsMax").value = hitpointMaxCalc;
  document.getElementById("staminaMax").value = staminaMaxCalc;
}

function sumSkillValues(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function applyOnAspectChange() {
  // update modifiers
  // update all things based on modifiers
  updateAttributesAndAspects();
  updateHPAndStamina();
  updateArmorAndDefense();
}

function applyOnSkillChange() {
  hideStuffOnLoad();

  var fasttalkSkill = parseInt(
    document.getElementById("fasttalkSkill").value[4]
  );
  var insightSkill = parseInt(document.getElementById("insightSkill").value[4]);
  var intrigueSkill = parseInt(
    document.getElementById("intrigueSkill").value[4]
  );
  var leadershipSkill = parseInt(
    document.getElementById("leadershipSkill").value[4]
  );
  var performSkill = parseInt(document.getElementById("performSkill").value[4]);
  var storytellingSkill = parseInt(
    document.getElementById("storytellingSkill").value[4]
  );
  var craftarmorSkill = parseInt(
    document.getElementById("craftarmorSkill").value[4]
  );
  var craftbladeSkill = parseInt(
    document.getElementById("craftbladeSkill").value[4]
  );
  var craftjewelryorgemSkill = parseInt(
    document.getElementById("craftjewelryorgemSkill").value[4]
  );
  var leatherworkingSkill = parseInt(
    document.getElementById("leatherworkingSkill").value[4]
  );
  var sleightofhandSkill = parseInt(
    document.getElementById("sleightofhandSkill").value[4]
  );
  var workmechanismSkill = parseInt(
    document.getElementById("workmechanismSkill").value[4]
  );
  var historySkill = parseInt(document.getElementById("historySkill").value[4]);
  var plantloreSkill = parseInt(
    document.getElementById("plantloreSkill").value[4]
  );
  var cookingloreSkill = parseInt(
    document.getElementById("cookingloreSkill").value[4]
  );
  var creatureloreSkill = parseInt(
    document.getElementById("creatureloreSkill").value[4]
  );
  var cultloreSkill = parseInt(
    document.getElementById("cultloreSkill").value[4]
  );
  var spothiddenSkill = parseInt(
    document.getElementById("spothiddenSkill").value[4]
  );
  var listenSkill = parseInt(document.getElementById("listenSkill").value[4]);
  var scanSkill = parseInt(document.getElementById("scanSkill").value[4]);
  var huntandtrackSkill = parseInt(
    document.getElementById("huntandtrackSkill").value[4]
  );
  var driveSkill = parseInt(document.getElementById("driveSkill").value[4]);
  var sailSkill = parseInt(document.getElementById("sailSkill").value[4]);
  var swimSkill = parseInt(document.getElementById("swimSkill").value[4]);
  var climbSkill = parseInt(document.getElementById("climbSkill").value[4]);
  var jumpSkill = parseInt(document.getElementById("jumpSkill").value[4]);
  var movesilentlySkill = parseInt(
    document.getElementById("movesilentlySkill").value[4]
  );
  var swordSkill = parseInt(document.getElementById("swordSkill").value[4]);
  var daggerSkill = parseInt(document.getElementById("daggerSkill").value[4]);
  var spearSkill = parseInt(document.getElementById("spearSkill").value[4]);
  var bluntSkill = parseInt(document.getElementById("bluntSkill").value[4]);
  var axeSkill = parseInt(document.getElementById("axeSkill").value[4]);
  var crossbowSkill = parseInt(
    document.getElementById("crossbowSkill").value[4]
  );
  var bowSkill = parseInt(document.getElementById("bowSkill").value[4]);
  var slingSkill = parseInt(document.getElementById("slingSkill").value[4]);

  var skillsArray = [
    fasttalkSkill,
    insightSkill,
    intrigueSkill,
    leadershipSkill,
    performSkill,
    storytellingSkill,
    craftarmorSkill,
    craftbladeSkill,
    craftjewelryorgemSkill,
    leatherworkingSkill,
    sleightofhandSkill,
    workmechanismSkill,
    historySkill,
    plantloreSkill,
    cookingloreSkill,
    creatureloreSkill,
    cultloreSkill,
    spothiddenSkill,
    listenSkill,
    scanSkill,
    huntandtrackSkill,
    driveSkill,
    sailSkill,
    swimSkill,
    climbSkill,
    jumpSkill,
    movesilentlySkill,
    swordSkill,
    daggerSkill,
    spearSkill,
    bluntSkill,
    axeSkill,
    crossbowSkill,
    bowSkill,
    slingSkill,
  ];

  const skillsObject = {
    fasttalkSkill: {
      name: "Fast Talk",
      aspectArray: ["Wit", " Creativity", " Intuition"],
      value: document.getElementById("fasttalkSkill").value[4],
    },
    insightSkill: {
      name: "Insight",
      aspectArray: ["Perception", " Intuition"],
      value: document.getElementById("insightSkill").value[4],
    },
    intrigueSkill: {
      name: "Intrigue",
      aspectArray: ["Intuition", " Wit", " Creativity"],
      value: document.getElementById("intrigueSkill").value[4],
    },
    leadershipSkill: {
      name: "Leadership",
      aspectArray: ["Wit", " Resolve", " Intuition"],
      value: document.getElementById("leadershipSkill").value[4],
    },
    performSkill: {
      name: "Perform",
      aspectArray: [
        "Creativity",
        " Consitution (Sing only)",
        " Deftness (Instrument only)",
        " Dexterity (Acrobat only)",
        " Strength (Acrobat only)",
      ],
      value: document.getElementById("performSkill").value[4],
    },
    storytellingSkill: {
      name: "Storytelling",
      aspectArray: ["Memory", " Wit", " Creativity", " Wisdom", " Intuition"],
      value: document.getElementById("storytellingSkill").value[4],
    },
    craftarmorSkill: {
      name: "Craft Armor",
      aspectArray: ["Strength", " Memory", " Deftness", " Constitution"],
      value: document.getElementById("craftarmorSkill").value[4],
    },
    craftbladeSkill: {
      name: "Craft Blade",
      aspectArray: ["Strength", " Memory", " Deftness", " Constitution"],
      value: document.getElementById("craftbladeSkill").value[4],
    },
    craftjewelryorgemSkill: {
      name: "Craft Jewelry or Gem",
      aspectArray: ["Deftness", " Creativity", " Perception"],
      value: document.getElementById("craftjewelryorgemSkill").value[4],
    },
    leatherworkingSkill: {
      name: "Leatherworking",
      aspectArray: ["Deftness", " Memory", " Constitution"],
      value: document.getElementById("leatherworkingSkill").value[4],
    },
    sleightofhandSkill: {
      name: "Sleight of Hand",
      aspectArray: ["Deftness", " Creativity", " Perception", " Intuition"],
      value: document.getElementById("sleightofhandSkill").value[4],
    },
    workmechanismSkill: {
      name: "Work Mechanism",
      aspectArray: ["Deftness", " Creativity", " Logic", " Intuition"],
      value: document.getElementById("workmechanismSkill").value[4],
    },
    historySkill: {
      name: "History",
      aspectArray: ["Memory", " Logic", " Intuition"],
      value: document.getElementById("historySkill").value[4],
    },
    plantloreSkill: {
      name: "Plant Lore",
      aspectArray: ["Memory", " Logic"],
      value: document.getElementById("plantloreSkill").value[4],
    },
    cookingloreSkill: {
      name: "Cooking Lore",
      aspectArray: ["Memory", " Creativity", " Logic", " Intuition"],
      value: document.getElementById("cookingloreSkill").value[4],
    },
    creatureloreSkill: {
      name: "Creature Lore",
      aspectArray: ["Memory", " Logic", " Intuition"],
      value: document.getElementById("creatureloreSkill").value[4],
    },
    cultloreSkill: {
      name: "Cult Lore",
      aspectArray: ["Memory", " Intuition", " Wisdom"],
      value: document.getElementById("cultloreSkill").value[4],
    },
    spothiddenSkill: {
      name: "Spot Hidden",
      aspectArray: ["Perception"],
      value: document.getElementById("spothiddenSkill").value[4],
    },
    listenSkill: {
      name: "Listen",
      aspectArray: ["Perception"],
      value: document.getElementById("listenSkill").value[4],
    },
    scanSkill: {
      name: "Scan",
      aspectArray: ["Perception", " Intuition"],
      value: document.getElementById("scanSkill").value[4],
    },
    huntandtrackSkill: {
      name: "Hunt and Track",
      aspectArray: ["Logic", " Perception", " Intuition", " Creativity"],
      value: document.getElementById("huntandtrackSkill").value[4],
    },
    driveSkill: {
      name: "Drive",
      aspectArray: ["Deftness", " Intuition", " Memory", " Strength"],
      value: document.getElementById("driveSkill").value[4],
    },
    sailSkill: {
      name: "Sail",
      aspectArray: ["Intuition", " Logic", " Strength", " Dexterity"],
      value: document.getElementById("sailSkill").value[4],
    },
    swimSkill: {
      name: "Swim",
      aspectArray: ["Strength", " Constitution", " Dexterity"],
      value: document.getElementById("swimSkill").value[4],
    },
    climbSkill: {
      name: "Climb",
      aspectArray: ["Strength", " Deftness", " Dexterity"],
      value: document.getElementById("climbSkill").value[4],
    },
    jumpSkill: {
      name: "Jump",
      aspectArray: ["Strength", " Dexterity"],
      value: document.getElementById("jumpSkill").value[4],
    },
    movesilentlySkill: {
      name: "Move Silently",
      aspectArray: ["Perception", " Dexterity"],
      value: document.getElementById("movesilentlySkill").value[4],
    },
    swordSkill: {
      name: "Sword",
      aspectArray: ["Strength", " Dexterity", " Deftness", " Intuition"],
      value: document.getElementById("swordSkill").value[4],
    },
    daggerSkill: {
      name: "Dagger",
      aspectArray: ["Deftness", " Dexterity", " Intuition"],
      value: document.getElementById("daggerSkill").value[4],
    },
    spearSkill: {
      name: "Spear",
      aspectArray: [
        "Strength",
        " Resolve",
        " Dexterity",
        " Deftness",
        " Creativity",
      ],
      value: document.getElementById("spearSkill").value[4],
    },
    bluntSkill: {
      name: "Blunt",
      aspectArray: ["Strength", " Constitution", " Resolve"],
      value: document.getElementById("bluntSkill").value[4],
    },
    axeSkill: {
      name: "Axe",
      aspectArray: ["Strength", " Resolve"],
      value: document.getElementById("axeSkill").value[4],
    },
    crossbowSkill: {
      name: "Crossbow",
      aspectArray: ["Strength", " Perception", " Deftness"],
      value: document.getElementById("crossbowSkill").value[4],
    },
    bowSkill: {
      name: "Bow",
      aspectArray: ["Strength", " Perception", " Deftness"],
      value: document.getElementById("bowSkill").value[4],
    },
    slingSkill: {
      name: "Sling",
      aspectArray: ["Strength", " Perception", " Deftness"],
      value: document.getElementById("slingSkill").value[4],
    },
  };

  for (const skill in skillsObject) {
    const skillValue = skillsObject[skill].value;
    if (charProfession !== "military" && sumSkillValues(skillsArray) > 6) {
      document.getElementById(`${skill}`).value = "rank0";
      const displayElement = document.getElementById(`${skill}Display`);
      displayElement.style.display = "none";
      displayElement.textContent = ``;
    } else if (
      charProfession == "military" &&
      sumSkillValues(skillsArray) > 8
    ) {
      document.getElementById(`${skill}`).value = "rank0";
      const displayElement = document.getElementById(`${skill}Display`);
      displayElement.style.display = "none";
      displayElement.textContent = ``;
    } else if (
      charProfession == "military" &&
      sumSkillValues(skillsArray) <= 8
    ) {
      if (skillValue === "2") {
        skillsObject[skill].bonus = 1;
      } else if (skillValue === "3") {
        skillsObject[skill].bonus = 3;
      }
    }

    if (skillsObject[skill].bonus) {
      const bonus = skillsObject[skill].bonus;
      const aspectArray = skillsObject[skill].aspectArray;

      const displayElement = document.getElementById(`${skill}Display`);
      displayElement.style.display = "table-cell";
      displayElement.colspan = 5;
      displayElement.textContent = `${skillsObject[skill].name} (Rank ${skillsObject[skill].value}): ${bonus} total points to distribute to ${aspectArray}`;
    } else if (sumSkillValues(skillsArray) <= 6) {
      if (skillValue === "2") {
        skillsObject[skill].bonus = 1;
      } else if (skillValue === "3") {
        skillsObject[skill].bonus = 3;
      }

      if (skillsObject[skill].bonus) {
        const bonus = skillsObject[skill].bonus;
        const aspectArray = skillsObject[skill].aspectArray;

        const displayElement = document.getElementById(`${skill}Display`);
        displayElement.style.display = "table-cell";
        displayElement.colspan = 5;
        displayElement.textContent = `${skillsObject[skill].name} (Rank ${skillsObject[skill].value}): ${bonus} total points to distribute to ${aspectArray}`;
      }
    }
  }

  updateArmorAndDefense();
  addRemoveHighlightBlue();
}

function addRemoveHighlightBlue() {
  const skillsObject = {
    fasttalkSkill: {
      name: "Fast Talk",
      aspectArray: ["Wit", " Creativity", " Intuition"],
      value: document.getElementById("fasttalkSkill").value[4],
    },
    insightSkill: {
      name: "Insight",
      aspectArray: ["Perception", " Intuition"],
      value: document.getElementById("insightSkill").value[4],
    },
    intrigueSkill: {
      name: "Intrigue",
      aspectArray: ["Intuition", " Wit", " Creativity"],
      value: document.getElementById("intrigueSkill").value[4],
    },
    leadershipSkill: {
      name: "Leadership",
      aspectArray: ["Wit", " Resolve", " Intuition"],
      value: document.getElementById("leadershipSkill").value[4],
    },
    performSkill: {
      name: "Perform",
      aspectArray: [
        "Creativity",
        " Consitution (Sing only)",
        " Deftness (Instrument only)",
        " Dexterity (Acrobat only)",
        " Strength (Acrobat only)",
      ],
      value: document.getElementById("performSkill").value[4],
    },
    storytellingSkill: {
      name: "Storytelling",
      aspectArray: ["Memory", " Wit", " Creativity", " Wisdom", " Intuition"],
      value: document.getElementById("storytellingSkill").value[4],
    },
    craftarmorSkill: {
      name: "Craft Armor",
      aspectArray: ["Strength", " Memory", " Deftness", " Constitution"],
      value: document.getElementById("craftarmorSkill").value[4],
    },
    craftbladeSkill: {
      name: "Craft Blade",
      aspectArray: ["Strength", " Memory", " Deftness", " Constitution"],
      value: document.getElementById("craftbladeSkill").value[4],
    },
    craftjewelryorgemSkill: {
      name: "Craft Jewelry or Gem",
      aspectArray: ["Deftness", " Creativity", " Perception"],
      value: document.getElementById("craftjewelryorgemSkill").value[4],
    },
    leatherworkingSkill: {
      name: "Leatherworking",
      aspectArray: ["Deftness", " Memory", " Constitution"],
      value: document.getElementById("leatherworkingSkill").value[4],
    },
    sleightofhandSkill: {
      name: "Sleight of Hand",
      aspectArray: ["Deftness", " Creativity", " Perception", " Intuition"],
      value: document.getElementById("sleightofhandSkill").value[4],
    },
    workmechanismSkill: {
      name: "Work Mechanism",
      aspectArray: ["Deftness", " Creativity", " Logic", " Intuition"],
      value: document.getElementById("workmechanismSkill").value[4],
    },
    historySkill: {
      name: "History",
      aspectArray: ["Memory", " Logic", " Intuition"],
      value: document.getElementById("historySkill").value[4],
    },
    plantloreSkill: {
      name: "Plant Lore",
      aspectArray: ["Memory", " Logic"],
      value: document.getElementById("plantloreSkill").value[4],
    },
    cookingloreSkill: {
      name: "Cooking Lore",
      aspectArray: ["Memory", " Creativity", " Logic", " Intuition"],
      value: document.getElementById("cookingloreSkill").value[4],
    },
    creatureloreSkill: {
      name: "Creature Lore",
      aspectArray: ["Memory", " Logic", " Intuition"],
      value: document.getElementById("creatureloreSkill").value[4],
    },
    cultloreSkill: {
      name: "Cult Lore",
      aspectArray: ["Memory", " Intuition", " Wisdom"],
      value: document.getElementById("cultloreSkill").value[4],
    },
    spothiddenSkill: {
      name: "Spot Hidden",
      aspectArray: ["Perception"],
      value: document.getElementById("spothiddenSkill").value[4],
    },
    listenSkill: {
      name: "Listen",
      aspectArray: ["Perception"],
      value: document.getElementById("listenSkill").value[4],
    },
    scanSkill: {
      name: "Scan",
      aspectArray: ["Perception", " Intuition"],
      value: document.getElementById("scanSkill").value[4],
    },
    huntandtrackSkill: {
      name: "Hunt and Track",
      aspectArray: ["Logic", " Perception", " Intuition", " Creativity"],
      value: document.getElementById("huntandtrackSkill").value[4],
    },
    driveSkill: {
      name: "Drive",
      aspectArray: ["Deftness", " Intuition", " Memory", " Strength"],
      value: document.getElementById("driveSkill").value[4],
    },
    sailSkill: {
      name: "Sail",
      aspectArray: ["Intuition", " Logic", " Strength", " Dexterity"],
      value: document.getElementById("sailSkill").value[4],
    },
    swimSkill: {
      name: "Swim",
      aspectArray: ["Strength", " Constitution", " Dexterity"],
      value: document.getElementById("swimSkill").value[4],
    },
    climbSkill: {
      name: "Climb",
      aspectArray: ["Strength", " Deftness", " Dexterity"],
      value: document.getElementById("climbSkill").value[4],
    },
    jumpSkill: {
      name: "Jump",
      aspectArray: ["Strength", " Dexterity"],
      value: document.getElementById("jumpSkill").value[4],
    },
    movesilentlySkill: {
      name: "Move Silently",
      aspectArray: ["Perception", " Dexterity"],
      value: document.getElementById("movesilentlySkill").value[4],
    },
    swordSkill: {
      name: "Sword",
      aspectArray: ["Strength", " Dexterity", " Deftness", " Intuition"],
      value: document.getElementById("swordSkill").value[4],
    },
    daggerSkill: {
      name: "Dagger",
      aspectArray: ["Deftness", " Dexterity", " Intuition"],
      value: document.getElementById("daggerSkill").value[4],
    },
    spearSkill: {
      name: "Spear",
      aspectArray: [
        "Strength",
        " Resolve",
        " Dexterity",
        " Deftness",
        " Creativity",
      ],
      value: document.getElementById("spearSkill").value[4],
    },
    bluntSkill: {
      name: "Blunt",
      aspectArray: ["Strength", " Constitution", " Resolve"],
      value: document.getElementById("bluntSkill").value[4],
    },
    axeSkill: {
      name: "Axe",
      aspectArray: ["Strength", " Resolve"],
      value: document.getElementById("axeSkill").value[4],
    },
    crossbowSkill: {
      name: "Crossbow",
      aspectArray: ["Strength", " Perception", " Deftness"],
      value: document.getElementById("crossbowSkill").value[4],
    },
    bowSkill: {
      name: "Bow",
      aspectArray: ["Strength", " Perception", " Deftness"],
      value: document.getElementById("bowSkill").value[4],
    },
    slingSkill: {
      name: "Sling",
      aspectArray: ["Strength", " Perception", " Deftness"],
      value: document.getElementById("slingSkill").value[4],
    },
  };

  for (const skill in skillsObject) {
    document.getElementById(skill).classList.remove("highlightBlue");
    if (skillsObject[skill].value >= 1) {
      document.getElementById(skill).classList.add("highlightBlue");
    }
  }
}
