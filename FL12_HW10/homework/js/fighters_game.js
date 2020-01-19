function Fighter(fighterConfiguration) {
    const maxHealth = fighterConfiguration.hp;
    let name = fighterConfiguration.name,
        damage = fighterConfiguration.damage,
        strength = fighterConfiguration.strength,
        agility = fighterConfiguration.agility,
        currentHealth = maxHealth,
        winCount = 0,
        lossCount = 0;
    this.getName = () => {
        return name;
    }
    this.getDamage = () => {
        return damage;
    }
    this.getStrength = () => {
        return strength;
    }
    this.getAgility = () => {
        return agility;
    }
    this.getHealth = () => {
        return currentHealth;
    }
    this.attack = (defender) => {
        let attackChance = 1 - (defender.getAgility() + defender.getStrength()) / 100;
        if (attackChance > Math.random()) {
            console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
            defender.dealDamage(damage);
        } else {
            console.log(`${name} attack missed`);
        }
    }
    this.heal = (healPoints) => {
        if (currentHealth + healPoints < maxHealth) {
            currentHealth += healPoints;
        } else {
            currentHealth = maxHealth;
        }
    }
    this.dealDamage = (damagePoints) => {
        if (currentHealth - damagePoints > 0) {
            currentHealth -= damagePoints;
        } else {
            currentHealth = 0;
        }
    }
    this.logCombatHistory = () => {
        console.log(`Name: ${name}, Wins: ${winCount}, Losses: ${lossCount}`);
    }
    this.addWin = () => {
        winCount += 1;
    }
    this.addLoss = () => {
        lossCount += 1;
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() <= 0) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
        return;
    } else if (fighter2.getHealth() <= 0) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
        return;
    }

    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }

    if (fighter1.getHealth() <= 0) {
        console.log(`${fighter2.getName()} has won!`);
        fighter1.addLoss();
        fighter2.addWin();
    } else {
        console.log(`${fighter1.getName()} has won!`);
        fighter1.addWin();
        fighter2.addLoss();
    }
}