const TabContainer = ({jobs, currentitem, setCurrentItem}) => {
  return (
    <section className="btn-container">
        {jobs.map((tab, index) => {
            return (
                <button onClick={() => setCurrentItem(index)} key={tab.id} className={currentitem === index ? "job-btn active-btn" : "job-btn" }>
                    {tab.company}
                </button>
            )
        })}

    </section>
  )
}
export default TabContainer