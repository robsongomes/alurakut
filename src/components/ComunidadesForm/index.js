import { useState } from "react";
import { Box } from "../Box";

export function ComunidadesForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, imageurl: image });
    setTitle("");
    setImage("");
  };

  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="Coloque uma URL para usarmos de capa"
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>

        <button>Criar comunidade</button>
      </form>
    </Box>
  );
}
