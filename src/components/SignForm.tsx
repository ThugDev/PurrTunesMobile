import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SignInFormProps} from './type';
import {Controller} from 'react-hook-form';

const SignForm = ({onSubmit, errors, control, buttonText}: SignInFormProps) => {
  return (
    <View className="w-full flex justify-center items-center">
      <View className="w-full mt-4">
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="bg-white w-[200px] h-10 rounded px-2"
              placeholder="이메일을 입력해주세요"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-600 text-sm">{errors.email.message}</Text>
        )}
      </View>
      <View className="w-full mt-2">
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="bg-white w-[200px] h-10 rounded px-2"
              placeholder="비밀번호를 입력해주세요"
              autoCapitalize="none"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text className="text-red-600 text-sm">
            {errors.password.message}
          </Text>
        )}
      </View>
      <TouchableOpacity
        className="bg-white w-[200px] h-10 rounded-lg mt-6 flex justify-center items-center"
        onPress={() => onSubmit()}>
        <Text className="">{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignForm;
