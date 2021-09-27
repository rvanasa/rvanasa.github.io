(this["webpackJsonpryanvandersmith.com"]=this["webpackJsonpryanvandersmith.com"]||[]).push([[0],{182:function(e,a,t){},183:function(e,a,t){},184:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(68),c=t.n(l),m=(t(89),t(13)),i=t(188),s=(t(90),t(11));function o(e){return r.a.createElement(r.a.Fragment,null,e.left&&r.a.createElement(s.a,{to:e.left.link,className:"position-absolute p-5 text-left text-white clickable fade-in",style:{left:0}},r.a.createElement("h3",null,e.left.name),r.a.createElement(i.c,{size:"2em"})),e.right&&r.a.createElement(s.a,{to:e.right.link,className:"position-absolute p-5 text-right text-white clickable fade-in",style:{right:0}},r.a.createElement("h3",null,e.right.name),r.a.createElement(i.d,{size:"2em"})),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center pivot",style:{height:"100vh",background:e.background||"#0003"}},r.a.createElement("div",{className:"text-center cursor-default"},r.a.createElement("hr",null),r.a.createElement("h1",{className:"display-2"},e.title&&("string"===typeof e.title?e.title:e.title.map((function(a,t){return r.a.createElement("span",{key:a,className:"blur delay-".concat(t*e.delay+1)},(t?" ":"")+a)})))),e.name&&r.a.createElement("h2",null,r.a.createElement("span",{className:"blur delay-4"},"Ryan "),r.a.createElement("span",{className:"blur delay-5"},"Vandersmith")),r.a.createElement("hr",null),e.caret&&r.a.createElement("div",{style:{opacity:.6}},r.a.createElement("div",{className:"fade-in",style:{animationDuration:"3s",paddingTop:"15vh"}},r.a.createElement(i.b,{size:"2em",style:{transform:"scaleX(1.5)"}}))))))}function u(e){var a=Object(m.f)().pathname;return r.a.createElement(s.a,{className:"clickable text-center ".concat(e.to===a?"text-info":"text-muted"),style:{color:e.color,background:e.background,flexGrow:1,flexBasis:0},to:e.to},r.a.createElement("h2",{className:"mb-0 p-3"},e.children))}function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-md-flex align-items-stretch justify-content-around flex-wrap",style:{background:"#181818F8"}},r.a.createElement(u,{to:"/story"},"Story"),r.a.createElement(u,{to:"/skills"},"Skills"),r.a.createElement(u,{to:"/projects"},"Projects"),r.a.createElement(u,{to:"/contact"},"Contact")),r.a.createElement("div",{className:"py-1 bg-info"}))}function g(){return r.a.createElement("div",{className:"bg-img",style:{backgroundImage:"url(img/clouds.jpg)"}},r.a.createElement(o,{title:["Ryan","Vandersmith"],delay:3,caret:!0,left:{name:"Contact",link:"/contact"},right:{name:"Story",link:"/story"}}),r.a.createElement(p,null))}var d=t(15);function E(e){return r.a.createElement("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.img,")"),backgroundColor:e.color}},r.a.createElement("div",{className:"h-100 mx-auto pt-4",style:{background:"rgba(0,0,0,.2)",maxWidth:"600px"}},r.a.createElement("div",null,e.heading)),e.children)}function h(e){return r.a.createElement("div",{className:"bg-warning px-4 py-3"},r.a.createElement("h4",{className:"float-right"},e.year),r.a.createElement("h5",{className:"mb-1"},e.month))}var y=t(190),v=t(189);function b(e){return r.a.createElement(v.a.Item,{className:"clickable",style:{transformOrigin:"left"},action:!0,onClick:function(){return e.url&&window.open(e.url)}},r.a.createElement("h4",{className:"my-1"},r.a.createElement("span",{className:"ml-2",style:{position:"relative",bottom:".1em"}},e.icon),r.a.createElement("span",{className:"ml-3 d-inline-block"},e.children)))}t(96);var f={opacity:.8};function x(){return r.a.createElement(b,{url:"https://natestgeorge.com/",icon:r.a.createElement("span",{style:f},r.a.createElement(i.z,null))},r.a.createElement("span",{style:f},"Nate St. George"))}var N={opacity:.8};function k(){return r.a.createElement(b,{url:"https://arxiv.org/search/cs?searchtype=author&query=Hammer%2C+M+A",icon:r.a.createElement("span",{style:N},r.a.createElement(i.z,null))},r.a.createElement("span",{style:N},"Dr. Matthew Hammer"))}var w={favorite:"Favorites",all:"Everything",website:"Webapps",competition:"Competitions",game:"Games",business:"Businesses",research:"Research"},S=[[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"December",year:"2020"}),r.a.createElement(E,{img:"img/projects/quantum-xylophone.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Quantum Xylophone"),r.a.createElement("h3",{className:"text-center"},"A musical quantum computer."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://ryanvandersmith.wordpress.com/2020/12/12/atls-3300-quantum-xylophone/",icon:r.a.createElement(i.db,null)},"Blog Post"),r.a.createElement(b,{url:"https://github.com/rvanasa/quantum-xylophone",icon:r.a.createElement(i.v,null)},"Source Code"))))}))},[]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"September",year:"2020"}),r.a.createElement(E,{img:"img/projects/elemental-x.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Elemental X"),r.a.createElement("h3",{className:"text-center"},"A revival of carykh's Elemental 3."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://ryanvandersmith.com/elemental-x/",icon:r.a.createElement(i.I,null)},"Play Online"),r.a.createElement(b,{url:"https://github.com/rvanasa/elemental-x",icon:r.a.createElement(i.v,null)},"Source Code"),r.a.createElement(b,{url:"https://www.youtube.com/watch?v=rQWwfYSUckY",icon:r.a.createElement(i.eb,null)},"Original Game"))))}))},[w.game]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"August",year:"2020"}),r.a.createElement(E,{img:"img/projects/elite-navigator.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Elite Navigator"),r.a.createElement("h3",{className:"text-center"},"An exploration tool for ",r.a.createElement("br",{className:"d-md-none"}),"Elite Dangerous."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://ryanvandersmith.com/elite-navigator/",icon:r.a.createElement(i.I,null)},"Online Webapp"),r.a.createElement(b,{url:"https://github.com/rvanasa/elite-navigator",icon:r.a.createElement(i.v,null)},"Source Code"),r.a.createElement(b,{url:"https://en.wikipedia.org/wiki/Elite_Dangerous",icon:r.a.createElement(i.D,null)},"Elite Dangerous"))))}))},[w.website,w.game]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"June",year:"2020"}),r.a.createElement(E,{img:"img/projects/antibody.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Deep-Antibody"),r.a.createElement("h3",{className:"text-center"},"Open-source mAb design resources."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://www.kaggle.com/rvanasa/monoclonal-antibodies",icon:r.a.createElement(i.B,null)},"Kaggle Dataset"),r.a.createElement(b,{url:"https://github.com/rvanasa/deep-antibody",icon:r.a.createElement(i.v,null)},"Research Notebooks"),r.a.createElement(b,{url:"https://ryanvandersmith.medium.com/monoclonal-antibodies-explained-the-first-treatment-for-covid-19-ce8485c23da1",icon:r.a.createElement(i.H,null)},"Background Information"))))}))},[w.research]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"May",year:"2020"}),r.a.createElement(E,{img:"img/projects/time-winder.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"The Time-Winder"),r.a.createElement("h3",{className:"text-center"},"A wacky abstract time puzzle."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://ryanvandersmith.com/time-winder/",icon:r.a.createElement(i.L,null)},"Play Online"),r.a.createElement(b,{url:"https://github.com/rvanasa/time-winder",icon:r.a.createElement(i.v,null)},"Source Code"))))}))},[]],[function(e){return r.a.createElement("div",{className:"bg-dark"},r.a.createElement(h,{month:"March",year:"2020"}),r.a.createElement(E,{img:"img/projects/rimcities.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"RimCities"),r.a.createElement("h3",{className:"text-center"},"A procedural city generator."),r.a.createElement("h4",{className:"text-center text-warning mt-4 py-2",style:{background:"#0005"}},"Over 100,000 subscribers on Steam"),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://steamcommunity.com/sharedfiles/filedetails/?id=1775170117",icon:r.a.createElement(i.X,null)},"Steam Workshop"),r.a.createElement(b,{url:"https://www.reddit.com/r/RimWorld/comments/c2odfh/10_rimcities_beta_release_procedural_city_map/",icon:r.a.createElement(i.O,null)},"Announcement Thread"),r.a.createElement(b,{url:"https://github.com/rvanasa/rimworld-cities",icon:r.a.createElement(i.v,null)},"Source Code"),r.a.createElement(b,{url:"https://store.steampowered.com/app/294100/RimWorld/",icon:r.a.createElement(i.D,null)},"RimWorld"))))}))},[w.favorite,w.game]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"February",year:"2020"}),r.a.createElement("div",null,r.a.createElement(E,{img:"img/projects/cold-space.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Cold Space"),r.a.createElement("h3",{className:"text-center"},"An online narrative experience."),r.a.createElement("hr",null),r.a.createElement("div",{style:{background:"#11152288"}},r.a.createElement("div",{className:"text-center",style:{height:"50vh"}},r.a.createElement("a",{href:"https://ryanvandersmith.com/cold-space",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.a,{variant:"outline-light rounded-circle clickable cold-space-planet"}))),r.a.createElement("div",{style:{opacity:.5}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://github.com/rvanasa/cold-space",icon:r.a.createElement(i.v,null)},"Source Code")))))})))},[]],[function(e){return r.a.createElement("div",{className:"bg-success"},r.a.createElement(h,{month:"October",year:"2019"}),r.a.createElement(E,{img:"img/projects/polymorph.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Polymorph"),r.a.createElement("h3",{className:"text-center"},"A powerful universal data structure based on abstract algebra."),r.a.createElement("hr",null))},r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://medium.com/@ryanvandersmith/semantic-polymorphism-explaining-abstract-concepts-using-buttons-tape-and-string-12e674949942?source=friends_link&sk=438556c384ff5690279c69cee7375618",icon:r.a.createElement(i.H,null)},"Explaining Semantic Polymorphism with Buttons and String"),r.a.createElement(b,{url:"https://colab.research.google.com/drive/1ik4qjJugiQ-C_FWRCHPPllADZuxWsMHS",icon:r.a.createElement(i.M,null)},"Semantic Polymorphism in a Free Commutative Magma over \u2115")))))},[w.favorite,w.research]],[function(e){return r.a.createElement("div",{style:{background:"black"}},r.a.createElement(h,{month:"March",year:"2019"}),r.a.createElement(E,{img:"img/projects/vekta.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"VEKTA"),r.a.createElement("h3",{className:"text-center"},"Retro procedural space exploration."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{opacity:.6}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://github.com/rvanasa/vekta",icon:r.a.createElement(i.v,null)},"Source Code"),r.a.createElement(x,null))))}))},[w.game]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"February",year:"2019"}),r.a.createElement(E,{img:"img/projects/redcoats.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Cranky Redcoats"),r.a.createElement("h3",{className:"text-center"},'A physics-based, "historically accurate" British colonization simulator.'),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://rvanasa.itch.io/cranky-redcoats",icon:r.a.createElement(i.L,null)},"Play Online"))))}))},[w.favorite,w.game]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"September",year:"2018"}),r.a.createElement(E,{img:"img/projects/pure.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-2 pt-4",style:{background:"#0002"}},r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Platform Pure"),r.a.createElement("h3",{className:"text-center"},"A peer-to-peer education initiative."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5 pb-3"},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://platformpure.herokuapp.com",icon:r.a.createElement(i.I,null)},"Progressive Web Application"),r.a.createElement(b,{url:"https://github.com/rvanasa/pure-webapp",icon:r.a.createElement(i.v,null)},"Source Code")))))},r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement("div",{style:{background:"#0004"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://medium.com/platform-pure/lets-change-learning-an-educational-paradigm-for-gen-alpha-and-beyond-31fc48c89c4e",icon:r.a.createElement(i.H,null)},"Let's Change Learning - An Educational Paradigm"))))))},[w.website]],[function(e){return r.a.createElement("div",{className:"bg-primary",style:{background:"black"}},r.a.createElement(h,{month:"May",year:"2018"}),r.a.createElement(E,{img:"img/projects/funqy.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"FunQy"),r.a.createElement("h3",{className:"text-center"},"A high-level quantum/classical programming language."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5 pb-3",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://funqy.herokuapp.com",icon:r.a.createElement(i.Z,null)},"Online Interpreter"),r.a.createElement(b,{url:"https://github.com/rvanasa/funqy",icon:r.a.createElement(i.v,null)},"Source Code"))))},r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://medium.com/@ryanvandersmith/how-to-make-quantum-mechanics-contradict-itself-using-ibm-q-experience-d4ac4c8ce1da",icon:r.a.createElement(i.H,null)},"FunQy implementation of the Frauchiger-Renner Paradox")),r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://www.reddit.com/r/QuantumComputing/comments/aiq0j9/i_used_my_quantum_programming_language_to/",icon:r.a.createElement(i.O,null)},"Frauchiger-Renner Paradox Follow-up Discussion")))))},[w.favorite,w.research]],[function(e){return r.a.createElement("div",{className:"bg-primary",style:{background:"black"}},r.a.createElement(h,{month:"March",year:"2018"}),r.a.createElement(E,{img:"img/projects/fungi.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Human-Fungi Interface"),r.a.createElement("h3",{className:"text-center"},"The official web interface for the Fungi programming language."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5 pb-3",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://fungi-lang.herokuapp.com",icon:r.a.createElement(i.Z,null)},"Online Interpreter"),r.a.createElement(b,{url:"https://github.com/Adapton/fungi",icon:r.a.createElement(i.v,null)},"Source Code"))))},r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://arxiv.org/pdf/1808.07826.pdf",icon:r.a.createElement(i.g,null)},"Typed Incremental Computation with Names"),r.a.createElement(k,null)))))},[w.favorite,w.competition,w.research]],[function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{month:"October",year:"2017"}),r.a.createElement(E,{img:"img/projects/plexa.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Plexa Tech"),r.a.createElement("h3",{className:"text-center"},"Decentralized software consulting."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://plexatech.github.io/",icon:r.a.createElement(i.I,null)},"Promotional Site")),r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://www.linkedin.com/company/plexa-technologies",icon:r.a.createElement(i.E,null)},"LinkedIn Page"))))}))},[w.favorite,w.business]],[function(e){return r.a.createElement("div",{className:"bg-info"},r.a.createElement(h,{month:"August",year:"2017"}),r.a.createElement(E,{img:"img/projects/storytime.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Storytime"),r.a.createElement("h3",{className:"text-center"},"A procedural choose-your-own-adventure platform."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://ryanvandersmith.com/storytime",icon:r.a.createElement(i.L,null)},"Play Online"),r.a.createElement(b,{url:"https://github.com/rvanasa/storytime",icon:r.a.createElement(i.v,null)},"Source Code"),r.a.createElement(x,null))))}))},[w.game]],[function(e){return r.a.createElement("div",{style:{background:"white"}},r.a.createElement(h,{month:"July",year:"2017"}),r.a.createElement(E,{img:"img/projects/skiing.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center"},"Super Skiing"),r.a.createElement("h3",{className:"text-center"},"Skiing, but you have to individually control each ski."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://rvanasa.itch.io/super-skiing",icon:r.a.createElement(i.L,null)},"Play Online"),r.a.createElement(b,{url:"https://github.com/rvanasa/super-skiing",icon:r.a.createElement(i.v,null)},"Source Code"),r.a.createElement(x,null))))}))},[w.favorite,w.game]],[function(e){return r.a.createElement("div",{className:"bg-light"},r.a.createElement(h,{month:"March",year:"2017"}),r.a.createElement(E,{img:"img/projects/deltafund.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-2 pt-3",style:{background:"#0008"}},r.a.createElement("h2",{className:"display-4 text-center mt-4"},"DeltaFund"),r.a.createElement("h3",{className:"text-center"},"An intuitive fundraiser platform."),r.a.createElement("h4",{className:"text-center text-warning mt-4"},"First Place: Mobile App Development"),r.a.createElement("h4",{className:"text-center text-warning"},"CO FBLA State Leadership Conference"),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://deltafund.herokuapp.com",icon:r.a.createElement(i.I,null)},"Responsive Webapp"),r.a.createElement(b,{url:"https://docs.google.com/presentation/d/1ty6qrE348FkL126NG2MONc0FIyPSGYtp5S_-3qDoa-s/edit?usp=sharing",icon:r.a.createElement(i.j,null)},"COSLC Presentation")))))}))},[w.website,w.competition]],[function(e){return r.a.createElement("div",{style:{background:"#000"}},r.a.createElement(h,{month:"February",year:"2017"}),r.a.createElement(E,{img:"img/projects/fastcode.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pt-5",style:{background:"#0008"}},r.a.createElement("h2",{className:"display-4 text-center mt-4"},"FastCode"),r.a.createElement("h3",{className:"text-center"},"The official attendance system for the CO FBLA State Leadership Conference."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://fastcode.herokuapp.com",icon:r.a.createElement(i.I,null)},"Responsive Webapp")))))}))},[w.business,w.website]],[function(e){return r.a.createElement("div",{className:"bg-primary"},r.a.createElement(h,{month:"Academic Year",year:"2016"}),r.a.createElement(E,{img:"img/projects/sio.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-2 py-4",style:{background:"#0006"}},r.a.createElement("h2",{className:"display-4 text-center mt-4"},"School in One"),r.a.createElement("h3",{className:"text-center"},"Verizon Innovative App Challenge 2016"),r.a.createElement("h4",{className:"text-center text-warning mt-4"},"Best in State, Best in Region (national finalist)"),r.a.createElement("h4",{className:"text-center text-warning"},"Awarded $5,000 technology department grant")),r.a.createElement("hr",null),r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{className:"embed-responsive-item",src:"https://www.youtube.com/embed/AFoM32Ztl74",title:"School in One",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("hr",null),r.a.createElement("div",{className:"container",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://www.dcsdk12.org/about/our_district/news_archive/rock_canyon_wins_in_verizon_app_challenge",icon:r.a.createElement(i.K,null)},"DCSD News Article"),r.a.createElement(b,{url:"https://www.9news.com/article/news/education/local-students-create-award-winning-homework-app/73-282472330",icon:r.a.createElement(i.K,null)},"9NEWS Article"))))}))},[w.favorite,w.website,w.competition]],[function(e){return r.a.createElement("div",{className:"bg-light"},r.a.createElement(h,{month:"September",year:"2016"}),r.a.createElement(E,{img:"img/projects/webstar.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-2 pt-3",style:{background:"#0008"}},r.a.createElement("h2",{className:"display-4 text-center mt-4"},"WebStar"),r.a.createElement("h3",{className:"text-center"},"Hands-on software design mentoring."),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://ryanvandersmith.com/webstar/",icon:r.a.createElement(i.I,null)},"Promotional Website")))))}))},[w.favorite,w.business,w.website]],[function(e){return r.a.createElement("div",{style:{background:"black"}},r.a.createElement(h,{month:"February",year:"2016"}),r.a.createElement(E,{img:"img/projects/outstrung.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Outstrung"),r.a.createElement("h3",{className:"text-center"},"A challenging sci-fi adventure."),r.a.createElement("h4",{className:"text-center text-warning mt-4"},"Second Place: Game & Simulation Programming"),r.a.createElement("h4",{className:"text-center text-warning"},"CO FBLA State Leadership Conference"),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://drive.google.com/open?id=1RLkOkfjac29wgKaVXv26muWLIWLoK52u",icon:r.a.createElement(i.q,null)},"Download"),r.a.createElement(b,{url:"https://docs.google.com/presentation/d/1wnDIUyC5yEeWhtVdDE7q0ssHiriZ-kLUANFezfq602k/edit?usp=sharing",icon:r.a.createElement(i.j,null)},"COSLC Presentation"))))}))},[w.competition,w.game]],[function(e){return r.a.createElement("div",{style:{background:"black"}},r.a.createElement(h,{month:"May",year:"2015"}),r.a.createElement(E,{img:"img/projects/furry-friends.jpg",heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mx-2 py-4",style:{background:"#0006"}},r.a.createElement("h2",{className:"display-4 text-center mt-4"},"Furry Friends"),r.a.createElement("h3",{className:"text-center"},"A helpful software suite for animal shelter management."),r.a.createElement("h4",{className:"text-center text-warning mt-4"},"Top 10 Finalist: Desktop Application Programming"),r.a.createElement("h4",{className:"text-center text-warning"},"FBLA National Leadership Conference")),r.a.createElement("hr",null),r.a.createElement("div",{className:"container pt-5",style:{maxWidth:"60em"}},r.a.createElement(v.a,{variant:"flush"},r.a.createElement(b,{url:"https://docs.google.com/presentation/d/1MNfi5BtC4YjQZyDckBNZW3XJnIFU8yB8DxTS62XEB_Y/edit?usp=sharing",icon:r.a.createElement(i.j,null)},"USNLC Presentation"))))}))},[w.favorite,w.competition]]];function j(){var e=Object(n.useState)(w.favorite),a=Object(d.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-img",style:{backgroundImage:"url(img/abstract.jpg)"}},r.a.createElement(o,{title:["Timeline","Portfolio"],name:!0,caret:!0,background:"#0003",left:{name:"Skills",link:"/skills"},right:{name:"Contact",link:"/contact"}}),r.a.createElement("div",{className:"divider bg-light"}),r.a.createElement("div",{style:{background:"#111E"}},r.a.createElement("div",{className:"container-lg d-md-flex text-center flex-wrap"},Object.values(w).map((function(e){return r.a.createElement("div",{key:e,className:"h5 flex-grow-1 clickable m-0 py-4 py-md-5 ".concat(e===t?"text-success font-weight-bold":""),style:e===t?{background:"#0002"}:{},onClick:function(){return l(e)}},e)}))))),S.map((function(e,a){var n=Object(d.a)(e,2),l=n[0],c=n[1];return(t===w.all||c.includes(t))&&r.a.createElement("div",{key:a,className:"flex-grow-1 h-100"},r.a.createElement(l))})),r.a.createElement(p,null))}var C=t(82),A=t(32),F=t.n(A),W=[{name:"Childhood",style:"bg-primary text-white",items:[{icon:i.l,text:"Designed intricate toy train systems at a very young age"},{icon:i.r,text:"Expertise in building high-fidelity cardboard box forts"},{icon:i.h,text:"Family-accredited LEGO set designer and optimizer"}]},{name:"Development",style:"bg-info text-white",items:[{icon:i.o,text:"Became proficient in Lua in 3rd grade"},{icon:i.n,text:"Became proficient in Java in 5th grade"},{icon:i.C,text:"Quickly adopted Python, C#, JS/CSS/HTML5, Rust"}]},{name:"Career",style:"bg-success text-white",items:[{icon:i.W,text:"<b>6 years</b> as a freelance consultant (full-stack web development)"},{icon:i.Y,text:"<b>4 years</b> interning at Douglas County School District (senior level)"},{icon:i.F,text:"Designed ArcGIS REST services and full-stack applications"},{icon:i.bb,text:"Provided mentorship and guidance to intern teams"}]},{name:"Today",style:"bg-dark",items:[{icon:i.I,iconClass:"text-success",text:"<b>Progressive Web App</b> development",footnote:"React, Bootstrap, Sass, Node.js, Express, Webpack, Workbox, MongoDB, PostgreSQL"},{icon:i.w,iconClass:"text-info",text:"Agile & modern software engineering",footnote:"Lean development, Git, continuous integration, release management, virtualization"},{icon:i.k,iconClass:"text-muted",text:"Business process <b>design</b> & <b>optimization</b>",footnote:"Technical background with entrepreneurial perspective"},{icon:i.m,iconClass:"text-warning",text:"Modern <b>multi-paradigm</b> languages & frameworks",footnote:"Strong background in Rust and high-performance functional programming"},{icon:i.V,iconClass:"text-danger",text:"Communicating to <b>technical</b> & <b>business</b> audiences",footnote:"(Probably worth emphasizing)"}]}];function P(){return r.a.createElement("div",{className:"bg-img",style:{backgroundImage:"url(img/stairs.jpg)"}},r.a.createElement(o,{title:["A","Story"],name:!0,caret:!0,background:"#0003",left:{name:"Home",link:"/"},right:{name:"Skills",link:"/skills"}}),r.a.createElement("div",{className:"divider bg-info"}),r.a.createElement(F.a,null,r.a.createElement("div",{className:"d-flex flex-column",style:{height:"100vh"}},r.a.createElement("div",{className:"py-4",style:{background:"#000B"}},r.a.createElement("hr",null),r.a.createElement("h1",{className:"text-center text-thin text-glow"},"Let's start from the beginning."),r.a.createElement("hr",null)),r.a.createElement("div",{className:"flex-grow-1",style:{background:"url(img/baby.jpg) center 20%",backgroundSize:"cover"}}))),r.a.createElement("div",{style:{opacity:.95}},W.map((function(e){return r.a.createElement(F.a,{key:e.name},r.a.createElement("div",{className:"container py-5 text-center text-lg-left ".concat(e.style)},r.a.createElement("h1",{className:"text-thin px-4 mb-3"},e.name),r.a.createElement(v.a,{variant:"flush",className:"noselect"},e.items.map((function(e){return r.a.createElement(C.a,{key:e.text},r.a.createElement("div",{className:"w-100"},r.a.createElement("h3",{className:"text-thin pt-2 d-inline"},r.a.createElement("span",{className:"my-2 my-lg-0 pr-3 mx-auto mx-lg-0 d-block d-lg-inline ".concat(e.iconClass)},r.a.createElement(e.icon,null)),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.text}})),r.a.createElement("h5",{className:"text-muted ml-lg-5 mt-3 mt-md-0"},e.footnote)))})))))}))),r.a.createElement(F.a,null,r.a.createElement(p,null)))}var L=t(31);t(182);var D=function e(a){var t=a.tree,l=a.parent,c=Object(n.useState)(t.toggle||!1),m=Object(d.a)(c,2),s=m[0],o=m[1];return"string"===typeof t&&(t={name:t}),Array.isArray(t)?r.a.createElement("div",null,t.map((function(t,n){return r.a.createElement("div",{key:n,style:{paddingLeft:"2em"}},r.a.createElement("div",{className:"px-2"},r.a.createElement(e,{tree:t,parent:l,onToggle:a.onToggle})))}))):r.a.createElement("div",{className:"skill ".concat(s?"toggled":""," ").concat(t.parts?"parent":""," ").concat(t.className||""),style:Object(L.a)({},t.style)},r.a.createElement("h5",{className:"text-thin pt-0 pb-2 noselect d-flex align-items-center",style:{cursor:"pointer",opacity:t.parts?s?.9:.5:1},onMouseDown:function(e){e.stopPropagation(),o(s=!s),t.parts||a.onToggle(t,s)}},r.a.createElement("span",{className:"my-2 my-lg-0 pl-2 pr-3 mx-auto mx-lg-0 ".concat(t.iconClass," ").concat(s&&!t.parts?"text-info":"text-light")},t.parts&&r.a.createElement(i.i,{className:"mb-1 mr-1",style:{marginLeft:"-1em",opacity:.5,transform:!s&&"rotate(90deg)"}}),r.a.createElement(t.icon||(t.parts?i.u:i.t),{className:"mb-1"})),r.a.createElement("span",{className:"flex-grow-1"},t.name)),!s&&t.parts&&r.a.createElement("div",{className:"mt-2"},r.a.createElement(e,{tree:t.parts,parent:t,onToggle:a.onToggle})))},B=t(186),O=t(187),T=[{name:"Technologies",icon:i.m,parts:[{name:"HTML5",toggle:!0,parts:[{name:"Frameworks & Tools",parts:[{name:"React"},{name:"AngularJS"},{name:"Webpack"},{name:"Workbox"}]},{name:"Layout & Style",parts:[{name:"Bootstrap"},{name:"Material Design"},{name:"Sass"}]},{name:"Misc.",parts:[{name:"TypeScript"},{name:"WebAssembly (Rust)"},{name:"WebRTC"},{name:"GraphQL"}]}]},{name:"Node.js",toggle:!0,parts:[{name:"Server",parts:[{name:"Express"},{name:"Socket.io"},{name:"Passport"}]},{name:"Database",parts:[{name:"MongoDB"},{name:"PostgreSQL"},{name:"GraphQL"}]},{name:"Integrations",parts:[{name:"Google APIs"},{name:"Universal Analytics"},{name:"Braintree"}]},{name:"Testing",parts:[{name:"Jest"},{name:"Mocha"}]},{name:"Misc.",parts:[{name:"TensorFlow.js"},{name:"Lighthouse"},{name:"LibP2P"},{name:"Ethereum"}]}]},{name:"Python",toggle:!0,parts:[{name:"Deep Learning",parts:[{name:"Models",parts:[{name:"Keras"},{name:"TensorFlow"},{name:"Transformers"},{name:"GPT-2"},{name:"BERT"}]}]},{name:"Natural Language Processing",parts:[{name:"NLTK"},{name:"SpaCy"},{name:"NeuralCoref"}]},{name:"Platforms",parts:[{name:"Apache Airflow"},{name:"Jupyter / Colab"},{name:"Anaconda"}]},{name:"Misc.",parts:[{name:"Pandas"},{name:"Astropy"},{name:"Scrapy"}]}]},{name:"Rust",toggle:!0,parts:[{name:"Networking",parts:[{name:"Tokio"},{name:"Serde"}]},{name:"Platforms",parts:[{name:"WASM-Bindgen"},{name:"x86_64"}]},{name:"Misc.",parts:[{name:"Nom"},{name:"Adapton"}]}]},{name:"Infrastructure",toggle:!0,parts:[{name:"Hosting",parts:[{name:"AWS"},{name:"Google Cloud"},{name:"Heroku"}]},{name:"Misc.",parts:[{name:"Cloudflare"},{name:"Docker"},{name:"Vagrant"},{name:"Jenkins"}]}]}]},{name:"Work Experience",icon:i.P,parts:[{name:"Freelance Consulting",toggle:!0,parts:[{name:"2017 - 2020",parts:[{name:"Progressive Web Apps"},{name:"SEO & landing pages"},{name:"Full-stack and UX design"}]},{name:"2016 - 2017",parts:[{name:"Full-stack webapps"},{name:"Decentralized applications"},{name:"Software mentoring"}]},{name:"Highlighted Clients",parts:[{name:"FBLA Colorado Chapter"},{name:"Galway Aviation"}]}]},{name:"University of Colorado Boulder",toggle:!0,parts:[{name:"2018",parts:[{name:"Language design"},{name:"Full-stack webapp"},{name:"WebAssembly (Rust)"}]}]},{name:"Douglas County School District",toggle:!0,parts:[{name:"Summers 2014-2017",parts:[{name:"Agile / Scrum"},{name:"Angular 2"},{name:"Vue.js"},{name:"MySQL & SQL Server"},{name:"REST Integrations"},{name:"ArcGIS"},{name:"Drupal"}]}]}]},{name:"Achievements",icon:i.G,parts:[{name:"Scholarships",icon:i.g,toggle:!0,parts:[{name:"2017-2022: Boettcher Scholar",icon:i.x},{name:"2017: CSM PATHS Scholar",icon:i.A},{name:"2017: National AP Scholar",icon:i.T}]},{name:"Grants",icon:i.J,toggle:!0,parts:[{name:"2016: Verizon App Challenge ($5,000)",icon:i.e},{name:"2015: SIM Sponsorship (FBLA Nationals)",icon:i.J}]},{name:"Rock Canyon High School",icon:i.y,toggle:!0,parts:[{name:"Wall of Honor (Academics)",icon:i.cb},{name:"Wall of Honor (Activities)",icon:i.cb},{name:"Highest Academic Honors",icon:i.R},{name:"Outstanding Technology Student 2013-2014",icon:i.N}]},{name:"Future Business Leaders of America",icon:i.Q,toggle:!0,parts:[{name:"2017 FBLA State Conference",icon:i.I,parts:[{name:"1st place: Mobile App Development"},{name:"1st place: Cyber Security"}]},{name:"2016 Verizon App Challenge",icon:i.f,parts:[{name:"Best in Region (U.S. West)"},{name:"Best in State (Colorado)"}]},{name:"2016 FBLA State Conference",icon:i.I,parts:[{name:"2nd place: Game & Simulation Design"}]},{name:"2015 FBLA National Conference",icon:i.p,parts:[{name:"Top 10: Desktop App Development"}]},{name:"2015 FBLA State Conference",icon:i.p,parts:[{name:"1st place: Desktop App Development"}]}]},{name:"Misc.",icon:i.a,toggle:!0,parts:[{name:"2013: Second Degree Black Belt",icon:i.S}]}]}];function I(e){var a=Object(n.useState)(new Set),t=Object(d.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:"bg-img",style:{backgroundImage:"url(img/city.jpg)"}},r.a.createElement(o,{title:["Skills","&","Achievements"],name:!0,caret:!0,left:{name:"Story",link:"/story"},right:{name:"Projects",link:"/projects"}}),r.a.createElement("div",{className:"divider bg-warning"}),r.a.createElement("div",{style:{background:"#181818F5"}},r.a.createElement(B.a,null,r.a.createElement(O.a,{md:3}),r.a.createElement(O.a,{md:6},r.a.createElement("div",{className:"pt-5 pb-4"},r.a.createElement(D,{tree:T,onToggle:function(e,a){l=new Set(l),a?l.add(e):l.delete(e),c(l)}}))),r.a.createElement(O.a,{md:3})),r.a.createElement(p,null)),r.a.createElement("div",{className:"position-fixed clickable-subtle skill-checkout ".concat(l.size?"enabled":""),style:{right:0,bottom:0}},r.a.createElement(s.a,{to:"/contact"},r.a.createElement("div",{className:"p-4 bg-info text-white rounded-left",style:{opacity:.9}},r.a.createElement("h5",{className:"mb-0"},r.a.createElement(i.U,{className:"mr-3 mb-1 small"}),"Proceed to Checkout")))))}function M(e){var a=Object(m.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[a]),e.children}var R=[{icon:i.v,color:"danger",link:"https://github.com/rvanasa",style:{opacity:.7}},{icon:i.ab,color:"info",link:"https://twitter.com/rvandersmith",style:{opacity:.8}},{icon:i.s,color:"success",link:"mailto:ryanvandersmith@gmail.com"},{icon:i.E,color:"primary",link:"https://www.linkedin.com/in/ryan-vandersmith-b59135101/"},{icon:i.H,color:"light",link:"https://medium.com/@ryanvandersmith",style:{opacity:.8}}];function _(){return r.a.createElement("div",{className:"story-page py-4",style:{background:"#0005"}},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{style:{width:"80%",maxWidth:"450px"},src:"img/profile.jpg",alt:""})),r.a.createElement("div",{className:"text-center px-5"},r.a.createElement("hr",null),r.a.createElement("h1",{className:"text-thin text-light py-2"},"Ryan Vandersmith"),r.a.createElement("div",{className:"container"},R.map((function(e){return r.a.createElement("a",{key:e.link,className:"btn btn-lg px-3 py-3 mb-3 mx-2 btn-outline-".concat(e.color||"dark"," text-").concat(e.color||"dark"),style:Object(L.a)({borderRadius:"50% !important"},e.style),href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(e.icon,{size:"1.5em"}))}))),r.a.createElement("hr",{className:"mt-5"})))}function H(){return r.a.createElement("div",{className:"bg-img",style:{backgroundImage:"url(img/plane.jpg)"}},r.a.createElement(o,{title:["Let's","get","in","touch."],caret:!0,background:"#0003",left:{name:"Projects",link:"/projects"},right:{name:"Home",link:"/"}}),r.a.createElement("div",{className:"divider bg-success"}),r.a.createElement("div",{style:{background:"#000A"}},r.a.createElement(_,null)),r.a.createElement(p,null))}t(183);var z=t(80),G=Object(z.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(m.b,{history:G},r.a.createElement(M,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(m.a,{path:"/story"},r.a.createElement(P,null)),r.a.createElement(m.a,{path:"/skills"},r.a.createElement(I,null)),r.a.createElement(m.a,{path:"/projects"},r.a.createElement(j,null)),r.a.createElement(m.a,{path:"/contact"},r.a.createElement(H,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,a,t){e.exports=t(184)},89:function(e,a,t){},90:function(e,a,t){},96:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.01a46371.chunk.js.map