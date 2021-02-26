import colors from './colors';

const mobileBreakpoint = 1024;
const containerWidthDesk = 752;

export const junto = {
  appBar: {
    background: `linear-gradient(87deg, ${colors.lighterPurple}, ${colors.perrywinkle})`
  },
  page: {
    backgroundColor: colors.paleGrey
  },
  header: {
    linearGradient: `
      linear-gradient(87deg, ${colors.lighterPurple}, ${colors.perrywinkle})
    `,
    color: colors.white
  },
  titleBar: {
    backgroundColor: colors.periwinkle,
    color: colors.white
  },
  devices: {
    desktop: {
      maxContainerWidth: `${containerWidthDesk}px`,
      breakpoint: `(min-width: ${mobileBreakpoint}px)`,
      breakpointWidth: mobileBreakpoint
    }
  },
  colors
};

export const newDesignSystem = {
  appBar: {
    background: colors.white
  },
  page: {
    backgroundColor: colors.white
  },
  header: {
    background: colors.white,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.22)'
  }
};

export const marsh = {
  appBar: {
    background: '#084D8B'
  },
  colors: {
    primary: '#084D8B'
  },
  logo: {
    default: 'https://static.juntoseguros.com/images/marsh_logo.svg'
  }
};

export const willis = {
  appBar: {
    background: '#6F2182'
  },
  colors: {
    primary: '#6F2182'
  },
  logo: {
    default: 'https://static.juntoseguros.com/images/willis_logo.svg',
    white: 'https://static.juntoseguros.com/images/willis-white_logo.svg'
  }
};

export const aon = {
  appBar: {
    background: '#e11c23'
  },
  colors: {
    primary: '#e11c23'
  },
  logo: {
    default: 'https://static.juntoseguros.com/images/aon_logo.svg',
    white: 'https://static.juntoseguros.com/images/aon-white_logo.svg'
  }
};
