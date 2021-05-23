import {useEffect, useState} from 'react'
import {NavLink, Route, useLocation, useParams} from "react-router-dom";
import {searchAPI} from "../../../api/Api";

import {Content, ContentBody, ContentTitle, HomeWrapper, SideBar, StyledMain} from "./HomeStyle";
import Loader from "../../../services/Loader";
import {ContentItem} from "../index";
import {GlobalStyle} from "../../../AppStyle";

const Home = () => {
    const [newRecipes, setNewRecipes] = useState([]);
    const [compilationNames, setCompilationNames] = useState([]);
    const [recipesLoad, setRecLoad] = useState(false);
    const location = useLocation()

    useEffect(() => {
        setRecLoad(true);
        getNewRecipes(0)
        searchAPI.getActualLabels('-180').then(({data}) => {
            setCompilationNames(data)
        })
    }, [])

    const getNewRecipes = (linkId) => {
        searchAPI.getActual('-180', linkId).then((res) => {
            setNewRecipes(res.data)
            setRecLoad(false)
        })
    }

    return (
        <StyledMain>
            <GlobalStyle scrollHide/>
            <SideBar>
                <ul>
                    <li>
                        <NavLink activeClassName={"active"} exact to={`/`}>
                            Лента
                        </NavLink>
                    </li>
                    {compilationNames.map(link =>
                        <li onClick={() => getNewRecipes(link.id)} key={link.id}>
                            <NavLink activeClassName={"active"} to={`/actual/${link.id}`}>
                                {link.label}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </SideBar>
            <HomeWrapper>
                <Content>
                    <Route path={[`/actual`, `/`]}>
                        {/*<ContentTitle>{location.pathname.replace('/','')}</ContentTitle>*/}
                        <ContentBody>
                            {recipesLoad ? <Loader/> : newRecipes[0]?.items.map(item =>
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