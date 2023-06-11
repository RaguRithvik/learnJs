const menu = [
  {
      "parent-key": "0",
      "child-key": "1",
      "menu-name": "root",
      "url-link": null,
      "menu-child": [
          {
              "parent-key": "1",
              "child-key": "2",
              "menu-name": "Dashboard",
              "url-link": "/dashboard/",
              "menu-child": []
          },
          {
              "parent-key": "1",
              "child-key": "3",
              "menu-name": "Master",
              "url-link": null,
              "menu-child": [
                  {
                      "parent-key": "3",
                      "child-key": "4",
                      "menu-name": "Near Places Type",
                      "url-link": "/dashboard/HotelSetup/NearPlaceType/",
                      "menu-child": []
                  },
                  {
                      "parent-key": "3",
                      "child-key": "5",
                      "menu-name": "Near Places",
                      "url-link": "/dashboard/HotelSetup/NearPlace/",
                      "menu-child": []
                  },
                  {
                      "parent-key": "3",
                      "child-key": "31",
                      "menu-name": "API Configuration",
                      "url-link": "/dashboard/ClientForm/ClientForm",
                      "menu-child": []
                  }
              ]
          },
              ]
          }
      ]
const url = "/dashboard/"
const urls = "/dashboard/HotelSetup/NearPlaceType/"

const getsidebar = menu.map(getmenu =>(getmenu["menu-child"].map(ndata => ndata['url-link'] == url ? ndata['menu-name']: '')))

// console.log(getsidebar)

// console.log(menu.map(getmenu =>(getmenu["menu-child"].map(ndata => ndata['menu-child'].map(indata => indata['url-link'] == urls ? indata['menu-name']: '')))))

var op = getsidebar.map((f => f.filter(v => v != "")))

// console.log(op)

for (let b in op) {
    console.log(op[b])
    for (let cd in op[b]) {
      if (op[b][cd].length > 0) {
        var getcon = op[b][cd]
        // console.log(getcon)
      }
    }
  }

