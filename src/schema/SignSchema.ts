import {z} from 'zod';

export const signSchema = z.object({
  email: z
    .string()
    .email('유효한 이메일을 입력해주세요')
    .nonempty('이메일은 필수입니다.'),
  password: z
    .string()
    .min(6, '비밀번호는 최소 6자 이상이여야 합니다')
    .nonempty('비밀번호는 필수입니다.'),
});
