export const routesInfo = [
  {
    rota: "/api/ent/list",
    método: "GET",
    descrição: "Retorna uma lista de empreendimentos.",
  },
  {
    rota: "/api/ent/:id",
    método: "GET",
    descrição: "Retorna os dados de um empreendimento específico.",
  },
  {
    rota: "/api/ent/new",
    método: "POST",
    descrição: "Cria um novo empreendimento.",
  },
  {
    rota: "/api/ent/:id",
    método: "PATCH",
    descrição: "Edita um empreendimento específico.",
  },
  {
    rota: "/api/ent/:id",
    método: "DELETE",
    descrição: "Remove um empreendimento específico.",
  },
];
