import JourneyQuestion from './index.svelte'
import { render, fireEvent } from '@testing-library/svelte'

describe('journey-question', () => {
    it('etc', async () => {
        const question = "this is the question"
        const answer = "okay"

        const { getByText, getByTestId } = render(JourneyQuestion, {
            question,
            answer
        })

        expect(getByTestId("question").textContent).toBe(question)
        expect(getByTestId("input-text").value).toBe(answer)
    })
})