import { Platform } from 'react-native';

export const taxes: number = 10;
export const shippingFees: number = 5;
export const IS_Android = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';