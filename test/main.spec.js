/**
 * @jest-environment jsdom
 */
describe(`main`, () => {
    test(`Should render 'CD Application' in 'H1' tag`, () => {
        const template = `<h1></h1>`
        document.body.innerHTML = template
        // Call main
        require('./../src/main.js')

        const result = document.querySelector('h1')

        expect(result.innerText).toBe('CD Application')
    })
})