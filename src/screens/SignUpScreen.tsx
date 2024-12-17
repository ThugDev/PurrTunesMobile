import React from 'react';
import {Text, View} from 'react-native';
import SignForm from '../components/SignForm';
import {SignFormValues, SignUpNavigationProps} from './type';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signSchema} from '../schema/SignSchema';
import {postSignUp} from '../apis/signApi';

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignFormValues>({
    resolver: zodResolver(signSchema),
  });

  const onSubmit = async (data: SignFormValues) => {
    const response = await postSignUp(data);
    if (response) {
      navigation.navigate('SignInScreen');
    }
    console.log('signup response: ', response);
  };

  return (
    <View className="flex mt-20 items-center w-full h-screen">
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
