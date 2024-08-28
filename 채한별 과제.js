import chalk from 'chalk';
import readlineSync from 'readline-sync';

class Player {
  constructor() {
    this.hp = 100;
    this.attackdamage = 20;
  }

  attack(monster) {
    let damage = this.attackdamage;
    monster.hp -= damage
    return damage;
    // 플레이어의 공격
  }
}

class Monster {
  hp = 60;
  attackdamage = 1;
  
  stageAbility(stage){
     
        this.hp += (stage)*10;
        this.attackdamage += (stage)*3;
      }
  
  attack() {
    // 몬스터의 공격
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Sparta RPG ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
    chalk.blueBright(
      `| 플레이어 HP: ${player.hp}`,
     
    chalk.redBright(
      `| 몬스터 HP: ${monster.hp} |`,
    ),
  ),
  console.log(chalk.magentaBright(`=====================\n`)));
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while(player.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
       `\n1. 공격한다 2. 도망친다.`
      )
    );
    const choice = readlineSync.question('당신의 선택은? ');

    if (choice ==="1") {
        let damage = player.attack(monster);
        logs.push(chalk.green(`플레이어가 몬스터에게 ${damage}를 가했습니다`));
    if (monster.hp <=0) {
        logs.push(chalk.green('몬스터를 잡았습니다.'));
        break;
    }

    }
    }

    
    
  };
  export async function startGame()  {
    console.clear();
    const player = new Player();
    let stage = 1;
  
    while (stage <= 10) {
      const monster = new Monster(stage);
      monster.stageAbility(stage);
      await battle(stage, player, monster);
  
      if (stage > 10) {
          logs.push(chalk.green('모험이 끝났습니다.'));
          break;
      }
  
      stage++;
    } };