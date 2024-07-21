import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps{
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap
}

export function Button({ icon, title, isLoading = false, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity 
      disabled={isLoading} 
      activeOpacity={.8}
      style={styles.container}
      {...rest}
    >
      {
        isLoading
        ? <ActivityIndicator color={"#fff"}/>
        : <>
            <Ionicons name={icon} style={styles.icon}/>
            <Text style={styles.text}>{title}</Text>
          </>
      }
    </TouchableOpacity>
  )
}