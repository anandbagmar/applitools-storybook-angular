import type { Meta, StoryObj } from '@storybook/angular';
import { FancyAccordionComponent, AccordionItem } from '../app/components/fancy-accordion/fancy-accordion.component';

const meta: Meta<FancyAccordionComponent> = {
  title: 'Components/FancyAccordion',
  component: FancyAccordionComponent,
  args: {
    items: [
      { id: 'a', title: 'What is Applitools?', content: 'Automated visual testing for web and mobile.' },
      { id: 'b', title: 'Why Storybook?', content: 'Build components in isolation and document them.' },
      { id: 'c', title: 'Snapshot Tips', content: 'Disable animations for stable screenshots.' },
    ] as AccordionItem[],
    openId: 'a',
  },
};
export default meta;

export const Default: StoryObj<FancyAccordionComponent> = {};
export const SecondOpen: StoryObj<FancyAccordionComponent> = { args: { openId: 'b' } };
export const AllClosed: StoryObj<FancyAccordionComponent> = { args: { openId: null } };
