import { SiteClient } from "datocms-client";

export default async function api(req, res) {
  if (req.method === "POST") {
    const client = new SiteClient(process.env.DATO_CMS_TOKEN);
    const comunidade = await client.items.create({
      itemType: "975356",
      ...req.body,
    });

    res.json(comunidade);
  } else {
    res.json({ error: "method not support yet" });
  }
}
