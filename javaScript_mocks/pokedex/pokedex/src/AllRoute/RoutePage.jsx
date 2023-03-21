import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favourite from '../component/Favourite'
import Pokemon from '../component/Pokemon'

import Type from '../component/Type'

const RoutePage = () => {
    return (
<Routes>
     <Route path='/pokemon' element={<Pokemon/>}/>
     <Route path='/types' element={<Type/>}></Route>
     <Route path='/favorites' element={<Favourite/>}></Route>
 </Routes>
    )
 
}

export default RoutePage;