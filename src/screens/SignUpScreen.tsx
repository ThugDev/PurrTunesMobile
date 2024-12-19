import React from 'react';
import {Text, View} from 'react-native';
import SignForm from '../components/SignForm';
import {SignFormValues, SignUpNavigationProps} from './type';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signSchema} from '../schema/SignSchema';
import {postSignUp} from '../apis/signApi';
import {useMutation} from '@tanstack/react-query';
import {useAlert} from '../components/common/AlertProvider';

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpNavigationProps>();
  const {showAlert} = useAlert();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignFormValues>({
    resolver: zodResolver(signSchema),
  });

  const mutation = useMutation({
    mutationKey: ['postSignUp'],
    mutationFn: postSignUp,
    onSuccess: () => {
      navigation.navigate('SignInScreen');
    },
    onError: () => {
      showAlert('회원가입 중 오류가 발생했습니다.');
    },
  });

  const onSubmit = (data: SignFormValues) => {
    mutation.mutate(data);
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
