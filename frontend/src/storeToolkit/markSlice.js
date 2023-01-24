import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mark",
  phrase: [],
  hint: {},
  count: 0,
}

export const fetchPhrases = createAsyncThunk('Mark/fetchPhrases', async (id) => {
  const respone = await fetch(`http://localhost:4000/lines/${id}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    credentials: 'include',
  })

  const data = await respone.json();
  return data
})

export const markSlice = createSlice({
  name: "MarkSlice",
  initialState: initialState,

  reducers: {
    pullPhrase: (state, action) => {
      state.phrase = action.payload

    },
    deletePhrase: (state) => {
      state.count = 0
      state.phrase = []
    },
    countIncrement: (state) => {
      state.count += 1
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPhrases.fulfilled, (state, action) => {
      state.phrase.push(action.payload)
    })
  }
})

export const { pullPhrase, deletePhrase, countIncrement } = markSlice.actions
export default markSlice.reducer


