import { EnemyType, generateEnemies } from "./Enemy"

test("it generates the correct amount of enemies", () => {
    let enemies = []
    enemies = generateEnemies()
    expect(enemies.length).toEqual(40)

    const insurgents: number = enemies
        .filter((enemy) => enemy === EnemyType.INSURGENT)
        .map((e) => e).length
    expect(insurgents).toEqual(24)

    const infantry: number = enemies
        .filter((enemy) => enemy === EnemyType.INFANTRY)
        .map((e) => e).length
    expect(infantry).toEqual(8)

    const bombers: number = enemies
        .filter((enemy) => enemy === EnemyType.BOMBER)
        .map((e) => e).length
    expect(bombers).toEqual(8)
})
