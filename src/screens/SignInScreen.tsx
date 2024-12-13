import React from 'react';
import {useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import {SignFormValues, SignInNavigationProps} from './type';
import {zodResolver} from '@hookform/resolvers/zod';
import {signSchema} from '../schema/SignSchema';
import {useNavigation} from '@react-navigation/native';
import SignForm from '../components/SignForm';

const SignInScreen = () => {
  const navigation = useNavigation<SignInNavigationProps>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignFormValues>({
    resolver: zodResolver(signSchema),
  });

  const onSubmit = (data: SignFormValues) => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View className="flex justify-center items-center w-full h-screen">
      <View className="flex justify-center items-center">
        <Text className="text-2xl font-bold">PurrTunesMobile</Text>
        <SignForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          buttonText="로그인"
        />
      </View>
      <TouchableOpacity className="mt-4" onPress={onSignUp}>
        <Text className="text-sm text-blue-500">회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
