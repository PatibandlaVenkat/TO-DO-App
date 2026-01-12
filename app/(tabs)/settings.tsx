import { View, Text, ScrollView } from 'react-native'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProgressStats from '@/components/ProgressStats';
import Preferences from '@/components/Preferences';
import Reset from '@/components/Reset';

const SettingsScreen = () => {


  const {colors, isDarkMode, toggleDarkMode} = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyle.container}>
      <SafeAreaView style={settingsStyle.safeArea}>
        <View style={settingsStyle.header}>
          <View style={settingsStyle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyle.iconContainer}>
              <Ionicons name="settings" size={28} color="#fff" />
            </LinearGradient>
            <Text style={settingsStyle.title}>Settings</Text>
          </View>
        </View>
        
        <ScrollView style={
          settingsStyle.scrollView}
         contentContainerStyle={settingsStyle.content}
         showsHorizontalScrollIndicator={false}
         >
          <ProgressStats />
          <Preferences />
          <Reset />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingsScreen