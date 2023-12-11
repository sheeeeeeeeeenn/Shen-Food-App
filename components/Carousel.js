import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
    "https://res.cloudinary.com/dp9lawgua/image/upload/v1702242202/jll-foodservice-the-post-covid-19-landscape-1200x628_mbjn2a.jpg",
    "https://res.cloudinary.com/dp9lawgua/image/upload/v1702269289/Bangkok_GettyImages-sb10065342aq-001_wdjcmc.jpg",
    "https://res.cloudinary.com/dp9lawgua/image/upload/v1702269359/2_18a_fl_fastfood_400x400_uf75la.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
