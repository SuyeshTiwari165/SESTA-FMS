const roles = {
  "FPO Admin": {
    content: {
      description: "FPO admin user"
    },
    controllers: [
      {
        name: "user",
        action: ["update"]
      },
      {
        name: "module",
        action: ["find", "count", "findone", "create", "update", "delete"]
      },
      {
        name: "village",
        action: ["find", "count", "findone", "create", "update", "delete"]
      },
      {
        name: "shg",
        action: ["find", "count", "findone", "create", "update", "delete"]
      }
    ],
    grantAllPermissions: false
  },
  "Sesta Admin": {
    content: {
      description: "Sesta admin user"
    },
    controllers: [
      {
        name: "user",
        action: ["update"]
      },
      {
        name: "module",
        action: ["find", "count", "findone", "create", "update", "delete"]
      },
      {
        name: "village",
        action: ["find", "count", "findone", "create", "update", "delete"]
      },
      {
        name: "shg",
        action: ["find", "count", "findone", "create", "update", "delete"]
      }
    ],
    grantAllPermissions: false
  },
  "CSP (Community Service Provider)": {
    content: {
      description: "Community service provider user"
    },
    controllers: [
      {
        name: "user",
        action: ["update"]
      },
      {
        name: "module",
        action: []
      },
      {
        name: "village",
        action: []
      },
      {
        name: "shg",
        action: []
      }
    ],
    grantAllPermissions: false
  },
  Superadmin: {
    content: {
      description: "Superadmin user"
    },
    controllers: [
      {
        name: "user",
        action: ["update"]
      },
      {
        name: "module",
        action: ["find", "count", "findone", "create", "update", "delete"]
      },
      {
        name: "village",
        action: ["find", "count", "findone", "create", "update", "delete"]
      },
      {
        name: "shg",
        action: ["find", "count", "findone", "create", "update", "delete"]
      }
    ],
    grantAllPermissions: false
  }
};

const modules = {
  Dashboard: {
    is_active: true,
    icon_class: "dashboard",
    url: "/",
    slug: "home",
    displayNavigation: true,
    module: "", //slug
    roles: [
      "FPO Admin",
      "Sesta Admin",
      "CSP (Community Service Provider)",
      "Superadmin"
    ]
  },
  Villages: {
    is_active: true,
    icon_class: "people",
    url: "/villages",
    slug: "list_village",
    displayNavigation: true,
    module: "", //slug
    roles: ["FPO Admin", "Sesta Admin", "Superadmin"]
  },
  "Add Village": {
    is_active: true,
    icon_class: "",
    url: "/villages/add",
    slug: "add_village",
    displayNavigation: false,
    module: "", //slug
    roles: ["FPO Admin", "Sesta Admin", "Superadmin"]
  },
  "Edit Village": {
    is_active: true,
    icon_class: "",
    url: "/villages/edit/:id",
    slug: "edit_village",
    displayNavigation: false,
    module: "", //slug
    roles: ["FPO Admin", "Sesta Admin", "Superadmin"]
  },
  SHGs: {
    is_active: true,
    icon_class: "people",
    url: "/shgs",
    slug: "list_shg",
    displayNavigation: true,
    module: "", //slug
    roles: ["FPO Admin", "Sesta Admin", "Superadmin"]
  }
};

module.exports = Object.freeze({
  roles,
  modules
});