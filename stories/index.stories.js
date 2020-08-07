import { action } from '@storybook/addon-actions';

import Button from './button.svelte';

export default {
  title: 'Unsorted',
};

export const Text = () => ({
  Component: Button,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
});

export const Emoji = () => ({
  Component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
});


import InputText from '../src/components/atoms/input/input-text.svelte'

export const Input = () => ({
  Component: InputText,
  on: { change: e => action('changed')(e.detail) }
})