import { ResourceType } from "./Resource"

export const standardThreePlayerSetupHexTiles = [
    [
        ResourceType.MATERIALS,
        ResourceType.RATIONS,
        ResourceType.SUPPLIES,
        ResourceType.WEAPONS,
    ],
    [
        ResourceType.MATERIALS,
        ResourceType.SUPPLIES,
        ResourceType.INFORMANTS,
        ResourceType.RATIONS,
    ],
    [
        ResourceType.RATIONS,
        ResourceType.WEAPONS,
        ResourceType.RATIONS,
        ResourceType.MATERIALS,
    ],
    [
        ResourceType.INFORMANTS,
        ResourceType.WEAPONS,
        ResourceType.SUPPLIES,
        ResourceType.INFORMANTS,
    ],
]

export const standardFourPlayerSetupHexTiles = [
    [
        ResourceType.MATERIALS,
        ResourceType.RATIONS,
        ResourceType.SUPPLIES,
        ResourceType.INFORMANTS,
    ],

    [
        ResourceType.MATERIALS,
        ResourceType.SUPPLIES,
        ResourceType.INFORMANTS,
        ResourceType.RATIONS,
        ResourceType.WEAPONS,
    ],

    [
        ResourceType.RATIONS,
        ResourceType.WEAPONS,
        ResourceType.RATIONS,
        ResourceType.MATERIALS,
        ResourceType.WEAPONS,
        ResourceType.MATERIALS,
    ],

    [
        ResourceType.INFORMANTS,
        ResourceType.WEAPONS,
        ResourceType.SUPPLIES,
        ResourceType.INFORMANTS,
        ResourceType.SUPPLIES,
        ResourceType.MATERIALS,
    ],
]

export const variableThreePlayerHexTileRowCounts = [4, 4, 4, 4]
export const variableFourPlayerHexTileRowCounts = [4, 5, 6, 6]

export const threePlayerSetupHexTiles = [
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.INFORMANTS,
    ResourceType.INFORMANTS,
    ResourceType.INFORMANTS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
]

export const fourPlayerSetupHexTiles = [
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.MATERIALS,
    ResourceType.INFORMANTS,
    ResourceType.INFORMANTS,
    ResourceType.INFORMANTS,
    ResourceType.INFORMANTS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.RATIONS,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.SUPPLIES,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
    ResourceType.WEAPONS,
]
