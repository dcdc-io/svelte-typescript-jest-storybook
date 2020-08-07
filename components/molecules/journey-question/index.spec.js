import JourneyQuestion from './index.svelte'
import { render, fireEvent } from '@testing-library/svelte'

describe('journey-question', () => {
    it('etc', async () => {
        const { getByText, getByTestId } = render(JourneyQuestion)

        let k = getByTestId("foo").textContent
        expect(k).toBe("")
    })
})