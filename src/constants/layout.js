const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window')

export {
    width as SCREENWIDTH,
    height as SCREENHEIGHT
}