import { React } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Pressable,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../../constants/";

import CalendarPicker from "react-native-calendar-picker";

const styles = StyleSheet.create({
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


const OutOfResidence = ({ navigation }) => {

    /*
        Render
    */

    return (
        <SafeAreaView style={styles.container}>

            {/* Heading */}

            <View style={{ flexDirection: 'row', marginTop: 40, paddingHorizontal: SIZES.base }}>
                <TouchableOpacity
                    style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10 }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.leftArrow}
                        resizeMode="cover"
                        style={{
                            height: 20,
                            width: 20,
                        }}
                    />
                </TouchableOpacity>

                <Text style={{ ...FONTS.h3 }}>Yurt Dışında Konaklama Talep Formu</Text>

                <View
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: "center", justifyContent: "center", marginLeft: 15, marginRight: 15, ...FONTS.body3 }}>
                    Çocuğum **INSERT**’ın aşağıda belirttiğim akşam(lar)da yurttan çıkmasına izin vermenizi rica ediyorum.
                </Text>
            </View>

            {/* Form */}
            {/* Adres */}

            <View style={{ flexDirection: "row", flex: 1, marginTop: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.multilinetext}>Kalacağı</Text>
                    <Text style={styles.multilinetext}>Adres</Text>
                </View>

                <TextInput
                    style={styles.input}
                    selectionColor={COLORS.black}
                />

            </View>

            {/* Neden */}
            <View style={{ flexDirection: "row", flex: 1, marginTop: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.multilinetext}>Nedeni</Text>
                </View>

                <TextInput
                    style={styles.input}
                    selectionColor={COLORS.black}
                />

            </View>

            {/* Sorumlu Yetişkin İsmi */}
            <View style={{ flexDirection: "row", flex: 1, marginTop: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.multilinetext}>Sorumlu</Text>
                    <Text style={styles.multilinetext}>Yetişkin</Text>
                </View>

                <TextInput
                    style={styles.input}
                    selectionColor={COLORS.black}
                />

            </View>

            {/* Sorumlu Yetişkin Numarası */}
            <View style={{ flexDirection: "row", flex: 1, marginTop: 20, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.multilinetext}>İrtibat</Text>
                    <Text style={styles.multilinetext}>Numarası</Text>
                </View>

                <TextInput
                    style={styles.input}
                    selectionColor={COLORS.black}
                />

            </View>

            {/* Tarihler */}
            <View>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    todayBackgroundColor={COLORS.lightgray}
                    selectedDayColor={COLORS.rcred}
                    selectedDayTextColor="#FFFFFF"
                />
            </View>

            {/* Gönder */}
            <View style={{ alignItems: "center", marginBottom: 5 }}>
                <Pressable
                    style={styles.button}
                    onPress={() => console.log(SIZES.height)}
                >
                    <Text style={{ ...FONTS.body3 }}>Gönder</Text>
                </Pressable>
            </View>

        </SafeAreaView>



    )
}

export default OutOfResidence;