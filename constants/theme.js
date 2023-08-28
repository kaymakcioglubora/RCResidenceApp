import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

/*
 * Custom Colors 
 */
export const COLORS = {

    rcred: "#731A21",
    rcredgradient: "#5c151b",
    rcblue: "#112345",

    black: "#1E1F20",
    brokenwhite: "#ededed",
    gray: "#505050",
    lightgray: "#d0d0d0"
};

/*
 * Sizes
 */
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

/*
 * Fonts
 */
export const FONTS = {

    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

/*
 * Styles 
 */
export const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.brokenwhite
    },

    input: {
        width: SIZES.width - 120,
        height: 40,
        backgroundColor: COLORS.lightgray,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 14,
        marginRight: 15,
        marginTop: 2,
    },

    multilinetext: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        ...FONTS.h3,
        marginLeft: 15,
    },

    button: {
        width: 100,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.rcred,
        borderRadius: 15,
        borderColor: "#ccc",
    }
})

const appTheme = { COLORS, SIZES, FONTS, STYLES};

export default appTheme;