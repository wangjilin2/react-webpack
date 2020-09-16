const menuList = [
  {
    title: "首页",
    key: "/main",
  },
  {
    title: "商品",
    key: "/products",
    children: [
      {
        title: "品类管理",
        key: "/category",
      },
      {
        title: "商品管理",
        key: "/product",
      },
    ],
  },
  {
    title: "用户管理",
    key: "/user",
  },
  {
    title: "角色管理",
    key: "/role",
  },
  {
      title:'图形图表',
      key:"charts",
      children:[
          {
              title:'bar图',
              key:'/charts/bar'
          },
          {
              title:'line图',
              key:"/charts/line"
          },
          {
              title:'pie图',
              key:"/charts/pie"
          }
      ]
  }
];
export default menuList;