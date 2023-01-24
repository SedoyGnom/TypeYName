import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "User",
  session: undefined,
  status: '',
  loading: false,
}

export const fetchSession = createAsyncThunk('User/sessionSlice', async () => {
  const respone = await fetch('http://localhost:4000/session/', {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
    credentials: 'include',
  })

  const data = await respone.json();
  return data
})

export const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState: initialState, 

  reducers: {
    sessionAdd: (state, action) => {
      state.session.user = action.payload
      // state.user = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.session = action.payload
      state.loading = false
    });
    builder.addCase(fetchSession.pending, (state) => {
      state.status = 'pending'
      state.loading = true
    })
  }
})

export const { sessionAdd } = sessionSlice.actions
export default sessionSlice.reducer
