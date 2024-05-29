import Button from '@/components/atoms/Button/Button.component'

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button Label',
  },
}

// Variant - Primary
export const Primary = {
  args: {
    variant: 'primary',
    iconEnd: 'arrow-right',
  },
}

// Variant - Secondary
export const Secondary = {
  args: {
    variant: 'secondary',
    iconEnd: 'arrow-right',
  },
}
