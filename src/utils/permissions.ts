export function hasAdminPermissions(role: string) {
  return role.toLowerCase() === "administrador";
}

export function hasRegionalPermissions(role: string) {
  return hasAdminPermissions(role) || role.toLowerCase() === "regional";
}

export function hasComercialPermissions(role: string) {
  return hasRegionalPermissions(role) || role.toLowerCase() === "comercial";
}
