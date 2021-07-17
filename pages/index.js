import nookies from "nookies";
import jwt from "jsonwebtoken";
import MainGrid from "../src/components/MainGrid";
import { Box } from "../src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelations } from "../src/components/ProfileRelations";
import { ComunidadeRelations } from "../src/components/ComunidadeRelations";
import { ProfileSidebar } from "../src/components/ProfileSidebar";
import { ComunidadesForm } from "../src/components/ComunidadesForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
  const [seguidores, setSeguidores] = useState([]);
  const [comunidades, setComunidades] = useState([]);
  const meuUsuario = props.githubUser;

  const router = useRouter();

  const pessoasFavoritas = [
    { login: "juunegreiros" },
    { login: "omariosouto" },
    { login: "peas" },
    { login: "gabrielfroes" },
    { login: "diego3g" },
    { login: "filipedeschamps" },
  ];

  useEffect(() => {
    const carregarSeguidores = async () => {
      const res = await fetch(
        "https://api.github.com/users/robsongomes/followers"
      );
      const followers = await res.json();
      setSeguidores(followers);
    };

    const carregarComunidades = async () => {
      const res = await fetch("https://graphql.datocms.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "b34da21d594c15ab7011d09a8a799f",
        },
        body: JSON.stringify({
          query: `{
            allCommunities {
              id
              title
              imageurl
              creatorslug
            }
          }`,
        }),
      });
      const communities = await res.json();
      setComunidades(communities.data.allCommunities);
    };

    carregarSeguidores();
    carregarComunidades();
  }, []);

  const handleSubmit = async (comunidade) => {
    const res = await fetch("api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...comunidade, creatorslug: meuUsuario }),
    });
    const community = await res.json();
    setComunidades([...comunidades, community]);
  };

  const handleLogout = () => {
    if (confirm("Deseja fazer o logout?")) {
      nookies.destroy(null, "USER_TOKEN");
      router.push("/login");
    }
  };

  return (
    <>
      <AlurakutMenu onLogout={handleLogout} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={meuUsuario} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <ComunidadesForm onSubmit={handleSubmit} />
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelations title="Seguidores" pessoasFavoritas={seguidores} />
          <ComunidadeRelations comunidadesFavoritas={comunidades} />
          <ProfileRelations
            title="Pessoas da Comunidade"
            pessoasFavoritas={pessoasFavoritas}
          />
        </div>
      </MainGrid>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch(
    "https://alurakut.vercel.app/api/auth",
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((resposta) => resposta.json());

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser,
    }, // will be passed to the page component as props
  };
}
