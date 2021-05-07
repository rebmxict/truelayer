import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const logoOrange = '#F15A39';

export default {
  primary: {
    contrastText: white,
    dark: colors.blueGrey[900],
    main: colors.blueGrey[800],
    light: colors.blueGrey[100]
  },
  secondary: {
    contrastText: white,
    // dark: colors.orange[900],
    // main: colors.orange.A700,
    // light: colors.orange.A400,
    dark: logoOrange,
    main: logoOrange,
    light: logoOrange,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[800],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200]
};
