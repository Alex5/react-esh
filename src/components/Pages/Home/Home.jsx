import {useEffect, useRef, useState} from 'react'
import {NavLink, Route, useLocation} from "react-router-dom";
import {searchAPI} from "../../../api/Api";

import {Content, ContentBody, ContentTitle, HomeWrapper, SideBar, StyledMain} from "./HomeStyle";
import Loader from "../../../services/Loader";
import {ContentItem} from "../index";
import {GlobalStyle} from "../../../AppStyle";

import compilationsData from './compilations-data.json'

const Home = () => {
    const [newRecipes, setNewRecipes] = useState([]);
    const [title, setTitle] = useState('');
    const [compilationIngredients, setCompilationIngredients] = useState([]);
    const [recipesLoad, setRecLoad] = useState(false);
    const location = useLocation()
    let contentItemHeight = useRef()
    console.log(contentItemHeight.current)

    useEffect(() => {
        setRecLoad(true);
        getCompilation(location.pathname)
        searchAPI
            .getRecipes(compilationIngredients)
            .then(({data}) => {
                setNewRecipes(data.items)
                setRecLoad(false);
            })
            .catch((ERR) => {
                if (ERR.response.status === 500) {
                    setRecLoad(false);
                }
            });
    }, [compilationIngredients])

    const getCompilation = (path) => {
        compilationsData.compilations.forEach((item) => {
            if (path === item.path) {
                setCompilationIngredients(item.ingredients)
                setTitle(item.name)
            }
        })
    }

    return (
        <StyledMain>
            <GlobalStyle scrollHide/>
            <SideBar>
                <ul>
                    {compilationsData.menus.map(link =>
                        <li key={link.id}>
                            <NavLink activeClassName={"active"}
                                     exact
                                     to={`${link.path}`}
                                     onClick={() => getCompilation(link.path)}>{link.name}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </SideBar>
            <HomeWrapper>
                <Content>
                    <Route path={location.pathname}>
                        <ContentTitle>{title}</ContentTitle>
                        <ContentBody>
                            {recipesLoad ? <Loader/> : newRecipes.map(item =>
                                <ContentItem key={item.id} {...item}/>
                            )}
                        </ContentBody>
                    </Route>
                </Content>
            </HomeWrapper>
        </StyledMain>

    )
}

export default Home