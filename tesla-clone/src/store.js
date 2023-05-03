import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import carReducer from './features/cars/carSlice'
const store = configureStore({
  reducer: {
    car: carReducer,
  },
})

export default store
