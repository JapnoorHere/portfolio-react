import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      <div>
        <div>
            {
              skills.map((skill,id)=>{
                return <div key="id">
                  <div>
                    {console.log(skill.image)}
                    <img src={require(skill.image)} alt="" />
                  </div>
                </div>

              })
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
