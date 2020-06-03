import { Color } from "./node_modules/framer"

export enum ResourceType {
    MATERIALS = "💎",
    WEAPONS = "🔫",
    INFORMANTS = "🗣",
    RATIONS = "🍞",
    SUPPLIES = "🧰",
}

export const resourceTypes = [
    ResourceType.MATERIALS,
    ResourceType.WEAPONS,
    ResourceType.INFORMANTS,
    ResourceType.RATIONS,
    ResourceType.SUPPLIES,
]

export function getResourceTypeBackground(type: ResourceType): Color {
    switch (type) {
        case ResourceType.MATERIALS:
            return Color.lighten(Color("#2e85ff"), 30)
        case ResourceType.WEAPONS:
            return Color.lighten(Color("#26c942"), 30)
        case ResourceType.INFORMANTS:
            return Color.lighten(Color("#194686"), 30)
        case ResourceType.RATIONS:
            return Color.lighten(Color("#ffd500"), 30)
        case ResourceType.SUPPLIES:
            return Color.lighten(Color("#ff3c00"), 30)
    }
}
