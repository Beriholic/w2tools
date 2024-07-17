import AsyncStorage from '@react-native-async-storage/async-storage';

interface CacheResult {
  data: string | undefined;
  ok: boolean;
}

export async function InsertData(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}
export async function GetData(key: string): Promise<CacheResult> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    const data = jsonValue != null ? JSON.parse(jsonValue) : undefined;
    if (data === undefined) {
      return {data: undefined, ok: false};
    }
    return {data: data, ok: true};
  } catch (e) {
    return {data: undefined, ok: false};
  }
}
export async function RemoveData(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return true;
  }
}

export async function MergeData(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return true;
  }
}
export async function CleanAllData(): Promise<boolean> {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    return true;
  }
}
