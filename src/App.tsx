import { Outlet } from "react-router-dom"
import {FormProvider} from './contexts/FormContext'

const App = () => {
  return (
    <FormProvider>
      <Outlet />
    </FormProvider>
  )
}

export default App