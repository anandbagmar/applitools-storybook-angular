import type { Meta, StoryObj } from '@storybook/angular';
import { ModalDialogComponent } from '../app/components/modal-dialog/modal-dialog.component';

const meta: Meta<ModalDialogComponent> = {
  title: 'Components/ModalDialog',
  component: ModalDialogComponent,
  args: { open: true, title: 'Review changes' },
};
export default meta;

export const Open: StoryObj<ModalDialogComponent> = {};
export const Closed: StoryObj<ModalDialogComponent> = { args: { open: false } };
