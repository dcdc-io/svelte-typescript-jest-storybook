import { action } from '@storybook/addon-actions';

import JourneyQuestion from './journey-question.svelte'

export default {
    title: 'journey-question',
};

export const Text = () => ({
    Component: JourneyQuestion,
    props: { text: 'Hello Button' },
    on: { click: action('clicked') },
});