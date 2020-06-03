import { Color } from "./node_modules/framer"

export enum PlayerColor {
    RED,
    YELLOW,
    BLUE,
    BLACK,
}

export const playerColors = [
    PlayerColor.RED,
    PlayerColor.YELLOW,
    PlayerColor.BLUE,
    PlayerColor.BLACK,
]

export function getPlayerColor(type: PlayerColor): Color {
    switch (type) {
        case PlayerColor.RED:
            return Color.darken(Color("#ff3c00"), 10)
        case PlayerColor.YELLOW:
            return Color.darken(Color("#ffd500"), 10)
        case PlayerColor.BLUE:
            return Color.darken(Color("#2e85ff"), 10)
        case PlayerColor.BLACK:
            return Color("#AAA")
    }
}
