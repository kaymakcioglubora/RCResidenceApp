import { React, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";

import { COLORS, FONTS, SIZES, STYLES, icons, images } from "../../constants/";

import CalendarPicker from "react-native-calendar-picker";


/**
 * 
 * Render 
 * 
 */
const OutOfResidence = ({ navigation }) => {

    const [address, setAddress] = useState("");
    const [reason, setReason] = useState("");
    const [adult, setAdult] = useState("");
    const [adultNumber, setAdultNumber] = useState("");
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

    /*
        Render
    */

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
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLES.multilinetext}>Kalacağı</Text>
                            <Text style={STYLES.multilinetext}>Adres</Text>
                        </View>

                        <TextInput
                            style={STYLES.input}
                            selectionColor={COLORS.black}
                            onChangeText={(text) => setAddress(text)}
                        />

                    </View>

                    {/* Neden */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLES.multilinetext}>Nedeni</Text>
                        </View>

                        <TextInput
                            style={STYLES.input}
                            selectionColor={COLORS.black}
                            onChangeText={(text) => setReason(text)}
                        />

                    </View>

                    {/* Sorumlu Yetişkin İsmi */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLES.multilinetext}>Sorumlu</Text>
                            <Text style={STYLES.multilinetext}>Yetişkin</Text>
                        </View>

                        <TextInput
                            style={STYLES.input}
                            selectionColor={COLORS.black}
                            onChangeText={(text) => setAdult(text)}
                        />

                    </View>

                    {/* Sorumlu Yetişkin Numarası */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={STYLES.multilinetext}>İrtibat</Text>
                            <Text style={STYLES.multilinetext}>Numarası</Text>
                        </View>

                        <TextInput
                            style={STYLES.input}
                            selectionColor={COLORS.black}
                            onChangeText={(text) => setAdultNumber(text)}
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
                            onDateChange={onDateChange}

                        />
                    </View>

                    {/* Gönder */}
                    <View style={{ flex: 1, alignItems: "center", marginTop: 250 }}>
                        <Pressable
                            style={STYLES.button}
                            onPress={() => console.log("From Sending Implementation")}
                        >
                            <Text style={{ ...FONTS.body3, color: COLORS.brokenwhite }}>Gönder</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default OutOfResidence;