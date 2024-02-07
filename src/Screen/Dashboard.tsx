import React from 'react'
import Layout from './Layout'
import Card from '../Components/Dashboard/Card'


export default function Dashboard() {
  return (
      <Layout>
            <div className='grid mb-6 mt-8  grid-cols-4 gap-6 px-10 ' style={{ width : '100%' }}>
              <Card title='Projects' color='blue' percent='04' />
              <Card title='Code Reviews' color='red' percent='10' />
              <Card  title='Notes' color='orange' percent='40'/>
              <Card title='links' color='green' percent='60' />
            </div>
      </Layout>
  )
}
