export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    link?: string;
    reverse?: boolean;
    stacks?: string[];
    color: string
}

export const projects: Project[] = [
    {
        id: "myplayground",
        title: "MyPlayground",
        description: "Web application centralizing all sports infrastructures in France. Many categories of playgrounds are available into MyPlayground: football, basketball, streetworkout...You can discover all of them by navigating into an interactive map.",
        images: ["./myplayground-2.png", "./myplayground-1.png", "./myplayground-3.png"],
        link: "https://my-playground.up.railway.app",
        reverse: true,
        stacks: ["AdonisJS", "InertiaJS", "React", "Docker", "Postgresql", "Redis"],
        color: "blue"
    },
    {
        id: "dripko",
        title: "Dripko",
        description: "Dripko is a social streetwear platform which put forward independant french streetwear brands. You can find the last items of the trending independant brands to improve your style ! ",
        images: ["./dripko-1.png", "./dripko-4.png", "./dripko-5.png"],
        reverse: false,
        stacks: ["AdonisJS", "InertiaJS", "React", "Docker", "Postgresql"],
        color: "orange"
    },
    {
        id: "todayout",
        title: "Todayout",
        description: "Find your perfect outing for the day, tailored to your current mood. ToDayOut offers a multitude of events near to you in Paris. Whether you are passionate about cinema, parties, culture or concerts, Todayout centralizes a multitude of options to entertain you and inspire you to get out of the house.",
        images: ["./todayout-1.png", "./todayout-2.png", "./todayout-3.png"],
        reverse: true,
        stacks: ["AdonisJS", "InertiaJS", "React", "Docker", "Postgresql"],
        color: "violet"
    }
];
