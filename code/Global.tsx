import * as React from "react"
import { Color } from "framer"

export function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}
