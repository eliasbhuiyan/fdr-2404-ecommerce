import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    userInfo: (state, actions) => {
      state.user = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userInfo  } = authSlice.actions

export default authSlice.reducer