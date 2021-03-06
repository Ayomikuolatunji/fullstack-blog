import React from 'react'
import Header from '../components/header/Header'

interface props{
    children: React.ReactNode
}

const HeaderWraper:React.FC<props> = ({children}) => {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default HeaderWraper