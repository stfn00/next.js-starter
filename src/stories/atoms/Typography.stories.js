import Typography from '@/components/atoms/Typography/Typography.component'

export default {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
}

// Variant - Default
export const Default = {
  args: {
    as: 'p',
    typo: 'paragraphMD',
    content: 'Default: Paragraph MD'
  },
}

//  Variant - Display 2XL
export const Display2XL = {
  args: {
    as: 'h1',
    typo: 'display2XL',
    content: 'Display 2XL'
  },
}

//  Variant - Display XL
export const DisplayXL = {
  args: {
    as: 'h2',
    typo: 'displayXL',
    content: 'Display XL'
  },
}

//  Variant - Display LG
export const DisplayLG = {
  args: {
    as: 'h3',
    typo: 'displayLG',
    content: 'Display LG'
  },
}

//  Variant - Display MD
export const DisplayMD = {
  args: {
    as: 'h3',
    typo: 'displayMD',
    content: 'Display MD'
  },
}

//  Variant - Display SM
export const DisplaySM = {
  args: {
    as: 'h4',
    typo: 'displaySM',
    content: 'Display SM'
  },
}

//  Variant - Display XS
export const DisplayXS = {
  args: {
    as: 'h5',
    typo: 'displayXS',
    content: 'Display XS'
  },
}

//  Variant - Paragraph XL
export const ParagraphXL = {
  args: {
    as: 'h6',
    typo: 'paragraphXL',
    content: 'Paragraph XL'
  },
}

//  Variant - Paragraph LG
export const ParagraphLG = {
  args: {
    as: 'p',
    typo: 'paragraphLG',
    content: 'Paragraph LG'
  },
}

//  Variant - Paragraph MD
export const ParagraphMD = {
  args: {
    as: 'p',
    typo: 'paragraphMD',
    content: 'Paragraph MD'
  },
}

//  Variant - Paragraph SM
export const ParagraphSM = {
  args: {
    as: 'p',
    typo: 'paragraphSM',
    content: 'Paragraph SM'
  },
}

//  Variant - Weight Default
export const WeightDefault = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
}

//  Variant - Weight Light
export const WeightLight = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    weight: 'light',
  },
}

//  Variant - Weight Medium
export const WeightMedium = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    weight: 'medium',
  },
}

//  Variant - Weight Semibold
export const WeightSemibold = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    weight: 'semibold',
  },
}

//  Variant - Weight Bold
export const WeightBold = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    weight: 'bold',
  },
}

//  Variant - Rich Text
export const RichText = {
  args: {
    children: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper faucibus dignissim. <b>Aliquam erat volutpat.</b> Curabitur mollis ut enim commodo pellentesque. <ul><li>Lorem ipsum</li><li>Dolor sit amet</li><li>Consectetur adipiscing elit</li></ul> Vestibulum erat purus, pharetra at ultrices nec, iaculis ut risus. Suspendisse potenti. Mauris facilisis sapien sapien, ut laoreet turpis luctus eu. <a href="#">Praesent a purus ipsum.</a></p>
<p>Maecenas eget lacus in arcu viverra aliquam. Morbi vitae efficitur nulla. Duis fermentum elementum interdum. Morbi ut magna leo. Proin pellentesque orci sem, <strong>sit amet commodo risus facilisis eu.</strong> Sed fringilla eros hendrerit ornare cursus. Mauris pellentesque aliquet ante, eget tincidunt odio malesuada in. Integer luctus, sapien vel sodales venenatis, ante eros tincidunt odio, eget placerat urna leo a diam. Aenean at porta risus. <ol><li>Lorem ipsum</li><li>Dolor sit amet</li><li>Consectetur adipiscing elit</li></ol> Curabitur in mollis nibh. <em>Praesent metus turpis, finibus id purus quis, gravida euismod eros. Vivamus tristique libero id ultrices porttitor.</em> In quam neque, consequat in sem id, sollicitudin tristique tellus. Vestibulum cursus condimentum nibh eu dapibus. Ut laoreet varius arcu, sit amet cursus libero tincidunt sit amet.</p>
    `,
  },
}
