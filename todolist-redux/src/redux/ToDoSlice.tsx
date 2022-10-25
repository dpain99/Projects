import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../redux/Store'

// useDispatch hook with types.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>()
// useSelector hook with types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface listJob {
  id: string
  isCompleted: boolean
  jobName: string
}
interface initialStateType {
  listRender: listJob[]
}

const listRender: listJob[] = [
]

const initialState: initialStateType = {
  listRender
}

export const ToDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<listJob>) => {
      state.listRender.push(action.payload)
    },
    delJob: (state, action: PayloadAction<{ id: string }>) => {
      state.listRender = state.listRender.filter((job) => job.id !== action.payload.id)
    }
  }
})

export const { addJob, delJob } = ToDoSlice.actions

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectBookList = (state: RootState) => state.job.listRender

export default ToDoSlice.reducer
