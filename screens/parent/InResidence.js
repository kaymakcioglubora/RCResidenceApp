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

import { COLORS, FONTS, SIZES, STYLES, icons, images } from "../../constants/";

import CalendarPicker from "react-native-calendar-picker";


/**
 * 
 * Render 
 * 
 */
const InResidence = ({ navigation }) => {

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
            style={STYLES.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <SafeAreaView style={STYLES.container}>

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

                        <Text style={{ ...FONTS.h3 }}>Okul Vakti Yurtta Kalma Talep Formu</Text>

                        <View
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: "center", justifyContent: "center", marginLeft: 15, marginRight: 15, ...FONTS.body3 }}>
                            Çocuğum aşağıda belirttiğim tarihte ve ders saatlerinde yurtta kalabilir. 
                            Çocuğumun derslerine gitmediği ve yurtta kaldığı süre boyunca yurtta sorumlu bir yetişkinin bulunmadığı bilgim dahilindedir.
                        </Text>
                    </View>

                    {/* Form */}
                    {/* Nedeni */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLES.multilinetext}>Kalma</Text>
                            <Text style={STYLES.multilinetext}>Nedeni</Text>
                        </View>

                        <TextInput
                            style={STYLES.input}
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
                    <View style={{ flex: 1, bottom: 20, alignItems: "center", marginTop: 250 }}>
                        <Pressable
                            style={STYLES.button}
                            onPress={() => console.log("Start Date" + String(selectedStartDate) + "\nEnd Date: " + String(selectedEndDate))}
                        >
                            <Text style={{ ...FONTS.body3, color: COLORS.brokenwhite }}>Gönder</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default InResidence;