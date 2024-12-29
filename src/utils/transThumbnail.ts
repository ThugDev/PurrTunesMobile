export const transThumbnail = (
  thumbnail: {medium?: {url: string}; url?: string} | {url: string},
): string => {
  if ('url' in thumbnail && thumbnail.url) {
    return thumbnail.url;
  }
  if ('medium' in thumbnail && thumbnail.medium?.url) {
    return thumbnail.medium.url;
  }
  throw new Error('Invalid thumbnail format');
};
