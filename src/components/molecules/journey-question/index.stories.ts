import { action } from '@storybook/addon-actions';

import JourneyQuestion from './index.svelte'

export default {
    title: 'journey-question',
};

export const Text = () => ({
    Component: JourneyQuestion,
    props: { question: 'Hello' },
    on: { progress: action('clicked') },
});