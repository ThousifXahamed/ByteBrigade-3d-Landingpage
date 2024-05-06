import { Code, Users, Heart, LucideIcon } from "lucide-react";

interface IInfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Learn Together",
        bodyText: "Join our community-driven coding club where you can learn from experienced mentors and collaborate with like-minded individuals.",
        icon: Users,
        id: 1
    },
    {
        title: "Hands-on Projects",
        bodyText: "Get involved in real-world projects and gain practical coding experience that will prepare you for your future career.",
        icon: Code,
        id: 2
    },
    {
        title: "Supportive Environment",
        bodyText: "Benefit from a supportive learning environment where you can ask questions, share ideas, and grow as a developer.",
        icon: Heart,
        id: 3
    }
];

export default infoCards;
