import { EnemyType, generateEnemies } from "./Enemy"

test("it generates the correct amount of enemies", () => {
    let enemies = []
    enemies = generateEnemies()
    expect(enemies.length).toEqual(40)
})
