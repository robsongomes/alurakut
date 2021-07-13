import { RelationsBox } from "../RelationsBox";

export const ComunidadeRelations = ({ comunidadesFavoritas }) => {
  return (
    <RelationsBox>
      <h2 className="smallTitle">
        Comunidades ({comunidadesFavoritas.length})
      </h2>

      <ul>
        {comunidadesFavoritas.slice(0, 6).map((comunidade) => {
          return (
            <li key={comunidade.id}>
              <a href={`/users/${comunidade.title}`}>
                <img src={comunidade.image} />
                <span>{comunidade.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </RelationsBox>
  );
};
