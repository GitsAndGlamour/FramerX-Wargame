export enum EnemyType {
    INSURGENT,
    INFANTRY,
    BOMBER,
}

export const enemyTypes = [
    EnemyType.INSURGENT,
    EnemyType.INFANTRY,
    EnemyType.BOMBER,
]

export function getEnemyTypeIcon(type: EnemyType): String {
    switch (type) {
        case EnemyType.INSURGENT:
            return "🪓"
        case EnemyType.INFANTRY:
            return "⛏"
        case EnemyType.BOMBER:
            return "💣"
    }
}

export enum EnemyClanType {
    FIRE,
    WATER,
    AIR,
}

export const enemyClanTypes = [
    EnemyClanType.FIRE,
    EnemyClanType.WATER,
    EnemyClanType.AIR,
]

export function getEnemyClanIcon(type: EnemyClanType): String {
    switch (type) {
        case EnemyClanType.FIRE:
            return "🔥"
        case EnemyClanType.WATER:
            return "💧"
        case EnemyClanType.AIR:
            return "💨"
    }
}

export function generateEnemies(): EnemyType[] {
    const enemies = []
    for (var i = 0; i < 40; i++) {
        if (i < 24) {
            enemies.push(EnemyType.INSURGENT) // count of 24
        } else if (i < 32) {
            enemies.push(EnemyType.INFANTRY) // count of 8
        } else {
            enemies.push(EnemyType.BOMBER) // count of 8
        }
    }
    return enemies
}
