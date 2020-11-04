const menuList = [
  {
    title: "首页",
    key: "/home/main",
  },
  {
    title: "UI",
    key: "/home/products",
    children: [
      {
        title: "品类管理",
        key: "/home/products/category",
      },
      {
        title: "商品管理",
        key: "/home/products/product",
      },
    ],
  },
  {
    title: "用户管理",
    key: "/home/user",
  },
  {
    title: "角色管理",
    key: "/home/role",
  },
  {
    title: "图形图表",
    key: "/home/charts",
    children: [
      {
        title: "bar图",
        key: "/home/charts/bar",
      },
      {
        title: "line图",
        key: "/home/charts/line",
      },
      {
        title: "pie图",
        key: "/home/charts/pie",
      },
    ],
  },
];
export default menuList;
