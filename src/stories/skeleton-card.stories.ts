import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonCardComponent } from '../app/components/skeleton-card/skeleton-card.component';

const meta: Meta<SkeletonCardComponent> = {
  title: 'Components/SkeletonCard',
  component: SkeletonCardComponent,
  args: { loading: true },
};
export default meta;

export const Loading: StoryObj<SkeletonCardComponent> = {};
export const Loaded: StoryObj<SkeletonCardComponent> = { args: { loading: false } };
