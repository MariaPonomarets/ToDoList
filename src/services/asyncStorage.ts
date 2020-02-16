import AsyncStorage from '@react-native-community/async-storage';

export async function getPersistedData<T>(key: string): Promise<T> {
  return JSON.parse(await AsyncStorage.getItem(`${key}`)) as T;
}

export async function setPersistedData(key: string, data: any) {
  await AsyncStorage.setItem(`${key}`, data ? JSON.stringify(data) : '');
}
