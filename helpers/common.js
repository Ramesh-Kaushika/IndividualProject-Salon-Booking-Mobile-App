import {Dimensions} from "react-native";


const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

export const hp = percentage => {
    return(percentage*deviceHeight) / 100;
}

export const wp = percentage => {
    return(percentage*deviceWidth) / 100;
}

export const getColumnCount = () => {
    if (deviceWidth >= 1024){
        //desktop
        return 4;
    }
    else if (deviceWidth >= 768){
        //tablet
        return 3;
    }
    else {
        //phone
        return 2
    }
}

export const getImageSize = (height, width) => {
  if (width>height){
      //landscape
      return 250;
  }else if (width<height){
      //portrait
      return 300;
  }else {
      //square
      return 200;
  }
}
