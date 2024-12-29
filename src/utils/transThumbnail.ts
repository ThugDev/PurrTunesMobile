export const transThumbnail = (
  thumbnail: {medium?: {url: string}; url?: string} | {url: string},
): string => {
  // url이 있는 경우 반환, medium?.url이 있는 경우 반환
  if ('url' in thumbnail && thumbnail.url) {
    return thumbnail.url;
  }
  if ('medium' in thumbnail && thumbnail.medium?.url) {
    return thumbnail.medium.url;
  }
  throw new Error('Invalid thumbnail format'); // 에러 처리
};
