import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import TabContainer from "./TabContainer";
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const jobs = await response.json()
      console.log(jobs)
      setJobs(jobs)
      setisLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(isLoading) {
    return (
      <main className="jobs-center">
        <div className="loading"></div>
        <h5 className="title">Loading your jobs</h5>
      </main>
    )
  }

  return (
    <main className="jobs-center">
      <TabContainer currentitem={currentItem} setCurrentItem={setCurrentItem} jobs={jobs}/>
      <JobInfo currentItem={currentItem} jobs={jobs}/>
    </main>
  )
};
export default App;
