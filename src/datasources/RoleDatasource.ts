import { DataSource } from "apollo-datasource";

const roles = [
  {
    id: "123",
    name: "Administrador",
    slug: "administrador",
  },
  {
    id: "124",
    name: "Regional",
    slug: "regional",
  },
  {
    id: "125",
    name: "Comercial",
    slug: "comercial",
  },
  {
    id: "126",
    name: "Trabalhador",
    slug: "trabalhador",
  },
];

export default class RoleDataSource extends DataSource {
  constructor() {
    super();
  }

  listRoles() {
    return roles;
  }

  getRole(id: string) {
    return roles.find((role) => role.id === id);
  }

  insertRole(data: { id: string; name: string; slug: string }) {
    roles.push(data);
    return data;
  }

  updateRole(id: string, data: { name: string; slug: string }) {
    const index = roles.findIndex((role) => role.id === id);
    Object.assign(roles[index], data);
    return roles[index];
  }

  deleteRole(id: string) {
    const index = roles.findIndex((role) => role.id === id);
    roles.splice(index, 1);
    return true;
  }
}
