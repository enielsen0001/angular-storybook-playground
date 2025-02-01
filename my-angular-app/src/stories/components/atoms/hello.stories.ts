import { Meta, IStory } from '@storybook/angular';
import { HelloComponent } from '../../../app/components/atoms/hello/hello.component';

export default {
  title: 'Atoms/HelloComponent',
  component: HelloComponent,
} as Meta; // To define component and display title

export const Primary = () => ({
  props: { who: 'Primary' } // matches to @Input() who
});

export const Secondary = () => ({
  props: { who: 'Secondary' }
});
