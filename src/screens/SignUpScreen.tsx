import React from 'react';
import {Text, View} from 'react-native';
import SignForm from '../components/SignForm';
import {SignFormValues, SignUpNavigationProps} from './type';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signSchema} from '../schema/SignSchema';

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignFormValues>({
    resolver: zodResolver(signSchema),
  });

  const onSubmit = (data: SignFormValues) => {
    console.log(data);
    navigation.navigate('SignInScreen');
  };

  return (
    <View className="flex justify-center items-center w-full h-screen">
      <View className="flex justify-center items-center">
        <Text className="text-2xl font-bold">PurrTunesMobile</Text>
        <SignForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          buttonText="가입하기"
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
