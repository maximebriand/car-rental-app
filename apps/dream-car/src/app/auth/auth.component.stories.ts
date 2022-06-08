import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AuthComponent } from './auth.component';

export default {
  title: 'AuthComponent',
  component: AuthComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AuthComponent>;

const Template: Story<AuthComponent> = (args: AuthComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}