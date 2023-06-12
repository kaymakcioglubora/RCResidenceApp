import {Dimension} from "react-native";
const {width, height} = Dimension.get("window")

/*
 * Custom Colors 
 */
export const COLORS = {

    rcred: "#731A21",
    rcblue: "#112345",

    black: "#1E1F20",
    brokenwhite: "#E2E2E2",
    gray: "#505050",
    lightgray: "#d0d0d0"
};

/*
 * Sizes
 */
export const SIZES = {
    // Global Sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // Font Sizes
    largeTitle: 50,

    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,

    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // App Dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 60},
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22},
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22}
}

const appTheme = {
    COLORS,
    SIZES,
    FONTS
}

export default appTheme;