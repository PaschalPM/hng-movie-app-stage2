import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import AppLayout from "./@layout"
import AllMovies from "./allMovies"
import SingleMovie from "./singleMovie"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout/>}>
            <Route index element={<AllMovies/>}/>
            <Route path="/movies/:id" element={<SingleMovie/>}/>
        </Route>
    )
)

export default router