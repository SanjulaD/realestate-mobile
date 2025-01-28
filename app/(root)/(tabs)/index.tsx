import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import images from '@/constants/images'
import icons from '@/constants/icons'
import Search from '@/components/Search'

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className='px-5'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <View className='flex flex-row items-center'>
            <Image source={images.avatar} className='size-12 rounded-full' />
            <View className='flex flex-col items-start ml-2 justify-center'>
              <Text className='text-xs font-rubik text-black-100'>Good Morning!</Text>
              <Text className='text-base font-rubik-medium text-black-300'>Sanjula De Alwis</Text>
            </View>
          </View>
          <Image source={icons.bell} className='size-6' />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  )
}

export default Index
