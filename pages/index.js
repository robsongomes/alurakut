import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelations } from "../src/components/ProfileRelations";
import { ProfileSidebar } from "../src/components/ProfileSidebar";

export default function Home() {
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
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelations pessoasFavoritas={pessoasFavoritas} />
        </div>
      </MainGrid>
    </>
  );
}
