import React from 'react'
import MernStack from '../components/MernSyllabus'
interface mernstack {
    coursename: string
    teacherName: string
    hours: number
    minutes: number
}
const page = () => {
    return (
        <div>

        <MernStack/>
        </div>
    )
}

export default page