import { Document } from 'mongoose'

export interface EventCategory extends Document {
    id: string;
    title: string;
    link: string;
    description: string;
    layers: string
}