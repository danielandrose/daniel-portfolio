import Project1_img1 from "../imgs/AccPrevSys/img1.jpg"
import Project2_img2 from "../imgs/AccPrevSys/img2.jpg"

const proj2_img1 = new URL("../imgs/PlantsAndTreeInfo/proj2_img1.PNG", import.meta.url).href;
const proj2_img2 = new URL("../imgs/PlantsAndTreeInfo/proj2_img2.PNG", import.meta.url).href;
const proj2_img3 = new URL("../imgs/PlantsAndTreeInfo/proj2_img3.PNG", import.meta.url).href;
const proj2_img4 = new URL("../imgs/PlantsAndTreeInfo/proj2_img4.PNG", import.meta.url).href;
const proj2_img5 = new URL("../imgs/PlantsAndTreeInfo/proj2_img5.PNG", import.meta.url).href;
const proj2_img6 = new URL("../imgs/PlantsAndTreeInfo/proj2_img6.PNG", import.meta.url).href;

const proj1_img1 = new URL("../imgs/AccPrevSys/proj1_img1.PNG", import.meta.url).href;
const proj1_img2 = new URL("../imgs/AccPrevSys/proj1_img2.PNG", import.meta.url).href;
const proj1_img3 = new URL("../imgs/AccPrevSys/proj1_img3.PNG", import.meta.url).href;
const proj1_img4 = new URL("../imgs/AccPrevSys/proj1_img4.PNG", import.meta.url).href;

const Project1=[
    {url:proj1_img1,title:"AccPrevSys"},
    {url:proj1_img2,title:"AccPrevSys"},
    {url:proj1_img3,title:"AccPrevSys"},
    {url:proj1_img4,title:"AccPrevSys"},
]

const Project2=[
    {url:proj2_img1,title:"PlantsAndTreeInfo"},
    {url:proj2_img2,title:"PlantsAndTreeInfo"},
    {url:proj2_img3,title:"PlantsAndTreeInfo"},
    {url:proj2_img4,title:"PlantsAndTreeInfo"},
    {url:proj2_img5,title:"PlantsAndTreeInfo"},
    {url:proj2_img6,title:"PlantsAndTreeInfo"}
]

export {Project1,Project2}