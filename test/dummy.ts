interface user {
    id: number,
    email: string
}

interface kitchen {
    userId: number
}

export const dummyUser: user = {
    id: 500,
    email: "dummy_test@example.com"
}

export const dummyKitchen: kitchen = {
    userId: dummyUser.id
}
