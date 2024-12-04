export const getVideoId = (id: string | {kind: string; videoId: string}) =>
  typeof id === 'string' ? id : id.videoId;
