import { Asset } from 'expo-asset';

export default async () => {
  const images = [require('../../assets/favicon.png')];

  const cacheImages = images.map((image: string) => {
    return Asset.fromModule(image).downloadAsync();
  });

  await Promise.all(cacheImages);
};
