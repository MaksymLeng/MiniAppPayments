import {Routes, Route} from "react-router-dom";
import {Pages} from '../Pages/pages'

const App = () => {
    return (
        <div className= "h-full">
            <Routes>

                    {Pages.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
            </Routes>
        </div>
    )
}

export default App;