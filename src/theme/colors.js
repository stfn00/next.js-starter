export default {
  light: {
    surface: {
      background: '#FFFFFF',
      text: '#000000',
    },
    button: {
      primary: {
        background: '#FFFFFF',
        text: '#000000',
        border: '#000000',
        hover: {
          background: '#000000',
          text: '#FFFFFF',
          border: '#000000',
        },
        focus: {
          shadow: '#000000',
        },
        disabled: {
          background: '#EEEEEE',
          text: '#BBBBBB',
          border: '#BBBBBB',
        }
      },
      secondary: {
        background: 'transparent',
        text: '#000000',
        hover: {},
        focus: {
          shadow: '#000000',
        },
        disabled: {
          text: '#CCCCCC',
        }
      }
    }
  },
  grey: {
    surface: {
      background: '#ccc',
      text: '#000000',
    },
    button: {
      primary: {
        background: '#000000',
        text: '#FFFFFF',
        border: '#FFFFFF',
        hover: {
          background: '#FFFFFF',
          text: '#000000',
          border: '#FFFFFF',
        },
        focus: {
          shadow: '#FFFFFF',
        },
        disabled: {
          background: '#EEEEEE',
          text: '#787878',
          border: '#787878',
        }
      },
      secondary: {
        background: 'transparent',
        text: '#FFFFFF',
        hover: {},
        focus: {
          shadow: '#FFFFFF',
        },
        disabled: {
          text: '#787878',
        }
      },
    }
  },
  dark: {
    surface: {
      background: '#000000',
      text: '#FFFFFF',
    },
    button: {
      primary: {
        background: '#000000',
        text: '#FFFFFF',
        border: '#FFFFFF',
        hover: {
          background: '#FFFFFF',
          text: '#000000',
          border: '#FFFFFF',
        },
        focus: {
          shadow: '#FFFFFF',
        },
        disabled: {
          background: '#EEEEEE',
          text: '#787878',
          border: '#787878',
        }
      },
      secondary: {
        background: 'transparent',
        text: '#FFFFFF',
        hover: {},
        focus: {
          shadow: '#FFFFFF',
        },
        disabled: {
          text: '#787878',
        }
      },
    }
  },
  greyscale: {
    white: '#FFFFFF',
    black: '#000000',
  },
  status: {
    success: {
      dark1: '#2B774E',
      default: '#44BA79',
    },
    warning: {
      dark1: '#A27632',
      default: '#FCB84F',
    },
    error: {
      dark1: '#99392B',
      default: '#C9331E',
    },
  },
}
