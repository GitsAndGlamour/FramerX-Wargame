import * as React from "react"
import { Frame, addPropertyControls, ControlType, Color, Stack } from "framer"

export function BoardSetup(props) {
    const {
        players,
        isVariable,
        randomizeNumbers,
        includeEnemies,
        ...rest
    } = props

    return (
        <Frame width="100%" height="100%" backgroundColor="white">
            <Field />
        </Frame>
    )
}

BoardSetup.defaultProps = {}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(BoardSetup, {
    players: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.Color,
        },
        maxCount: 4,
    },
})

function Field(props) {
    const {
        playerCount,
        isVariable,
        randomizeNumbers,
        includeEnemies,
        ...rest
    } = props
    let board = {
        hexTiles:
            playerCount === 3
                ? standardThreePlayerSetupHexTiles
                : standardFourPlayerSetupHexTiles,
        numberTokens:
            playerCount === 3
                ? standardThreePlayerSetupNumberTokens
                : standardFourPlayerSetupNumberTokens,
        tradeRoutes:
            playerCount === 3
                ? threePlayerSetupTradeRoutes
                : fourPlayerSetupTradeRoutes,
        enemies: includeEnemies ? enemies : undefined,
    }

    if (isVariable || randomizeNumbers) {
        if (playerCount === 3) {
            if (isVariable) {
                const hexTiles = threePlayerSetupHexTiles
                shuffle(hexTiles)
                board.hexTiles = [
                    hexTiles.slice(0, 4),
                    hexTiles.slice(4, 8),
                    hexTiles.slice(8, 12),
                    hexTiles.slice(12),
                ]
            }
            if (randomizeNumbers) {
                const numberTokens = threePlayerSetupNumberTokens
                shuffle(numberTokens)
                board.numberTokens = [
                    numberTokens.slice(0, 4),
                    numberTokens.slice(4, 8),
                    numberTokens.slice(8, 12),
                    numberTokens.slice(12),
                ]
            }
        } else {
            if (isVariable) {
                const hexTiles = fourPlayerSetupHexTiles
                shuffle(hexTiles)
                board.hexTiles = [
                    hexTiles.slice(0, 4),
                    hexTiles.slice(4, 9),
                    hexTiles.slice(9, 14),
                    hexTiles.slice(14),
                ]
            }
            if (randomizeNumbers) {
                const numberTokens = fourPlayerSetupNumberTokens
                shuffle(numberTokens)
                board.numberTokens = [
                    numberTokens.slice(0, 4),
                    numberTokens.slice(4, 9),
                    numberTokens.slice(9, 14),
                    numberTokens.slice(14),
                ]
            }
        }
    }
    console.log(board)
    return (
        <Stack direction="vertical" width="100%" distribution="start" gap={-72}>
            {board.hexTiles.map((row, rowIndex) => (
                <Stack
                    direction="horizontal"
                    width="100%"
                    distribution="start"
                    gap={18}
                    x={
                        rowIndex == 0
                            ? 242
                            : rowIndex == 1
                            ? 160
                            : rowIndex == 2
                            ? 80
                            : 0
                    }
                >
                    {row.map((resource, index) => (
                        <Frame height="144px" width="144px" background="none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 144 144"
                                fill={Color.toHexString(
                                    getResourceTypeBackground(resource)
                                )}
                            >
                                <path
                                    d="M195.31,155.84,130,188.51a6.65,6.65,0,0,1-6,0L58.69,155.84a6.67,6.67,0,0,1-3.69-6V86.12a6.67,6.67,0,0,1,3.69-6L124,47.49a6.65,6.65,0,0,1,6,0l65.33,32.67a6.67,6.67,0,0,1,3.69,6v63.76A6.67,6.67,0,0,1,195.31,155.84Z"
                                    transform="translate(-55 -46.79)"
                                />
                            </svg>
                        </Frame>
                    ))}
                </Stack>
            ))}
        </Stack>
    )
}

Field.defaultProps = {
    playerCount: 4,
    isVariable: false,
    randomizeNumbers: false,
    includeEnemies: true,
}
