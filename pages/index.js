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
import { useState } from "react";

export default function Home() {
  const [comunidades, setComunidades] = useState([
    {
      id: new Date().toISOString(),
      title: "Queria sorvete mas era feijão",
      image:
        "https://pimentamarinha.files.wordpress.com/2013/03/sorvete_feijao.jpg",
    },
  ]);
  const meuUsuario = "robsongomes";
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "gabrielfroes",
    "diego3g",
    "filipedeschamps",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={meuUsuario} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <ComunidadesForm
            onSubmit={(c) => setComunidades([...comunidades, c])}
          />
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ComunidadeRelations comunidadesFavoritas={comunidades} />
          <ProfileRelations pessoasFavoritas={pessoasFavoritas} />
        </div>
      </MainGrid>
    </>
  );
}
