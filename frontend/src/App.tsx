import Theme from './component/theme'
import Language from './component/language'
import Portfolio from './pages/portfolio'
// import Signature from './pages/signature'

function App() {

  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="flex items-center justify-end gap-5
        bg-indigo-300 dark:bg-indigo-900 p-3">
          <Theme />
          <Language />
        </div>
        <div className="pb-5">
          <Portfolio />
        </div>
        <div className='bg-indigo-300 dark:bg-indigo-900 py-7'>
          {/* <Signature /> */}
        </div>
      </div>

    </>
  )
}

export default App
