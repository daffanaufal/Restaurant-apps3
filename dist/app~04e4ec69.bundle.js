(()=>{"use strict";var n,t={756:(n,t,A)=>{A.d(t,{Z:()=>a});var i=A(537),e=A.n(i),C=A(645),r=A.n(C)()(e());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]),r.push([n.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Quicksand', sans-serif\n}\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%\n}\nbody {\n\tfont-size: 12px;\n\tcolor: #424242\n}\n.mobilemenu {\n\tbackground-color: rgb(48, 71, 94);\n\tcolor: white !important;\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-weight: 600;\n\tfont-size: 20px;\n\tpadding: 10px;\n\tjustify-content: space-between\n}\n.navmobile {\n\tbackground-color: rgb(48, 71, 94);\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-weight: 600;\n\tfont-size: 14px;\n\ttext-transform: uppercase\n}\n.navlistmobile {\n\twidth: 60%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left\n}\n.navitemsmobile {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\ttext-align: right;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: white !important\n}\n.iconmenu a {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tmin-width: 44px;\n\tmin-height: 44px;\n\tpadding: 0;\n\tmargin: 0;\n\tcolor: white !important\n}\n.navmobile a {\n\tdisplay: inline-block;\n\tpadding: 0.3em;\n\tmin-width: 44px;\n\tmin-height: 44px;\n\ttext-decoration: none\n}\n.nav {\n\tbackground-color: rgb(48, 71, 94);\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-weight: 600;\n\tfont-size: 14px;\n\ttext-transform: uppercase\n}\n.navlist {\n\twidth: 80%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: right\n}\n.logo {\n\tmin-height:46px;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left;\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n}\n.navitems {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\ttext-align: right;\n\tline-height: 24px;\n\ttext-transform: uppercase\n}\n.nav a {\n\tdisplay: inline-block;\n\tpadding: 1.3em;\n\ttext-decoration: none;\n\tcolor: white !important\n}\n.nav a:hover {\n\ttext-decoration: none\n}\n.hero {\n\tdisplay: flex;\n\talign-items: center;\n\tmin-height: 250px;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground-position: center;\n\tbackground-color: Black !important\n}\n.inner-hero {\n\tmargin: 0 auto;\n\tmax-width: 800px\n}\n.judul-hero {\n\tcolor: #fff;\n\tfont-weight: 600;\n\tfont-size: 36px;\n\ttext-shadow: 1px 1px #141414\n}\n.subjudul-hero {\n\tcolor: #fff;\n\tmargin-top: 16px;\n\tfont-size: 17px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #141414\n}\nmain {\n\twidth: 100%;\n\tmargin: 0 auto\n}\n.content {\n\tpadding: 32px\n}\n.main-title{\n\tpadding: 20px;\n\ttext-align: center; \n}\n.list {\n\tdisplay: grid;\n  \tgrid-template-columns: 1fr;\n \tmargin: 20px;\n  \tjustify-items: center;\n}\n.list_item {\n\tdisplay: grid;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tmax-width: 400px;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tposition: relative\n}\n.Kota {\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 20px;\n\tborder-radius: 5px;\n\tbackground-color: #ff5722\n  ;\n\tpadding: 5px 10px 5px;\n\tcolor: #fff;\n\tfont-weight: 400\n}\n.list_content {\n\tpadding: 12px\n}\n.list_thumbnail {\n\twidth: 100%;\n\tmax-height: 234px\n}\n.list_item_title {\n\tmargin-top: 5px;\n\ttransition: 0.5s opacity\n}\n.list_item_rating {\n\tmargin-top: 5px;\n\ttransition: 0.5s opacity\n}\n.list_item_title:hover {\n\tcolor: blue;\n}\n.list_item_title a {\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: inherit;\n\tmin-width: 44px;\n\tmin-height: 44px;\n}\n.list_item_title h1 {\n\tmin-width: 44px;\n\tmin-height: 44px;\t\n}\n.list_item_desc {\n\tmargin-top: -30px;\n\tfont-size: 12px;\n\tline-height: 1.5em\n}\n.restaurant-detail {\n\tdisplay: grid;\n\tmargin: 50px 120px;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n.restaurant-thumbnail {\n\tgrid-column-start: 1;\n\tgrid-column-end: 4;\n  }\n  \n.restaurant__name {\n\tmargin-bottom: 20px;\n}\n  \n.restaurant__description{\n\tmargin-top: 20px;\n\tgrid-column-start: 1;\n\tgrid-column-end: 7;\n}\n  \n.restaurant__description > h3{\n\tmargin-bottom: 10px;\n}\n  \n.customer-review {\n\tgrid-column-start: 1;\n\tgrid-column-end: 7;\n\ttext-align: center;\n\tpadding: 20px 0;\n}\n\n.review {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n}\n  \n.review-detail {\n\tmargin: 10px 20px;\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tgrid-column: span 2;\n}\n  \n.review-main {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 7fr;\n\tmargin-bottom: 15px;\n}\n  \n.review-main > i {\n\tdisplay: grid;\n\tgrid-row-start: 1;\n\tgrid-row-end: 3;\n}\n  \n.review-main > p {\n\tgrid-column-start: 2;\n\tgrid-column-end: 3;\n}\n  \n.restaurant__info {\n\tmargin-left: 20px;\n\tgrid-column-start: 4;\n\tgrid-column-end: 7;\n}\n  \n.restaurant__info > p {\n\tmargin-top: 10px;\n}\n  \n.restaurant__info > h3 {\n\tmargin-top: 10px;\n}\n  \n.restaurant__poster {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tobject-fit: cover;\n}\n.like {\n\twidth: 55px;\n\theight: 55px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #db0000;\n\t\n\tposition: fixed;\n\tbottom: 16px;\n\tright: 16px;\n\tborder-radius: 50%;\n\tborder: 0;\n\t\n\tfont-size: 18px;\n\tcolor: white;\n\tcursor: pointer; \n}\n#loading {\n\twidth: 2rem;\n\theight: 2rem;\n\tborder: 5px solid #f3f3f3;\n\tborder-top: 6px solid #9c41f2;\n\tborder-radius: 100%;\n\tmargin: auto;\n\tdisplay: none;\n\tanimation: spin 1s infinite linear;\n\tgrid-column: span 6;\n\tmargin: 100px;\n  }\n  #loading.display {\n\tdisplay: block;\n  }\n  .kosong-favorite{\n\tgrid-column-start: 1;\n\tgrid-column-end: 4;\n\ttext-align: center;\n  }\nfooter{\n\tbackground-color: rgb(48, 71, 94);\n\tcolor: white;\n\tfont-size: 14px;\n\tpadding: 2em;\n\twidth: 100%;\n\ttext-align: center;\n}\n  \nfooter > p {\n\tmargin: 16px;\n}\n.skip-link {\n  position: absolute;\n  top: -100px;\n  right: 0;\n  background-color: #464545;\n  color: white;\n  padding: 10px;\n  font-size: 20px;\n  z-index: 100;\n  text-decoration: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.skip-link:focus {\n\ttop: 100px\n}\n\n@media screen and (min-width: 500px) {\n\t.mobilemenu {\n\t\tdisplay: none\n\t}\n\t.navmobile {\n\t\tdisplay: none\n\t}\n}\n@media screen and (max-width: 499px) {\n\t.nav {\n\t\tdisplay: none\n\t}\n\t.navmobile {\n\t\tz-index: 10;\n\t\tbackground-color: rgb(252, 252, 252);\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\t-webkit-transform: translate(-100%, 0);\n\t\ttransform: translate(-100%, 0);\n\t\ttransition: transform 0.3s ease\n\t}\n\t.open {\n\t\t-webkit-transform: translate(0, 0);\n\t\ttransform: translate(0, 0)\n\t}\n\t.navitemsmobile {\n\t\tdisplay: list-item;\n\t\tcolor: black !important;\n\t\twidth: 100%;\n\t\ttext-align: left\n\t}\n}\n@media screen and (min-width: 650px) {\n\t.list_content {\n\t\tpadding: 16px 32px 32px 32px\n\t}\n\t.list_item_title {\n\t\tfont-size: 18px\n\t}\n\t.list_item_desc {\n\t\tfont-size: 14px\n\t}\n}\n@media screen and (min-width: 700px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-column-gap: 10px;\n\t\tgrid-row-gap: 16px\n\t}\n}\n@media screen and (min-width: 900px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr\n\t}\n}\n@media screen and (min-width: 1200px) {\n\tmain {\n\t\tmax-width: 1200px\n\t}\n}\n@media screen and (max-width: 1500px) {\n\t.review-main {\n\t  grid-template-columns: 1fr 5fr;\n\t}\n  }\n  \n  @media screen and (max-width: 1300px) {\n\t.review-main {\n\t  grid-template-columns: 1fr 4fr;\n\t}\n  }\n  \n  @media screen and (max-width: 1200px) {\n\t.review-main {\n\t  grid-template-columns: 3fr 8fr;\n\t}\n  }\n  \n  @media screen and (max-width: 1050px) {\n\t.restaurant-detail {\n\t  margin-left: 20px;\n\t  margin-right: 20px;\n\t}\n\t.review-detail {\n\t  margin: 0 5px;\n\t}\n  }\n  \n  @media screen and (max-width: 850px) {\n\t.review-detail {\n\t  grid-column: span 3;\n\t}\n\t.review-main {\n\t  grid-template-columns: 1fr 5fr;\n\t}\n  }\n  \n  @media screen and (max-width: 700px) {\n\t.restaurant-detail {\n\t  margin-left: 50px;\n\t  margin-right: 50px;\n\t}\n\t.restaurant-thumbnail{\n\t  grid-column: span 6;\n\t}\n\t.restaurant__info{\n\t  grid-column: span 6;\n\t  margin-left: 0;\n\t  margin-top: 20px;\n\t}\n\t.review-main{\n\t  grid-template-columns: 1fr 7fr;\n\t}\n\t.review-detail {\n\t  grid-column: span 6;\n\t  margin: 10px 100px;\n\t}\n\t.review-main {\n\t  grid-template-columns: 1fr 5fr;\n\t}\n  }\n  \n  @media screen and (max-width: 650px) {\n\t.review-detail {\n\t  margin: 10px 70px;\n\t}\n  }\n  \n  @media screen and (max-width: 600px) {\n\t.review-detail {\n\t  margin: 10px 50px;\n\t}\n\t.review-main {\n\t  grid-template-columns: 2fr 8fr;\n\t}\n  }\n  \n  @media screen and (max-width: 500px) {\n\t.review-detail {\n\t  margin: 10px 20px;\n\t}\n  }","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AACA;CACC,UAAU;CACV,SAAS;CACT,sBAAsB;CACtB;AACD;AACA;;CAEC,SAAS;CACT,UAAU;CACV,WAAW;CACX;AACD;AACA;CACC,eAAe;CACf;AACD;AACA;CACC,iCAAiC;CACjC,uBAAuB;CACvB,WAAW;CACX,aAAa;CACb,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb;AACD;AACA;CACC,iCAAiC;CACjC,WAAW;CACX,aAAa;CACb,gBAAgB;CAChB,eAAe;CACf;AACD;AACA;CACC,UAAU;CACV,UAAU;CACV,SAAS;CACT;AACD;AACA;CACC,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;CACjB,iBAAiB;CACjB,yBAAyB;CACzB;AACD;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,qBAAqB;CACrB,eAAe;CACf,gBAAgB;CAChB,UAAU;CACV,SAAS;CACT;AACD;AACA;CACC,qBAAqB;CACrB,cAAc;CACd,eAAe;CACf,gBAAgB;CAChB;AACD;AACA;CACC,iCAAiC;CACjC,WAAW;CACX,aAAa;CACb,gBAAgB;CAChB,eAAe;CACf;AACD;AACA;CACC,UAAU;CACV,UAAU;CACV,SAAS;CACT;AACD;AACA;CACC,eAAe;CACf,UAAU;CACV,SAAS;CACT,gBAAgB;CAChB,sBAAsB;CACtB,qBAAqB;AACtB;AACA;CACC,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;CACjB,iBAAiB;CACjB;AACD;AACA;CACC,qBAAqB;CACrB,cAAc;CACd,qBAAqB;CACrB;AACD;AACA;CACC;AACD;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,WAAW;CACX,kBAAkB;CAClB,2BAA2B;CAC3B;AACD;AACA;CACC,cAAc;CACd;AACD;AACA;CACC,WAAW;CACX,gBAAgB;CAChB,eAAe;CACf;AACD;AACA;CACC,WAAW;CACX,gBAAgB;CAChB,eAAe;CACf,gBAAgB;CAChB;AACD;AACA;CACC,WAAW;CACX;AACD;AACA;CACC;AACD;AACA;CACC,aAAa;CACb,kBAAkB;AACnB;AACA;CACC,aAAa;GACX,0BAA0B;EAC3B,YAAY;GACX,qBAAqB;AACxB;AACA;CACC,aAAa;CACb,0CAA0C;CAC1C,gBAAgB;CAChB,kBAAkB;CAClB,gBAAgB;CAChB;AACD;AACA;CACC,kBAAkB;CAClB,QAAQ;CACR,UAAU;CACV,kBAAkB;CAClB;EACC;CACD,qBAAqB;CACrB,WAAW;CACX;AACD;AACA;CACC;AACD;AACA;CACC,WAAW;CACX;AACD;AACA;CACC,eAAe;CACf;AACD;AACA;CACC,eAAe;CACf;AACD;AACA;CACC,WAAW;AACZ;AACA;CACC,qBAAqB;CACrB,qBAAqB;CACrB,cAAc;CACd,eAAe;CACf,gBAAgB;AACjB;AACA;CACC,eAAe;CACf,gBAAgB;AACjB;AACA;CACC,iBAAiB;CACjB,eAAe;CACf;AACD;AACA;CACC,aAAa;CACb,kBAAkB;CAClB,8CAA8C;AAC/C;AACA;CACC,oBAAoB;CACpB,kBAAkB;EACjB;;AAEF;CACC,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,oBAAoB;CACpB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,oBAAoB;CACpB,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,kCAAkC;AACnC;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,0CAA0C;CAC1C,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,iBAAiB;CACjB,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;CACjB,oBAAoB;CACpB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,0CAA0C;CAC1C,iBAAiB;AAClB;AACA;CACC,WAAW;CACX,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,yBAAyB;;CAEzB,eAAe;CACf,YAAY;CACZ,WAAW;CACX,kBAAkB;CAClB,SAAS;;CAET,eAAe;CACf,YAAY;CACZ,eAAe;AAChB;AACA;CACC,WAAW;CACX,YAAY;CACZ,yBAAyB;CACzB,6BAA6B;CAC7B,mBAAmB;CACnB,YAAY;CACZ,aAAa;CACb,kCAAkC;CAClC,mBAAmB;CACnB,aAAa;EACZ;EACA;CACD,cAAc;EACb;EACA;CACD,oBAAoB;CACpB,kBAAkB;CAClB,kBAAkB;EACjB;AACF;CACC,iCAAiC;CACjC,YAAY;CACZ,eAAe;CACf,YAAY;CACZ,WAAW;CACX,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;EACZ,qBAAqB;EACrB,4BAA4B;EAC5B,+BAA+B;AACjC;AACA;CACC;AACD;;AAEA;CACC;EACC;CACD;CACA;EACC;CACD;AACD;AACA;CACC;EACC;CACD;CACA;EACC,WAAW;EACX,oCAAoC;EACpC,WAAW;EACX,kBAAkB;EAClB,sCAAsC;EACtC,8BAA8B;EAC9B;CACD;CACA;EACC,kCAAkC;EAClC;CACD;CACA;EACC,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX;CACD;AACD;AACA;CACC;EACC;CACD;CACA;EACC;CACD;CACA;EACC;CACD;AACD;AACA;CACC;EACC,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB;CACD;AACD;AACA;CACC;EACC,aAAa;EACb;CACD;AACD;AACA;CACC;EACC;CACD;AACD;AACA;CACC;GACE,8BAA8B;CAChC;EACC;;EAEA;CACD;GACE,8BAA8B;CAChC;EACC;;EAEA;CACD;GACE,8BAA8B;CAChC;EACC;;EAEA;CACD;GACE,iBAAiB;GACjB,kBAAkB;CACpB;CACA;GACE,aAAa;CACf;EACC;;EAEA;CACD;GACE,mBAAmB;CACrB;CACA;GACE,8BAA8B;CAChC;EACC;;EAEA;CACD;GACE,iBAAiB;GACjB,kBAAkB;CACpB;CACA;GACE,mBAAmB;CACrB;CACA;GACE,mBAAmB;GACnB,cAAc;GACd,gBAAgB;CAClB;CACA;GACE,8BAA8B;CAChC;CACA;GACE,mBAAmB;GACnB,kBAAkB;CACpB;CACA;GACE,8BAA8B;CAChC;EACC;;EAEA;CACD;GACE,iBAAiB;CACnB;EACC;;EAEA;CACD;GACE,iBAAiB;CACnB;CACA;GACE,8BAA8B;CAChC;EACC;;EAEA;CACD;GACE,iBAAiB;CACnB;EACC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');\n* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Quicksand', sans-serif\n}\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%\n}\nbody {\n\tfont-size: 12px;\n\tcolor: #424242\n}\n.mobilemenu {\n\tbackground-color: rgb(48, 71, 94);\n\tcolor: white !important;\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-weight: 600;\n\tfont-size: 20px;\n\tpadding: 10px;\n\tjustify-content: space-between\n}\n.navmobile {\n\tbackground-color: rgb(48, 71, 94);\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-weight: 600;\n\tfont-size: 14px;\n\ttext-transform: uppercase\n}\n.navlistmobile {\n\twidth: 60%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left\n}\n.navitemsmobile {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\ttext-align: right;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: white !important\n}\n.iconmenu a {\n\tdisplay: inline-block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tmin-width: 44px;\n\tmin-height: 44px;\n\tpadding: 0;\n\tmargin: 0;\n\tcolor: white !important\n}\n.navmobile a {\n\tdisplay: inline-block;\n\tpadding: 0.3em;\n\tmin-width: 44px;\n\tmin-height: 44px;\n\ttext-decoration: none\n}\n.nav {\n\tbackground-color: rgb(48, 71, 94);\n\twidth: 100%;\n\tdisplay: flex;\n\tfont-weight: 600;\n\tfont-size: 14px;\n\ttext-transform: uppercase\n}\n.navlist {\n\twidth: 80%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: right\n}\n.logo {\n\tmin-height:46px;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left;\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n}\n.navitems {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\ttext-align: right;\n\tline-height: 24px;\n\ttext-transform: uppercase\n}\n.nav a {\n\tdisplay: inline-block;\n\tpadding: 1.3em;\n\ttext-decoration: none;\n\tcolor: white !important\n}\n.nav a:hover {\n\ttext-decoration: none\n}\n.hero {\n\tdisplay: flex;\n\talign-items: center;\n\tmin-height: 250px;\n\twidth: 100%;\n\ttext-align: center;\n\tbackground-position: center;\n\tbackground-color: Black !important\n}\n.inner-hero {\n\tmargin: 0 auto;\n\tmax-width: 800px\n}\n.judul-hero {\n\tcolor: #fff;\n\tfont-weight: 600;\n\tfont-size: 36px;\n\ttext-shadow: 1px 1px #141414\n}\n.subjudul-hero {\n\tcolor: #fff;\n\tmargin-top: 16px;\n\tfont-size: 17px;\n\tfont-weight: 600;\n\ttext-shadow: 1px 1px #141414\n}\nmain {\n\twidth: 100%;\n\tmargin: 0 auto\n}\n.content {\n\tpadding: 32px\n}\n.main-title{\n\tpadding: 20px;\n\ttext-align: center; \n}\n.list {\n\tdisplay: grid;\n  \tgrid-template-columns: 1fr;\n \tmargin: 20px;\n  \tjustify-items: center;\n}\n.list_item {\n\tdisplay: grid;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tmax-width: 400px;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\tposition: relative\n}\n.Kota {\n\tposition: absolute;\n\ttop: 8px;\n\tleft: 20px;\n\tborder-radius: 5px;\n\tbackground-color: #ff5722\n  ;\n\tpadding: 5px 10px 5px;\n\tcolor: #fff;\n\tfont-weight: 400\n}\n.list_content {\n\tpadding: 12px\n}\n.list_thumbnail {\n\twidth: 100%;\n\tmax-height: 234px\n}\n.list_item_title {\n\tmargin-top: 5px;\n\ttransition: 0.5s opacity\n}\n.list_item_rating {\n\tmargin-top: 5px;\n\ttransition: 0.5s opacity\n}\n.list_item_title:hover {\n\tcolor: blue;\n}\n.list_item_title a {\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: inherit;\n\tmin-width: 44px;\n\tmin-height: 44px;\n}\n.list_item_title h1 {\n\tmin-width: 44px;\n\tmin-height: 44px;\t\n}\n.list_item_desc {\n\tmargin-top: -30px;\n\tfont-size: 12px;\n\tline-height: 1.5em\n}\n.restaurant-detail {\n\tdisplay: grid;\n\tmargin: 50px 120px;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n.restaurant-thumbnail {\n\tgrid-column-start: 1;\n\tgrid-column-end: 4;\n  }\n  \n.restaurant__name {\n\tmargin-bottom: 20px;\n}\n  \n.restaurant__description{\n\tmargin-top: 20px;\n\tgrid-column-start: 1;\n\tgrid-column-end: 7;\n}\n  \n.restaurant__description > h3{\n\tmargin-bottom: 10px;\n}\n  \n.customer-review {\n\tgrid-column-start: 1;\n\tgrid-column-end: 7;\n\ttext-align: center;\n\tpadding: 20px 0;\n}\n\n.review {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n}\n  \n.review-detail {\n\tmargin: 10px 20px;\n\tpadding: 20px;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tgrid-column: span 2;\n}\n  \n.review-main {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 7fr;\n\tmargin-bottom: 15px;\n}\n  \n.review-main > i {\n\tdisplay: grid;\n\tgrid-row-start: 1;\n\tgrid-row-end: 3;\n}\n  \n.review-main > p {\n\tgrid-column-start: 2;\n\tgrid-column-end: 3;\n}\n  \n.restaurant__info {\n\tmargin-left: 20px;\n\tgrid-column-start: 4;\n\tgrid-column-end: 7;\n}\n  \n.restaurant__info > p {\n\tmargin-top: 10px;\n}\n  \n.restaurant__info > h3 {\n\tmargin-top: 10px;\n}\n  \n.restaurant__poster {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tobject-fit: cover;\n}\n.like {\n\twidth: 55px;\n\theight: 55px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: #db0000;\n\t\n\tposition: fixed;\n\tbottom: 16px;\n\tright: 16px;\n\tborder-radius: 50%;\n\tborder: 0;\n\t\n\tfont-size: 18px;\n\tcolor: white;\n\tcursor: pointer; \n}\n#loading {\n\twidth: 2rem;\n\theight: 2rem;\n\tborder: 5px solid #f3f3f3;\n\tborder-top: 6px solid #9c41f2;\n\tborder-radius: 100%;\n\tmargin: auto;\n\tdisplay: none;\n\tanimation: spin 1s infinite linear;\n\tgrid-column: span 6;\n\tmargin: 100px;\n  }\n  #loading.display {\n\tdisplay: block;\n  }\n  .kosong-favorite{\n\tgrid-column-start: 1;\n\tgrid-column-end: 4;\n\ttext-align: center;\n  }\nfooter{\n\tbackground-color: rgb(48, 71, 94);\n\tcolor: white;\n\tfont-size: 14px;\n\tpadding: 2em;\n\twidth: 100%;\n\ttext-align: center;\n}\n  \nfooter > p {\n\tmargin: 16px;\n}\n.skip-link {\n  position: absolute;\n  top: -100px;\n  right: 0;\n  background-color: #464545;\n  color: white;\n  padding: 10px;\n  font-size: 20px;\n  z-index: 100;\n  text-decoration: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.skip-link:focus {\n\ttop: 100px\n}\n\n@media screen and (min-width: 500px) {\n\t.mobilemenu {\n\t\tdisplay: none\n\t}\n\t.navmobile {\n\t\tdisplay: none\n\t}\n}\n@media screen and (max-width: 499px) {\n\t.nav {\n\t\tdisplay: none\n\t}\n\t.navmobile {\n\t\tz-index: 10;\n\t\tbackground-color: rgb(252, 252, 252);\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\t-webkit-transform: translate(-100%, 0);\n\t\ttransform: translate(-100%, 0);\n\t\ttransition: transform 0.3s ease\n\t}\n\t.open {\n\t\t-webkit-transform: translate(0, 0);\n\t\ttransform: translate(0, 0)\n\t}\n\t.navitemsmobile {\n\t\tdisplay: list-item;\n\t\tcolor: black !important;\n\t\twidth: 100%;\n\t\ttext-align: left\n\t}\n}\n@media screen and (min-width: 650px) {\n\t.list_content {\n\t\tpadding: 16px 32px 32px 32px\n\t}\n\t.list_item_title {\n\t\tfont-size: 18px\n\t}\n\t.list_item_desc {\n\t\tfont-size: 14px\n\t}\n}\n@media screen and (min-width: 700px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-column-gap: 10px;\n\t\tgrid-row-gap: 16px\n\t}\n}\n@media screen and (min-width: 900px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr\n\t}\n}\n@media screen and (min-width: 1200px) {\n\tmain {\n\t\tmax-width: 1200px\n\t}\n}\n@media screen and (max-width: 1500px) {\n\t.review-main {\n\t  grid-template-columns: 1fr 5fr;\n\t}\n  }\n  \n  @media screen and (max-width: 1300px) {\n\t.review-main {\n\t  grid-template-columns: 1fr 4fr;\n\t}\n  }\n  \n  @media screen and (max-width: 1200px) {\n\t.review-main {\n\t  grid-template-columns: 3fr 8fr;\n\t}\n  }\n  \n  @media screen and (max-width: 1050px) {\n\t.restaurant-detail {\n\t  margin-left: 20px;\n\t  margin-right: 20px;\n\t}\n\t.review-detail {\n\t  margin: 0 5px;\n\t}\n  }\n  \n  @media screen and (max-width: 850px) {\n\t.review-detail {\n\t  grid-column: span 3;\n\t}\n\t.review-main {\n\t  grid-template-columns: 1fr 5fr;\n\t}\n  }\n  \n  @media screen and (max-width: 700px) {\n\t.restaurant-detail {\n\t  margin-left: 50px;\n\t  margin-right: 50px;\n\t}\n\t.restaurant-thumbnail{\n\t  grid-column: span 6;\n\t}\n\t.restaurant__info{\n\t  grid-column: span 6;\n\t  margin-left: 0;\n\t  margin-top: 20px;\n\t}\n\t.review-main{\n\t  grid-template-columns: 1fr 7fr;\n\t}\n\t.review-detail {\n\t  grid-column: span 6;\n\t  margin: 10px 100px;\n\t}\n\t.review-main {\n\t  grid-template-columns: 1fr 5fr;\n\t}\n  }\n  \n  @media screen and (max-width: 650px) {\n\t.review-detail {\n\t  margin: 10px 70px;\n\t}\n  }\n  \n  @media screen and (max-width: 600px) {\n\t.review-detail {\n\t  margin: 10px 50px;\n\t}\n\t.review-main {\n\t  grid-template-columns: 2fr 8fr;\n\t}\n  }\n  \n  @media screen and (max-width: 500px) {\n\t.review-detail {\n\t  margin: 10px 20px;\n\t}\n  }"],sourceRoot:""}]);const a=r},46:(n,t,A)=>{var i=A(379),e=A.n(i),C=A(795),r=A.n(C),a=A(569),o=A.n(a),d=A(565),p=A.n(d),l=A(216),s=A.n(l),m=A(589),g=A.n(m),x=A(756),B={};B.styleTagTransform=g(),B.setAttributes=p(),B.insert=o().bind(null,"head"),B.domAPI=r(),B.insertStyleElement=s(),e()(x.Z,B),x.Z&&x.Z.locals&&x.Z.locals}},A={};function i(n){var e=A[n];if(void 0!==e)return e.exports;var C=A[n]={id:n,exports:{}};return t[n](C,C.exports,i),C.exports}i.m=t,n=[],i.O=(t,A,e,C)=>{if(!A){var r=1/0;for(p=0;p<n.length;p++){for(var[A,e,C]=n[p],a=!0,o=0;o<A.length;o++)(!1&C||r>=C)&&Object.keys(i.O).every((n=>i.O[n](A[o])))?A.splice(o--,1):(a=!1,C<r&&(r=C));if(a){n.splice(p--,1);var d=e();void 0!==d&&(t=d)}}return t}C=C||0;for(var p=n.length;p>0&&n[p-1][2]>C;p--)n[p]=n[p-1];n[p]=[A,e,C]},i.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return i.d(t,{a:t}),t},i.d=(n,t)=>{for(var A in t)i.o(t,A)&&!i.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:t[A]})},i.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={209:0};i.O.j=t=>0===n[t];var t=(t,A)=>{var e,C,[r,a,o]=A,d=0;if(r.some((t=>0!==n[t]))){for(e in a)i.o(a,e)&&(i.m[e]=a[e]);if(o)var p=o(i)}for(t&&t(A);d<r.length;d++)C=r[d],i.o(n,C)&&n[C]&&n[C][0](),n[C]=0;return i.O(p)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(t.bind(null,0)),A.push=t.bind(null,A.push.bind(A))})(),i.nc=void 0;var e=i.O(void 0,[946,2,110,337,268],(()=>i(253)));e=i.O(e)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map