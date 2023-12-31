import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/services/redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch as () => AppDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
