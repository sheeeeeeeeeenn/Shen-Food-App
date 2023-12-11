import {
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import Hotel from "../../components/Hotel";
import { supabase } from "../../supabase";
import { FlatList } from "react-native";

const index = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "fetching your location ..."
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Services not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use the location service",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    console.log(location);
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const address = await LocationGeocoding.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const streetAddress = address[0].name;
      for (let item of response) {
        let address = `${item.name}, ${item?.postalCode}, ${item?.city}`;

        setDisplayCurrentAddress(address);
      }
    }
  };
  console.log("my address", displayCurrentAddress);
  const recommended = [
    {
      id: 0,
      name: "Jollibee",
      image:
        "https://res.cloudinary.com/dp9lawgua/image/upload/w_150,h_150/v1702239335/1200px-Jollibee_2011_logo.svg_brmp3r.png",
      time: "35 - 45",
      type: "Filipino",
    },
    {
      id: 1,
      name: "Mang Inasal",
      image:
        "https://res.cloudinary.com/dp9lawgua/image/upload/w_140,h_130/v1702239361/1200px-Mang_Inasal.svg_q2kfdk.png",
      time: "10 - 35",
      type: "Filipino",
    },
    {
      id: 2,
      name: "Chowking",
      image:
        "https://res.cloudinary.com/dp9lawgua/image/upload/w_170,h_170/v1702239425/800px-Chowking_logo.svg_iqmbce.png",
      time: "20 - 25",
      type: "Chinese-Filipino",
    },
    {
      id: 3,
      name: "McDonald's",
      image:
        "https://res.cloudinary.com/dp9lawgua/image/upload/w_170,h_170/v1702239439/1200px-McDonald_27s_Golden_Arches.svg_vao5fs.png",
      time: "20 - 25",
      type: "Fast Food",
    },
    {
      id: 4,
      name: "Shakey's Pizza",
      image:
        "https://res.cloudinary.com/dp9lawgua/image/upload/w_120,h_130/v1702239452/u7XZgm2q_400x400_rexi9n.jpg",
      time: "20 - 25",
      type: "Pizza",
    },
  ];
  const items = [
    {
      id: "0",
      name: "Offers",
      description: "Upto 50% off",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Karinderya",
      description: "Philippines",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gourmet",
      description: "Selections",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Healthy",
      description: "Curated dishes",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
  ];
  const hotels = [
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

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("hotels").select("*");
        console.log("Data:", data);
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          setData(data);
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    }

    fetchData();
  }, []);

  console.log("data", data);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          padding: 10,
        }}
      >
        <Octicons name="location" size={24} color="#E52850" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>
            {displayCurrentAddress}
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#6CB4EE",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>User</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          borderColor: "#C0C0C0",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 11,
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <TextInput placeholder="Search for food, restaurants, hotels..." />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

      <Carousel />

      <Categories />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommended?.map((item, index) => (
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              margin: 10,
              borderRadius: 8,
            }}
          >
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 7,
                }}
                source={{ uri: item?.image }}
              />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  flex: 1,
                  marginTop: 3,
                  color: "gray",
                  fontWeight: "500",
                }}
              >
                {item?.type}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Ionicons name="ios-time" size={24} color="green" />
                <Text>{item?.time} mins</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        EXPLORE
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items?.map((item, index) => (
          <View
            key={index}
            style={{
              width: 90,
              borderColor: "#E0E0E0",
              borderWidth: 1,
              paddingVertical: 5,
              paddingHorizontal: 1,
              borderRadius: 5,
              marginLeft: 10,
              marginVertical: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item?.image }}
            />

            <Text style={{ fontSize: 13, fontWeight: "500", marginTop: 6 }}>
              {item?.name}
            </Text>

            <Text style={{ fontSize: 12, color: "gray", marginTop: 3 }}>
              {item?.description}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        ALL RESTAURANTS
      </Text>

      <View style={{ marginHorizontal: 8 }}>
        {data?.map((item, index) => (
          <Hotel key={index} item={item} menu={item?.menu} />
        ))}
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
