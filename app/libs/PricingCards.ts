interface IPricingCard {
    price: number;
    title: string;
    benefits: string[];
    id: number;
    oneliner: string;
}

const pricingCards: IPricingCard[] = [
    {
        price: 0,
        title: "Byte Brigade Free",
        benefits: [
            "Access to community events and workshops",
            "Basic coding resources and tutorials",
            "Limited project collaboration opportunities",
        ],
        id: 1,
        oneliner: "Start your coding journey for free"
    },
    {
        price: 25,
        title: "Byte Brigade Premium",
        benefits: [
            "Full access to exclusive workshops and projects",
            "Advanced coding resources and mentorship",
            "Priority support and networking opportunities",
        ],
        id: 2,
        oneliner: "Take your coding skills to the next level"
    },
    {
        price: 50,
        title: "Byte Brigade Unlimited",
        benefits: [
            "Unlimited access to all workshops and projects",
            "Personalized coding mentorship and career guidance",
            "Exclusive networking events and job opportunities",
        ],
        id: 3,
        oneliner: "Unlock limitless possibilities in your coding journey"
    },
];

export default pricingCards;
