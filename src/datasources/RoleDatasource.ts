import { DataSource } from "apollo-datasource";

export default class RoleDataSource extends DataSource {
  roles = [
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

  constructor() {
    super();
  }

  listRoles() {
    return this.roles;
  }

  getRole(id: string) {
    return this.roles.find((role) => role.id === id);
  }

  insertRole(data: { id: string; name: string; slug: string }) {
    this.roles.push(data);
    return data;
  }

  updateRole(id: string, data: { name: string; slug: string }) {
    const index = this.roles.findIndex((role) => role.id === id);
    Object.assign(this.roles[index], data);
    return this.roles[index];
  }

  deleteRole(id: string) {
    const index = this.roles.findIndex((role) => role.id === id);
    this.roles.splice(index, 1);
    return true;
  }
}
