import React from "react";
import { styles } from "../../styles/main";
import { Text, View } from "react-native";

export const Placeholder:React.FC=()=>{
return(
    <View style={styles.noProductsFoundSection}>
    <Text
      style={[
        styles.boldText,
        {
          fontSize: 20,
          paddingTop: 10
        }
      ]}
    >
      SORRY, NO PRODUCTS FOUND !!
    </Text>
  </View>
)
}