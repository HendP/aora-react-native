import { TouchableOpacity, Text } from 'react-native'

const CustomeButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity 
            onPress={handlePress}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
            disabled={isLoading}
        >
            <Text 
            className={`text-primary font-semibold text-lg ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomeButton