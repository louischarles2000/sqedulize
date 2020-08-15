
import { defaultFont } from '../../../../shared/style_utility';
import {
    drawerWidth,
    transition,
    container
  } from '../sqedulize';
  

const DrawerStyles = (theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        ...defaultFont
      },
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        // background: "#8e44ad",
        background: "#621981",
        opacity: ".8"
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      ...defaultFont
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      ...defaultFont
    },
    list: {
      color: '#fff',
      ...defaultFont
    },
    divider: {
      backgroundColor: ' rgb(168, 164, 164)',
      width: '80%',
      margin: '5px auto'
    },
    listIcon:{
      color: '#fff'
    }
  });

  export default DrawerStyles;