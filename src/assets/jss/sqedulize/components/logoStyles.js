import { grayColor, hexToRgb, defaultFont, whiteColor } from '../../../../shared/style_utility';
const logoStyle = theme => ({
    logo: {
        position: "relative",
        padding: "15px 15px",
        zIndex: "4",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "0",
    
          height: "1px",
          right: "15px",
          width: "calc(100% - 30px)",
          backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)"
        }
      },
      logoLink: {
        ...defaultFont,
        textTransform: "capitalize",
        padding: "5px 0",
        display: "block",
        fontSize: "18px",
        textAlign: "left",
        fontWeight: "500",
        lineHeight: "30px",
        color: grayColor,
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
          color: whiteColor
        }
      },
      logoImage: {
        width: "30px",
        display: "inline-block",
        maxHeight: "30px",
        marginLeft: "10px",
        marginRight: "15px"
      },
      img: {
        width: "35px",
        top: "22px",
        position: "absolute",
        verticalAlign: "middle",
        border: "0"
      },
      
});

export default logoStyle;