import { React, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
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


const Weekends = ({ navigation }) => {

    const [reason, setReason] = useState("");
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };

    const disableDate = (date) => {
        let date_selected = new Date(date);
        return !(date_selected.getDay() === 6 || date_selected.getDay() === 0);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

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

                        <Text style={{ ...FONTS.h3 }}>Hafta Sonu Yurtta Konaklama Talep Formu</Text>

                        <View
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: "center", justifyContent: "center", marginLeft: 15, marginRight: 15, ...FONTS.body3 }}>
                            Çocuğum **INSERT**’ın aşağıda belirttiğim akşam(lar)da yurtta kalmasını talep ediyorum.
                        </Text>
                    </View>

                    {/* Form */}
                    {/* Nedeni */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.multilinetext}>Kalma</Text>
                            <Text style={styles.multilinetext}>Nedeni</Text>
                        </View>

                        <TextInput
                            style={styles.input}
                            selectionColor={COLORS.black}
                            onChangeText={(text) => setReason(text)}
                        />
                    </View>

                    {/* Tarihler */}
                    <View style={{ flex: 1 }}>
                        <CalendarPicker
                            startFromMonday={true}
                            allowRangeSelection={true}
                            todayBackgroundColor={COLORS.lightgray}
                            selectedDayColor={COLORS.rcred}
                            selectedDayTextColor="#FFFFFF"
                            weekdays={[
                                'Pzt',
                                'Salı',
                                'Çrş',
                                'Prş',
                                'Cuma',
                                'Cmt',
                                'Pzr'
                            ]}
                            months={[
                                'Ocak',
                                'Şubat',
                                'Mart',
                                'Nisan',
                                'Mayıs',
                                'Haziran',
                                'Temmuz',
                                'Ağustos',
                                'Eylül',
                                'Ekim',
                                'Kasım',
                                'Aralık',
                            ]}
                            previousTitle="<"
                            nextTitle=">"
                            disabledDates={disableDate}
                            disableTouchEvent={disableDate}
                            onDateChange={onDateChange}
                        />

                    </View>

                    {/* Gönder */}
                    <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
                        <Pressable
                            style={styles.button}
                            onPress={() => console.log(SIZES.height)}
                        >
                            <Text style={{ ...FONTS.body3, color: COLORS.brokenwhite }}>Gönder</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Weekends;