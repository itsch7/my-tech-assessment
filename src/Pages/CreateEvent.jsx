import React from 'react'

const CreateEvent = () => {
  return (
    <div className='formContainer'>
        <div className="wrapper">
             <form >
                <input type="text" placeholder=' Event Name'  />
                <input type="text" placeholder='Host Name' />
                <input type="date" placeholder='Start Date' id='startDate' />
                <input type="date" placeholder='End Date' id='endDate' />

                <input  type="file"  id='file'/>
                <label htmlFor="file">
                
                </label>
                <button>Create Event</button>
            </form>
            

        </div>
    </div>

  )
}

export default CreateEvent
