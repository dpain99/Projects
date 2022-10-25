/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useAppSelector } from '../redux/ToDoSlice'
import ListInf from '../components/ListInf'

const JobList = () => {
  const JobList = useAppSelector((state) => state.job.listRender)

  return (
    <div>
        <h1>JobList</h1>
        <button>ADD</button>
        <ul>
            <li>
            {JobList.map((job) => (
              <ListInf key={job.id} isCompleted={job.isCompleted} jobName={job.jobName} id={''} />
            ))}
            </li>
        </ul>
    </div>
  )
}
export default JobList
