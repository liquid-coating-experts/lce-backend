export default async function () {
  const imports = (await import(
    "@medusajs/medusa/dist/api/routes/admin/products/index"
  )) as any;
  imports.allowedAdminProductFields = [
    ...imports.defaultAdminProductFields,
    "specifications",
  ];
  imports.defaultAdminProductFields = [
    ...imports.defaultAdminProductFields,
    "specifications",
  ];
}
