import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apolo"
import { Router } from "./Router"

function App() {
  // Uma outra forma de realizar querys GraphQL
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => console.log(response.data));
  // }, []);

  // const { data } = useQuery<{ lessons: LessonType[] }>(GET_LESSONS_QUERY);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

// CMS = Content Management System
// Wordpress por exemplo traz tanto o painel de Admin quanto a parte visual
// do front-end (temas)

// Headless CMS (GraphCMS): Painel de Admin e os dados são fornecidos através
// de uma API REST ou GraphQL e um determinado front-end consome essa API

// No GraphQL existem dois tipos de operações principais: query e mutation
// query = buscar dados
// mutation = criar, alterar ou deletar dados

// Possibilidade de escolher o que a API vai retornar para o front,
// evitando over e under fecthing
