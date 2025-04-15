import {
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { IconSymbol } from './ui/IconSymbol';
import commonStylesheet from './commonStylesheet/commonStylesheet';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CardSection() {
    return (
        <View style={styles.safeArea}>
            <ScrollView
                horizontal
               // showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.cardContainer1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, }}>
                        <TouchableOpacity>
                            <View style={styles.iconCirle}>
                                <FontAwesome name="bell" size={20} color="#ffffff" />
                            </View>
                        </TouchableOpacity>
                        <Text style={commonStylesheet.cardRegularText}>Tips on increasing your go forward, Click on bell icon for notifications</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }}>

                        <Text style={commonStylesheet.cardRegularText}>Tips on increasing your income</Text>
                        <TouchableOpacity>
                            <View style={styles.iconCirlebottom}>
                                <FontAwesome name="play" size={20} color="#2F3BAD" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer2}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, }}>
                        <TouchableOpacity>
                            <View style={[styles.iconCirle,{backgroundColor:'#34B549'}]}>
                                <FontAwesome name="bell" size={20} color="#ffffff" />
                            </View>
                        </TouchableOpacity>
                        <Text style={commonStylesheet.cardRegularText}>Tips on increasing your go forward, Click on bell icon for notifications</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }}>

                        <Text style={commonStylesheet.cardRegularText}>Tips on increasing your income</Text>
                        <TouchableOpacity>
                            <View style={[styles.iconCirlebottom,]}>
                                <FontAwesome name="play" size={20} color="#5EDBAE" />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const CARD_WIDTH = width * 0.8;
const CARD_SPACING = 5;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
       // paddingVertical: 20,
    },
    scrollContent: {
        paddingHorizontal: 16,
        gap: CARD_SPACING,
    },
    cardContainer1: {
        width: CARD_WIDTH,
        height: 'auto',
        backgroundColor: '#566DEF',
        borderRadius: 10,
    },
    cardContainer2: {
        width: CARD_WIDTH,
        height: 'auto',
        backgroundColor: '#5EDBAE',
        borderRadius: 10,
    },
    iconCirle: {
        width: 40,
        height: 40,
        backgroundColor: '#2F3BAD',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconCirlebottom: {
        width: 40,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});