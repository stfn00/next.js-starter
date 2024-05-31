import Icon from '@/components/atoms/Icon/Icon.component'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'arrow-right',
  },
}

// Variant - Default
export const Default = {
  args: {},
}

// Variant - Small
export const Small = {
  args: {
    size: 'small',
  },
}

// Variant - Medium
export const Medium = {
  args: {
    size: 'medium',
  },
}

// Variant - Big
export const Big = {
  args: {
    size: 'big',
  },
}

// Variant - Huge
export const Huge = {
  args: {
    size: 'huge',
  },
}

// Variant - Large
export const Large = {
  args: {
    size: 'large',
  },
}
