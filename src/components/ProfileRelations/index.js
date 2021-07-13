import { RelationsBox } from "../RelationsBox";

export const ProfileRelations = ({ pessoasFavoritas }) => {
  return (
    <RelationsBox>
      <h2 className="smallTitle">
        Pessoas da comunidade ({pessoasFavoritas.length})
      </h2>

      <ul>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
                <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </RelationsBox>
  );
};
