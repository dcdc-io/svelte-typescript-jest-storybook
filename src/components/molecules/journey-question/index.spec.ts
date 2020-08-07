import JourneyQuestion from './index.svelte'
import { render } from '@testing-library/svelte'

describe('journey-question', () => {
    it('etc', async () => {
        const question = "this is the question"
        const answer = "okay"        

        const { getByTestId } = render(JourneyQuestion, {
            question,
            answer
        })

        expect(getByTestId("question").textContent).toBe(question)
        expect(getByTestId("input-text").nodeValue).toBe(answer)
    })
})