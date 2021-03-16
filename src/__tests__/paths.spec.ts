import { paths } from "../utils/paths"

describe("Paths", () => {
    test("paths should have a React", () => {
        expect("React" in paths).toBe(true)
    }) 
    test("paths should have a Vue", () => {
        expect("Vue" in paths).toBe(true)
    })
    test("paths should have a Svelte", () => {
        expect("Svelte" in paths).toBe(true)
    })
})