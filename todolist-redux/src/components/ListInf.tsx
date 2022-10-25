/* eslint-disable react/react-in-jsx-scope */
import { useAppDispatch, delJob } from '../redux/ToDoSlice'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ListInf = ({
  id,
  isCompleted,
  jobName,
  ...rest
}: {
  id: string
  isCompleted: boolean | undefined
  jobName: string
}) => {
  const dispatch = useAppDispatch()

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
        <div>
            <h1>{jobName}</h1>
        </div>
        <div>
            <button
                onClick={() => dispatch(delJob({ id }))}
            />
        </div>
    </div>
  )
}

export default ListInf
