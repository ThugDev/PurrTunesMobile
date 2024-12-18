import React from 'react';
import {useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import {SignFormValues, SignInNavigationProps} from './type';
import {zodResolver} from '@hookform/resolvers/zod';
import {signSchema} from '../schema/SignSchema';
import {useNavigation} from '@react-navigation/native';
import SignForm from '../components/SignForm';
import {postSignIn} from '../apis/signApi';
import {useMutation} from '@tanstack/react-query';
import {useAlert} from '../components/common/AlertProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
  const navigation = useNavigation<SignInNavigationProps>();
  const {showAlert} = useAlert();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignFormValues>({
    resolver: zodResolver(signSchema),
  });

  const mutation = useMutation({
    mutationKey: ['postSignIn'],
    mutationFn: postSignIn,
    onSuccess: async data => {
      if (data.data.jwtToken) {
        await AsyncStorage.setItem('authToken', data.data.jwtToken);
        navigation.navigate('Home');
      }
    },
    onError: () => {
      showAlert('로그인 중 오류가 발생했습니다.');
    },
  });

  const onSubmit = (data: SignFormValues) => {
    mutation.mutate(data);
  };

  const onNavigate = ({url}: {url: 'Home' | 'SignUpScreen'}) => {
    navigation.navigate(url);
  };

  return (
    <View className="flex mt-20 items-center w-full h-screen">
      <View className="flex justify-center items-center">
        <Text className="text-2xl font-bold">PurrTunesMobile</Text>
        <SignForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          buttonText="로그인"
        />
      </View>
      <TouchableOpacity
        className="mt-4"
        onPress={() => onNavigate({url: 'SignUpScreen'})}>
        <Text className="text-sm text-blue-500">회원가입</Text>
      </TouchableOpacity>
      <View className="mt-4">
        <TouchableOpacity onPress={() => onNavigate({url: 'Home'})}>
          <Text className="text-gray-600">로그인하지 않고 듣기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
