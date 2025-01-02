import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
    // console.log(request)
    return NextResponse.json([
        {
            id: 1,
            employee: 'Marjan',
            age: 15,
            role: "Web Developer"
        },
        {
            id: 2,
            employee: 'Sufyan',
            age: 24,
            role: 'HR'
        },
        {
            id: 3,
            employee: 'Shazil',
            age: 20,
            role: 'Digital Marketer'
        },
        {
            id: 4,
            employee: 'Beenish',
            age: 19,
            role: 'Content Writer'
        },
        {
            id: 5,
            employee: 'Haris',
            age: 12,
            role: 'DevOps Engineer',
        },
    ]
)}