import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableHighlight, Image, FlatList } from "react-native";

const ImageEditingFiltersScreen = () => {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setFilters([{
      id: "1",
      name: "Filter 1",
      primaryColor: "#FCF1D6",
      secondaryColor: "rgba(79,255,110,0.4)",
      textColor: "black"
    }, {
      id: "2",
      name: "Filter 2",
      primaryColor: "#F9D8D9",
      secondaryColor: "rgba(87,79,255,0.35)",
      textColor: "white"
    }, {
      id: "3",
      name: "Filter 3",
      primaryColor: "#D9DADD",
      secondaryColor: "rgba(255,79,79,0.5)",
      textColor: "white"
    }, {
      id: "4",
      name: "Filter 4",
      primaryColor: "#A0CC7E",
      secondaryColor: "#4FDFCE",
      textColor: "white"
    }]);
  }, []);
  return <View style={styles.container}>
      <View>
        <Text>Image Viewer</Text>
        <View style={styles.imageContainer}>
          <Image source={require("./assets/edit.png")} />
        </View>
        <View style={styles.tabView}>
          <View style={styles.tabElements}>
            <Text>Crop</Text>
          </View>
          <View style={styles.selected}>
            <Text>Filters</Text>
          </View>
          <View style={styles.tabElements}>
            <Text>Edit</Text>
          </View>
          <View style={styles.tabElements}>
            <Text>Shadows</Text>
          </View>
        </View>
        <FlatList style={styles.filtersList} data={filters} renderItem={({
        item
      }) => <FilterView filter={item} />} keyExtractor={item => item.id} horizontal={true} />
      </View>
      <View style={styles.btn}>
        <Button>Apply</Button>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  imageContainer: {
    height: 127,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9D8D9",
    marginTop: 30,
    borderRadius: 88,
    alignSelf: "center",
    position: "absolute",
    left: 58.5
  },
  tabView: {
    width: "100%",
    height: 48,
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 5,
    marginVertical: 20
  },
  selected: {
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  tabElements: {
    width: "20%",
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 10
  },
  screenImage: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btn: {
    paddingHorizontal: "10%"
  },
  text: {
    color: "#77838F"
  },
  filtersList: {
    width: "100%",
    height: 100
  }
});
export default ImageEditingFiltersScreen;

const Button = props => {
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD">
      <View style={[btnStyles.button, {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
      height: props.height ? props.height : 49,
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: props.borderColor ? props.borderColor : "#000000"
    }]}>
        <Text style={[btnStyles.text, {
        color: props.color ? props.color : "#ffffff"
      }]}>
          {props.children}
        </Text>
      </View>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});

const FilterView = ({
  filter
}) => {
  const {
    entities: Cell
  } = useSelector(state => state.Cell);
  const bgPrimary = {
    backgroundColor: filter.primaryColor,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: "100%",
    height: "75%",
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    top: NaN
  };
  const bgSecondary = {
    backgroundColor: filter.secondaryColor
  };
  const textColor = {
    color: filter.textColor
  };
  return <View style={filterViewStyles.filterView}>
      <View style={[filterViewStyles.filterViewPrimary, bgPrimary]}></View>
      <View style={[filterViewStyles.filterViewSecondary, bgSecondary]}>
        <Text style={textColor}>{Cell}</Text>
      </View>
    </View>;
};

const filterViewStyles = StyleSheet.create({
  filterView: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    shadowColor: "#000",
    elevation: 15
  },
  filterViewPrimary: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: "100%",
    height: "75%"
  },
  filterViewSecondary: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center"
  }
});