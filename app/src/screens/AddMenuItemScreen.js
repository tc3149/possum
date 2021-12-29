import React from 'react';
import {
    View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput
} from 'react-native';

function AddMenuItemScreen() {
    return(
        <View style={styles.background }>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Add Menu Item</Text>
            </View>

            <View style={styles.inputField}>
                <View style={styles.itemName}>
                    <TextInput 
                        placeholder='Item Name:'
                        style={{ left: 10 }}
                    />
                </View>

                <View style={styles.price}>
                    <TextInput 
                        placeholder='Price:'
                        style={{ left: 10 }}
                    />
                </View>
            </View>

            <View>
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "#E2E2E2",
    },
    itemName: {
        marginRight: 325,
        left: 60,
        backgroundColor: 'white',
        height: 30,
        width: 400,
    },
    price: {
        right: 225,
        backgroundColor: 'white',
        height: 30,
        width: 150,
    },
    headerView: {
        justifyContent: "flex-start",
        alignItems: "center",
        position: 'absolute',
        height: 1000,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputField: {
        left: 50,
        padding: 20, 
        flexDirection: 'row',
        height: 925,
        justifyContent: 'center', 
        position: 'absolute',
    }
})

export default AddMenuItemScreen;