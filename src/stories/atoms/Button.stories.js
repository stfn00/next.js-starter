import Button from '@/components/atoms/Button/Button.component'

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button Label',
    iconEnd: 'arrow-right',
  },
}

// Variant - Primary
export const Primary = {
  args: {
    variant: 'primary',
  },
}

// Variant - Secondary
export const Secondary = {
  args: {
    variant: 'secondary',
  },
}
