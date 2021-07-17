import { RelationsBox } from "../RelationsBox";

export const ProfileRelations = ({ pessoasFavoritas, title }) => {
  return (
    <RelationsBox>
      <h2 className="smallTitle">
        {title} ({pessoasFavoritas.length})
      </h2>

      <ul>
        {pessoasFavoritas.slice(0, 6).map((itemAtual) => {
          return (
            <li key={itemAtual.login}>
              <a href={`https://api.github.com/users/${itemAtual.login}`}>
                <img src={`https://github.com/${itemAtual.login}.png`} />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </RelationsBox>
  );
};
