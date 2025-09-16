import type { Meta, StoryObj } from '@storybook/angular';
import { ResponsiveGridComponent, GridItem } from '../app/components/responsive-grid/responsive-grid.component';

const sample: GridItem[] = Array.from({ length: 8 }).map((_, i) => ({
  title: `Card ${i+1}`,
  body: 'Responsive layout that adapts to viewport width.',
}));

const meta: Meta<ResponsiveGridComponent> = {
  title: 'Components/ResponsiveGrid',
  component: ResponsiveGridComponent,
  args: { items: sample },
};
export default meta;

export const Default: StoryObj<ResponsiveGridComponent> = {};
