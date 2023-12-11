import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Animated,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FoodItem from "../../components/FoodItem";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

const hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  
  const menu = [
    {
      id: "1",
      name: "Tacos",
      items: [
        {
          id: "101",
          veg: "true",
          name: "Naked Veggie Taco",
          image:
            "https://b.zmtcdn.com/data/dish_photos/b3c/5b46acc7cfd30025439f88f29c3d3b3c.jpg?fit=around|130:130&crop=130:130;*,*",
          price: " ₱249",
          rating: "4.1",
          ratings: "43",
          quantity: "1",
          bestSeller: "false",
          description:
            "A crusted & spice coated plant-based protein patty Taco, layered with warm nacho cheese, lettuce, our signature Mexican Pico De Gallo – a tangy tomato & onion mix along with the goodness of mozzarella and cheddar cheese blend. KCAL 208.02",
        },
        {
          id: "102",
          veg: "true",
          name: "Crunchy Taco Pinto Bean",
          image:
            "https://b.zmtcdn.com/data/dish_photos/a49/18e4cd38093be595aee2d18cb58e3a49.jpg?fit=around|130:130&crop=130:130;*,*",
          price: "109",
          rating: "4.1",
          ratings: "34",
          quantity: "1",
          bestSeller: "true",
          description:
            "It's crunchy. It's delicious! Our signature product served with pinto beans & zesty ranch sauce.",
        },
        {
          id: "103",
          veg: "false",
          name: "CRUNCHY TACOS NON VEG",
          image:
            "https://b.zmtcdn.com/data/dish_photos/83c/7f0dfe72ccff7d34b5cd5d3d020ac83c.jpg?fit=around|130:130&crop=130:130;*,*",
          price: "119",
          rating: "4.3",
          ratings: "56",
          quantity: "1",
          bestSeller: false,
          description:
            "It's crunchy. It's delicious! Our signature product served with Mexican chicken & zesty ranch sauce.",
        },
        {
          id: "105",
          veg: "true",
          name: "Soft Taco Mexican Paneer",
          image:
            "https://b.zmtcdn.com/data/dish_photos/79b/d2c46424c7aa1232cc09d3e7cf27279b.jpg?fit=around|130:130&crop=130:130;*,*",
          price: "149",
          rating: "4.5",
          ratings: "45",
          quantity: "1",
          bestSeller: "true",
          description:
            "The Soft taco has a warm, flour tortilla, served with Mexican paneer & lava sauce.",
        },
      ],
    },
    {
      id: "11",
      name: "Burritos Rolls",
      items: [
        {
          id: "201",
          veg: "true",
          name: "7 Layer Burrito Roll Veg",
          image:
            "https://b.zmtcdn.com/data/dish_photos/d2f/688822c306f8c9d323e2493d21675d2f.jpg?fit=around|130:130&crop=130:130;*,*",
          price: "260",
          rating: "4.3",
          ratings: "34",
          bestSeller: "true",
          description:
            "7 layer burrito is a complete meal in itself. It is a grilled soft tortilla filled 7 different including fajita veg, pinto beans, crispy potato bites, Mexican seasoned rice, tangy salsa, nacho cheese sauce & lava sauce, it's mind-blowing.",
        },
        {
          id: "202",
          veg: "true",
          name: "Burrito Supreme Roll - Veg",
          image:
            "https://b.zmtcdn.com/data/dish_photos/acf/36224d0e9f26eae9e539474183f61acf.jpg?fit=around|130:130&crop=130:130;*,*",
          price: "179",
          rating: "4.1",
          ratings: "52",
          bestSeller: "false",
          description:
            "Warm tortilla layered with a generous portion of Cheddar & Mozzarella Cheese, filled with Mexican paneer, spices, Jalapeno rice and Reaper ranch sauce.",
        },
        {
          id: "203",
          veg: "true",
          name: "Paneer Makhni Burrito Roll",
          image:
            "https://b.zmtcdn.com/data/dish_photos/46c/2701e958b7e7edceedaaa2097716c46c.jpg?fit=around|130:130&crop=130:130;*,*",
          price: "149",
          rating: "4.5",
          ratings: "52",
          bestSeller: "false",
          description:
            "Warm tortilla layered with paneer simmered in mildly spicy, aromatic makhani tomato gravy, onion, coriander & our signature Mexican Pico de Gallo",
        },
      ],
    },
  ];

  const scrollViewRef = useRef(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;
  const scrollToCategory = (index) => {
    const yOffset = index * ITEM_HEIGHT;
    Animated.timing(scrollAnim, {
      toValue: yOffset,
      duration: 500,
      useNativeDriver: true,
    }).start();
    scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  };
  const [modalVisible, setModalVisible] = useState(false);
  const recievedMenu = JSON.parse(params?.menu);
  return (
    <>
      <ScrollView ref={scrollViewRef} style={{ backgroundColor: "white" }}>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            onPress={() => router.back()}
            style={{ padding: 5 }}
            name="arrow-back"
            size={24}
            color="black"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
              gap: 10,
            }}
          >
            <SimpleLineIcons name="camera" size={24} color="black" />
            <Ionicons name="bookmark-outline" size={24} color="black" />
            <MaterialCommunityIcons
              name="share-outline"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 12,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {params?.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: "gray",
              fontWeight: "500",
              fontSize: 15,
            }}
          >
            {" "}
            Philippines | Fast Food
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#006A4E",
                borderRadius: 4,
                paddingHorizontal: 4,
                paddingVertical: 5,
                gap: 4,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                {params?.aggregate_rating}
              </Text>
              <Ionicons name="ios-star" size={15} color="white" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 5 }}>
              6.9K Ratings
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D0F0C0",
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 12,
            }}
          >
            <Text>30 - 40 mins • 12 km | Caloocan</Text>
          </View>
        </View>

        {recievedMenu?.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: "row", backgroundColor: "white" }}>
        {recievedMenu?.map((item, index) => (
          <Pressable
            onPress={() => scrollToCategory(index)}
            style={{
              paddingHorizontal: 7,
              borderRadius: 4,
              paddingVertical: 5,
              marginVertical: 10,
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#181818",
              borderWidth: 1,
            }}
          >
            <Text>{item?.name}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 25,
          bottom: cart?.length > 0 ? 70 : 35,
          backgroundColor: "black",
        }}
      >
        <Ionicons
          style={{ textAlign: "center" }}
          name="md-fast-food-outline"
          size={24}
          color="white"
        />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontSize: 11,
            marginTop: 3,
          }}
        >
          MENU
        </Text>
      </Pressable>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}
        >
          {menu?.map((item, index) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 18 }}
              >
                {item?.name}
              </Text>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 18 }}
              >
                {item?.items?.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 120, height: 70, resizeMode: "contain" }}
              source={{
                uri: "https://res.cloudinary.com/dp9lawgua/image/upload/t_Thumbnail/v1702237827/favorite_msu5qz.png",
              }}
            />
          </View>
        </View>
      </Modal>

      {cart?.length > 0 && (
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/cart",
              params: {
                name: params.name,
              },
            })
          }
          style={{
            backgroundColor: "#fd5c63",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {cart.length} items added
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 5,
              fontWeight: "600",
            }}
          >
            Add items(s) worth 240 to reduce surge fee by Php 35.
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default hotel;

const styles = StyleSheet.create({});
