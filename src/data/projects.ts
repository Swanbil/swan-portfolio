export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    link?: string;
    reverse?: boolean;
}

export const projects: Project[] = [
    {
        id: "myplayground",
        title: "MyPlayground",
        description: "Web application centralizing all sports infrastructures in France. Many categories of playgrounds are available into MyPlayground: football, basketball, streetworkout...You can discover all of them by navigating into an interactive map.",
        images: ["./myplayground-2.png", "./myplayground-1.png", "./myplayground-3.png"],
        link: "https://my-playground.up.railway.app",
        reverse: true
    },
    {
        id: "dripko",
        title: "Dripko",
        description: "Web application centralizing all sports infrastructures in France. Many categories of playgrounds are available into MyPlayground: football, basketball, streetworkout...You can discover all of them by navigating into an interactive map.",
        images: ["./dripko-1.png", "./dripko-4.png", "./dripko-5.png"],
        reverse: false
    },
    {
        id: "todayout",
        title: "Todayout",
        description: "Web application centralizing all sports infrastructures in France. Many categories of playgrounds are available into MyPlayground: football, basketball, streetworkout...You can discover all of them by navigating into an interactive map.",
        images: ["./todayout-1.png", "./todayout-2.png", "./todayout-3.png"],
        reverse: true
    }
];
